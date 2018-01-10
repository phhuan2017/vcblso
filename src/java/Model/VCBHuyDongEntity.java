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
 * @author hayghe
 */
public class VCBHuyDongEntity {
    //'TK', 'TKTYPE', 'NT4','PRDTYP','CFNO','MANV','TELLERID','MAPHONG','TEN','XACBAL','SELLERID'
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
    private String DIACHI;
    private String SOCMT;
    private String NGAYCAP;
    private String SODIENTHOAI;
    public VCBHuyDongEntity(String TK, String TKTYPE, String NT4, String PRDTYP, String CFNO, String MANV, String TELLERID, String TEN, BigDecimal XACBAL,Date DATOPN) {
        this.TK = TK;
        this.TKTYPE = TKTYPE;
        this.NT4 = NT4;
        this.PRDTYP = PRDTYP;
        this.CFNO = CFNO;
        this.MANV = MANV;
        this.TELLERID = TELLERID;
        this.TEN = TEN;
        this.XACBAL = XACBAL;
        this.DATOPN = DATOPN;
    }

    public VCBHuyDongEntity(String CFNO, String TEN, String DIACHI, String SOCMT, String NGAYCAP, String SODIENTHOAI) {
        this.CFNO = CFNO;
        this.TEN = TEN;
        this.DIACHI = DIACHI;
        this.SOCMT = SOCMT;
        this.NGAYCAP = NGAYCAP;
        this.SODIENTHOAI=SODIENTHOAI;
    }

    public VCBHuyDongEntity(String TK, String TKTYPE, String NT4, String PRDTYP, String CFNO, String MANV, String TELLERID, int MAPHONG, String TEN, BigDecimal XACBAL, String SELLERID, BigDecimal XINRAT, BigDecimal XOTACC, Date DATOPN, String DIACHI, String SOCMT, String NGAYCAP) {
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
        this.DIACHI = DIACHI;
        this.SOCMT = SOCMT;
        this.NGAYCAP = NGAYCAP;
    }

    public VCBHuyDongEntity(String TK, String TKTYPE, String NT4, String PRDTYP, String CFNO, String MANV, String TELLERID, int MAPHONG, String TEN, BigDecimal XACBAL, String SELLERID, BigDecimal XINRAT, BigDecimal XOTACC, Date DATOPN) {
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
    }

    public VCBHuyDongEntity(String TK, String TKTYPE, String NT4, String PRDTYP, String CFNO, String MANV, String TELLERID, int MAPHONG, String TEN, BigDecimal XACBAL, String SELLERID, BigDecimal XINRAT, BigDecimal XOTACC) {
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
    }

    public VCBHuyDongEntity(String TK, String TKTYPE, String NT4, String PRDTYP, String CFNO, String MANV, String TELLERID, int MAPHONG, String TEN, BigDecimal XACBAL, String SELLERID) {
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
    }

    public String getSODIENTHOAI() {
        return SODIENTHOAI;
    }

    public void setSODIENTHOAI(String SODIENTHOAI) {
        this.SODIENTHOAI = SODIENTHOAI;
    }

    public void setDATOPN(Date DATOPN) {
        this.DATOPN = DATOPN;
    }

    public String getDIACHI() {
        return DIACHI;
    }


    public String getSOCMT() {
        return SOCMT;
    }

    public String getNGAYCAP() {
        return NGAYCAP;
    }

    public void setDIACHI(String DIACHI) {
        this.DIACHI = DIACHI;
    }


    public void setSOCMT(String SOCMT) {
        this.SOCMT = SOCMT;
    }

    public void setNGAYCAP(String NGAYCAP) {
        this.NGAYCAP = NGAYCAP;
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

    public BigDecimal getXINRAT() {
        return XINRAT;
    }

    public BigDecimal getXOTACC() {
        return XOTACC;
    }

    public void setXINRAT(BigDecimal XINRAT) {
        this.XINRAT = XINRAT;
    }

    public void setXOTACC(BigDecimal XOTACC) {
        this.XOTACC = XOTACC;
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
   
}
