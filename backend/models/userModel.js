import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
    unique:true
  },
},{
  timestamps: true
});

/* The below lines will actually call an asycn function before saving the data in the 
userSchema and the passed user which is "this" checks if the password has been modified
 if yes then it is bcrypted using the becrypt.genSalt(10) */
userSchema.pre("save", async function(next){
  if(!this.isModified("password")){
    next()
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
});

userSchema.methods.matchPassword =async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model("User", userSchema);

export default User;