function submitQuery() {
  var input = document.getElementById('inputBox').value;
  var n = parseInt(input);
  if (isNaN(n) || n < 1) {
      displayError('Please enter a valid integer greater than 0');
      return;
  }

  fetch(`http://localhost:8081/fizzbuzz?n=${n}`, {
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
  resultSection.innerHTML = ''; // Clear previous results

  // Render each result as a paragraph
  data.result.forEach(item => {
      const para = document.createElement('p');
      para.textContent = item;
      resultSection.appendChild(para);
  });
}

function displayError(message) {
  const resultSection = document.getElementById('resultSection');
  resultSection.innerHTML = `<p style="color: red;">${message}</p>`; // Display error message in red
}
