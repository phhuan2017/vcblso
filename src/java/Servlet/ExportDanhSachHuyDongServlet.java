/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnection;
import Domain.VCBRMDomain;
import Model.VCBHuyDongEntity;
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
import net.sf.json.JSONArray;
import util.PostDataParameter;

/**
 *
 * @author hayghe
 */
public class ExportDanhSachHuyDongServlet extends HttpServlet {

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
         String param_ngayBaoCao= psp.getParameter("ngayTaoBaoCao").trim();
//         System.out.println("param_ngayBaoCao:  " + param_ngayBaoCao);
        String thangBaoCao = param_ngayBaoCao.substring(2, 6);
        String loaiTienGui=psp.getParameter("loaiTienGui").trim();
        String cif=psp.getParameter("cif").trim();
        String soTaiKhoan = psp.getParameter("soTaiKhoan").trim();
//        System.out.println("jaskdha kj: "+param_ngayBaoCao +" "+ thangBaoCao);
        String Param_sellerId = psp.getParameter("sellerId").trim();
        String Param_phongBanId = psp.getParameter("phongBanId").trim();
        String ten = psp.getParameter("ten").trim();
        int phongBanId = Param_phongBanId.length() > 0 ? Integer.parseInt(Param_phongBanId) : 0;
//        System.out.println("param_ngayBaoCao:  " + param_ngayBaoCao);
        int returnCode=0;
        Connection conn = DBConnection.getConnection();
        List<VCBHuyDongEntity> entitys = new ArrayList<VCBHuyDongEntity>();
        try {
            VCBRMDomain CV = new VCBRMDomain(conn);
            entitys = CV.danhSachHuyDongVonDaGan(param_ngayBaoCao,thangBaoCao,loaiTienGui,cif,soTaiKhoan,Param_sellerId,phongBanId,ten);
            DBConnection.closeDB(conn);
        } catch (Exception e) {
             DBConnection.closeDB(conn);
        }
        OutputStream out = null;
        try {
            response.setContentType("application/vnd.ms-excel");
            response.setHeader("Content-Disposition", "attachment; filename=DanhSachHuyDong"+param_ngayBaoCao+".xls");
            WritableWorkbook w = Workbook.createWorkbook(response.getOutputStream());
            WritableSheet s = w.createSheet("Kyhan"+param_ngayBaoCao, 0);
            s.getSettings().setDefaultColumnWidth(14);
            if(entitys.size()>0){
            s.addCell(new Label(0, 0, "SỐ TÀI KHOẢN"));
            s.addCell(new Label(1, 0, "TÊN"));
            s.addCell(new Label(2, 0, "LOẠI TÀI KHOẢN"));
            s.addCell(new Label(3, 0, "LOẠI TIỀN"));
            s.addCell(new Label(4, 0, "SỐ TIỀN"));
            s.addCell(new Label(5, 0, "LÃI SUẤT"));
            s.addCell(new Label(6, 0, "LÃI CỘNG DỒN"));
            s.addCell(new Label(7, 0, "PHONG BAN SELLER"));
            s.addCell(new Label(8, 0, "SELLERID"));
            s.addCell(new Label(9, 0, "CIF"));
                for(int i=0;i<entitys.size();i++){
                    s.addCell(new Label(0, i+1, entitys.get(i).getTK()));
                    s.addCell(new Label(1, i+1, entitys.get(i).getTEN()));
                    s.addCell(new Label(2, i+1, entitys.get(i).getTKTYPE()));
                    s.addCell(new Label(3, i+1, entitys.get(i).getNT4()));
                    s.addCell(new jxl.write.Number(4, i+1, (double)Math.round(entitys.get(i).getXACBAL().doubleValue()*100)/100));
                    s.addCell(new jxl.write.Number(5, i+1, (double)Math.round(entitys.get(i).getXINRAT().doubleValue()*100000)/100000));
                    s.addCell(new jxl.write.Number(6, i+1, (double)Math.round(entitys.get(i).getXOTACC().doubleValue()*100)/100));
                    s.addCell(new Label(7, i+1, String.valueOf(entitys.get(i).getMAPHONG())));
                    s.addCell(new Label(8, i+1, entitys.get(i).getSELLERID()));
                    s.addCell(new Label(9, i+1, entitys.get(i).getCFNO()));
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
