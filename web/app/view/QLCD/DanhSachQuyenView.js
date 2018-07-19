Ext.define('vcb.view.QLCD.DanhSachQuyenView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachQuyenView',
    xtype: 'DanhSachQuyenView',
    height:300,
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.ChuaPhanQuyenStore'),
    config:{
        columns: [
           { xtype : 'checkcolumn',itemId:'chon',text: 'Chọn',  dataIndex: 'CHECK',
                listeners: {
                    checkchange:function (me, rowIndex, checked, eOpts ){
                        var record=me.up('DanhSachQuyenView').store.data.items[rowIndex].data;
                         var store2=Ext.getStore('vcb.store.ChuaPhanQuyenStore');
                         store2.removeAt(rowIndex)
//                         console.log(rowIndex);
                         var store2=Ext.getStore('vcb.store.PhanQuyenStore');
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