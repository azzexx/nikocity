const searchInput = document.getElementById('searchInput');
const userNames = document.querySelectorAll('.name');

searchInput.addEventListener('keyup', (e) => {
  let searchQuery = e.target.value.toLowerCase();
  for (let i = 0; i < userNames.length; i++) {
    let currentName = userNames[i].textContent.toLowerCase();
    if (currentName.includes(searchQuery)) {
      userNames[i].style.display = "block";
    } else {
      userNames[i].style.display = "none";
    }
  }
});