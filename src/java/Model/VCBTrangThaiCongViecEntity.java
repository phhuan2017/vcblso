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
public class VCBTrangThaiCongViecEntity {
    private int TRANGTHAICONGVIECID;
    private String TEN;

    public VCBTrangThaiCongViecEntity() {
    }

    public VCBTrangThaiCongViecEntity(int TRANGTHAICONGVIECID, String TEN) {
        this.TRANGTHAICONGVIECID = TRANGTHAICONGVIECID;
        this.TEN = TEN;
    }

    public int getTRANGTHAICONGVIECID() {
        return TRANGTHAICONGVIECID;
    }

    public String getTEN() {
        return TEN;
    }

    public void setTRANGTHAICONGVIECID(int TRANGTHAICONGVIECID) {
        this.TRANGTHAICONGVIECID = TRANGTHAICONGVIECID;
    }

    public void setTEN(String TEN) {
        this.TEN = TEN;
    }
    
    
}
