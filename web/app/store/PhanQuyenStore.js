Ext.define(('vcb.store.PhanQuyenStore'),{
   extend:'Ext.data.Store',
   fields:['QUYENID', 'TENQUYEN',  'MOTA', 'NGAYTAO','NGAYCAPNHAT', 'USERTAO', 'USERCAPNHAT','USERID','PHANQUYENID'],
   storeId:'PhanQuyenStore',
    proxy: {
        type:'ajax',
        url: 'timPhanQuyenServlet',
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
//            console.log(records);
//            App.Session.setRecords(records)
//            console.log(App.Session.getRecords());
//        }
//    }
});