document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.submit-button');
    const rateCard = document.querySelector('.rate-card');
    const resultCard = document.querySelector('.result-card');
    const resultElement = document.querySelector('.result');

    submitButton.addEventListener('click', function() {
      rateCard.style.display = 'none';
      resultCard.style.display = 'block';
      const selectedRate = document.querySelector('input[name="rate"]:checked').value;
      resultElement.textContent = `You selected ${selectedRate} out of 5`;
    });


  });