Ext.define('vcb.view.QLCONGVIEC.DanhSachPhanCongCBNVView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachPhanCongCBNVView',
    xtype: 'DanhSachPhanCongCBNVView',
    height:150,
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.NguoiPhanCongStore'),
    config:{
        columns: [
            { xtype : 'checkcolumn',itemId:'chon',text: 'Chọn',  dataIndex: 'CHECK',
               listeners: {
                   checkchange:function (me, rowIndex, checked, eOpts ){
                       var record=me.up('DanhSachPhanCongCBNVView').store.data.items[rowIndex].data;
                        var store2=Ext.getStore('vcb.store.NguoiPhanCongStore');
                        store2.removeAt(rowIndex)
//                        var store2=Ext.getStore('vcb.store.NguoiStore');
//                        store2.insert(0,record);
                   }
               } 
           },
           { text: 'Tên NV', dataIndex: 'HOTEN',flex: 1  },
           { text: 'Phòng ban', dataIndex: 'PHONGBANID' }   
        ]      
    }
});