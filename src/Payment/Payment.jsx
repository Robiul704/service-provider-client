import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe('pk_test_51OEpBDJ0V1aOTUjjfHjgGnV09LadBNb6kf9wBj2igKFGo565NDbfkGSORhcCpYKPnFQp3tSdgMZP44qM0Di1t4u6009VeUo9ob');
const Payment = () => {
    
    return (
        <div className="my-20">
            <Helmet>
        <title>Service | Payment</title>
      </Helmet>
           <div>
           <Elements stripe={stripePromise}>
                 <CheckoutForm />
            </Elements>
           </div>
        </div>
    );
};

export default Payment;