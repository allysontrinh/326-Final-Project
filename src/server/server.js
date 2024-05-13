const express = require('express');
const app = express();

/* app.get({

});

app.post({

})

app.put({

})

app.delete({

})
 */
const port = 3000; // You can use any available port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});