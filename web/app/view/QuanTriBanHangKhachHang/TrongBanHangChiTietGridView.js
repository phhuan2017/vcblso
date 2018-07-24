Ext.define('vcb.view.QuanTriBanHangKhachHang.TrongBanHangChiTietGridView',{
    extend: 'Ext.grid.Panel',
    itemId: 'TrongBanHangChiTietGridView',
    xtype: 'TrongBanHangChiTietGridView',
    border: false,
    height:400,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.TrongBanHangStore'),
//    requires:[
//        'vcb.view.QuanTriBanHangKhachHang.TruocBanHangChiTietView',
//    ],
    stripeRows: true,
    layout:'fit',
    config:{
        columns: [
//            { 
//                text: 'Thời điểm ',
//                sortable : true, 
//                dataIndex: 'THOIHANHOANTHANH',
////                flex:0.11,
//                renderer : function(val) {
////                    var ngayhomnay=Ext.Date.dateFormat(new Date(), 'd-m-Y');;
////                    var date=Ext.Date.dateFormat(Ext.Date.parse(val, 'd-m-Y'), 'd-m-Y');
////                    if(ngayhomnay>date){
////                        return '<span style="color:red;">' + val + '</span>';                        
//////                        tooltip: 'Thay đổi quá trình làm việc',
////                    }else{
////                        if(ngayhomnay==date){
////                            return '<span style="color:blue;">' + val + '</span>';
////                        }else{
////                            return '<span style="color:green;">' + val + '</span>';
////                        }
////                    }
//                } 
//            },
            { 
                text: 'Tên khách hàng', 
                dataIndex: 'tenThongTin',
//                locked   : true,
                sortable : false,
                flex: 1,
//                tooltip:
            }
//            ,
//            {
//                text: 'Trạng thái thông tin ', 
//                dataIndex: 'trangThaiThongTin',
////                locked   : true,
//                sortable : false,
//                flex: 1,
//                renderer : function(val) {
//                    console.log(val);
//////                    var ngayhomnay=Ext.Date.dateFormat(new Date(), 'd-m-Y');;
//////                    var date=Ext.Date.dateFormat(Ext.Date.parse(val, 'd-m-Y'), 'd-m-Y');
//                    if(val =='đã cũ'){
//                        return '<span style="color:red;">' + val + '</span>';                        
////                        tooltip: 'Thay đổi quá trình làm việc',
//                    }else {
//                        return '<span style="color:green;">' + val + '</span>'; 
//                    }
//////                    {
//////                        if(ngayhomnay==date){
//////                            return '<span style="color:blue;">' + val + '</span>';
//////                        }else{
//////                            return '<span style="color:green;">' + val + '</span>';
//////                        }
//////                    }
//                } 
//            }
        ],
//        plugins: [
//            Ext.create('Ext.grid.plugin.RowEditing', {
//                clicksToEdit: 2,
//                pluginId: 'alo'
//            })
//        ],
//        var store=Ext.getStore('vcb.store.CongViecStore'),
        listeners: {
            select:function ( me, record, index, eOpts ){
//                console.log(record.data);
                Ext.getCmp('CenterView').activateViewItem('TrongBanHangChiTietView',function() {
                    var itemview= Ext.create('vcb.view.QuanTriBanHangKhachHang.TrongBanHangChiTietView');
                    return itemview;
                  }, this).hayghe(record.data);
            }
        }
    },
//    show_grid:function (){
//        var Show_Search = Ext.create('Ext.window.Window', {
////            closable: true,
//            maximizable: true,
//            height: 720,
//            width: 1020,
//            title:'Tổng quan công viêc',
//            modal: true,
//            id: 'Show_Search',
//            layout: 'fit',
//            autoScroll:true,
//            items: [
//                {
//                    xtype:'CongViecChiTietView'
//                }
//            ]
//        });
//        Show_Search.show();
//    }
});