const adviceId = document.querySelector('.advice-id')
const advice = document.querySelector('.advice')
const diceBtn = document.querySelector('.dice')

const URL = 'https://api.adviceslip.com/advice'

const getAdvice = () => {
	fetch(URL)
		.then(res => res.json())
		.then(adviceData => {
			const adviceNum = adviceData.slip.id
			const adviceQuote = adviceData.slip.advice

			adviceId.textContent = adviceNum
			advice.innerHTML = adviceQuote
		})
		.catch(err => {
			console.log(err)
		})
}

diceBtn.addEventListener('click', getAdvice)
