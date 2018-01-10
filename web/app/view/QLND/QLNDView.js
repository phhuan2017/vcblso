Ext.define('vcb.view.QLND.QLNDView', { 
    extend: "Ext.form.Panel",
    xtype:'QLNDView',
    itemId:'QLNDView',
    requires:[
        'vcb.view.QLND.QLNDGridView',
    ],
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
                        itemId:'tenNguoiDung',
                        name:'tenNguoiDung',
                        fieldLabel:'Tên người dùng',
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
                            var tenNguoiDung=form.getValues().tenNguoiDung;
                            var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
                                storeNguoi.load({//tím tên người tạo
                                    params:{
                                        HOTEN:tenNguoiDung
                                    },
                                    callback: function(records, operation, success) {
                                    }
                                })
                        }
                    }
                ]
            },
            {
                xtype:'QLNDGridView'
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
                        text:'Thêm ND',
                        flex: 0.5,
                        handler:function (){
                            Ext.getCmp('CenterView').activateViewItem('QLNDChiTietView',function() {
                              var itemview= Ext.create('vcb.view.QLND.QLNDChiTietView');
                              return itemview;
                            }, this).hayghe(0);
                        }
                    }
                ]
            },
        ]
    }
 
});


