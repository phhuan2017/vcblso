/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.export.ExporterInput;
import net.sf.jasperreports.export.OutputStreamExporterOutput;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
import net.sf.jasperreports.export.SimplePdfExporterConfiguration;
import util.PostDataParameter;

/**
 *
 * @author adminadLSO
 */
public class XuatBaoCaoKhuyenMaiServlet extends HttpServlet {

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
            throws ServletException, IOException{
        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", "attachment; filename=DanhSachHuyDong.pdf");
        OutputStream out = null;
        PostDataParameter psp = new PostDataParameter(request.getReader());
//         String param_ngayBaoCao= psp.getParameter("a").trim();
//        System.out.println("vãi đái : ////" +param_ngayBaoCao);
        try {  

//                String source = "D:/Project 2017/PQLBH/src/java/REPORT/report1.jrxml";  
//                JasperReport jr = JasperCompileManager.compileReport(source);  
//                JasperPrint jp = JasperFillManager.fillReport(source,null);  
////                OutputStream os = new FileOutputStream("D:/StudentMarks/);  
////                JasperExportManager.exportReportToPdfStream(jp, os);  
//                JasperExportManager.exportReportToPdfStream(jp, response.getOutputStream());
                    String reportSrcFile = "D:/Project 2017/PQLBH/src/java/REPORT/report1.jrxml";
                    JasperReport jr = JasperCompileManager.compileReport(reportSrcFile);
                    JasperPrint print = JasperFillManager.fillReport(reportSrcFile, null);
                    File outDir = new File("C:/jasperoutput");
                    outDir.mkdirs();
                    JRPdfExporter exporter = new JRPdfExporter();
                    ExporterInput exporterInput = new SimpleExporterInput(print);
                    exporter.setExporterInput(exporterInput);
                    OutputStreamExporterOutput exporterOutput = new SimpleOutputStreamExporterOutput(
                        "C:/jasperoutput/FirstJasperReport.pdf");
                    exporter.setExporterOutput(exporterOutput);
                    SimplePdfExporterConfiguration configuration = new SimplePdfExporterConfiguration();
                    exporter.setConfiguration(configuration);
                    exporter.exportReport();
//                os.flush();  
//                os.close();
           } catch (Exception e) {  
                e.printStackTrace();  
           }finally{  
                if (out != null)
                out.close();
           }  
//        response.setContentType("text/html;charset=UTF-8");
//        PrintWriter out = response.getWriter();
//        try {
//            /* TODO output your page here. You may use following sample code. */
//            out.println("<!DOCTYPE html>");
//            out.println("<html>");
//            out.println("<head>");
//            out.println("<title>Servlet XuatBaoCaoKhuyenMaiServlet</title>");            
//            out.println("</head>");
//            out.println("<body>");
//            out.println("<h1>Servlet XuatBaoCaoKhuyenMaiServlet at " + request.getContextPath() + "</h1>");
//            out.println("</body>");
//            out.println("</html>");
//        } finally {
//            out.close();
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
