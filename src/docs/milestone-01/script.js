function ChangeCharacter(character)
{
    switch(character)
    {
        case "sarah":
            document.getElementById("img").src = "images/sarah.png";
            document.getElementById("name").innerHTML = "Sarah Jang";
            break;
        case "tanishka":
            document.getElementById("img").src = "images/tanishka.png";
            document.getElementById("name").innerHTML = "Tanishka Indorekar";
            break;
        case "allyson":
            document.getElementById("img").src = "images/allyson.png";
            document.getElementById("name").innerHTML = "Allyson Trinh";
            break;
        case "megan":
            document.getElementById("img").src = "images/megan.png";
            document.getElementById("name").innerHTML = "Megan Wong";
            break;
    }
}
