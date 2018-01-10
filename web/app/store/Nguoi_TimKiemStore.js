Ext.define(('vcb.store.Nguoi_TimKiemStore'),{//tim kiem user
   extend:'Ext.data.Store',
   fields:['NGUOIID','HOTEN','NGAYSINH','DIACHI','PHONGBANID','CHUCVU','TRANGTHAIID','CMT','USERID','user_name','pass_word'],
//    private String Pass_word;
   storeId:'Nguoi_TimKiemStore',
    proxy: {
        type:'ajax',
        url: 'Nguoi_TimKiemServlet',
        extraParams:{
            NGUOIID:0,
            HOTEN:'',
            NGAYSINH:'',
            DIACHI:'',
            PHONGBANID:'',
            CHUCVU:'',
            TRANGTHAIID:'',
            USERID:0,
            user_name:'',
            pass_word:''
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