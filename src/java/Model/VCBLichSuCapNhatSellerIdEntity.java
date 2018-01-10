/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author adminadLSO
 */
public class VCBLichSuCapNhatSellerIdEntity {
    private String TK;
    private String TKTYPE;
    private String NT4;
    private String PRDTYP;
    private String CFNO;
    private String MANV;
    private String TELLERID;
    private int MAPHONG;
    private String TEN;
    private BigDecimal XACBAL;
    private String SELLERID;
    private BigDecimal XINRAT;
    private BigDecimal XOTACC;
    private Date DATOPN;
    private String TRANGTHAI;
    private Date NGAYTAO;
    private Date NGAYCAPNHAT;
    private int NGUOITAO;
    private int NGUOICAPNHAT;

    public VCBLichSuCapNhatSellerIdEntity(String TK, String TKTYPE, String NT4, String PRDTYP, String MANV, String TELLERID, int MAPHONG, String TEN, String SELLERID, Date DATOPN, String TRANGTHAI, Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT) {
        this.TK = TK;
        this.TKTYPE = TKTYPE;
        this.NT4 = NT4;
        this.PRDTYP = PRDTYP;
        this.MANV = MANV;
        this.TELLERID = TELLERID;
        this.MAPHONG = MAPHONG;
        this.TEN = TEN;
        this.SELLERID = SELLERID;
        this.DATOPN = DATOPN;
        this.TRANGTHAI = TRANGTHAI;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
    }

    public VCBLichSuCapNhatSellerIdEntity(String TK, String TKTYPE, String NT4, String PRDTYP, String CFNO, String MANV, String TELLERID, int MAPHONG, String TEN, BigDecimal XACBAL, String SELLERID, BigDecimal XINRAT, BigDecimal XOTACC, Date DATOPN, String TRANGTHAI, Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT) {
        this.TK = TK;
        this.TKTYPE = TKTYPE;
        this.NT4 = NT4;
        this.PRDTYP = PRDTYP;
        this.CFNO = CFNO;
        this.MANV = MANV;
        this.TELLERID = TELLERID;
        this.MAPHONG = MAPHONG;
        this.TEN = TEN;
        this.XACBAL = XACBAL;
        this.SELLERID = SELLERID;
        this.XINRAT = XINRAT;
        this.XOTACC = XOTACC;
        this.DATOPN = DATOPN;
        this.TRANGTHAI = TRANGTHAI;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
    }

    public String getTK() {
        return TK;
    }

    public String getTKTYPE() {
        return TKTYPE;
    }

    public String getNT4() {
        return NT4;
    }

    public String getPRDTYP() {
        return PRDTYP;
    }

    public String getCFNO() {
        return CFNO;
    }

    public String getMANV() {
        return MANV;
    }

    public String getTELLERID() {
        return TELLERID;
    }

    public int getMAPHONG() {
        return MAPHONG;
    }

    public String getTEN() {
        return TEN;
    }

    public BigDecimal getXACBAL() {
        return XACBAL;
    }

    public String getSELLERID() {
        return SELLERID;
    }

    public BigDecimal getXINRAT() {
        return XINRAT;
    }

    public BigDecimal getXOTACC() {
        return XOTACC;
    }

    public String getDATOPN() {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String date;
        try {
            date=formatter.format(this.DATOPN);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public String getTRANGTHAI() {
        return TRANGTHAI;
    }

    public String getNGAYTAO() {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String date;
        try {
            date=formatter.format(this.NGAYTAO);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public String getNGAYCAPNHAT() {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
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

    public void setTK(String TK) {
        this.TK = TK;
    }

    public void setTKTYPE(String TKTYPE) {
        this.TKTYPE = TKTYPE;
    }

    public void setNT4(String NT4) {
        this.NT4 = NT4;
    }

    public void setPRDTYP(String PRDTYP) {
        this.PRDTYP = PRDTYP;
    }

    public void setCFNO(String CFNO) {
        this.CFNO = CFNO;
    }

    public void setMANV(String MANV) {
        this.MANV = MANV;
    }

    public void setTELLERID(String TELLERID) {
        this.TELLERID = TELLERID;
    }

    public void setMAPHONG(int MAPHONG) {
        this.MAPHONG = MAPHONG;
    }

    public void setTEN(String TEN) {
        this.TEN = TEN;
    }

    public void setXACBAL(BigDecimal XACBAL) {
        this.XACBAL = XACBAL;
    }

    public void setSELLERID(String SELLERID) {
        this.SELLERID = SELLERID;
    }

    public void setXINRAT(BigDecimal XINRAT) {
        this.XINRAT = XINRAT;
    }

    public void setXOTACC(BigDecimal XOTACC) {
        this.XOTACC = XOTACC;
    }

    public void setDATOPN(Date DATOPN) {
        this.DATOPN = DATOPN;
    }

    public void setTRANGTHAI(String TRANGTHAI) {
        this.TRANGTHAI = TRANGTHAI;
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
    
}
