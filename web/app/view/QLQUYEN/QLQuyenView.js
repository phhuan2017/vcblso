Ext.define('vcb.view.QLQUYEN.QLQuyenView', { 
    extend: "Ext.form.Panel",
    xtype:'QLQuyenView',
    itemId:'QLQuyenView',
    config: {
        items:[            
            {
                xtype:'fieldset',
                margin: '5 5 5 5',
                title:'Điều kiện tìm kiếm',
                items:[
                    {
                        xtype:'textfield',
                        margin: '5 0 5 0',
                        itemId:'tenQuyen',
                        name:'tenQuyen',
                        fieldLabel:'Tên quyền',
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
                        flex:2
                    },
                    {
                        margin: '5 5 5 5',
                        xtype:'button',
                        text:'tìm kiếm',
                        flex: 0.5,
                        handler:function (){
                            var form=this.up('form');
                            var tenQuyen=form.getValues().tenQuyen;
                            var storeQuyen=Ext.getStore('vcb.store.QuyenStore');
                                storeQuyen.load({//tím tên người tạo
                                    params:{
                                        TENQUYEN:tenQuyen
                                    },
                                    callback: function(records, operation, success) {
                                    }
                                })
                        }
                    }
                ]
            },
            {
                xtype:'grid',
                title: 'Danh sách Quyền',
                store: Ext.getStore('vcb.store.QuyenStore'),
                columns: [
                    { text: 'ID',  dataIndex: 'QUYENID' },
                    { text: 'Tên Quyền', dataIndex: 'TENQUYEN', flex: 1 }
                ],
                listeners: {
                    itemclick:function (me, record, item, index){
                        Ext.getCmp('CenterView').activateViewItem('QLQuyenChiTietView',function() {
                            var itemview= Ext.create('vcb.view.QLQUYEN.QLQuyenChiTietView');
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
                        flex:2
                    },
                    {
                        margin: '5 5 5 5',
                        xtype:'button',
                        text:'Thêm Quyền',
//                        flex: 0.6,
                        handler:function (){
                            Ext.getCmp('CenterView').activateViewItem('QLQuyenChiTietView',function() {
                              var itemview= Ext.create('vcb.view.QLQUYEN.QLQuyenChiTietView');
                              return itemview;
                            }, this).hayghe(0);
                        }
                    }
                ]
            },
        ]
    }
})


