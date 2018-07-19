Ext.define('vcb.view.QLCD.DanhSachNutDuocPhanView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachNutDuocPhanView',
    xtype: 'DanhSachNutDuocPhanView',
    title: 'Danh sách chương trình được phân',
    minHeight:'300',
    margin:'5 5 5 5',
    name:'danhSachNut',
//    height:150,
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.MapQuyenStore'),
    config:{
        columns: [
            { xtype : 'checkcolumn',itemId:'chon',text: 'Chọn',  dataIndex: 'CHECK',
                listeners: {
                    checkchange:function (me, rowIndex, checked, eOpts ){
                             var record=me.up('DanhSachNutDuocPhanView').store.data.items[rowIndex].data;
//                                                        console.log(record)
                             var store2=Ext.getStore('vcb.store.MapQuyenStore');
                             store2.removeAt(rowIndex)
//                                                         console.log(rowIndex);
//                             var store=Ext.getStore('vcb.store.NutStore');
//                             store.insert(0,record);
                    }
                } 
            },
            { text: 'ID',  dataIndex: 'NUTID',itemId:'nutId',name:'nutId' },
            { text: 'Tên Chương Trình', dataIndex: 'NUTNAME', flex: 1,itemId:'nutName',name:'nutName' }
        ]
    }
});
