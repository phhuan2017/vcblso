Ext.define(('vcb.store.PhongBanStore'),{
   extend:'Ext.data.Store',
   fields:['PHONGBANID', 'TENPHONG', 'MOTA', 'NGAYTAO', 'NGAYCAPNHAT', 'USERTAO', 'USERCAPNHAT', 'TRANGTHAIID'],
   storeId:'PhongBanStore',
    proxy: {
        type:'ajax',
        url: 'timPhongBanServlet',
        extraParams:{
            PHONGBANID:-1, 
            TENPHONG:'', 
            MOTA:'', 
            NGAYTAO:'', 
            NGAYCAPNHAT:'', 
            USERTAO:'', 
            USERCAPNHAT:'', 
            TRANGTHAIID:''
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
////            console.log('Store tim kiem  ');
//            console.log(records);
//        }
//    }
});