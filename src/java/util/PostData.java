package util;

import java.io.BufferedReader;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author HungPV
 */
public class PostData {
    private String data;
    public PostData(BufferedReader br) {
        data = readData(br);
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
}
