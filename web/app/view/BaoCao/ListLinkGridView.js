Ext.define('vcb.view.Support.ListLinkGridView',{
    extend: 'Ext.grid.Panel',
    itemId: 'ListLinkGridView',
    xtype: 'ListLinkGridView',
    border: false,
    height:400,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.LinkStore'),
    stripeRows: true,
    layout:'fit',
    requires:[
        'Ext.ux.Exporter',
//        'Ext.ux.Exporter.Button'
    ],
    config:{
        columns: [
            { 
                text: 'Tên CT', 
                dataIndex: 'TEN',
//                locked   : true,
                sortable : false,
                flex: 3
//                tooltip:
            },
//            {
//                text: 'Dường Dẫn', 
//                dataIndex: 'URL',
////                locked   : true,
//                sortable : false,
//                flex: 5 
//            },
            {
                xtype:'actioncolumn',
                width:50,
                items: [{
                    icon: './resources/img/VCB.png',  // Use a URL in the icon config
                    tooltip: 'Truy cập',
                    handler: function(grid, rowIndex, colIndex) {
                        var data=grid.store.data.items[rowIndex].data
                        var tam=data.URL.slice(0, 4);
                        if(tam=='http'){// đường dẫn http
                            window.open(data.URL);
                        }else{// là application
                            var invocationUrl = 'runAppServlet';
                            var form = document.createElement("form");			
                            form.method = "POST";
                            form.action = invocationUrl;
                            // biến truyền vào 
                            var tenChuongTrinh = document.createElement('input');				
                            tenChuongTrinh.name = 'tenChuongTrinh';
                            tenChuongTrinh.value = data.URL;
                            form.appendChild(tenChuongTrinh);
                            //=======================================
                            document.body.appendChild(form);
                            form.submit();
                            document.body.removeChild(form);
                        }
//                        
                    }
                }]
            }
        ],
        listeners: {
            select:function ( me, record, index, eOpts ){
//                console.log(record.data);
                Ext.getCmp('CenterView').activateViewItem('ListLinkChiTietView',function() {
                    var itemview= Ext.create('vcb.view.Support.ListLinkChiTietView');
                    return itemview;
                  }, this).hayghe(record.data);
            }
        }
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
    }
});