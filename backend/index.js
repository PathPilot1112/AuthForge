import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = await mysql.createConnection({
    // uri: process.env.DATABASE_URL
  host: "maglev.proxy.rlwy.net",
  port: 16102,
  user: "root",
  password: "aCeEnqdplThwFuQRLVkzDOaDpmadipcK",
  database: "railway",
  ssl: {
    rejectUnauthorized: false,
  },

    // host:'localhost',
    // user:'root',
    // password:'admin123',
    // database:'authforge'
});
console.log('Connected to MySQL database successfully');

const port = 3001;

app.post('/api/signup', async(req,res)=>{
    const {email,name,password} = req.body;
    try {
        if(!email || !name || !password){
            return res.status(400).json({error: 'All fields are required'});
        }
        const[checkUser] = await db.execute('SELECT * FROM signup WHERE email = ?',[email]);
        if(checkUser.length>0){
            return res.status(400).json({error:'User with same mail exists'});
        }
        else{
        await db.execute('INSERT INTO signup(email, name, password) VALUES (?, ?, ?)', [email, name, password]);
        res.status(201).json({message: 'User signed up successfully'});
        }

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
        const [rows] = await db.execute('SELECT * FROM signup WHERE email = ? AND password = ?', [email, password]);
        if(rows.length === 0){
            return res.status(401).json({error: 'Invalid email or password'});
        }
        const token = jwt.sign({email,password},'secret-123',{expiresIn:'2h'});
        res.status(200).json({message: 'User logged in successfully', token});


    } catch (error) {
        console.error('Error occurred while logging in user:', error);
        return res.status(500).json({error: 'Internal server error'});

    }
});

app.get('/api/dashboard',async (req,res)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({error: 'Authorization header missing'});
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token,'secret-123');
        res.status(200).json({message: 'Welcome to the dashboard', user: decoded.email});
    } catch (error) {
        console.error('Error occurred while verifying token:', error);
        return res.status(401).json({error: 'Invalid or expired token'});
    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
