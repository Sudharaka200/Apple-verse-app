import Navbar from '../../Components/Navabar/Navbar'
const About = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          We are committed to delivering the best quality products to our customers. 
          Our mission is to provide exceptional service and top-notch products that enrich your everyday life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Section 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to make premium products accessible to everyone, ensuring quality and sustainability in everything we offer.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
            <p className="text-gray-600">
              We believe in customer satisfaction, integrity, and continuous improvement. We are driven by innovation and passion.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our History</h3>
            <p className="text-gray-600">
              Founded in 2010, we have grown from a small startup to a leading provider in the industry, serving customers worldwide.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Chief Operating Officer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
            <p className="text-gray-600">Head of Marketing</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
