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
public class VCBThongtinTaisanThechap {
    private String NT4;
    private String CCDCID;
    private String CCDNAM;
    private BigDecimal XCDAMT;
    private String CIF;
    private String SOHD;
    private String STAT;
    private String CATE;

    public VCBThongtinTaisanThechap(String NT4, String CCDCID, String CCDNAM, BigDecimal XCDAMT, String CIF, String SOHD, String STAT, String CATE) {
     
        this.NT4 = NT4;
        this.CCDCID = CCDCID;
        this.CCDNAM = CCDNAM;
        this.XCDAMT = XCDAMT;
        this.CIF = CIF;
        this.SOHD = SOHD;
        this.STAT = STAT;
        this.CATE = CATE;
    }

    public String getCATE() {
        return CATE;
    }

    public void setCATE(String CATE) {
        this.CATE = CATE;
    }

    public String getSTAT() {
        return STAT;
    }

    public void setSTAT(String STAT) {
        this.STAT = STAT;
    }

    public String getNT4() {
        return NT4;
    }

    public void setNT4(String NT4) {
        this.NT4 = NT4;
    }

    public String getCCDCID() {
        return CCDCID;
    }

    public void setCCDCID(String CCDCID) {
        this.CCDCID = CCDCID;
    }

    public String getCCDNAM() {
        return CCDNAM;
    }

    public void setCCDNAM(String CCDNAM) {
        this.CCDNAM = CCDNAM;
    }

    //
    public BigDecimal getXCDAMT() {
        return XCDAMT;
    }

    public void setXCDAMT(BigDecimal XCDAMT) {
        this.XCDAMT = XCDAMT;

    }

    //
    public String getCIF() {
        return CIF;
    }

    public void setCFI(String CIF) {
        this.CIF = CIF;

    }

    //
    public String getSOHD() {
        return SOHD;
    }

    public void setSOHD(String SOHD) {
        this.SOHD = SOHD;

    }
}
