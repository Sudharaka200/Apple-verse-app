import Navbar from '../../Components/Navabar/Navbar'
import Footer from '../../Components/Footer/Footer'
import '../Cart/Cart.css'

function Cart() {
  const products = [
    {
      id: 1,
      name: 'iPhone 14',
      description: '256GB, Midnight',
      price: '$999',
      quantity: 1,
      image: 'https://i.pinimg.com/564x/b6/bd/dc/b6bddc77d6a9ea37bdae05c1e862c8a1.jpg',
    },
    {
      id: 2,
      name: 'AirPods Pro',
      description: 'Noise Cancellation',
      price: '$249',
      quantity: 1,
      image: 'https://i.pinimg.com/564x/b6/bd/dc/b6bddc77d6a9ea37bdae05c1e862c8a1.jpg',
    },
  ];

  const total = products.reduce((sum, product) => sum + parseFloat(product.price.slice(1)) * product.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4 bg-white cart-margin">
        {/* Left side - Products */}
        <div className="lg:w-2/3 p-4 bg-gray-100 rounded-lg shadow-md ">
          <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
          {products.map((product) => (
            <div key={product.id} className="flex items-center border-b border-gray-300 py-4">
              <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-800 font-bold">{product.price}</p>
              </div>
              <div className="ml-auto">
                <span className="text-gray-600">Qty: {product.quantity}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Summary */}
        <div className="lg:w-1/3 p-4 bg-gray-50 rounded-lg shadow-md lg:ml-8 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-800">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-800">$10.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${(total + 10).toFixed(2)}</span>
          </div>
          <a href="/orderdetails">
          <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
            Checkout
          </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
