Ext.define('vcb.view.KHUYENMAI.DanhSachQua_BaoCao_View',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachQua_BaoCao_View',
    xtype: 'DanhSachQua_BaoCao_View',
    border: false,
    height:50,
//    collapsed:true,
    autoScroll:true,
    store: Ext.data.StoreManager.lookup('vcb.store.khuyenMai_BaoCao_Store'),
//    store: Ext.getStore('vcb.store.khuyenMai_BaoCao_Store'),
    stripeRows: true,
    title: 'Thống kê quà tặng',
    layout:'fit',
    requires:[
        'Ext.ux.Exporter'
//        'Ext.ux.Exporter.Button'
    ],
//    'TEN','PHONGBANID','QUAID','TENQUA','NGAYTAO',
//       'NGAYCAPNHAT','NGUOITAO','NGUOICAPNHAT','SOLUONGQUA','CIF','TENKHACHANG'
    config:{
        columns: [
            {
                text: 'CIF - Tên Khách hàng', 
                dataIndex: 'CIF',
//                locked   : true,
//                sortable : false,
                flex: 2,
                renderer : function(val) {
                    var store = Ext.getStore('vcb.store.khuyenMai3Store');
                    var tenKhachHang='';
                    for(var i=0;i<store.data.length;i++){
                        if(store.data.items[i].data.CIF == val){
                            tenKhachHang=store.data.items[i].data.TENKHACHANG ;
                            
                        }
                    }
                    return '<span style="color:blue;">' + val +"-"+ tenKhachHang + '</span>';
                } 
            },
            {
                text: 'Điểm tích lũy', 
                dataIndex: 'SODIEMTICHLUY',
//                locked   : true,
//                sortable : false,
                flex:1 
            },
            {
                text: 'Điểm đã dùng', 
                dataIndex: 'SODIEMDADUNG',
//                locked   : true,
//                sortable : false,
                flex:1 
            },
//            {
//                text: 'Điểm còn lại', 
////                dataIndex: 'SODIEMDADUNG',
////                locked   : true,
////                sortable : false,
//                flex:1 ,
//                renderer : function(val) {
//                    console.log(this);
////                    var store = Ext.getStore('vcb.store.khuyenMai3Store');
////                    var tenKhachHang='';
////                    for(var i=0;i<store.data.length;i++){
////                        if(store.data.items[i].data.CIF == val){
////                            tenKhachHang=store.data.items[i].data.TENKHACHANG ;
////                        }
////                    }
//                    return '<span style="color:blue;">' + val + '</span>';
//                } 
//            },
            {
                text: 'Tên Quà', 
                dataIndex: 'TENQUA',
//                locked   : true,
//                sortable : false,
                flex:1 
            },
            {
                text: 'Số lượng', 
                dataIndex: 'SOLUONGQUA',
//                locked   : true,
//                sortable : false,
                flex:1 
            },
            {
                text: 'ngày cập nhật', 
                dataIndex: 'NGAYCAPNHAT',
//                locked   : true,
//                sortable : false,
                flex:1 
            },
            {
                text: 'Người cập nhật', 
                dataIndex: 'NGUOICAPNHAT',
//                locked   : true,
//                sortable : false,
                flex:2 ,
                renderer : function(val) {
                    var store = Ext.getStore('vcb.store.NguoiStore');
                    var tenCanBo='';
                    for(var i=0;i<store.data.length;i++){
                        if(store.data.items[i].data.NGUOIID == val){
                            tenCanBo=store.data.items[i].data.PHONGBANID + "-" + store.data.items[i].data.HOTEN + '-'+val;

                        }
                    }
                    return '<span style="color:blue;">' + tenCanBo + '</span>';
                } 
            },
            
        ],
        
        features: [{ftype:'grouping'}],
        dockedItems: [
            {
                xtype: 'pagingtoolbar',
                store: 'vcb.store.khuyenMai_BaoCao_Store',   // same store GridPanel is using
                dock: 'bottom',
                width:50,
                displayMsg:'',
                emptyMsg:'xccvx',
                beforePageText:'Trang',
                afterPageText:'Của {0}',
                displayInfo: true,
                
//                loader:[
//                    {
//                        loader: {
//                            url: 'content.html',
//                            autoLoad: false
//                        },
//                        renderTo: Ext.getBody()
//                    }
//                ]
                listeners: {
                    beforechange:function ( me, page, eOpts ){
                        me.store.setProxy({
                            type:'ajax',
                            url: 'KhuyenMai_BaoCao_Qua_Servlet',
                            extraParams:{
                                tuNgay: App.Session.getTuNgayLichSu(),
                                denNgay: App.Session.getDenNgayLichSu()
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
                    }
////                    change:function ( me, pageData, eOpts ){
////                        console.log(me.up('#DanhSachHuyDongView'));
////                        console.log(App.Session.getNgayBaoCao());
////                        console.log(pageData);
////                    }
//                } 
//                query:[
//                    
//                ]
            }}
    ]
    }
});