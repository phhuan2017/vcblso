/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnectionUser;
import Domain.VCBDomain;
import Model.VCBLINKEntity;
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
public class timLinkServlet extends HttpServlet {

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
        String param_tenChuongTrinh=request.getParameter("tenChuongTrinh").trim();
        String start = request.getParameter("start").trim();
        String limit = request.getParameter("limit").trim();
        int theStart = start.length() > 0 ? Integer.parseInt(start) : -1;
        int theLimit = limit.length() > 0 ? Integer.parseInt(limit) : -1; 
//        System.out.println("vai vat +===============:  " + param_tenChuongTrinh);
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        List<VCBLINKEntity> entitys = new ArrayList<VCBLINKEntity>();
        try {
            VCBDomain CV = new VCBDomain(conn);
            entitys = CV.timLinkDomain(param_tenChuongTrinh);
            DBConnectionUser.closeDB(conn);
        } catch (Exception e) {
             DBConnectionUser.closeDB(conn);
        }
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            JSONArray arrayObj=new JSONArray();
            int theEnd = theStart + theLimit < entitys.size() ? theStart + theLimit : entitys.size();
//            System.out.println("==============> "+theEnd);
            if (theStart <= theEnd) {
                for (int i = theStart; i < theEnd; i++) {
                    VCBLINKEntity entity = entitys.get(i);
                    JSONObject itemObj = JSONObject.fromObject(entity);
                    arrayObj.add(itemObj);
                }
            }
            JSONObject rootObj = new JSONObject();
//            JSONArray arrayObj=new JSONArray();
//            for(VCBLINKEntity item:entitys) {
//                JSONObject itemObj = JSONObject.fromObject(item);
//                arrayObj.add(itemObj);
//            }
            rootObj.put("success", true);
            rootObj.put("data", arrayObj);
            rootObj.put("total", entitys.size());
            out.write(rootObj.toString());
//            System.out.println(" y kien viec" + rootObj);
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
