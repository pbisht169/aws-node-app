const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res, next) =>{
    res.status(200).json({
        msg: "Everything is good"
    })
})

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log('Server running at ', PORT);
})