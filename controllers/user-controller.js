const User = require("../model/User");

const getAllUsers = async(req, res ,next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
     }

    if(!users) {
         return res.status(404).json({message:"No user found"});
     }
     return res.status(200).json({users});
};

const getUserById = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message:"No User found" });
    }
    return res.status(200).json({ user });
};

const addUser = async (req, res, next) => {
    const{Name, Class, PhoneNumber} = req.body;
    let user;
    try {
        user = new User({
            Name,
            Class,
            PhoneNumber
        });
        await user.save();
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(500).json({message:'Unable to Add User'});
    }
    return res.status(201).json({user});
};

const updateUser = async(req, res,next) => {
    const id = req.params.id;
    const{Name, Class, PhoneNumber} = req.body;
    let user;
    try {
        user = await User.findByIdAndUpdate(id, {
            Name,
            Class,
            PhoneNumber
        });
        book = await user.save()
    } catch(err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({message:'Unable to update by this id'});
    }
    return res.status(201).json({user});

};

const deleteUser = async(req, res, next)=>{
  const id=req.params.id;
  let user;
 try{
    user = await User.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
   }
   if (!user) {
    return res.status(404).json({message:'Unable to Delete User by this id'});
    }
    return res.status(201).json({message: 'User successfully deleted'});

};

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;