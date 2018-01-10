Ext.define('vcb.view.KHUYENMAI.DanhSachTaiKhoanTietKiemView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachTaiKhoanTietKiemView',
    xtype: 'DanhSachTaiKhoanTietKiemView',
    border: false,
    height:200,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.KhachHangTietKiemKhuyenMaiStore'),
    stripeRows: true,
    title: 'Danh Sách tài khoản tiết kiệm',
    layout:'fit',
    requires:[
        'Ext.ux.Exporter',
//        'Ext.ux.Exporter.Button'
    ],
    config:{
        columns: [
            {
                text: 'CIF', 
                dataIndex: 'CIF',
//                locked   : true,
//                sortable : false,
                flex: 1 
            },
            {
                text: 'Số Tài khoản', 
                dataIndex: 'SOTAIKHOAN',
//                locked   : true,
//                sortable : false,
                flex:1 
            },
            {
                text: 'Số tiền', 
                dataIndex: 'SOTIEN',
                type: 'string',
//                locked   : true,
//                sortable : false,
                flex:1 
            },
            {
                text: 'Số điểm tích lũy', 
                dataIndex: 'SODIEMTICHLUY',
//                locked   : true,
//                sortable : false,
                flex:1 
            }
        ]
    }
});