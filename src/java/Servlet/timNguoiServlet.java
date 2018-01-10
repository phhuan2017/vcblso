/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnectionUser;
import Domain.VCBDomain;
import Model.VCBNguoiEntity;
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
public class timNguoiServlet extends HttpServlet {

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
        String svl_nguoiId=request.getParameter("NGUOIID").trim();
        int nguoiId=0;
        if(svl_nguoiId != ""){
            nguoiId=Integer.parseInt(svl_nguoiId);
        }
        String svl_phongBanId=request.getParameter("PHONGBANID").trim();
        int phongBanId=0;
        if(svl_phongBanId != ""){phongBanId=Integer.parseInt(svl_phongBanId);}
        String svl_tenNguoi=request.getParameter("HOTEN").trim();
//        System.out.println("tim người : " +   nguoiId+ "  " + phongBanId + " " +  svl_tenNguoi + "    "+svl_nguoiId);
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        List<VCBNguoiEntity> entitys = new ArrayList<VCBNguoiEntity>();
        try {
            VCBDomain CV = new VCBDomain(conn);
            entitys = CV.timNguoiDomain(nguoiId,svl_tenNguoi,phongBanId );
            DBConnectionUser.closeDB(conn);
        } catch (Exception e) {
             DBConnectionUser.closeDB(conn);
        }
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            JSONObject rootObj = new JSONObject();
            JSONArray arrayObj=new JSONArray();
            for(VCBNguoiEntity item:entitys) {
                JSONObject itemObj = JSONObject.fromObject(item);
                arrayObj.add(itemObj);
            }
            rootObj.put("success", true);
            rootObj.put("data", arrayObj);
            out.write(rootObj.toString());
//            System.out.println(" ad======================>" + arrayObj);
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
