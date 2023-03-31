


const validateForm = () => {
  let validate = true
  console.log(validate)
  clearErr()
  const name = document.querySelector("#name").value;
  console.log(name)
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#pass").value;
  const cpass = document.querySelector("#cpass").value;
  if (name.length <5){
    console.log(name)
    setError("name","name should have more than 5 letters");
    validate = false;
    
  }
 
  if( password.length <5 ){
    setError("pass","password  should have more than 5 letters")
    validate = false
  }
  if (password !== cpass){
    setError("cpass","password doesnot matched")
    validate = false
  }
return validate
}

const setError =  (cln,error) =>  {
  document.querySelector(`.${cln}`).innerHTML=error;

}
const clearErr = () => {
const a =document.getElementsByTagName("span")
for (let i = 0 ; i < a.length ; i++){
  a[i].innerHTML=""
}
}