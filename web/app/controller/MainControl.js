
Ext.define('vcb.controller.MainControl', {
    extend: 'Ext.app.Controller',
    views: [
         'vcb.view.MainView',
         'vcb.view.MenuView',
         'vcb.view.IndexView'
    ],
    refs:[{
       ref:'MainView',
       selector:'#MainView'
    }],
    showLogin:function(){
        this.getMainView().activateViewItem('login',function(){
          var itemview=   Ext.create('vcb.view.ModelView');
          return itemview;
        },this).showModel('LoginView','vcb.view.LoginView');
    },
    showHome:function(){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("ListLinkTraiView",'vcb.view.Support.ListLinkTraiView',"TrangView","vcb.view.TrangView","Chương trình ứng dụng");
       }else{
           Ext.Router.redirect('');
       }
//       if(App.Session.userName!=null){
//            this.getMainView().activateViewItem('Controller',function(){
//              var itemview= Ext.create('vcb.view.IndexView');
//              return itemview;
//            },this).showWhat1('NoiDungView','vcb.view.NoiDungView',"TrangView",'vcb.view.TrangView',"Vietcombank Lạng Sơn");
//       }else{
//           Ext.Router.redirect('');
//       }
    },
    showQLCONGVIEC:function(){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat('NoiDungView','vcb.view.QLCONGVIEC.NoiDungView',"TrangView",'vcb.view.TrangView',"Quản lý công việc");
        }else{
           Ext.Router.redirect('');
        }    
    },
    showQLBH:function(){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("QLBHTraiView","vcb.view.QLBH.QLBHTraiView","TrangView","vcb.view.TrangView","Quản lý bán hàng");
        }else{
           Ext.Router.redirect('');
        }    
    },
    showQLND:function(){
       if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("QLNDView",'vcb.view.QLND.QLNDView',"TrangView",'vcb.view.TrangView',"Người dùng");
       }else{
           Ext.Router.redirect('');
       }
    },
    showQLCD:function(){
       if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("QLCDView",'vcb.view.QLCD.QLNDView',"TrangView",'vcb.view.TrangView',"Chức danh");
       }else{
           Ext.Router.redirect('');
       }
    },
    showPHONGBAN:function(){
       if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("QLPhongBanView",'vcb.view.QLPB.QLPhongBanView',"TrangView","vcb.view.TrangView","Phòng ban");
       }else{
           Ext.Router.redirect('');
       }
    },
    showTRANGTHAI:function(){
       if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("QLTrangThaiView",'vcb.view.QLTRANGTHAI.QLTrangThaiView',"TrangView","vcb.view.TrangView","Trạng thái");
       }else{
           Ext.Router.redirect('');
       }
    },
    showCHUCVU:function(){
       if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("QLChuVuView","vcb.view.QLCHUCVU.QLChucVuView","TrangView","vcb.view.TrangView","Chức Vụ");
       }else{
           Ext.Router.redirect('');
       }
    },
    showQLQUYEN:function(){
       if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("QLQuyenView",'vcb.view.QLQUYEN.QLQuyenView',"TrangView","vcb.view.TrangView","Quản lý Quyền");
       }else{
           Ext.Router.redirect('');
       }
    },
    showListLink:function (){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("ListLinkTraiView",'vcb.view.Support.ListLinkTraiView',"TrangView","vcb.view.TrangView","Chương trình ứng dụng").hayghe();
       }else{
           Ext.Router.redirect('');
       }
    },
    showKYHAN:function (){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("KyHanTraiView",'vcb.view.BaoCao.KyHanTraiView',"TrangView","vcb.view.TrangView","Kỳ hạn");
       }else{
           Ext.Router.redirect('');
       }
    },
    showTAIKHOANTIETKIEM:function (){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("TaiKhoanTietKiem",'vcb.view.BaoCao.TaiKhoanTietKiem',"TrangView","vcb.view.TrangView","Tài Khoản Tiết Kiệm");
       }else{
           Ext.Router.redirect('');
       }
    },
     showTHONGTINTAISANTHECHAP:function (){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("ThongtinTaisanThechap",'vcb.view.BaoCao.ThongtinTaisanThechap',"TrangView","vcb.view.TrangView","Thông tin tài sản thế chấp (sil_co)");
       }else{
           Ext.Router.redirect('');
       }
    },
    showCONGVAN:function (){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("CVanView",'vcb.view.QLCONGVAN.CVanView',"TrangView","vcb.view.TrangView","Công văn");
       }else{
           Ext.Router.redirect('');
       }
    },
    showXACNHANKHACHHANG:function (){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("XacNhanHuyDongTraiView",'vcb.view.BaoCao.XACNHANCHITIEU.XacNhanHuyDongTraiView',"TrangView","vcb.view.TrangView","Xác nhận chỉ tiêu");
       }else{
           Ext.Router.redirect('');
       }
    },
    showCHITIEUHUYDONG:function (){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat1("CHITIEUHUYDONG",'vcb.view.BaoCao.CHITIEUHUYDONG.ChiTieuHuyDongTraiView',"TrangView","vcb.view.TrangView","Chỉ tiêu huy động");
       }else{
           Ext.Router.redirect('');
       }
    },
    showQTC:function (){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("QuyenTruyCapTraiView",'vcb.view.QuyenTruyCap.QuyenTruyCapTraiView',"TrangView","vcb.view.TrangView","Quyền Truy cập");
       }else{
           Ext.Router.redirect('');
       }
    },
    showKHUYENMAI:function (){
        if(App.Session.userName!=null){
            this.getMainView().activateViewItem('Controller',function(){
              var itemview= Ext.create('vcb.view.IndexView');
              return itemview;
            },this).showWhat("KhuyenMaiTraiView",'vcb.view.KHUYENMAI.KhuyenMaiTraiView',"TrangView","vcb.view.TrangView","Khuyến mãi");
       }else{
           Ext.Router.redirect('');
       }
    }
});

