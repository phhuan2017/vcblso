Ext.define(('vcb.store.TruocBanHangStore'),{
    extend:'Ext.data.Store',
    fields:['tenThongTin','trangThaiThongTin'],
    data : [
         {tenThongTin: 'Quý I 2017',    trangThaiThongTin: 'đã cũ'},
         {tenThongTin: 'Quý II 2017', trangThaiThongTin: 'đã cũ'},
         {tenThongTin: 'Quý III 2017', trangThaiThongTin: 'đã cũ'},
         {tenThongTin: 'Quý IV 2017', trangThaiThongTin: 'đã cũ'},
         {tenThongTin: 'Quý I 2018', trangThaiThongTin: 'đã cũ'},
         {tenThongTin: 'Quý II 2018', trangThaiThongTin: 'đã cũ'},
         {tenThongTin: 'Quý III 2018', trangThaiThongTin: 'Mới Nhất'}
     ]
//   fields:['CONGVIECID','CONGVIECTEN','THOIHANHOANTHANH', 'CONGVANLIENQUAN', 'MOTA','NGAYTAO','NGAYCAPNHAT', 'NGUOITAO', 'NGUOICAPNHAT', 'TRANGTHAICONGVIEC', 'TIENDO','TENTRANGTHAI'],
//   storeId:'CongViecStore',
//    proxy: {
//        type:'ajax',
//        url: 'timCongViecServlet',
//        extraParams:{
//            CONGVIECID:-1,
//            CONGVIECTEN:'',
//            NGUOIID:-1,
//            TRANGTHAIMAPVIEC:-1
//        },
//        reader: {
//            type: 'json',
//            root: 'data',
//            totalProperty: 'total'
//        }
//    },
//    pageSize:25
//    autoLoad: true,
//    listeners: {
//        load: function(me, records) {
////            console.log('Store tim kiem  ');
//            console.log(records);
//        }
//    }
});

