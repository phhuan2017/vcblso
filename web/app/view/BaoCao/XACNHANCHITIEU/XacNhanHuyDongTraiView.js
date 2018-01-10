
Ext.define('vcb.view.BaoCao.XACNHANCHITIEU.XacNhanHuyDongTraiView', { 
    extend: "Ext.form.Panel",
    xtype:'XacNhanHuyDongTraiView',
    itemId:'XacNhanHuyDongTraiView',
    requires:[
        'vcb.view.Support.ListLinkGridView',
    ],
    config: {
        items:[
            {
                items:[
                    {
                        layout:'vbox',
                        xtype:'fieldset',
                        margin: '5 5 5 5',
                        title:'Tìm kiếm khách hàng chưa có mã sellerId',
                        items:[
                            {
                                xtype:'datefield',
                                margin: '5 0 5 0',
                                name:'ngayBaoCao',
                                maxValue:new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
                                itemId:'ngayBaoCao',
                                fieldLabel:'Ngày báo cáo',
                                editable:false,
                                flex:2
                            },
                            {
                                
                                displayField: 'name',
                                valueField: 'id',
                                xtype:'combobox',
                                margin: '5 0 5 0',
                                name:'loaiTienGui',
                                itemId:'loaiTienGui',
                                fieldLabel:'Loại tiền gửi',
                                editable:false,
                                value:"",
                                store:{
                                    fields: ['id', 'name'],
                                    data : [
                                        {"id":"", "name":"Tất cả"},
                                        {"id":"D", "name":"Không kỳ hạn"},
                                        {"id":"T", "name":"Kỳ hạn"}
                                    ] 
                                },
                                flex:2
                            },
//                            {
//                                xtype:'combobox',
//                                margin:'5 0 5 0',
//                                flex:1,
//                                itemId:'phongBan',
//                                name:'phongBan',
//                                value:0,
//                                store: Ext.getStore('vcb.store.PhongBanStore'),
//                                displayField: 'TENPHONG',
//                                valueField: 'PHONGBANID',
//                                fieldLabel:'Phòng ban',
//                                editable:false
//                            },
                            {
                                xtype:'textfield',
                                margin: '5 0 5 0',
                                name:'cif',
                                itemId:'cif',
                                fieldLabel:'Cif',
                                flex:2
                            },
                            {
                                xtype:'textfield',
                                margin: '5 0 5 0',
                                name:'soTaiKhoan',
                                itemId:'soTaiKhoan',
                                fieldLabel:'Số TK',
                                flex:2
                            },
                            {
                                xtype:'textfield',
                                margin: '5 0 5 0',
                                name:'ten',
                                itemId:'ten',
                                fieldLabel:'Tên',
                                flex:2
                            }
                        ]
                    },
                    {
                        xtype:'container',
                        layout:'hbox',
                        items:[
                            {
                                xtype:'container',
                                flex:1
                            },
                            {
                                margin: '5 5 5 5',
                                xtype:'button',
                                text:'Tìm kiếm',
                                icon:'./resources/img/timkiem.png',
                                handler:function (){
                                    var form=this.up('form');
                                    var tam=form.getValues().ngayBaoCao
                                    var thang=tam.slice(0,2)
                                    var ngay=tam.slice(3,5)
                                    var nam=tam.slice(8,10)
                                    var ngayBaoCao=ngay+thang+nam;
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
                                                                if(records[j].data.NUTID==17){
                                                                    kt=17;
                                                                    j=records.length
                                                                }
                                                            }
                                                            if(kt==17){
                                                                //Kiểm tra xem đã điền ngày tạo kỳ hạn chưa 
                                                                if(tam==''){//nếu chưa điền thông báo điền ngày tạo kỳ hạn
                                                                    Ext.Msg.alert("Thông báo","Bạn vui lòng chọn ngày Báo cáo.");
                                                                }else{
                                                                    Ext.getCmp('CenterView').activateViewItem('XacNhanTaiKhoanHuyDongChiTietView',function() {
                                                                        var itemview= Ext.create('vcb.view.BaoCao.XACNHANCHITIEU.XacNhanTaiKhoanHuyDongChiTietView');
                                                                        return itemview;
                                                                      }, this).hayghe(form);
                                                                }
                                                            }else{
                                                                Ext.Msg.alert("Thông báo","Bạn không có quyền ở chức năng này.");
                                                            }
                                                        }
                                                    })   
                                                }
                                            }
                                        })
                                } 
                            }
                        ]
                    },
                    {
                        layout:'vbox',
                        xtype:'fieldset',
                        margin: '5 5 5 5',
                        title:'Lịch sử cập nhật sellerId',
                        items:[
                            {
                                xtype:'datefield',
                                margin: '5 0 5 0',
                                name:'tuNgayLichSu',
                                value:new Date(),
//                                maxValue:new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
                                itemId:'tuNgayLichSu',
                                fieldLabel:'Từ ngày',
                                editable:false,
                                flex:2
                            },
                            {
                                xtype:'datefield',
                                margin: '5 0 5 0',
                                name:'denNgayLichSu',
                                value:new Date(),
//                                maxValue:new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
                                itemId:'denNgayLichSu',
                                fieldLabel:'Đến ngày',
                                editable:false,
                                flex:2
                            },
                            {
                                xtype:'textfield',
                                margin: '5 0 5 0',
                                hidden:true,
                                name:'cifLichSu',
                                itemId:'cifLichSu',
                                fieldLabel:'Cif',
                                flex:2
                            },
                            {
                                xtype:'textfield',
                                margin: '5 0 5 0',
                                name:'soTaiKhoanLichSu',
                                itemId:'soTaiKhoanLichSu',
                                fieldLabel:'Số TK',
                                flex:2
                            },
                            {
                                xtype:'textfield',
                                margin: '5 0 5 0',
                                name:'tenLichSu',
                                itemId:'tenLichSu',
                                fieldLabel:'Tên',
                                flex:2
                            },
                            {
                                xtype:'combobox',
                                margin: '5 0 5 0',
                                store:'vcb.store.NguoiStore',
        //                        queryMode: 'local',
                                displayField: 'HOTEN',
                                editable:false,
                                flex:1,
        //                        layout:'fit',
                                itemId:'sellerId',
                                name:'sellerId',
                                valueField: 'SELLERID',
                                fieldLabel:'cán bộ',
                                listeners:{
//                                    select:function ( combo, records, eOpts ){
//                                        this.up('#DanhSachHuyDongMuonPhanView').down('#maPhong').setValue(records[0].data.PHONGBANID);
//                                    }
                                }
                            },
                        ]
                    },
                    {
                        xtype:'container',
                        layout:'hbox',
                        items:[
                            {
                                xtype:'container',
                                flex:1
                            },
                            {
                                xtype:'button',
                                margin: '5 5 5 5',
                                name:'buttonLichSu',
                                itemId:'buttonLichSu',
                                text:'Tìm kiếm',
                                icon:'./resources/img/timkiem.png',
                                handler:function (){
                                    var form=this.up('form');
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
                                                                if(records[j].data.NUTID==17){
                                                                    kt=17;
                                                                    j=records.length
                                                                }
                                                            }
                                                            if(kt==17){
                                                                    Ext.getCmp('CenterView').activateViewItem('LichSuCapNhatSellerIdView',function() {
                                                                        var itemview= Ext.create('vcb.view.BaoCao.XACNHANCHITIEU.LichSuCapNhatSellerIdView');
                                                                        return itemview;
                                                                      }, this).hayghe(form);
                                                            }else{
                                                                Ext.Msg.alert("Thông báo","Bạn không có quyền ở chức năng này.");
                                                            }
                                                        }
                                                    })   
                                                }
                                            }
                                        })
                                }
                            }
                        ]
                    }
                    
                ]
            }
        ]
    }
 
});


