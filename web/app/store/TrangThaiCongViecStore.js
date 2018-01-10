Ext.define(('vcb.store.TrangThaiCongViecStore'),{
   extend:'Ext.data.Store',
   fields:['TRANGTHAICONGVIECID','TEN'],
   storeId:'TrangThaiCongViecStore',
    proxy: {
        type:'ajax',
        url: 'timTrangThaiCongViecServlet',
        extraParams:{
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
//            console.log('Store tim kiem  ');
//            console.log(records);
//        }
//    }
});