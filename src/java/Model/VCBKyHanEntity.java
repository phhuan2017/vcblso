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
public class VCBKyHanEntity {
    private String CFNO;
    private String TEN;
    private String TK; 
    private String TKTYPE;
    private String NT4;
    private Date DATOPN;
    private BigDecimal DUDAU;
    private BigDecimal NAMCO;
    private BigDecimal NAMNO;
    private BigDecimal DUCUOI;
    private String TERM;
    private String DORM;
//    private BigDecimal Dudâua;
//    private 
    private String PRDTYP;

    public VCBKyHanEntity(String CFNO, String TEN, String TK, String TKTYPE, String NT4, Date DATOPN, BigDecimal DUDAU, BigDecimal NAMCO, BigDecimal NAMNO, BigDecimal DUCUOI, String TERM, String DORM, String PRDTYP) {
        this.CFNO = CFNO;
        this.TEN = TEN;
        this.TK = TK;
        this.TKTYPE = TKTYPE;
        this.NT4 = NT4;
        this.DATOPN = DATOPN;
        this.DUDAU = DUDAU;
        this.NAMCO = NAMCO;
        this.NAMNO = NAMNO;
        this.DUCUOI = DUCUOI;
        this.TERM = TERM;
        this.DORM = DORM;
        this.PRDTYP = PRDTYP;
    }

    

    public String getCFNO() {
        return CFNO;
    }

    public String getTEN() {
        return TEN;
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

    public void setDUDAU(BigDecimal DUDAU) {
        this.DUDAU = DUDAU;
    }

    public void setNAMCO(BigDecimal NAMCO) {
        this.NAMCO = NAMCO;
    }

    public void setNAMNO(BigDecimal NAMNO) {
        this.NAMNO = NAMNO;
    }

    public void setDUCUOI(BigDecimal DUCUOI) {
        this.DUCUOI = DUCUOI;
    }
    public BigDecimal getDUDAU() {
        return DUDAU;
    }

    public BigDecimal getNAMCO() {
        return NAMCO;
    }
//
    public BigDecimal getNAMNO() {
        return NAMNO;
    }

    public BigDecimal  getDUCUOI() {
        return DUCUOI;
    }
    

    public String getTERM() {
        return TERM;
    }

    public String getDORM() {
        return DORM;
    }

    public String getPRDTYP() {
        return PRDTYP;
    }

    public void setCFNO(String CFNO) {
        this.CFNO = CFNO;
    }

    public void setTEN(String TEN) {
        this.TEN = TEN;
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

    public void setDATOPN(Date DATOPN) {
        this.DATOPN = DATOPN;
    }

   

    public void setTERM(String TERM) {
        this.TERM = TERM;
    }

    public void setDORM(String DORM) {
        this.DORM = DORM;
    }

    public void setPRDTYP(String PRDTYP) {
        this.PRDTYP = PRDTYP;
    }
    
    
}
