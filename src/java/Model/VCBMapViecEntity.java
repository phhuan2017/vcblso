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
public class VCBMapViecEntity {
   private int CONGVIECID;
   private int NGUOIID;
   private String YKIEN;
   private int CHECK;

    public VCBMapViecEntity() {
    }

    public VCBMapViecEntity(int CONGVIECID, int NGUOIID, String YKIEN, int CHECK) {
        this.CONGVIECID = CONGVIECID;
        this.NGUOIID = NGUOIID;
        this.YKIEN = YKIEN;
        this.CHECK = CHECK;
    }

    public void setCONGVIECID(int CONGVIECID) {
        this.CONGVIECID = CONGVIECID;
    }

    public void setNGUOIID(int NGUOIID) {
        this.NGUOIID = NGUOIID;
    }

    public void setYKIEN(String YKIEN) {
        this.YKIEN = YKIEN;
    }

    public void setCHECK(int CHECK) {
        this.CHECK = CHECK;
    }

    public int getCONGVIECID() {
        return CONGVIECID;
    }

    public int getNGUOIID() {
        return NGUOIID;
    }

    public String getYKIEN() {
        return YKIEN;
    }

    public int getCHECK() {
        return CHECK;
    }

   
}
