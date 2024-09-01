import Navbar from "../../Components/Navabar/Navbar";
import '../Orders/Orders.css'

const OrderConfirmation = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10 px-4 order-margin">
      <div className="bg-white w-full max-w-2xl shadow-md rounded-lg p-8">
        <h2 className="text-purple-600 text-xl font-semibold mb-4">Thank you!</h2>
        <h1 className="text-3xl font-bold mb-2">Its on the way!</h1>
        <p className="text-gray-600 mb-4">Your order #14034056 has shipped and will be with you soon.</p>
        <p className="text-gray-600 font-medium mb-8">Tracking number</p>
        <p className="text-blue-600 mb-8">515478787555454848512</p>

        <div className="bg-gray-100 p-4 rounded-lg flex mb-8">
          <img
            src="https://via.placeholder.com/100"
            alt="Cold Brew Bottle"
            className="w-20 h-20 mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">Cold Brew Bottle</h3>
            <p className="text-gray-600 text-sm mb-1">
              This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.
            </p>
            <p className="text-gray-800 font-medium">Quantity: 1 | Price: $32.00</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Shipping address</h4>
            <p>Kristin Watson</p>
            <p>7363 Cynthia Pass</p>
            <p>Toronto, ON N3Y 4H8</p>
          </div>
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Billing address</h4>
            <p>Kristin Watson</p>
            <p>7363 Cynthia Pass</p>
            <p>Toronto, ON N3Y 4H8</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Payment method</h4>
            <p>Apple Pay</p>
            <p>Mastercard ****1545</p>
          </div>
          <div>
            <h4 className="text-gray-600 font-medium mb-1">Shipping method</h4>
            <p>DHL</p>
            <p>Takes up to 3 working days</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-800">$36.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Discount</span>
            <span className="text-gray-800">- $18.00 (50%)</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-800">$5.00</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span className="text-gray-800">Total</span>
            <span className="text-gray-800">$23.00</span>
          </div>
        </div>
        <a href="/home">
        <button
          type="submit"
            className="order-margin block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
           Return Home
          </button>
        </a>
      </div>
    </div>
    </>
  );
};

export default OrderConfirmation;
