Ext.define('vcb.view.QLTRANGTHAI.QLTrangThaiChiTietView', { 
    extend: "Ext.form.Panel",
    xtype:'QLTrangThaiChiTietView',
    itemId:'QLTrangThaiChiTietView',
    layout: 'fit',
    config: {
        items:[
            {
                xtype:'tabpanel',
                items:[
                    {
                        title: 'Thông tin trạng thái',
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
                                                itemId:'maTrangThai',
                                                name:'maTrangThai',
                                                readOnly:'true',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Mã trạng thái'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                itemId:'tenTrangThai',
                                                name:'tenTrangThai',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Tên trạng thái'
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
                                            
                                            var tenTrangThai=this.up('QLTrangThaiChiTietView').down('#tenTrangThai').getValue();
                                            var tamMaTrangThai=this.up('QLTrangThaiChiTietView').down('#maTrangThai').getValue();
                                            var maTrangThai=0;
                                            var User=App.Session.getUserID();
                                            if(tamMaTrangThai!='Mã tự sinh không cần điền'){
                                                maTrangThai = tamMaTrangThai;
                                                Ext.Msg.confirm("Thông báo", "Có phải bạn muốn thay đổi trạng thái?", function(btnText){
                                                        if(btnText === "yes"){
                                                            Core.ThemTrangThai(tenTrangThai,User,maTrangThai,function(options,success,response){
                                                                if (success) {//kiem tra ket noi thanh cong khong 
                                                                    response = Ext.decode(response.responseText);
                //                                                    console.log(response);
                                                                    if(response.success==true){// kiểm tra user tồn tại hay chưa 
                                                                        Ext.Msg.alert("Thông báo","Lưu Thành công");
                                                                        var storeTrangThai=Ext.getStore('vcb.store.TrangThaiStore');
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
                                                    }, this);
                                            }else {
                                                Core.ThemTrangThai(tenTrangThai,User,maTrangThai,function(options,success,response){
                                                    if (success) {//kiem tra ket noi thanh cong khong 
                                                        response = Ext.decode(response.responseText);
    //                                                    console.log(response);
                                                        if(response.success==true){// kiểm tra user tồn tại hay chưa 
                                                            Ext.Msg.alert("Thông báo","Lưu Thành công");
                                                            var storeTrangThai=Ext.getStore('vcb.store.TrangThaiStore');
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
                                            
//                                            
                                            
//                                            var ViewCenter = Ext.getCmp('CenterView');
//                                            ViewCenter.activateViewItem('#ProductAddParcelView',function(){
//                                                     return Ext.create(App.path('view.ProductAddParcelView'))
//                                            }).activate();
                                        },
                                    },
//                                    {
//                                        margin: '5 5 5 5',
//                                        xtype:'button',
//                                        text:'Xóa Trạng thái',
//                                        icon:'./resources/img/Delete.png',
////                                        flex: 0.5,
//                                        handler:function (){
//                //                            var ViewCenter = Ext.getCmp('CenterView');
//                //                            ViewCenter.activateViewItem('#ProductAddParcelView',function(){
//                //                                     return Ext.create(App.path('view.ProductAddParcelView'))
//                //                            }).activate();
//                                        }
//                                    }
                                ]
                            }
                        ]
                    },
//                    {
//                        title: 'Nhóm trạng thái',
//                        items:[
//                            {
//                                xtype:'textfield',
//                                margin:'5 5 5 5',
//                                fieldLabel:'Tên nhóm:'
//                            }
////                            {
////                                xtype: 'itemselector',
//////                                bodyStyle: 'background-color: white',
//////                                cls: 'background',
////                                name: 'FunctionId',
////                                itemId: 'GroupUserPermission',
////                                anchor: '100%',
////                                width: '100%',
////                                height: 300,
//////                                store: App.store.UserGroupPermission,
////                                displayField: '1',
////                                valueField: '2',
////                                allowBlank: false,
////                                msgTarget: 'side',
////                                fromTitle: 'Quyền chưa được cấp',
////                                toTitle: 'Quyền đã được cấp'
////                            },
//                        ]
//                    }
                ]
            }
        ],
        dockedItems: [
        ]
    },
    hayghe:function (m) {
        var me=this;
        if(m ==-1)
        {
            this.down('#maTrangThai').setValue('Mã tự sinh không cần điền');
            this.down('#tenTrangThai').setValue('');
            this.down('#ngayTao').setValue('');
            this.down('#ngayCapNhat').setValue('');
            this.down('#nguoiCapNhat').setValue('');
            this.down('#nguoiTao').setValue('');
        }else
        {            
            var maTrangThai=m.data.TRANGTHAIID;
            var MOTA=m.data.MOTA;
            var ngayTao=m.data.NGAYTAO;
            var ngaycapnhat=m.data.NGAYCAPNHAT;
            var nguoiTao=m.data.USERTAO;
            var nguoiCapNhat=m.data.USERCAPNHAT;
            this.down('#maTrangThai').setValue(maTrangThai);
            this.down('#tenTrangThai').setValue(MOTA);
            this.down('#ngayTao').setValue(ngayTao);
            this.down('#ngayCapNhat').setValue(ngaycapnhat);
//            this.down('#nguoiCapNhat').setValue(nguoiCapNhat);
//            this.down('#nguoiTao').setValue(nguoiTao);
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


