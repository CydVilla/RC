const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add("hiddeb")
	sharleen.classList.add("hidden")
	andi.classList.toggle("hidden")
}

function claireNext(){
	sharleen.classList.add("#hidden")
	andi.classList.add("hidden")
	claire.classList.toggle("hidden")
}

function sharleenNext(){
	andi.classList.add("hidden")
	claire.classList.add("hidden")
	sharleen.classList.toggle("hidden")
}
