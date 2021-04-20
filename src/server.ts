// Secret code: missaoespacial

import express from "express";

const app = express();

/**
 * GET = Used for searches
 * POST = Used for creations
 * PUT = Used to changes
 * DELETE = Used for deletions
 * PATCH = Used to change one specific information
 */

// response.send() -> Sends a message to the client side
// response.json() -> Sends a json to the client side

app.get('/', (request, response) => {
    return response.json({
        message: "Olá NLW #5",
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "User saved sucessfully",
    })
})

app.listen(3333, () => console.log("Server is running on port 3333"));