Ext.define(('vcb.store.KyHanStore'),{
   extend:'Ext.data.Store',
   storeId:'KyHanStore',
   fields: ['loaiId', 'tenLoai','heSo'],
   data : [
        {"loaiId":1, "tenLoai":"1 Tháng","heSo":0.5},
        {"loaiId":2, "tenLoai":"2 Tháng","heSo":1},
        {"loaiId":3, "tenLoai":"3 Tháng","heSo":2},
        {"loaiId":6, "tenLoai":"6 Tháng","heSo":2},
        {"loaiId":9, "tenLoai":"9 Tháng","heSo":2.5},
        {"loaiId":12, "tenLoai":"12 Tháng","heSo":2.5},
        {"loaiId":13, "tenLoai":"Trên 12 Tháng","heSo":2.5}
   ]
});