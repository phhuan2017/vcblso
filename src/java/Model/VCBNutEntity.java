/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

/**
 *
 * @author hayghe
 */
public class VCBNutEntity {
    private int NUTID;
    private String NUTNAME;
    private String NUT_MOTA;

    public int getNUTID() {
        return NUTID;
    }

    public String getNUTNAME() {
        return NUTNAME;
    }

    public String getNUT_MOTA() {
        return NUT_MOTA;
    }

    public void setNUTID(int NUTID) {
        this.NUTID = NUTID;
    }

    public void setNUTNAME(String NUTNAME) {
        this.NUTNAME = NUTNAME;
    }

    public void setNUT_MOTA(String NUT_MOTA) {
        this.NUT_MOTA = NUT_MOTA;
    }

    public VCBNutEntity(int NUTID, String NUTNAME, String NUT_MOTA) {
        this.NUTID = NUTID;
        this.NUTNAME = NUTNAME;
        this.NUT_MOTA = NUT_MOTA;
    }
    
}
