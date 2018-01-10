Ext.define('vcb.view.QLBH.DanhSachViecNhoCBNVView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachViecNhoCBNVView',
    xtype: 'DanhSachViecNhoCBNVView',
    title: '',
    margin:'5 5 5 5',
    name:'DanhSachViecNhoCBNVView',
//    height:150,
    border: false,
    autoScroll:true,
    store: Ext.getStore('vcb.store.CongViecNhoStore'),
//    store: Ext.getStore('vcb.store.NutStore'),
    config:{
        columns: [
            { text: 'STT',  dataIndex: 'STT',flex: 1,itemId:'STT',name:'STT' },
            { text: 'Tên Việc nhỏ', dataIndex: 'VIECNHO_TEN', flex: 1,itemId:'tenViecNho1',name:'tenViecNho1' },
            { text: 'Thời hạn hoàn thành', dataIndex: 'VIECNHO_THOIHANHOANTHANH', flex: 1,itemId:'thoiHanHoanThanhViecNho1',name:'thoiHanHoanThanhViecNho1' },
            { text: 'Yêu cầu công việc', dataIndex: 'VIECNHO_MOTA', flex: 1,itemId:'moTaViecNho1',name:'moTaViecNho1' },
            { text: 'Ngày Tạo', dataIndex: 'VIECNHO_NGAYTAO', flex: 1,itemId:'ngayTaoViecNho1',name:'ngayTaoViecNho1' },
            { text: 'Ngày Cập nhật', dataIndex: 'VIECNHO_NGAYCAPNHAT', flex: 1,itemId:'ngayCapNhatViecNho1',name:'ngayCapNhatViecNho1' },
            { text: 'Người Tạo', dataIndex: 'VIECNHO_NGUOITAO', flex: 1,itemId:'nguoiTaoViecNho1',name:'nguoiTaoViecNho1' },
            { text: 'Người Cập nhật', dataIndex: 'VIECNHO_NGUOICAPNHAT', flex: 1,itemId:'nguoiCapNhatViecNho1',name:'nguoiCapNhatViecNho1' },
            { text: 'Trạng thái', dataIndex: 'VIECNHO_TRANGTHAICONGVIEC', flex: 1,itemId:'tenTrangThai1',name:'tenTrangThai1' },
            { text: 'Tiến độ', dataIndex: 'VIECNHO_TIENDO', flex: 1,itemId:'tienDoViecNho1',name:'tienDoViecNho1' },
            { text: 'Báo cáo', dataIndex: 'VIECNHO_GHICHU', flex: 1,itemId:'baoCaoViecNho1',name:'baoCaoViecNho1' }
        ]
    }
});