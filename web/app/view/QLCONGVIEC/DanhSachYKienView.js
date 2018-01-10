Ext.define('vcb.view.QLCONGVIEC.DanhSachYKienView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachYKienView',
    xtype: 'DanhSachYKienView',
    height:150,
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.YKienViecStore'),
    config:{
        columns: [
           { text: 'Nội dung', dataIndex: 'NOIDUNG',flex:4,sortable:false},
           { text: 'Người báo cáo', dataIndex: 'HOTEN',flex:1,sortable:false },
           { text: 'Thời gian', dataIndex: 'THOIGIAN',flex:1,sortable:false } 
        ],
        
    
    },
    show_NoiDung:function (store){
        var show_NoiDung = Ext.create('Ext.window.Window', {
//            closable: true,
            maximizable: true,
            height: 200,
            width: 400,
            title:'Sửa nội dung báo cáo',
            modal: true,
            id: 'show_NoiDung',
            itemId:'show_NoiDung',
//            layout: 'fit',
//            autoScroll:true,
            items: [
                {
                    xtype:'textfield',
                    margin:'5 5 5 5',
                    width      : 350,
                    height: 100,
                    fieldLabel:'Nội dung',
                    hidden:true,
                    flex:1,
                    itemId:'yKienId',
                    id:'yKienId',
                    name:'yKienId'
                },
                {
                    xtype:'textfield',
                    margin:'5 5 5 5',
                    width      : 350,
                    height: 100,
                    fieldLabel:'Nội dung',
                    hidden:true,
                    flex:1,
                    itemId:'congViecId',
                    id:'congViecId'
                },
                {
                    xtype:'textarea',
                    margin:'5 5 5 5',
                    width      : 350,
                    height: 100,
                    fieldLabel:'Nội dung',
                    flex:1,
                    id:'noiDung',
                    itemId:'noiDung',
                    name:'noiDung'
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
                            text:'lưu',
                            icon:'./resources/img/Save.png',
                            handler:function (){
//                                console.log(store);
                                var noiDung=this.up('#show_NoiDung').down('#noiDung').getValue()
                                var yKienId=this.up('#show_NoiDung').down('#yKienId').getValue()
                                var congViecId=this.up('#show_NoiDung').down('#congViecId').getValue()
                                Core.capNhatYKienServlet(noiDung,yKienId,function(options,success,response){
                                    if (success) {//kiem tra ket noi thanh cong khong 
                                        response = Ext.decode(response.responseText);
                    //                    console.log(response.data[0]);
                                        if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                            Ext.Msg.alert("Thông báo","Lưu thành công");
                                            var storeYKien=Ext.getStore('vcb.store.YKienViecStore');
                                            storeYKien.load({//tìm tên người cập nhật
                                                params:{
                                                    CONGVIECID:congViecId
                                                }
                                            })
                                            show_NoiDung.close();
                                        }else{
                                            Ext.Msg.alert("Thông báo",response.ResponseName);
                                            show_NoiDung.close();
                                        }
                                    }
                                    else {//ket noi khong thanh cong 
                                        Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                        show_NoiDung.close();
                                    }
                                });

                            }
                        },
                        {
                            xtype:'button',
                            margin:'5 5 5 5',
                            text:'thoát',
                            handler:function (){
                                show_NoiDung.close();
                            }
                        }
                    ]
                }
            ],
            
        }
//        hayghe:function (){
//            
//        }
        );
        show_NoiDung.show();
    },
    listeners: {
        select:function ( me, record, index, eOpts ){
            this.show_NoiDung();
            Ext.getCmp('noiDung').setValue(record.data.NOIDUNG);
            Ext.getCmp('yKienId').setValue(record.data.YKIENID);
            Ext.getCmp('congViecId').setValue(record.data.CONGVIECID);
//            console.log(record.data.YKIENID);
//            
//            Ext.getCmp('noiDung').setValue('');
//            console.log(Ext.getCmp('show_NoiDung'));
            
            
//            console.log(this.show_NoiDung.down('#noiDung'));
        }
    }
});