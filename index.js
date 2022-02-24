let characters = [0,1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','!','@','#','$','%','^','&','*','(',')','_','-','=','+','[',']','/',',','.']
let passText1 = document.getElementById("passText1")
let passText2 = document.getElementById("passText2")
let passText3 = document.getElementById("passText3")
let passText4 = document.getElementById("passText4")
let password1 = ""
let password2 = ""
let password3 = ""
let password4 = ""
let charLen = characters.length
let formInput = document.getElementById("passLen").value


passText1.innerHTML += "<svg width='20' height='15' viewBox='0 0 50 13' fill='none'xmlns='http://www.w3.org/2000/svg'> <path d='M12.5 6.25C12.5 9.70178 9.70178 12.5 6.25 12.5C2.79822 12.5 0 9.70178 0 6.25C0 2.79822 2.79822 0 6.25 0C9.70178 0 12.5 2.79822 12.5 6.25Z' fill='#3F516B'/> <path d='M31.25 6.25C31.25 9.70178 28.4518 12.5 25 12.5C21.5482 12.5 18.75 9.70178 18.75 6.25C18.75 2.79822 21.5482 0 25 0C28.4518 0 31.25 2.79822 31.25 6.25Z' fill='#3F516B'/> <path d='M43.75 12.5C47.2018 12.5 50 9.70178 50 6.25C50 2.79822 47.2018 0 43.75 0C40.2982 0 37.5 2.79822 37.5 6.25C37.5 9.70178 40.2982 12.5 43.75 12.5Z' fill='#3F516B'/> </svg>"

passText2.innerHTML += "<svg width='20' height='15' viewBox='0 0 50 13' fill='none'xmlns='http://www.w3.org/2000/svg'> <path d='M12.5 6.25C12.5 9.70178 9.70178 12.5 6.25 12.5C2.79822 12.5 0 9.70178 0 6.25C0 2.79822 2.79822 0 6.25 0C9.70178 0 12.5 2.79822 12.5 6.25Z' fill='#3F516B'/> <path d='M31.25 6.25C31.25 9.70178 28.4518 12.5 25 12.5C21.5482 12.5 18.75 9.70178 18.75 6.25C18.75 2.79822 21.5482 0 25 0C28.4518 0 31.25 2.79822 31.25 6.25Z' fill='#3F516B'/> <path d='M43.75 12.5C47.2018 12.5 50 9.70178 50 6.25C50 2.79822 47.2018 0 43.75 0C40.2982 0 37.5 2.79822 37.5 6.25C37.5 9.70178 40.2982 12.5 43.75 12.5Z' fill='#3F516B'/> </svg>"

passText3.innerHTML += "<svg width='20' height='15' viewBox='0 0 50 13' fill='none'xmlns='http://www.w3.org/2000/svg'> <path d='M12.5 6.25C12.5 9.70178 9.70178 12.5 6.25 12.5C2.79822 12.5 0 9.70178 0 6.25C0 2.79822 2.79822 0 6.25 0C9.70178 0 12.5 2.79822 12.5 6.25Z' fill='#3F516B'/> <path d='M31.25 6.25C31.25 9.70178 28.4518 12.5 25 12.5C21.5482 12.5 18.75 9.70178 18.75 6.25C18.75 2.79822 21.5482 0 25 0C28.4518 0 31.25 2.79822 31.25 6.25Z' fill='#3F516B'/> <path d='M43.75 12.5C47.2018 12.5 50 9.70178 50 6.25C50 2.79822 47.2018 0 43.75 0C40.2982 0 37.5 2.79822 37.5 6.25C37.5 9.70178 40.2982 12.5 43.75 12.5Z' fill='#3F516B'/> </svg>"

passText4.innerHTML += "<svg width='20' height='15' viewBox='0 0 50 13' fill='none'xmlns='http://www.w3.org/2000/svg'> <path d='M12.5 6.25C12.5 9.70178 9.70178 12.5 6.25 12.5C2.79822 12.5 0 9.70178 0 6.25C0 2.79822 2.79822 0 6.25 0C9.70178 0 12.5 2.79822 12.5 6.25Z' fill='#3F516B'/> <path d='M31.25 6.25C31.25 9.70178 28.4518 12.5 25 12.5C21.5482 12.5 18.75 9.70178 18.75 6.25C18.75 2.79822 21.5482 0 25 0C28.4518 0 31.25 2.79822 31.25 6.25Z' fill='#3F516B'/> <path d='M43.75 12.5C47.2018 12.5 50 9.70178 50 6.25C50 2.79822 47.2018 0 43.75 0C40.2982 0 37.5 2.79822 37.5 6.25C37.5 9.70178 40.2982 12.5 43.75 12.5Z' fill='#3F516B'/> </svg>"

function generatePassword(){
    let password = ""
    numInput = document.getElementById("passLen").value
    for (i=0; i<numInput; i++) {
        let index = Math.floor(Math.random()*charLen)
        password += characters[index]
        
    }
    return password
    
} 

var slider = document.getElementById("passLen")
var output = document.getElementById("sliderOut");
output.innerHTML = formInput // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// display the password on the button
function displayPassword(){
    password1 = generatePassword()
    password2 = generatePassword()
    password3 = generatePassword()
    password4 = generatePassword()
    passText1.innerHTML = "<span class='tooltiptext' id='myTooltip'>Copy to clipboard</span>"+ password1
    passText2.innerHTML = "<span class='tooltiptext' id='myTooltip2'>Copy to clipboard</span>"+ password2
    passText3.innerHTML = "<span class='tooltiptext' id='myTooltip3'>Copy to clipboard</span>"+ password3
    passText4.innerHTML = "<span class='tooltiptext' id='myTooltip4'>Copy to clipboard</span>"+ password4
} 

// copy button 1 password
function copyText1() {
    
    navigator.clipboard.writeText(password1)
    
    var tooltip = document.getElementById("myTooltip")
    tooltip.innerHTML = "Copied: " + password1

}

// copy button 2 password
function copyText2() {
    
    navigator.clipboard.writeText(password2)
    
    var tooltip = document.getElementById("myTooltip2")
    tooltip.innerHTML = "Copied: " + password2

}

// copy button 3 password
function copyText3() {
    
    navigator.clipboard.writeText(password2)
    
    var tooltip2 = document.getElementById("myTooltip3")
    tooltip2.innerHTML = "Copied: " + password3

}

// copy button 4 password
function copyText4() {
    
    navigator.clipboard.writeText(password2)
    
    var tooltip2 = document.getElementById("myTooltip4")
    tooltip2.innerHTML = "Copied: " + password4

}

