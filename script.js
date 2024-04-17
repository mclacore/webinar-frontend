function submitQuery() {
  var input = document.getElementById('inputBox').value;
  var n = parseInt(input);
  if (isNaN(n) || n < 1) {
      displayError('Please enter a valid integer greater than 0');
      return;
  }

  const backendEndpoint = '%%BACKEND_ENDPOINT%%';
  fetch(`https://${backendEndpoint}/fizzbuzz?n=${n}`, {
    method: 'GET'
  }).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
      displayResults(data);
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      displayError(error.message);
  });
}

function displayResults(data) {
  const resultSection = document.getElementById('resultSection');
  resultSection.innerHTML = '';

  data.result.forEach(item => {
      const para = document.createElement('p');
      para.textContent = item;
      resultSection.appendChild(para);
  });
}

function displayError(message) {
  const resultSection = document.getElementById('resultSection');
  resultSection.innerHTML = `<p style="color: red;">${message}</p>`;
}
