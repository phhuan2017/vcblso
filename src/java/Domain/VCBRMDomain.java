/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Domain;

import Model.VCBHuyDongEntity;
import Model.VCBKyHanEntity;
import Model.VCBTaiKhoanTietKiem;
import Model.VCBThongtinTaisanThechap;
import Model.VCBLichSuCapNhatSellerIdEntity;
import Model.VCBQuaKhuyenMaiEntity;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.sql.Types;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import util.DatetimeUtils;

/**
 *
 * @author HayGhe
 */
public class VCBRMDomain {

    private Connection con;

    public VCBRMDomain(Connection con) {
        this.con = con;
    }

    public List<VCBThongtinTaisanThechap> thongtinTaisanThechap() {
        List<VCBThongtinTaisanThechap> timKyHan = new ArrayList<VCBThongtinTaisanThechap>();
        try {

            String a = "select *\n"
                    + "from SIL_CO\n";
            CallableStatement ps = con.prepareCall(a);

            ResultSet rs = ps.executeQuery();
            if (rs != null) {
                while (rs.next()) {
                    System.out.println("aaaaa");
                    VCBThongtinTaisanThechap entity = new VCBThongtinTaisanThechap(
                            rs.getString("NT4"),
                            rs.getString("CCDCID"),
                            rs.getString("CCDNAM"),
                            rs.getBigDecimal("XCDAMT"),
                            rs.getString("CIF"),
                            rs.getString("SOHD"),
                            rs.getString("STAT"),
                            rs.getString("CATE")
                    );
                    timKyHan.add(entity);
                }
                rs.close();
            }
            ps.close();
            //System.out.print(a.getSv());
        } catch (Exception ex) {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("get TXN  Err:" + sErr);
        }
        //System.out.println("size = "+ SeachEnscash.size());
        return timKyHan;
    }

    public List<VCBTaiKhoanTietKiem> taiKhoanTietKiem(String ngayTaoKyHan) {
        List<VCBTaiKhoanTietKiem> timKyHan = new ArrayList<VCBTaiKhoanTietKiem>();
        try {

            String ngayTaoBang = ngayTaoKyHan.substring(0, 6);
            String tuNgay = ngayTaoKyHan.substring(6, 16);
            String denNgay = ngayTaoKyHan.substring(16, 26);

            String a = "select\n"
                    + "sil.cfno,\n"
                    + "sil.ten,\n"
                    + "sil.datopn,\n"
                    + "sil.tk,\n"
                    + "sil.prdtyp,\n"
                    + "sil.MANV,\n"
                    + "sil.tktype,\n"
                    + "tl.dudau,\n"
                    + "tl.namco,\n"
                    + "tl.namno,\n"
                    + "(tl.dudau + tl.namco - tl.namno) as ducuoi,\n"
                    + "cif.CFIDI6\n"
                    + "from \n"
                    + "sil_tl as sil,\n"
                    + "TL" + ngayTaoBang + " as tl,\n"
                    + "SIL_CF as cif\n"
                    + "where \n"
                    + "sil.tk=tl.tk\n"
                    + "and sil.CFNO=cif.CFCIFN\n"
                    + "and sil.tktype!='L'\n"
                    + "and DATOPN > " + "'" + tuNgay + "'" + "\n"
                    + "and DATOPN < " + "'" + denNgay + "'";
            CallableStatement ps = con.prepareCall(a);

            ResultSet rs = ps.executeQuery();
            if (rs != null) {
                while (rs.next()) {
                    VCBTaiKhoanTietKiem entity = new VCBTaiKhoanTietKiem(
                            rs.getString("CFNO"),
                            rs.getString("TEN"),
                            rs.getString("TK"),
                            rs.getString("TKTYPE"),
                            rs.getTimestamp("DATOPN"),
                            rs.getBigDecimal("DUDAU"),
                            rs.getBigDecimal("NAMCO"),
                            rs.getBigDecimal("NAMNO"),
                            rs.getBigDecimal("DUCUOI"),
                            rs.getString("PRDTYP")
                    );
                    timKyHan.add(entity);
                }
                rs.close();
            }
            ps.close();
            //System.out.print(a.getSv());
        } catch (Exception ex) {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("get TXN  Err:" + sErr);
        }
        //System.out.println("size = "+ SeachEnscash.size());
        return timKyHan;
    }

    public List<VCBKyHanEntity> baoCaoKyHan(String ngayTaoKyHan) {
        List<VCBKyHanEntity> timKyHan = new ArrayList<VCBKyHanEntity>();
        try {
            /*select sil.cfno, sil.ten,sil.tk, sil.tktype,sil.nt4, sil.datopn,tl.dudau,tl.namco,tl.namno,(tl.dudau + tl.namco - tl.namno) as ducuoi,cm.term,cm.dorm,sil.prdtyp from sil_tl as sil,tl301015 as tl,sil_cm as cm where sil.tk=tl.tk and sil.tk=cm.tk and sil.tktype!='L'*/

            String a = "select\n"
                    + "sil.CFNO, \n"
                    + "sil.TEN,\n"
                    + "sil.TK, \n"
                    + "sil.TKTYPE,\n"
                    + "sil.NT4, \n"
                    + "sil.DATOPN,\n"
                    + "tl.DUDAU,\n"
                    + "tl.NAMCO,\n"
                    + "tl.NAMNO,\n"
                    + "(tl.DUDAU + tl.NAMCO - tl.NAMNO) as DUCUOI,\n"
                    + "cm.TERM,\n"
                    + "cm.DORM,\n"
                    + "sil.PRDTYP\n"
                    + "\n"
                    + "from \n"
                    + "SIL_TL as sil, \n"
                    + "TL" + ngayTaoKyHan + " as tl,\n"
                    + "SIL_CM as cm\n"
                    + "where \n"
                    + "sil.TK=tl.TK\n"
                    + "and sil.TK=cm.TK\n"
                    + "and sil.TKTYPE!='L'";

            CallableStatement ps = con.prepareCall(a);
            System.out.println(a);
//            CallableStatement ps = con.prepareCall("select sil.cfno,sil.ten,sil.tk,sil.tktype,sil.nt4,sil.datopn,"
//                    + "tl.dudau,tl.namco,tl.namno,(tl.dudau + tl.namco - tl.namno) as DUCUOI,cm.term,cm.dorm,"
//                    + "sil.prdtyp from sil_tl as sil,tl"+ngayTaoKyHan+" as tl,sil_cm as cm where sil.tk=tl.tk and sil.tk=cm.tk and sil.tktype!='L' and sil.tk='0981000000999'");
            ResultSet rs = ps.executeQuery();
            if (rs != null) {
                while (rs.next()) {
                    VCBKyHanEntity entity = new VCBKyHanEntity(
                            rs.getString("CFNO"),
                            rs.getString("TEN"),
                            rs.getString("TK"),
                            rs.getString("TKTYPE"),
                            rs.getString("NT4"),
                            rs.getTimestamp("DATOPN"),
                            rs.getBigDecimal("DUDAU"),
                            rs.getBigDecimal("NAMCO"),
                            rs.getBigDecimal("NAMNO"),
                            rs.getBigDecimal("DUCUOI"),
                            rs.getString("TERM"),
                            rs.getString("DORM"),
                            rs.getString("PRDTYP")
                    );
                    timKyHan.add(entity);
                }
                rs.close();
            }
            ps.close();
            //System.out.print(a.getSv());
        } catch (Exception ex) {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("get TXN  Err:" + sErr);
        }
        //System.out.println("size = "+ SeachEnscash.size());
        return timKyHan;
    }
//   

    public List<VCBHuyDongEntity> danhSachHuyDongVonChuaGan(String param_ngayBaoCao, String thangBaoCao, String loaiTienGui, String cif, String soTaiKhoan, String ten) {
        List<VCBHuyDongEntity> timHuyDongVon = new ArrayList<VCBHuyDongEntity>();
        try {
            //nếu không có thuộc tính loại tiền gửi thì 
            String l = "";
            if (loaiTienGui != "") {
                l = l + " and sil.tktype = '" + loaiTienGui + "'";
            }
            String cif1 = "";
            if (cif != "") {
                cif1 = cif1 + " and sil.cfno = '" + cif + "'";
            }
            String soTaiKhoan1 = "";
            if (soTaiKhoan != "") {
                soTaiKhoan1 = soTaiKhoan1 + " and sil.TK = '" + soTaiKhoan + "'";
            }
            String ten1 = "";
            if (ten != "") {
                ten1 = ten1 + " and sil.TEN like '" + ten + "'";
            }
            String a = "select distinct sil.TK, sil.tktype, sil.nt4, sil.prdtyp, sil.cfno,sil.manv,sil.tellerid, sil.maphong, sil.ten, i.xacbal,sil.datopn \n"
                    + "from sil_tl as sil left join  A_MAP_SELLERID as map on sil.TK=map.soTK, in" + thangBaoCao + " as i\n"
                    + "where sil.tktype<>'G' and i.filename='in" + param_ngayBaoCao + "' and sil.Statement = '1' and sil.tk=i.tk  and sil.tktype<>'L'" + l + cif1 + soTaiKhoan1 + ten1
                    + "GROUP BY sil.TK,sil.tktype, sil.nt4, sil.prdtyp, sil.cfno,sil.manv,sil.tellerid, sil.maphong, sil.ten, i.xacbal,sil.datopn,map.sellerid, map.ID\n"
                    + "having count(map.soTK) = 0"
                    + "ORDER BY sil.datopn DESC,i.xacbal";
            System.out.println(a);
            CallableStatement ps = con.prepareCall(a);
            ResultSet rs = ps.executeQuery();
            if (rs != null) {
                while (rs.next()) {
                    //tring TK, String TKTYPE, String NT4, String PRDTYP, String CFNO, String MANV, String TELLERID, String MAPHONG, String TEN, BigDecimal XACBAL
                    VCBHuyDongEntity entity = new VCBHuyDongEntity(
                            rs.getString("TK"),
                            rs.getString("TKTYPE"),
                            rs.getString("NT4"),
                            rs.getString("PRDTYP"),
                            rs.getString("CFNO"),
                            rs.getString("MANV"),
                            rs.getString("TELLERID"),
                            rs.getString("TEN"),
                            rs.getBigDecimal("XACBAL"),
                            rs.getTimestamp("DATOPN")
                    );
                    timHuyDongVon.add(entity);
                }
                rs.close();
            }
            ps.close();
            //System.out.print(a.getSv());
        } catch (Exception ex) {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("get TXN  Err:" + sErr);
        }
        //System.out.println("size = "+ SeachEnscash.size());
        return timHuyDongVon;
    }

    public int themMapSellerIdDomain(String param_sellerId, int maPhong, int trangThaiId, int nguoiId, String param_tk) {
        int returnCode = 0;
        try {
            String query = "{ ? = call Remaining098_Insert_MapSellerId (?,?,?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
            CallableStatement cs = con.prepareCall(query);
            cs.registerOutParameter(1, Types.BIGINT);
            cs.setString("sellerId", param_sellerId);
            cs.setString("tk", param_tk);
            cs.setInt("maPhong", maPhong);
            cs.setInt("trangThai", trangThaiId);
            cs.setInt("nguoiId", nguoiId);
            cs.execute();
            returnCode = cs.getInt(1);
            try {
                cs.close();
            } catch (Exception e) {
                System.out.println("Err MapSellerId Insert :" + e.getMessage());
            }
        } catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err MapSellerId Insert :" + sErr);
        } finally {
            return returnCode;
        }
    }

    public List<VCBHuyDongEntity> danhSachHuyDongVonDaGan(String param_ngayBaoCao, String thangBaoCao, String loaiTienGui, String cif, String soTaiKhoan, String sellerId, int phongBanId, String ten) {
        List<VCBHuyDongEntity> timHuyDongVon = new ArrayList<VCBHuyDongEntity>();
        try {
            //nếu không có thuộc tính loại tiền gửi thì 
            String l = "";
            if (loaiTienGui != "") {
                l = l + " and sil.tktype = '" + loaiTienGui + "'";
            }
            String cif1 = "";
            if (cif != "") {
                cif1 = cif1 + " and sil.cfno = '" + cif + "'";
            }
            String soTaiKhoan1 = "";
            if (soTaiKhoan != "") {
                soTaiKhoan1 = soTaiKhoan1 + " and sil.TK = '" + soTaiKhoan + "'";
            }
            String sellerId1 = "";
            if (sellerId != "") {
                sellerId1 = sellerId1 + " and map.sellerId = '" + sellerId + "'";
            }
            String phongBanId1 = "";
            if (phongBanId != 0) {
                phongBanId1 = phongBanId1 + " and map.maPhong = '" + phongBanId + "'";
            }
            String ten1 = "";
            if (ten != "") {
                ten1 = ten1 + " and sil.ten like '" + ten + "'";
            }

            String a = "select distinct sil.TK, sil.tktype, sil.nt4, sil.prdtyp, sil.cfno,sil.manv,sil.tellerid, sil.maphong, sil.ten, i.xacbal,map.sellerid, map.maPhong, i.XINRAT,i.XOTACC,sil.datopn \n"
                    + "from sil_tl as sil left join  A_MAP_SELLERID as map on sil.TK=map.soTK, in" + thangBaoCao + " as i\n"
                    + "where sil.tktype<>'G' and i.filename='in" + param_ngayBaoCao + "' and sil.tk=i.tk  and sil.tktype<>'L'" + l + cif1 + soTaiKhoan1 + sellerId1 + phongBanId1 + ten1
                    + "GROUP BY sil.TK,sil.tktype, sil.nt4, sil.prdtyp, sil.cfno,sil.manv,sil.tellerid, sil.maphong, sil.ten, i.xacbal,map.sellerid, map.ID,map.sellerid, map.maPhong,i.XINRAT,i.XOTACC,sil.datopn\n"
                    + "having count(map.soTK) > 0"
                    + "ORDER BY sil.datopn DESC,i.xacbal";
            //and sil.Statement = '1'
//            System.out.println("a:=====================:  " + a);
//            System.out.println("Câu lệnh: " + a);
            CallableStatement ps = con.prepareCall(a);
            ResultSet rs = ps.executeQuery();
            if (rs != null) {
                while (rs.next()) {
                    //tring TK, String TKTYPE, String NT4, String PRDTYP, String CFNO, String MANV, String TELLERID, String MAPHONG, String TEN, BigDecimal XACBAL
                    VCBHuyDongEntity entity = new VCBHuyDongEntity(
                            rs.getString("TK"),
                            rs.getString("TKTYPE"),
                            rs.getString("NT4"),
                            rs.getString("PRDTYP"),
                            rs.getString("CFNO"),
                            rs.getString("MANV"),
                            rs.getString("TELLERID"),
                            rs.getInt("maPhong"),
                            rs.getString("TEN"),
                            rs.getBigDecimal("XACBAL"),
                            rs.getString("sellerid"),
                            rs.getBigDecimal("XINRAT"),
                            rs.getBigDecimal("XOTACC"),
                            rs.getTimestamp("DATOPN")
                    );
                    timHuyDongVon.add(entity);
                }
                rs.close();
            }
            ps.close();
            //System.out.print(a.getSv());
        } catch (Exception ex) {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("get TXN  Err:" + sErr);
        }
        //System.out.println("size = "+ SeachEnscash.size());
        return timHuyDongVon;
    }

    public List<VCBLichSuCapNhatSellerIdEntity> timLichSuCapNhatSellerIdDomain(Date tuNgayLichSu, Date denNgayLichSu, String cifLichSu, String soTaiKhoanLichSu, String tenLichSu, String sellerId) {
        List<VCBLichSuCapNhatSellerIdEntity> timLichSuCapNhatSellerId = new ArrayList<VCBLichSuCapNhatSellerIdEntity>();

        try {

            String query = "{ call Remaining098_LichSuCapNhatSellerId (?,?,?,?,?,?)}";
//            System.out.println("vao dday  adsd: " + new Timestamp(tuNgayLichSu.getTime()));
//            System.out.println("vao dday : " + new Timestamp(denNgayLichSu.getTime()));
            CallableStatement cs = con.prepareCall(query);
            cs.setTimestamp("tuNgayLichSu", new Timestamp(tuNgayLichSu.getTime()));
            cs.setTimestamp("denNgayLichSu", new Timestamp(denNgayLichSu.getTime()));
            cs.setString("cifLichSu", cifLichSu);
            cs.setString("soTaiKhoanLichSu", soTaiKhoanLichSu);
            cs.setString("tenLichSu", tenLichSu);
            cs.setString("sellerId", sellerId);
            ResultSet rs = cs.executeQuery();
            if (rs != null) {
                while (rs.next()) {
//                    String TK, String TKTYPE, String NT4, String PRDTYP, String MANV, String TELLERID, int MAPHONG, String TEN, String SELLERID, Date DATOPN,
//                    String TRANGTHAI, Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT
                    VCBLichSuCapNhatSellerIdEntity entity = new VCBLichSuCapNhatSellerIdEntity(
                            rs.getString("TK"),
                            rs.getString("TKTYPE"),
                            rs.getString("NT4"),
                            rs.getString("PRDTYP"),
                            rs.getString("MANV"),
                            rs.getString("TellerID"),
                            rs.getInt("maPhong"),
                            rs.getString("TEN"),
                            rs.getString("sellerid"),
                            rs.getTimestamp("DATOPN"),
                            rs.getString("Statement"),
                            rs.getTimestamp("ngayTao"),
                            rs.getTimestamp("ngayCapNhat"),
                            rs.getInt("nguoiTao"),
                            rs.getInt("nguoiCapNhat")
                    );
                    timLichSuCapNhatSellerId.add(entity);
                }
                rs.close();
            }
            cs.close();
        } catch (Exception ex) {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài cap seller id" + sErr);
        }
        return timLichSuCapNhatSellerId;
    }
//    

    public List<VCBHuyDongEntity> timKhachHangDomain(String cif, String ten) {
        List<VCBHuyDongEntity> timKhachHang = new ArrayList<VCBHuyDongEntity>();

        try {

            String query = "{ call Remaining098_timKhachHang (?,?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setString("cif", cif);
            cs.setString("tenKhachHang", ten);
//            cs.setString("sellerId", sellerId);
            ResultSet rs = cs.executeQuery();
            if (rs != null) {
                while (rs.next()) {//String CFNO, String TEN, String DIACHI, String SOCMT, String NGAYCAP
                    VCBHuyDongEntity entity = new VCBHuyDongEntity(
                            rs.getString("CFCIFN"),
                            rs.getString("CFSNME"),
                            rs.getString("CFNA2"),
                            rs.getString("CFSSNO"),
                            rs.getString("CFIDI6"),
                            rs.getString("CFHPHO")
                    );
                    timKhachHang.add(entity);
                }
                rs.close();
            }
            cs.close();
        } catch (Exception ex) {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tim khach hang" + sErr);
        }
        return timKhachHang;
    }

}
