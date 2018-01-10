Ext.define(('vcb.store.ChuaPhanQuyenStore'),{
   extend:'Ext.data.Store',
   fields:['QUYENID', 'TENQUYEN',  'MOTA', 'NGAYTAO','NGAYCAPNHAT', 'USERTAO', 'USERCAPNHAT','USERID','PHANQUYENID'],
   storeId:'ChuaPhanQuyenStore',
    proxy: {
        type:'ajax',
        url: 'timChuaPhanQuyenServlet',
        extraParams:{
//            QUYENID:-1,
//            TENQUYEN:'',
//            MOTA:''
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