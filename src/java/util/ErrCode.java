/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package util;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author LoveLife
 */
public class ErrCode {
    public static class ResponseCode {
        public static final int TonTai                                                  =-1;
//        public static final int COMPANY_ERROR                                                = -2;
//        public static final int ERROR_COMPANY_OR_USER                                        = -3;
//        public static final int OK                                                           = 0;
//        public static final int EMAIL_ERROR                                                  = 1;

//        public static final int DeleteOk                                                     = 2;
//        public static final int DeleteFail                                                   = 3;
//        public static final int DeleteRexist                                                 = 4;
//        public static final int DeleteSame                                                   = 5;     
//        //ADD NEW 
//        public static final int ADDNEW_SUCCESS                                               = 6;
//        public static final int ADDNEW_UNKNOWN_ERROR                                         = 7;
//        public static final int ADDNEW_DUPLICATED                                            = 8;
//        public static final int ADDNEW_LOCKING                                               = 9;
//        public static final int ADDNEW_DUPLICATE_ALL                                         = 10;
//        public static final int ADDNEW_PREFIXCODE_EXISTS                                     = 11; 
//        // Update
//        public static final int UPDATE_SUCCESS                                               = 12;
//        public static final int UPDATE_FAIL                                                  = 13;
//       //unDelete
//        public static final int UnDeleteOk                                                     = 14;
//        public static final int UnDeleteFail                                                   = 15;
//        //Reinstate
//        public static final int ReinstateOk                                                     = 16;
//        public static final int ReinstateFail                                                   = 17;
//        public static final int ReinstateTimeOut                                                = 18;
        public static final int Nguoidung_loi                                                   =1;
        public static final int EXCEPTION_ERROR                                              = 98;
        public static final int UNKNOWN_ERROR                                                = 99;
        public static final int LOINHAPDULIEU                                                   =-4;
    }
    private static final Map<Integer,String> map_respCode = new HashMap<Integer, String>();
    static {
//         map_respCode.put(ResponseCode.USER_ERROR, "Tên đăng nhập đã tồn tại");
         map_respCode.put(ResponseCode.Nguoidung_loi, "Người dùng này đã tồn tại");
         map_respCode.put(ResponseCode.TonTai, "Đã tồn tại bản ghi");
//         map_respCode.put(ResponseCode.ERROR_COMPANY_OR_USER, "Mã phân định doanh nghiệp hoặc tên đăng nhập không tồn tại ");
//         map_respCode.put(ResponseCode.OK, " Thành công");
         map_respCode.put(ResponseCode.EXCEPTION_ERROR, "EXCEPTION ERROR");
         map_respCode.put(ResponseCode.UNKNOWN_ERROR, "Lỗi không xác định");
         map_respCode.put(ResponseCode.UNKNOWN_ERROR, "Có lỗi khi nhập dữ liệu");
//         map_respCode.put(ResponseCode.EMAIL_ERROR, "Email không chính xác. Đề nghị bạn nhập đúng Email để nhận mật khẩu mới");
//         // DELETE GS1 and GLN
//         map_respCode.put(ResponseCode.DeleteOk,"Mã đã được huỷ");
//         map_respCode.put(ResponseCode.DeleteFail,"Huỷ mã thất bại");
//         map_respCode.put(ResponseCode.DeleteRexist,"Bạn chỉ có một mã GS1 duy nhất, không được huỷ");
//         map_respCode.put(ResponseCode.DeleteSame,"Mã chính không được xoá");
//         // ADDNEW GS1
//         map_respCode.put(ResponseCode.ADDNEW_SUCCESS,"Thêm mới thành công");
//         map_respCode.put(ResponseCode.ADDNEW_UNKNOWN_ERROR,"Lỗi không xác định");
//         map_respCode.put(ResponseCode.ADDNEW_DUPLICATED,"Mã bạn vừa thêm đã tồn tại");
//         map_respCode.put(ResponseCode.ADDNEW_LOCKING,"Mã đang trong thòi gian bị khoá, phải sau 4 năm sau khi huỷ mới được khôi phục");
//         map_respCode.put(ResponseCode.ADDNEW_DUPLICATE_ALL,"Mã doanh nghiệp và mã GLN đã tồn tại");
//         map_respCode.put(ResponseCode.ADDNEW_PREFIXCODE_EXISTS,"Mã doanh nghiệp đã tồn tại");
//         
//         // UPDATE
//         map_respCode.put(ResponseCode.UPDATE_SUCCESS,"Cập nhật thành công ");
//         map_respCode.put(ResponseCode.UPDATE_FAIL,"Cập nhật thất bại ");
//         
//         //undelete
//         map_respCode.put(ResponseCode.UnDeleteOk,"Mã đã được khôi phục lại");
//         map_respCode.put(ResponseCode.UnDeleteFail,"Khôi phục mã thất bại");
//         //Reinstate
//         map_respCode.put(ResponseCode.ReinstateOk,"Mã đã được sử dụng lại");
//         map_respCode.put(ResponseCode.ReinstateFail,"Sử dụng lại mã thất bại");
//         map_respCode.put(ResponseCode.ReinstateTimeOut,"Chưa đủ 4 năm để sử dụng lại mã. Muốn sử dụng lại vui lòng liên hệ với GS1");
         
    }
    public static String convert(Integer resCode) {
        if (map_respCode.containsKey(resCode))
            return map_respCode.get(resCode);
        return null;
    }
}
