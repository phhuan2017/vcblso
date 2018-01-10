/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnection;
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
 * @author Administrator
 */
public class themPhongBanServlet extends HttpServlet {

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
        /*
        maPhong,tenPhong,chucNangNhiemVu,User,trangThai
        */
        PostDataParameter pdp = new PostDataParameter(request.getReader());
        String param_maPhong = pdp.getParameter("maPhong").trim();
        int maPhong = param_maPhong.length() > 0 ? Integer.parseInt(param_maPhong) : -1;
        String param_tenPhong = pdp.getParameter("tenPhong").trim();
        String param_chucNangNhiemVu = pdp.getParameter("chucNangNhiemVu").trim();
        String param_User = pdp.getParameter("User").trim();
        int user = param_User.length() > 0 ? Integer.parseInt(param_User) : -1;
        String param_trangThai = pdp.getParameter("trangThai").trim();
        int trangThai = param_trangThai.length() > 0 ? Integer.parseInt(param_trangThai) : -1;
//        System.out.println("vao den day chua "+trangThai);
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        VCBDomain vcb = new VCBDomain(conn);
        try {
            if(maPhong!=-1||user!=-1||trangThai!=-1){
                returnCode = vcb.themPhongBanDomain(param_tenPhong,user,maPhong,param_chucNangNhiemVu,trangThai);
            }
            DBConnection.closeDB(conn);
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
//            System.out.println("myObj phogn ban: " + myObj);
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
