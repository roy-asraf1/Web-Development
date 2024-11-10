function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    var daysremaning, weeksRemaning, monthsRemaning, days, weeks, months;
    daysremaning = 365*age;
    weeksRemaning = 52*age;
    monthsRemaning = 12*age;
    days = (90 * 365) - daysremaning;
    weeks = (90 * 52) - weeksRemaning;
    months = (90 * 12) - monthsRemaning;
    console.log("You have " + days + " days, " +weeks +" weeks, and "+months +" months left.") 
    
    
    
/*************Don't change the code below**********/
}
