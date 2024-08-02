const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  let numbers = data.filter(item => !isNaN(item));
  let alphabets = data.filter(item => isNaN(item));
  let highestAlphabet = alphabets.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? -1 : 1)[0] || "";

  res.json({
    is_success: true,
    user_id: "matha_ujwala_29062004", // Use your full name and DOB
    email: "ujwala_m@srmap.edu.in",
    roll_number: "AP21110011366", // Replace with actual roll number
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: [highestAlphabet]
  });
});

app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
