import axios from "axios";

const handlePayment = async () => {
    try {
      const response = await axios.post(
        'https://api.na.bambora.com/v1/payments',
        {
          headers: {
            Authorization: '7EB97D809A9b43779C12d923265F417B'
          }
        }
      );
      
      console.log(response.data); 
    } catch (error) {
      console.error(error);
      
    }
  };
  
export default handlePayment;