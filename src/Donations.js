import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Navbar from './Navbar';


// Replace 'YOUR_PUBLISHABLE_KEY' with your actual Stripe publishable key
const stripePromise = loadStripe('pk_live_51QDaZaFMPzRYy6qLg5amjNhapPq66AiVlT3v48kuSXH8xKPE1qohJETFDiRxdeAIfWdRn7vNWKnCiVqpYWm2hP3J00hghVjtbr');

export default function Donations() {
  return (
<div>
    <div>
        <Navbar />
    </div>

    <div className="donations-container">
      <h2>Donate to Our Cause</h2>
      <div>
        <p>I created this website for "we the people" to access a free source to consumer rights information for testing purposes. I am not an attorney and I am not giving legal advise. I am however, providing a platform where lawful information can be found. The content featured in the test does not cover the full scope of consumer rights, however, I intend to include important need-to-know information that is helpful for uninformed consumers to become more informed of their rights by providing test material with ConsumerIQ. </p>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
</div>
  );
};