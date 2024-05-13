let db = new PouchDB('notebook');
const create = document.getElementById('create');
const destroy = document.getElementById('destroy');
const dump = document.getElementById('dump');
const save = document.getElementById('save');
const room = document.getElementById('room')
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const entryName = document.getElementById('entry-name');
const dropdown = document.getElementById('dropdown')
let selectedOption = null

/**
 * Prints all documents in the database. Used for debugging purposes.
 */
async function print(){
  const result = await db.allDocs({
    include_docs: true,
    attachments: true,
  });
  result.rows.forEach((row) => {
    console.log(row.doc._id)
  });
}

/**
 * Retrieves all documents from the database. 
 * @returns {Array} - All documents from db
 */
function loadAllDocuments() {
  return db.allDocs({include_docs: true })
    .then(function (result) {
      return result.rows.map(function (row) {
      return row.doc;
    });
    })
}

/**
 * Populates the dropdown menu with the options from the database.
 * @param {Array} documents - Saved documents from the database 
 */
function populateDropdownOptions(documents) {
  documents.forEach(function (doc) {
    // Add options for each document except for currPage, which stores the
    // current page that the user was on previously before reloading
    if (doc._id !== "currPage"){
      createDropdownOption(doc._id)
    }
  });
}

/**
 * Creates a single dropdown menu option given a desired name for it. 
 * @param {string} name 
 */
function createDropdownOption(name){
  const newOption = document.createElement('option');
  newOption.value = name;
  newOption.textContent = name;
  dropdown.appendChild(newOption);
}

/**
 * Adds an event listener to the entire window. If reloaded, all documents will
 * be loaded. Then, the previous dropdown menu will be repopulated with the options
 * saved from the database. It sets the textareas to the previous values that the user was looking at
 * before the window reloaded. 
 */
window.addEventListener('load', async (event) => {
  print()
  loadAllDocuments()
  .then(function (documents){
    populateDropdownOptions(documents);
    //restores page with previous values that user was looking at
  })

  db.get("currPage")
  .then(function (doc){
    page1.value = doc.page1 || ''
    page2.value = doc.page2 || ''
    selected.value = ''
    // Still need to figure out how to make it load the option it selected before 
    // page reload
    // entryName.value = ''
    // console.log(doc.entryName)
    // let newOpt = dropdown.querySelector("option[value='" + doc.entryName + "']")
    // newOpt.selected = true;
  })
  .catch(function(err){
    if (err.name === 'not_found'){
      db.put({
        _id: "currPage",
        page1: "",
        page2: "",
        selected: ""
      })
    }
  })
});

  /**
   * Destroys the current selected option from the dropdown menu and database 
   * when the delete button is clicked. It also resets the textareas. 
   */
  destroy.addEventListener('click', async (event) => {
    let option = dropdown.options[dropdown.selectedIndex].textContent
    if (option !== ''){
      for (var i = 0; i < dropdown.options.length; i++) {
        // Check if the textContent of the option matches the name to be removed
        if (dropdown.options[i].textContent === option) {
            // Remove the option
            dropdown.remove(i);
            break;
        }
      }
      await db.get(option).then(function(doc) {
        return db.remove(doc);})
    }
    page1.value = ''
    page2.value = ''
    entryName.value = ''
  });

  /**
   * When "delete all entries" button is clicked, all documents are removed from the database
   * and all dropdown options are deleted. All textareas are also reset. 
   */
  dump.addEventListener('click', async (event) => {
    //remove all documents from db
    db.allDocs().then(function (result) {
        return Promise.all(result.rows.map(function (row) {
          return db.remove(row.id, row.value.rev);
        }));
    })

    //Remove dropdown options
    while (dropdown.options.length > 0) {
      dropdown.remove(0);
    }
    //Reset textareas 
    page1.value = ''
    page2.value = ''
    entryName.value = ''
  })
  
/**
 * Provides a blank page for the user to type in. 
 * Saves this page as the page the user last saw. 
 */
create.addEventListener('click', async () =>{
    page1.value = ''
    page2.value = ''
    entryName.value = ''
    await saveContentToDatabase()
})

/**
 * When a dropdown option is clicked, the text associated with that entry will be retrieved and
 * displayed from the database. Saves this page as the page the user last saw. 
 */
dropdown.addEventListener('change', async function() {
    selectedOption = dropdown.options[dropdown.selectedIndex].value;
    //Displays saved text on notebook
    db.get(selectedOption).then(res => {
        page1.value = res.page1
        page2.value = res.page2
    })
    //Saves current text as currPage, so when user exits, they will see the last page they left off on
    await saveContentToDatabase()
});

/**
 * Saves the current textareas into the database with _id = entryName. Also creates a new dropdown menu
 * option for this entry. Saves this page as the page the user last saw. Doesn't allow duplicate entryNames.
 */
save.addEventListener('click', async (event) => {
  //If there is no entryname but there is a dropdown option selected, just save to that option
  let selectedOption = dropdown.options[dropdown.selectedIndex]
  const entry1 = page1.value;
  const entry2 = page2.value;

  if (entryName.value === '' && selectedOption !== undefined){
    await db.get(selectedOption.value)
    .then(function(doc){
      doc.page1 = entry1
      doc.page2 = entry2
      return db.put(doc);
    })
  }
  else {
    await db.post({
      _id: entryName.value,
      page1: entry1,
      page2: entry2
    });
    //Creates new dropdown option when "save-button" is clicked 
    createDropdownOption(entryName.value)

    //Change the current selected dropdown option to that^
    let newOpt = dropdown.querySelector("option[value='" + entryName.value + "']")
    newOpt.selected = true;
  
    await saveContentToDatabase()
  
    //Clear entryName
    entryName.value = ''
  }
})

/**
 * Updates the currPage document in the database with the current textarea content. 
 */
async function saveContentToDatabase() {
  await db.get("currPage")
    .then(function(doc) {
      doc.entryName = entryName.value
      doc.page1 = page1.value
      doc.page2 = page2.value 
      return db.put(doc);
    })
}

/**
 * Whenever a user types in the textareas, we want to save the content into currPage in case
 * they reload or navigate off the page. When they come back, this content will be reloaded. 
 */
page1.addEventListener("keyup", saveContentToDatabase)
page2.addEventListener("keyup", saveContentToDatabase)

/**
 * Button to go back to room
 */
room.addEventListener("click", () => {
  window.location.href = './room.html'; 
})