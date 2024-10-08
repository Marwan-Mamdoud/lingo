"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { API, Path } from "@/lib/createApi";
import { getUserSubscription } from "./userProgress";
import { stripe } from "@/lib/stripe";

const returnUrl = Path + "/shop";

export const createStripeUrl = async () => {
  const { userId } = auth();
  const user = await currentUser();
  const userSubscription = await getUserSubscription();

  if (userSubscription && userSubscription.stripeCustomerId) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: userSubscription.stripeCustomerId,
      return_url: returnUrl,
    });

    return { data: stripeSession.url };
  }

  const stripeSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: user.emailAddresses[0].emailAddress,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: "Lingo Pro",
            description: "Unlimited Hearts",
          },
          unit_amount: 2000,
          recurring: {
            interval: "month",
          },
        },
      },
    ],
    metadata: {
      userId,
    },
    success_url: returnUrl,
    cancel_url: returnUrl,
  });

  return { data: stripeSession.url };
};

export const createSubscription = async () => {
  try {
    const { userId } = auth();
    const user = await currentUser();
    console.log(user.firstName);
    const data = await API.post("/api/userProgress/create-user-subscription", {
      userId: userId,
      user: user.firstName,
    });
    if (data.data) {
      return returnUrl;
    }
  } catch (error) {
    console.log(error);
  }
};
