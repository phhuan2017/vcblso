Ext.define('vcb.view.KHUYENMAI.DanhSachKhachHangKhuyenMaiView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachKhachHangKhuyenMaiView',
    xtype: 'DanhSachKhachHangKhuyenMaiView',
    border: false,
    height:600,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.khuyenMai2Store'),
    stripeRows: true,
    title: 'Khách hàng',
    layout:'fit',
    requires:[
        'Ext.ux.Exporter',
//        'Ext.ux.Exporter.Button'
    ],
    config:{
        columns: [
            {
                text: 'Cif', 
                dataIndex: 'CIF',
//                locked   : true,
//                sortable : false,
                flex: 1 
            },
            {
                text: 'Tên ', 
                dataIndex: 'TENKHACHANG',
//                locked   : true,
//                sortable : false,
                flex:1 
            }
        ],
        dockedItems: [
            {
                xtype: 'pagingtoolbar',
                store: 'vcb.store.khuyenMai2Store',   // same store GridPanel is using
                dock: 'bottom',
                width:50,
                displayMsg:'Tổng :',
                emptyMsg:'xccvx',
                beforePageText:'Trang',
                afterPageText:'Của {0}',
                displayInfo: true,
                listeners: {
                    beforechange:function ( me, page, eOpts ){
                        me.store.setProxy({
                            type:'ajax',
                            url: 'timKhachHangKhuyenMaiServlet',
                            extraParams:{
                                cif:App.Session.getCif(),
                                ten:App.Session.getTen()
                            },
                            reader: {
                                    type: 'json',
                                    root: 'data',
                                    totalProperty: 'total'
                            }
                        });
                    },
                    activate:function ( me, eOpts ){
//                        console.log('ádasdasd');
                    },
            }}
        ]
    }
});