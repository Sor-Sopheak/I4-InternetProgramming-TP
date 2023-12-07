function addBook(){

    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        let output = "";

        myJson.map(function(photo){
            output += `
                <div class="display">
                    <img src="${photo.thumbnailUrl}"}
                    <div class="content">
                        <p>${photo.title}</p>
                        <p>AlbumId: ${photo.albumId} riel</p>
                        <p>Category: ${photo.id}</p>
                        <a href="./TP05_5_view.html?id=${photo.id}" target="_blank">see</a>                
                    </div>
                </div>
            `;

            const seeUrl = photo['url'];
            const searchParams = new URLSearchParams(seeUrl);

            console.log(searchParams.get('url') == "${photo.url}");
        });
            document.getElementById('list_book').innerHTML = output;
            console.log(myJson);
        }).catch((err) => {
            console.log(err);
    });
} 

addBook();



