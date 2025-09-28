let score = 0;
const scoreDisplay = document.getElementById('score');

document.querySelectorAll('.question').forEach(question => {
  const correctAnswer = question.getAttribute('data-correct');
  let answered = false; // prevent scoring multiple times for the same question

  question.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', () => {
      if (answered) return; // stop double-counting
      answered = true;

      const allInputs = question.querySelectorAll('input[type="radio"]');
      allInputs.forEach(i => i.disabled = true);

      question.querySelectorAll('label').forEach(label => {
        label.classList.remove('correct', 'wrong');
      });

      const selectedLabel = input.parentElement;

      if (input.value === correctAnswer) {
        selectedLabel.classList.add('correct');
        score++; // increase score
        scoreDisplay.textContent = score; // update scoreboard
      } else {
        selectedLabel.classList.add('wrong');
        question.querySelectorAll('input[type="radio"]').forEach(radio => {
          if (radio.value === correctAnswer) {
            radio.parentElement.classList.add('correct');
          }
        });
      }
    });
  });
});
