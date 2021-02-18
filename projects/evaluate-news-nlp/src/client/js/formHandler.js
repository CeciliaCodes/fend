function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textInput').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/analyze', {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            articleUrl: formText
        }
        
    })
    .then(response => response.json())
    .then(function (response){
        console.log("response from /analyze", res)
        document.getElementById('results').innerHTML = res.message
        document.getElementById('scoreTag').innerHTML = "Score: " + data.score_tag
        document.getElementById('agreement').innerHTML = "Agreement: " + data.agreement
        document.getElementById('irony').innerHTML = "Irony: " + data.irony
    })
    
}

export { handleSubmit }

