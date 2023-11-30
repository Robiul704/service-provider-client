import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import UseAxiosSecure from "../Axios/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Security/AuthProvider";
import { useEffect } from "react";
import UsePacage from "../Axios/UsePacage";



const CheckoutForm = () => {
  //------------------------------------------------------------------------------
  const [error,setError]=useState('')
  const [clientSecret,setClientsECRET]=useState('')
  const [TransectionId,setTransectionId]=useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=UseAxiosSecure()
    const [pacage,refetch]=UsePacage()
    const {user}=useContext(AuthContext)
    const totalPrice=8
    useEffect(()=>{
     if(totalPrice>0){
      axiosSecure.post('/create-payment-intent',{price: totalPrice})
      .then(res=>{
        console.log(res.data.clientSecret)
        setClientsECRET(res.data.clientSecret)
      })
     }
    },[axiosSecure,totalPrice])

    //----------------------------------------------------------------------------
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!stripe || !elements) {
        return;
      }
  
      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError('')
      }


      const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card:card,
          billing_details:{
            email:user?.email || 'anonymous',
            name:user?.displayName || 'anonymous'
          }
        }
      
      })
      if(confirmError){
        console.log('confirm error',confirmError)
      }else{
        console.log('paymentIntent',paymentIntent)
        if(paymentIntent.status==='succeeded'){
          console.log( 'transictionid',paymentIntent.id)
          setTransectionId(paymentIntent.id)
          const payment={
            email:user.email,
            price:totalPrice,
            transectionid:paymentIntent.id,
            date:new Date(),
            cartid:pacage.map(item=>item._id),
            status:'pending'
          }

          const res=await axiosSecure.post('/payments',payment)
          console.log(res.data)
          refetch()
         
        }
      }
    }
    return (
             
              <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '20px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
    
      <button type="submit btn btn-outline bg-yellow-300" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <h1> {error}</h1>
      <p className="text-red-300 text-xl underline">{TransectionId}</p>
    </form>
      
    );
};

export default CheckoutForm;