Ext.define('vcb.view.QLND.DanhSachPhanQuyenView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachPhanQuyenView',
    xtype: 'DanhSachPhanQuyenView',
    height:300,
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.PhanQuyenStore'),
    config:{
        columns: [
           { xtype : 'checkcolumn',itemId:'chon',text: 'Chọn',  dataIndex: 'CHECK',
                listeners: {
                    checkchange:function (me, rowIndex, checked, eOpts ){
                        var record=me.up('DanhSachPhanQuyenView').store.data.items[rowIndex].data;
                         var store2=Ext.getStore('vcb.store.PhanQuyenStore');
                         store2.removeAt(rowIndex)
                         var store2=Ext.getStore('vcb.store.ChuaPhanQuyenStore');
                         store2.insert(0,record);
                    }
                } 
            },
            { 
                text: 'Tên Quyền', 
                dataIndex: 'TENQUYEN',
//                locked   : true,
                sortable : false,
                flex: 1,
//                tooltip:
            },
            {
                text: 'Mô tả', 
                dataIndex: 'MOTA',
//                locked   : true,
                sortable : false,
                flex: 1 
            }
        ]
    }
});