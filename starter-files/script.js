// API
const API_ENDPOINT = 'https://yesno.wtf/api';
const divGeneral = document.getElementById("answer");
const entrada = document.getElementById("input");
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
// agregamos el evento del boton 
// lo madnamos a llamar
const button = document.getElementById("button");

async function fetchAnswer(){
    const response = await fetch(API_ENDPOINT);
    const responseJSON = await response.json();

    return responseJSON;
}

button.addEventListener("click", e => {
    fetchAnswer().then(data =>{
        console.log(data)
        divGeneral.append(data.answer);
    });
    setTimeout(()=>{
        document.getElementById("answer").innerHTML = ""; 
    },3000)
});




