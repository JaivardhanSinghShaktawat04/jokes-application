const btnNextJoke = document.querySelector('.btn-next_joke');
const setupElm = document.querySelector('.setup');
const deliveryElm = document.querySelector('.delivery');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnAboutCreator = document.querySelector('.btn-about_creator');
const modalWindowElm = document.querySelector('.modal-window');

const api = `https://v2.jokeapi.dev/joke/Any?safe-mode` ; 

const showNextJoke = async () => {
  console.log(btnNextJoke);
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
        throw err ; 
    }
}

const toggleModalWindow = () => {
  overlay.classList.toggle('hidden');
  modalWindowElm.classList.toggle('hidden');
}

const checkEvent = event => {
  const isPresent = ['btn-about_creator' , 'overlay' , 'close-modal'].some(el => event.target.classList.contains(el)); 
  isPresent ? toggleModalWindow() : event.target.classList.contains('btn-next_joke') ? showNextJoke() : '' ; 
}

const initApplication = () => showNextJoke();

initApplication();


// Single Event Listener : Using Event Delegation.
document.addEventListener('click' , checkEvent);