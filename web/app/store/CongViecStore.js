Ext.define(('vcb.store.CongViecStore'),{
   extend:'Ext.data.Store',
   fields:['CONGVIECID','CONGVIECTEN','THOIHANHOANTHANH', 'CONGVANLIENQUAN', 'MOTA','NGAYTAO','NGAYCAPNHAT', 'NGUOITAO', 'NGUOICAPNHAT', 'TRANGTHAICONGVIEC', 'TIENDO','TENTRANGTHAI'],
   storeId:'CongViecStore',
    proxy: {
        type:'ajax',
        url: 'timCongViecServlet',
        extraParams:{
            CONGVIECID:-1,
            CONGVIECTEN:'',
            NGUOIID:-1,
            TRANGTHAIMAPVIEC:-1
        },
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        }
    },
    pageSize:25
//    autoLoad: true,
//    listeners: {
//        load: function(me, records) {
////            console.log('Store tim kiem  ');
//            console.log(records);
//        }
//    }
});

