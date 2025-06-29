const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev'); // URL - Uniform Resource Locator
xhr.send(); // Asynchronus code - means js does not wait to finishing of process 
// It sends the request and continuous to the next line
