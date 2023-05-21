const info = document.querySelector('.info')
info.style.color = 'red'
info.style.height = '1px'
info.style.padding = '7px'
info.style.textAlign = 'center'


hero = document.querySelector('.hero')
hero.style.display = 'flex'
hero.style.alignItems = 'center'
hero.style.justifyContent = 'center'
hero.style.marginTop = '30px'
hero.style.marginBottom = '30px'


const input = document.querySelector('input')

const button = document.querySelector('button')

let wrapper = document.querySelector('.wrapper')
wrapper.style.display = 'flex'
wrapper.style.flexWrap = 'wrap'
wrapper.style.alignItems = 'center'
wrapper.style.justifyContent = 'center'

 for(let i=0; i<=50; i++){

        let element = document.createElement('p')
        element.style.fontSize = '2rem'
         element.style.padding = '5px'
        element.textContent = i
    
        wrapper.appendChild(element)
    
        // To add line break after every fifith number and the styling of the P element.
        if(i % 5 === 0){
            wrapper.append(document.createElement('br'))
        }
        element.style.width = '15%'
        element.style.textAlign = 'center'
        element.style.margin = '2px'

        if(i % 2 === 0){
            element.style.backgroundColor = '#5BBC7A'
            // for even numbers bgcolor
        }else{
            element.style.backgroundColor = '#F7DC5C'
            // for odd numbers bgcolor
        }

        // for prime numbers bgcolor
        function isPrime(n){
            if (n <=1){
                return false;
            }
            for(let i = 2; i <= Math.sqrt(n); i++){
                if(n % i === 0){
                    return false;
                }
            }
                return true;
            }
            if(isPrime(i)){
                element.style.backgroundColor = '#EB695B'
            }
        }

function moreNumGen(){

        if(input.value === ""){
            info.textContent = 'Enter number value in the input field to generate numbers'
            element.textContent = ""
            wrapper.textContent = ""
        }else if (!/^\d+$/.test(input.value)){
            info.textContent = 'Input value must be a number'
        }else{
            info.textContent = ""
            wrapper.textContent = ""

             for(let i=0; i<=input.value; i++){

        let element = document.createElement('p')
        element.style.fontSize = '2rem'
         element.style.padding = '5px'
        element.textContent = i
    
        wrapper.appendChild(element)
    
        // To add line break after every fifith number and the styling of the P element.
        if(i % 5 === 0){
            wrapper.append(document.createElement('br'))
        }
        element.style.width = '15%'
        element.style.textAlign = 'center'
        element.style.margin = '2px'

        if(i % 2 === 0){
            element.style.backgroundColor = '#5BBC7A'
            // for even numbers bgcolor
        }else{
            element.style.backgroundColor = '#F7DC5C'
            // for odd numbers bgcolor
        }

        // for prime numbers bgcolor
        function isPrime(n){
            if (n <=1){
                return false;
            }
            for(let i = 2; i <= Math.sqrt(n); i++){
                if(n % i === 0){
                    return false;
                }
            }
                return true;
            }
            if(isPrime(i)){
                element.style.backgroundColor = '#EB695B'
            }
        }
        }
}

button.addEventListener('click', ()=>{
    moreNumGen()
})