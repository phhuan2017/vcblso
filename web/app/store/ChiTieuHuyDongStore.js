Ext.define(('vcb.store.ChiTieuHuyDongStore'),{
   extend:'Ext.data.Store',
   fields:['TK', 'TKTYPE', 'NT4','PRDTYP','CFNO','MANV','TELLERID','MAPHONG','TEN','XACBAL','SELLERID','XINRAT','XOTACC','DATOPN'],
   storeId:'ChiTieuHuyDongStore',
   groupField: 'SELLERID',
    proxy: {
        type:'ajax',
        url: 'ChiTieuHuyDongServlet',
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
    pageSize:25,
//    autoLoad: true,
//    listeners: {
//        load: function(me, records) {
//            console.log(records);
//        }
//    }
});