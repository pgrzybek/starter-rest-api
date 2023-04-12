const User = require('../models/User')
const Post = require('../models/Post')
const fs = require('fs');
const { jwt } = require('../config/jwt');
require('dotenv').config({path: './config/.env'})
const nodemailer = require('nodemailer');

exports.createPost = async (req, res, next) => {
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
  
    const {token} = req.cookies;
    jwt.verify(token, process.env.jwtSecret, {}, async (err,info) => {
      if (err) throw err;
      const {title,summary,content} = req.body;
      const postDoc = await Post.create({
        title,
        summary,
        content,
        cover:newPath,
        author:info.id,
      });
      res.json(postDoc);
    });
}

exports.updatePost = async (req, res, next) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
  
    const {token} = req.cookies;
    jwt.verify(token, process.env.jwtSecret, {}, async (err,info) => {
      if (err) throw err;
      const {id,title,summary,content} = req.body;
      let postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(400).json('you are not the author');
      }
      postDoc = {
        title,
        summary,
        content,
        cover: newPath ? newPath : postDoc.cover,
      }
  
      await Post.updateOne({_id: id}, postDoc);
  
      res.json(postDoc);
    });
}

exports.getPosts = async (req, res, next) => {
    res.json(
        await Post.find()
          .populate('author', ['username'])
          .sort({createdAt: -1})
          .limit(20)
      );
}

exports.getPost = async (req, res, next) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
}

exports.submitContactForm = async(req, res, next) => {
  const { name, email, message } = req.body;

  console.log('submitContactForm home controller user: ',process.env.user)
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
  });

  const mailOptions = {
    from: 'niallhm@gmail.com',
    to: 'niallhm@gmail.com',
    subject: 'New form submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
};
  
