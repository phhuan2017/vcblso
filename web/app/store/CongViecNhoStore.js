Ext.define(('vcb.store.CongViecNhoStore'),{
   extend:'Ext.data.Store',
   fields:['STT','CONGVIECID','VIECNHO_TEN', 'VIECNHO_THOIHANHOANTHANH', 'VIECNHO_MOTA','VIECNHO_NGAYTAO','VIECNHO_NGAYCAPNHAT', 'VIECNHO_NGUOITAO',
       'VIECNHO_NGUOICAPNHAT', 'VIECNHO_TRANGTHAICONGVIEC', 'VIECNHO_TIENDO','VIECNHO_GHICHU'],
   storeId:'CongViecNhoStore',
    proxy: {
        type:'ajax',
        url: 'timCongViecNhoServlet',
        extraParams:{
            CONGVIECID:-1,
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

