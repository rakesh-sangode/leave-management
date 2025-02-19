import connectToDatabase from './db/db.js'
import User from './models/User.js'
import bcrypt from 'bcrypt'
const userRegister = async () => {
  connectToDatabase();
  try {
    const hashPassword = await bcrypt.hash("Rakesh@97", 10)
    const newUser = new User({
      name: "Rakesh",
      email: "rakeshsangode01@gmail.com",
      password: hashPassword,
      role: "admin",
    })
    await newUser.save()
    console.log("User registered successfully")
  } catch (error) {
    console.log(error)
  }
}

userRegister();
