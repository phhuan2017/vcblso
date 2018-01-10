/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnectionUser;
import Domain.VCBDomain;
import Model.VCBLINKEntity;
import Model.VCBQuaKhuyenMaiEntity;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.CMYKColor;
import com.itextpdf.text.pdf.PdfEncodings;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
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
public class TestPDFServlet extends HttpServlet {

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
        String cif=psp.getParameter("abc").trim();
        System.out.println("hay vay: " + cif);
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        List<VCBQuaKhuyenMaiEntity> thongtinKhacHang = new ArrayList<VCBQuaKhuyenMaiEntity>();
        List<VCBQuaKhuyenMaiEntity> KhachHangTietKiemKhuyenMai = new ArrayList<VCBQuaKhuyenMaiEntity>();
        List<VCBQuaKhuyenMaiEntity> QuaKhuyenMaiDaNhan = new ArrayList<VCBQuaKhuyenMaiEntity>();
        try {
            VCBDomain CV = new VCBDomain(conn);
            thongtinKhacHang = CV.timKhachHangKhuyenMai(cif,"");
            KhachHangTietKiemKhuyenMai = CV.timKhachHangTietKiemKhuyenMaiDomain(cif);
            QuaKhuyenMaiDaNhan = CV.timQuaKhuyenMaiDaNhanDomain(cif);
            DBConnectionUser.closeDB(conn);
        } catch (Exception e) {
             DBConnectionUser.closeDB(conn);
        }
        OutputStream out = null;
        try {
            System.out.println("hayphet========== " +thongtinKhacHang);
            Document document= new Document();
            response.setContentType("application/pdf");
            response.setHeader("Content-Disposition", "attachment; filename=PhieuXacNhanQuaTang"+cif+".pdf");
            PdfWriter.getInstance(document, response.getOutputStream());
            Font f = new Font(BaseFont.createFont("C:\\Setup\\times.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED));
            Font f2 = new Font(BaseFont.createFont("C:\\Setup\\times.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED));
            f2.setSize(10);
            //Font f = new Font(BaseFont.g);
//            FontFactory.getFont
            document.open();
            document.add(new Paragraph("                            PHIẾU TÍCH LŨY ĐIỂM THƯỞNG GỬI TIẾT KIỆM VCB LẠNG SƠN",f));
            if(thongtinKhacHang.size()>0){
                document.add(new Paragraph( "        ",f2));
                document.add(new Paragraph( "Họ tên Khách hàng: "+thongtinKhacHang.get(0).getTENKHACHANG()
                       +"                   CIF: "+thongtinKhacHang.get(0).getCIF() +
                        "                   CMT: "+thongtinKhacHang.get(0).getSOCMT()+
                        "                   Ngày Cấp: "+thongtinKhacHang.get(0).getNGAYCAP(),f2));
                document.add(new Paragraph( "Địa chỉ: "+thongtinKhacHang.get(0).getDIACHI() ,f2));
                document.add(new Paragraph( "Số điện thoại: "+thongtinKhacHang.get(0).getSODIENTHOAI() ,f2));
                document.add(new Paragraph( "                                                                           Tài khoản tiết kiệm",f2));
                //tạo bảng quà tiết kiệm
                PdfPTable t = new PdfPTable(6);
                t.setSpacingBefore(5);
                t.setSpacingAfter(10);
                t.setWidthPercentage(100);
                t.setWidths(new int[]{30,100,100,50,100,150});
                PdfPCell c1 = new PdfPCell(new Phrase("STT",f2));
                t.addCell(c1);
                PdfPCell c2 = new PdfPCell(new Phrase("Số TK Tiết kiệm",f2));
                t.addCell(c2);
                PdfPCell c3 = new PdfPCell(new Phrase("Số tiền gửi",f2));
                t.addCell(c3);
                PdfPCell c4 = new PdfPCell(new Phrase("Kỳ hạn",f2));
                t.addCell(c4);
                PdfPCell c5 = new PdfPCell(new Phrase("Điểm thưởng",f2));
                t.addCell(c5);
                PdfPCell c6 = new PdfPCell(new Phrase("Ghi chú",f2));
                t.addCell(c6);
                // nội dung bảng
                for(int i=0;i<KhachHangTietKiemKhuyenMai.size();i++){
                    t.addCell(new Phrase(String.valueOf(i+1),f2));
                    t.addCell(new Phrase(KhachHangTietKiemKhuyenMai.get(i).getSOTAIKHOAN(),f2));
                    t.addCell(new Phrase(String.valueOf(KhachHangTietKiemKhuyenMai.get(i).getSOTIEN()),f2));
                    t.addCell(new Phrase(String.valueOf(KhachHangTietKiemKhuyenMai.get(i).getKYHAN()),f2));
                    t.addCell(new Phrase(String.valueOf(KhachHangTietKiemKhuyenMai.get(i).getSODIEMTICHLUY()),f2));
                    t.addCell(new Phrase("",f2));
                }
                document.add(t);
                //=====================================================
                document.add(new Paragraph( "                                                                           Quà đã tặng",f2));
                //tạo bảng quà tiết kiệm
                PdfPTable q = new PdfPTable(4);
                q.setSpacingBefore(5);
                q.setSpacingAfter(10);
                q.setWidthPercentage(100);
                q.setTotalWidth(100);
                q.setWidths(new int[]{30,100,100,150});
                PdfPCell q1 = new PdfPCell(new Phrase("STT",f2));
                q.addCell(q1);
                PdfPCell q2 = new PdfPCell(new Phrase("Quà đã nhận",f2));
                q.addCell(q2);
                PdfPCell q3 = new PdfPCell(new Phrase("Số quà",f2));
                q.addCell(q3);
                PdfPCell q4 = new PdfPCell(new Phrase("Khách hàng ký nhận",f2));
                q.addCell(q4);
                // nội dung bảng
                for(int i=0;i<QuaKhuyenMaiDaNhan.size();i++){
                    q.addCell(new Phrase(String.valueOf(i+1),f2));
                    q.addCell(new Phrase(QuaKhuyenMaiDaNhan.get(i).getTENQUA(),f2));
                    q.addCell(new Phrase(String.valueOf(QuaKhuyenMaiDaNhan.get(i).getSOLUONGQUA()),f2));
                    q.addCell(new Phrase("",f2));
                }
                document.add(q);
                document.add(new Paragraph( "Khi tham gia chương trình khuyến mại của Vietcombank Lạng Sơn, tôi cam kết không tất toán trước hạn.",f2));
                document.add(new Paragraph( "GIAO DICH VIÊN               LÃNH ĐẠO PHÒNG               KIỂM SOÁT VIÊN               KHÁCH HÀNG KÝ XÁC NHẬN",f2));
            }
            document.close();
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
