
document.querySelectorAll('.question').forEach(question => {
  const correctAnswer = question.getAttribute('data-correct');

  question.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', () => {
      const allInputs = question.querySelectorAll('input[type="radio"]');
      allInputs.forEach(i => i.disabled = true);

      question.querySelectorAll('label').forEach(label => {
        label.classList.remove('correct', 'wrong');
      });

      const selectedLabel = input.parentElement;

      if (input.value === correctAnswer) {
        selectedLabel.classList.add('correct');
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
