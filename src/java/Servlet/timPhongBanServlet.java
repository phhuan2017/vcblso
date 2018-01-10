/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnectionUser;
import Domain.VCBDomain;
import Model.VCBPhongBanEntity;
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
public class timPhongBanServlet extends HttpServlet {

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
        String tenPhong=request.getParameter("TENPHONG").trim();
        String svl_phongBanID=request.getParameter("PHONGBANID").trim();
        int phongBanID=svl_phongBanID.length() > 0 ? Integer.parseInt(svl_phongBanID) : -1;
//        System.out.println("alo =========" + phongBanID);
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        List<VCBPhongBanEntity> entitys = new ArrayList<VCBPhongBanEntity>();
        try {
            VCBDomain pb = new VCBDomain(conn);
            entitys = pb.timPhongBanDomain(tenPhong,phongBanID);
            DBConnectionUser.closeDB(conn);
        } catch (Exception e) {
             DBConnectionUser.closeDB(conn);
        }
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            JSONObject rootObj = new JSONObject();
            JSONArray arrayObj=new JSONArray();
            for(VCBPhongBanEntity item:entitys) {
                JSONObject itemObj = JSONObject.fromObject(item);
                arrayObj.add(itemObj);
            }
            rootObj.put("success", true);
            rootObj.put("data", arrayObj);
            out.write(rootObj.toString());
//            System.out.println(" phong ban ==========>" + rootObj);
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
