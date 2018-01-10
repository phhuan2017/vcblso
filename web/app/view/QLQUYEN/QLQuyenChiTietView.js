Ext.define('vcb.view.QLQUYEN.QLQuyenChiTietView', { 
    extend: "Ext.form.Panel",
    xtype:'QLQuyenChiTietView',
    itemId:'QLQuyenChiTietView',
    layout: 'fit',
    requires:[
        'vcb.view.QLQUYEN.DanhSachNutView',
        'vcb.view.QLQUYEN.DanhSachNutDuocPhanView'
    ],
    config: {
        items:[
            {
                xtype:'tabpanel',
                items:[
                    {
                        title: 'Quyền chi tiết',
                        items:[
                            {
                                xtype:'fieldset',
                                margin:'5 5 5 5',
                                itemId:'thongTinQuyen',
                                title:'Thông tin Quyền',
                                items:[
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                itemId:'tenQuyen',
                                                name:'tenQuyen',
                                                fieldLabel:'Tên Quyền'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'moTa',
                                                name:'moTa',
                                                flex:1,
                                                fieldLabel:'Mô tả quyền',
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                itemId:'quyenId',
                                                name:'quyenId',
                                                fieldLabel:'Quyền ID',
                                                hidden:true
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
                                                itemId:'ngayTao',
                                                name:'ngayTao',
                                                flex:1,
                                                readOnly:true,
                                                fieldLabel:'Ngày tạo'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'nguoiTao',
                                                name:'nguoiTao',
                                                readOnly:true,
                                                flex:1,
                                                fieldLabel:'Người tạo'
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
                                                itemId:'ngayCapNhat',
                                                name:'ngayCapNhat',
                                                readOnly:true,
                                                flex:1,
                                                fieldLabel:'Ngày cập nhật'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'nguoiCapNhat',
                                                name:'nguoiCapNhat',
                                                readOnly:true,
                                                flex:1,
                                                fieldLabel:'Người cập nhật'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype:'container',
//                                dock: 'bottom',
                                layout:'hbox',
                                items:[
                                    {
                                        xtype:'container',
                                        flex:1
                                    },
                                    {
                                        margin: '5 5 5 5',
                                        xtype:'button',
                                        text:'Lưu Quyền',
                                        icon:'./resources/img/Save.png',
        //                                        flex: 0.5,
                                        handler:function (){
                                            var form=this.up('form');
                                            var tenQuyen=form.getValues().tenQuyen;
                                            var quyenId=form.getValues().quyenId;
                                            var moTa=form.getValues().moTa;
                                            var User=App.Session.getUserID();
                                            Core.themQuyenServlet(User,quyenId,tenQuyen,moTa,function(options,success,response){
                                                if (success) {//kiem tra ket noi thanh cong khong 
                                                    response = Ext.decode(response.responseText);
//                                                    conssole.log('response.ResponseCode');
//                                                    console.log(response.ResponseCode);
                                                    if(response.ResponseCode == 0){// kiểm tra user tồn tại hay chưa 
                                                        var store=Ext.getStore('vcb.store.QuyenStore')
                                                        store.load();
                                                        Ext.Msg.alert("Thông báo","Lưu Thành công");

                                                    }else{
                                                        Ext.Msg.alert("Thông báo",response.ResponseName);
                                                    }
                                                }
                                                else {//ket noi khong thanh cong 
                                                    Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                }
                                            });
                                        }
                                    }
                                ]
                            },
                            {
                                xtype:'fieldset',
                                margin:'5 5 5 5',
//                                itemId:'ca',
                                layout:'hbox',
                                title:'Các quyền được làm',
                                items:[
                                    {
                                        xtype:'DanhSachNutView',
                                        flex:1
                                    },
                                    {
                                        xtype:'DanhSachNutDuocPhanView',
                                        flex:1,
                                    }
                                ]
                            },
                            {
                                        xtype:'container',
//                                dock: 'bottom',
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
                                                    var tenQuyen=form.getValues().tenQuyen;
                                                    var quyenId=form.getValues().quyenId;
                                                    var moTa=form.getValues().moTa;
                                                    var User=App.Session.getUserID();
                                                    var storeMapQuyen=Ext.getStore('vcb.store.MapQuyenStore');
                                                    var doDaiMang=storeMapQuyen.data.length
                                                    //lưu tất cả mapquyen với QuyenID như trên có trạng thái -0
                                                    Core.capNhatMapQuyen(quyenId,0,function(options,success,response){
                                                        if (success){//kiem tra ket noi thanh cong khong 
                                                            response = Ext.decode(response.responseText);
//                                                            console.log('cap nhat map quyen');
//                                                            console.log(response);
                                                            if(response.success==true){// nếu lưu thành công
                                                                //lưu những nút được phân quyền với trạng thái = 1
                                                                for(var i=0;i<doDaiMang;i++){
//                                                                    console.log(storeMapQuyen.data.items[0].data);
                                                                    var nutId=storeMapQuyen.data.items[i].data.NUTID;
//                                                                    console.log(nutId);
                                                                    Core.themMapQuyen(quyenId,nutId,1,function(options,success,response){
                                                                        if (success){//kiem tra ket noi thanh cong khong 
                                                                            response = Ext.decode(response.responseText);
                //                                                            console.log(response);
                                                                            if(response.success==true){// nếu lưu thành công
                                                                                //lưu những nút được phân quyền với trạng thái = 1
//                                                                                Ext.Msg.alert("Thông báo",'Ca');
                                                                            }else{
                                                                                Ext.Msg.alert("Thông báo",'123 lỗi khi cập nhật');
                                //                                                show_PhanQuyen.close();
                                                                            }
                                                                        }
                                                                        else {//ket noi khong thanh cong 
                                                                            Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                //                                            show_PhanQuyen.close();
                                                                        }
                                                                    });
                                                                }
                                                                Ext.Msg.alert("Thông báo",'Lưu thành công');
                                                                var storeNut=Ext.getStore('vcb.store.NutStore');
                                                                storeNut.load({//tím tên người tạo
                                                                    params:{QUYENID:quyenId},
                                                                    callback: function(records, operation, success) {}
                                                                })
                                                                var storeMapQuyen1=Ext.getStore('vcb.store.MapQuyenStore');
                                                                storeMapQuyen1.load({//tím tên người tạo
                                                                    params:{QUYENID:quyenId},
                                                                    callback: function(records, operation, success) {}
                                                                })
                                                            }else{
                                                                Ext.Msg.alert("Thông báo",'123 lỗi khi cập nhật');
                //                                                show_PhanQuyen.close();
                                                            }
                                                        }
                                                        else {//ket noi khong thanh cong 
                                                            Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                //                                            show_PhanQuyen.close();
                                                        }
                                                    });
//                                                    console.log(this.up('QLQuyenChiTietView').down('#danhSachQuyen'))
//                                                    storeMapQuyen.load({//tím tên người tạo
//                                                        params:{
//                                                            NUTID:-1,
//                                                            THEM:-1
//                                                        },
//                                                        callback: function(records, operation, success) {
//                                                            
//                                                        }
//                                                    })
                                                }
                                            },
//                                            {
//                                                margin: '5 5 5 5',
//                                                xtype:'button',
//                                                text:'Thêm mới',
//                                                icon:'./resources/img/Add.png',
//                //                                        flex: 0.5,
//                                                handler:function (){
////                                                    var form=this.up('form');
////                                                    var tenQuyen=form.getValues().tenQuyen;
////                                                    var quyenId=form.getValues().quyenId;
////                                                    var moTa=form.getValues().moTa;
////                                                    var User=App.Session.getUserID();
////                                                    var storeMapQuyen=Ext.getStore('vcb.store.MapQuyenStore');
////                                                    storeMapQuyen.load({//tím tên người tạo
////                                                        params:{
////                                                            NUTID:-1,
////                                                            THEM:-1
////                                                        },
////                                                        callback: function(records, operation, success) {
////                                                            
////                                                        }
////                                                    })
//                                                }
//                                            }
                                        ]
                                    }
                        ]
                    }
                ]
            }
        ]
    },
    hayghe:function (data){
        var me =this;
        if(data==0){
            this.down('#quyenId').setValue('');
            this.down('#tenQuyen').setValue('');
            this.down('#moTa').setValue('');
            this.down('#ngayTao').setValue('');
            this.down('#ngayCapNhat').setValue('');
            this.down('#nguoiTao').setValue('');
            this.down('#nguoiCapNhat').setValue('');
        }else{
            var quyenId=data.data.QUYENID;
            var tenQuyen=data.data.TENQUYEN;
            var moTa=data.data.MOTA; 
            var ngayTao=data.data.NGAYTAO;
            var ngayCapNhat=data.data.NGAYCAPNHAT;
            var nguoiTao=data.data.USERTAO;
            var nguoiCapNhat=data.data.USERCAPNHAT;
            this.down('#quyenId').setValue(quyenId);
            this.down('#tenQuyen').setValue(tenQuyen);
            this.down('#ngayTao').setValue(ngayTao);
            this.down('#ngayCapNhat').setValue(ngayCapNhat);
            this.down('#moTa').setValue(moTa);
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
            var storeNguoi=Ext.getStore('vcb.store.Nguoi_TimKiemStore');
            storeNguoi.load({//tím tên người tạo
                params:{
                    USERID:nguoiCapNhat
                },
                callback: function(records, operation, success) {
                    if(records.length>0){
                        me.down('#nguoiCapNhat').setValue(records[0].data.HOTEN);
                    }
                }
            })
            var storeNut=Ext.getStore('vcb.store.NutStore');
            storeNut.load({//tím tên người tạo
                params:{
                    QUYENID:quyenId
                },
                callback: function(records, operation, success) {
                }
            })
            var storeMapQuyen=Ext.getStore('vcb.store.MapQuyenStore');
            storeMapQuyen.load({//tím tên người tạo
                params:{
                    QUYENID:quyenId
                }
            })
        }
    }
})


