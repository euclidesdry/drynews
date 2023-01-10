import { NextApiRequest, NextApiResponse } from "next";
import { query as q } from "faunadb";

import { getSession } from "next-auth/react";
import { stripe } from "../../services/stripe";
import { fauna } from "../../services/fauna";

type User = {
    ref: {
        id: string;
    };
    data: {
        stripe_customer_id: string;
    };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    const user = await fauna.query<User>(
        q.Get(
            q.Match(
                q.Index("user_by_email"),
                q.Casefold(session?.user?.email as unknown as string)
            )
        )
    );

    let customerId = user?.data.stripe_customer_id;

    if (!customerId) {
        const stripeCustomer = await stripe.customers.create({
            email: session?.user?.email as unknown as string,
            // metadata
        });

        await fauna.query(
            q.Update(q.Ref(q.Collection("users"), user.ref.id), {
                data: {
                    stripe_customer_id: stripeCustomer.id,
                },
            })
        );

        customerId = stripeCustomer.id;
    }

    if (req.method === "POST") {
        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: customerId,
            payment_method_types: ["card"],
            billing_address_collection: "required",
            line_items: [
                {
                    price: "price_1MMex7Bc9E8RtIbn3i2dyzcI",
                    quantity: 1,
                },
            ],
            mode: "subscription",
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL as unknown as string,
            cancel_url: process.env.STRIPE_CANCEL_URL as unknown as string,
        });

        return res.status(200).json({
            sessionId: stripeCheckoutSession.id,
        });
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method not allowed");
    }
};
