/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Domain;

import Model.VCBChucVuEntity;
import Model.VCBCongViecEntity;
import Model.VCBCongViecNhoEntity;
import Model.VCBLINKEntity;
import Model.VCBLichSuCapNhatSellerIdEntity;
import Model.VCBMapQuyenEntity;
import Model.VCBMapViecEntity;
import Model.VCBNguoiEntity;
import Model.VCBNguoiTimKiemEntity;
import Model.VCBNutEntity;
import Model.VCBPhongBanEntity;
import Model.VCBQuaKhuyenMaiEntity;
import Model.VCBQuyenEntity;
import Model.VCBTrangThaiCongViecEntity;
import Model.VCBTrangThaiEntity;
import Model.VCBUserEntity;
import Model.VCBYKienViecEntity;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.sql.Types;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 *
 * @author HayGhe
 */
public class VCBDomain {
    private Connection con;
    public VCBDomain(Connection con){
        this.con=con;
    }
    public List<VCBUserEntity> getUser(String User){
        List<VCBUserEntity> SeachUser = new ArrayList<VCBUserEntity>();
        try {          
            String query = "{ call ssUSER_TimKiem_User (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setString("User", User);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    /*int USERID, String User_name, String Pass_word, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT, int NGUOIID, int TRANGTHAIID
                    */
                    VCBUserEntity entity = new VCBUserEntity(
                        rs.getInt("USERID"),
                        rs.getString("USERNAME"),
                        rs.getString("PASSWORD"),
                        rs.getTimestamp("NGAYTAO"),
                        rs.getTimestamp("NGAYTAO"),
                        rs.getInt("USERTAO"),
                        rs.getInt("USERCAPNHAT"),
                        rs.getInt("NGUOIID"),
                        rs.getInt("TRANGTHAIID"),
                        rs.getInt("PHONGBANID")
                    );
                    SeachUser.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("get TXN  Err:" + sErr);
        }
        return SeachUser;
    }
    public int themChucVuDomain(String tenChucVu,String moTaChucVu,int nguoiTao){
     int returnCode=0;
     try{
         String query = "{ ? = call ChucVu_themChucVu (?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
            cs.setString("tenChucVu",tenChucVu);
            cs.setString("moTaChucVu",moTaChucVu);
            cs.setInt("nguoiTao", nguoiTao);
         cs.execute();
            returnCode = cs.getInt(1);
            try
            {
              cs.close();
            } 
            catch (Exception e) 
            {
                System.out.println("Err Company Insert :" + e.getMessage());
            }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err Company Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
    //param_tenCongViec,thoiHan,param_cVLienQuan,param_yeuCauCongViec
    public int themCongViecDomain(String param_tenCongViec,Date thoiHan,String param_cVLienQuan,String param_yeuCauCongViec,int param_userID,int trangThaiCongViec){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_ThemCongViec (?,?,?,?,?,?)}";
//         System.out.println("tenChucVu: " + param_tenCongViec);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
            cs.setString("tenCV",param_tenCongViec);
            cs.setTimestamp("thoiHan", new Timestamp(thoiHan.getTime()));
            cs.setString("cVLienQuan",param_cVLienQuan);
            cs.setString("yeuCauCongViec",param_yeuCauCongViec);
            cs.setInt("user",param_userID);
            cs.setInt("trangThaiCongViec",trangThaiCongViec);
         cs.execute();
            returnCode = cs.getInt(1);
            try
            {
              cs.close();
            } 
            catch (Exception e) 
            {
                System.out.println("Err Công việc Insert :" + e.getMessage());
            }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err Công việc Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
    public int capNhatCongViecDomain(int congViecId,String param_tenCongViec,Date thoiHan,String param_cVLienQuan,String param_yeuCauCongViec,int param_userID, int trangThaiCongViec){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_CapNhatCongViec (?,?,?,?,?,?,?)}";
//         System.out.println("tenChucVu: " + param_tenCongViec);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
            cs.setString("tenCV",param_tenCongViec);
            cs.setTimestamp("thoiHan", new Timestamp(thoiHan.getTime()));
            cs.setString("cVLienQuan",param_cVLienQuan);
            cs.setString("yeuCauCongViec",param_yeuCauCongViec);
            cs.setInt("user",param_userID);
            cs.setInt("congViecId",congViecId);
            cs.setInt("trangThai",trangThaiCongViec);
         cs.execute();
            returnCode = cs.getInt(1);
            try
            {
              cs.close();
            } 
            catch (Exception e) 
            {
                System.out.println("Err Công việc update :" + e.getMessage());
            }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err Công việc update :" + sErr);
        }finally{
            return returnCode;
        }
     }
    public int themTrangThaiDomain(String tenTrangThai, int user, int maTrangThai){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_Insert_TrangThai (?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setString("svl_TenTrangThai",tenTrangThai);
         cs.setInt("maTrangThai", maTrangThai);
         cs.setInt("user", user);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err Company Insert :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err Company Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
    public int themChuongTrinhDomain(int maChuongTrinh,String tenChuongTrinh,String URL,String ghiChu,int nguoiID,int loaiChuongTrinh){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_Insert_ChuongTrinh (?,?,?,?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("maChuongTrinh", maChuongTrinh);
         cs.setInt("loaiChuongTrinh", loaiChuongTrinh);
         cs.setString("tenChuongTrinh",tenChuongTrinh);
         cs.setString("URL",URL);
         cs.setString("ghiChu",ghiChu);
         cs.setInt("nguoiID", nguoiID);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err Company Insert :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err Company Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
    public List<VCBTrangThaiEntity> timTrangThaiDomain(String tenTrangThai){
        List<VCBTrangThaiEntity> SeachTrangThai = new ArrayList<VCBTrangThaiEntity>();
        
        try {         
            
            String query = "{ call sUSER_TimKiem_TrangThai (?)}";
            
            CallableStatement cs = con.prepareCall(query);
            cs.setString("MOTA", tenTrangThai);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBTrangThaiEntity entity = new VCBTrangThaiEntity(
                        rs.getInt("TRANGTHAIID"),
                        rs.getString("MOTA"),
                        rs.getTimestamp("NGAYTAO"),
                        rs.getTimestamp("NGAYCAPNHAT"),
                        rs.getInt("USERTAO"),
                        rs.getInt("USERCAPNHAT")
                    );
                    SeachTrangThai.add(entity);
                }
                rs.close();
            }
            cs.close();
            //System.out.print(a.getSv());
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E" + sErr);
        }
        //System.out.println("size = "+ SeachEnscash.size());
        return SeachTrangThai;
    }
    public List<VCBNguoiEntity> timNguoiDomain(int nguoiId, String tenNguoi,int phongBanId){
        List<VCBNguoiEntity> SeachNguoi = new ArrayList<VCBNguoiEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_Nguoi (?,?,?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setInt("NGUOIID", nguoiId);
            cs.setInt("PHONGBANID", phongBanId);
            cs.setString("hoTenND",tenNguoi);
            ResultSet rs = cs.executeQuery();
            VCBNguoiEntity a = new VCBNguoiEntity(-1,"Tất Cả",new Date(),new Date(),new Date(),-1,-1,"",0,-1,-1,"","");
            SeachNguoi.add(a);
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBNguoiEntity entity = new VCBNguoiEntity(
                        rs.getInt("NGUOIID"),
                        rs.getString("HOTEN"),
                        rs.getTimestamp("NGAYSINH"),
                        rs.getTimestamp("NGAYTAO"),
                        rs.getTimestamp("NGAYCAPNHAT"),
                        rs.getInt("USERTAO"),
                        rs.getInt("USERCAPNHAT"),
                        rs.getString("DIACHI"),
                        rs.getInt("PHONGBANID"),
                        rs.getInt("CHUCVU"),   
                        rs.getInt("TRANGTHAIID"),
                        rs.getString("CMT"),
                        rs.getString("SELLERID")
                    );
                    SeachNguoi.add(entity);
                }
                rs.close();
            }
            cs.close();
            //System.out.print(a.getSv());
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E" + sErr);
        }
        //System.out.println("size = "+ SeachEnscash.size());
        return SeachNguoi;
    }
    public List<VCBNguoiTimKiemEntity> nguoi_TimKiemDomain(int userId){
        List<VCBNguoiTimKiemEntity> SeachNguoi = new ArrayList<VCBNguoiTimKiemEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_Nguoi_user (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setInt("userId", userId);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBNguoiTimKiemEntity entity = new VCBNguoiTimKiemEntity(
                        rs.getInt("NGUOIID"),
                        rs.getString("HOTEN"),
                        rs.getTimestamp("NGAYSINH"),
                        rs.getString("DIACHI"),
                        rs.getInt("PHONGBANID"),
                        rs.getInt("CHUCVU"),   
                        rs.getInt("TRANGTHAIID"),
                        rs.getString("CMT"),
                        rs.getInt("USERID"),
                        rs.getString("USERNAME"),
                        rs.getString("PASSWORD")    
                    );
                    SeachNguoi.add(entity);
                }
                rs.close();
            }
            cs.close();
            //System.out.print(a.getSv());
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E" + sErr);
        }
        //System.out.println("size = "+ SeachEnscash.size());
        return SeachNguoi;
    }
    public int themPhongBanDomain(String tenPhong, int user, int maPhong,String chucNangNhiemVu,int trangThai){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_Insert_PhongBan (?,?,?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setString("svl_TenPhong",tenPhong);
         cs.setInt("svl_USER", user);
         cs.setInt("svl_MaPhong", maPhong);
         cs.setString("svl_MoTa",chucNangNhiemVu);
         cs.setInt("svl_TrangThai", trangThai);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err Phong Ban Insert :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err Phong ban Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
    public List<VCBPhongBanEntity> timPhongBanDomain(String tenPhong,int phongBanID){
        List<VCBPhongBanEntity> SeachPhongBan = new ArrayList<VCBPhongBanEntity>();
        try {         
            String query = "{ call sVCB_TimKiem_PhongBan (?,?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setString("tenPhong", tenPhong);
            cs.setInt("phongBanID", phongBanID);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBPhongBanEntity entity = new VCBPhongBanEntity(
                        rs.getInt("PHONGBANID"),
                        rs.getString("TENPHONG"),
                        rs.getString("MOTA"),
                        rs.getTimestamp("NGAYTAO"),
                        rs.getTimestamp("NGAYCAPNHAT"),
                        rs.getInt("USERTAO"),
                        rs.getInt("USERCAPNHAT"), 
                        rs.getInt("TRANGTHAIID")
                    );
                    SeachPhongBan.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E" + sErr);
        }
        return SeachPhongBan;
    }
    public int themChucVuDomain(int maChucVu,String param_tenChucVu,String param_chucNangNhiemVu,int User,int trangThai){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_Insert_ChucVu (?,?,?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("maChucVu", maChucVu);
         cs.setString("tenChucVu",param_tenChucVu);
         cs.setInt("User", User);
         cs.setString("moTa",param_chucNangNhiemVu);
         cs.setInt("trangThai", trangThai);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err Phong Ban Insert :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err Phong ban Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
    public List<VCBChucVuEntity> timChucVuDomain(String tenChucVu, int chucVuID){
        List<VCBChucVuEntity> SeachChucVu = new ArrayList<VCBChucVuEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_ChucVu (?,?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setString("tenChucVu", tenChucVu);
            cs.setInt("chucVuID", chucVuID);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBChucVuEntity entity = new VCBChucVuEntity(
                        rs.getInt("maChucVu"),
                        rs.getString("tenChucVu"),
                        rs.getString("moTa"),
                        rs.getInt("nguoiTao"),
                        rs.getTimestamp("ngayTao"),
                        rs.getInt("nguoiCapNhat"), 
                        rs.getTimestamp("ngayCapNhat"),
                        rs.getInt("trangThai")
                    );
                    SeachChucVu.add(entity);
                }
                rs.close();
            }
            cs.close();
            //System.out.print(a.getSv());
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E" + sErr);
        }
        //System.out.println("size = "+ SeachEnscash.size());
        return SeachChucVu;
    }
    //User,hoTenND,ngaySinh,CMT,chucVu,phongBan,moTa
    public int themNguoiDungDomain(int User,String hoTenND,Date ngaySinh,int CMT,int chucVu,int phongBan, String moTa, String param_sellerId){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_ThemNguoiDung (?,?,?,?,?,?,?,?)}";
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("User", User);
         cs.setString("hoTenND",hoTenND);
         cs.setTimestamp("ngaySinh", new Timestamp(ngaySinh.getTime()));
         cs.setInt("CMT", CMT);
         cs.setInt("chucVu", chucVu);
         cs.setInt("phongBan", phongBan);
         cs.setString("moTa", moTa);
         cs.setString("sellerId", param_sellerId);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err Them nguoi dung :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = 98;
            String sErr = ex.getMessage();
            System.out.println("Err Them nguoi dung :" + sErr);
        }finally{
            return returnCode;
        }
     }
    public int capNhatNguoiDungDomain(int User,String hoTenND,Date ngaySinh,int nguoiId,int chucVu,int phongBan, String moTa,String CMT, String param_sellerId){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_CapNhat_NguoiDung (?,?,?,?,?,?,?,?,?)}";
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("User", User);
         cs.setString("hoTenND",hoTenND);
         cs.setTimestamp("ngaySinh", new Timestamp(ngaySinh.getTime()));
         cs.setInt("nguoiId", nguoiId);
         cs.setInt("chucVu", chucVu);
         cs.setInt("phongBan", phongBan);
         cs.setString("moTa", moTa);
         cs.setString("CMT", CMT);
         cs.setString("sellerId", param_sellerId);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err CAP NHAT  nguoi dung :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = 98;
            String sErr = ex.getMessage();
            System.out.println("Err CAP NHAT nguoi dung :" + sErr);
        }finally{
            return returnCode;
        }
     }
    public int themUserDomain(String tenDangNhap,String maKhau, int maTrangThai, int user, int nguoiId, int userId){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_Them_User (?,?,?,?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setString("tenTruyCap",tenDangNhap);
         cs.setString("matKhau",maKhau);
         cs.setInt("maTrangThai", maTrangThai);
         cs.setInt("user", user);
         cs.setInt("nguoiID", nguoiId);
         cs.setInt("userId", userId);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err Company Insert :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = 98;
            String sErr = ex.getMessage();
            System.out.println("Err Company Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
    public List<VCBUserEntity> timUserDomain(int UserID){
        List<VCBUserEntity> timUser = new ArrayList<VCBUserEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_User (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setInt("nguoiID", UserID);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    /*
                    int USERID, String User_name, String Pass_word, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT, int NGUOIID, int TRANGTHAIID
                    */
                    VCBUserEntity entity = new VCBUserEntity(
                        rs.getInt("USERID"),
                        rs.getString("USERNAME"),
                        rs.getString("PASSWORD"),
                        rs.getTimestamp("NGAYTAO"),
                        rs.getTimestamp("NGAYCAPNHAT"),
                        rs.getInt("USERTAO"),
                        rs.getInt("USERCAPNHAT"), 
                        rs.getInt("NGUOIID"),
                        rs.getInt("TRANGTHAIID"),
                        rs.getString("MOTA")
                    );
                    timUser.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E" + sErr);
        }
        return timUser;
    }
     public int themQuyenDomain(int quyenId,String tenQuyen, String moTa, int user){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_Them_Quyen (?,?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("quyenId", quyenId);
         cs.setString("tenQuyen",tenQuyen);
         cs.setString("moTa",moTa);
         cs.setInt("user", user);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err Thêm Quyền :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = 98;
            String sErr = ex.getMessage();
            System.out.println("Err Thêm Quyền :" + sErr);
        }finally{
            return returnCode;
        }
     }   
     public int themChuaPhanQuyenDomain(int userId,int quyenId,int userPhanQuyenId,int trangThaiId){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_Them_ChuaPhanQuyen (?,?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("userId", userId);
         cs.setInt("quyenId", quyenId);
         cs.setInt("userPhanQuyenId", userPhanQuyenId);
         cs.setInt("trangThaiId", trangThaiId);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err Thêm chua phan Quyền :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = 98;
            String sErr = ex.getMessage();
            System.out.println("Err Thêm chua phan Quyền :" + sErr);
        }finally{
            return returnCode;
        }
     } 
     public int themPhanQuyenDomain(int userId,int quyenId,int userPhanQuyenId){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_Them_PhanQuyen (?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("userId", userId);
         cs.setInt("quyenId", quyenId);
         cs.setInt("userPhanQuyenId", userPhanQuyenId);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err Thêm chua phan Quyền :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = 98;
            String sErr = ex.getMessage();
            System.out.println("Err Thêm chua phan Quyền :" + sErr);
        }finally{
            return returnCode;
        }
     } 
      public List<VCBQuyenEntity> timQuyenDomain(String tenQuyen){
        List<VCBQuyenEntity> timQuyen = new ArrayList<VCBQuyenEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_Quyen (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setString("tenQuyen", tenQuyen);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBQuyenEntity entity = new VCBQuyenEntity(
                        rs.getInt("QUYENID"),
                        rs.getString("TENQUYEN"),
                        rs.getString("MOTA"),
                        rs.getTimestamp("NGAYTAO"),
                        rs.getTimestamp("NGAYCAPNHAT"),
                        rs.getInt("USERTAO"),
                        rs.getInt("USERCAPNHAT")
                    );
                    timQuyen.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm quyền" + sErr);
        }
        return timQuyen;
    }
      public List<VCBQuyenEntity> timPhanQuyenDomain(int userId,int tamp){
        List<VCBQuyenEntity> timQuyen = new ArrayList<VCBQuyenEntity>();
//        List<VCBQuyenEntity> timQuyen2 = new ArrayList<VCBQuyenEntity>();
        try {     
            String query="";
            if(tamp==1){//nếu tamp=1 có nghĩa là tìm phân quyền
                query = "{ call sVCB_TimKiem_PhanQuyen (?)}";
                CallableStatement cs = con.prepareCall(query);
                cs.setInt("userId", userId);
                ResultSet rs = cs.executeQuery();
                if(rs != null)
                {
                    while(rs.next())
                    {
                        VCBQuyenEntity entity = new VCBQuyenEntity(
                            rs.getInt("QUYENID"),
                            rs.getString("TENQUYEN"),
                            rs.getString("MOTA"),
                            rs.getTimestamp("NGAYTAO"),
                            rs.getTimestamp("NGAYCAPNHAT"),
                            rs.getInt("USERTAO"),
                            rs.getInt("USERCAPNHAT"),
                            rs.getInt("USERID"),
                            rs.getInt("PHANQUYENID")
                        );
                        timQuyen.add(entity);
                    }
                    rs.close();
                }
                cs.close();
            }else{//nếu tamp=0 có nghĩa là tìm chưa phân quyền
                query = "{ call sVCB_TimKiem_ChuaPhanQuyen (?)}";
                    CallableStatement cs = con.prepareCall(query);
                    cs.setInt("userId", userId);
                    ResultSet rs = cs.executeQuery();
                    if(rs != null)
                    {
                        while(rs.next())
                        {
                            VCBQuyenEntity entity = new VCBQuyenEntity(
                                rs.getInt("QUYENID"),
                                rs.getString("TENQUYEN"),
                                rs.getString("MOTA"),
                                rs.getTimestamp("NGAYTAO"),
                                rs.getTimestamp("NGAYCAPNHAT"),
                                rs.getInt("USERTAO"),
                                rs.getInt("USERCAPNHAT")
                            );
                            timQuyen.add(entity);
                        }
                        rs.close();
                    }
                    cs.close();
            }
                
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm quyền" + sErr);
        }
        return timQuyen;
    }
       public List<VCBMapQuyenEntity> timMapQuyenDomain(int QUYENID){
        List<VCBMapQuyenEntity> timMapQuyen = new ArrayList<VCBMapQuyenEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_MapQuyen (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setInt("QUYENID", QUYENID);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBMapQuyenEntity entity = new VCBMapQuyenEntity(
                        rs.getInt("MAPQUYENID"),
                        rs.getInt("QUYENID"),
                        rs.getInt("NUTID"),
                        rs.getInt("TRANGTHAIID"), 
                        rs.getTimestamp("NGAYTAO"),
                        rs.getTimestamp("NGAYCAPNHAT"),
                        rs.getInt("NGUOITAO"),
                        rs.getInt("NGUOICAPNHAT"),
                        rs.getString("NUTNAME"),
                        rs.getString("NUT_MOTA")
                    );
                    timMapQuyen.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm map quyền" + sErr);
        }
        return timMapQuyen;
    }
//       public List<VCBMapQuyenEntity> timNutDomain(int NUTID){
//        List<VCBMapQuyenEntity> timMapQuyen = new ArrayList<VCBMapQuyenEntity>();
//        
//        try {         
//            
//            String query = "{ call sVCB_TimKiem_Nut (?)}";
//            CallableStatement cs = con.prepareCall(query);
//            cs.setInt("NUTID", NUTID);
//            ResultSet rs = cs.executeQuery();
//            if(rs != null)
//            {
//                while(rs.next())
//                {
//                    VCBMapQuyenEntity entity = new VCBMapQuyenEntity(
//                        rs.getInt("NUTID"),
//                        rs.getString("NUTNAME"),
//                        rs.getString("NUT_MOTA")
//                    );
//                    timMapQuyen.add(entity);
//                }
//                rs.close();
//            }
//            cs.close();
//        }
//        catch(Exception ex)
//        {
//            ex.printStackTrace();
//            String sErr = ex.getMessage();
//            System.out.println("E lỗi roài tìm map quyền" + sErr);
//        }
//        return timMapQuyen;
//    }
     public int themMapCongViecDomain( int congViecId, int nguoiId){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_Insert_MapViec (?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("congViecId", congViecId);
         cs.setInt("nguoiId", nguoiId);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err map viec Insert :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err map viec Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
     public int capNhatMapCongViecDomain( int congViecId, int nguoiId, int trangThai){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_CapNhat_MapViec (?,?,?)}";
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("congViecId", congViecId);
         cs.setInt("nguoiId", nguoiId);
         cs.setInt("trangThai", trangThai);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err map viec câp nhật :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err map viec cập nhật :" + sErr);
        }finally{
            return returnCode;
        }
     }
     public List<VCBCongViecEntity> timCongViecDomain(int CONGVIECID,String CONGVIECTEN,int NGUOIID,int TRANGTHAIMAPVIEC){
        List<VCBCongViecEntity> timMapQuyen = new ArrayList<VCBCongViecEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_CongViec (?,?,?,?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setInt("CONGVIECID", CONGVIECID);
            cs.setInt("NGUOIID", NGUOIID);
            cs.setInt("TRANGTHAIMAPVIEC", TRANGTHAIMAPVIEC);
            cs.setString("CONGVIECTEN",CONGVIECTEN);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBCongViecEntity entity = new VCBCongViecEntity(
                            
                        rs.getInt("CONGVIECID"),
                        rs.getString("CONGVIECTEN"),
                        rs.getTimestamp("THOIHANHOANTHANH"),
                        rs.getString("CONGVANLIENQUAN"),
                        rs.getString("MOTA"),
                        rs.getTimestamp("NGAYTAO"),
                        rs.getTimestamp("NGAYCAPNHAT"),
                        rs.getInt("NGUOITAO"),
                        rs.getInt("NGUOICAPNHAT"),
                        rs.getInt("TRANGTHAICONGVIEC"),
                        rs.getString("TIENDO"),
                        rs.getString("TEN")
                    );
                    timMapQuyen.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm công việc" + sErr);
        }
        return timMapQuyen;
    }
     public List<VCBTrangThaiCongViecEntity> timTrangThaiCongViecDomain(){
        List<VCBTrangThaiCongViecEntity> timTrangThaiCongViec = new ArrayList<VCBTrangThaiCongViecEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_TrangThaiCongViec ()}";
            CallableStatement cs = con.prepareCall(query);
//            cs.setInt("CONGVIECID", CONGVIECID);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBTrangThaiCongViecEntity entity = new VCBTrangThaiCongViecEntity(
                            
                        rs.getInt("TRANGTHAICONGVIECID"),
                        rs.getString("TEN")
                    );
                    timTrangThaiCongViec.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm công việc" + sErr);
        }
        return timTrangThaiCongViec;
    }
     public List<VCBMapViecEntity> timMapViecDomain(int CONGVIECID){
        List<VCBMapViecEntity> timTrangThaiCongViec = new ArrayList<VCBMapViecEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_MapViec (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setInt("CONGVIECID", CONGVIECID);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBMapViecEntity entity = new VCBMapViecEntity(
                        rs.getInt("CONGVIECID"),
                        rs.getInt("NGUOIID"),
                        rs.getString("YKIEN"),
                        rs.getInt("TRANGTHAI")
                    );
                    timTrangThaiCongViec.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm công việc" + sErr);
        }
        return timTrangThaiCongViec;
    }
     public List<VCBYKienViecEntity> timYKienViecDomain(int CONGVIECID){
        List<VCBYKienViecEntity> timTrangThaiCongViec = new ArrayList<VCBYKienViecEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_YKienViec (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setInt("CONGVIECID", CONGVIECID);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBYKienViecEntity entity = new VCBYKienViecEntity(
                        rs.getInt("YKIENID"),
                        rs.getInt("CONGVIECID"),
                        rs.getInt("NGUOIID"),
                        rs.getString("NOIDUNG"),
                        rs.getTimestamp("THOIGIAN"),
                        rs.getString("HOTEN")
                        
                    );
                    timTrangThaiCongViec.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm công việc" + sErr);
        }
        return timTrangThaiCongViec;
    }
    public List<VCBLINKEntity> timLinkDomain(String tenChuongTrinh){
        List<VCBLINKEntity> timLink = new ArrayList<VCBLINKEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_Link (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setString("tenChuongTrinh", tenChuongTrinh);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBLINKEntity entity = new VCBLINKEntity(
                        rs.getInt("LINKID"),
                        rs.getString("TEN"),
                        rs.getString("URL"),
                        rs.getString("GHICHU"),
                        rs.getTimestamp("NGAYTAO"),    
                        rs.getTimestamp("NGAYCAPNHAT"),  
                        rs.getInt("NGUOITAO"),
                        rs.getInt("NGUOICAPNHAT"),
                        rs.getInt("LOAICHUONGTRINH")
                    );
                    timLink.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm Link" + sErr);
        }
        return timLink;
    }
    public List<VCBNguoiEntity> timNguoiPhanCongDomain(int CONGVIECID){
        List<VCBNguoiEntity> timTrangThaiCongViec = new ArrayList<VCBNguoiEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_PhanCong(?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setInt("CONGVIECID", CONGVIECID);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBNguoiEntity entity = new VCBNguoiEntity(
                        rs.getInt("NGUOIID"),
                        rs.getString("HOTEN"),
                        rs.getTimestamp("NGAYSINH"),
                        rs.getTimestamp("NGAYTAO"),
                        rs.getTimestamp("NGAYCAPNHAT"),
                        rs.getInt("USERTAO"),
                        rs.getInt("USERCAPNHAT"),
                        rs.getString("DIACHI"),
                        rs.getInt("PHONGBANID"),
                        rs.getInt("CHUCVU"),   
                        rs.getInt("TRANGTHAIID"),
                        rs.getString("CMT"),
                        rs.getString("SELLERID")
                    );
                    timTrangThaiCongViec.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm công việc" + sErr);
        }
        return timTrangThaiCongViec;
    }
     public int themYKienDomain( int congViecId, int nguoiId, String noiDung){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_Insert_YKien (?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("congViecId", congViecId);
         cs.setInt("nguoiId", nguoiId);
         cs.setString ("noiDung", noiDung);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err map viec Insert :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err map viec Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
     public int capNhatYKienDomain( int yKienId, String noiDung){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_CapNhat_YKien (?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("yKienId", yKienId);
         cs.setString ("noiDung", noiDung);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err cap nhat y kien :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err cap nhat y kien :" + sErr);
        }finally{
            return returnCode;
        }
     }
     public List<VCBNutEntity> timNutDomain (int QUYENID){
        List<VCBNutEntity> timNut = new ArrayList<VCBNutEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_Nut (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setInt("QUYENID", QUYENID);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBNutEntity entity = new VCBNutEntity(
                        rs.getInt("NUTID"),
                        rs.getString("NUTNAME"),
                        rs.getString("NUT_MOTA")
                    );
                    timNut.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm nut" + sErr);
        }
        return timNut;
    }
     public int capNhatMapQuyenDomain( int QUYENID, int TRANGTHAIID){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_CapNhat_MapQuyen (?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("QUYENID", QUYENID);
         cs.setInt("TRANGTHAIID", TRANGTHAIID);
//         cs.setString ("noiDung", noiDung);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err cap nhat y kien :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err cap nhat y kien :" + sErr);
        }finally{
            return returnCode;
        }
     }
     public int themMapQuyenDomain( int QUYENID,int NUTID, int TRANGTHAIID){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_them_MapQuyen (?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("QUYENID", QUYENID);
         cs.setInt("TRANGTHAIID", TRANGTHAIID);
         cs.setInt("NUTID", NUTID);
//         cs.setString ("noiDung", noiDung);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err cap nhat them mapquyen :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err cap nhat them mapquyen :" + sErr);
        }finally{
            return returnCode;
        }
     }
     public int luuViecNhoDomain(int nguoiId, int congViecId,int maViecNho,String param_tenViecNho,int trangThaiCongViec,String param_tienDo,Date thoiHan,
             String param_yeuCauCongViec,String param_baoCao){
     int returnCode=0;
     try{
         String query = "{ ? = call sUSER_luuViecNho (?,?,?,?,?,?,?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("nguoiId", nguoiId);
         cs.setInt("congViecId", congViecId);
         cs.setInt("maViecNho", maViecNho);
         cs.setString ("param_tenViecNho", param_tenViecNho);
         cs.setInt("trangThaiCongViec", trangThaiCongViec);
         cs.setString ("param_tienDo", param_tienDo);
         cs.setTimestamp("thoiHan", new Timestamp(thoiHan.getTime()));
         cs.setString ("param_yeuCauCongViec", param_yeuCauCongViec);
         cs.setString ("param_baoCao", param_baoCao);
         cs.execute();
        returnCode = cs.getInt(1);
//         System.out.println("hayghe:  ------> " + returnCode);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err cap nhat luu viec nho :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err lưu việc nhỏ:" + sErr);
        }finally{
            return returnCode;
        }
     }
     public List<VCBCongViecNhoEntity> timCongViecNhoDomain (int congViecId){
        List<VCBCongViecNhoEntity> timCongViecNho = new ArrayList<VCBCongViecNhoEntity>();
        
        try {         
            
            String query = "{ call sVCB_TimKiem_congViecNho (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setInt("congViecId", congViecId);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    
                    VCBCongViecNhoEntity entity = new VCBCongViecNhoEntity(
                        rs.getInt("STT"),
                        rs.getInt("CONGVIECID"),
                        rs.getString("VIECNHO_TEN"),
                        rs.getTimestamp("VIECNHO_THOIHANHOANTHANH"),                        
                        rs.getString("VIECNHO_MOTA"),
                        rs.getTimestamp("VIECNHO_NGAYTAO"),
                        rs.getTimestamp("VIECNHO_NGAYCAPNHAT"),
                        rs.getInt("VIECNHO_NGUOITAO"),
                        rs.getInt("VIECNHO_NGUOICAPNHAT"),
                        rs.getInt("VIECNHO_TRANGTHAICONGVIEC"),
                        rs.getString("VIECNHO_TIENDO"),
                        rs.getString("VIECNHO_GHICHU")
                    );
                    timCongViecNho.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tìm việc nhỏ" + sErr);
        }
        return timCongViecNho;
    }
     public int thayDoiPassDomain(String param_matKhauCu,String param_matKhauMoi,int userId){
     int returnCode=0;
     try{
         String query = "{ ? = call sVCB_DoiMatKhau (?,?,?)}";
//         System.out.println("tenChucVu: " + tenChucVu);
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
         cs.setInt("User_ID", userId);
         cs.setString ("PassMoi", param_matKhauMoi);
         cs.setString ("PassCu", param_matKhauCu);
         cs.execute();
        returnCode = cs.getInt(1);
        try
        {
          cs.close();
        } 
        catch (Exception e) 
        {
            System.out.println("Err thay đổi pass  :" + e.getMessage());
        }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err lưu việc nhỏ:" + sErr);
        }finally{
            return returnCode;
        }
     }
     public List<VCBQuaKhuyenMaiEntity> timQuaKhuyenMaiDomain (float soDiem){
        List<VCBQuaKhuyenMaiEntity> timQuaKhuyenMai = new ArrayList<VCBQuaKhuyenMaiEntity>();
        
        try {         
            
            String query = "{ call sVCB_KhuyenMai_TimQua (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setFloat("soDiem", soDiem);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBQuaKhuyenMaiEntity entity = new VCBQuaKhuyenMaiEntity(
                        rs.getInt("QuaID"),
                        rs.getString("tenQua"),
                        rs.getInt("soDiem")
                    );
                    timQuaKhuyenMai.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tim quà khuyến mãi" + sErr);
        }
        return timQuaKhuyenMai;
    }  
     public List<VCBQuaKhuyenMaiEntity> timQuaKhuyenMaiDaNhanDomain (String cif){
        List<VCBQuaKhuyenMaiEntity> timQuaKhuyenMai = new ArrayList<VCBQuaKhuyenMaiEntity>();
        
        try {         
            String query = "{ call sVCB_KhuyenMai_TimQua_DaNhan (?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setString("cif", cif);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBQuaKhuyenMaiEntity entity = new VCBQuaKhuyenMaiEntity(
                        rs.getInt("QuaID"),
                        rs.getString("tenQua"),
                        rs.getInt("soDiem"),
                        rs.getTimestamp("ngayTao"),
                        rs.getTimestamp("ngayCapNhat"),
                        rs.getInt("nguoiTao"),
                        rs.getInt("nguoiCapNhat"),
                        rs.getInt("soLuongQua"),
                        rs.getString("cif")
                    );
                    timQuaKhuyenMai.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tim quà khuyến mãi" + sErr);
        }
        return timQuaKhuyenMai;
    }  
     public List<VCBQuaKhuyenMaiEntity> timKhachHangTietKiemKhuyenMaiDomain (String cif){
        List<VCBQuaKhuyenMaiEntity> timQuaKhuyenMai = new ArrayList<VCBQuaKhuyenMaiEntity>();
        
        try {         
            
            String query = "{ call sVCB_KhuyenMai_Tim_KhachHangTietKiem (?)}";
            
            CallableStatement cs = con.prepareCall(query);
            cs.setString("cif", cif);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {//Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT, String CIF,
                    //float SODIEMTICHLUY, String SOTAIKHOAN, int LOAITAIKHOANTIETKIEM, int KYHAN, int SOTIEN
                    VCBQuaKhuyenMaiEntity entity = new VCBQuaKhuyenMaiEntity(
                        rs.getTimestamp("ngayTao"),
                        rs.getTimestamp("ngayCapNhat"),
                        rs.getInt("nguoiTao"),
                        rs.getInt("nguoiCapNhat"),
                        rs.getString("CIF"),
                        rs.getFloat("soDiemTichLuy"),
                        rs.getString("soTaiKhoan"),
                        rs.getInt("loaiTaiKhoanTietKiem"),
                        rs.getInt("kyHan"),
                        rs.getLong("soTien")
                    );
                    timQuaKhuyenMai.add(entity);
                }
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("E lỗi roài tim khach hang tiet kiem" + sErr);
        }
        return timQuaKhuyenMai;
    }  
     public int themKhachHangKhuyenMaiDomain(String param_cif,String param_tenKhachHang
            ,String param_soDienThoai,String param_cmt,Date ngayCap,
            String param_noiCap,String param_diaChi,float diemTichLuy,float  diemDaDung, int nguoi){
     int returnCode=0;
     try{
         String query = "{ ? = call sVCB_Them_KhachHangKhuyenMai (?,?,?,?,?,?,?,?,?,?)}";
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
            cs.setString("cif",param_cif);
            cs.setString("tenKhachHang",param_tenKhachHang);
            cs.setString("soDienThoai",param_soDienThoai);
            cs.setString("cmt",param_cmt);
            cs.setTimestamp("ngayCap", new Timestamp(ngayCap.getTime()));
            cs.setString("noiCap",param_noiCap);
            cs.setString("diaChi",param_diaChi);
            cs.setFloat("diemTichLuy", diemTichLuy);
            cs.setFloat("diemDaDung", diemDaDung);
            cs.setInt("nguoi", nguoi);
         cs.execute();
            returnCode = cs.getInt(1);
            try
            {
              cs.close();
            } 
            catch (Exception e) 
            {
                System.out.println("Err MapSellerId Insert :" + e.getMessage());
            }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err MapSellerId Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
     public int themTaiKhoanTietKiemKhuyenMaiDomain(String param_cif,String param_soTaiKhoan,
             Long soTienTietKiem,int loaiTietKiem,int kyHan,float diemTichLuy,int nguoi){
     int returnCode=0;
     try{
         String query = "{ ? = call sVCB_Them_TaiKhoanTietKiemKhuyenMai (?,?,?,?,?,?,?)}";
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
            cs.setString("cif",param_cif);
            cs.setString("soTaiKhoan",param_soTaiKhoan);
            cs.setLong("soTienTietKiem", soTienTietKiem);
            cs.setInt("loaiTietKiem", loaiTietKiem);
            cs.setInt("kyHan", kyHan);
            cs.setFloat("diemTichLuy", diemTichLuy);
            cs.setInt("nguoi", nguoi);
         cs.execute();
            returnCode = cs.getInt(1);
            try
            {
              cs.close();
            } 
            catch (Exception e) 
            {
                System.out.println("Err Them_TaiKhoanTietKiemKhuyenMa Insert :" + e.getMessage());
            }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err Them_TaiKhoanTietKiemKhuyenMa Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
     public List<VCBQuaKhuyenMaiEntity> timKhachHangKhuyenMai(String cif,String ten){
        List<VCBQuaKhuyenMaiEntity> timHuyDongVon = new ArrayList<VCBQuaKhuyenMaiEntity>();
        try {  
           
            String query = "{ call sVCB_TimKiem_ThongTinKhachHangKhuyenMai (?,?)}";
            CallableStatement cs = con.prepareCall(query);
            cs.setString("cif", cif);
            cs.setString("ten", ten);
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    VCBQuaKhuyenMaiEntity entity = new VCBQuaKhuyenMaiEntity(
                        rs.getTimestamp("ngayTao"),
                        rs.getTimestamp("ngayCapNhat"),
                        rs.getInt("nguoiTao"),
                        rs.getInt("nguoiCapNhat"),
                        rs.getString("CIF"),
                        rs.getInt("ID"),
                        rs.getString("tenKhachHang"),
                        rs.getString("diaChi"),
                        rs.getString("CMT"),
                        rs.getString("ngayCap"),
                        rs.getString("noiCap"),
                        rs.getString("soDienThoai"),
                        rs.getFloat("soDiemTichLuy"),
                        rs.getFloat("soDiemDaDung")
                    );
                    timHuyDongVon.add(entity);
                }
                rs.close();
            }
            cs.close();
//            System.out.print(a.getSv());
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("get tim khach hang khuyen mai  Err:" + sErr);
        }
        //System.out.println("size = "+ SeachEnscash.size());
        return timHuyDongVon;
    }
     public int themQuaKhuyenMaiDaNhanDomain(String param_cif,int quaId,int soLuongQua,int nguoi){
     int returnCode=0;
     try{
         String query = "{ ? = call sVCB_Them_QuaKhuyenMaiDaNhan (?,?,?,?)}";
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
            cs.setString("cif",param_cif);
            cs.setInt("quaId", quaId);
            cs.setInt("soLuongQua", soLuongQua);
            cs.setInt("nguoi", nguoi);
         cs.execute();
            returnCode = cs.getInt(1);
            try
            {
              cs.close();
            } 
            catch (Exception e) 
            {
                System.out.println("Err sVCB_Them_QuaKhuyenMaiDaNhan Insert :" + e.getMessage());
            }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err sVCB_Them_QuaKhuyenMaiDaNhan Insert :" + sErr);
        }finally{
            return returnCode;
        }
     }
     public int capNhatQuaKhuyenMaiDaNhanDomain(String param_cif,int nguoi){
     int returnCode=0;
     try{
         String query = "{ ? = call sVCB_CapNhat_QuaKhuyenMaiDaNhan (?,?)}";
         CallableStatement cs = con.prepareCall(query);
         cs.registerOutParameter(1, Types.BIGINT);
            cs.setString("cif",param_cif);
            cs.setInt("nguoi", nguoi);
         cs.execute();
            returnCode = cs.getInt(1);
            try
            {
              cs.close();
            } 
            catch (Exception e) 
            {
                System.out.println("Err capNhatQuaKhuyenMaiDaNhanDomain :" + e.getMessage());
            }
     }
     catch (Exception ex) {
            returnCode = -1;
            String sErr = ex.getMessage();
            System.out.println("Err scapNhatQuaKhuyenMaiDaNhanDomain :" + sErr);
        }finally{
            return returnCode;
        }
     }
     public List<VCBQuaKhuyenMaiEntity> khuyenMai_BaoCao_Qua_Domain(Date tuNgay, Date denNgay){
        List<VCBQuaKhuyenMaiEntity> timMapQuyen = new ArrayList<VCBQuaKhuyenMaiEntity>();
        
        try {         
            
            String query = "{ call sVCB_KhuyenMai_BaoCao_qua (?,?)}";
//            System.out.println("vao tu ngay  : " + new Timestamp(tuNgay.getTime()));
//            System.out.println("vao den ngay  : " + new Timestamp(denNgay.getTime()));
            CallableStatement cs = con.prepareCall(query);
            cs.setTimestamp("tuNgay", new Timestamp(tuNgay.getTime()));
            cs.setTimestamp("denNgay",  new Timestamp(denNgay.getTime()));
            // fomat ngày ================================
            Calendar calendar = Calendar.getInstance();
            Calendar calendar1 = Calendar.getInstance();
            Date ngayTao=null;
            Date ngayCapNhat=null;
            //============================================
            ResultSet rs = cs.executeQuery();
            if(rs != null)
            {
                while(rs.next())
                {
                    
                    calendar.setTime(rs.getTimestamp("ngayTao"));
                    calendar.add(Calendar.DATE, 2);
                    ngayTao = calendar.getTime();
                    calendar1.setTime(rs.getTimestamp("ngayCapNhat"));
                    calendar1.add(Calendar.DATE, 2);
                    ngayCapNhat =calendar1.getTime();
//                    System.out.println("hayghe 3232 : " + new Timestamp(denNgay.getTime()));
                    VCBQuaKhuyenMaiEntity entity = new VCBQuaKhuyenMaiEntity(
                        rs.getString("HOTEN"),
                        rs.getInt("PHONGBANID"),
                        rs.getInt("QuaID"),
                        rs.getString("tenQua"),
                        new Timestamp(ngayTao.getTime()), 
                        new Timestamp(ngayCapNhat.getTime()), 
                        rs.getInt("nguoiTao"),
                        rs.getInt("nguoiCapNhat"),
                        rs.getInt("SoLuong"),
                        rs.getString("CIF"),
                        rs.getString("tenKhachHang"),
                        rs.getFloat("soDiemTichLuy"),
                        rs.getFloat("soDiemDaDung")
                    );
                    timMapQuyen.add(entity);
                }
//                System.out.println("vao den ngay  : " + timMapQuyen);
                rs.close();
            }
            cs.close();
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            String sErr = ex.getMessage();
            System.out.println("sVCB_KhuyenMai_BaoCao_qua" + sErr);
        }
        return timMapQuyen;
    }
}
