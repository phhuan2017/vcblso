Ext.define('vcb.view.Support.ListLinkChiTietView', { 
    extend: "Ext.form.Panel",
    xtype:'ListLinkChiTietView',
    itemId:'ListLinkChiTietView',
    layout: 'fit',
    config: {
        items:[
            {
                xtype:'tabpanel',
                items:[
                    {
                        title: 'Thông tin Chương trình',
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
                                                itemId:'maChuongTrinh',
                                                name:'maChuongTrinh',
                                                readOnly:'true',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Mã CT'
                                            },
                                            {
                                                xtype:'textfield',
                                                itemId:'tenChuongTrinh',
                                                name:'tenChuongTrinh',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Tên CT'
                                            },
                                            {
                                                xtype:'combobox',
                                                itemId:'loaiChuongTrinh',
                                                name:'loaiChuongTrinh',
                                                margin:'5 5 5 5',
                                                flex:1,
//                                                queryMode: 'local',
                                                editable:false,
                                                value:1,
                                                displayField: 'tenLoai',
                                                valueField: 'loaiId',
                                                store:{
                                                    fields: ['loaiId', 'tenLoai'],
                                                    data : [
                                                        {"loaiId":1, "tenLoai":"CN Quản Trị"},
                                                        {"loaiId":2, "tenLoai":"HSC Quản Trị"}
                                                    ]
                                                },
                                                fieldLabel:'Loại CT'
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
                                                itemId:'URL',
                                                name:'URL',
                                                fieldLabel:'URL',
                                                flex:1
                                            },
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textarea',
                                                margin:'5 5 5 5',
                                                itemId:'ghiChu',
                                                name:'ghiChu',
                                                fieldLabel:'Chức năng CT',
                                                flex:1
                                            },
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'nguoiTao',
                                                name:'nguoiTao',
                                                readOnly:'true',
                                                flex:1,
                                                fieldLabel:'Người tạo'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                itemId:'nguoiCapNhat',
                                                name:'nguoiCapNhat',
                                                margin:'5 5 5 5',
                                                readOnly:'true',
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
                                                itemId:'ngayTao',
                                                name:'ngayTao',
                                                readOnly:'true',
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
                                                itemId:'ngayCapNhat',
                                                name:'ngayCapNhat',
                                                readOnly:'true',
                                                flex:1,
                                                fieldLabel:'Ngày cập nhật'
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
                                        text:'Lưu',
                                        icon:'./resources/img/Save.png',
//                                        flex: 0.5,
                                        handler:function (){
                                            var form=this.up('form');
                                            var tenChuongTrinh=form.getValues().tenChuongTrinh;
                                            var maChuongTrinh=form.getValues().maChuongTrinh;
                                            var loaiChuongTrinh=form.getValues().loaiChuongTrinh;
                                            var URL=form.getValues().URL;
                                            var ghiChu=form.getValues().ghiChu;
                                            var nguoiTao=form.getValues().nguoiTao;
                                            var nguoiCapNhat=form.getValues().nguoiCapNhat;
                                            var ngayTao=form.getValues().ngayTao;
                                            var ngayCapNhat=form.getValues().ngayCapNhat;
                                            var nguoiId=App.Session.getNguoiID();
                                            var userId=App.Session.getUserID();//lấy thông tin user id đang đăng nhập
                                            var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
                                                storePhanQuyen.load({// tìm quyền của user
                                                    params:{
                                                        USERID:userId
                                                    },
                                                    callback: function(records, operation, success) {
                                                        for(var i=0;i<records.length;i++){//chạy từng QuyenID
                                                            var quyenId=records[i].data.QUYENID
                                                            var storeMapQuyen=Ext.getStore('vcb.store.MapQuyenStore');//kiểm tra xem có nút đó không
                                                            storeMapQuyen.load({//tím tên người tạo
                                                                params:{
                                                                    QUYENID:quyenId
                                                                },
                                                                callback: function(records, operation, success) {
                                                                    var kt=0;// biến kiểm tra
                                                                    for(var j=0;j<records.length;j++){
                                                                        if(records[j].data.NUTID==6){
                                                                            kt=1;
                                                                            j=records.length
                                                                        }
                                                                    }
                                                                    if(kt==1){
                                                                        if(maChuongTrinh=='Mã tự sinh không cần điền'){// tức là đang thêm mới
                                                                            Core.themChuongTrinh(-1,tenChuongTrinh,URL,ghiChu,nguoiId,loaiChuongTrinh,function(options,success,response){
                                                                                if (success) {//kiem tra ket noi thanh cong khong 
                                                                                    response = Ext.decode(response.responseText);
                                //                                                    console.log(response);
                                                                                    if(response.success==true){// kiểm tra user tồn tại hay chưa 
                                                                                        Ext.Msg.alert("Thông báo","Lưu Thành công");
                                                                                        var storeLink=Ext.getStore('vcb.store.LinkStore');
                                                                                        storeLink.load()//load lại trạng thái
                                                                                    }else{

                                                                                            Ext.Msg.alert("Thông báo","Lưu thất bại");
                                                                                    }
                                                                                }
                                                                                else {//ket noi khong thanh cong 
                                                                                    Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                                }
                                                                            });
                                                                        }else{// tức là đang cập nhật
                                                                            Core.themChuongTrinh(maChuongTrinh,tenChuongTrinh,URL,ghiChu,nguoiId,loaiChuongTrinh,function(options,success,response){
                                                                                if (success) {//kiem tra ket noi thanh cong khong 
                                                                                    response = Ext.decode(response.responseText);
                                //                                                    console.log(response);
                                                                                    if(response.success==true){// kiểm tra user tồn tại hay chưa 
                                                                                        Ext.Msg.alert("Thông báo","Lưu Thành công");
                                                                                        var storeTrangThai=Ext.getStore('vcb.store.LinkStore');
                                                                                        storeTrangThai.load()//load lại trạng thái
                                                                                    }else{

                                                                                            Ext.Msg.alert("Thông báo","Lưu thất bại");
                                                                                    }
                                                                                }
                                                                                else {//ket noi khong thanh cong 
                                                                                    Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                                }
                                                                            });
                                                                        }
                                                                    }else{
                                                                        Ext.Msg.alert("Thông báo","Bạn không có quyền lưu thông tin");
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
        ],
        dockedItems: [
        ]
    },
    hayghe:function (m) {
        console.log(m.LOAICHUONGTRINH);
        var me=this;
        if(m ==-1)
        {
            this.down('#maChuongTrinh').setValue('Mã tự sinh không cần điền');
            this.down('#tenChuongTrinh').setValue('');
            this.down('#URL').setValue('');
            this.down('#ghiChu').setValue('');
            this.down('#ngayTao').setValue('');
            this.down('#ngayCapNhat').setValue('');
            this.down('#nguoiCapNhat').setValue('');
            this.down('#nguoiTao').setValue('');
            this.down('#loaiChuongTrinh').setValue('');
            
        }else
        {      
            var maChuongTrinh=m.LINKID;
            var tenChuongTrinh=m.TEN;
            var loaiChuongTrinh=m.LOAICHUONGTRINH;
            var URL=m.URL;
            var ghiChu=m.GHICHU;
            var ngayTao=m.NGAYTAO;
            var ngayCapNhat=m.NGAYCAPNHAT;
            var nguoiTao=m.NGUOITAO;
            var nguoiCapNhat=m.NGUOICAPNHAT;
//            console.log(m);
            this.down('#maChuongTrinh').setValue(maChuongTrinh);
            this.down('#tenChuongTrinh').setValue(tenChuongTrinh);
            this.down('#URL').setValue(URL);
            this.down('#ghiChu').setValue(ghiChu);
            this.down('#ngayTao').setValue(ngayTao);
            this.down('#ngayCapNhat').setValue(ngayCapNhat);
            this.down('#loaiChuongTrinh').setValue(loaiChuongTrinh);
            var storeNguoi=Ext.getStore('vcb.store.Nguoi_TimKiemStore');
            storeNguoi.load({//tím tên người tạo
                params:{
                    USERID:nguoiTao
                },
                callback: function(records, operation, success) {
                    if(records.length>0){
                        me.down('#nguoiTao').setValue(records[0].data.HOTEN);
                    }
                }
            })
            var storeNguoi2=Ext.getStore('vcb.store.Nguoi_TimKiemStore');
            storeNguoi2.load({//tìm tên người cập nhật
                params:{
                    USERID:nguoiCapNhat
                },
                callback: function(records, operation, success) {
                   if(records.length>0){
                        me.down('#nguoiCapNhat').setValue(records[0].data.HOTEN);
                    }
                }
            })
        }
    }
});


