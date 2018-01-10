Ext.define(('vcb.view.QLCONGVIEC.NoiDungView'), {
    extend:'Ext.form.Panel',
    itemId: 'NoiDungView',
    id:'NoiDungView',
    xtype: 'NoiDungView',
    requires:[
        'vcb.view.QLCONGVIEC.NoiDungChiTietGridView',
    ],
    config:{
        items:[
            
            {
                xtype:'fieldset',
                itemId:'danhSachCBNV',
                title:'Danh sách công việc',
                items:[
                    {
                        xtype:'NoiDungChiTietGridView'
                    }
                ]
            },
            {
                xtype:'fieldset',
                title:'Tìm kiếm',
                items:[
                    {
                        xtype:'textfield',
                        name:'tenCV',
                        fieldLabel: 'Tên Công việc'
                    },
                    {
                        xtype:'container',
                        layout:'hbox',
                        items:[
                            {
                                xtype:'container',
                                flex: 1
                                //text:'Tím kiếm'
                            },
                            {
                                xtype:'button',
                                margin:'5 5 5 5',
                                text:'Tím kiếm',
                                icon:'./resources/img/timkiem.png',
                                handler:function (){
                                    var form=this.up('form');
                                    var tenCV=form.getValues().tenCV;  
                                    var nguoiId=App.Session.getNguoiID();
//                                    console.log(nguoiId);
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
                                                                if(records[j].data.NUTID==2){// nếu có quyền quản lý công việc sẽ được xem tất cả công việc
                                                                    kt=1;
                                                                    j=records.length
                                                                }
                                                            }
                                                            if(kt==1){//có quyền thì thực hiện
                                                                var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
                                                                storeCongViec.load({//tìm tên người cập nhật
                                                                   params:{
                                                                       CONGVIECID:-1,
                                                                       NGUOIID:-1,
                                                                       TRANGTHAIMAPVIEC:-1,
                                                                       CONGVIECTEN:tenCV
                                                                   }
                                                                });
                                                            }else{
                                                                var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
                                                                storeCongViec.load({//tìm tên người cập nhật
                                                                   params:{
                                                                       CONGVIECID:-1,
                                                                       NGUOIID:nguoiId,
                                                                       TRANGTHAIMAPVIEC:-1,
                                                                       CONGVIECTEN:tenCV
                                                                   }
                                                                });
                                                            }
                                                        }
                                                    })   

                                                }
                                            }
                                        })
                                    var form=this.up('form');
                                    var tenCV=form.getValues().tenCV;
                                   var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
                                storePhanQuyen.load({
                                    params:{
                                        USERID:App.Session.getUserID()
                                    },
                                    callback: function(records, operation, success) {
                                        var quyenId=-1;
                                        var tamp=0;
                                        if(records.length>0){
                                            //kiểm tra quyền 
                                            for(var i=0;i<records.length;i++){
                                                quyenId=records[i].data.QUYENID
                                                if(quyenId==4){
                                                    tamp=1;
                                                }
                                            }
                                            if(tamp==1){// được xem tất cả nội dung
                                                var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
                                                storeCongViec.load({//tìm tên người cập nhật
                                                   params:{
                                                       CONGVIECID:-1,
                                                       NGUOIID:-1,
                                                       TRANGTHAIMAPVIEC:-1,
                                                       CONGVIECTEN:tenCV
                                                   }
                                                });
                                            }else{
                                                 var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
                                                storeCongViec.load({//tìm tên người cập nhật
                                                   params:{
                                                       CONGVIECID:-1,
                                                       NGUOIID:App.Session.getNguoiID(),
                                                       TRANGTHAIMAPVIEC:1,
                                                       CONGVIECTEN:tenCV
                                                   }
                                                });
                                            }
                                            
                                        }else{
                                             var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
                                            storeCongViec.load({//tìm tên người cập nhật
                                               params:{
                                                   CONGVIECID:-2,
                                                   NGUOIID:App.Session.getNguoiID(),
                                                   TRANGTHAIMAPVIEC:2,
                                                   CONGVIECTEN:''
                                               }
                                            });
                                        }
                                    }
                                });
                                    var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
                                        storeCongViec.load({//tím tên người tạo
                                            params:{
                                                CONGVIECTEN:tenCV
                                            },
                                            callback: function(records, operation, success) {
                                            }
                                        })
                                }
                            }
                        ]
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
                        xtype:'button',
                        margin:'5 5 5 5',
                        name:'themMoi',
                        itemId:'themMoi',
                        icon:'./resources/img/Add.png',
                        text: 'Thêm mới',
                        handler:function (){
                            var USERID= App.Session.getUserID();
                            var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
                                storePhanQuyen.load({
                                    params:{
                                        USERID:USERID
                                    },
                                    callback: function(records, operation, success) {
                                        if(records.length==0){
                                            Ext.Msg.alert("Thông báo","Bạn chưa được phân quyền!")
                                        }else{
                                            Ext.getCmp('CenterView').activateViewItem('NoiDungChiTietView',function() {
                                                var itemview= Ext.create('vcb.view.QLCONGVIEC.NoiDungChiTietView');
                                                return itemview;
                                              }, this).hayghe(0);
                                        }
                                    }
                                });
                        }
                    }
                ]
            }
        ]
    },
    hayghe:function (){
        
//        var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
//        //Kiểm tra xem User có quyền xem ko 
//        var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
//        var tamp_QuyenXemNoiDung=0;
//        if(storePhanQuyen.data.length>0){// nếu độ dài storePhanQuyen lớn hơn 0 có nghĩa là User này được phân quyền
//            //Kiểm tra xem có quyền xem nội dung ko.
//            var i=0;
//            for(i;i<storePhanQuyen.data.length;i++){
//                var quyenId=storePhanQuyen.data.items[i].data.QUYENID;
//                if(quyenId==4){
//                    tamp_QuyenXemNoiDung=1;
//                }
//            }
//            console.log(tamp_QuyenXemNoiDung)
//            if(tamp_QuyenXemNoiDung==1){
//                storeCongViec.load({//tìm tên người cập nhật
//                    params:{
//                        CONGVIECID:-1,
//                        NGUOIID:-1,
//                        TRANGTHAIMAPQUYEN:-1,
//                        CONGVIECTEN:''
//                    }
//                });
//            }else{
//                storeCongViec.load({//tìm tên người cập nhật
//                    params:{
//                        CONGVIECID:-1,
//                        NGUOIID:App.Session.getNguoiID(),
//                        TRANGTHAIMAPQUYEN:1,
//                        CONGVIECTEN:''
//                    }
//                });
//            }
//        }else{
//            console.log('chua phan quyền');
//        }
        
//        var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
////        var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
//        var CONGVIECID=-1;//lấy tất cả công việc 
//        var TRANGTHAIMAPQUYEN=1;// chỉ lấy công việc được phân công 
//        var NGUOIID=App.Session.getNguoiID();//lấy CÔNG VIỆC ĐƯỢC PHÂN CÔNG CHO NGƯỜI ĐÓ
//        var userId=App.Session.getUserID();
//        //tìm quyền của User
//        var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
//        storePhanQuyen.load({
//            params:{
//                USERID:userId
//            }
//        });
//        //console.log('storePhanQuyen');
//        storeCongViec.load({//tìm tên người cập nhật
//            params:{
//                CONGVIECID:CONGVIECID,
//                NGUOIID:NGUOIID,
//                TRANGTHAIMAPQUYEN:TRANGTHAIMAPQUYEN,
//                CONGVIECTEN:''
//            }
//        });
//        // tìm xem có quyền chi nhánh không nếu có set quyền
//        for(var i=0;i<storePhanQuyen.data.length;i++){
//            var quyenId=storePhanQuyen.data.items[i].data.QUYENID;
//            if(quyenId==4){// quyền chi nhánh được xem tất cả dữ liệu công việc
//                TRANGTHAIMAPQUYEN=-1;
//                NGUOIID=-1;
////                console.log(NGUOIID);
//            }
//            console.log('hayghe');
//            if(storePhanQuyen.data.length-1==i){//chạy hết vòng lắp mới load storePhanQuyen
//                console.log('hayghe');
//                storeCongViec.load({//tìm tên người cập nhật
//                    params:{
//                        CONGVIECID:CONGVIECID,
//                        NGUOIID:NGUOIID,
//                        TRANGTHAIMAPQUYEN:TRANGTHAIMAPQUYEN,
//                        CONGVIECTEN:''
//                    }
//                });
//            }
//        }
    }
});




