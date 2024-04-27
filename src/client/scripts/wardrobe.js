document.addEventListener("DOMContentLoaded", function() {
    const buttonGrid = document.getElementById("buttonGrid");
    const lips = document.getElementById("lips");
    const eyes = document.getElementById("eyes");
    const nose = document.getElementById("nose");
    const hair = document.getElementById("hair");
    const brows = document.getElementById("brows");
    const clothes = document.getElementById("clothes");
    const headwear = document.getElementById("headwear");

    let currentOption = null; // Track the currently selected option

    // Function to create buttons for each option
    function createLipsButtons() {
        clearButtons(); // Clear existing buttons
        const imagePaths = [
            "/src/client/images/character_parts/Mouths/mouth1.png",
            "/src/client/images/character_parts/Mouths/mouth2.png",
            "/src/client/images/character_parts/Mouths/mouth3.png",
            "/src/client/images/character_parts/Mouths/mouth4.png",
            "/src/client/images/character_parts/Mouths/mouth5.png",
            "/src/client/images/character_parts/Mouths/mouth6.png",
            "/src/client/images/character_parts/Mouths/mouth7.png",
            "/src/client/images/character_parts/Mouths/mouth8.png",
            "/src/client/images/character_parts/Mouths/mouth9.png",
            "/src/client/images/character_parts/Mouths/mouth10.png",
            "/src/client/images/character_parts/Mouths/mouth11.png",
            "/src/client/images/character_parts/Mouths/mouth12.png",
            "/src/client/images/character_parts/Mouths/mouth13.png",
            "/src/client/images/character_parts/Mouths/mouth14.png",
            "/src/client/images/character_parts/Mouths/mouth15.png",
            "/src/client/images/character_parts/Mouths/mouth16.png",
            "/src/client/images/character_parts/Mouths/mouth17.png",
            "/src/client/images/character_parts/Mouths/mouth18.png",
            "/src/client/images/character_parts/Mouths/mouth19.png"
        ];

        // Create and append buttons with images
        imagePaths.forEach((path, index) => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image " + (index + 1);
            button.appendChild(img);
            buttonGrid.appendChild(button);
        });
    }

    function createEyesButtons() {
        clearButtons();
        const imagePaths = [
            "/src/client/images/character_parts/Eyes/eyes1.png",
            "/src/client/images/character_parts/Eyes/eyes2.png",
            "/src/client/images/character_parts/Eyes/eyes3.png",
            "/src/client/images/character_parts/Eyes/eyes4.png",
            "/src/client/images/character_parts/Eyes/eyes5.png",
            "/src/client/images/character_parts/Eyes/eyes6.png",
            "/src/client/images/character_parts/Eyes/eyes7.png",
            "/src/client/images/character_parts/Eyes/eyes8.png",
            "/src/client/images/character_parts/Eyes/eyes9.png"
        ];

        // Create and append buttons with images
        imagePaths.forEach((path, index) => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image " + (index + 1);
            button.appendChild(img);
            buttonGrid.appendChild(button);
        });
    }

    function createHairButtons() {
        clearButtons();
        const imagePaths = [
            "/src/client/images/character_parts/Hair/hair1.png",
            "/src/client/images/character_parts/Hair/hair2.png",
            "/src/client/images/character_parts/Hair/hair3.png",
            "/src/client/images/character_parts/Hair/hair4.png",
            "/src/client/images/character_parts/Hair/hair5.png",
            "/src/client/images/character_parts/Hair/hair6.png",
            "/src/client/images/character_parts/Hair/hair7.png",
            "/src/client/images/character_parts/Hair/hair8.png",
            "/src/client/images/character_parts/Hair/hair9.png",
            "/src/client/images/character_parts/Hair/hair10.png",
            "/src/client/images/character_parts/Hair/hair11.png",
            "/src/client/images/character_parts/Hair/hair12.png"
        ];

        // Create and append buttons with images
        imagePaths.forEach((path, index) => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image " + (index + 1);
            button.appendChild(img);
            buttonGrid.appendChild(button);
        });
    }   

    function createBrowsButtons() {
        clearButtons(); // Clear existing buttons
        const imagePaths = [
            "/src/client/images/character_parts/Eyebrows/eyebrows1.png",
            "/src/client/images/character_parts/Eyebrows/eyebrows2.png",
            "/src/client/images/character_parts/Eyebrows/eyebrows3.png",
            "/src/client/images/character_parts/Eyebrows/eyebrows4.png",
            "/src/client/images/character_parts/Eyebrows/eyebrows5.png",
            "/src/client/images/character_parts/Eyebrows/eyebrows6.png",
            "/src/client/images/character_parts/Eyebrows/eyebrows7.png",
            "/src/client/images/character_parts/Eyebrows/eyebrows8.png"
        ];

        // Create and append buttons with images
        imagePaths.forEach((path, index) => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image " + (index + 1);
            button.appendChild(img);
            buttonGrid.appendChild(button);
        });
    }

    function createClothesButtons() {
        clearButtons(); // Clear existing buttons
        const imagePaths = [
            "./images/character_parts/Clothes/tops/top1.png",
            "./images/character_parts/Clothes/tops/top2.png",
            "./images/character_parts/Clothes/tops/top3.png",
            "./images/character_parts/Clothes/tops/top4.png",
            "./images/character_parts/Clothes/bottoms/bottom1.png",
            "./images/character_parts/Clothes/bottoms/bottom2.png",
            "./images/character_parts/Clothes/bottoms/bottom3.png"
        ];

        // Create and append buttons with images
        imagePaths.forEach((path, index) => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image " + (index + 1);
            button.appendChild(img);
            buttonGrid.appendChild(button);
        });
    }


    // Function to clear existing buttons
    function clearButtons() {
        while (buttonGrid.firstChild) {
            buttonGrid.removeChild(buttonGrid.firstChild);
        }
    }

    // Event listeners
    lips.addEventListener("click", function() {
        if (currentOption !== "lips") {
            currentOption = "lips";
            createLipsButtons();
        }
    });

    eyes.addEventListener("click", function() {
        if (currentOption !== "eyes") {
            currentOption = "eyes";
            createEyesButtons();
        }
    });

    hair.addEventListener("click", function() {
        if (currentOption !== "hair") {
            currentOption = "hair";
            createHairButtons();
        }
    })

    brows.addEventListener("click", function() {
        if (currentOption !== "brows") {
            currentOption = "brows";
            createBrowsButtons();
        }
    });

    clothes.addEventListener("click", function() {
        if (currentOption !== "clothes") {
            currentOption = "clothes";
            createClothesButtons();
        }
    });
});
