

function gradeCalculation(score){
    
    let grade;
    switch (true){
        case(score >=90 && score <=100):
        grade = 'O - Outstanding';
        break;
        case(score >=70 && score < 90):
        grade = 'A - Excellent ';
        break;
        case(score >=50 && score <70):
        grade = 'B - Good';
        break;
        case(score >=35 && score < 50):
        grade = 'C - Average';
        break;
        case(score >=0 && score < 35):
        grade = 'F - Fail';
        break;
        default:
        grade ='Invalid Score';

    }
    return grade;
}
//gradeCalculation("75");
let studentScore = 75;
console.log('The Student Grade is :' + gradeCalculation(studentScore));