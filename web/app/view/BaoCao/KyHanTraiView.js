
Ext.define('vcb.view.BaoCao.KyHanTraiView', { 
    extend: "Ext.form.Panel",
    xtype:'KyHanTraiView',
    itemId:'KyHanTraiView',
    requires:[
        'vcb.view.Support.ListLinkGridView',
    ],
    config: {
        items:[
            {
                items:[
                    {
                        layout:'hbox',
                        xtype:'fieldset',
                        margin: '5 5 5 5',
                        title:'Điều kiện báo cáo',
                        items:[
                            {
                                xtype:'datefield',
                                margin: '5 0 5 0',
                                name:'ngayTaoKyHan',
                                itemId:'ngayTaoKyHan',
                                maxValue:new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
                                fieldLabel:'Ngày tạo kỳ hạn',
                                editable:false,
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
                                text:'Xuất Báo cáo',
                                icon:'./resources/img/excel.png',
                                handler:function (){
                                    var form=this.up('form');
                                    var tam=form.getValues().ngayTaoKyHan
                                    var thang=tam.slice(0,2)
                                    var ngay=tam.slice(3,5)
                                    var nam=tam.slice(8,10)
                                    var ngayTaoKyHan=ngay+thang+nam;
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
                                                                if(records[j].data.NUTID==12){
                                                                    kt=12;
                                                                    j=records.length
                                                                }
                                                            }
                                                            if(kt==12){
                                                                //Kiểm tra xem đã điền ngày tạo kỳ hạn chưa 
                                                                if(tam==''){//nếu chưa điền thông báo điền ngày tạo kỳ hạn
                                                                    Ext.Msg.alert("Thông báo","Bạn vui lòng chọn ngày tạo kỳ hạn.");
                                                                }else{
                                                                    var kyhanUrl = 'baoCaoKyHanServlet';
                                                                    var form = document.createElement("form");			
                                                                    form.method = "POST";
                                                                    form.action = kyhanUrl;
                                                                    // biến truyền vào 
                                                                    var ngayTaoKyHan1 = document.createElement('input');				
                                                                    ngayTaoKyHan1.name = 'ngayTaoKyHan';
                                                                    ngayTaoKyHan1.value = ngayTaoKyHan;
                                                                    form.appendChild(ngayTaoKyHan1);
                                                                    //=======================================
                                                                    document.body.appendChild(form);
                                                                    form.submit();
                                                                    document.body.removeChild(form);
                                                                }
                                                            }else{
                                                                Ext.Msg.alert("Thông báo","Bạn không có quyền ở chức năng này.");
                                                            }
                                                        }
                                                    })   
                                                }
                                            }
                                        })
                                    //================================================================================================
                                } 
                            }
                        ]
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
////                    {
////                        margin: '5 5 5 5',
////                        xtype:'button',
////                        text:'Export',
////                        icon:'./resources/img/Add.png',
////                        handler:function (){
////                               
////                            var form = this.up('form').getForm();		
////                            var params = form.getValues();
////                            var tam=params.tenChuongTrinh.slice(0, 4);
////                            console.log(tam);
//////                            console.log(params);
//////									
//////                            var invocationUrl = 'exportExcelServlet';
//////                            var form = document.createElement("form");			
//////                            form.method = "POST";
//////                            form.action = invocationUrl;
//////                            // biến truyền vào 
//////                            var tenChuongTrinh = document.createElement('input');				
//////                            tenChuongTrinh.name = 'tenChuongTrinh';
//////                            tenChuongTrinh.value = params.tenChuongTrinh;
//////                            form.appendChild(tenChuongTrinh);
//////                            //=======================================
//////                            //
//////                            document.body.appendChild(form);
//////                            form.submit();
//////                            document.body.removeChild(form);
////                        }
////                    },
//                    {
//                        margin: '5 5 5 5',
//                        xtype:'button',
//                        text:'Thêm mới',
//                        icon:'./resources/img/Add.png',
////                        flex: 0.7,
//                        handler:function (){
//                            var userId=App.Session.getUserID();//lấy thông tin user id đang đăng nhập
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


