Ext.define('vcb.Core', {
    alternateClassName: 'Core',
    singleton: true,
    ResponseCode: {
          OK: 0
    },
     AjaxRequest: function(url ,params, callback, scope) { //using for insert,update,
        Ext.Ajax.request({
            url: url,
            params: params,
            timeout: 40000,
            callback : callback,//options,success,response 
            scope: scope
        });
     }, 
     AjaxRequestPost:function (url ,params, callback, scope){
        Ext.Ajax.request({
            url:url,
            params:params,
            actionMethods: {
                create: 'POST',
                read: 'POST',
                update: 'POST',
                destroy: 'POST'
            },
            timeout:40000,
            callback:callback,
            scope:scope
        });
     },
     loadJsonStore:function( url, params,model, callback, scope) {//using for view
        Ext.create('Ext.data.Store', {
             model: model,
             proxy: {
                 type: 'ajax',
                 url: url,//App.Setting.getHostUrl() + '/' + url,
                 extraParams: params,
                 reader: {
                     type: 'json',
                     root: 'data'
                 }
             }
         }).load({ callback: callback, scope: scope});
     },
     UserLoginServlet:function(UserName,Password, callback, scope){
//         console.log(UserName);
         this.AjaxRequest('VCBLoginServlet',{UserName:UserName , Password:Password },callback, scope);
     },
     ThemTrangThai:function(tenTrangThai,user,maTrangThai, callback, scope){
//         console.log(tenTrangThai,user, maTrangThai);
         this.AjaxRequestPost('themTrangThaiServlet',{tenTrangThai:tenTrangThai,user:user,maTrangThai:maTrangThai},callback, scope);
     },
     themChucVuServlet:function(maChucVu,tenChucVu,chucNangNhiemVu,User,trangThai, callback, scope){
//         console.log(tenChucVu + moTaChucVu + nguoiTao);
         this.AjaxRequestPost('themChucVuServlet',{maChucVu:maChucVu ,tenChucVu:tenChucVu,chucNangNhiemVu:chucNangNhiemVu,User:User,trangThai:trangThai},callback, scope);
     },
//     themCongViecServlet:function(tenCV,thoiHan,cVLienQuan,yeuCauCongViec,userID, callback, scope){
////         console.log(tenCV + thoiHan + cVLienQuan + yeuCauCongViec);
//         this.AjaxRequestPost('themCongViecServlet',{tenCV:tenCV ,thoiHan:thoiHan,cVLienQuan:cVLienQuan,yeuCauCongViec:yeuCauCongViec,userID:userID},callback, scope);
//     },
     themPhongBanServlet:function(maPhong,tenPhong,chucNangNhiemVu,User,trangThai, callback, scope){
//         console.log(maPhong + tenPhong);
         this.AjaxRequestPost('themPhongBanServlet',{maPhong:maPhong ,tenPhong:tenPhong,chucNangNhiemVu:chucNangNhiemVu,User:User,trangThai:trangThai },callback, scope);
     },
     themNguoiDungServlet:function(User,hoTenND,ngaySinh,CMT,chucVu,phongBan,moTa,sellerId, callback, scope){
//         console.log("Ngay sinh: " + ngaySinh);
         this.AjaxRequestPost('themNguoiDungServlet',{User:User,hoTenND:hoTenND,ngaySinh:ngaySinh,CMT:CMT,chucVu:chucVu,phongBan:phongBan,moTa:moTa,sellerId:sellerId},callback, scope);
     },
     capNhatNguoiDungServlet:function(User,hoTenND,ngaySinh,CMT,chucVu,phongBan,moTa,nguoiId,sellerId, callback, scope){
//         console.log(User + CMT);
         this.AjaxRequestPost('capNhatNguoiDungServlet',{User:User,hoTenND:hoTenND,ngaySinh:ngaySinh,CMT:CMT,chucVu:chucVu,phongBan:phongBan,moTa:moTa,nguoiId:nguoiId,sellerId:sellerId},callback, scope);
     },
     themUserServlet:function(tenTruyCap,myPassword,trangThai,nguoiId,User,userId, callback, scope){
//         console.log(User + CMT);
         this.AjaxRequestPost('themUserServlet',{tenTruyCap:tenTruyCap,myPassword:myPassword,trangThai:trangThai,nguoiId:nguoiId,User:User,userId:userId},callback, scope);
     },
     themQuyenServlet:function(User,quyenId,tenQuyen,moTa, callback, scope){
//         console.log(moTa);
         this.AjaxRequestPost('themQuyenServlet',{User:User,quyenId:quyenId,tenQuyen:tenQuyen,moTa:moTa},callback, scope);
     },
     themCongViecServlet:function(tenCV,thoiHan,cVLienQuan,yeuCauCongViec,User,trangThaiCongViec, callback, scope){
//         console.log(thoiHan);
         this.AjaxRequestPost('themCongViecServlet',{tenCV:tenCV,thoiHan:thoiHan,cVLienQuan:cVLienQuan,yeuCauCongViec:yeuCauCongViec,User:User,trangThaiCongViec:trangThaiCongViec},callback, scope);
     },
     themMAPViecServlet:function(congViecId,nguoiId, callback, scope){
//         console.log(congViecId);
//         console.log(nguoiId);
         this.AjaxRequestPost('themMAPViecServlet',{congViecId:congViecId,nguoiId:nguoiId},callback, scope);
     },
     CapNhatCongViecServlet:function(congViecId,tenCV,thoiHan,cVLienQuan,yeuCauCongViec,User,trangThaiCongViec, callback, scope){
         
         this.AjaxRequestPost('CapNhatCongViecServlet',{congViecId:congViecId,tenCV:tenCV,thoiHan:thoiHan,cVLienQuan:cVLienQuan,yeuCauCongViec:yeuCauCongViec,User:User,trangThaiCongViec:trangThaiCongViec},callback, scope);
     },
     capNhatMAPViecServlet:function(congViecId,nguoiId,trangThai, callback, scope){
//         console.log(trangThai);
         this.AjaxRequestPost('capNhatMAPViecServlet',{congViecId:congViecId,nguoiId:nguoiId,trangThai:trangThai},callback, scope);
     },
     themYKienServlet:function (congViecId,nguoiId,noiDung, callback, scope){
//         console.log(congViecId);
         this.AjaxRequestPost('themYKienServlet',{congViecId:congViecId,nguoiId:nguoiId,noiDung:noiDung},callback, scope);
     },
     capNhatYKienServlet:function (noiDung,yKienId, callback, scope){
//         console.log(yKienId);
         this.AjaxRequestPost('capNhatYKienServlet',{noiDung:noiDung,yKienId:yKienId},callback, scope);
     },
     themChuaPhanQuyenServlet:function (userId,quyenId,userPhanQuyenId,trangThaiId, callback, scope){
         this.AjaxRequestPost('themChuaPhanQuyenServlet',{userId:userId,quyenId:quyenId,userPhanQuyenId:userPhanQuyenId,trangThaiId:trangThaiId},callback, scope);
     },
     themPhanQuyenServlet:function (userId,quyenId,userPhanQuyenId, callback, scope){
         this.AjaxRequestPost('themPhanQuyenServlet',{userId:userId,quyenId:quyenId,userPhanQuyenId:userPhanQuyenId},callback, scope);
     },
     themChuongTrinh:  function (maChuongTrinh,tenChuongTrinh,URL,ghiChu,nguoiID,loaiChuongTrinh, callback, scope){
         console.log(loaiChuongTrinh);
         this.AjaxRequestPost('themChuongTrinhServlet',{maChuongTrinh:maChuongTrinh,tenChuongTrinh:tenChuongTrinh,URL:URL,ghiChu:ghiChu,nguoiID:nguoiID,loaiChuongTrinh:loaiChuongTrinh},callback, scope);
     },
     capNhatMapQuyen:  function (QUYENID,TRANGTHAIID, callback, scope){
         this.AjaxRequestPost('capNhatMapQuyenServlet',{QUYENID:QUYENID,TRANGTHAIID:TRANGTHAIID},callback, scope);
     },
     themMapQuyen:  function (QUYENID,NUTID,TRANGTHAIID, callback, scope){
         this.AjaxRequestPost('themMapQuyenServlet',{QUYENID:QUYENID,NUTID:NUTID,TRANGTHAIID:TRANGTHAIID},callback, scope);
     },
     luuViecNhoServlet: function (nguoiId,congViecId,maViecNho,tenViecNho,trangThaiCongViec,tienDo,thoiHanHoanThanh,yeuCauCongViec,baoCao, callback, scope){
//         console.log(congViecId);
         this.AjaxRequestPost('luuViecNhoServlet',{nguoiId:nguoiId,congViecId:congViecId,maViecNho:maViecNho,tenViecNho:tenViecNho,trangThaiCongViec:trangThaiCongViec,
             tienDo:tienDo,thoiHanHoanThanh:thoiHanHoanThanh,yeuCauCongViec:yeuCauCongViec,baoCao:baoCao},callback, scope);
     },    
//     baoCaoKyHanServlet:function(ngayTaoKyHan,callback, scope){
//       baoCaoKyHanServlet  this.AjaxRequestPost('baoCaoKyHanServlet',{ngayTaoKyHan:ngayTaoKyHan},callback, scope);
//     },
     themMoiMapSellerIdServlet:function(sellerId,maPhong,trangThai,nguoiId,tk,callback, scope){
         this.AjaxRequestPost('themMoiMapSellerIdServlet',{sellerId:sellerId,maPhong:maPhong,trangThai:trangThai,nguoiId:nguoiId,tk:tk},callback, scope);
     },
     thayDoiPassServlet:function(UserId,matKhauCu,matKhauMoi,callback, scope){
         this.AjaxRequestPost('thayDoiPassServlet',{userId:UserId,matKhauCu:matKhauCu,matKhauMoi:matKhauMoi},callback, scope);;
     },
     themMoiKhachHangKhuyenMaiServlet:function(cif,tenKhachHang,soDienThoai,cmt,ngayCap,noiCap,
     diaChi,diemTichLuy,diemDaDung,nguoi,callback, scope){
         this.AjaxRequestPost('themMoiKhachHangKhuyenMaiServlet',{cif:cif,tenKhachHang:tenKhachHang,soDienThoai:soDienThoai,cmt:cmt,ngayCap:ngayCap,noiCap:noiCap,
             diaChi:diaChi,diemTichLuy:diemTichLuy,diemDaDung:diemDaDung,nguoi:nguoi},callback, scope);;
     },
     themMoiThongTinTietKiemKhuyenMaiServlet:function(cif,soTaiKhoan,soTienTietKiem,loaiTietKiem,kyHan,soDiemTichLuy,nguoi,callback, scope){
         this.AjaxRequestPost('themMoiThongTinTietKiemKhuyenMaiServlet',{cif:cif,soTaiKhoan:soTaiKhoan,soTienTietKiem:soTienTietKiem,loaiTietKiem:loaiTietKiem,kyHan:kyHan,soDiemTichLuy:soDiemTichLuy,nguoi:nguoi},callback, scope);;
     },
     themQuaKhuyenMaiDaNhanServlet:function(cif,quaId,soLuongQua,nguoi,callback, scope){
         this.AjaxRequestPost('themQuaKhuyenMaiDaNhanServlet',{cif:cif,quaId:quaId,soLuongQua:soLuongQua,nguoi:nguoi},callback, scope);;
     },
     TestPDFServlet: function(abc,callback, scope){
         this.AjaxRequestPost('TestPDFServlet',{abc:abc},callback, scope);;
     }
//     ActionInsertSIM:function(agentId,data,callback, scope){
//         this.AjaxRequest('ActionInsertSIM',{agentId:agentId,data:Ext.JSON.encode(data) },callback, scope);
//     },
//     CommissionInsertServlet:function(AgentLevel,FromDate,ToDate,Serial,Tel,Commission,callback, scope){
//         this.loadJsonStore('CommissionInsertServlet',{Serial:Serial,Tel:Tel,FromDate:FromDate,ToDate:ToDate,Commission:Commission,AgentLevel:AgentLevel},App.fullClassNameOf('model.Return'),callback, scope);
//     },
//     SimGetSubcriberDetail:function(Serial,callback, scope){
//         this.AjaxRequest('SimGetSubcriberDetail',{Serial:Serial},callback, scope);
//     },
//     ActionRegisterSIM:function(agent,data, name,datebirth,city,idnumber,dateissue,frontscan,backscan, rformscan, callback, scope){
//         this.AjaxRequest('ActionRegisterSIM',{Agent:agent,data:Ext.JSON.encode(data), Name:name, Datebirth:datebirth ,City:city, Idnumber:idnumber, Dateissue:dateissue,Fscan:frontscan,Bscan:backscan, Rscan:rformscan},callback, scope);
//     },
//     ActionSellSIM:function(AgentOwner,agentReceiver,commission,data, callback, scope){
//         this.AjaxRequest('ActionSellSIM',{agentreceiver:agentReceiver, agentid:AgentOwner,commission:commission,data:Ext.JSON.encode(data) },callback, scope);
//     },
//     ActionApproveSIM:function(agent,serial,tel,Status, callback, scope){
//         this.AjaxRequest('ActionApproveSIM',{Agent:agent,Serial:serial ,TelNo:tel,Status:Status},callback, scope);
//     },
//     ActionRegisterSIMFromExcel:function(agentId,data,callback, scope){
//          this.AjaxRequest('ActionRegisterSIMFromExcel',{agentId:agentId,data:Ext.JSON.encode(data)},callback, scope);
//     },
//     ActionSetCommis:function(AgentOwner,commission,data, callback, scope){
//         this.AjaxRequest('ActionSetCommis',{ agentid:AgentOwner,commission:commission,data:Ext.JSON.encode(data) },callback, scope);
//     },
//     ActionUpdateSIM:function(agent,serialNo,telNo,name,dateissue,datebirth,city,idnumber,frontscan,backscan,rformscan, callback, scope){
//         this.AjaxRequest('ActionUpdateSIM',{Agent:agent,Serial:serialNo,TelNo:telNo, Name:name, Datebirth:datebirth ,City:city, Idnumber:idnumber, Dateissue:dateissue,Fscan:frontscan,Bscan:backscan, Rscan:rformscan},callback, scope);
//     },
//     ActionAgentUpdate:function(AgentId,AgentName,address,taxCode, website,biz_ContactPerson,biz_Tel
//                   ,biz_Fax,biz_Email,tech_ContactPerson,tech_Tel,tech_Fax,tech_Mail,status,callback, scope){
//        this.AjaxRequest('AgentUpdate',
//                        {  agentId:AgentId,
//                           name:AgentName,
//                           address:address,
//                           taxCode:taxCode,
//                           website:website,
//                           biz_ContactPerson:biz_ContactPerson,
//                           biz_Tel:biz_Tel,
//                           biz_Fax:biz_Fax,
//                           biz_Email:biz_Email,
//                           tech_ContactPerson:tech_ContactPerson,
//                           tech_Tel:tech_Tel,
//                           tech_Fax:tech_Fax,
//                           tech_Mail:tech_Mail,
//                           status:status
//                       }
//                         ,callback, scope);
//     },
//    ActionAgentAddNew:function(AgentId,AgentName,address,taxCode, website,biz_ContactPerson,biz_Tel
//                   ,biz_Fax,biz_Email,tech_ContactPerson,tech_Tel,tech_Fax,tech_Mail,status,callback, scope){
//        this.AjaxRequest('AgentAddNew',
//                        {  agentId:AgentId,
//                           name:AgentName,
//                           address:address,
//                           taxCode:taxCode,
//                           website:website,
//                           biz_ContactPerson:biz_ContactPerson,
//                           biz_Tel:biz_Tel,
//                           biz_Fax:biz_Fax,
//                           biz_Email:biz_Email,
//                           tech_ContactPerson:tech_ContactPerson,
//                           tech_Tel:tech_Tel,
//                           tech_Fax:tech_Fax,
//                           tech_Mail:tech_Mail,
//                           status:status,
//                           parentAgentID:logUserRight.agentID
//                       }
//                         ,callback, scope);
//     },
//     UserUpdate:function(userId,fullname,add,IDNumber,telephone,email,gender,isActivated,callback, scope){
//          this.AjaxRequest('UserUpdate',{userId:userId,fullname:fullname,add:add,IDNumber:IDNumber,telephone:telephone,email:email,gender:gender,isActivated:isActivated},callback, scope)
//     },
//     UserInsert:function(partnerId,Username,password,fullname,add,IDNumber,telephone,email,gender,isActivated,callback, scope){
//          this.AjaxRequest('UserInsert',{partnerId:partnerId,Username:Username,password:password,fullname:fullname,add:add,IDNumber:IDNumber,telephone:telephone,email:email,gender:gender,isActivated:isActivated},callback, scope)
//     },
//     UserGrantPermission:function(userId,data, callback, scope){
//         this.AjaxRequest('UserGrantPermission',{userId:userId,data:Ext.JSON.encode(data)},callback, scope)
//     }
    
});

