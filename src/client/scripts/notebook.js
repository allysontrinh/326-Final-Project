let db = null;
const create = document.getElementById('create');
const destroy = document.getElementById('destroy');
const dump = document.getElementById('dump');
const save = document.getElementById('save');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const entryName = document.getElementById('entry-name');
const dropdown = document.getElementById('dropdown')

window.addEventListener('load', async (event) => {
    // Create a new PouchDB instance
    db = new PouchDB('notebook');
  
    try {
      // Get all documents in the database
      const result = await db.allDocs({
        include_docs: true,
        attachments: true,
      });
      console.log(result)
  
    //   // Display the documents in the output element
    //   result.rows.forEach((row) => {
    //     const id = row.doc._id;
    //     const value = row.doc.value;
    //     page1.innerHTML = page1.innerHTML + '<br>' + id + ' : ' + value;
    //   });
    } catch (err) {
      console.log(err);
    }
  });

  destroy.addEventListener('click', async (event) => {
    // Destroy the database
    const res = await db.destroy();
    page1.innerHTML = ''
    page2.innerHTML = ''
  });

  dump.addEventListener('click', async (event) => {
    //remove all documents 
    db.allDocs().then(function (result) {
        return Promise.all(result.rows.map(function (row) {
          return db.remove(row.id, row.value.rev);
        }));
    })

      //Remove dropdown options
      while (dropdown.options.length > 0) {
        dropdown.remove(0);
    }
  })
  

create.addEventListener('click', () =>{
    page1.innerHTML = ''
    page2.innerHTML = ''

})


dropdown.addEventListener('change', function() {
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;

    db.get(selectedOption).then(res => {
        page1.value = res.page1
        page2.value = res.page2
    })
    console.log('Selected option:', selectedOption);
});


save.addEventListener('click', async (event) => {
    try {
        //save notebook entries
        const entry1 = page1.value;
        const entry2 = page2.value;
        await db.post({
            _id: entryName.value,
            page1: entry1,
            page2: entry2
        });

        //Creates new dropdown option when "save-button" is clicked 
        const dropdown = document.getElementById('dropdown');
        const newOption = document.createElement('option');
        newOption.value = entryName.value;
        newOption.textContent = entryName.value;
        dropdown.appendChild(newOption);
    }
    catch (error){
        alert("Duplicate entry name. Please pick a different name.")
    }
})