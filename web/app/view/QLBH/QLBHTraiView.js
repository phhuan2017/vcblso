Ext.define('vcb.view.QLBH.QLBHTraiView', { 
    extend: "Ext.form.Panel",
    xtype:'QLBHTraiView',
    itemId:'QLBHTraiView',
    requires:[
        'vcb.view.QLBH.DanhSachCBNVView',
//        'Ext.ux.Exporter.Button'
    ],
    config: {
        items:[
            {
                items:[
                    {
//                        layout:'hbox',
                        xtype:'fieldset',
                        margin: '5 5 5 5',
                        title:'Điều kiện tìm kiếm CBNV',
                        items:[
                            {
                                xtype:'textfield',
                                margin: '5 0 5 0',
                                name:'tenCBNV',
                                itemId:'tenCBNV',
                                fieldLabel:'Tên CBNV',
//                                flex:2
                            },
                            {
                                xtype:'combobox',
                                margin:'5 0 5 0',
//                                flex:1,

                                itemId:'phongBan',
                                name:'phongBan',
                                store: Ext.getStore('vcb.store.PhongBanStore'),
                                displayField: 'TENPHONG',
                                valueField: 'PHONGBANID',
                                fieldLabel:'Phòng ban',
                                editable:false
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
//                                exportStore:
                                handler:function (){
                                    var form=this.up('form');
                                    
                                    var tenCBNV=form.getValues().tenCBNV;
                                    var phongBan=form.getValues().phongBan;
                                    var nguoiId = 0;
                                     //================================================================================================
                                    var userId=App.Session.getUserID();//lấy thông tin user id đang đăng nhập
                                    var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
//                                    exportStore(storePhanQuyen,'aa','xlsx')
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
                                                                if(records[j].data.NUTID==11){
                                                                    kt=11;
                                                                    j=records.length
                                                                }else{
                                                                    if(records[j].data.NUTID==10){
                                                                        kt=10;
                                                                        j=records.length
                                                                    }else{
                                                                        if(records[j].data.NUTID==9){
                                                                            kt=9;
                                                                            j=records.length
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            if(kt==11){
                                                                var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
                                                                storeNguoi.load({
                                                                    params:{
                                                                        HOTEN:tenCBNV,
                                                                        PHONGBANID:phongBan,
                                                                        NGUOIID:0
                                                                    }
                                                                })
                                                            }else{
                                                                if(kt==10){//user có quyền lãnh đạo phòng
                                                                    phongBan = App.Session.getPhongBanId();
                                                                    var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
                                                                    storeNguoi.load({
                                                                        params:{
                                                                            HOTEN:tenCBNV,
                                                                            PHONGBANID:phongBan,
                                                                            NGUOIID:nguoiId
                                                                        }
                                                                    })
                                                                }else{
                                                                    if(kt==9){//user có quyền công việc cá nhân
                                                                        nguoiId = App.Session.getNguoiID();
                                                                        var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
                                                                        storeNguoi.load({
                                                                            params:{
                                                                                HOTEN:tenCBNV,
                                                                                PHONGBANID:phongBan,
                                                                                NGUOIID:nguoiId
                                                                            }
                                                                        })
                                                                    }else{
                                                                        Ext.Msg.alert("Thông báo","Bạn không được phép sử dụng chức năng này");
                                                                        var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
                                                                        storeNguoi.load({
                                                                            params:{
                                                                                HOTEN:-1,
                                                                                PHONGBANID:-1,
                                                                                NGUOIID:-1
                                                                            }
                                                                        })
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    })   
                                                }
                                            }
                                        })
                                    //================================================================================================
                                    
//                                    console.log(phongBan);
//                                    var a=window.open('F:\GAME\LienMinhHuyenThoai.1113\LienMinhHuyenThoai\GameData\GarenaMessenger.exe');
                                    
//                                    var shell = new ActiveXObject("WScript.Shell");
//                                    var path = '"S:/Test.bat"';
//                                    shell.run(path,1,false);
//                                    var form = this.up('form').getForm();'file:///S:Test/Test.bat'
//                                    var tenChuongTrinh=form.getValues().tenChuongTrinh;
//////                                            console.log(MOTA);
//                                    var storeLink=Ext.getStore('vcb.store.LinkStore');
//                                    storeLink.load({
//                                        params:{
//                                            tenChuongTrinh:tenChuongTrinh
//                                        }
//                                    })
                                }
                            }
                        ]
                    },
                    {
                        xtype:'DanhSachCBNVView',
                        listeners: {
                            itemclick:function (me, record, item, index){
                                Ext.getCmp('CenterView').activateViewItem('QLBHChiTietView',function() {
                                    var itemview= Ext.create('vcb.view.QLBH.QLBHChiTietView');
                                    return itemview;
                                }, this).hayghe(record);
                            }
                        }
                    }
                ]
            }
        ],
//        dockedItems: [
//            {
//                xtype:'container',
//                dock: 'bottom',
//                layout:'hbox',
//                items:[
//                    {
//                        xtype:'container',
//                        flex:1
//                    },
//                    {
//                        margin: '5 5 5 5',
//                        xtype:'button',
//                        text:'Thêm mới',
//                        icon:'./resources/img/Add.png',
////                        flex: 0.7,
//                        handler:function (){
//                            var userId=App.Session.getUserID();//lấy thông tin user id đang đăng nhập
////                            var a= App.Session.kiemTraQuyen(userId,5);
////                            console.log(a.data.length);
//                            var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
//                                storePhanQuyen.load({// tìm quyền của user
//                                    params:{
//                                        USERID:userId
//                                    },
//                                    callback: function(records, operation, success) {
//                                        for(var i=0;i<records.length;i++){//chạy từng QuyenID
//                                            var quyenId=records[i].data.QUYENID
//                                            var storeMapQuyen=Ext.getStore('vcb.store.MapQuyenStore');//kiểm tra xem có nút đó không
//                                            storeMapQuyen.load({//tím tên người tạo
//                                                params:{
//                                                    QUYENID:quyenId
//                                                },
//                                                callback: function(records, operation, success) {
//                                                    var kt=0;// biến kiểm tra
//                                                    for(var j=0;j<records.length;j++){
//                                                        if(records[j].data.NUTID==5){
//                                                            kt=1;
//                                                            j=records.length
//                                                        }
//                                                    }
//                                                    if(kt==1){
//                                                        Ext.getCmp('CenterView').activateViewItem('ListLinkChiTietView',function() {
//                                                            var itemview= Ext.create('vcb.view.Support.ListLinkChiTietView');
//                                                            return itemview;
//                                                        }, this).hayghe(-1);
//                                                    }else{
//                                                        Ext.Msg.alert("Thông báo","Bạn không có quyền thêm mới");
//                                                    }
//                                                }
//                                            })   
//                                            
//                                        }
//                                    }
//                                })
////                                console.log(storePhanQuyen);
////                                console.log(App.Session.getRecords());
////                            Ext.getCmp('CenterView').activateViewItem('ListLinkChiTietView',function() {
////                              var itemview= Ext.create('vcb.view.Support.ListLinkChiTietView');
////                              return itemview;
////                            }, this).hayghe(-1);
//                        }
//                    }
////                    {
////                        margin: '5 5 5 5',
////                        xtype:'button',
////                        text:'Thêm nhóm',
////                        icon:'./resources/img/Add.png',
//////                        flex: 0.7,
////                        handler:function (){
//////                            Ext.getCmp('CenterView').activateViewItem('QLTrangThaiChiTietView',function() {
//////                              var itemview= Ext.create('vcb.view.QLTrangThaiChiTietView');
//////                              return itemview;
//////                            }, this);
////                        }
////                    }
//                ]
//            },
//        ]
    }
 
});


