Ext.define('vcb.view.BaoCao.CHITIEUHUYDONG.TaiKhoanHuyDongChiTietView', { 
    extend: "Ext.form.Panel",
    xtype:'TaiKhoanHuyDongChiTietView',
    itemId:'TaiKhoanHuyDongChiTietView',
    layout: 'fit',
    requires:[
        'vcb.view.BaoCao.CHITIEUHUYDONG.DanhSachHuyDongView',
        'vcb.view.BaoCao.CHITIEUHUYDONG.DanhSachHuyDongMuonPhanView'
    ],
    config: {
        items:[
            {
                xtype:'tabpanel',
                
                items:[
                    {
                        xtype:'container',
                        autoScoll:true,
                        title:'Chỉ Tiêu Huy động',
                        items:[
                            {

                                xtype:'DanhSachHuyDongView',
                                margin:'5 5 5 5',
                                flex:4
                            },
                            {

                                xtype:'DanhSachHuyDongMuonPhanView',
                                margin:'5 5 5 5',
                                flex:1
                            }
                        ]
                    }
                ]
            }
        ],
        dockedItems: [
        ]
    },
    hayghe:function (m) {
//        console.log();
        var tam=m.getValues().ngayBaoCao;
        var thang=tam.slice(0,2);
        var ngay=tam.slice(3,5);
        var nam=tam.slice(8,10);
        var ngayBaoCao=ngay+thang+nam;
        App.Session.setNgayBaoCao(ngayBaoCao);
        var loaiTienGui=m.getValues().loaiTienGui;
        App.Session.setLoaiTienGui(loaiTienGui);
        var cif=m.getValues().cif;
        App.Session.setCif(cif);
        var soTaiKhoan=m.getValues().soTaiKhoan;
        App.Session.setSoTaiKhoan(soTaiKhoan);
        var sellerId=m.getValues().canBo;
        App.Session.setSellerId(sellerId);
        var phongBanId=m.getValues().phongBan;
        App.Session.setPhongBanId(phongBanId);
        var ten=m.getValues().ten;
        App.Session.setTen(ten);
//        console.log(m.getValues());
//        console.log(tam);
        var storeHuyDong=Ext.getStore('vcb.store.ChiTieuHuyDongStore');
            storeHuyDong.load({//tìm tên người cập nhật
                params:{
                    ngayBaoCao:ngayBaoCao,
                    loaiTienGui:loaiTienGui,
                    cif:cif,
                    soTaiKhoan:soTaiKhoan,
                    sellerId:sellerId,
                    phongBanId:phongBanId,
                    ten:ten
                },
                callback: function(records, operation, success) {
                    console.log(this);
//                    App.Session.setSoLuongBanGhiTimThay(Ext.getStore('vcb.store.HuyDongStore').totalCount)
//                   console.log(Ext.getStore('vcb.store.HuyDongStore').totalCount)
                }
            })
            
        var HuyDongMuonphanStore=Ext.getStore('vcb.store.HuyDongMuonphanStore')
        HuyDongMuonphanStore.removeAll();
        HuyDongMuonphanStore.sync()
    }
});


