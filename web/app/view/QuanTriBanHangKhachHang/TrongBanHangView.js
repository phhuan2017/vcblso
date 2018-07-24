Ext.define(('vcb.view.QuanTriBanHangKhachHang.TrongBanHangView'), {
    extend:'Ext.form.Panel',
    itemId: 'TrongBanHangView',
    id:'TrongBanHangView',
    xtype: 'TrongBanHangView',
    requires:[
        'vcb.view.QuanTriBanHangKhachHang.TrongBanHangChiTietGridView',
    ],
    config:{
        items:[
            {
                xtype:'fieldset',
                title:'Tìm kiếm thông tin khách hàng ',
                items:[
                    {
                        xtype:'textfield',
                        name:'tenCV',
                        fieldLabel: 'Tên thông tin'
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
                                }
                            }
                        ]
                    }
                ]
            },
            {
                xtype:'fieldset',
                itemId:'danhSachCBNV',
                title:'Danh sách khách hàng',
                items:[
                    {
                        xtype:'TrongBanHangChiTietGridView'
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




