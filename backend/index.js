import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

const db = await mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin123',
    database:'authforge'
});
console.log('Connected to MySQL database successfully');

const port = 3001;

app.post('/api/signup', async(req,res)=>{
    const {email,name,password} = req.body;
    try {
        if(!email || !name || !password){
            return res.status(400).json({error: 'All fields are required'});
        }
        await db.execute('INSERT INTO signup(email, name, password) VALUES (?, ?, ?)', [email, name, password]);
        res.status(201).json({message: 'User signed up successfully'});

    } catch (error) {
        console.error('Error occurred while signing up user:', error);
        return res.status(500).json({error: 'Internal server error'});
    }

});

app.post('/api/login',async(req,res)=>{
    const {email,password} = req.body;
    try {
        if(!email || !password){
            return res.status(400).json({error: 'Email and password are required'});
        }
        await db.execute('SELECT * FROM signup WHERE email = ? AND password = ?', [email, password]);
        res.status(200).json({message: 'User logged in successfully'});
    } catch (error) {
        console.error('Error occurred while logging in user:', error);
        return res.status(500).json({error: 'Internal server error'});

    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
