//imports
import express from "express";
import cors from "cors"
import { db } from "./dbConnection.js";

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

//TODO:  I WANT TO BE ABLE TO READ ALL RETRIEVE DATA SERVER AND DISPLAY IT TO THE USERS

app.get("/guest", async (req, res) =>{

    const query = await db.query(`SELECT name, contact, address, relationship, message FROM guest;`);
    console.log(query);
    res.json(query.rows)
});

//TODO: I WANT THE CLIENT TO BE ABLE TO POST MESSAGES
app.post("/add-guest", (req, res) =>{
    //an element to store the data from new guest
    const newGuest = req.body;

    //database query
    const query = db.query(
        `INSERT INTO guest (name, contact, address, relationship, message) VALUES($1, $2, $3, $4, $5)`,

        [newGuest.formValues.name, newGuest.formValues.contact, newGuest.formValues.address, newGuest.formValues.relationship, newGuest.formValues.message]

    );
    res.json("Data Sent", query);
});

