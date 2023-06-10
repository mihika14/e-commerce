// import axios from "axios";

// const handlePayment = async () => {
//   const response = await axios.post('https://dev.na.bambora.com/docs/references/payment_APIs/v1-0-5/', {
//     headers: {
//       Authorization: "Passcode MzAwMjEzNDQxOjdFQjk3RDgwOUE5YjQzNzc5QzEyZDkyMzI2NUY0MTdC"
//     },
//   });
   
//   const transactionId = response.data.TransactionId;
//   const authorizationCode = response.data.AuthorizationCode;
//   const messageId = response.data.MessageId;
//   const messageText = response.data.MessageText;
//   const transactionDate = response.data.TransactionDate;

//   // Do something with the parameters
//   console.log('Transaction Id:', transactionId);
//   console.log('Authorization Code:', authorizationCode);
//   console.log('Message Id:', messageId);
//   console.log('Message Text:', messageText);
//   console.log('Transaction Date:', transactionDate);

//   return response;
// }





export default handlePayment;
