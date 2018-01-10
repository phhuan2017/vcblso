Ext.define('vcb.view.QLPB.QLPhongBanChiTietView', { 
    extend: "Ext.form.Panel",
    xtype:'QLPhongBanChiTietView',
    itemId:'QLPhongBanChiTietView',
    layout: 'fit',
    config: {
        items:[
            {
                xtype:'tabpanel',
                items:[
                    {
                        title: 'Thông tin phòng ban',
                        items:[
                            {
                                xtype:'fieldset',
                                margin:'5 5 5 5',
                                title:'Chi tiết',
                                items:[
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                itemId:'maPhong',
                                                name:'maPhong',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Mã phòng'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'tenPhong',
                                                name:'tenPhong',
                                                flex:1,
                                                fieldLabel:'Tên phòng'
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'fit',
//                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textarea',
                                                margin:'5 5 5 5',
                                                itemId:'chucNangNhiemVu',
                                                name:'chucNangNhiemVu',
                                                flex:1,
                                                fieldLabel:'Chức năng nhiệm vụ'
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                readOnly:'true',
                                                itemId:'nguoiTao',
                                                name:'nguoiTao',
                                                flex:1,
                                                fieldLabel:'Người tạo'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                readOnly:'true',
                                                itemId:'nguoiCapNhat',
                                                name:'nguoiCapNhat',
                                                flex:1,
                                                fieldLabel:'Người cập nhật'
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                readOnly:'true',
                                                itemId:'ngayTao',
                                                name:'ngayTao',
                                                flex:1,
                                                fieldLabel:'Ngày tạo'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                readOnly:'true',
                                                itemId:'ngayCapNhat',
                                                name:'ngayCapNhat',
                                                flex:1,
                                                fieldLabel:'Ngày cập nhật'
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'combobox',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                editable:false,
                                                fieldLabel:'Trạng thái',
                                                itemId:'trangThai',
                                                name:'trangThai',
                                                store:Ext.getStore('vcb.store.TrangThaiStore'),
                                                displayField: 'MOTA',
                                                valueField: 'TRANGTHAIID',
//                                                listeners: {
//                                                    show:function (me ,eOpts){
//                                                        console.log(me);
//                                                    }
//                                                }
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.15
                                            },
                                            {
                                                xtype:'container',
                                                flex:1
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype:'container',
                                dock: 'bottom',
                                layout:'hbox',
                                items:[
                                    {
                                        xtype:'container',
                                        flex:1
                                    },
                                    {
                                        margin: '5 5 5 5',
                                        xtype:'button',
                                        text:'Lưu PB',
                                        icon:'./resources/img/Save.png',
//                                        flex: 0.5,
                                        handler:function (){
                                            var form=this.up('form');
                                            var maPhong=form.getValues().maPhong;
                                            var tenPhong=form.getValues().tenPhong;
                                            var chucNangNhiemVu=form.getValues().chucNangNhiemVu;
                                            var trangThai=form.getValues().trangThai;
                                            var User=App.Session.getUserID();
                                            if(maPhong==''){
                                                Ext.Msg.alert("Thông báo","Bạn chưa điền mã phòng!");
                                            }else{
//                                                console.log(trangThai);
                                                Core.themPhongBanServlet(maPhong,tenPhong,chucNangNhiemVu,User,trangThai,function(options,success,response){
                                                    if (success) {//kiem tra ket noi thanh cong khong 
                                                        response = Ext.decode(response.responseText);
    //                                                    console.log(response);
                                                        if(response.success==true){// kiểm tra user tồn tại hay chưa 
                                                            var store=Ext.getStore('vcb.store.PhongBanStore')
                                                            store.load();
                                                            Ext.Msg.alert("Thông báo","Lưu Thành công");
                                                            
                                                        }else{
                                                            Ext.Msg.alert("Thông báo","Lưu thất bại");
                                                        }
                                                    }
                                                    else {//ket noi khong thanh cong 
                                                        Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                    }
                                                });
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        dockedItems: [
            
        ]
    },
    hayghe:function(m){
        var me = this;
        me.getForm().reset();
        
        if(m==0){//nếu bấm nút thêm mới
            this.down('#trangThai').setValue(2);
            this.down('#maPhong').setValue(maPhongBan);
            this.down('#tenPhong').setValue(tenPhong);
            this.down('#chucNangNhiemVu').setValue(MOTA);
            this.down('#ngayTao').setValue(ngayTao);
            this.down('#ngayCapNhat').setValue(ngayCapNhat);
            this.down('#nguoiCapNhat').setValue(nguoiCapNhat);
            this.down('#nguoiTao').setValue(nguoiTao);
            this.down('#maPhong').setReadOnly(false);
        }else{//click phòng ban
            var maTrangThai=m.data.TRANGTHAIID;
            var MOTA=m.data.MOTA;
            var ngayTao=m.data.NGAYTAO;
            var ngayCapNhat=m.data.NGAYCAPNHAT;
            var nguoiTao=m.data.USERTAO;
            var nguoiCapNhat=m.data.USERCAPNHAT;
            var maPhongBan=m.data.PHONGBANID;
            var tenPhong=m.data.TENPHONG;
            this.down('#maPhong').setValue(maPhongBan);
            this.down('#maPhong').setReadOnly(true);
            this.down('#tenPhong').setValue(tenPhong);
            this.down('#chucNangNhiemVu').setValue(MOTA);
            this.down('#ngayTao').setValue(ngayTao);
            this.down('#ngayCapNhat').setValue(ngayCapNhat);
            this.down('#nguoiCapNhat').setValue(nguoiCapNhat);
            this.down('#nguoiTao').setValue(nguoiTao);
            this.down('#trangThai').setValue(maTrangThai);
            var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
            storeNguoi.load({//tím tên người tạo
                params:{
                    NGUOIID:nguoiTao
                },
                callback: function(records, operation, success) {
                    if(records.length>0){
                        me.down('#nguoiTao').setValue(records[0].data.HOTEN);
                    }
                }
            })
            var storeNguoi2=Ext.getStore('vcb.store.NguoiStore');
            storeNguoi2.load({//tìm tên người cập nhật
                params:{
                    NGUOIID:nguoiCapNhat
                },
                callback: function(records, operation, success) {
                   if(records.length>0){
                        me.down('#nguoiCapNhat').setValue(records[0].data.HOTEN);
                    }
                }
            })
        }
        
        //load lại danh sách trạng thái
//        me.down('#noidung').getEl().dom.src = App.Session.getUrl();
    }
 
});


