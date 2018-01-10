/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Servlet;

import DBConnection.DBConnection;
import DBConnection.DBConnectionUser;
import Domain.VCBDomain;
import Model.VCBUserEntity;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import util.PostDataParameter;

/**
 *
 * @author hayghe
 */
@WebServlet(name = "VCBLoginServlet", urlPatterns = {"/VCBLoginServlet"})
public class VCBLoginServlet extends HttpServlet {

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
        response.setContentType("text/html;charset=UTF-8");
//        System.out.println("hayg vãi ");
        PostDataParameter pdp =new PostDataParameter(request.getReader());
        String jv_userName=pdp.getParameter("UserName").trim();
//        System.out.println("hayg vãi " +jv_userName);
        String jv_userPass=pdp.getParameter("Password").trim();
        Connection dbconn = DBConnectionUser.getConnection();
        List<VCBUserEntity>  entitys=new ArrayList<VCBUserEntity>();
        PrintWriter out = response.getWriter();
        if(dbconn != null) {
//             System.out.println("habcểttertret ");
            VCBDomain VCB =new VCBDomain(dbconn);
            entitys = VCB.getUser(jv_userName);    
            DBConnectionUser.closeDB(dbconn);
        }
        try {
            JSONObject rootObj = new JSONObject();
            JSONArray arrayObj=new JSONArray();
            for(VCBUserEntity item:entitys) {
                JSONObject itemObj = JSONObject.fromObject(item);
                arrayObj.add(itemObj);
            }
            rootObj.put("success", true);
            rootObj.put("data", arrayObj);
//            System.out.println("Login:========= "+ rootObj);
            out.write(rootObj.toString());
            DBConnectionUser.closeDB(dbconn);
        } catch (Exception e) {
            DBConnectionUser.closeDB(dbconn);
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
