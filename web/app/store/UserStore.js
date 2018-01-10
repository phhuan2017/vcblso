Ext.define(('vcb.store.UserStore'),{
   extend:'Ext.data.Store',
   fields:['USERID','user_name','pass_word','NGAYTAO','NGAYCAPNHAT','USERTAO','USERCAPNHAT','NGUOIID','TRANGTHAIID','MOTA_TRANGTHAI'],
   storeId:'TrangThaiStore',
    proxy: {
        type:'ajax',
        url: 'timUserServlet',
        extraParams:{
            USERID :-1,
            User_name: '',
            Pass_word:'',
            NGAYTAO:'',
            NGAYCAPNHAT:'',
            USERTAO:'',
            USERCAPNHAT:'',
            NGUOIID:'',
            TRANGTHAIID:''
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
////            console.log('Store tim kiem  ');
//            console.log(records);
//        }
//    }
});