function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textInput').value
    Client.checkForName(textInput)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/analyze', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(textInput),
        
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('scoreTag').innerHTML = "Score: " + data.score_tag
        document.getElementById('agreement').innerHTML = "Agreement: " + data.agreement
        document.getElementById('irony').innerHTML = "Irony: " + data.irony
    })
}

export { handleSubmit }

