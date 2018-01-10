Ext.define(('vcb.store.NguoiStore'),{
   extend:'Ext.data.Store',
   fields:['NGUOIID','HOTEN','NGAYSINH','NGAYTAO','NGAYCAPNHAT','USERTAO','USERCAPNHAT','DIACHI','PHONGBANID','CHUCVU','TRANGTHAIID','CMT','SELLERID'],
   storeId:'NguoiStore',
    proxy: {
        type:'ajax',
        url: 'timNguoiServlet',
        extraParams:{
            NGUOIID:0,
            HOTEN:'',
            NGAYSINH:'',
            NGAYTAO:'',
            NGAYCAPNHAT:'',
            USERTAO:'',
            USERCAPNHAT:'',
            DIACHI:'',
            PHONGBANID:'',
            CHUCVU:'',
            TRANGTHAIID:''
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
////        datachanged:function ( me, eOpts ){
////            console.log('kjhasdkjhsajkd');
////        }
//        load: function(me, records) {
//            console.log('Store tim kiem  ');
//            console.log(records);
//        }
//    }
});