var a = document.querySelector("h3");

var b = document.querySelector("#add");

var flag = 0;

add.addEventListener("click", function() {
    if (flag == 0) {
        a.innerHTML = "Friends";
        a.style.color = "green";
        flag = 1;
    } else {
        a.innerHTML = "Stranger";
        a.style.color = "red";
        flag = 0;
    }
});

