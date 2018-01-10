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
public class VCBYKienViecEntity {
   private int YKIENID;
   private int CONGVIECID;
   private int NGUOIID;
   private String NOIDUNG;
   private Date THOIGIAN;
   private String HOTEN;

    public VCBYKienViecEntity(int YKIENID, int CONGVIECID, int NGUOIID, String NOIDUNG, Date THOIGIAN, String HOTEN) {
        this.YKIENID = YKIENID;
        this.CONGVIECID = CONGVIECID;
        this.NGUOIID = NGUOIID;
        this.NOIDUNG = NOIDUNG;
        this.THOIGIAN = THOIGIAN;
        this.HOTEN = HOTEN;
    }

    public VCBYKienViecEntity(int YKIENID, int CONGVIECID, int NGUOIID, String NOIDUNG, Date THOIGIAN) {
        this.YKIENID = YKIENID;
        this.CONGVIECID = CONGVIECID;
        this.NGUOIID = NGUOIID;
        this.NOIDUNG = NOIDUNG;
        this.THOIGIAN = THOIGIAN;
    }

    public String getHOTEN() {
        return HOTEN;
    }

    public void setHOTEN(String HOTEN) {
        this.HOTEN = HOTEN;
    }

    public int getYKIENID() {
        return YKIENID;
    }

    public int getCONGVIECID() {
        return CONGVIECID;
    }

    public int getNGUOIID() {
        return NGUOIID;
    }

    public String getNOIDUNG() {
        return NOIDUNG;
    }

    public String getTHOIGIAN() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        String date;
        try {
            date=formatter.format(this.THOIGIAN);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public void setYKIENID(int YKIENID) {
        this.YKIENID = YKIENID;
    }

    public void setCONGVIECID(int CONGVIECID) {
        this.CONGVIECID = CONGVIECID;
    }

    public void setNGUOIID(int NGUOIID) {
        this.NGUOIID = NGUOIID;
    }

    public void setNOIDUNG(String NOIDUNG) {
        this.NOIDUNG = NOIDUNG;
    }

    public void setTHOIGIAN(Date THOIGIAN) {
        this.THOIGIAN = THOIGIAN;
        
    }
   
}
