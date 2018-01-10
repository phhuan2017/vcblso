Ext.define(('vcb.store.khachHangStore'),{
   extend:'Ext.data.Store',
   fields:['CFNO','TEN','DIACHI','SOCMT','NGAYCAP','SODIENTHOAI'],
   storeId:'khachHangStore',
    proxy: {
        type:'ajax',
        url: 'timKhachHangServlet',
        reader: {
                type: 'json',
                root: 'data',
                totalProperty: 'total'
        }
    },
    pageSize:30
//    autoLoad: true,
//    listeners: {
//        load: function(me, records) {
//            console.log('huy động  ');
//            console.log(records);
//        }
//    }
});