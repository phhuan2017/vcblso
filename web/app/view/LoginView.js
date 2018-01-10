Ext.define(('vcb.view.LoginView'), {
    extend: 'Ext.form.Panel',
    border:false,
    itemId:'LoginView',
    ui:'draggable',
    config:{
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items:[
        {
            border: false,
            xtype: 'container',
            flex: 1,
            frame: false
        }, 
        {
            border:false,
            layout: {
                border:false,
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'panel',
                    flex: 1,
                    frame: false,
                    border:false
                }, 
                {
                    width: 400,
                    height: 150,
                    frame: true,
                    layout:'anchor',
                    itemId:'1',
                    fieldDefaults: {
                        border: false
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            itemId:'username',
                            name:'username',
                            fieldLabel: 'Tên đăng nhập',
                            value:'admin',
                            margin:'25 6 0 35',
                            anchor:'90%',
                            listeners:{
                                specialkey: function(fiel, e){  
                                    if(e.getKey()==e.ENTER){ 
                                        var form=this.up('form');
                                        var myUserName=form.getValues().username;
                                        var myPassword =Ext.util.MD5(form.getValues().password);
                                        form.login(myUserName,myPassword);
                                    }  
                                }  
                            }
                        },
                        {
                            xtype: 'textfield',
                            name:'password',
                            itemId:'password',
                            fieldLabel: 'Mật khẩu',
                            value:'huan131089',
                            inputType: 'password',
                            margin:'15 6 0 35',
                            anchor:'90%',
                            listeners:{
                                specialkey: function(fiel, e){  
                                    if(e.getKey()==e.ENTER){ 
                                        var form=this.up('form');
                                        var myUserName=form.getValues().username;
                                        var myPassword =Ext.util.MD5(form.getValues().password);
                                        form.login(myUserName,myPassword);
                                    }  
                                }  
                            }
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'middle'
                            },
                            
                            border: false,
                            frame: true,
                            items:[
                                {
                                     flex:1,
                                     border: false
                                },
                                {
                                    xtype: 'button',
                                    text: 'Đăng nhập',
                                    itemId: 'login',
                                    id:'login',
                                    cls:'search',
                                    margin:'30 8 0 0',
                                    name: 'login',
                                    handler:function() {
                                        var form=this.up('form');
                                        var myUserName=form.getValues().username;
                                        App.Session.setUserName(form.getValues().username);
                                        var myPassword =Ext.util.MD5(form.getValues().password);
                                        form.login(myUserName,myPassword);
//                                        console.log('a');
                                    }
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'forgetpass',
                                    margin:'30 40 0 0',
                                    text: '<h6 class="lb_bt_Login_resgister">Quên mật khẩu?</h6>',
                                    baseCls: 'bt_forgetpass',
                                    handler:function (){
                                        Ext.Msg.alert("Thông báo","Vui lòng liên hệ với tin học chi nhánh để reset.");
                                        //Ext.Router.redirect('forgetpass');
                                    }
                                }
                            ]
                        }
//                        {   
//                            xtype:'container',
//                            
////                            html:"  Bạn chưa đăng ký tài khoản đăng ký dưới đây ",
////                            align:'certer',
////                            margin:'5 0 0 70'
//                        },
//                        {
//                            xtype: 'button',
//                            itemId: 'register',
//                            margin:'15 0 0 0',
//                            text: '<h6 class="lb_bt_Login_resgister">Đăng ký tại đây</h6>',
//                            baseCls: 'bt_forgetpass',
//                            handler:function (){
////                                Ext.Router.redirect('resgister');
//                                Ext.Msg.alert("Rất tiếc","Chưa kịp phát triển");
//                            }
//                         }
                    ]
                }, 
                {
                    xtype: 'container',
                    flex: 1     
                }
            ]
        }, 
        {
            xtype:'container',
            flex: 1
        }   
    ]},
    login:function (userName,passWord){
        if(userName==""){//kiem tra xem da dien vao 2 truong ussername va password
            Ext.Msg.alert("Thông báo","Bạn chưa nhập tên đăng nhập");
        }
        else {
            Core.UserLoginServlet(userName,passWord,function(options,success,response){
//                console.log(response);
                if (success) {//kiem tra ket noi thanh cong khong 
                    response = Ext.decode(response.responseText);
//                    console.log(response.data[0]);
                    if(response.data.length==0){// kiểm tra user tồn tại hay chưa 
                        Ext.Msg.alert("Thông báo","User chưa tồn tại, vui lòng xem lại");
                    }else{
                        if(response.data[0].user_name==userName && response.data[0].pass_word == passWord){//kiem tra xem username va password co dung khong 
                            if(response.data[0].TRANGTHAIID==2){
                                App.Session.setUserID(response.data[0].USERID);//gán giá trị cho biến Username trong session
                                App.Session.setNguoiID(response.data[0].NGUOIID);
                                App.Session.setPhongBanId(response.data[0].PHONGBANID);
//                                console.log(response.data[0]);
                                // Kiểm tra xem có việc nào quá hạn không. nếu quá hạn thì đổi trạng thái thành quá hạn.
                                var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
                                    storeCongViec.load({//tìm tên người cập nhật
                                       params:{
                                           CONGVIECID:-1,
                                           NGUOIID:-1,
                                           TRANGTHAIMAPVIEC:-1,
                                           CONGVIECTEN:''
                                       },
                                       callback: function(records, operation, success) {
                                           var ngayhomnay=Ext.Date.dateFormat(new Date(), 'd-m-Y');
                                           var ngayDenHan=null;
                                           for(var i=0;i<records.length;i++){
                                               ngayDenHan=Ext.Date.dateFormat(Ext.Date.parse(records[i].data.THOIHANHOANTHANH, 'd-m-Y'), 'd-m-Y');
                                               var a=Ext.Date.parse(records[i].data.THOIHANHOANTHANH, 'd-m-Y');
                                               if(records[i].data.TRANGTHAICONGVIEC < 5){// kiểm tra nhưng việc có trạng thái không phải hoàn thành và kết thúc
                                                   //kiểm tra xem ngày đến hạn đã
                                                    var congViecId=records[i].data.CONGVIECID;
                                                    var tenCV=records[i].data.CONGVIECTEN;
                                                    var thoiHan=records[i].data.THOIHANHOANTHANH;
                                                    var cVLienQuan=records[i].data.CONGVANLIENQUAN;
                                                    var User=records[i].data.NGUOICAPNHAT;
                                                    var yeuCauCongViec=records[i].data.MOTA;
                                                   if(ngayDenHan == ngayhomnay){//nếu ngày đến hạn trùng với ngày hiện tại thì ta cập nhật trạng thái cho công việc đố là đến hạn 
//                                                        console.log('hayghe    sdsad');
                                                        Core.CapNhatCongViecServlet(congViecId,tenCV,thoiHan,cVLienQuan,yeuCauCongViec,User,3,function(options,success,response){
                                                            if (success) {//kiem tra ket noi thanh cong khong 
                                                                response = Ext.decode(response.responseText);
                                                                if(response.ResponseCode == 0){
                                                                }else{
                                                                    Ext.Msg.alert("Thông báo",response.ResponseName);
                                                                }
                                                            }
                                                            else {//ket noi khong thanh cong 
                                                                Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                            }
                                                        });
                                                   }else{
                                                       if(ngayDenHan > ngayhomnay){// tức là việc quá hạn thì ta sẽ cập nhật trạng thái cho công việc đó là đã quá hạn
                                                           Core.CapNhatCongViecServlet(congViecId,tenCV,thoiHan,cVLienQuan,yeuCauCongViec,User,4,function(options,success,response){
                                                                if (success) {//kiem tra ket noi thanh cong khong 
                                                                    response = Ext.decode(response.responseText);
                                                                    if(response.ResponseCode == 0){
                                                                    }else{
                                                                        Ext.Msg.alert("Thông báo",response.ResponseName);
                                                                    }
                                                                }
                                                                else {//ket noi khong thanh cong 
                                                                    Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                }
                                                            });
                                                       }
                                                   }
                                               }
                                           }
                                           var storeCongViec=Ext.getStore('vcb.store.CongViecStore');// load lại các công việc
                                            storeCongViec.load({//tìm tên người cập nhật
                                               params:{
                                                   TRANGTHAIMAPVIEC:-2
                                               }
                                           })
                                       }
                                   }),
//                                var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
//                                storePhanQuyen.load({
//                                    params:{
//                                        USERID:response.data[0].USERID
//                                    },
//                                    callback: function(records, operation, success) {
//                                        console.log(records)
//                                    }
//                                })
//                                        var quyenId=-1;
//                                        var tamp=0;
//                                        if(records.length>0){
//                                            //kiểm tra quyền 
//                                            for(var i=0;i<records.length;i++){
//                                                quyenId=records[i].data.QUYENID
//                                                if(quyenId==4){
//                                                    tamp=1;
//                                                }
//                                            }
//                                            if(tamp==1){// được xem tất cả nội dung
//                                                var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
//                                                storeCongViec.load({//tìm tên người cập nhật
//                                                   params:{
//                                                       CONGVIECID:-1,
//                                                       NGUOIID:-1,
//                                                       TRANGTHAIMAPVIEC:-1,
//                                                       CONGVIECTEN:''
//                                                   },
//                                                   callback: function(records, operation, success) {
//                                                        //Kiểm tra xem có việc nào sắp đến hạn
//                                                        var ngayhomnay=Ext.Date.dateFormat(new Date(), 'd-m-Y');
//                 //                                       var date=Ext.Date.dateFormat(Ext.Date.parse(val, 'd-m-Y'), 'd-m-Y');
//                                                        var ngayDenHan=null;
//                                                        var mang=[];
//                                                        for(var i=0;i<records.length;i++){
//                                                            ngayDenHan=Ext.Date.dateFormat(Ext.Date.parse(records[i].data.THOIHANHOANTHANH, 'd-m-Y'), 'd-m-Y');
//                                                            if(ngayhomnay<ngayDenHan ){
//                                                                if(parseInt(records[i].data.TRANGTHAICONGVIEC)==1){
//                                                                    mang.push(records[i]);
//                                                                }else{
//                                                                    if(parseInt(records[i].data.TRANGTHAICONGVIEC)==2){
//                                                                        mang.push(records[i]);
//                                                                    }else{
//                                                                        if(parseInt(records[i].data.TRANGTHAICONGVIEC)==3){
//                                                                            mang.push(records[i]);
//                                                                        }else{
//                                                                            if(parseInt(records[i].data.TRANGTHAICONGVIEC)==4){
//                                                                                mang.push(records[i]);
//                                                                            }
//                                                                        }
//                                                                    }
//                                                                }
////                                                                
//                                                            }else{
//                                                                if(ngayhomnay>ngayDenHan &&  parseInt(records[i].data.TRANGTHAICONGVIEC)<4){// tức là công việc đã quá hạn S
//                                                                    mang.push(records[i]);
//                                                                    var congViecId=records[i].data.CONGVIECID;
//                                                                    var tenCV=records[i].data.CONGVIECTEN;
//                                                                    var thoiHan=records[i].data.THOIHANHOANTHANH;
//                                                                    var cVLienQuan=records[i].data.CONGVANLIENQUAN;
//                                                                    var User=records[i].data.NGUOICAPNHAT;
////                                                                    console.log(tenCV);
////                                                                    var trangThaiCongViec=records[i].data.TRANGTHAICONGVIEC;
//                                                                    var yeuCauCongViec=records[i].data.MOTA;
//                                                                    Core.CapNhatCongViecServlet(congViecId,tenCV,thoiHan,cVLienQuan,yeuCauCongViec,User,4,function(options,success,response){
//                                                                        if (success) {//kiem tra ket noi thanh cong khong 
//                                                                            response = Ext.decode(response.responseText);
//                        //                                                    conssole.log('response.ResponseCode');
////                                                                            conssole.log(response.ResponseCode);
//                                                                            if(response.ResponseCode == 0){// kiểm tra user tồn tại hay chưa 
//                                                                            }else{
//                                                                                Ext.Msg.alert("Thông báo",response.ResponseName);
//                                                                            }
//                                                                        }
//                                                                        else {//ket noi khong thanh cong 
//                                                                            Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
//                                                                        }
//                                                                    });
//                                                                }else{
//                                                                   if(ngayhomnay==ngayDenHan &&  parseInt(records[i].data.TRANGTHAICONGVIEC)<3){
//                                                                       mang.push(records[i]);
//                                                                       var congViecId=records[i].data.CONGVIECID;
//                                                                        var tenCV=records[i].data.CONGVIECTEN;
//                                                                        var thoiHan=records[i].data.THOIHANHOANTHANH;
//                                                                        var cVLienQuan=records[i].data.CONGVANLIENQUAN;
//                                                                        var User=records[i].data.NGUOICAPNHAT;
//                                                                        var yeuCauCongViec=records[i].data.MOTA;
//                                                                        Core.CapNhatCongViecServlet(congViecId,tenCV,thoiHan,cVLienQuan,yeuCauCongViec,User,3,function(options,success,response){
//                                                                            if (success) {//kiem tra ket noi thanh cong khong 
//                                                                                response = Ext.decode(response.responseText);
//                            //                                                    conssole.log('response.ResponseCode');
////                                                                                conssole.log(response.ResponseCode);
//                                                                                if(response.ResponseCode == 0){// kiểm tra user tồn tại hay chưa 
//                                                                                }else{
//                                                                                    Ext.Msg.alert("Thông báo",response.ResponseName);
//                                                                                }
//                                                                            }
//                                                                            else {//ket noi khong thanh cong 
//                                                                                Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại11111111!")
//                                                                            }
//                                                                        });
//                                                                   }else{
//                                                                    if(parseInt(records[i].data.TRANGTHAICONGVIEC)==1){
//                                                                        mang.push(records[i]);
//                                                                        }else{
//                                                                            if(parseInt(records[i].data.TRANGTHAICONGVIEC)==2){
//                                                                                mang.push(records[i]);
//                                                                            }else{
//                                                                                if(parseInt(records[i].data.TRANGTHAICONGVIEC)==3){
//                                                                                    mang.push(records[i]);
//                                                                                }else{
//                                                                                    if(parseInt(records[i].data.TRANGTHAICONGVIEC)==4){
//                                                                                        mang.push(records[i]);
//                                                                                    }
//                                                                                }
//                                                                            }
//                                                                        }
//                                                                    }
//                                                                }
//                                                            }
//                                                        }
////                                                         Ext.Msg.alert("Thông báo","Hiện tại có "+ mang.length+ " việc chưa hoàn thành");
////                                                        console.log(mang);
//                                                         var a = new Audio('./resources/img/baodong.mp4'); 
////                                                                 a.play();
//                                                         Ext.Msg.show({
//                                                             title:'Thông báo',
//                                                             msg: "Hiện tại có "+'<span style="color:red;">' + mang.length + '</span>' + " việc chưa hoàn thành",
//                                                             buttons: Ext.Msg.YESNOCANCEL,
//                                                             fn: function (btn){
//                                                                 a.pause();
//                                                             }
//                                                         });
//                                                    }
//                                                });
//                                            }else{
//                                                 var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
//                                                storeCongViec.load({//tìm tên người cập nhật
//                                                   params:{
//                                                       CONGVIECID:-1,
//                                                       NGUOIID:App.Session.getNguoiID(),
//                                                       TRANGTHAIMAPVIEC:1,
//                                                       CONGVIECTEN:''
//                                                   },
//                                                   callback: function(records, operation, success) {
//                                                        //Kiểm tra xem có việc nào sắp đến hạn
//                                                        var ngayhomnay=Ext.Date.dateFormat(new Date(), 'd-m-Y');
//                 //                                       var date=Ext.Date.dateFormat(Ext.Date.parse(val, 'd-m-Y'), 'd-m-Y');
//                                                        var ngayDenHan=null;
//                                                        var mang=[];
//                                                        for(var i=0;i<records.length;i++){
//                                                            ngayDenHan=Ext.Date.dateFormat(Ext.Date.parse(records[i].data.THOIHANHOANTHANH, 'd-m-Y'), 'd-m-Y');
//                                                            if(ngayhomnay>ngayDenHan){
//                                                                mang.push(records[i]);
//                                                            }
//                                                        }
//                 //                                        Ext.Msg.alert("Thông báo","Hiện tại có "+ mang.length+ " việc chưa hoàn thành");
////                                                         var a = new Audio('./resources/img/baodong.mp4'); 
////                                                                 a.play();
//                                                         Ext.Msg.show({
//                                                             title:'Thông báo',
//                                                             msg: "Hiện tại có "+'<span style="color:red;">' + mang.length + '</span>' + " việc chưa hoàn thành",
//                                                             buttons: Ext.Msg.YESNOCANCEL,
//                                                             fn: function (btn){
////                                                                 a.pause();
//                                                             }
//                                                         });
//                                                    }
//                                                });
//                                            }
//                                            
//                                        }else{
//                                             var storeCongViec=Ext.getStore('vcb.store.CongViecStore');
//                                            storeCongViec.load({//tìm tên người cập nhật
//                                               params:{
//                                                   CONGVIECID:-2,
//                                                   NGUOIID:App.Session.getNguoiID(),
//                                                   TRANGTHAIMAPVIEC:2,
//                                                   CONGVIECTEN:''
//                                               }
//                                            });
//                                        }
//                                    }
//                                });
                                Ext.Router.redirect('home');
                            }else{
                                Ext.Msg.alert("Thông báo","User bạn đang bị khóa vui lòng liên hệ với Quản trị để xử lý");
                            }
                        }
                        else {
                            Ext.Msg.alert("Thông báo","Bạn nhập sai tên đăng nhập hoặc password");
                        }
                    }
                }
                else {//ket noi khong thanh cong 
                    Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại111111!")
                }
            });
        }
    }
});