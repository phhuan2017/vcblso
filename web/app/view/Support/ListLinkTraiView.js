
Ext.define('vcb.view.Support.ListLinkTraiView', { 
    extend: "Ext.form.Panel",
    xtype:'ListLinkTraiView',
    itemId:'ListLinkTraiView',
//    layout:'fit',
    requires:[
        'vcb.view.Support.ListLinkGridView',
    ],
    config: {
        
        items:[
            {
                layout:'hbox',
//                flex:1,
                xtype:'fieldset',
                margin: '5 5 5 5',
                title:'Điều kiện tìm kiếm',
                items:[
                    {
                        xtype:'textfield',
                        margin: '5 0 5 0',
                        name:'tenChuongTrinh',
                        itemId:'tenChuongTrinh',
                        fieldLabel:'Tên CT',
                        flex:2,
                        listeners: {
                            change:function ( me, newValue, oldValue, eOpts ){
                                tenChuongTrinh=newValue
                            }
                        }
                    }
                ]
            },
            {
                xtype:'container',
//                flex:1,
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
                            var form = this.up('form').getForm();
                            var tenChuongTrinh=form.getValues().tenChuongTrinh;
////                                            console.log(MOTA);
                            var storeLink=Ext.getStore('vcb.store.LinkStore');
                            storeLink.load({
                                params:{
                                    tenChuongTrinh:tenChuongTrinh
                                }
                            })
                        }
                    }
                ]
            },
            {
                xtype:'ListLinkGridView'
            }
        ],
        dockedItems: [
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
                        text:'Thêm mới',
                        icon:'./resources/img/Add.png',
//                        flex: 0.7,
                        handler:function (){
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
                                                        if(records[j].data.NUTID==5){
                                                            kt=1;
                                                            j=records.length
                                                        }
                                                    }
                                                    if(kt==1){
                                                        Ext.getCmp('CenterView').activateViewItem('ListLinkChiTietView',function() {
                                                            var itemview= Ext.create('vcb.view.Support.ListLinkChiTietView');
                                                            return itemview;
                                                        }, this).hayghe(-1);
                                                    }else{
                                                        Ext.Msg.alert("Thông báo","Bạn không có quyền thêm mới");
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
 
});


