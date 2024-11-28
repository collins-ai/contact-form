const form = document.querySelector(`form`)
const successMessage = document.getElementById(`success`)
const pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/

const input1 = document.getElementById(`firstname`)
const input2 = document.getElementById(`lastname`)
const input3 = document.getElementById(`email`)
const radio1 = document.getElementById(`general`)
const radio2 = document.getElementById(`support`)
const textArea = document.getElementById(`message`)
const checkBox = document.getElementById(`check`)

const checkInput1 = () => {
    if(input1.value.trim() == ``) {
        document.getElementById(`firstnameError`).style.display = `block`
    }else {
        document.getElementById(`firstnameError`).style.display = `none`
    }
}

const checkInput2 = () => {
    if(input2.value.trim() == ``) {
        document.getElementById(`lastnameError`).style.display = `block`
    }else {
        document.getElementById(`lastnameError`).style.display = `none`
    }
    checkInput1()
}

const checkInput3 = () => {
    if(input3.value.trim() == `` || !input3.value.match(pattern)) {
        document.getElementById(`emailError`).style.display = `block`
    }else {
        document.getElementById(`emailError`).style.display = `none`
    }
    checkInput2()
}

const checkRadio = () => {
    if(!radio1.checked && !radio2.checked) {
        document.getElementById(`queryError`).style.display = `block`
    }else {
        document.getElementById(`queryError`).style.display = `none`
    }
    checkInput3()
}

const checkTextArea = () => {
    if(textArea.value.trim() == ``) {
        document.getElementById(`messageError`).style.display = `block`
    }else {
        document.getElementById(`messageError`).style.display = `none`
    }
    checkRadio()
}

const checkCheckBox = () => {
    if(!checkBox.checked) {
        document.getElementById(`checkError`).style.display = `block`
    }else {
        document.getElementById(`checkError`).style.display = `none`
    }
    checkTextArea()
}

const submitFunction = (e) => {
    e.preventDefault()
    checkCheckBox()
    if(input1.value.trim() && input2.value.trim() && input3.value.trim() 
        && (radio1.checked || radio2.checked) && textArea.value.trim() && checkBox.checked) {
        input1.value = ``; input2.value = ``; input3.value = ``; textArea.value = ``;
        radio1.checked = false; radio2.checked = false; checkBox.checked = false;
        successMessage.style.display = `block`
    }else {
        successMessage.style.display = `none`
    }
}

form.addEventListener(`submit`, submitFunction) 