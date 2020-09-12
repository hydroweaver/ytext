window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let x = document.getElementById("test");
    x.onclick = function(){
        console.log('click');
    }

});

// window.onload=function(){
//     document.getElementById("test").addEventListener("click", ()=>{
//         // console.log('haha');
//         window.open('https://javascript.info/');
//     });
// }



// function opn(){
//     window.open('https://javascript.info/');
// }

// let div = document.getElementById("fetchUpdateDiv");
// let body = {};

// function authAndLoad(){
//     let result = validateForms();

//     if(result){
//         div.innerHTML = "";
//         let loaderDiv = document.createElement("div");
//         loaderDiv.className = "loader";
//         div.insertAdjacentElement('afterend', loaderDiv);

//         fetch(document.getElementById("cloudFunctionURL").value.toString(),{
//             // fetch("http://localhost:8888",{
//             method: 'POST',
//             // headers have to be added as new headers!
//             headers: new Headers(
//                 {
//                     'Content-Type': 'application/json',
//                     // https://stackoverflow.com/questions/1256593/why-am-i-getting-an-options-request-instead-of-a-get-request
//                     // this fixed our problem, changing from "application/json" to "text/plain" stopped the horrible options request – Keeno Jul 12 '13 at 9:44
//                     // the two below did nothing! Might want to setup this in function
//                     // 'Access-Control-Allow-Methods': 'POST',
//                     // 'Access-Control-Allow-Headers': 'Content-Type'
//                 }),
//             body: JSON.stringify(body),
//             mode: 'cors'
//         })
//         .then((response)=>{
//             // had to use response.text and not response.json since server sending response as text/html
//             return response.text();
//         // fetch promise needs to be resolved to get the server response
//             }).then((jsonload)=>{
//                 if(jsonload.length > 45 && jsonload.slice(0,45) == 'https://accounts.google.com/o/oauth2/v2/auth?'){
//                     resetTextColor();
//                     loaderDiv.remove();
//                     resetTextColor();
//                     document.getElementById('googAuthResponseURL').innerHTML = "Click to Authorize";
//                     document.getElementById('googAuthResponseURL').href = jsonload;
//                 }
//                 else{
//                     resetTextColor();
//                     loaderDiv.remove();
//                     resetTextColor();
//                     div.innerHTML = jsonload;
//                 }
//             }).catch((err)=>{
//                 resetTextColor();
//                 loaderDiv.remove();
//                 // loaderDiv.style.display = "none";
//                 div.innerHTML = err;
//             });
//     }
// }

// function validateForms(){
//     let apikey = document.getElementById("apikey").value;
//     let clientid = document.getElementById("clientid").value;
//     let clientSecret = document.getElementById("clientSecret").value;

//     if(apikey == '' || clientid == '' ||  clientSecret == ''){
//         div.innerHTML = "Error!";
//         div.style.color = "red";
//         return false;
//     }
//     else{
//         body = {
//             key : apikey,
//             id : clientid,
//             secret : clientSecret
//         }
//         return true;
//     }
// }
// function resetTextColor(){
//     div.style.color = "";
// }