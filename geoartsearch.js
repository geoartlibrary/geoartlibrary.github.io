addEventListener("keyup", e =>{

 if  (e.target.matches("#search-input")){
  if (e.key === "Escape")e.target.value = ""
  document.querySelectorAll("li").forEach(libro =>{

    libro.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    ?libro.classList.remove("filtro")
    :libro.classList.add("filtro")
  })
 }
}) 



