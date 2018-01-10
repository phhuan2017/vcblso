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
public class VCBCongViecNhoEntity {
    private int STT;
    private int CONGVIECID;
    private String VIECNHO_TEN;
    private Date VIECNHO_THOIHANHOANTHANH;
    private String VIECNHO_MOTA;
    private Date VIECNHO_NGAYTAO;
    private Date VIECNHO_NGAYCAPNHAT;
    private int VIECNHO_NGUOITAO;
    private int VIECNHO_NGUOICAPNHAT;
    private int VIECNHO_TRANGTHAICONGVIEC;
    private String VIECNHO_TIENDO;
    private String VIECNHO_GHICHU;

    public VCBCongViecNhoEntity(int STT, int CONGVIECID, String VIECNHO_TEN, Date VIECNHO_THOIHANHOANTHANH,
            String VIECNHO_MOTA, Date VIECNHO_NGAYTAO, Date VIECNHO_NGAYCAPNHAT, int VIECNHO_NGUOITAO, int VIECNHO_NGUOICAPNHAT, 
            int VIECNHO_TRANGTHAICONGVIEC, String VIECNHO_TIENDO, String VIECNHO_GHICHU) {
        this.STT = STT;
        this.CONGVIECID = CONGVIECID;
        this.VIECNHO_TEN = VIECNHO_TEN;
        this.VIECNHO_THOIHANHOANTHANH = VIECNHO_THOIHANHOANTHANH;
        this.VIECNHO_MOTA = VIECNHO_MOTA;
        this.VIECNHO_NGAYTAO = VIECNHO_NGAYTAO;
        this.VIECNHO_NGAYCAPNHAT = VIECNHO_NGAYCAPNHAT;
        this.VIECNHO_NGUOITAO = VIECNHO_NGUOITAO;
        this.VIECNHO_NGUOICAPNHAT = VIECNHO_NGUOICAPNHAT;
        this.VIECNHO_TRANGTHAICONGVIEC = VIECNHO_TRANGTHAICONGVIEC;
        this.VIECNHO_TIENDO = VIECNHO_TIENDO;
        this.VIECNHO_GHICHU = VIECNHO_GHICHU;
    }

    public void setSTT(int STT) {
        this.STT = STT;
    }

    public void setCONGVIECID(int CONGVIECID) {
        this.CONGVIECID = CONGVIECID;
    }

    public void setVIECNHO_TEN(String VIECNHO_TEN) {
        this.VIECNHO_TEN = VIECNHO_TEN;
    }

    public void setVIECNHO_THOIHANHOANTHANH(Date VIECNHO_THOIHANHOANTHANH) {
        this.VIECNHO_THOIHANHOANTHANH = VIECNHO_THOIHANHOANTHANH;
    }

    public void setVIECNHO_MOTA(String VIECNHO_MOTA) {
        this.VIECNHO_MOTA = VIECNHO_MOTA;
    }

    public void setVIECNHO_NGAYTAO(Date VIECNHO_NGAYTAO) {
        this.VIECNHO_NGAYTAO = VIECNHO_NGAYTAO;
    }

    public void setVIECNHO_NGAYCAPNHAT(Date VIECNHO_NGAYCAPNHAT) {
        this.VIECNHO_NGAYCAPNHAT = VIECNHO_NGAYCAPNHAT;
    }

    public void setVIECNHO_NGUOITAO(int VIECNHO_NGUOITAO) {
        this.VIECNHO_NGUOITAO = VIECNHO_NGUOITAO;
    }

    public void setVIECNHO_NGUOICAPNHAT(int VIECNHO_NGUOICAPNHAT) {
        this.VIECNHO_NGUOICAPNHAT = VIECNHO_NGUOICAPNHAT;
    }

    public void setVIECNHO_TRANGTHAICONGVIEC(int VIECNHO_TRANGTHAICONGVIEC) {
        this.VIECNHO_TRANGTHAICONGVIEC = VIECNHO_TRANGTHAICONGVIEC;
    }

    public void setVIECNHO_TIENDO(String VIECNHO_TIENDO) {
        this.VIECNHO_TIENDO = VIECNHO_TIENDO;
    }

    public void setVIECNHO_GHICHU(String VIECNHO_GHICHU) {
        this.VIECNHO_GHICHU = VIECNHO_GHICHU;
    }

    public int getSTT() {
        return STT;
    }

    public int getCONGVIECID() {
        return CONGVIECID;
    }

    public String getVIECNHO_TEN() {
        return VIECNHO_TEN;
    }
    public String getVIECNHO_THOIHANHOANTHANH() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String date;
        try {
            date=formatter.format(this.VIECNHO_THOIHANHOANTHANH);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public String getVIECNHO_MOTA() {
        return VIECNHO_MOTA;
    }

    public String getVIECNHO_NGAYTAO() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String date;
        try {
            date=formatter.format(this.VIECNHO_NGAYTAO);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public String getVIECNHO_NGAYCAPNHAT() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String date;
        try {
            date=formatter.format(this.VIECNHO_NGAYCAPNHAT);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public int getVIECNHO_NGUOITAO() {
        return VIECNHO_NGUOITAO;
    }

    public int getVIECNHO_NGUOICAPNHAT() {
        return VIECNHO_NGUOICAPNHAT;
    }

    public int getVIECNHO_TRANGTHAICONGVIEC() {
        return VIECNHO_TRANGTHAICONGVIEC;
    }

    public String getVIECNHO_TIENDO() {
        return VIECNHO_TIENDO;
    }

    public String getVIECNHO_GHICHU() {
        return VIECNHO_GHICHU;
    }
    
}
