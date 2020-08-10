let filterInput = document.querySelector("#filterInput");

filterInput.addEventListener("keyup", (e) => {
  let searchVal = e.target.value.toUpperCase();
  let ul = document.querySelector("#names");
  let li = ul.querySelectorAll("li.collection-item");

  for (const i of li) {
    let a = i.getElementsByTagName("a")[0];

    // console.log(a);
    if (a.innerHTML.toUpperCase().indexOf(searchVal) > -1) {
      i.style.display = "";
    } else {
      i.style.display = "none";
    }
  }
});
