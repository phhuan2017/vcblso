Ext.define(('vcb.store.MapViecStore'),{
   extend:'Ext.data.Store',
   fields:['CONGVIECID','NGUOIID','YKIEN','CHECK'],
   storeId:'MapViecStore',
    proxy: {
        type:'ajax',
        url: 'timMapViecServlet',
        extraParams:{
            CONGVIECID:-1,
            
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