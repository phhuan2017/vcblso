Ext.define('vcb.view.BaoCao.XACNHANCHITIEU.DanhSachHuyDongView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachHuyDongView',
    xtype: 'DanhSachHuyDongView',
    border: false,
    height:500,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.HuyDongStore'),
    stripeRows: true,
    title: 'Danh sách các khách hàng chưa gán sellerId',
    layout:'fit',
    requires:[
        'Ext.ux.Exporter',
//        'Ext.ux.Exporter.Button'
    ],
    config:{
        columns: [
            { xtype : 'checkcolumn',itemId:'chon',text: 'Chọn',  dataIndex: 'CHECK',flex: 0.5,
                listeners: {
                    checkchange:function (me, rowIndex, checked, eOpts ){
                        var record=me.up('DanhSachHuyDongView').store.data.items[rowIndex].data;
                        var store2=Ext.getStore('vcb.store.HuyDongStore');
                            store2.removeAt(rowIndex)
                        var store=Ext.getStore('vcb.store.HuyDongMuonphanStore');
                            store.insert(0,record);    
                    }
                } 
            },
            { 
                text: 'Số tài khoản', 
                dataIndex: 'TK',
//                locked   : true,
//                sortable : false,
                flex: 2
//                tooltip:
            },
            {
                text: 'Cif', 
                dataIndex: 'CFNO',
//                locked   : true,
//                sortable : false,
                flex: 2 
            },
            {
                text: 'Tên ', 
                dataIndex: 'TEN',
//                locked   : true,
//                sortable : false,
                flex:4 
            },
            { 
                text: 'Ngày mở TK', 
                dataIndex: 'DATOPN',
//                locked   : true,
//                sortable : false,
                flex: 1.5
//                tooltip:
            },
            { 
                text: 'Loại TK', 
                dataIndex: 'TKTYPE',
//                locked   : true,
//                sortable : false,
                flex: 1
//                tooltip:
            },
            {
                text: 'Loại tiền', 
                dataIndex: 'NT4',
//                locked   : true,
//                sortable : false,
                flex: 1
            },
            {
                text: 'Số tiền ', 
                xtype:'numbercolumn',
                dataIndex: 'XACBAL',
//                locked   : true,
//                sortable : false,
                flex: 2 
            }
        ],
        features: [{ftype:'grouping',groupByText :'Ngày mở tài khoản'}],
        dockedItems: [
            {
                xtype: 'pagingtoolbar',
                store: 'vcb.store.HuyDongStore',   // same store GridPanel is using
                dock: 'bottom',
                width:50,
                displayMsg:'Tổng :',
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
                            url: 'danhSachHuyDongServlet',
                            extraParams:{
                                ngayBaoCao:App.Session.getNgayBaoCao(),
                                loaiTienGui:App.Session.getLoaiTienGui(),
                                cif:App.Session.getCif(),
                                soTaiKhoan:App.Session.getSoTaiKhoan(),
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
//            {
//                dock: 'bottom',
//                height: 30,
//                border: false,
//                bodyStyle: 'background-color: transparent',
//                items: [{
//                        xtype: 'button',
//                        text: 'Thêm theo lô',
//                        margin: 5,
//                        name:'addproduct',
//                        itemId:'addproducts',
//                        cls: 'search_all',
//                        action:'addproduct',
//                        handler:function (){
//                            this.up('form').addParcel();
//                        }
//                    },
//                    {
//                        xtype: 'button',
//                        text: 'Thêm mới',
//                        margin: 5,
//                        name:'addproduct',
//                        itemId:'addproduct',
//                        id:'addproduct',
//                        cls: 'search_all',
//                        action:'addproduct',
//                        handler:function(){
//                            this.up('form').Add_New();
////                            Ext.getCmp('addproduct').disable();
//                            
//                        }
//                    },
//                    {
//                        xtype: 'button',
//                        text: 'Tìm kiếm',
//                        margin: 5,
//                        name:'searchproduct',
//                        itemId:'searchproduct',
//                        id:'searchproduct',
//                        cls: 'search_all',
//                        action:'searchproduct',
//                        handler:function(){
//                            this.up('form').showSearchForm();
//                        }
//                    }
//                ]
//            },
            
        ]
    }
});