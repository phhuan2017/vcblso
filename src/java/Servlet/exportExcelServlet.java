/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnectionUser;
import Domain.VCBDomain;
import Model.VCBLINKEntity;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import util.PostDataParameter;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
//import 
/**
 *
 * @author hayghe
 */
public class exportExcelServlet extends HttpServlet {

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
//        PostDataParameter psp = new PostDataParameter(request.getReader());
//        String param_tenChuongTrinh= psp.getParameter("tenChuongTrinh").trim();
//        int returnCode=0;
//        Connection conn = DBConnectionUser.getConnection();
//        List<VCBLINKEntity> entitys = new ArrayList<VCBLINKEntity>();
//        try {
//            VCBDomain CV = new VCBDomain(conn);
//            entitys = CV.timLinkDomain(param_tenChuongTrinh);
//            DBConnectionUser.closeDB(conn);
//        } catch (Exception e) {
//             DBConnectionUser.closeDB(conn);
//             System.out.println(e.getMessage());
////            e.printStackTrace();
//        }
//        OutputStream out = null;
//        try {
//            response.setContentType("application/vnd.ms-excel");
//            response.setHeader("Content-Disposition", "attachment; filename=test.xls");
//            WritableWorkbook w = Workbook.createWorkbook(response.getOutputStream());
//            WritableSheet s = w.createSheet("Report", 0);
//            s.getSettings().setDefaultColumnWidth(1);
//            if(entitys.size()>0){
//            //int LINKID, String TEN, String URL, String GHICHU, Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT
//            s.addCell(new Label(0, 0, "Danh Sách các ứng dụng Vietcombank "));
//            s.addCell(new Label(0, 1, "LINKID"));
//            s.addCell(new Label(1, 1, "Tên ứng dụng"));
//            s.addCell(new Label(2, 1, "Đường dẫn "));
//            s.addCell(new Label(3, 1, "Ghi chú "));
//            s.addCell(new Label(4, 1, "Ngày tạo "));
//            s.addCell(new Label(5, 1, "Ngày Cập nhật "));
//            s.addCell(new Label(6, 1, "Người Tạo "));
//            s.addCell(new Label(7, 1, "Người Cập nhật "));
//                for(int i=0;i<entitys.size();i++){
//                    s.addCell(new jxl.write.Label(0, i+2, String.valueOf(entitys.get(i).getLINKID())));
//                    s.addCell(new Label(1, i+2, entitys.get(i).getTEN()));
//                    s.addCell(new Label(2, i+2, entitys.get(i).getURL()));
//                    s.addCell(new Label(3, i+2, entitys.get(i).getGHICHU()));
//                    s.addCell(new Label(4, i+2, entitys.get(i).getNGAYTAO()));
//                    s.addCell(new Label(5, i+2, entitys.get(i).getNGAYCAPNHAT()));
//                    s.addCell(new jxl.write.Label(6, i+2, String.valueOf(entitys.get(i).getNGUOITAO())));      
//                    s.addCell(new jxl.write.Label(7, i+2, String.valueOf(entitys.get(i).getNGUOICAPNHAT())));
//                }
//            }            
//            w.write();
//            w.close();
//        } 
//        catch (Exception e){
//            e.printStackTrace();
//        } 
//        finally{
//            if (out != null)
//                out.close();
//        }
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
