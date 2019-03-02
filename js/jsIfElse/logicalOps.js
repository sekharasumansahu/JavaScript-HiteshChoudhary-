let isUser = false;
let isPaid = false;
let Isverified = false;
let isRegistered =false;

if (isUser && isRegistered && isPaid && Isverified) {
  console.log('Welcome folk.');
} else if ( isUser || Isverified || isRegistered){
  console.log('Welcome, please subscribe soon!');
} else {
  console.log('please register !');
}
