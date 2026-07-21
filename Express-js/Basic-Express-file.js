const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, 
                   and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);
/*The server has been created and run successfully.
If the server does not start, check the error message carefully and resolve the issue.
After a successful run, opening http://localhost:3000 in the browser will display “Cannot GET /”.
This happens because no routes have been configured in the application yet.*/
