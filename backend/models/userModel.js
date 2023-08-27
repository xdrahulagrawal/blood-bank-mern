import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userType: {
        type: String,
        required: true,
        enum: ['donar', 'organization', 'hospital', 'admin']
    },
    name: {
        type: String,
        require: function () {
            if (this.userType == 'admin' || this.userType == 'donar') {
                return true;
            }
            return false;
        }
    },
    hospitalName: {
        type: String,
        require: function () {
            if (this.userType == 'hospital') {
                return true;
            }
            return false;
        }
    },
    organizationName: {
        type: String,
        require: function () {
            if (this.userType == 'organization') {
                return true;
            }
            return false;
        }
    },
    website: {
        type: String,
        require: function () {
            if (this.userType == 'organization' || this.userType == 'hospital') {
                return true;
            }
            return false;
        }
    },
    address: {
        type: String,
        require: function () {
            if (this.userType == 'organization' || this.userType == 'hospital') {
                return true;
            }
            return false;
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
})

const userModel = mongoose.model('user', userSchema);
export default userModel;