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
public class capNhatNguoiDungServlet extends HttpServlet {

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
        String param_User = pdp.getParameter("User").trim();
        int user = param_User.length() > 0 ? Integer.parseInt(param_User) : -1;
        String param_hoTenND = pdp.getParameter("hoTenND").trim();
        String param_ngaySinh = pdp.getParameter("ngaySinh").trim();
//        System.out.println("param_ngaySinh : "+ param_ngaySinh);
        Date ngaySinh = DatetimeUtils.ConvertStringToDate(param_ngaySinh, DatetimeUtils.DATE_PATTERN_3);
//        Date ngaySinh1 = DatetimeUtils.ConvertStringToDate(param_ngaySinh, DatetimeUtils.DATE_PATTERN_6);
        String param_nguoiId = pdp.getParameter("nguoiId").trim();
        int nguoiId=param_nguoiId.length() > 0 ? Integer.parseInt(param_nguoiId) : -1;
        String param_CMT = pdp.getParameter("CMT").trim();
        String param_chucVu = pdp.getParameter("chucVu").trim();
        int chucVu = param_chucVu.length() > 0 ? Integer.parseInt(param_chucVu) : -1;
        String param_phongBan = pdp.getParameter("phongBan").trim();
        int phongBan = param_phongBan.length() > 0 ? Integer.parseInt(param_phongBan) : -1;
        String param_moTa = pdp.getParameter("moTa").trim();
        String param_sellerId = pdp.getParameter("sellerId").trim();
        
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        VCBDomain vcb = new VCBDomain(conn);
        try {
            if(phongBan!=-1 & user!=-1 & nguoiId!=-1 & chucVu!=-1 & phongBan!=-1){
                returnCode = vcb.capNhatNguoiDungDomain(user,param_hoTenND,ngaySinh,nguoiId,chucVu,phongBan,param_moTa,param_CMT,param_sellerId);
            }else{
                returnCode=-4;
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
//            System.out.println("myObj cap nhat nguoi dung : " + myObj);
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
