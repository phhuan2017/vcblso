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
public class VCBMapQuyenEntity {
    private int MAPQUYENID;
    private int QUYENID;
    private int NUTID;
    private int TRANGTHAIID;
    private Date NGAYTAO;
    private Date NGAYCAPNHAT;
    private int NGUOITAO;
    private int NGUOICAPNHAT;
    private String NUTNAME;
    private String TENQUYEN;
    private String MOTAQUYEN;
    private String NUT_MOTA;

    public VCBMapQuyenEntity() {
    }

    public VCBMapQuyenEntity(int NUTID, String NUTNAME) {
        this.NUTID = NUTID;
        this.NUTNAME = NUTNAME;
    }

    public VCBMapQuyenEntity(int NUTID, String NUTNAME, String MOTAQUYEN) {
        this.NUTID = NUTID;
        this.NUTNAME = NUTNAME;
        this.MOTAQUYEN = MOTAQUYEN;
    }

    public VCBMapQuyenEntity(int MAPQUYENID, int QUYENID, int NUTID, int TRANGTHAIID, Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT, String NUTNAME, String NUT_MOTA) {
        this.MAPQUYENID = MAPQUYENID;
        this.QUYENID = QUYENID;
        this.NUTID = NUTID;
        this.TRANGTHAIID = TRANGTHAIID;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
        this.NUTNAME = NUTNAME;
        this.NUT_MOTA = NUT_MOTA;
    }
    
    public VCBMapQuyenEntity(int MAPQUYENID, int QUYENID, int NUTID, int TRANGTHAIID, Date NGAYTAO, Date NGAYCAPNHAT, 
            int NGUOITAO, int NGUOICAPNHAT, String NUTNAME, String TENQUYEN, String MOTAQUYEN) {
        this.MAPQUYENID = MAPQUYENID;
        this.QUYENID = QUYENID;
        this.NUTID = NUTID;
        this.TRANGTHAIID = TRANGTHAIID;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
        this.NUTNAME = NUTNAME;
        this.TENQUYEN = TENQUYEN;
        this.MOTAQUYEN = MOTAQUYEN;
    }

    public void setMAPQUYENID(int MAPQUYENID) {
        this.MAPQUYENID = MAPQUYENID;
    }

    public void setQUYENID(int QUYENID) {
        this.QUYENID = QUYENID;
    }

    public void setNUTID(int NUTID) {
        this.NUTID = NUTID;
    }

    public void setTRANGTHAIID(int TRANGTHAIID) {
        this.TRANGTHAIID = TRANGTHAIID;
    }

    public void setNGAYTAO(Date NGAYTAO) {
        this.NGAYTAO = NGAYTAO;
    }

    public void setNGAYCAPNHAT(Date NGAYCAPNHAT) {
        this.NGAYCAPNHAT = NGAYCAPNHAT;
    }

    public void setNGUOITAO(int NGUOITAO) {
        this.NGUOITAO = NGUOITAO;
    }

    public void setNGUOICAPNHAT(int NGUOICAPNHAT) {
        this.NGUOICAPNHAT = NGUOICAPNHAT;
    }

    public void setNUTNAME(String NUTNAME) {
        this.NUTNAME = NUTNAME;
    }

    public void setTENQUYEN(String TENQUYEN) {
        this.TENQUYEN = TENQUYEN;
    }

    public void setMOTAQUYEN(String MOTAQUYEN) {
        this.MOTAQUYEN = MOTAQUYEN;
    }

    public int getMAPQUYENID() {
        return MAPQUYENID;
    }

    public int getQUYENID() {
        return QUYENID;
    }

    public int getNUTID() {
        return NUTID;
    }

    public int getTRANGTHAIID() {
        return TRANGTHAIID;
    }

    public int getNGUOITAO() {
        return NGUOITAO;
    }

    public int getNGUOICAPNHAT() {
        return NGUOICAPNHAT;
    }

    public String getNUTNAME() {
        return NUTNAME;
    }

    public String getTENQUYEN() {
        return TENQUYEN;
    }

    public String getMOTAQUYEN() {
        return MOTAQUYEN;
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
