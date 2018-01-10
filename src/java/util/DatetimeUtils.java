package util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 *
 * @author vhungz
 */
public class DatetimeUtils {
    public static final String DATE_PATTERN_1 = "yyyyMMddHHmmss";
    public static final String DATE_PATTERN_2 = "yyyyMMddHHmm";
    public static final String DATE_PATTERN_3 = "dd-MM-yyyy";
    public static final String DATE_PATTERN_4 = "dd/MM/yyyy HH:mm:ss";// 28/05/2013 23:59:59
    public static final String DATE_PATTERN_5 = "MM/dd/yyyy";
    public static final String DATE_PATTERN_6 = "dd/MM/yyyy";
    public static java.sql.Date convertDate(String strdate) {
        java.sql.Date sqldate;
        java.util.Date date;
        DateFormat formatter = new SimpleDateFormat(DATE_PATTERN_6);
        //System.out.println("Converting date ... : " + strdate.length());
        date = new java.util.Date();
        try {
            if(strdate.length()==19) {
                date = (java.util.Date)formatter.parse(strdate);
            }
            
        } catch(Exception ex) {
            
            ex.printStackTrace();
        }
        
        sqldate = new java.sql.Date(date.getTime());
        return sqldate;
    }
    public static java.sql.Timestamp convertDatetime(String strdate) {
        DateFormat formatter = new SimpleDateFormat(DATE_PATTERN_4);
        java.util.Date date = new java.util.Date();
        try {
           if(strdate.length() ==19) {
               
            date = formatter.parse(strdate);
           }
        } catch(Exception ex) {ex.printStackTrace(); }
        
        return new java.sql.Timestamp(date.getTime());
        
    }
    public static String invertDate(java.sql.Date sqldate) {

        DateFormat formatter = new SimpleDateFormat(DATE_PATTERN_1);
        java.util.Date date = new java.util.Date(sqldate.getTime());
        return formatter.format(date);

    }
    public static String invertDate(java.sql.Timestamp sqltimestamp) {

        DateFormat formatter = new SimpleDateFormat(DATE_PATTERN_2);
        java.util.Date date = new java.util.Date(sqltimestamp.getTime());
        return formatter.format(date);

    }
    
    public static String getCurrentTime() {
        DateFormat formatter = new SimpleDateFormat(DATE_PATTERN_1);
        java.util.Date date = new java.util.Date();
        return formatter.format(date);
    }
    
    public static String getFirstTimeInDay(String day) { /* yyyyMMddHHmmss */
        String firsttimeday = day.substring(0, 8) + "000000";
        return firsttimeday;
    }
    
    public static String getLastTimeInDay(String day) { /* yyyyMMddHHmmss */
        String firsttimeday = day.substring(0, 8) + "235959";
        return firsttimeday;
    }
    
    public static String getVnCurrentDay() {
        DateFormat formatter = new SimpleDateFormat(DATE_PATTERN_3);
        java.util.Date date = new java.util.Date();
        return formatter.format(date);
    }
    
    public static java.util.Date dateFromString(String strdate) { 
        java.util.Date date;
        DateFormat formatter = new SimpleDateFormat(DATE_PATTERN_4);
        try {
            date = (java.util.Date)formatter.parse(strdate);
        } catch(Exception e) {
            date = new java.util.Date();
        }
        return date;
    }
    public static java.util.Date dateFromStringJavaScript(String strdate) { 
        java.util.Date date;
        DateFormat formatter = new SimpleDateFormat(DATE_PATTERN_6);
        try {
            date = (java.util.Date)formatter.parse(strdate);
        } catch(Exception e) {
            date = new java.util.Date();
        }
        return date;
    }    
    public static java.util.Date dateFromSQLDate(java.sql.Timestamp timestamp) { 
        java.util.Date date;
        
        try {
            date = new java.util.Date(timestamp.getTime());
        } catch(Exception e) {
            date = new java.util.Date();
        }
        return date;        
    }
     public static String toString(java.util.Date date) {
        DateFormat formatter = new SimpleDateFormat(DATE_PATTERN_3);
        return formatter.format(date);
     }
     public static java.util.Date ConvertStringToDate(String strdate,String DATE_PATTERN) { 
        java.util.Date date;
        DateFormat formatter = new SimpleDateFormat(DATE_PATTERN);
        try {
            date = (java.util.Date)formatter.parse(strdate);
        } catch(Exception e) {
            date = null;
        }
        return date;
    }    
}
