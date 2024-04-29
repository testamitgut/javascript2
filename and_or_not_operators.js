console.log(5<7 && 8>4)//true


const userAge=25;
console.log(userAge>=18&&userAge<=24);//false


const isCollegeStudent=(userAge>=18)&&(userAge<=24);
console.log(isCollegeStudent);//false

 const student=15;
const isSchooleStudent=(student>=5)||(student<=18);
console.log(isSchooleStudent);//true


const isStudent=(isSchooleStudent||isCollegeStudent)
console.log(isStudent);//true

const isStudent2=isSchooleStudent&&isCollegeStudent;
console.log(isStudent2);//false


console.log(1&&2)//2
console.log(0&&2);//0

console.log(0||2);//2
console.log(1||2);//



console.log(Boolean(0||2));

const andResult2=""&&'Hello';
console.log(andResult2);


console.log(!null);