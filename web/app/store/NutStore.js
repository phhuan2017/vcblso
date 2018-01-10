Ext.define(('vcb.store.NutStore'),{
   extend:'Ext.data.Store',
   fields:['NUTID','NUTNAME','NUT_MOTA'],
   storeId:'NutStore',
    proxy: {
        type:'ajax',
        url: 'timNutServlet',
        extraParams:{
            QUYENID:0
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
//            console.log('Store nut ');
//            console.log(records);
//        }
//    }
});