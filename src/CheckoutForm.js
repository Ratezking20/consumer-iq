import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import './CheckoutForm.css';
import StripeEmblem from './Stripe-Emblem.webp'

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [states, setStates] = useState([]);
  
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
  
      if (event.target.value === 'United States') {
        setStates([
          'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
          'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
          'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
          'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
          'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]);
      } else if (event.target.value === 'Canada') {
        setStates([
          'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
          'Prince Edward Island', 'Quebec', 'Saskatchewan'
        ]);
      } else {
        setStates([]);
      }
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
  
      if (!error) {
        const { id } = paymentMethod;
        const amount = event.target.amount.value;
        try {
          const response = await axios.post('https://your-server-endpoint.com/charge', {
            amount: amount * 100, // amount in cents, e.g., $10.00
            id: id,
          });
  
          console.log('Payment successful', response);
        } catch (error) {
          console.error('Payment error', error);
        }
      } else {
        console.error('Stripe error', error);
      }
    };
  
    const stripeStyle = {
        textAlign: 'center'
    }

    const emblemStyle = {
        height: '18px',
        width: 'auto',
        paddingLeft: '5px'
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Gift Amount ($)</label>
          <input type="number" name="amount" min="1" required />
        </div>
        <div className='border-top'>
          <h3>Billing Address</h3>
        </div>
        <div>
          <div>
            <label>Name</label>
            <input type="text" name="billingName" required />
          </div>
          <div>
            <label>Country</label>
            <select name="country" onChange={handleCountryChange} required>
              <option value="">Select Country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label>Address</label>
            <input type="text" name="address" required />
          </div>
          <div className="inline-fields">
            <div>
              <label>City</label>
              <input type="text" name="city" required />
            </div>
            <div>
              <label>State</label>
              <select name="state" required>
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Zip Code</label>
              <input type="text" name="zip" required />
            </div>
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
        </div>
        <div className='border-top'>
          <h3>Payment Details</h3>
          <p style={stripeStyle}><b>Payment processed by Stripe<img style={emblemStyle} src={StripeEmblem}></img></b></p>
          <label>Cardholder Name</label>
          <input type="text" name="name" required />
        </div>
        <CardElement />
        <button type="submit" disabled={!stripe}>Donate</button>
      </form>
    );
  }