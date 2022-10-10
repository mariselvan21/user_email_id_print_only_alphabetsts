var email=prompt('Enter any email Id')
var alphabets='abcdefghijklmnopqrstuvwxyz';
var alpArray=alphabets.split('');
// console.log(alpArray);
var emailalphabets=[];
var index=0;
for(i=0;i<email.length;i++){
    if(alpArray.includes(email[i])){
        emailalphabets[index]=email[i];
        index++;
        
    }
}
console.log(emailalphabets);