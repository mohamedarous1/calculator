package com.calculator.calculator.model;

import jakarta.persistence.criteria.CriteriaBuilder;

public class calculator {
    private double number1 ;
    private double number2 ;

    public calculator(String num1,String num2){
        number1 = Double.parseDouble(num1);
        number2 = Double.parseDouble(num2);
    }

    public String add_operation(){
        double answer = number1 + number2;
        if((int) answer == answer){
            return Integer.toString((int) answer);
        }
        return Double.toString(answer) ;
    }

    public String sub_operation(){
        double answer = number1 - number2;
        if((int) answer == answer){
            return Integer.toString((int) answer);
        }
        return Double.toString(number1 - number2) ;
    }

    public String multi_operation(){
        double answer = number1 * number2;
        if((int) answer == answer){
            return Integer.toString((int) answer);
        }
        return Double.toString(number1 * number2) ;
    }

    public String division_operation(){
        if(number2 == 0){
            return "E";
        }
        double answer = number1 / number2;
        if((int) answer == answer){
            return Integer.toString((int) answer);
        }
        return Double.toString(answer) ;
    }

    public String multi_inverse(){
        if(number1 == 0){
            return "E";
        }
        double answer = 1/number1;
        if((int) answer == answer){
            return Integer.toString((int) answer);
        }
        return Double.toString(answer);
    }

    public String sqrt(){
        if(number1 < 0){
            return "E";
        }
        double answer = (double) Math.sqrt(number1);
        if((int) answer == answer){
            return Integer.toString((int) answer);
        }
        return Double.toString(answer);
    }

    public String square(){
        if((int) number1==number1){
            int n1 = (int) number1;
            return Integer.toString(n1*n1);
        }
        return Double.toString(number1*number1);
    }

    public String percintile(){
        return " " ;
    }

}
