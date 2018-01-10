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
import java.util.Date;
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
public class luuViecNhoServlet extends HttpServlet {

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
        //congViecId,maViecNho,tenViecNho,trangThaiCongViec,tienDo,thoiHanHoanThanh,yeuCauCongViec,baoCao
        String param_nguoiId = pdp.getParameter("nguoiId").trim();        
        int nguoiId= param_nguoiId.length() > 0 ? Integer.parseInt(param_nguoiId) : -1;
        String param_congViecId = pdp.getParameter("congViecId").trim();        
        int congViecId = param_congViecId.length() > 0 ? Integer.parseInt(param_congViecId) : -1;
//        System.out.println("luu việc nhỏ server:  " + congViecId);
        String param_maViecNho = pdp.getParameter("maViecNho").trim();        
        int maViecNho = param_maViecNho.length() > 0 ? Integer.parseInt(param_maViecNho) : -1;
        String param_tenViecNho = pdp.getParameter("tenViecNho").trim();
        String param_trangThaiCongViec = pdp.getParameter("trangThaiCongViec").trim();        
        int trangThaiCongViec = param_trangThaiCongViec.length() > 0 ? Integer.parseInt(param_trangThaiCongViec) : -1;
        String param_tienDo = pdp.getParameter("tienDo").trim();
        String param_thoiHanHoanThanh = pdp.getParameter("thoiHanHoanThanh").trim();
        Date thoiHan=null;
        if(!"".equals(param_thoiHanHoanThanh)){ thoiHan =  DatetimeUtils.ConvertStringToDate(param_thoiHanHoanThanh, DatetimeUtils.DATE_PATTERN_3);}
        String param_yeuCauCongViec = pdp.getParameter("yeuCauCongViec").trim();
        String param_baoCao = pdp.getParameter("baoCao").trim();
//        System.out.println("thoiHan: "+ param_thoiHanHoanThanh);
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        VCBDomain vcb = new VCBDomain(conn);
        try {
            returnCode = vcb.luuViecNhoDomain(nguoiId,congViecId,maViecNho,param_tenViecNho,trangThaiCongViec,param_tienDo,thoiHan,param_yeuCauCongViec,param_baoCao);
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
