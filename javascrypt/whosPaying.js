function whosPaying(names) {
    
    /******Don't change the code above*******/
    
        //Write your code here.
        var length = names.length;
        var randomNumber = Math.floor(Math.random() * length);
        var randomPerson = names[randomNumber];
        
        return randomPerson + " is going to buy lunch today!";   
        
        
}    