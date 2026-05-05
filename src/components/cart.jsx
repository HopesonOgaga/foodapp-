import React, { useState } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "../constant/nav";
import Footer from "../constant/footer";
import { useCart } from "../constant/CartContext";

export default function Cart() {
  const { cartItems, updateQuantity, removeItem } = useCart();

  // Totals
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Empty Cart State
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16">
          <div className="bg-gray-50 p-8 rounded-full mb-6">
            <Trash2 size={48} className="text-gray-300" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8 max-w-xs text-lg">
            You haven’t added any delicious meals to your cart yet.
          </p>
          <Link
            to="/menu"
            className="px-10 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all shadow-lg"
          >
            Browse Our Menu
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />

      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Shopping Cart
            </h1>
            <p className="text-gray-500 mt-2">
              You have <span className="font-semibold">{totalItems}</span> item
              {totalItems > 1 && "s"} in your tray
            </p>
          </div>

          {/* Layout */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-5 border border-gray-100 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition bg-white"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-28 h-40 sm:h-28 object-cover rounded-lg"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-red-600 font-semibold mt-1">
                      ₦{item.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Subtotal: ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border">
                      <button
                        onClick={() => updateQuantity(item.id, "decrease")}
                        className="p-2 bg-white border rounded-md hover:text-red-600 transition"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, "increase")}
                        className="p-2 bg-white border rounded-md hover:text-red-600 transition"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                      <span className="sm:hidden text-sm">Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 lg:sticky lg:top-28">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 border-b pb-4">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">
                      ₦{totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-extrabold text-red-600">
                      ₦{totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition active:scale-[0.98]">
                  Proceed to Checkout
                </button>

                <Link
                  to="/menu"
                  className="block text-center mt-6 font-semibold text-gray-500 hover:text-red-600 transition-colors"
                >
                  ← Back to Menu
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
