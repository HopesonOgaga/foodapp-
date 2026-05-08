import React, { useState } from "react";
import { supabase } from "../supabase";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // NEW: State for the popup
  const [showPopup, setShowPopup] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    // NEW: Show the popup instead of an alert
    setShowPopup(true);
  };

  const handleGoogleSignup = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173",
      },
    });
    if (error) alert(error.message);
  };

  return (
    <div className="relative overflow-hidden">
      {/* 1. MAIN UI - Added conditional blur class */}
      <section
        className={`min-h-screen bg-white transition-all duration-300 ${showPopup ? "blur-md pointer-events-none" : ""}`}
      >
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          {/* Left Side */}
          <div className="relative hidden w-0 flex-1 lg:block">
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/ella.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-4xl font-bold tracking-tight text-white capitalize">
                  Join our community of foodies.
                </h3>
                <p className="mt-4 text-lg text-gray-200">
                  Unlock exclusive recipes, personalized recommendations, and a
                  14-day premium trial.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-1 flex-col justify-center px-8 py-12 sm:px-12 lg:flex-none lg:px-24 xl:px-32">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Create an account
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-orange-600 hover:text-orange-500 transition-colors"
                  >
                    Sign in here
                  </a>
                </p>
              </div>

              <div className="mt-10">
                <form onSubmit={handleSignup} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm transition-all"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-orange-600"
                    />
                    <div className="ml-3 text-sm leading-6 text-gray-600">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 underline"
                      >
                        Terms
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 underline"
                      >
                        Privacy
                      </a>
                      .
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 transition-all active:scale-[0.98]"
                  >
                    {loading ? "Creating account..." : "Create account"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Black overlay for extra depth */}
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all animate-in zoom-in duration-300">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Check your email
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              We've sent a confirmation link to{" "}
              <span className="font-medium text-gray-900">{email}</span>. Please
              click the link to activate your account.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 w-full rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-500 transition-colors"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
