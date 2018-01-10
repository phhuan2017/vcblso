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
import java.util.Date;
//import java.sql.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONObject;
import util.DatetimeUtils;
import util.ErrCode;
import util.PostDataParameter;

/**
 *
 * @author hayghe
 */
public class themCongViecServlet extends HttpServlet {

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
        //tenCV,thoiHan,cVLienQuan,yeuCauCongViec,User
        PostDataParameter pdp = new PostDataParameter(request.getReader());
        String param_tenCongViec = pdp.getParameter("tenCV").trim();
        String param_thoiHan = pdp.getParameter("thoiHan").trim();
//        System.out.println("thoiHan: "+ param_thoiHan);
        //Date ngaySinh = DatetimeUtils.ConvertStringToDate(param_ngaySinh, DatetimeUtils.DATE_PATTERN_3);
        Date thoiHan=null;
        if(!"".equals(param_thoiHan)){ thoiHan =  DatetimeUtils.ConvertStringToDate(param_thoiHan, DatetimeUtils.DATE_PATTERN_3);}
        String param_cVLienQuan = pdp.getParameter("cVLienQuan").trim();
        String param_yeuCauCongViec = pdp.getParameter("yeuCauCongViec").trim();
        int    param_userID=Integer.parseInt(pdp.getParameter("User").trim());
        int    trangThaiCongViec=Integer.parseInt(pdp.getParameter("trangThaiCongViec").trim());
//        System.out.println("thoiHan: "+ thoiHan);
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        VCBDomain vcb = new VCBDomain(conn);
        try {
            returnCode = vcb.themCongViecDomain(param_tenCongViec,thoiHan,param_cVLienQuan,param_yeuCauCongViec,param_userID,trangThaiCongViec);
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
//            System.out.println("hay ghe" + returnCode);
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
