import mongoose from 'mongoose';

const CardPaySchema = new mongoose.Schema({
  cardHolder: {
    type: String,
    required: true,
  },
  name:{
    type: String
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  amount:{
    type: Number
  },
  cvc:{
      type: Number,
      default: 0
  },
  email: {
    type: String
  }
});

let CardPay = mongoose.model("CardPay", CardPaySchema);

export default CardPay;
