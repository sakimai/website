"use client";

export default function contact() {

  return (
    <>
      <div className="px-40">
        <div className="flex flex-row w-full justify-start">
          {/* <img src="/star2.svg" className="w-20 mr-10" /> */}
          <div className="flex flex-col pb-14">
            <span className=" text-4xl font-semibold pb-3">
              Love to hear from you,
            </span>
            <span className=" text-4xl font-semibold ">Get in touch!</span>
          </div>
        </div>

        <form
          id="contact-form">
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 p-2.5"
              placeholder="name@yourdreams.com"
              required
            ></input>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-black shadow-md transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-lg focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
