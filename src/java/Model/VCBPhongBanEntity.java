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
public class VCBPhongBanEntity {
    private int PHONGBANID;
    private String TENPHONG;
    private String MOTA;
    private Date NGAYTAO;
    private Date NGAYCAPNHAT;
    private int USERTAO;
    private int USERCAPNHAT;
    private int TRANGTHAIID;        

    public VCBPhongBanEntity(int PHONGBANID, String TENPHONG, String MOTA, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT, int TRANGTHAIID) {
        this.PHONGBANID = PHONGBANID;
        this.TENPHONG = TENPHONG;
        this.MOTA = MOTA;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.USERTAO = USERTAO;
        this.USERCAPNHAT = USERCAPNHAT;
        this.TRANGTHAIID = TRANGTHAIID;
    }
    

    public void setPHONGBANID(int PHONGBANID) {
        this.PHONGBANID = PHONGBANID;
    }

    public void setTENPHONG(String TENPHONG) {
        this.TENPHONG = TENPHONG;
    }

    public void setMOTA(String MOTA) {
        this.MOTA = MOTA;
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

    public void setTRANGTHAIID(int TRANGTHAIID) {
        this.TRANGTHAIID = TRANGTHAIID;
    }

    public int getPHONGBANID() {
        return PHONGBANID;
    }

    public String getTENPHONG() {
        return TENPHONG;
    }

    public String getMOTA() {
        return MOTA;
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

    public int getTRANGTHAIID() {
        return TRANGTHAIID;
    }
    
}
