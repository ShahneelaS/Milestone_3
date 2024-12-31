'use client';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-lime-200">
      {/* About Us Section */}
      <div className="flex-grow p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-center text-gray-600 mb-10 px-4 sm:px-0">
          Welcome to our e-commerce platform! We are committed to providing you with the best shopping experience.
        </p>
        <div className="max-w-4xl mx-auto bg-lime-100 p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-6">
            Our mission is to bring you high-quality products at unbeatable prices, ensuring satisfaction and convenience
            at every step of your journey with us.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>A wide range of products, from home essentials to fashion accessories.</li>
            <li>Secure payment options for a worry-free shopping experience.</li>
            <li>Fast and reliable delivery services.</li>
            <li>Exceptional customer support to assist you with your queries.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Quality:</strong> We believe in offering only the best to our customers.</li>
            <li><strong>Integrity:</strong> Trust and transparency are at the core of our business.</li>
            <li><strong>Innovation:</strong> Continuously improving to serve you better.</li>
          </ul>
        </div>
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

export default About;
