Ext.define('vcb.view.KHUYENMAI.DanhSachQuaKhuyenMaiDaNhanView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachQuaKhuyenMaiDaNhanView',
    xtype: 'DanhSachQuaKhuyenMaiDaNhanView',
    border: false,
    height:180,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.QuaKhuyenMaiDaNhanStore'),
    stripeRows: true,
    title: 'Danh Sách Quà Tặng đã nhận',
    layout:'fit',
    requires:[
        'Ext.ux.Exporter',
//        'Ext.ux.Exporter.Button'
    ],
    config:{
        columns: [
            {
                xtype:'actioncolumn',
                flex: 0.2 ,
//                width:50,
                items: [
                    {
                        icon: './resources/img/tru.png',  // Use a URL in the icon config
                        tooltip: 'Giảm',
                        handler: function(grid, rowIndex, colIndex) {
                            //Giảm số lượng Quà
                            //tìm kiếm xem quà cho người này đã tồn tại chưa
                             var record=this.up('DanhSachQuaKhuyenMaiDaNhanView').store.data.items[rowIndex].data;
//                             console.log(record);
                             var QuaKhuyenMaiDaNhanStore=Ext.getStore('vcb.store.QuaKhuyenMaiDaNhanStore');
                             for(var i=0;i<QuaKhuyenMaiDaNhanStore.data.length;i++){
                                 var QUAID=QuaKhuyenMaiDaNhanStore.data.items[i].data.QUAID
                                 var cif=QuaKhuyenMaiDaNhanStore.data.items[i].data.CIF
                                if(QUAID == record.QUAID && cif == record.CIF){
                                    QuaKhuyenMaiDaNhanStore.removeAt(i)
                                    var duLieuQuaKhuyenMaiDaChon={QUAID:record.QUAID,TENQUA: record.TENQUA,SODIEM:record.SODIEM,NGAYTAO:'',NGAYCAPNHAT:'',NGUOITAO:'',NGUOICAPNHAT:'',SOLUONGQUA:record.SOLUONGQUA - 1, CIF:cif} 
                                }
                            }
//                          // lấy tổng số điểm 
                            var tongDiemDaDung=0;
                            for(var i=0;i<QuaKhuyenMaiDaNhanStore.data.length;i++){
                                tongDiemDaDung=tongDiemDaDung + (QuaKhuyenMaiDaNhanStore.data.items[i].data.SOLUONGQUA * QuaKhuyenMaiDaNhanStore.data.items[i].data.SODIEM)
                            }
                            // gán số điểm đã dùng 
                             this.up('DanhSachQuaKhuyenMaiDaNhanView').up('#KhuyenMaiChiTietView').down('#diemDaDung').setValue(tongDiemDaDung);
//                            console.log(tongDiemDaDung);
                        }
                    }
                ]
            },
            {
                text: 'Tên quà', 
                dataIndex: 'TENQUA',
//                locked   : true,
//                sortable : false,
                flex: 1 
            },
            {
                text: 'Số lượng quà', 
                dataIndex: 'SOLUONGQUA',
//                locked   : true,
//                sortable : false,
                flex:1 
            },
             {
                text: 'Số Diểm', 
                dataIndex: 'SODIEM',
//                locked   : true,
//                sortable : false,
                flex:1 
            }
        ]
//        dockedItems: [
//            {
//                xtype: 'pagingtoolbar',
//                store: 'vcb.store.khuyenMaiStore',   // same store GridPanel is using
//                dock: 'bottom',
//                width:50,
//                displayMsg:'Tổng :',
//                emptyMsg:'chưa có DL',
//                beforePageText:'Trang',
//                afterPageText:'Của {0}',
//                displayInfo: true,
//                listeners: {
//                    beforechange:function ( me, page, eOpts ){
//                        me.store.setProxy({
//                            type:'ajax',
//                            url: 'danhSachHuyDongServlet',
//                            extraParams:{
////                                ngayBaoCao:App.Session.getNgayBaoCao(),
////                                loaiTienGui:App.Session.getLoaiTienGui(),
////                                cif:App.Session.getCif(),
////                                soTaiKhoan:App.Session.getSoTaiKhoan(),
////                                ten:App.Session.getTen()
//                            },
//                            reader: {
//                                    type: 'json',
//                                    root: 'data',
//                                    totalProperty: 'total'
//                            }
//                        });
//                    },
//                    activate:function ( me, eOpts ){
////                        console.log('ádasdasd');
//                    },
//            }}
//        ]
    }
});