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
public class VCBChucVuEntity {
    private int maChucVu;
    private String tenChucVu;
    private String moTa;
    private int nguoiTao;
    private Date ngayTao;
    private int nguoiCapNhat;
    private Date ngayCapNhat;
    private int trangThai;

    public VCBChucVuEntity(int maChucVu, String tenChucVu, String moTa, int nguoiTao, Date ngayTao, int nguoiCapNhat, Date ngayCapNhat, int trangThai) {
        this.maChucVu = maChucVu;
        this.tenChucVu = tenChucVu;
        this.moTa = moTa;
        this.nguoiTao = nguoiTao;
        this.ngayTao = ngayTao;
        this.nguoiCapNhat = nguoiCapNhat;
        this.ngayCapNhat = ngayCapNhat;
        this.trangThai = trangThai;
    }

    public void setMaChucVu(int maChucVu) {
        this.maChucVu = maChucVu;
    }

    public void setTenChucVu(String tenChucVu) {
        this.tenChucVu = tenChucVu;
    }

    public void setMoTa(String moTa) {
        this.moTa = moTa;
    }

    public void setNguoiTao(int nguoiTao) {
        this.nguoiTao = nguoiTao;
    }

    public void setNgayTao(Date ngayTao) {
        this.ngayTao = ngayTao;
    }

    public void setNguoiCapNhat(int nguoiCapNhat) {
        this.nguoiCapNhat = nguoiCapNhat;
    }

    public void setNgayCapNhat(Date ngayCapNhat) {
        this.ngayCapNhat = ngayCapNhat;
    }

    public void setTrangThai(int trangThai) {
        this.trangThai = trangThai;
    }

    public int getMaChucVu() {
        return maChucVu;
    }

    public String getTenChucVu() {
        return tenChucVu;
    }

    public String getMoTa() {
        return moTa;
    }

    public int getNguoiTao() {
        return nguoiTao;
    }

    public String getNgayTao() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String date;
        try {
            date=formatter.format(this.ngayTao);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public int getNguoiCapNhat() {
        return nguoiCapNhat;
    }

    public String getNgayCapNhat() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        String date;
        try {
            date=formatter.format(this.ngayCapNhat);
        } catch (Exception e) {
            date=null;
        }
        return date;
    }

    public int getTrangThai() {
        return trangThai;
    }
    
}
