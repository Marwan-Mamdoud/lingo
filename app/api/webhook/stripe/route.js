import { API } from "@/lib/createApi";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature");
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      "whsec_8d5fe9f4c15c3ad5c45329c698029acb2d4310e16b46fe2e57b7d7df2539d18f"
    );
  } catch (error) {
    return new NextResponse(`Webhooks error: ${error.message}`, {
      status: 400,
    });
  }

  const session = event.data.object;

  if (event.type == "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription
    );

    if (!session?.metadata?.userId) {
      return new NextResponse("userIs is required", { status: 400 });
    }

    await API.post("/api/userProgress/create-user-subscription", {
      stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
      stripePriceId: subscription.items.data[0].price.id,
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: subscription.customer,
      userId: session.metadata.userId,
    });
  }

  if (event.type == "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription
    );

    if (!session?.metadata?.userId) {
      return new NextResponse("userIs is required", { status: 400 });
    }

    await API.post("/api/userProgress/create-user-subscription", {
      stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
      stripePriceId: subscription.items.data[0].price.id,
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: subscription.customer,
      userId: session.metadata.userId,
    });
  }

  return new NextResponse(null, { status: 200 });
}
