const feedbackForm = document.querySelector(".feedback-form");

function handleSubmit(event) {
  event.preventDefault();
    const email = feedbackForm.elements.email.value.trim();
    const message = feedbackForm.elements.message.value.trim();
  
    if (email === "" || message === "") {
      alert('All form fields must be filled in');
    } else {
      const theFeedback = {
        email: email,
        message: message
      };
        localStorage.setItem('feedback-form-state', JSON.stringify(theFeedback));
        console.log(theFeedback);
        feedbackForm.reset();
    }
}

feedbackForm.addEventListener('input', function () {
  const email = feedbackForm.elements.email.value.trim();
  const message = feedbackForm.elements.message.value.trim();

  const theFeedback = {
    email: email,
    message: message
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(theFeedback));
});

document.addEventListener('DOMContentLoaded', function () {
      const storedData = localStorage.getItem('feedback-form-state');

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        feedbackForm.elements['email'].value = parsedData.email || '';
        feedbackForm.elements['message'].value = parsedData.message || '';
      } else {
        feedbackForm.reset();
      }
});

feedbackForm.addEventListener("submit", handleSubmit);