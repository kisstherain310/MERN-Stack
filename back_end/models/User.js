const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {type: String, unique: true, trim: true,
    required: [true, 'Name must be required']
  },
  email: {type: String, unique: true, trim: true,
    required: [true, 'Email must be required']
  },
  password: {type: String, trim: true,
    required: [true, 'Email must be required'],
    minlength: [6, 'Password at least 6 characters']
  },
},
 {timestamps: true}
)

userSchema.pre('save', function(next){ // trong một hàm arrow, this không trỏ tới document như mong đợi
  let user = this;
  bcrypt.hash(user.password, 10, (error, hash) =>{
    if(error){
      return next(error);
    } else {
      user.password = hash;
      next();
    }
  });
})

const User = mongoose.model('User', userSchema);

module.exports = User;