//imports
import express from "express";
import cors from "cors"

//start express
const app = express();

//configure express with JSON and cors
app.use(express.json());
app.use(cors());

//set up ports
const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

//set up root routes
//TODO: I want to read a welcome message in the root route

app.get("/", (req, res) =>{
    res.json({message: "Welcome to the Server. Stay cool!"});
});


app.post("/add-guest", (req, res) =>{
    const newGuest = re
})
