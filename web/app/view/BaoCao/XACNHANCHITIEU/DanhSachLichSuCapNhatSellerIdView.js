Ext.define('vcb.view.BaoCao.XACNHANCHITIEU.DanhSachLichSuCapNhatSellerIdView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachLichSuCapNhatSellerIdView',
    xtype: 'DanhSachLichSuCapNhatSellerIdView',
    border: false,
    height:750,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.LichSuCapNhatSellerIdStore'),
    stripeRows: true,
//    title: 'Lịch sử cập nhật SellerId',
    layout:'fit',
    requires:[
        'Ext.ux.Exporter',
//        'Ext.ux.Exporter.Button'
    ],
    config:{
        columns: [
            { 
                text: 'Ngày CN đầu', 
                dataIndex: 'NGAYTAO',
//                locked   : true,
//                sortable : false,
                flex: 1
//                tooltip:
            },
            {
                text: 'Người CN đầu', 
//                xtype:'numbercolumn',
                dataIndex: 'NGUOITAO',
//                locked   : true,
//                sortable : false,
                flex: 1,
                renderer : function(val) {
                    var store = Ext.getStore('vcb.store.NguoiStore')
                    for(var i=0;i<store.data.length;i++){
                        if(store.data.items[i].data.NGUOIID == val){
                            return store.data.items[i].data.HOTEN
                        }
                    }
//                    console.log(store.data.length)
//                    console.log(val);
                } 
            },
            { 
                text: 'Ngày CN cuối', 
                dataIndex: 'NGAYCAPNHAT',
//                locked   : true,
//                sortable : false,
                flex: 1,
                
//                tooltip:
            },
            
            {
                text: 'Người CN Cuối', 
//                xtype:'numbercolumn',
                dataIndex: 'NGUOICAPNHAT',
//                locked   : true,
//                sortable : false,
                flex: 1 ,
                renderer : function(val) {
                    var store = Ext.getStore('vcb.store.NguoiStore')
                    for(var i=0;i<store.data.length;i++){
                        if(store.data.items[i].data.NGUOIID == val){
                            return store.data.items[i].data.HOTEN
                        }
                    }
//                    console.log(store.data.length)
//                    console.log(val);
                } 
            },
            {
                text: 'Tên ', 
                dataIndex: 'TEN',
//                locked   : true,
//                sortable : false,
                flex:2.5 
            },
            {
                text: 'SellerId ', 
                dataIndex: 'SELLERID',
//                locked   : true,
//                sortable : false,
                flex:2,
                renderer : function(val) {
                    var store = Ext.getStore('vcb.store.NguoiStore')
                    for(var i=0;i<store.data.length;i++){
                        if(store.data.items[i].data.SELLERID == val){
                            return '<span style="color:green;">' + val +"_"+ store.data.items[i].data.HOTEN + '</span>'
                        }
                    }
//                    console.log(store.data.length)
//                    console.log(val);
                } 
                
            },
            { 
                text: 'Số tài khoản', 
                dataIndex: 'TK',
//                locked   : true,
//                sortable : false,
                flex: 1.5
//                tooltip:
            },
//            {
//                text: 'Cif', 
//                dataIndex: 'TK',
////                locked   : true,
////                sortable : false,
//                flex: 2 
//            },
            { 
                text: 'Loại TK', 
                dataIndex: 'TKTYPE',
//                locked   : true,
//                sortable : false,
                flex: 0.5
//                tooltip:
            },
            {
                text: 'Loại tiền', 
                dataIndex: 'NT4',
//                locked   : true,
//                sortable : false,
                flex: 0.5
            }
            
        ],
        features: [{ftype:'grouping'}],
        dockedItems: [
            {
                xtype: 'pagingtoolbar',
                store: 'vcb.store.LichSuCapNhatSellerIdStore',   // same store GridPanel is using
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
                            url: 'lichSuCapNhatSellerIdServlet',
                            extraParams:{
                                tuNgayLichSu:App.Session.getTuNgayLichSu(),
                                denNgayLichSu:App.Session.getDenNgayLichSu(),
                                cifLichSu:App.Session.setCifLichSu(),
                                soTaiKhoanLichSu:App.Session.getSoTaiKhoanLichSu(),
                                tenLichSu:App.Session.getTenLichSu(),
                                sellerId:App.Session.getSellerId()
                            },
                            reader: {
                                    type: 'json',
                                    root: 'data',
                                    totalProperty: 'total'
                            }
                        });
                    },
                    activate:function ( me, eOpts ){
                    },
////                    change:function ( me, pageData, eOpts ){
////                        console.log(me.up('#DanhSachHuyDongView'));
////                        console.log(App.Session.getNgayBaoCao());
////                        console.log(pageData);
////                    }
//                } 
//                query:[
//                    
//                ]
            }}]
    }
});