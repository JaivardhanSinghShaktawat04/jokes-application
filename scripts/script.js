const btnNextJoke = document.querySelector('.btn-next_joke');
const setupElm = document.querySelector('.setup');
const deliveryElm = document.querySelector('.delivery');
const api = `https://v2.jokeapi.dev/joke/Any?safe-mode` ; 

const showNextJoke = async () => {
    try{
      const response = await window.fetch(api);
      console.log('i am working');
      const {setup , delivery , joke} = await response.json();
      if(joke){
         setupElm.style.display = "none" ; 
         deliveryElm.innerHTML = joke ; 
      }else{
        setupElm.style.display === "none" ? setupElm.style.display = "block" : "" ; 
        setupElm.innerHTML = setup ; 
        deliveryElm.innerHTML = delivery ; 
      }
    }catch(err){

    }
}

const initApplication = () => showNextJoke();

initApplication();

btnNextJoke.addEventListener('click' , showNextJoke);