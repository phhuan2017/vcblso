Ext.define('vcb.view.QLBH.DanhSachCBNVView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachCBNVView',
    xtype: 'DanhSachCBNVView',
    title: 'Danh sách CBNV',
    minHeight:'300',
    margin:'5 5 5 5',
    name:'danhSachCBNV',
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.NguoiStore'),
    config:{
        columns: [
            { text: 'Tên',  dataIndex: 'HOTEN',flex: 1,itemId:'nutId',name:'nutId' },
            { text: 'Phòng', dataIndex: 'PHONGBANID', flex: 1,itemId:'nutName',name:'nutName' }
        ]
    }
});
