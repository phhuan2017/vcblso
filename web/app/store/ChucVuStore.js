Ext.define(('vcb.store.ChucVuStore'),{
   extend:'Ext.data.Store',
   fields:['maChucVu','tenChucVu','moTa','nguoiTao','ngayTao','nguoiCapNhat','ngayCapNhat','trangThai'],
   storeId:'ChucVuStore',
    proxy: {
        type:'ajax',
        url: 'timChucVuServlet',
        extraParams:{
            maChucVu:-1,
            tenChucVu:'',
            moTa:'',
            nguoiTao:'',
            ngayTao:'',
            nguoiCapNhat:'',
            ngayCapNhat:'',
            trangThai:''
        },
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        }
    },
    pageSize:25,
    autoLoad: true,
//    listeners: {
//        load: function(me, records) {
////            console.log('Store tim kiem  ');
//            console.log(records);
//        }
//    }
});