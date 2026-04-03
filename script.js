const scriptURL = 'https://panlabs26.github.io/smart-faculty-register/';

function uploadFile(file) {
  const reader = new FileReader();
  reader.onload = function() {
    const base64Data = reader.result.split(',')[1];
    
    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify({
        fileData: base64Data,
        fileName: file.name,
        mimeType: file.type
      })
    })
    .then(response => response.json())
    .then(data => console.log('Saved!', data))
    .catch(error => console.error('Error!', error));
  };
  reader.readAsDataURL(file);
}
