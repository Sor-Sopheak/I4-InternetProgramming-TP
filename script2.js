const nameEle = document.getElementById("name");
const genderEle = document.getElementById('gender');
const probabilityEle = document.getElementById('probability');

function guess(){
    nameEle.innerHTML = "";
    genderEle.innerHTML = "";
    probabilityEle.innerHTML = "";
    const inputNameEle = document.getElementById("inputName").value;

    fetch(`https://api.genderize.io/?name=${inputNameEle}`)
    .then(async (res) =>{
        const data = await res.json();

        nameEle.innerHTML = data['name'];
        genderEle.innerHTML = data['gender'];
        probabilityEle.innerHTML = data['probability']*100 + `%`;
        
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
}