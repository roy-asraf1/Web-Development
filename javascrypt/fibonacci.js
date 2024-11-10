function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
    
        if(n===1)
            return "0"
        else if(n===2)
            return "0,1"  
        else if (n===3){
            return "0,1,1";
        }
        else{
            var a=0, b=1, c=1;
            var answer = "0,1"
            for (var i = 2; i < n; i++) {
                
                c = a + b;
                a = b;
                b = c;
                answer+= "," +c 
            }
            return answer;
        }  
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    