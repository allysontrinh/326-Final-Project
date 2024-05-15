document.addEventListener("DOMContentLoaded", function() {
    const buttonGrid = document.getElementById("buttonGrid");
    const selectedMouth = document.getElementById("selectedMouth");
    const selectedEyes = document.getElementById("selectedEyes");
    const selectedHair = document.getElementById("selectedHair");
    const selectedEyebrows = document.getElementById("selectedEyebrows");
    const selectedClothes = document.getElementById("selectedClothes");
    const lips = document.getElementById("lips");
    const eyes = document.getElementById("eyes");
    const hair = document.getElementById("hair");
    const brows = document.getElementById("brows");
    const clothes = document.getElementById("clothes");
    const exit = document.getElementById("exit");

    let currentOption = null; // Track the currently selected option

    exit.addEventListener("click", () =>{
        window.location.href = './room.html';
    });

    // Function to create buttons for each option
    function createLipsButtons() {
        clearButtons(); // Clear existing buttons
        const imagePaths = [
            "./images/character_parts/Mouths/mouth1.png",
            "./images/character_parts/Mouths/mouth2.png",
            "./images/character_parts/Mouths/mouth3.png",
            "./images/character_parts/Mouths/mouth4.png",
            "./images/character_parts/Mouths/mouth5.png",
            "./images/character_parts/Mouths/mouth6.png",
            "./images/character_parts/Mouths/mouth7.png",
            "./images/character_parts/Mouths/mouth8.png",
            "./images/character_parts/Mouths/mouth9.png",
            "./images/character_parts/Mouths/mouth10.png",
            "./images/character_parts/Mouths/mouth11.png",
            "./images/character_parts/Mouths/mouth12.png",
            "./images/character_parts/Mouths/mouth13.png",
            "./images/character_parts/Mouths/mouth14.png",
            "./images/character_parts/Mouths/mouth15.png",
            "./images/character_parts/Mouths/mouth16.png",
            "./images/character_parts/Mouths/mouth17.png",
            "./images/character_parts/Mouths/mouth18.png",
            "./images/character_parts/Mouths/mouth19.png"
        ];

        // Create and append buttons with images
        imagePaths.forEach((path, index) => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image " + (index + 1);
            button.addEventListener("click", function() {
                selectedMouth.src = path;
            });
            button.appendChild(img);
            buttonGrid.appendChild(button);
        });
    }

    function createEyesButtons() {
        clearButtons();
        const imagePaths = [
            "./images/character_parts/Eyes/eyes1.png",
            "./images/character_parts/Eyes/eyes2.png",
            "./images/character_parts/Eyes/eyes3.png",
            "./images/character_parts/Eyes/eyes4.png",
            "./images/character_parts/Eyes/eyes5.png",
            "./images/character_parts/Eyes/eyes6.png",
            "./images/character_parts/Eyes/eyes7.png",
            "./images/character_parts/Eyes/eyes8.png",
            "./images/character_parts/Eyes/eyes9.png"
        ];

        // Create and append buttons with images
        imagePaths.forEach((path, index) => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image " + (index + 1);
            button.addEventListener("click", function() {
                selectedEyes.src = path;
            });
            button.appendChild(img);
            buttonGrid.appendChild(button);
        });
    }

    function createHairButtons() {
        clearButtons();
        const imagePaths = [
            "./images/character_parts/Hair/hair1.png",
            "./images/character_parts/Hair/hair2.png",
            "./images/character_parts/Hair/hair3.png",
            "./images/character_parts/Hair/hair4.png",
            "./images/character_parts/Hair/hair5.png",
            "./images/character_parts/Hair/hair6.png",
            "./images/character_parts/Hair/hair7.png",
            "./images/character_parts/Hair/hair8.png",
            "./images/character_parts/Hair/hair9.png",
            "./images/character_parts/Hair/hair10.png",
            "./images/character_parts/Hair/hair11.png",
            "./images/character_parts/Hair/hair12.png"
        ];

        // Create and append buttons with images
        imagePaths.forEach((path, index) => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image " + (index + 1);
            button.addEventListener("click", function() {
                selectedHair.src = path;
            });
            button.appendChild(img);
            buttonGrid.appendChild(button);
        });
    }   

    function createBrowsButtons() {
        clearButtons(); // Clear existing buttons
        const imagePaths = [
            "./images/character_parts/Eyebrows/eyebrows1.png",
            "./images/character_parts/Eyebrows/eyebrows2.png",
            "./images/character_parts/Eyebrows/eyebrows3.png",
            "./images/character_parts/Eyebrows/eyebrows4.png",
            "./images/character_parts/Eyebrows/eyebrows5.png",
            "./images/character_parts/Eyebrows/eyebrows6.png",
            "./images/character_parts/Eyebrows/eyebrows7.png",
            "./images/character_parts/Eyebrows/eyebrows8.png"
        ];

        // Create and append buttons with images
        imagePaths.forEach((path, index) => {
            const button = document.createElement("button");
            const img = document.createElement("img");
            img.src = path;
            img.alt = "Image " + (index + 1);
            button.addEventListener("click", function() {
                selectedEyebrows.src = path;
            });
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
            button.addEventListener("click", function() {
                selectedClothes.src = path;
            });
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

    // Create a new database instance
    let db = new PouchDB('saved_wardrobes');

    async function loadWardrobe() {
        try {
            const result = await db.allDocs({ include_docs: true, descending: true, limit: 1 });
            console.log("Load result:", result);
            if (result.rows.length > 0) {
                const doc = result.rows[0].doc;
                console.log("Loaded document:", doc);
                selectedMouth.src = doc.mouth;
                selectedEyes.src = doc.eyes;
                selectedHair.src = doc.hair;
                selectedEyebrows.src = doc.eyebrows;
                selectedClothes.src = doc.clothes;
            } else {
                console.log("No documents found.");
            }
        } catch (err) {
            console.error("Error loading wardrobe:", err);
        }
    }

    // Function to save selected items to the database
    async function saveSelectedItems() {
        const selectedItems = {
            _id: new Date().toISOString(),
            mouth: selectedMouth.src,
            eyes: selectedEyes.src,
            hair: selectedHair.src,
            eyebrows: selectedEyebrows.src,
            clothes: selectedClothes.src
        };

        try {
            const response = await db.put(selectedItems);
            console.log("Items saved successfully:", response);
        } catch (error) {
            console.error("Error saving items:", error);
        }
    }

    async function clearSelectedItems() {
        selectedMouth.src = '';
        selectedEyes.src = '';
        selectedHair.src = '';
        selectedEyebrows.src = '';
        selectedClothes.src = '';

        const selectedItems = {
            _id: new Date().toISOString(),
            mouth: selectedMouth.src,
            eyes: selectedEyes.src,
            hair: selectedHair.src,
            eyebrows: selectedEyebrows.src,
            clothes: selectedClothes.src
        };

        try {
            const response = await db.put(selectedItems);
            console.log("Items saved successfully:", response);
        } catch (error) {
            console.error("Error saving items:", error);
        }
    }

    // Event listeners
    document.getElementById("save").addEventListener("click", saveSelectedItems);
    document.getElementById("reset").addEventListener("click", clearSelectedItems);
    loadWardrobe();
});