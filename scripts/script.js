document.getElementById("confetti").addEventListener('click', function () {

    confetti({
        particleCount: 100,
        spread: 70,
        origin: {
            y: 0.6
        }
    });
});


const themeToggle = document.querySelector("[data-theme]");
const sideBar_element = document.querySelector(".sideBar");
const like_element = document.querySelector(".link-like");
themeToggle.addEventListener("click", () => {
    themeToggle.querySelector("i").classList.toggle("fa-toggle-on");
    sideBar_element.classList.toggle("dark");
    document.querySelector("body").classList.toggle("dark");
});

like_element.addEventListener("click", () => {
    like_element.querySelector(".fa-thumbs-up").classList.add("like-anim");
    like_element.querySelector(".fa-thumbs-up").classList.toggle("like-color");

    setTimeout(() => {
        like_element.querySelector(".fa-thumbs-up").classList.remove("like-anim");
    }, 600);
});

//Dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}