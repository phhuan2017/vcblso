Ext.define(('vcb.store.LichSuCapNhatSellerIdStore'),{
   extend:'Ext.data.Store',
   fields:['TK', 'TKTYPE', 'NT4','PRDTYP','MANV', 'TELLERID', 
       'MAPHONG', 'TEN','SELLERID','DATOPN','TRANGTHAI', 'NGAYTAO',
       'NGAYCAPNHAT','NGUOITAO', 'NGUOICAPNHAT'],
   storeId:'LichSuCapNhatSellerIdStore',
   groupField: 'SELLERID',
    proxy: {
        type:'ajax',
        url: 'lichSuCapNhatSellerIdServlet',
//        extraParams:{
//            ngayBaoCao:App.Session.getNgayBaoCao(),
//            loaiTienGui:App.Session.getLoaiTienGui(),
//            cif:App.Session.getCif(),
//            soTaiKhoan:App.Session.getSoTaiKhoan()
//        },
        reader: {
                type: 'json',
                root: 'data',
                totalProperty: 'total'
        }
    },
    pageSize:30,
//    autoLoad: true,
//    listeners: {
//        load: function(me, records) {
//            console.log('huy động  ');
//            console.log(records);
//        }
//    }
});