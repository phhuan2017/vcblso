Ext.define('vcb.view.Support.ListLinkGridView',{
    extend: 'Ext.grid.Panel',
    itemId: 'ListLinkGridView',
    xtype: 'ListLinkGridView',
    border: false,
    minHeight:655,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.LinkStore'),
    stripeRows: true,
    layout:'fit',
    requires:[
        'Ext.ux.Exporter',
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
            },
            
        ],
        dockedItems: [
            {
                xtype: 'pagingtoolbar',
                store: Ext.getStore('vcb.store.LinkStore'),   // same store GridPanel is using
                dock: 'bottom',
                width:50,
                displayMsg:'Tổng :',
                emptyMsg:'',
                beforePageText:'Trang',
                afterPageText:'Của {0}',
                displayInfo: true,
                listeners: {
                    beforechange:function ( me, page, eOpts ){
//                        me.store.setProxy({
//                            type:'ajax',
//                            url: 'ChiTieuHuyDongServlet',
//                            extraParams:{
//                                ngayBaoCao:App.Session.getNgayBaoCao(),
//                                loaiTienGui:App.Session.getLoaiTienGui(),
//                                cif:App.Session.getCif(),
//                                soTaiKhoan:App.Session.getSoTaiKhoan(),
//                                sellerId:App.Session.getSellerId(),
//                                phongBanId:App.Session.getPhongBanId(),
//                                ten:App.Session.getTen()
//                            },
//                            reader: {
//                                    type: 'json',
//                                    root: 'data',
//                                    totalProperty: 'total'
//                            }
//                        });
                    }
                }
            }
        ],
        listeners: {
            select:function ( me, record, index, eOpts ){
                Ext.getCmp('CenterView').activateViewItem('ListLinkChiTietView',function() {
                    var itemview= Ext.create('vcb.view.Support.ListLinkChiTietView');
                    return itemview;
                  }, this).hayghe(record.data);
            }
        }
    }
});