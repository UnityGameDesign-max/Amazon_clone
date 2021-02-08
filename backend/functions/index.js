/* eslint-disable */ 

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IGloHBskh1aSg7k3f2HDbCPVtEKBODnCVtQjuCs1TGBQhFpjKR9yw9F6Gjes9ms606vGPumRGVeDlszItGR2W1100HrsLZGJq')


// API


// API Config
const app = express();


// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());            // Allows us to send data in json format


// API routes
app.get('/', (req, res) => res.status(200).send('Hello Express!'));

app.post('/create_payments', async (req, res) => {
    const total = req.query.Total;

    console.log('Payment request of: ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
      });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})


// Listen Command
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/e-clone-43fb1/us-central1/api
