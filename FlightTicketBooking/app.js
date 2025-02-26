const {MongoClient} = require("mongodb");
const express = require("express");
const cors = require("cors");
const uri = "mongodb://127.0.0.1:27017";
const app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.get('/getData', async function (request,response) {
    try{
        const client = await MongoClient.connect(uri);
        const dbo = client.db("MovieTicketBooking");
        const documents = await dbo.collection("bookingDetails").find().toArray();
        response.send(documents);
        client.close();
    }catch(error){
        response.status(500).json({error: error.message});
    }
});
app.post('/registerCustomers',async function(request,response){
    try{
        console.log(request.body);
        
        const client = await MongoClient.connect(uri);
        const dbo = client.db("MovieTicketBooking");
        const data = {
            "Name":request.body.Name,
            "NumberOfTickets":parseInt(request.body.NumberOfTickets,10)||0,
            "SeatType":request.body.SeatType,
            "ShowName":request.body.ShowName,
            "ShowTime":request.body.ShowTime
        };
        const result = await dbo.collection("bookingDetails").insertOne(data);
        response.send({message: "Record Inserted",result});
        client.close();
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
});

app.listen(3000);
console.log(`Server Started: http://127.0.0.1:3000`);
