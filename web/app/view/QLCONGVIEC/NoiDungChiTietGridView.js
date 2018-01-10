Ext.define('vcb.view.QLCONGVIEC.NoiDungChiTietGridView',{
    extend: 'Ext.grid.Panel',
    itemId: 'NoiDungChiTietGridView',
    xtype: 'NoiDungChiTietGridView',
    border: false,
    height:400,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.CongViecStore'),
    requires:[
        'vcb.view.QLCONGVIEC.CongViecChiTietView',
    ],
    stripeRows: true,
    layout:'fit',
    config:{
        columns: [
            { 
                text: 'Ngày đến hạn',
                sortable : true, 
                dataIndex: 'THOIHANHOANTHANH',
//                flex:0.11,
                renderer : function(val) {
                    var ngayhomnay=Ext.Date.dateFormat(new Date(), 'd-m-Y');;
                    var date=Ext.Date.dateFormat(Ext.Date.parse(val, 'd-m-Y'), 'd-m-Y');
                    if(ngayhomnay>date){
                        return '<span style="color:red;">' + val + '</span>';                        
//                        tooltip: 'Thay đổi quá trình làm việc',
                    }else{
                        if(ngayhomnay==date){
                            return '<span style="color:blue;">' + val + '</span>';
                        }else{
                            return '<span style="color:green;">' + val + '</span>';
                        }
                    }
                } 
            },
            { 
                text: 'Tên Công việc', 
                dataIndex: 'CONGVIECTEN',
//                locked   : true,
                sortable : false,
                flex: 1,
//                tooltip:
            },
            {
                text: 'Trạng thái CV', 
                dataIndex: 'TENTRANGTHAI',
//                locked   : true,
                sortable : false,
                flex: 1 
            }
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
                Ext.getCmp('CenterView').activateViewItem('NoiDungChiTietView',function() {
                    var itemview= Ext.create('vcb.view.QLCONGVIEC.NoiDungChiTietView');
                    return itemview;
                  }, this).hayghe(record.data);
            }
        }
    },
    show_grid:function (){
        var Show_Search = Ext.create('Ext.window.Window', {
//            closable: true,
            maximizable: true,
            height: 720,
            width: 1020,
            title:'Tổng quan công viêc',
            modal: true,
            id: 'Show_Search',
            layout: 'fit',
            autoScroll:true,
            items: [
                {
                    xtype:'CongViecChiTietView'
                }
            ]
        });
        Show_Search.show();
    }
});