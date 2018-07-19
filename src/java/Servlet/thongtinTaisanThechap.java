/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnection;
import Domain.VCBRMDomain;
import Model.VCBThongtinTaisanThechap;
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

/**
 *
 * @author adminadLSO
 */
public class thongtinTaisanThechap extends HttpServlet {

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
        PostDataParameter psp = new PostDataParameter(request.getReader());
//        String param_ngay= psp.getParameter("ngay").trim();
        //String param_ngayTaoKyHan= psp.getParameter("ngayTaoKyHan").trim();
        // System.out.println(param_ngayTaoKyHan);
//        String param_nam= psp.getParameter("nam").trim();
//        System.out.println(param_ngayTaoKyHan);
        int returnCode = 0;
        Connection conn = DBConnection.getConnection();
        List<VCBThongtinTaisanThechap> entitys = new ArrayList<VCBThongtinTaisanThechap>();
        try {
            VCBRMDomain CV = new VCBRMDomain(conn);
            entitys = CV.thongtinTaisanThechap();

            DBConnection.closeDB(conn);
        } catch (Exception e) {
            DBConnection.closeDB(conn);
            System.out.println(e.getMessage());
        }
        OutputStream out = null;
        try {
//            response.setContentType("application/pdf");

//            System.out.println("xem nao : " + Math.round(Double.parseDouble(entitys.get(0).getNAMCO().toString())));
            response.setContentType("application/vnd.ms-excel");
            response.setHeader("Content-Disposition", "attachment; filename=thongtinTaisanThechap" + ".xls");
            WritableWorkbook w = Workbook.createWorkbook(response.getOutputStream());
            WritableSheet s = w.createSheet("thongtinTaisanThechap", 0);
            s.getSettings().setDefaultColumnWidth(9);
            if (entitys.size() > 0) {
                s.addCell(new Label(0, 0, "Loại ngoại tệ"));
                s.addCell(new Label(1, 0, "Mã thế chấp"));
                s.addCell(new Label(2, 0, "Tên thế chấp"));
                s.addCell(new Label(3, 0, "Giá trị thế chấp"));
                s.addCell(new Label(4, 0, "Số CIF"));
                s.addCell(new Label(5, 0, "Số hợp đồng"));
                s.addCell(new Label(6, 0, "Trạng thái"));
                s.addCell(new Label(7, 0, "Phân loại"));
                for (int i = 0; i < entitys.size(); i++) {
                    s.addCell(new Label(0, i + 1, entitys.get(i).getNT4()));
                    s.addCell(new Label(1, i + 1, entitys.get(i).getCCDCID()));
                    s.addCell(new Label(2, i + 1, entitys.get(i).getCCDNAM()));
                    s.addCell(new jxl.write.Number(3, i+1, (double)Math.round(entitys.get(i).getXCDAMT().doubleValue()*100)/100));
                    s.addCell(new Label(4, i + 1, entitys.get(i).getCIF()));
                    s.addCell(new Label(5, i + 1, entitys.get(i).getSOHD()));
                    s.addCell(new Label(6, i + 1, entitys.get(i).getSTAT()));
                    s.addCell(new Label(7, i + 1, entitys.get(i).getCATE()));

                }
            }
            w.write();
            w.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (out != null) {
                out.close();
            }
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
