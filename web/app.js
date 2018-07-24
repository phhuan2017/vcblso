//Ext.namespace('App');
//App.NAME = 'GP';
//App.path = function(name) {
//    return App.NAME + '.' + name;
//};


Ext.application({
    name: 'vcb',
    requires: [
        'vcb.mlx.Container',
        'vcb.plugins.Localize',
        'vcb.Setting',
        'vcb.controller.Function',
//        'Ext.ux.exporter.Exporter'
    ],
    viewport: {
        autoMaximize: true
    },
    controllers:[
        'vcb.controller.MainControl'
    ],
    stores: [
        'vcb.store.LoginStore',
        'vcb.store.TrangThaiStore',
        'vcb.store.NguoiStore',
        'vcb.store.PhongBanStore',
        'vcb.store.ChucVuStore',
        'vcb.store.UserStore',
        'vcb.store.Nguoi_TimKiemStore',
        'vcb.store.QuyenStore',
        'vcb.store.MapQuyenStore',
        'vcb.store.CongViecStore',
        'vcb.store.TrangThaiCongViecStore',
        'vcb.store.MapViecStore',
        'vcb.store.NguoiPhanCongStore',
        'vcb.store.YKienViecStore',
        'vcb.store.PhanQuyenStore',
        'vcb.store.ChuaPhanQuyenStore',
        'vcb.store.LinkStore',
        'vcb.store.NutStore',
        'vcb.store.CongViecNhoStore',
        'vcb.store.HuyDongStore',
        'vcb.store.HuyDongMuonphanStore',
        'vcb.store.ChiTieuHuyDongStore',
        'vcb.store.LichSuCapNhatSellerIdStore',
        'vcb.store.khuyenMaiStore',
        'vcb.store.khuyenMai2Store',
        'vcb.store.khuyenMai3Store',
        'vcb.store.khachHangStore',
        'vcb.store.KyHanStore',
        'vcb.store.QuaKhuyenMaiStore',
        'vcb.store.QuaKhuyenMaiDaNhanStore',
        'vcb.store.KhachHangTietKiemKhuyenMaiStore',
        'vcb.store.khuyenMai_BaoCao_Store',
        'vcb.store.TruocBanHangStore',
        'vcb.store.TrongBanHangStore'
    ],
    
//    
    enableRouter: true,
    routes: {
        '':'MainControl#showLogin',
//        'forgetpass':'MainControl#showForgetpass',
        'home':'MainControl#showHome',
        'QLND':'MainControl#showQLND',
        'PHONGBAN':'MainControl#showPHONGBAN',
        'TRANGTHAI':'MainControl#showTRANGTHAI',
        'CHUCVU':'MainControl#showCHUCVU',
        'QUYEN':'MainControl#showQLQUYEN',
        'ListLink':'MainControl#showListLink',
        'CONGVIEC':'MainControl#showQLCONGVIEC',
        'QLBH':'MainControl#showQLBH',
        'KYHAN':'MainControl#showKYHAN',
        'TAIKHOANTIETKIEM':'MainControl#showTAIKHOANTIETKIEM',
        'THONGTINTAISANTHECHAP':'MainControl#showTHONGTINTAISANTHECHAP',
        'CONGVAN':'MainControl#showCONGVAN',
        'XACNHANKHACHHANG':'MainControl#showXACNHANKHACHHANG',
        'CHITIEUHUYDONG':'MainControl#showCHITIEUHUYDONG',
        'QTC':'MainControl#showQTC',
        'KHUYENMAI':'MainControl#showKHUYENMAI',
        'QLCD':'MainControl#showQLCD',
        'QuanTriBanHang':'MainControl#showQuanTriBanHang',
        'TrongQuanTriBanHang':'MainControl#showTrongQuanTriBanHang'
//        'register':'MainControl#showRegister',
//        'company':'MainControl#showCatalog',
//        'gln':'MainControl#showGLN'
//        
    },
    launch: function() {
        Ext.create('vcb.view.MainView');
    }
});



