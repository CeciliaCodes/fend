function handleSubmit(event) {
    // event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textInput').value
    Client.checkForText(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/analyze', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            articleUrl: formText
        }
    })
    .then(res => res.json())
    .then(function(res) {
        console.log("response from /analyze", res);
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
