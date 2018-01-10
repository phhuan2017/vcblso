/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author hayghe
 */
public class VCBNguoiTimKiemEntity {
    private int NGUOIID;
    private String HOTEN;
    private Date NGAYSINH;
    private String DIACHI;
    private int PHONGBANID;
    private int CHUCVU;
    private int TRANGTHAIID;
    private String CMT;
    private int USERID;
    private String User_name;
    private String Pass_word;

    public VCBNguoiTimKiemEntity() {
    }

    public VCBNguoiTimKiemEntity(int NGUOIID, String HOTEN, Date NGAYSINH, String DIACHI, int PHONGBANID, int CHUCVU, int TRANGTHAIID, String CMT, int USERID, String User_name, String Pass_word) {
        this.NGUOIID = NGUOIID;
        this.HOTEN = HOTEN;
        this.NGAYSINH = NGAYSINH;
        this.DIACHI = DIACHI;
        this.PHONGBANID = PHONGBANID;
        this.CHUCVU = CHUCVU;
        this.TRANGTHAIID = TRANGTHAIID;
        this.CMT = CMT;
        this.USERID = USERID;
        this.User_name = User_name;
        this.Pass_word = Pass_word;
    }

    public void setNGUOIID(int NGUOIID) {
        this.NGUOIID = NGUOIID;
    }

    public void setHOTEN(String HOTEN) {
        this.HOTEN = HOTEN;
    }

    public void setNGAYSINH(Date NGAYSINH) {
        this.NGAYSINH = NGAYSINH;
    }

    public void setDIACHI(String DIACHI) {
        this.DIACHI = DIACHI;
    }

    public void setPHONGBANID(int PHONGBANID) {
        this.PHONGBANID = PHONGBANID;
    }

    public void setCHUCVU(int CHUCVU) {
        this.CHUCVU = CHUCVU;
    }

    public void setTRANGTHAIID(int TRANGTHAIID) {
        this.TRANGTHAIID = TRANGTHAIID;
    }

    public void setCMT(String CMT) {
        this.CMT = CMT;
    }

    public void setUSERID(int USERID) {
        this.USERID = USERID;
    }

    public void setUser_name(String User_name) {
        this.User_name = User_name;
    }

    public void setPass_word(String Pass_word) {
        this.Pass_word = Pass_word;
    }

    public int getNGUOIID() {
        return NGUOIID;
    }

    public String getHOTEN() {
        return HOTEN;
    }

    public String getNGAYSINH() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String date;
        try {
            date=formatter.format(this.NGAYSINH);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public String getDIACHI() {
        return DIACHI;
    }

    public int getPHONGBANID() {
        return PHONGBANID;
    }

    public int getCHUCVU() {
        return CHUCVU;
    }

    public int getTRANGTHAIID() {
        return TRANGTHAIID;
    }

    public String getCMT() {
        return CMT;
    }

    public int getUSERID() {
        return USERID;
    }

    public String getUser_name() {
        return User_name;
    }

    public String getPass_word() {
        return Pass_word;
    }
    
    
}
