import React from "react";

export default function Signup() {
  return (
    <section className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* Left Side: Branding/Image (Swapped for variety) */}
        <div className="relative hidden w-0 flex-1 lg:block">
          <div 
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/ella.jpg')" }}
          >
            {/* Gradient overlay for a premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            <div className="absolute bottom-12 left-12 right-12">
              <h3 className="text-4xl font-bold tracking-tight text-white capitalize ">
                Join our community of foodies.
              </h3>
              <p className="mt-4 text-lg text-gray-200">
                Unlock exclusive recipes, personalized recommendations, and a 14-day premium trial.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="flex flex-1 flex-col justify-center px-8 py-12 sm:px-12 lg:flex-none lg:px-24 xl:px-32">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Create an account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-orange-600 hover:text-orange-500 transition-colors">
                  Sign in here
                </a>
              </p>
            </div>

            <div className="mt-10">
              <form action="#" method="POST" className="space-y-5">
                {/* Full Name Field */}
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="full-name"
                      name="full-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="••••••••"
                      className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all"
                    />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600 cursor-pointer"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="terms" className="text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="font-medium text-gray-900 underline underline-offset-4">Terms of Service</a> and{" "}
                      <a href="#" className="font-medium text-gray-900 underline underline-offset-4">Privacy Policy</a>.
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all active:scale-[0.98]"
                  >
                    Create account
                  </button>
                </div>
              </form>

              {/* Social Signup Divider */}
              <div className="mt-10">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-4 text-gray-400">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}