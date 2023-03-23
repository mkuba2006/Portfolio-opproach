let movies = mov;
const container = document.querySelector('.products');

const render = (movies) =>{
    container.innerHTML=``;
    for(let i =0; i<= movies.length;i++){
        const item = document.createElement('li');
        item.className = `item`;
        item.innerHTML=`
        <div class="ram">
            <div class="for_img" id="for_img${movies[i].id}">
                <img src="${movies[i].imga}" img${movies[i].id}/>
            </div>

            <div class="content">
                <h1>${movies[i].name}</h1>
                <h3>${movies[i].date}</h3>
                <select>
                ${movies[i].gat1 ? `<option>${movies[i].gat1}</option>` : ''}
                ${movies[i].gat2 ? `<option>${movies[i].gat2}</option>` : ''}
                ${movies[i].gat3 ? `<option>${movies[i].gat3}</option>` : ''}
                </select>
            </div>
        </div>
        `
        container.appendChild(item);
    }
}


document.onload = render(movies);