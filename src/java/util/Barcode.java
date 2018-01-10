/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package util;

/**
 *
 * @author KIEN
 */
public class Barcode {
     public String geBarcode(String input){
         
           double val,val1,val2;    
           double val3;
           int val4 = 0;
           String C,Gtin;
           int number1 =0 ;
           int number2 =0 ;
           String array = input;
           int i;
           char[] anArray;
           for(i=1;i<=(array.length()-1);i=i+2){                
               anArray=array.toCharArray();
               int number = Character.getNumericValue(anArray[i]);
               number1+=number;
               
           }
          for(i=0;i<=(array.length()-1);i=i+2){                
               anArray=array.toCharArray();
               int number = Character.getNumericValue(anArray[i]);
               number2+=number;
           }            
          val = number1*3;
          val1 = number2;
          val2 = val1+val;          
          val3 = val2/10 - Math.floor(val2/10);
          if(val3 == 0){val4 = 0;}
          if(val3 > 0){
              val4 = (int)(((Math.floor(val2/10)+1)*10)-val2);
          }
         C = String.valueOf(val4) ;    
         Gtin = input+C;
         return Gtin;
     }
}
