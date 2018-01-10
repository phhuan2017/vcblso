/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnection;
import Domain.VCBRMDomain;
import Model.VCBLichSuCapNhatSellerIdEntity;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import util.DatetimeUtils;


/**
 *
 * @author adminadLSO
 */
public class lichSuCapNhatSellerIdServlet extends HttpServlet {

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
        String param_tuNgayLichSu= request.getParameter("tuNgayLichSu").trim();
        Date tuNgayLichSu = null;
        if(param_tuNgayLichSu !=""){
            tuNgayLichSu = DatetimeUtils.ConvertStringToDate(param_tuNgayLichSu, DatetimeUtils.DATE_PATTERN_5);
        }        
        String param_denNgayLichSu= request.getParameter("denNgayLichSu").trim();
        Date denNgayLichSu = null;
        if(param_denNgayLichSu !=""){
            denNgayLichSu = DatetimeUtils.ConvertStringToDate(param_denNgayLichSu, DatetimeUtils.DATE_PATTERN_5);
        }
        //Cộng thêm 1 ngày
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(denNgayLichSu);
        calendar.add(Calendar.DATE, 1);
        denNgayLichSu =calendar.getTime();
        //=======================================
        
        String cifLichSu=request.getParameter("cifLichSu").trim();
        String soTaiKhoanLichSu=request.getParameter("soTaiKhoanLichSu").trim();
        String tenLichSu = request.getParameter("tenLichSu").trim();
        String sellerId = request.getParameter("sellerId").trim();
//        int int_sellerId = sellerId.length() > 0 ? Integer.parseInt(sellerId) : -1;
//        System.out.println("lich su : "+param_tuNgayLichSu +" "+ param_denNgayLichSu);
        String start = request.getParameter("start").trim();
        String limit = request.getParameter("limit").trim();
        int theStart = start.length() > 0 ? Integer.parseInt(start) : -1;
        int theLimit = limit.length() > 0 ? Integer.parseInt(limit) : -1; 
//        System.out.println("===========>  " + theStart + "  " +theLimit);
        int returnCode=0;
        Connection conn = DBConnection.getConnection();
        List<VCBLichSuCapNhatSellerIdEntity> entitys = new ArrayList<VCBLichSuCapNhatSellerIdEntity>();
        try {
            VCBRMDomain CV = new VCBRMDomain(conn);
            entitys = CV.timLichSuCapNhatSellerIdDomain(tuNgayLichSu,denNgayLichSu,cifLichSu,soTaiKhoanLichSu,tenLichSu,sellerId );
            DBConnection.closeDB(conn);
        } catch (Exception e) {
             DBConnection.closeDB(conn);
        }
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            JSONArray arrayObj=new JSONArray();
            int theEnd = theStart + theLimit < entitys.size() ? theStart + theLimit : entitys.size();
//            System.out.println("==============> "+theEnd);
            if (theStart <= theEnd) {
                for (int i = theStart; i < theEnd; i++) {
                    VCBLichSuCapNhatSellerIdEntity entity = entitys.get(i);
                    JSONObject itemObj = JSONObject.fromObject(entity);
                    arrayObj.add(itemObj);
                }
            }
            JSONObject rootObj = new JSONObject();
            rootObj.put("success", true);
            rootObj.put("data", arrayObj);
            rootObj.put("total", entitys.size());
            out.write(rootObj.toString());
//            System.out.println(" Lich su cap nhat ======================>" + arrayObj);
        } catch (Exception ex) {
            System.out.println("Err" + ex.getMessage());
        } finally {
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
