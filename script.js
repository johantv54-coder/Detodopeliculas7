
const movies=[
["Dune: Part Two","2024","https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80"],
["The Batman","2022","https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=700&q=80"],
["Interstellar","2014","https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=80"],
["Avengers","2019","https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=700&q=80"],
["The Godfather","1972","https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=80"],
["Oppenheimer","2023","https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80"]
];
const series=[
["Stranger Things","Serie","https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80"],
["The Last of Us","Serie","https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80"],
["Dark","Serie","https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80"],
["Breaking Bad","Serie","https://images.unsplash.com/photo-1518930259200-8f3b7f2b1f3b?auto=format&fit=crop&w=700&q=80"]
];
function cards(data,target){
 document.getElementById(target).innerHTML=data.map(x=>`<article class="card"><div class="poster" style="background-image:url('${x[2]}')"></div><div class="card-info"><div class="card-title">${x[0]}</div><div class="meta">${x[1]}</div></div></article>`).join("");
}
cards(movies,"grid"); cards(series,"seriesgrid");
function buscar(){
 const q=document.getElementById("search").value.trim().toLowerCase();
 if(!q){cards(movies,"grid");return}
 const found=movies.filter(x=>x[0].toLowerCase().includes(q));
 document.getElementById("grid").innerHTML=found.length?found.map(x=>`<article class="card"><div class="poster" style="background-image:url('${x[2]}')"></div><div class="card-info"><div class="card-title">${x[0]}</div><div class="meta">${x[1]}</div></div></article>`).join(""):`<p style="color:#aaa">No encontramos resultados para “${q}”.</p>`;
 document.getElementById("peliculas").scrollIntoView({behavior:"smooth"});
}
document.getElementById("search").addEventListener("keydown",e=>{if(e.key==="Enter")buscar()});
