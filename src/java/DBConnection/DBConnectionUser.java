/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package DBConnection;

/**
 *
 * @author HayGhe
 */
import com.mchange.v2.c3p0.ComboPooledDataSource;
import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;
import javax.sql.DataSource;
   

public class DBConnectionUser {
    private static DataSource ds = getDataSource();
    
    
    public static  DataSource getDataSource()
    {
        
        ComboPooledDataSource dsq = null;
        try {
            Properties appConfig = new Properties();
            appConfig.load(new FileInputStream("config/USER.properties"));                                                                                                                                                                                                                                                    
//            System.out.println("come on: 2" + appConfig + dsq);
            dsq = new ComboPooledDataSource();
//            System.out.println(appConfig.getProperty("jdbcUrl"));
            dsq.setDriverClass( appConfig.getProperty("driverClass") );         
            dsq.setJdbcUrl(appConfig.getProperty("jdbcUrl"));
            dsq.setUser(appConfig.getProperty("user"));                                  
            dsq.setPassword(appConfig.getProperty("password"));   
            // the settings below are optional -- c3p0 can work with defaults
            dsq.setMinPoolSize(Integer.parseInt(appConfig.getProperty("minPoolSize")));                                     
            dsq.setAcquireIncrement(Integer.parseInt(appConfig.getProperty("acquireIncrement")));
            dsq.setMaxPoolSize(Integer.parseInt(appConfig.getProperty("maxPoolSize")));
            dsq.setMaxIdleTime(Integer.parseInt(appConfig.getProperty("maxIdleTime")));                
        } catch (Exception ex) {
            System.out.println("error:" + ex.toString());
                ex.printStackTrace();
        } 

        return dsq;
    }

    public static  Connection getConnection()
    {
        Connection con =null;
        try {
//            System.out.println("New DB getConnection: 111" );
            con = ds.getConnection();
//            System.out.println("New DB Connection: " + con);
        } catch (SQLException sqlex) {
            System.out.println("Can not get DB Connection User: " + sqlex.getMessage());
        }
        return con;
    }
     public static void closeDB(Connection con) {
        try {
            con.close();
        } catch(Exception e) {
           
        }
    }
    
}

