/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import DBConnection.DBConnectionUser;
import Domain.VCBDomain;
import Model.VCBQuaKhuyenMaiEntity;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import util.DatetimeUtils;
import util.PostDataParameter;

/**
 *
 * @author adminadLSO
 */
public class KhuyenMai_XuatDuLieu_Qua_Servlet extends HttpServlet {

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
         String param_tuNgay=psp.getParameter("tuNgay").trim();
        Date tuNgay = null;
        if(param_tuNgay !=""){
            tuNgay = DatetimeUtils.ConvertStringToDate(param_tuNgay, DatetimeUtils.DATE_PATTERN_5);
        }  
        String param_denNgay=psp.getParameter("denNgay").trim();
        Date denNgay = null;
        if(param_denNgay !=""){
            denNgay = DatetimeUtils.ConvertStringToDate(param_denNgay, DatetimeUtils.DATE_PATTERN_5);
        }
        //Cộng thêm 1 ngày==========================================================
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(denNgay);
        calendar.add(Calendar.DATE, 1);
        denNgay =calendar.getTime();
        //==========================================================================
        int returnCode=0;
        Connection conn = DBConnectionUser.getConnection();
        List<VCBQuaKhuyenMaiEntity> entitys = new ArrayList<VCBQuaKhuyenMaiEntity>();
        try {
            VCBDomain CV = new VCBDomain(conn);
            entitys = CV.khuyenMai_BaoCao_Qua_Domain(tuNgay,denNgay);
            DBConnectionUser.closeDB(conn);
        } catch (Exception e) {
             DBConnectionUser.closeDB(conn);
        }
        OutputStream out = null;
        try {
            response.setContentType("application/vnd.ms-excel");
            response.setHeader("Content-Disposition", "attachment; filename=ThongKeQua"+param_tuNgay+" Den "+param_denNgay+".xls");
            WritableWorkbook w = Workbook.createWorkbook(response.getOutputStream());
            WritableSheet s = w.createSheet("thongKe"+param_tuNgay, 0);
            s.getSettings().setDefaultColumnWidth(14);
            if(entitys.size()>0){
            s.addCell(new Label(0, 0, "CIF"));
            s.addCell(new Label(1, 0, "TÊN KHÁCH HÀNG"));
            s.addCell(new Label(2, 0, "TÊN QUÀ"));
            s.addCell(new Label(3, 0, "SỐ LƯỢNG"));
            s.addCell(new Label(4, 0, "PHÒNG"));
            s.addCell(new Label(5, 0, "NGƯỜI CẬP NHẬT"));
            s.addCell(new Label(6, 0, "NGÀY CẬP NHẬT"));
            s.addCell(new Label(7, 0, "TÊN NHÂN VIÊN"));
            s.addCell(new Label(8, 0, "SỐ ĐIỂM TÍCH LŨY"));
            s.addCell(new Label(9, 0, "SỐ ĐIỂM ĐÃ DÙNG"));
            s.addCell(new Label(10, 0, "SỐ ĐIỂM CÒN LẠI"));
                for(int i=0;i<entitys.size();i++){
                    s.addCell(new Label(0, i+1, entitys.get(i).getCIF()));
                    s.addCell(new Label(1, i+1, entitys.get(i).getTENKHACHANG()));
                    s.addCell(new Label(2, i+1, entitys.get(i).getTENQUA()));
                    s.addCell(new jxl.write.Number(3, i+1, entitys.get(i).getSOLUONGQUA()));
                    s.addCell(new jxl.write.Number(4, i+1, entitys.get(i).getPHONGBANID()));
                    s.addCell(new jxl.write.Number(5, i+1, entitys.get(i).getNGUOICAPNHAT()));
                    s.addCell(new Label(6, i+1, entitys.get(i).getNGAYCAPNHAT()));
                    s.addCell(new Label(7, i+1, entitys.get(i).getTEN()));
                    s.addCell(new jxl.write.Number(8, i+1, entitys.get(i).getSODIEMTICHLUY()));
                    s.addCell(new jxl.write.Number(9, i+1, entitys.get(i).getSODIEMDADUNG()));
                    s.addCell(new jxl.write.Number(10, i+1, entitys.get(i).getSODIEMTICHLUY() - entitys.get(i).getSODIEMDADUNG()));
                }
            }   
            int boCoc = 0;
            int chao = 0;
            int thoSu = 0;
            int batDiaCaoCap = 0;
            int mayDoHuyetAp = 0;
            int loViSong = 0;
            for(int i=0;i<entitys.size();i++){
                if(entitys.get(i).getQUAID()==1){
                    boCoc = boCoc + entitys.get(i).getSOLUONGQUA();
                }else{
                    if(entitys.get(i).getQUAID()==2){
                        chao = chao + entitys.get(i).getSOLUONGQUA();
                    }else{
                        if(entitys.get(i).getQUAID()==3){
                            thoSu = thoSu + entitys.get(i).getSOLUONGQUA();
                        }else{
                            if(entitys.get(i).getQUAID()==4){
                                batDiaCaoCap = batDiaCaoCap + entitys.get(i).getSOLUONGQUA();
                            }else{
                                if(entitys.get(i).getQUAID()==5){
                                    mayDoHuyetAp = mayDoHuyetAp + entitys.get(i).getSOLUONGQUA();
                                }else{
                                    if(entitys.get(i).getQUAID()==5){
                                        loViSong = loViSong + entitys.get(i).getSOLUONGQUA();
                                    }
                                }
                             }
                         }
                    }
                }
            }
//            WritableSheet s2 = w.createSheet("2", 1);
//            s.getSettings().setDefaultColumnWidth(14);
//            if(entitys.size()>0){
//            s.addCell(new Label(0, 0, "STT"));
//            s.addCell(new Label(1, 0, "TÊN QUÀ"));
//            s.addCell(new Label(2, 0, "SỐ LƯỢNG"));
//            s.addCell(new Label(3, 0, "SỐ LƯỢNG"));
//            s.addCell(new Label(4, 0, "PHÒNG"));
//            s.addCell(new Label(5, 0, "NGƯỜI CẬP NHẬT"));
//            s.addCell(new Label(6, 0, "NGÀY CẬP NHẬT"));
//            s.addCell(new Label(7, 0, "TÊN NHÂN VIÊN"));
//                for(int i=0;i<entitys.size();i++){
//                    s.addCell(new Label(0, i+1, entitys.get(i).getCIF()));
//                    s.addCell(new Label(1, i+1, entitys.get(i).getTENKHACHANG()));
//                    s.addCell(new Label(2, i+1, entitys.get(i).getTENQUA()));
//                    s.addCell(new jxl.write.Number(3, i+1, entitys.get(i).getSOLUONGQUA()));
//                    s.addCell(new jxl.write.Number(4, i+1, entitys.get(i).getPHONGBANID()));
//                    s.addCell(new jxl.write.Number(5, i+1, entitys.get(i).getNGUOICAPNHAT()));
//                    s.addCell(new Label(6, i+1, entitys.get(i).getNGAYCAPNHAT()));
//                    s.addCell(new Label(7, i+1, entitys.get(i).getTEN()));
//                }
//            }  
//            System.out.println("Bộ cốc: "+ boCoc);
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
