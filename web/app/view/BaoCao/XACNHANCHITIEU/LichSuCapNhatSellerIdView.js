Ext.define('vcb.view.BaoCao.XACNHANCHITIEU.LichSuCapNhatSellerIdView', { 
    extend: "Ext.form.Panel",
    xtype:'LichSuCapNhatSellerIdView',
    itemId:'LichSuCapNhatSellerIdView',
    layout: 'fit',
    requires:[
        'vcb.view.BaoCao.XACNHANCHITIEU.DanhSachLichSuCapNhatSellerIdView',
//        'vcb.view.BaoCao.CHITIEUHUYDONG.DanhSachHuyDongMuonPhanView'
    ],
    config: {
        items:[
            {
                xtype:'tabpanel',
                
                items:[
                    {
                        xtype:'container',
                        autoScoll:true,
                        title:'Lịch sử cập nhật',
                        items:[
                            {

                                xtype:'DanhSachLichSuCapNhatSellerIdView',
                                margin:'5 5 5 5',
                                flex:4
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
//            console.log(m.getValues());
        // từ ngày phải nhỏ hơn hoặc bằng den ngay
        if(m.getValues().tuNgayLichSu <= m.getValues().denNgayLichSu){
//            var tuNgayLichSu=App.Session.doiDinhDangNgay(m.getValues().tuNgayLichSu);
//            var denNgayLichSu=App.Session.doiDinhDangNgay(m.getValues().denNgayLichSu);
            var tuNgayLichSu=m.getValues().tuNgayLichSu;
            App.Session.setTuNgayLichSu(tuNgayLichSu);
            var denNgayLichSu=m.getValues().denNgayLichSu;
            App.Session.setDenNgayLichSu(denNgayLichSu);
            var cifLichSu=m.getValues().cifLichSu;
            App.Session.setCifLichSu(cifLichSu);
            var soTaiKhoanLichSu=m.getValues().soTaiKhoanLichSu;
            App.Session.setSoTaiKhoanLichSu(soTaiKhoanLichSu);
            var tenLichSu=m.getValues().tenLichSu;
            App.Session.setTenLichSu(tenLichSu);
            var sellerId=m.getValues().sellerId;
            App.Session.setSellerId(sellerId);
            var LichSuCapNhatSellerIdStore=Ext.getStore('vcb.store.LichSuCapNhatSellerIdStore');
            LichSuCapNhatSellerIdStore.load({//tìm tên người cập nhật
                params:{
                    tuNgayLichSu:tuNgayLichSu,
                    denNgayLichSu:denNgayLichSu,
                    cifLichSu:cifLichSu,
                    soTaiKhoanLichSu:soTaiKhoanLichSu,
                    tenLichSu:tenLichSu,
                    sellerId:sellerId
                },
                callback: function(records, operation, success) {
//                    App.Session.setSoLuongBanGhiTimThay(Ext.getStore('vcb.store.HuyDongStore').totalCount)
//                   console.log(Ext.getStore('vcb.store.HuyDongStore').totalCount)
                }
            })
        }else{
            Ext.Msg.alert("Thông báo","Từ ngày phải trước hoặc trùng với đến ngày");
        }
//        App.Session.setNgayBaoCao(ngayBaoCao);
//        var loaiTienGui=m.getValues().loaiTienGui;
//        App.Session.setLoaiTienGui(loaiTienGui);
//        var cif=m.getValues().cif;
//        App.Session.setCif(cif);
//        var soTaiKhoan=m.getValues().soTaiKhoan;
//        App.Session.setSoTaiKhoan(soTaiKhoan);
//        var sellerId=m.getValues().canBo;
//        App.Session.setSellerId(sellerId);
//        var phongBanId=m.getValues().phongBan;
//        App.Session.setPhongBanId(phongBanId);
//        var ten=m.getValues().ten;
//        App.Session.setTen(ten);
////        console.log(m.getValues());
////        console.log(tam);
//        var storeHuyDong=Ext.getStore('vcb.store.ChiTieuHuyDongStore');
//            storeHuyDong.load({//tìm tên người cập nhật
//                params:{
//                    ngayBaoCao:ngayBaoCao,
//                    loaiTienGui:loaiTienGui,
//                    cif:cif,
//                    soTaiKhoan:soTaiKhoan,
//                    sellerId:sellerId,
//                    phongBanId:phongBanId,
//                    ten:ten
//                },
//                callback: function(records, operation, success) {
////                    App.Session.setSoLuongBanGhiTimThay(Ext.getStore('vcb.store.HuyDongStore').totalCount)
////                   console.log(Ext.getStore('vcb.store.HuyDongStore').totalCount)
//                }
//            })
//            
//        var HuyDongMuonphanStore=Ext.getStore('vcb.store.HuyDongMuonphanStore')
//        HuyDongMuonphanStore.removeAll();
//        HuyDongMuonphanStore.sync()
    }
});


