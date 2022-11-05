function startSearch() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search");
  li = ul.getElementsByTagName("a");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h1")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}