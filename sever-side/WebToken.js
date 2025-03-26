import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const ticketValidate = (req, res, next) => {
	try {
		const { authorization } = req.headers;
		if (!authorization) {
			return res.status(403).json({ message: "Unkown / Invalid Token" });
		}
		const authSplit = authorization.split(' ');
		const token = authSplit[1];

		console.log("Verify", jwt.verify(token, process.env.JWT_SECRET));
		console.log(token);
		next();
	}
	catch (error) {
		console.error("Error Occured at authenticate middle ware", error.message);
		return res.status(403).json({ message: "validation error!" });
	}
}


app.post('/login', (req, res) => {
	try {
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({ message: "You have to enter both credentials!" })
		}

		if (username === 'william') {
			if (password === '1234') {

				const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1d' })
				return res.status(200).json({ message: "Logged In Sucessfully!", token })
			}
			else {
				return res.status(400).json({ message: "Wrong Credentials" });
			}
		}
		else {
			return res.status(400).json({ message: "Wrong Credentials" })
		}
	}
	catch (error) {
		console.log("Error Occured!", error.message);
		return res.status(500).json({ message: "Internal Server Error!" });
	}
});

app.get('/authenticated/userInformations', ticketValidate, (req, res) => {
	res.status(200).
		json({ message: "User Info Retrieved Sucessfully!", amount: 4000, ph: '09966650850' });
});



app.listen(8080, () => {
	console.log("PORT runnng on 8080!");
})


