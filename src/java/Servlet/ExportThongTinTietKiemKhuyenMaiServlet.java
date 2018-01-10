/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnectionUser;
import Domain.VCBDomain;
import Model.VCBQuaKhuyenMaiEntity;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
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
public class ExportThongTinTietKiemKhuyenMaiServlet extends HttpServlet {

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
        String cif=psp.getParameter("cif").trim();
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
            Document document= new Document();
            response.setContentType("application/pdf");
            response.setHeader("Content-Disposition", "attachment; filename=PhieuXacNhanQuaTang"+cif+".pdf");
            PdfWriter.getInstance(document, response.getOutputStream());
//            document.open();
//            document.add(new Paragraph("vao chưa ?"));
//            document.close();
            Font f = new Font(BaseFont.createFont("times.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED));
            Font f2 = new Font(BaseFont.createFont("times.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED));
            f2.setSize(10);
            document.open();
//            Image image1 = Image.getInstance("tieuDe.png");
//            image1.setXYRatio(100);
//            document.add(image1);
            document.add(new Paragraph("                           NGÂN HÀNG TMCP                                                            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM",f2));
            document.add(new Paragraph("                    NGOẠI THƯƠNG VIỆT NAM                                                                       Độc lập - Tự do - Hạnh phúc",f2));
            document.add(new Paragraph("                       CHI NHÁNH LẠNG SƠN ",f2));
            document.add(new Paragraph("                                                                                                                                             Lạng Sơn, ngày   tháng   năm 20",f2));
            document.add(new Paragraph( "        ",f2));
            document.add(new Paragraph( "        ",f2));
            document.add(new Paragraph( "        ",f2));
            
            document.add(new Paragraph("                            PHIẾU TÍCH LŨY ĐIỂM THƯỞNG GỬI TIẾT KIỆM VCB LẠNG SƠN",f));
            if(thongtinKhacHang.size()>0){
                document.add(new Paragraph( "        ",f2));
                document.add(new Paragraph( "Họ tên Khách hàng: "+thongtinKhacHang.get(0).getTENKHACHANG()
                       +"                   CIF: "+thongtinKhacHang.get(0).getCIF() +
                        "                   CMT: "+thongtinKhacHang.get(0).getSOCMT()+
                        "                   Ngày Cấp: "+thongtinKhacHang.get(0).getNGAYCAP(),f2));
                document.add(new Paragraph( "Địa chỉ: "+thongtinKhacHang.get(0).getDIACHI() ,f2));
                document.add(new Paragraph( "Số điện thoại: "+thongtinKhacHang.get(0).getSODIENTHOAI() ,f2));
                document.add(new Paragraph( "                                                                           TÀI KHOẢN TIẾT KIỆM",f2));
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
                document.add(new Paragraph( "                                                                                  QUÀ ĐÃ NHẬN",f2));
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
                document.add(new Paragraph( "GIAO DỊCH VIÊN               LÃNH ĐẠO PHÒNG               KIỂM SOÁT VIÊN               KHÁCH HÀNG KÝ XÁC NHẬN",f2));
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
//        PostDataParameter psp = new PostDataParameter(request.getReader());
//        String cif=psp.getParameter("cif").trim();
////        System.out.println("hay vay: " + cif);
//        int returnCode=0;
//        Connection conn = DBConnectionUser.getConnection();
//        List<VCBQuaKhuyenMaiEntity> thongtinKhacHang = new ArrayList<VCBQuaKhuyenMaiEntity>();
//        List<VCBQuaKhuyenMaiEntity> KhachHangTietKiemKhuyenMai = new ArrayList<VCBQuaKhuyenMaiEntity>();
//        List<VCBQuaKhuyenMaiEntity> QuaKhuyenMaiDaNhan = new ArrayList<VCBQuaKhuyenMaiEntity>();
//        try {
//            VCBDomain CV = new VCBDomain(conn);
//            thongtinKhacHang = CV.timKhachHangKhuyenMai(cif,"");
//            KhachHangTietKiemKhuyenMai = CV.timKhachHangTietKiemKhuyenMaiDomain(cif);
//            QuaKhuyenMaiDaNhan = CV.timQuaKhuyenMaiDaNhanDomain(cif);
//            DBConnectionUser.closeDB(conn);
//        } catch (Exception e) {
//             DBConnectionUser.closeDB(conn);
//        }
//        OutputStream out = null;
//        try {
//            System.out.println("hayphet " +thongtinKhacHang);
//            response.setContentType("application/vnd.ms-excel");
//            response.setHeader("Content-Disposition", "attachment; filename=PhieuXacNhanQuaTang"+cif+".xls");
//            WritableWorkbook w = Workbook.createWorkbook(response.getOutputStream());
//            WritableSheet s = w.createSheet(cif, 0);
//            s.getSettings().setDefaultColumnWidth(10);
////            s.getSettings().setDefaultRowHeight(10);
//            if(thongtinKhacHang.size()>0){
////                s.addCell(new );
//            //sét độ rộng cột
//            s.setColumnView(0,5);
//            s.setColumnView(1,20);
//            s.setColumnView(2,20);
//            s.setColumnView(3,10);
//            s.setColumnView(4,20);
//            s.setColumnView(5,40);
//            //=====================================
//            s.addCell(new Label(2, 2, "PHIẾU TÍCH LŨY ĐIỂM THƯỞNG GỬI TIẾT KIỆM VCB LẠNG SƠN"));
//            s.addCell(new Label(0, 4, "Họ tên KH:   "+thongtinKhacHang.get(0).getTENKHACHANG()));
//            s.addCell(new Label(0, 5, "CIF:   "+thongtinKhacHang.get(0).getCIF()));
//            s.addCell(new Label(2, 5, "CMT:   "+thongtinKhacHang.get(0).getSOCMT()));
//            s.addCell(new Label(4, 5, "Ngày Cấp:   "+thongtinKhacHang.get(0).getNGAYCAP()));
//            s.addCell(new Label(5, 5, "Nơi Cấp:   "+thongtinKhacHang.get(0).getNOICAP()));
//            s.addCell(new Label(0, 6, "Địa chỉ:   "+thongtinKhacHang.get(0).getDIACHI()));
//            s.addCell(new Label(0, 7, "Số điện thoại:   "+thongtinKhacHang.get(0).getSODIENTHOAI()));
//            s.addCell(new Label(0, 9, "Danh sách tài khoản tiết kiệm:   "));
//            s.addCell(new Label(0, 10, "STT"));
//            s.addCell(new Label(1, 10, "Số TK TIẾT KIỆM"));
//            s.addCell(new Label(2, 10, "SỐ TIỀN GỬI"));
//            s.addCell(new Label(3, 10, "KỲ HẠN"));
//            s.addCell(new Label(4, 10, "ĐIỂM THƯỞNG"));
//            s.addCell(new Label(5, 10, "CHI CHÚ"));
//            for(int i=0;i<KhachHangTietKiemKhuyenMai.size();i++){
//                s.addCell(new Label(0, i+11, String.valueOf(i+1)));
//                s.addCell(new Label(1, i+11, KhachHangTietKiemKhuyenMai.get(i).getSOTAIKHOAN()));
//                s.addCell(new jxl.write.Number(2, i+11, KhachHangTietKiemKhuyenMai.get(i).getSOTIEN()));
//                s.addCell(new jxl.write.Number(3, i+11, KhachHangTietKiemKhuyenMai.get(i).getKYHAN()));
//                s.addCell(new Label(4, i+11, String.valueOf(KhachHangTietKiemKhuyenMai.get(i).getSODIEMTICHLUY())));
//            }
//            s.addCell(new Label(0, KhachHangTietKiemKhuyenMai.size()+13, "Danh sách quà đã nhận:"));
//            s.addCell(new Label(0, KhachHangTietKiemKhuyenMai.size()+14, "STT"));
//            s.addCell(new Label(1, KhachHangTietKiemKhuyenMai.size()+14, "QUÀ TẶNG ĐÃ NHẬN"));
//            s.addCell(new Label(2, KhachHangTietKiemKhuyenMai.size()+14, "SỐ LƯỢNG QUÀ"));
//            s.addCell(new Label(3, KhachHangTietKiemKhuyenMai.size()+14, "KHÁCH HÀNG KÝ XÁC NHẬN"));
//            for(int i=0;i<QuaKhuyenMaiDaNhan.size();i++){
//                if(QuaKhuyenMaiDaNhan.get(i).getSOLUONGQUA()>=1){
//                    s.addCell(new Label(0, i+KhachHangTietKiemKhuyenMai.size()+15, String.valueOf(i+1)));
//                    s.addCell(new Label(1, i+KhachHangTietKiemKhuyenMai.size()+15, QuaKhuyenMaiDaNhan.get(i).getTENQUA()));
//                    s.addCell(new jxl.write.Number(2, i+KhachHangTietKiemKhuyenMai.size()+15, QuaKhuyenMaiDaNhan.get(i).getSOLUONGQUA()));
//                }
//            }
//            int tam=QuaKhuyenMaiDaNhan.size()+KhachHangTietKiemKhuyenMai.size()+15;
//            s.addCell(new Label(0, tam+1, "Khi tham gia chương trình khuyến mại của Vietcombank Lạng Sơn, tôi cam kết không tất toán trước hạn."));
//            s.addCell(new Label(0, tam+3, "GIAO DỊCH VIÊN"));
//            s.addCell(new Label(2, tam+3, "LÃNH ĐẠO PHÒNG"));
//            s.addCell(new Label(4, tam+3, "KIỂM SOÁT VIÊN"));
//            s.addCell(new Label(5, tam+3, "KHÁCH HÀNG KÝ XÁC NHẬN"));
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
//    }

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
