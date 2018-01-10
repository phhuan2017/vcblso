Ext.define('vcb.view.BaoCao.XACNHANCHITIEU.XacNhanTaiKhoanHuyDongChiTietView', { 
    extend: "Ext.form.Panel",
    xtype:'XacNhanTaiKhoanHuyDongChiTietView',
    itemId:'XacNhanTaiKhoanHuyDongChiTietView',
    layout: 'fit',
    requires:[
        'vcb.view.BaoCao.XACNHANCHITIEU.DanhSachHuyDongView',
        'vcb.view.BaoCao.XACNHANCHITIEU.DanhSachHuyDongMuonPhanView'
    ],
    config: {
        items:[
            {
                xtype:'tabpanel',
                items:[
                    {
                        xtype:'container',
                        autoScoll:true,
                        title:'Huy động',
//                        layout:'vbox',
                        items:[
                            {
                                xtype:'DanhSachHuyDongView',
                                margin:'5 5 5 5',
                                flex:1
                            },
                            {

                                xtype:'DanhSachHuyDongMuonPhanView',
                                margin:'5 5 5 5',
                                flex:1
                            }
                        ]
                    },
//                    {
//                        xtype:'container',
//                        autoScoll:true,
//                        title:'Lịch sử cập nhật sellerID',
//                        layout:'hbox',
//                        items:[]
//                    }
                ]
            }
        ],
        dockedItems: [
        ]
    },
    hayghe:function (m) {
        var me=this;
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
        var ten=m.getValues().ten;
        App.Session.setTen(ten);
        var storeHuyDong=Ext.getStore('vcb.store.HuyDongStore');
            storeHuyDong.load({//tìm tên người cập nhật
                params:{
                    ngayBaoCao:ngayBaoCao,
                    loaiTienGui:loaiTienGui,
                    cif:cif,
                    soTaiKhoan:soTaiKhoan,
                    ten:ten
                },
                callback: function(records, operation, success) {
                    App.Session.setSoLuongBanGhiTimThay(Ext.getStore('vcb.store.HuyDongStore').totalCount)
//                   console.log(Ext.getStore('vcb.store.HuyDongStore').totalCount)
                }
            })
        var HuyDongMuonphanStore=Ext.getStore('vcb.store.HuyDongMuonphanStore')
        HuyDongMuonphanStore.removeAll();
        HuyDongMuonphanStore.sync()
        var nguoiId=App.Session.getNguoiID();
        //=========================================================================
        // Phân quyền combobox sellerId
        var userId=App.Session.getUserID();//lấy thông tin user id đang đăng nhập
        var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
            storePhanQuyen.load({// tìm quyền của user
                params:{
                    USERID:userId
                },
                callback: function(records, operation, success) {
                    for(var i=0;i<records.length;i++){//chạy từng QuyenID
                        var kt=0;// biến kiểm tra
                        var quyenId=records[i].data.QUYENID
                        var storeMapQuyen=Ext.getStore('vcb.store.MapQuyenStore');//kiểm tra xem có nút đó không
                        storeMapQuyen.load({//tím tên người tạo
                            params:{
                                QUYENID:quyenId
                            },
                            callback: function(records, operation, success) {
                                var kt=0;// biến kiểm tra
                                for(var j=0;j<records.length;j++){
                                    if(records[j].data.NUTID==20){
                                        kt=1;
                                        j=records.length
                                    }
                                }
                                if(kt==1){// tức là có thể thay đổi được seller id
                                    me.down('#DanhSachHuyDongMuonPhanView').down('#sellerId').setReadOnly(false)
                                }else{
                                    me.down('#DanhSachHuyDongMuonPhanView').down('#sellerId').setReadOnly(true)
                                    var nguoiStore=Ext.getStore('vcb.store.NguoiStore');
                                    //tìm kiếm seller id nếu thấy gán sellerid
                                    for(var i=0;i<nguoiStore.totalCount;i++){
                                        if(nguoiStore.data.items[i].data.NGUOIID == nguoiId){
                                            me.down('#DanhSachHuyDongMuonPhanView').down('#sellerId').setValue(nguoiStore.data.items[i].data.SELLERID)
                                            me.down('#DanhSachHuyDongMuonPhanView').down('#maPhong').setValue(App.Session.getPhongBanId())
                                        }
                                    }
                                }
                            }
                        })   
                    }
                }
            })
    }
});


