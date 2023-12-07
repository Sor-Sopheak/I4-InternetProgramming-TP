const divinfo = document.getElementById('showInfo');

function guess(){
    const inputFirstName = document.getElementById('inputFirstName');

fetch(`https://api.nationalize.io?name=${inputFirstName.value}`)
    .then(async (res) => {
        const data = await res.json();

        divinfo.innerHTML = "";
        for (let i=0; i<data.country.length; i++) {
            divinfo.innerHTML += `<div class="display">
                                    <div id="country_id">${data.country[i].country_id}</div>
                                    <div id="probability">${data.country[i].probability.toFixed(2)}%</div>
                                </div>
                                `;
        }
       
        console.log(data);

    }).catch((err) => {
        console.log(err);
    });
}
