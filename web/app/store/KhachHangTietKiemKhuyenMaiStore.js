Ext.define(('vcb.store.KhachHangTietKiemKhuyenMaiStore'),{
   extend:'Ext.data.Store',
   fields:['NGAYTAO','NGAYCAPNHAT','NGUOITAO','NGUOICAPNHAT','CIF','SODIEMTICHLUY','SOTAIKHOAN',
       'LOAITAIKHOANTIETKIEM','KYHAN','SOTIEN'],
   storeId:'KhachHangTietKiemKhuyenMaiStore',
    proxy: {
        type:'ajax',
        url: 'timKhachHangTietKiemKhuyenMaiServlet',
        reader: {
                type: 'json',
                root: 'data',
                totalProperty: 'total'
        }
    },
    pageSize:30,
//    autoLoad: true,
    listeners: {
        load: function(me, records) {
            console.log('huy động  ');
            console.log(records);
        }
    }
});