import Navbar from "../../Components/Navabar/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Wed love to hear from you! Whether you have a question about products, pricing, or anything else, our team is ready to answer all your questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 shadow-lg rounded-lg text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h3>
            <p className="text-gray-600 mb-4">
              You can reach us at our office or by phone, email, or through our social media channels.
            </p>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700">Address:</h4>
              <p className="text-gray-600">1234 Example Street, Suite 100, City, State, 12345</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700">Phone:</h4>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700">Email:</h4>
              <p className="text-gray-600">contact@yourwebsite.com</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-700">Follow Us:</h4>
              <p className="text-gray-600">Instagram | Facebook | Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
