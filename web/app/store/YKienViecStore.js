Ext.define(('vcb.store.YKienViecStore'),{
   extend:'Ext.data.Store',
   fields:['CONGVIECID','NGUOIID','NOIDUNG','YKIENID','THOIGIAN','HOTEN'],
   storeId:'YKienViecStore',
    proxy: {
        type:'ajax',
        url: 'timYKienViecServlet',
        extraParams:{
            CONGVIECID:-1,
            NGUOIID:-1
            
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
////            console.log('Store tim kiem  ');
////            console.log(records);
//        }
//    }
});