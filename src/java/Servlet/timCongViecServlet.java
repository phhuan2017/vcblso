/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnectionUser;
import Domain.VCBDomain;
import Model.VCBCongViecEntity;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 *
 * @author hayghe
 */
public class timCongViecServlet extends HttpServlet {

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
        String param_CongViec=request.getParameter("CONGVIECID").trim();
        int congViecId=param_CongViec.length() > 0 ? Integer.parseInt(param_CongViec) : -1;
        String param_NGUOIID=request.getParameter("NGUOIID").trim();
        int NGUOIID=param_NGUOIID.length() > 0 ? Integer.parseInt(param_NGUOIID) : -1;
        String param_trangThaiMapViec=request.getParameter("TRANGTHAIMAPVIEC").trim();
        int trangThaiMapViec=param_trangThaiMapViec.length() > 0 ? Integer.parseInt(param_trangThaiMapViec) : -1;
        String param_CongViecTen=request.getParameter("CONGVIECTEN").trim();
//        System.out.println("Công việc ID: " + congViecId + " nguoi id : " + NGUOIID + " trang thai : " + param_trangThaiMapViec + " ten cong viec: " + param_CongViecTen);
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        List<VCBCongViecEntity> entitys = new ArrayList<VCBCongViecEntity>();
        try {
            VCBDomain CV = new VCBDomain(conn);
            entitys = CV.timCongViecDomain(congViecId,param_CongViecTen,NGUOIID,trangThaiMapViec);
            DBConnectionUser.closeDB(conn);
        } catch (Exception e) {
             DBConnectionUser.closeDB(conn);
        }
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            JSONObject rootObj = new JSONObject();
            JSONArray arrayObj=new JSONArray();
            for(VCBCongViecEntity item:entitys) {
                JSONObject itemObj = JSONObject.fromObject(item);
                arrayObj.add(itemObj);
            }
            rootObj.put("success", true);
            rootObj.put("data", arrayObj);
            out.write(rootObj.toString());
//            System.out.println(" ad======================>" + rootObj);
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
