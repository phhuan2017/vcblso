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
public class VCBLINKEntity {
    private int LINKID;
    private String TEN;
    private String URL;
    private String GHICHU;
    private Date NGAYTAO;
    private Date NGAYCAPNHAT;
    private int NGUOITAO;
//    private String TENNGUOITAO;
    private int NGUOICAPNHAT;
    private int LOAICHUONGTRINH;
//    private String NGUOICAPNHAT;

    public VCBLINKEntity(int LINKID, String TEN, String URL) {
        this.LINKID = LINKID;
        this.TEN = TEN;
        this.URL = URL;
    }

    public VCBLINKEntity(int LINKID, String TEN, String URL, String GHICHU, Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT) {
        this.LINKID = LINKID;
        this.TEN = TEN;
        this.URL = URL;
        this.GHICHU = GHICHU;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
    }

    public VCBLINKEntity(int LINKID, String TEN, String URL, String GHICHU, Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT, int LOAICHUONGTRINH) {
        this.LINKID = LINKID;
        this.TEN = TEN;
        this.URL = URL;
        this.GHICHU = GHICHU;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
        this.LOAICHUONGTRINH = LOAICHUONGTRINH;
    }

    public int getLOAICHUONGTRINH() {
        return LOAICHUONGTRINH;
    }

    public void setLOAICHUONGTRINH(int LOAICHUONGTRINH) {
        this.LOAICHUONGTRINH = LOAICHUONGTRINH;
    }

    public void setGHICHU(String GHICHU) {
        this.GHICHU = GHICHU;
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

    public String getGHICHU() {
        return GHICHU;
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

    public int getNGUOITAO() {
        return NGUOITAO;
    }

    public int getNGUOICAPNHAT() {
        return NGUOICAPNHAT;
    }

    public void setLINKID(int LINKID) {
        this.LINKID = LINKID;
    }

    public void setTEN(String TEN) {
        this.TEN = TEN;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public int getLINKID() {
        return LINKID;
    }

    public String getTEN() {
        return TEN;
    }

    public String getURL() {
        return URL;
    }
    
}
