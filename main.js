const cookie = document.querySelector('#fortune-cookie')
const home1 = document.querySelector('.home')
const home2 = document.querySelector('.home2')
const button = document.querySelector('button')
let phrases = document.querySelector('fieldset')

let randomNumber = Math.round(Math.random() * 10)


const randomPhrases = [
   'A vida trará coisas boas se tiver paciência.',
   'Não compense na ira o que lhe falta na razão.',
   'Defeitos e virtudes são apenas dois lados da mesma moeda.',
   'A maior de todas as torres começa no solo.',
   'Uma bela flor é incompleta sem as suas folhas.',
   'O riso é a menor distância entre duas pessoas.',
   'Os defeitos são mais fortes quando o amor é fraco.',
   'A sorte favorece a mente bem preparada.',
   'Quem olha para fora sonha; quem olha para dentro acorda.',
   'Espere pelo mais sábio dos conselhos: o tempo.',
   'Deixe de lado as preocupações e seja feliz.',
   'A maior barreira para o sucesso é o medo do fracasso.',
   'A inspiração vem dos outros. A motivação vem de dentro de nós.',
   'Você sempre será a sua melhor companhia!',
 ];
 


cookie.addEventListener('click', openPhrases)
function openPhrases(event){
   home1.classList.add('hide')
   home2.classList.remove('hide') 

}
console.log(randomNumber)

for(let x of randomPhrases){
   if(randomNumber <= randomPhrases.length){
      let randomPhrase = randomPhrases[randomNumber]
      phrases.innerText = randomPhrase

   }
}

button.addEventListener('click', playAgain)
function playAgain(event){
   home1.classList.add('hide')
   home2.classList.remove('hide')
 
   location.reload()  
   }

