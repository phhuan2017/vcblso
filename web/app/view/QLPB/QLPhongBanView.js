Ext.define('vcb.view.QLPB.QLPhongBanView', { 
    extend: "Ext.form.Panel",
    xtype:'QLPhongBanView',
    itemId:'QLPhongBanView',
    config: {
        items:[
            
            {
//                layout:'hbox',
                xtype:'fieldset',
                margin: '5 5 5 5',
                title:'Điều kiện tìm kiếm',
                items:[
                    {
                        xtype:'textfield',
                        margin: '5 0 5 0',
                        itemId:'tenPhong',
                        name:'tenPhong',
                        fieldLabel:'Tên phòng ban',
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
                        text:'Tìm kiếm',
                        icon:'./resources/img/timkiem.png',
                        handler:function (){
                            var form = this.up('form').getForm();
                            var tenPhong=form.getValues().tenPhong;
                            var storePhongBan=Ext.getStore('vcb.store.PhongBanStore');
                            storePhongBan.load({
                                params:{
                                    TENPHONG:tenPhong
                                }
                            })
                        }
                        
                    }
                ]
            },
            {
                xtype:'grid',
                title: 'Danh sách phòng ban',
                store: Ext.getStore('vcb.store.PhongBanStore'),
                columns: [
                    { text: 'Mã phòng',  dataIndex: 'PHONGBANID' },
                    { text: 'Tên', dataIndex: 'TENPHONG', flex: 1 }
                ],
                listeners: {
                    itemclick:function (me, record, item, index){
                        Ext.getCmp('CenterView').activateViewItem('QLPhongBanChiTietView',function() {
                            var itemview= Ext.create('vcb.view.QLPB.QLPhongBanChiTietView');
                            return itemview;
                          }, this).hayghe(record);
                    }
                }
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
                        text:'Thêm Phòng ban',
                        icon:'./resources/img/Add.png',
//                        flex: 0.7,
                        handler:function (){
                            Ext.getCmp('CenterView').activateViewItem('QLPhongBanChiTietView',function() {
                              var itemview= Ext.create('vcb.view.QLPB.QLPhongBanChiTietView');
                              return itemview;
                            }, this).hayghe(0);
                        }
                    }
                ]
            }
        ]
    }
 
});


