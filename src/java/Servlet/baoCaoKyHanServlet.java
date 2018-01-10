/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnection;
import Domain.VCBDomain;
import Domain.VCBRMDomain;
import Model.VCBKyHanEntity;
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
//import java.awt.Image;
//import com.itextpdf.text.Document;
//import com.itextpdf.text.Font;
//import com.itextpdf.text.FontFactory;
////import com.itextpdf.text.FontFactory;
//import com.itextpdf.text.pdf.PdfWriter;
//import com.itextpdf.text.Paragraph;
//import com.itextpdf.text.pdf.PdfPCell;
//import com.itextpdf.text.pdf.PdfPTable;
//import com.itextpdf.text.Image;
//import com.itextpdf.text.pdf.BaseFont;
//import static com.itextpdf.text.pdf.PdfDictionary.FONT;
import com.thoughtworks.xstream.converters.basic.BigDecimalConverter;
import java.math.BigDecimal;
//import jxl.write.Font;
////import com.itextpdf.text.i

/**
 *
 * @author hayghe
 */
public class baoCaoKyHanServlet extends HttpServlet {

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
        String param_ngayTaoKyHan= psp.getParameter("ngayTaoKyHan").trim();
//        String param_nam= psp.getParameter("nam").trim();
//        System.out.println(param_ngayTaoKyHan);
        int returnCode=0;
        Connection conn = DBConnection.getConnection();
        List<VCBKyHanEntity> entitys = new ArrayList<VCBKyHanEntity>();
        try {
            VCBRMDomain CV = new VCBRMDomain(conn);
            entitys = CV.baoCaoKyHan(param_ngayTaoKyHan);
            
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
            response.setHeader("Content-Disposition", "attachment; filename=KyHan"+param_ngayTaoKyHan+".xls");
            WritableWorkbook w = Workbook.createWorkbook(response.getOutputStream());
            WritableSheet s = w.createSheet("Kyhan"+param_ngayTaoKyHan, 0);
            s.getSettings().setDefaultColumnWidth(12);
            if(entitys.size()>0){
//            s.addCell(new Label(0, 0, "Kỳ hạn"));
            s.addCell(new Label(0, 0, "cfno"));
            s.addCell(new Label(1, 0, "ten"));
            s.addCell(new Label(2, 0, "tk"));
            s.addCell(new Label(3, 0, "tktype"));
            s.addCell(new Label(4, 0, "nt4"));
            s.addCell(new Label(5, 0, "datopn"));
            s.addCell(new Label(6, 0, "dudau"));
            s.addCell(new Label(7, 0, "namco"));
            s.addCell(new Label(8, 0, "namno"));
            s.addCell(new Label(9, 0, "ducuoi"));
            s.addCell(new Label(10, 0, "term"));
            s.addCell(new Label(11, 0, "dorm"));
            s.addCell(new Label(12, 0, "prdtyp"));
                for(int i=0;i<entitys.size();i++){
                    s.addCell(new Label(0, i+1, entitys.get(i).getCFNO()));
                    s.addCell(new Label(1, i+1, entitys.get(i).getTEN()));
                    s.addCell(new Label(2, i+1, entitys.get(i).getTK()));
                    s.addCell(new Label(3, i+1, entitys.get(i).getTKTYPE()));
                    s.addCell(new Label(4, i+1, entitys.get(i).getNT4()));
                    s.addCell(new Label(5, i+1, entitys.get(i).getDATOPN()));
                    s.addCell(new jxl.write.Number(6, i+1, (double)Math.round(entitys.get(i).getDUDAU().doubleValue()*100)/100));
                    s.addCell(new jxl.write.Number(7, i+1, (double)Math.round(entitys.get(i).getNAMNO().doubleValue()*100)/100));
                    s.addCell(new jxl.write.Number(8, i+1, (double)Math.round(entitys.get(i).getNAMCO().doubleValue()*100)/100));
                    s.addCell(new jxl.write.Number(9, i+1, (double)Math.round(entitys.get(i).getDUCUOI().doubleValue()*100)/100));
                    s.addCell(new Label(10, i+1, entitys.get(i).getTERM()));
                    s.addCell(new Label(11, i+1, entitys.get(i).getDORM()));
                    s.addCell(new Label(12, i+1, entitys.get(i).getPRDTYP()));
                }
            }            
            w.write();
            w.close();
        } 
        catch (Exception e){
            e.printStackTrace();
        } 
        finally{
            if (out != null)
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
