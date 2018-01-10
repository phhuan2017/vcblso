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
public class VCBNguoiEntity {
    private int NGUOIID;
    private String HOTEN;
    private Date NGAYSINH;
    private Date NGAYTAO;
    private Date NGAYCAPNHAT;
    private int USERTAO;
    private int USERCAPNHAT;
    private String DIACHI;
    private int PHONGBANID;
    private int CHUCVU;
    private int TRANGTHAIID;
    private String CMT;
    private String SELLERID;

    public VCBNguoiEntity(int NGUOIID, String HOTEN, Date NGAYSINH, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT, String DIACHI, int PHONGBANID, int CHUCVU, int TRANGTHAIID, String CMT, String SELLERID) {
        this.NGUOIID = NGUOIID;
        this.HOTEN = HOTEN;
        this.NGAYSINH = NGAYSINH;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.USERTAO = USERTAO;
        this.USERCAPNHAT = USERCAPNHAT;
        this.DIACHI = DIACHI;
        this.PHONGBANID = PHONGBANID;
        this.CHUCVU = CHUCVU;
        this.TRANGTHAIID = TRANGTHAIID;
        this.CMT = CMT;
        this.SELLERID = SELLERID;
    }

//    public VCBNguoiEntity(int NGUOIID, String HOTEN, Date NGAYSINH, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT, String DIACHI, int PHONGBANID, int CHUCVU, int TRANGTHAIID,String CMT) {
//        this.NGUOIID = NGUOIID;
//        this.HOTEN = HOTEN;
//        this.NGAYSINH = NGAYSINH;
//        this.NGAYTAO = NGAYTAO;
//        this.NGAYCAPNHAT = NGAYCAPNHAT;
//        this.USERTAO = USERTAO;
//        this.USERCAPNHAT = USERCAPNHAT;
//        this.DIACHI = DIACHI;
//        this.PHONGBANID = PHONGBANID;
//        this.CHUCVU = CHUCVU;
//        this.TRANGTHAIID = TRANGTHAIID;
//        this.CMT = CMT;
//    }

    public void setSELLERID(String SELLERID) {
        this.SELLERID = SELLERID;
    }

    public String getSELLERID() {
        return SELLERID;
    }

    public String getCMT() {
        return CMT;
    }

    public void setCMT(String CMT) {
        this.CMT = CMT;
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

    public void setNGAYTAO(Date NGAYTAO) {
        this.NGAYTAO = NGAYTAO;
    }

    public void setNGAYCAPNHAT(Date NGAYCAPNHAT) {
        this.NGAYCAPNHAT = NGAYCAPNHAT;
    }

    public void setUSERTAO(int USERTAO) {
        this.USERTAO = USERTAO;
    }

    public void setUSERCAPNHAT(int USERCAPNHAT) {
        this.USERCAPNHAT = USERCAPNHAT;
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

    public String getNGAYTAO() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String date;
        try {
            date=formatter.format(this.NGAYTAO);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public String getNGAYCAPNHAT() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String date;
        try {
            date=formatter.format(this.NGAYCAPNHAT);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public int getUSERTAO() {
        return USERTAO;
    }

    public int getUSERCAPNHAT() {
        return USERCAPNHAT;
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
    
}
