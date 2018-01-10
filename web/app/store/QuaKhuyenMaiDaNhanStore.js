Ext.define(('vcb.store.QuaKhuyenMaiDaNhanStore'),{
   extend:'Ext.data.Store',
   fields:['QUAID','TENQUA','SODIEM','NGAYTA','NGAYCAPNHAT','NGUOITAO','NGUOICAPNHAT', 'SOLUONGQUA', 'CIF'],
   storeId:'QuaKhuyenMaiDaNhanStore',
    proxy: {
        type:'ajax',
        url: 'QuaKhuyenMaiDaNhanServlet',
        extraParams:{
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