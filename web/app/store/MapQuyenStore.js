Ext.define(('vcb.store.MapQuyenStore'),{
   extend:'Ext.data.Store',
   fields:['MAPQUYENID','QUYENID','NUTID','TRANGTHAIID','NGAYTAO','NGAYCAPNHAT', 'NGUOITAO','NGUOICAPNHAT','NUTNAME','TENQUYEN','MOTAQUYEN'],
   storeId:'MapQuyenStore',
    proxy: {
        type:'ajax',
        url: 'timMapQuyenServlet',
        extraParams:{
            QUYENID:-1,
            NUTID:-1,
            THEM:0,
        },
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
//            console.log('Store tim kiem  ');
//            console.log(records);
//        }
//    }
});