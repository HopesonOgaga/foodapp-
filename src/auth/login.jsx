import React from "react";

export default function Login() {
  return (
    <section className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* Left Side: Form */}
        <div className="flex flex-1 flex-col justify-center px-8 py-12 sm:px-12 lg:flex-none lg:px-24 xl:px-32">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Not a member?{" "}
                <a href="/signup" className="font-medium text-orange-600 hover:text-orange-500 transition-colors">
                  create an account
                </a>
              </p>
            </div>

            <div className="mt-10">
              <form action="#" method="POST" className="space-y-6">
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
                      className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-orange-600 hover:text-orange-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                    Remember me
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side: Image/Branding */}
        <div className="relative hidden w-0 flex-1 lg:block">
          <div 
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/ella.jpg')" }}
          >
            {/* Dark overlay to make text pop */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
            
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Let your taste buds explore
                </h3>
                <p className="mt-4 text-lg text-gray-200">
                  Discover a world of flavors tailored just for you.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}