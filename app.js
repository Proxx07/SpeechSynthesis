function getFirstVowelSubstring(str) {
  const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  const words = str.toLowerCase().split(' ');

  let result = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (vowels.includes(word[j])) {
        result += word.substring(j) + ' ';
        break;
      }
    }
  }
  if (!vowels.includes(result[0])) {
    result = result.slice(1);
  }

  result = result.split(' ').map(word => word && `Хуй${word}`).join(' ')
  console.log(result)
  return result.trim();
}

const synth = window.speechSynthesis;
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
};

speak('Здравствуйте, введите пожалуйста текст и нажмите на кнопку');

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('.form')
  const input = form.querySelector('.input')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = input.value
    speak(getFirstVowelSubstring(text));
  })
});