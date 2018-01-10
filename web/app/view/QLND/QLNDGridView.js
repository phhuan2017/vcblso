Ext.define('vcb.view.QLND.QLNDGridView', { 
    extend: 'Ext.grid.Panel',
    xtype:'QLNDGridView',
    itemId:'QLNDGridView',
    border: false,
    height:630,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.NguoiStore'),
//    requires:[
//        'vcb.view.CongViecChiTietView',
//    ],
    stripeRows: true,
    layout:'fit',
    config: {
        columns: [
            { text: 'SELLERID',  dataIndex: 'SELLERID' },
            { text: 'Tên', dataIndex: 'HOTEN', flex: 1 }
        ],
        listeners: {
            itemclick:function (me, record, item, index){
                Ext.getCmp('CenterView').activateViewItem('QLNDChiTietView',function() {
                    var itemview= Ext.create('vcb.view.QLND.QLNDChiTietView');
                    return itemview;
                  }, this).hayghe(record);
            }
        }
    }
 
});


