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
public class VCBQuyenEntity {
    private int QUYENID;
    private String TENQUYEN;
    private String MOTA;
    private Date NGAYTAO;
    private Date NGAYCAPNHAT;
    private int USERTAO;
    private int USERCAPNHAT;
    private int USERID;
    private int PHANQUYENID;
    private int TRANGTHAIID;

    public VCBQuyenEntity() {
    }

    public VCBQuyenEntity(int QUYENID, String TENQUYEN, String MOTA, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT, int USERID, int PHANQUYENID, int TRANGTHAIID) {
        this.QUYENID = QUYENID;
        this.TENQUYEN = TENQUYEN;
        this.MOTA = MOTA;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.USERTAO = USERTAO;
        this.USERCAPNHAT = USERCAPNHAT;
        this.USERID = USERID;
        this.PHANQUYENID = PHANQUYENID;
        this.TRANGTHAIID = TRANGTHAIID;
    }

    public VCBQuyenEntity(int QUYENID, String TENQUYEN, String MOTA, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT, int USERID, int PHANQUYENID) {
        this.QUYENID = QUYENID;
        this.TENQUYEN = TENQUYEN;
        this.MOTA = MOTA;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.USERTAO = USERTAO;
        this.USERCAPNHAT = USERCAPNHAT;
        this.USERID = USERID;
        this.PHANQUYENID = PHANQUYENID;
    }

    public VCBQuyenEntity(int QUYENID, String TENQUYEN, String MOTA, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT) {
        this.QUYENID = QUYENID;
        this.TENQUYEN = TENQUYEN;
        this.MOTA = MOTA;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.USERTAO = USERTAO;
        this.USERCAPNHAT = USERCAPNHAT;
    }

    public int getTRANGTHAIID() {
        return TRANGTHAIID;
    }

    public void setTRANGTHAIID(int TRANGTHAIID) {
        this.TRANGTHAIID = TRANGTHAIID;
    }

    public void setUSERID(int USERID) {
        this.USERID = USERID;
    }

    public void setPHANQUYENID(int PHANQUYENID) {
        this.PHANQUYENID = PHANQUYENID;
    }

    public int getUSERID() {
        return USERID;
    }

    public int getPHANQUYENID() {
        return PHANQUYENID;
    }

    public void setQUYENID(int QUYENID) {
        this.QUYENID = QUYENID;
    }

    public void setTENQUYEN(String TENQUYEN) {
        this.TENQUYEN = TENQUYEN;
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

    public int getQUYENID() {
        return QUYENID;
    }

    public String getTENQUYEN() {
        return TENQUYEN;
    }

    public String getMOTA() {
        return MOTA;
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

   
    
}
