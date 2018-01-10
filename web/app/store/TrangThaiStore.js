Ext.define(('vcb.store.TrangThaiStore'),{
   extend:'Ext.data.Store',
   fields:['TRANGTHAIID','MOTA','NGAYTAO','NGAYCAPNHAT','USERTAO','USERCAPNHAT'],
   storeId:'TrangThaiStore',
    proxy: {
        type:'ajax',
        url: 'timTrangThaiServlet',
        extraParams:{
            TRANGTHAIID :-1,
            MOTA: '',
            NGAYTAO:'',
            NGAYCAPNHAT:'',
            USERTAO:'',
            USERCAPNHAT:''
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