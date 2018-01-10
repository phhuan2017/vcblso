Ext.define(('vcb.store.NguoiPhanCongStore'),{
   extend:'Ext.data.Store',
   fields:['NGUOIID','HOTEN','NGAYSINH','NGAYTAO','NGAYCAPNHAT','USERTAO','USERCAPNHAT','DIACHI','PHONGBANID','CHUCVU','TRANGTHAIID','CMT'],
   storeId:'NguoiPhanCongStore',
    proxy: {
        type:'ajax',
        url: 'timNguoiPhanCongServlet',
        extraParams:{
            CONGVIECID:-1,
        },
        reader: {
                type: 'json',
                root: 'data',
                totalProperty: 'total'
        }
    },
    pageSize:25,
//    autoLoad: true,
    listeners: {
//        datachanged:function ( me, eOpts ){
//            console.log('kjhasdkjhsajkd');
//        }
//        load: function(me, records) {
//            console.log('Store tim kiem  ');
//            console.log(records);
//        }
    }
});