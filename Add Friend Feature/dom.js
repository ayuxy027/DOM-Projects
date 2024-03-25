var a = document.querySelector("h3");

var b = document.querySelector("#add");

var flag = 0;

add.addEventListener("click", function()
 {
    if (flag == 0) 
    {
        a.innerHTML = "Friends";
        a.style.color = "green";
        b.style.backgroundColor = "#dadada";
        b.style.color = "black";
        b.innerHTML = "Remove";
        flag = 1;
    } 
    else
     {
        var confirmRemove = window.confirm("Are you sure you want to remove this friend?");

        if (confirmRemove)
         {
            a.innerHTML = "Stranger";
            a.style.color = "red";
            b.style.backgroundColor = "";
            b.style.color = "";
            b.innerHTML = "Add Friend";
            flag = 0;
        }
    }
});
