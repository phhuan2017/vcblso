/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnectionUser;
import Domain.VCBDomain;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONObject;
import util.ErrCode;
import util.PostDataParameter;

/**
 *
 * @author adminadLSO
 */
public class themQuaKhuyenMaiDaNhanServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PostDataParameter pdp = new PostDataParameter(request.getReader());
        String param_cif = pdp.getParameter("cif").trim();
        String param_quaId = pdp.getParameter("quaId").trim();
        int quaId = param_quaId.length() > 0 ? Integer.parseInt(param_quaId):0;
        String param_soLuongQua= pdp.getParameter("soLuongQua").trim();
        int soLuongQua = param_soLuongQua.length() > 0 ? Integer.parseInt(param_soLuongQua) : 0;
        String param_nguoi= pdp.getParameter("nguoi").trim();        
        int nguoi = param_nguoi.length() > 0 ? Integer.parseInt(param_nguoi) : 0;
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        VCBDomain vcb = new VCBDomain(conn);
        try {
            if(quaId == -1){
                System.out.println("alo"+ quaId);
                System.out.println("alo"+ param_cif);
                returnCode = vcb.capNhatQuaKhuyenMaiDaNhanDomain(param_cif,nguoi);
            }else{
                returnCode = vcb.themQuaKhuyenMaiDaNhanDomain(param_cif,quaId,soLuongQua,nguoi);
            }
            
       
            DBConnectionUser.closeDB(conn);
        } catch (Exception e) {
            DBConnectionUser.closeDB(conn);
            returnCode=ErrCode.ResponseCode.EXCEPTION_ERROR;
            e.printStackTrace();
        }
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            JSONObject myObj = new JSONObject();           
            myObj.put("success", true);    
            myObj.put("ResponseCode", returnCode);
            myObj.put("ResponseName", ErrCode.convert(returnCode));
//            System.out.println("myObj them nguoi dung : " + myObj);
            out.println(myObj.toString());
        } 
        catch(Exception ex)
        {
            String json = "{success: false, ResponseCode: 99, ResponseName: 'Lỗi không xác định'}";
            out.println(json);
        }
        finally {            
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
