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
 * @author adminadLSO
 */
public class VCBQuaKhuyenMaiEntity {
    private String TEN;
    private int PHONGBANID;
    private int QUAID;
    private String TENQUA;
    private float SODIEM;
    private Date NGAYTAO;
    private Date NGAYCAPNHAT;
    private int NGUOITAO;
    private int NGUOICAPNHAT;
    private int SOLUONGQUA;
    private String CIF;
    
    private int ID;
    private String TENKHACHANG;
    private String DIACHI;
    private String SOCMT; 
    private String NGAYCAP;
    private String NOICAP;
    private String SODIENTHOAI;
    private float SODIEMTICHLUY;
    private float SODIEMDADUNG;
    
    private String SOTAIKHOAN;
    private int LOAITAIKHOANTIETKIEM;
    private int KYHAN;
    private Long SOTIEN;
    
    private int COC;
    private int CHAO;
    private int THO;
    private int BAT;
    private int MAYDOHUYETAP;
    private int LOVISONG;

    public VCBQuaKhuyenMaiEntity(String TEN, int PHONGBANID, 
            int QUAID, String TENQUA, Date NGAYTAO, Date NGAYCAPNHAT, 
            int NGUOITAO, int NGUOICAPNHAT, int SOLUONGQUA, String CIF,
            String TENKHACHANG, float SODIEMTICHLUY, float SODIEMDADUNG) {
        this.TEN = TEN;
        this.PHONGBANID = PHONGBANID;
        this.QUAID = QUAID;
        this.TENQUA = TENQUA;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
        this.SOLUONGQUA = SOLUONGQUA;
        this.CIF = CIF;
        this.TENKHACHANG = TENKHACHANG;
        this.SODIEMTICHLUY=SODIEMTICHLUY;
        this.SODIEMDADUNG= SODIEMDADUNG;
    }

    
    
    public VCBQuaKhuyenMaiEntity(Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT, String CIF, int COC, int CHAO, int THO, int BAT, int MAYDOHUYETAP, int LOVISONG) {
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
        this.CIF = CIF;
        this.COC = COC;
        this.CHAO = CHAO;
        this.THO = THO;
        this.BAT = BAT;
        this.MAYDOHUYETAP = MAYDOHUYETAP;
        this.LOVISONG = LOVISONG;
    }
    
    

    public VCBQuaKhuyenMaiEntity(Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT, String CIF, float SODIEMTICHLUY, String SOTAIKHOAN, int LOAITAIKHOANTIETKIEM, int KYHAN, Long SOTIEN) {
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
        this.CIF = CIF;
        this.SODIEMTICHLUY = SODIEMTICHLUY;
        this.SOTAIKHOAN = SOTAIKHOAN;
        this.LOAITAIKHOANTIETKIEM = LOAITAIKHOANTIETKIEM;
        this.KYHAN = KYHAN;
        this.SOTIEN = SOTIEN;
    }

    public VCBQuaKhuyenMaiEntity(Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT, String CIF, int ID, String TENKHACHANG, String DIACHI, String SOCMT, String NGAYCAP, String NOICAP, String SODIENTHOAI, float SODIEMTICHLUY, float SODIEMDADUNG) {
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
        this.CIF = CIF;
        this.ID = ID;
        this.TENKHACHANG = TENKHACHANG;
        this.DIACHI = DIACHI;
        this.SOCMT = SOCMT;
        this.NGAYCAP = NGAYCAP;
        this.NOICAP = NOICAP;
        this.SODIENTHOAI = SODIENTHOAI;
        this.SODIEMTICHLUY = SODIEMTICHLUY;
        this.SODIEMDADUNG = SODIEMDADUNG;
    }

    public VCBQuaKhuyenMaiEntity(int QUAID, String TENQUA, int SODIEM, Date NGAYTAO, Date NGAYCAPNHAT, int NGUOITAO, int NGUOICAPNHAT, int SOLUONGQUA, String CIF) {
        this.QUAID = QUAID;
        this.TENQUA = TENQUA;
        this.SODIEM = SODIEM;
        this.NGAYTAO = NGAYTAO;
        this.NGAYCAPNHAT = NGAYCAPNHAT;
        this.NGUOITAO = NGUOITAO;
        this.NGUOICAPNHAT = NGUOICAPNHAT;
        this.SOLUONGQUA = SOLUONGQUA;
        this.CIF = CIF;
    }

    public int getPHONGBANID() {
        return PHONGBANID;
    }

    public void setTEN(String TEN) {
        this.TEN = TEN;
    }

    public void setPHONGBANID(int PHONGBANID) {
        this.PHONGBANID = PHONGBANID;
    }

    public String getTEN() {
        return TEN;
    }

    public void setCOC(int COC) {
        this.COC = COC;
    }

    public void setCHAO(int CHAO) {
        this.CHAO = CHAO;
    }

    public void setTHO(int THO) {
        this.THO = THO;
    }

    public void setBAT(int BAT) {
        this.BAT = BAT;
    }

    public void setMAYDOHUYETAP(int MAYDOHUYETAP) {
        this.MAYDOHUYETAP = MAYDOHUYETAP;
    }

    public void setLOVISONG(int LOVISONG) {
        this.LOVISONG = LOVISONG;
    }

    public int getCOC() {
        return COC;
    }

    public int getCHAO() {
        return CHAO;
    }

    public int getTHO() {
        return THO;
    }

    public int getBAT() {
        return BAT;
    }

    public int getMAYDOHUYETAP() {
        return MAYDOHUYETAP;
    }

    public int getLOVISONG() {
        return LOVISONG;
    }

    public String getSOTAIKHOAN() {
        return SOTAIKHOAN;
    }

    public int getLOAITAIKHOANTIETKIEM() {
        return LOAITAIKHOANTIETKIEM;
    }

    public int getKYHAN() {
        return KYHAN;
    }

    public Long getSOTIEN() {
        return SOTIEN;
    }

    public void setSOTAIKHOAN(String SOTAIKHOAN) {
        this.SOTAIKHOAN = SOTAIKHOAN;
    }

    public void setLOAITAIKHOANTIETKIEM(int LOAITAIKHOANTIETKIEM) {
        this.LOAITAIKHOANTIETKIEM = LOAITAIKHOANTIETKIEM;
    }

    public void setKYHAN(int KYHAN) {
        this.KYHAN = KYHAN;
    }

    public void setSOTIEN(Long  SOTIEN) {
        this.SOTIEN = SOTIEN;
    }

    public VCBQuaKhuyenMaiEntity(int QUAID, String TENQUA, int SODIEM) {
        this.QUAID = QUAID;
        this.TENQUA = TENQUA;
        this.SODIEM = SODIEM;
    }

    public int getID() {
        return ID;
    }

    public String getTENKHACHANG() {
        return TENKHACHANG;
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

    public String getNOICAP() {
        return NOICAP;
    }

    public String getSODIENTHOAI() {
        return SODIENTHOAI;
    }

    public float getSODIEMTICHLUY() {
        return SODIEMTICHLUY;
    }

    public float getSODIEMDADUNG() {
        return SODIEMDADUNG;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public void setTENKHACHANG(String TENKHACHANG) {
        this.TENKHACHANG = TENKHACHANG;
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

    public void setNOICAP(String NOICAP) {
        this.NOICAP = NOICAP;
    }

    public void setSODIENTHOAI(String SODIENTHOAI) {
        this.SODIENTHOAI = SODIENTHOAI;
    }

    public void setSODIEMTICHLUY(float SODIEMTICHLUY) {
        this.SODIEMTICHLUY = SODIEMTICHLUY;
    }

    public void setSODIEMDADUNG(float SODIEMDADUNG) {
        this.SODIEMDADUNG = SODIEMDADUNG;
    }

    public int getNGUOITAO() {
        return NGUOITAO;
    }

    public int getNGUOICAPNHAT() {
        return NGUOICAPNHAT;
    }

    public int getSOLUONGQUA() {
        return SOLUONGQUA;
    }

    public String getCIF() {
        return CIF;
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

    public void setSOLUONGQUA(int SOLUONGQUA) {
        this.SOLUONGQUA = SOLUONGQUA;
    }

    public void setCIF(String CIF) {
        this.CIF = CIF;
    }

    public void setQUAID(int QUAID) {
        this.QUAID = QUAID;
    }

    public void setTENQUA(String TENQUA) {
        this.TENQUA = TENQUA;
    }

    public void setSODIEM(float SODIEM) {
        this.SODIEM = SODIEM;
    }

    public int getQUAID() {
        return QUAID;
    }

    public String getTENQUA() {
        return TENQUA;
    }

    public float getSODIEM() {
        return SODIEM;
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
}
