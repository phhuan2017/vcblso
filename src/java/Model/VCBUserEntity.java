/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package Model;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Logger;

/**
 *
 * @author HayGhe
 */
public class VCBUserEntity {
    private int USERID;
    private String User_name;
    private String Pass_word;
    private Date NGAYTAO;
    private Date NGAYCAPNHAT;
    private int USERTAO;
    private int USERCAPNHAT;
    private int NGUOIID;
    private int TRANGTHAIID;
    private String MOTA_TRANGTHAI;
    private int PHONGBANID;

    public VCBUserEntity(String User_name, String Pass_word) {
        this.User_name = User_name;
        this.Pass_word = Pass_word;
    }
    public VCBUserEntity(int USERID, String User_name, String Pass_word, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT, int NGUOIID, int TRANGTHAIID,int PHONGBANID) {
        this.USERID = USERID;
        this.User_name = User_name;
        this.Pass_word = Pass_word;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.USERTAO = USERTAO;
        this.USERCAPNHAT = USERCAPNHAT;
        this.NGUOIID = NGUOIID;
        this.TRANGTHAIID = TRANGTHAIID;
        this.PHONGBANID = PHONGBANID;
    }
    public VCBUserEntity(int USERID, String User_name, String Pass_word, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT, int NGUOIID, int TRANGTHAIID, String MOTA_TRANGTHAI) {
        this.USERID = USERID;
        this.User_name = User_name;
        this.Pass_word = Pass_word;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.USERTAO = USERTAO;
        this.USERCAPNHAT = USERCAPNHAT;
        this.NGUOIID = NGUOIID;
        this.TRANGTHAIID = TRANGTHAIID;
        this.MOTA_TRANGTHAI=MOTA_TRANGTHAI;
    }

    public VCBUserEntity(int USERID, String User_name, String Pass_word, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT, int NGUOIID, int TRANGTHAIID, String MOTA_TRANGTHAI, int PHONGBANID) {
        this.USERID = USERID;
        this.User_name = User_name;
        this.Pass_word = Pass_word;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.USERTAO = USERTAO;
        this.USERCAPNHAT = USERCAPNHAT;
        this.NGUOIID = NGUOIID;
        this.TRANGTHAIID = TRANGTHAIID;
        this.MOTA_TRANGTHAI = MOTA_TRANGTHAI;
        this.PHONGBANID = PHONGBANID;
    }

    public void setPHONGBANID(int PHONGBANID) {
        this.PHONGBANID = PHONGBANID;
    }

    public int getPHONGBANID() {
        return PHONGBANID;
    }

    public String getMOTA_TRANGTHAI() {
        return MOTA_TRANGTHAI;
    }

    public void setMOTA_TRANGTHAI(String MOTA_TRANGTHAI) {
        this.MOTA_TRANGTHAI = MOTA_TRANGTHAI;
    }
    
    public void setUSERID(int USERID) {
        this.USERID = USERID;
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

    public void setNGUOIID(int NGUOIID) {
        this.NGUOIID = NGUOIID;
    }

    public void setTRANGTHAIID(int TRANGTHAIID) {
        this.TRANGTHAIID = TRANGTHAIID;
    }

    public int getUSERID() {
        return USERID;
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

    public  String getNGAYCAPNHAT() {
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

    public int getNGUOIID() {
        return NGUOIID;
    }

    public int getTRANGTHAIID() {
        return TRANGTHAIID;
    }

    public String getUser_name() {
        return User_name;
    }

    public String getPass_word() {
        return Pass_word;
    }

    public void setUser_name(String User_name) {
        this.User_name = User_name;
    }

    public void setPass_word(String Pass_word) {
        this.Pass_word = Pass_word;
    }
    
}
