/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package util;

import java.io.BufferedReader;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;
/**
 *
 * @author HANG
 */
public class PostDataParameter {
    private String data;
    private Map<String, String> map;
    public PostDataParameter(BufferedReader br) {
        data = readData(br);
        if(data !=null) 
            map = getQueryMap(data);
    }
    public String readData(BufferedReader br) {
        StringBuilder envelope = new StringBuilder(); 
        try {
            String line = null;  
            while ((line = br.readLine()) != null) {  
                envelope.append(line);  
            }
            br.close();
        } catch(Exception e) {
        }
        return envelope.toString();          
    }
    public String getData() {
        return data;
    }
    public Map<String, String> getQueryMap(String data)  
    {  
        String[] params = data.split("&");  
        Map<String, String> map = new HashMap<String, String>();
        try {
            for (String param : params)  
            {  
                String pair[] = param.split("=");
                if(pair.length == 2) {
                    map.put(pair[0],URLDecoder.decode(pair[1], "UTF-8"));
                } else if(pair.length == 1) {
                    map.put(pair[0],"");
                } 
            }
        } catch (UnsupportedEncodingException uee) {}
        return map;  
    } 
    public String getParameter(String key) {
        return (String)map.get(key);
    }
}
