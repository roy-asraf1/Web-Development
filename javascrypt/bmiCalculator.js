function bmiCalculator (weight, height) {
    var bmi = Calculator(weight, height)
    var Massege;
    if (bmi < 18){
        Massege ="Your BMI is " + bmi +", so you are underweight.";
    }
    else if(bmi > 18 && bmi < 24.5){
        Massege = "Your BMI is " + bmi +", so you have a normal weight.";
    }
    else{
        Massege = "Your BMI is " + bmi +", so you are overweight.";
    }
    return Massege;
}

function Calculator (weight, height){
    var bmi = weight / Math.pow(height,2);
    return bmi;
}
