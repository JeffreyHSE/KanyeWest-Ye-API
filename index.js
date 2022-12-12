let get_quote_text_id = document.getElementById("quote_text");
let get_generate_quote_btn = document.getElementById("generate_btn");
let response;

async function generateData() {
    let kanye_api = await fetch('https://api.kanye.rest', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    response = await kanye_api.json();
}

async function firstQuoteOnStart() {
    await this.generateData();
    get_quote_text_id.innerHTML = response.quote;
}

firstQuoteOnStart();

async function clickButton() {
        get_generate_quote_btn.addEventListener("click", e => {
            location.reload();
    })
}

clickButton();