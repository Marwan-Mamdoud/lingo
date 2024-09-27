import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51Q32ySDXr5uKM7QzSXthD9mSl2StFYTIgJfSxCzCGnSBaUxgJ1pFtCSNEFlhrDStFjp3VXAZVrP5KvzCcI76MJbt00tlpWN9ad",
  {
    apiVersion: "2024-06-20",
  }
);
