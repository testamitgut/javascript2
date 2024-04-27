const message='Hello  am world!';
console.log(message);
console.log(message[0]);
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
const faltuMessage='           Hi,I am Amit';
console.log(faltuMessage);
console.log(faltuMessage.trim().toLowerCase());
console.log(faltuMessage.trim().toLocaleUpperCase())
console.log(faltuMessage.trimStart());
console.log(faltuMessage.trimEnd());

console.log(faltuMessage.includes('am'));
console.log(faltuMessage.includes('AMIT'))
console.log(faltuMessage.includes('Amit'));


console.log(faltuMessage.length);
console.log(faltuMessage.indexOf('I'))
console.log(faltuMessage.indexOf('a'))
console.log(faltuMessage.indexOf('z'))

console.log(faltuMessage.replace('Hi','Hello'));

console.log(faltuMessage.replace('a','A'));
console.log(faltuMessage.replaceAll('i','I'));


console.log(message+faltuMessage);

console.log(message.concat(faltuMessage));


const lastFourDigits='7856';
const maskedAccountNumber=lastFourDigits.padStart('16','*');

console.log(lastFourDigits.padStart(16,'*'));
console.log(lastFourDigits.padStart('116','.'));


console.log(lastFourDigits.padEnd(16,'*'));

console.log(message.charAt(3));


console.log(message.charCodeAt(3));


console.log(faltuMessage.split());
console.log(faltuMessage.split(''))



const templateString=`Last four digite of my account number is`
console.log(templateString.concat(' ',lastFourDigits));

const concantinatedSting=`Last four digit of  my account number is ${lastFourDigits}`;
console.log(concantinatedSting);


const bankBalance=987;
const templateString2=`I have $${bankBalance}in my accont` 
console.log(templateString2);