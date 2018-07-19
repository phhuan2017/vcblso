Ext.define(('vcb.store.LinkStore'),{
   extend:'Ext.data.Store',
   fields:['LINKID', 'TEN', 'URL','GHICHU','NGAYTAO','NGAYCAPNHAT','NGUOITAO','NGUOICAPNHAT','LOAICHUONGTRINH'],
   storeId:'LinkStore',
    proxy: {
        type:'ajax',
        url: 'timLinkServlet',
        extraParams:{
            tenChuongTrinh:''
        },
        reader: {
                type: 'json',
                root: 'data',
                totalProperty: 'total'
        }
    },
    pageSize:25,
    autoLoad: true
//    listeners: {
//        load: function(me, records) {
//            console.log('Store tim kiem  ');
//            console.log(records);
//        }
//    }
});