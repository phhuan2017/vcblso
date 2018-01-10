Ext.define(('vcb.store.QuyenStore'),{
   extend:'Ext.data.Store',
   fields:['QUYENID', 'TENQUYEN',  'MOTA', 'NGAYTAO','NGAYCAPNHAT', 'USERTAO', 'USERCAPNHAT'],
   storeId:'QuyenStore',
    proxy: {
        type:'ajax',
        url: 'timQuyenServlet',
        extraParams:{
            QUYENID:-1,
            TENQUYEN:'',
            MOTA:''
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
//            console.log('Store quyen  ');
//            console.log(records);
//        }
//    }
});