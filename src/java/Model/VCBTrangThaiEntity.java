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
public class VCBTrangThaiEntity {
    private int TRANGTHAIID;
    private String MOTA;
    private Date NGAYTAO;
    private Date NGAYCAPNHAT;
    private int USERTAO;
    private int USERCAPNHAT;

    public VCBTrangThaiEntity(int TRANGTHAIID, String MOTA, Date NGAYTAO, Date NGAYCAPNHAT, int USERTAO, int USERCAPNHAT) {
        this.TRANGTHAIID = TRANGTHAIID;
        this.MOTA = MOTA;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.USERTAO = USERTAO;
        this.USERCAPNHAT = USERCAPNHAT;
    }
    
    public void setTRANGTHAIID(int TRANGTHAIID) {
        this.TRANGTHAIID = TRANGTHAIID;
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

    public int getTRANGTHAIID() {
        return TRANGTHAIID;
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
    
}
