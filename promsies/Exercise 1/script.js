document.addEventListener("DOMContentLoaded", () => {
    const triggerPromiseButton = document.getElementById("triggerPromise");
    const triggerRejectionCheckbox = document.getElementById("triggerRejection");
    const messageElement = document.getElementById("message");
  
    triggerPromiseButton.addEventListener("click", () => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (triggerRejectionCheckbox.checked) {
            reject("The Promise has been rejected!");
          } else {
            resolve("The Promise has been resolved!");
          }
        }, 1000);
      });
  
      promise
        .then(message => {
          messageElement.textContent = message;
          messageElement.classList.add("resolved");
          messageElement.classList.remove("rejected");
        })
        .catch(error => {
          messageElement.textContent = error;
          messageElement.classList.add("rejected");
          messageElement.classList.remove("resolved");
        });
    });
  });
  