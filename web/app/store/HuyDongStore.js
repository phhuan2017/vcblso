Ext.define(('vcb.store.HuyDongStore'),{
   extend:'Ext.data.Store',
   fields:['TK', 'TKTYPE', 'NT4','PRDTYP','CFNO','MANV','TELLERID','MAPHONG','TEN','XACBAL','SELLERID','XINRAT','XOTACC','DATOPN'],
   storeId:'HuyDongStore',
   groupField: 'DATOPN',
    proxy: {
        type:'ajax',
        url: 'danhSachHuyDongServlet',
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