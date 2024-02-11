const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn')
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAkberInitialValue = 0;

// subhanAllah Part
subhanAllahIncrimentBtn.addEventListener('click', function(){

    if( subhanAllahInitialValue === 33){
        return alert('you cant added more number')
    }


    subhanAllahInitialValue += 1
    subhanAllahDisplay.innerText =  subhanAllahInitialValue
})
subhanAllahDecrimentBtn.addEventListener('click', function(){

    if( subhanAllahInitialValue === 0){
        return alert('you cant added negative number')
    }


    subhanAllahInitialValue -= 1
    subhanAllahDisplay.innerText =  subhanAllahInitialValue
})

// alhamdulillah Part
alhamdulillahIncrimentBtn.addEventListener('click', function(){

    if( alhamdulillahInitialValue === 33){
        return alert('you cant added more number')
    }


    alhamdulillahInitialValue += 1
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})

alhamdulillahDecrimentBtn.addEventListener('click', function(){

    if( alhamdulillahInitialValue === 0){
        return alert('you cant added negative number')
    }


    alhamdulillahInitialValue -= 1
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})

// allahuAkbar part
allahAkberIncrimentBtn.addEventListener('click', function(){

    if( allahAkberInitialValue === 33){
        return alert('you cant added more number')
    }


    allahAkberInitialValue += 1
    allahAkberDisplay.innerText = allahAkberInitialValue
})

allahAkberDecrimentBtn.addEventListener('click', function(){

    if( allahAkberInitialValue === 0){
        return alert('you cant added negative number')
    }


    allahAkberInitialValue -= 1
    allahAkberDisplay.innerText = allahAkberInitialValue
})


resetBtn.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;

    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahAkberInitialValue = 0;
})