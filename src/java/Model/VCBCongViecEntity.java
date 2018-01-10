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
public class VCBCongViecEntity {
    private int CONGVIECID;
    private String CONGVIECTEN;
    private Date THOIHANHOANTHANH;
    private String CONGVANLIENQUAN;
    private String MOTA;
    private Date NGAYTAO;
    private Date NGAYCAPNHAT;
    private int NGUOITAO;
    private int NGUOICAPNHAT;
    private int TRANGTHAICONGVIEC;
    private String TIENDO;
    private String TENTRANGTHAI;

    public VCBCongViecEntity(int CONGVIECID, String CONGVIECTEN, Date THOIHANHOANTHANH, String CONGVANLIENQUAN, String MOTA, Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT, int TRANGTHAICONGVIEC, String TIENDO, String TENTRANGTHAI) {
        this.CONGVIECID = CONGVIECID;
        this.CONGVIECTEN = CONGVIECTEN;
        this.THOIHANHOANTHANH = THOIHANHOANTHANH;
        this.CONGVANLIENQUAN = CONGVANLIENQUAN;
        this.MOTA = MOTA;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
        this.TRANGTHAICONGVIEC = TRANGTHAICONGVIEC;
        this.TIENDO = TIENDO;
        this.TENTRANGTHAI = TENTRANGTHAI;
    }

    public void setTENTRANGTHAI(String TENTRANGTHAI) {
        this.TENTRANGTHAI = TENTRANGTHAI;
    }

    public String getTENTRANGTHAI() {
        return TENTRANGTHAI;
    }

    public VCBCongViecEntity(int CONGVIECID, String CONGVIECTEN, Date THOIHANHOANTHANH, String CONGVANLIENQUAN, String MOTA, Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT, int TRANGTHAICONGVIEC, String TIENDO) {
        this.CONGVIECID = CONGVIECID;
        this.CONGVIECTEN = CONGVIECTEN;
        this.THOIHANHOANTHANH = THOIHANHOANTHANH;
        this.CONGVANLIENQUAN = CONGVANLIENQUAN;
        this.MOTA = MOTA;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
        this.TRANGTHAICONGVIEC = TRANGTHAICONGVIEC;
        this.TIENDO = TIENDO;
    }

    public VCBCongViecEntity() {
    }

    public void setCONGVIECID(int CONGVIECID) {
        this.CONGVIECID = CONGVIECID;
    }

    public void setCONGVIECTEN(String CONGVIECTEN) {
        this.CONGVIECTEN = CONGVIECTEN;
    }

    public void setTHOIHANHOANTHANH(Date THOIHANHOANTHANH) {
        this.THOIHANHOANTHANH = THOIHANHOANTHANH;
    }

    public void setCONGVANLIENQUAN(String CONGVANLIENQUAN) {
        this.CONGVANLIENQUAN = CONGVANLIENQUAN;
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

    public void setNGUOITAO(int NGUOITAO) {
        this.NGUOITAO = NGUOITAO;
    }

    public void setNGUOICAPNHAT(int NGUOICAPNHAT) {
        this.NGUOICAPNHAT = NGUOICAPNHAT;
    }

    public void setTRANGTHAICONGVIEC(int TRANGTHAICONGVIEC) {
        this.TRANGTHAICONGVIEC = TRANGTHAICONGVIEC;
    }

    public void setTIENDO(String TIENDO) {
        this.TIENDO = TIENDO;
    }

    public int getCONGVIECID() {
        return CONGVIECID;
    }

    public String getCONGVIECTEN() {
        return CONGVIECTEN;
    }

    public String getTHOIHANHOANTHANH() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String date;
        try {
            date=formatter.format(this.THOIHANHOANTHANH);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public String getCONGVANLIENQUAN() {
        return CONGVANLIENQUAN;
    }

    public String getMOTA() {
        return MOTA;
    }

    public int getNGUOITAO() {
        return NGUOITAO;
    }

    public int getNGUOICAPNHAT() {
        return NGUOICAPNHAT;
    }

    public int getTRANGTHAICONGVIEC() {
        return TRANGTHAICONGVIEC;
    }

    public String getTIENDO() {
        return TIENDO;
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
//    public String getNGAYCAPNHAT() {
//        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
//        String date;
//        try {
//            date=formatter.format(this.NGAYCAPNHAT);
//        } catch (Exception e) {
//            date=null;
//        }
//        return date;
//    }
}
