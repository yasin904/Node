
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')

module.exports.signup = async(req,res)=>{
    try{
        const { first_name,last_name,email,password,mobile_No} = req.body

        if(!first_name || !last_name || !email || !password){
            return res.status(400).json({
                message : "All fields are required"
            });
        }

        const user = await User.findOne({email : email});
        if(user){
            return res.status(400).json({
                message : "User already exists"
            });
        }

        // hashing password

        const hashedPassword = await bcrypt.hash(password,10)
        const currentUser = await User.create({
            first_name : first_name,
            last_name : last_name,
            email : email,
            password : hashedPassword,
            mobile_No : mobile_No
        });

        return res.status(200).json({
            message : "User created successfully",
            user : currentUser,
        });


    }
    catch(err){
        return res.status(500).json({
            message : "Internal Server Error",
        })
    }
};

module.exports.getAllUsers = async(req,res) =>{
   try{ 

    const users = await User.find().select("-password")

    return res.status(200).json({
        message : "All users",
        user : users
    })
}
catch(err){
    return res.status(500).json({
        message : "Internal Server Error"
    });
}
};

module.exports.login = async(req,res)=>{
    try{
        const {email , password} = req.body
        console.log(req.body)
        

        // check whether the fields are empty or not
        if( !email ||  !password){
            return res.status(400).json({
                message : "Please enter Email and Password"
            });
        }
        // check whether the email is present in the system or not.

        const user = await User.findOne({email : email});

        if(!user){
            return res.status(400).json({
                message : "User does not exist"
            });
        }
        const isMatch = await bcrypt.compare(password,user.password);
        


        if(!isMatch){
           return res.status(400).json({
                message : "Invalid credentials"
            });

        }

        return res.status(200).json({
            message : "User logged in successfully",
            user : user
        });

    

    }
    catch(err){
        console.log('Error:', err);
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
};

module.exports.deleteUser = async (req,res)=>{
    try{
        const{id} = req.params;
        const user = await User.findByIdAndDelete(id);

        if(!user){
            return res.status(400).json({
                message : "User not found"
            })
        }

        return res.status(200).json({
            message : "user deleted successfully"
        })
}
    catch(err){
        res.status(500).json({
            message : "Internal Server Error"
        })
    }

};