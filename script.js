//let x = "https://rickandmortyapi.com/api/character/?page="

(readApi = async (base ="https://rickandmortyapi.com/api/character/?page=", pag="1") => {
    const url = base + pag;
    fetch(url)
        .then ((resp) => resp.json())
        .then (function (data){
            console.log(data);
            divRes = document.querySelector("#resultado");
            divRes.innerHTML=""
            data.results.map(item=>{
                divItem=document.createElement('div')
                divItem.innerHTML=`
                <div class="card" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><b>${item.species} - ${item.gender}</b></p>
                        <p class="card-text"><b>Status:</b> ${item.status}</p>
                        <p class="card-text"><b>Location:</b> ${item.location.name}</p>
                    </div>
                </div>
                `
                divRes.appendChild(divItem)
            });
        })
        .catch(function(error) {
            console.log(error);
        });
})()