import mongoose from 'mongoose';

const MobilePaySchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
  },
  amount:{
    type: Number
  },
},{ timestamps: true });

let MobilePay = mongoose.model("MobilePay", MobilePaySchema);

export default MobilePay;
