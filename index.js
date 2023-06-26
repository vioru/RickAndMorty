const tableBody = document.querySelector('#table-body');
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const page = document.getElementById("page");
let currentPage = 1;

function AllCharacters(page){
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
  .then(response => response.json())
  .then(data => {
    tableBody.innerHTML = "";
    data.results.forEach(character => {
      const info = `
        <tr>
          <td><img src="${character.image}"  alt="${character.name}" width="80"  /></td>
          <td>${character.name}</td>
          <td>${character.status}</td>
          <td>${character.species}</td>
          <td>${character.gender}</td>
          <td>${character.origin.name}</td>
          <td>${character.location.name}</td>
        </tr>
      `;
      tableBody.innerHTML += info;
    });
  })
  .catch(error => {
    console.error('Error al obtener datos de la API', error);
  });
}

const prevPage = () => {
  if (currentPage > 1 ) {
    currentPage--;
    AllCharacters(currentPage);
    NumberPage(currentPage)
  }
  else{
    currentPage = 42
    AllCharacters(currentPage);
    NumberPage(currentPage)
  }
};

const nextPage = () => {
  if (currentPage < 42) {
    currentPage++;
  AllCharacters(currentPage);
  NumberPage(currentPage)
}
  else{
    currentPage = 1
    AllCharacters(currentPage);
    NumberPage(currentPage)
  }
  
};

function NumberPage(number) {
	const text = "Pagina"+" "+number+ " de 42";
  console.log(text)
	page.innerHTML = text;
}
prevBtn.onclick = prevPage;
nextBtn.onclick = nextPage;

AllCharacters();
NumberPage(currentPage);