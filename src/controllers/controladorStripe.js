const Stripe = require("stripe");
const dotenv = require("dotenv");
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log(stripe);
const createSession = async (req, res) => {
  const { producto } = req.body;
  if (producto.length === 0) {
    return res.send("el array esta vacio");
  }

  const Items = producto.map((item) => {
    const articulo = {
      price_data: {
        currency: "usd",
        unit_amount: item.precio * 100,
        product_data: {
          name: item.nombre,
          description: item.description,
        },
      },
      quantity: item.cantidad,
    };
    return articulo;
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: Items,
      mode: "payment",
      success_url: "https://tienda-production-852a.up.railway.app/success",
      cancel_url: "https://tienda-production-852a.up.railway.app/cancelar",
    });
    return res.status(200).json(session.url);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createSession };

/*  {
        price_data: {
          product_data: {
            name: "Laptop",
            description: "Muy buena",
          },
          currency: "usd",
          unit_amount: 5000,
        },
        quantity: 1,
      },
       mode: "payment",
    success_url: "http://localhost:3020/pagos/success",
    cancel_url: "http://localhost:3020/pagos/cancelar",*/
