import mongoose from 'mongoose';

const MobilePaySchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
  },
  name:{
    type: String
  },
  amount:{
    type: Number
  },  
  email: {
    type: String
  }
},{ timestamps: true });

let MobilePay = mongoose.model("MobilePay", MobilePaySchema);

export default MobilePay;
