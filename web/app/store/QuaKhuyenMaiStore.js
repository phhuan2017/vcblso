Ext.define(('vcb.store.QuaKhuyenMaiStore'),{
   extend:'Ext.data.Store',
   fields:['QUAID','TENQUA','SODIEM'],
   storeId:'QuaKhuyenMaiStore',
    proxy: {
        type:'ajax',
        url: 'QuaKhuyenMaiServlet',
        extraParams:{
//            soDiem:''
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
//            console.log('Store quà ');
//            console.log(records);
//        }
//    }
});