Ext.define('vcb.view.QLCHUCVU.QLChucVuView', { 
    extend: "Ext.form.Panel",
    xtype:'QLChucVuView',
    itemId:'QLChucVuView',
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
                        itemId:'tenChucVu',
                        name:'tenChucVu',
                        fieldLabel:'Tên Chức Vụ',
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
                            var tenChucVu=form.getValues().tenChucVu;
                            var storeChucVu=Ext.getStore('vcb.store.ChucVuStore');
                            storeChucVu.load({
                                params:{
                                    tenChucVu:tenChucVu
                                }
                            })
                        }
                        
                    }
                ]
            },
            {
                xtype:'grid',
                title: 'Danh sách Chức Vụ',
                store: Ext.getStore('vcb.store.ChucVuStore'),
                columns: [
                    { text: 'Mã Chuc vu',  dataIndex: 'maChucVu' },
                    { text: 'Tên', dataIndex: 'tenChucVu', flex: 1 }
                ],
                listeners: {
                    itemclick:function (me, record, item, index){
                        Ext.getCmp('CenterView').activateViewItem('QLChucVuChiTietView',function() {
                            var itemview= Ext.create('vcb.view.QLCHUCVU.QLChucVuChiTietView');
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
                        text:'Thêm Chức Vụ',
                        icon:'./resources/img/Add.png',
//                        flex: 0.7,
                        handler:function (){
                            Ext.getCmp('CenterView').activateViewItem('QLChucVuChiTietView',function() {
                              var itemview= Ext.create('vcb.view.QLCHUCVU.QLChucVuChiTietView');
                              return itemview;
                            }, this).hayghe(0);
                        }
                    }
                ]
            },
        ]
    }
 
});


