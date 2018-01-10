Ext.define(('vcb.store.HuyDongMuonphanStore'),{
   extend:'Ext.data.Store',
   fields:['TK', 'TKTYPE', 'NT4','PRDTYP','CFNO','MANV','TELLERID','MAPHONG','TEN','XACBAL','SELLERID'],
   storeId:'HuyDongMuonphanStore',
//    proxy: {
//        type:'ajax',
////        url: 'danhSachHuyDongServlet',
//        extraParams:{
////            ngayBaoCao:'',
////            loaiTienGui:0,
////            cif:'',
////            soTaiKhoan:''
//        },
//        reader: {
//                type: 'json',
//                root: 'data',
//                totalProperty: 'total'
//        }
//    },
//    pageSize:25,
//    autoLoad: true,
//    listeners: {
//        load: function(me, records) {
//            console.log('Store tim kiem  ');
//            console.log(records);
//        }
//    }
});