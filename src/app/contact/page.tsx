'use client';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-lime-200">
      {/* Contact Form Section */}
      <div className="flex-grow p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10 px-4 sm:px-0">
          If you have any questions or feedback, we&apos;d love to hear from you!
        </p>
        <form className="max-w-lg mx-auto bg-lime-100 p-6 sm:p-8 rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 bg-lime-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 bg-lime-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 bg-lime-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-lime-800 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Footer Section */}
      <footer className="bg-lime-700 text-white text-center py-4 mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
