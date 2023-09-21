let str = "äÄçÇéÉêPHP-MySQLöÖÐþúÚ";
str = str.toString();
str = str.replace(/[^\x20-\x7E]/g, '');
console.log(str)