import Navbar from '../../Components/Navabar/Navbar'
import BackGroundImg from '../../Images/imgBackground.jpg'
import '../Home/Home.css'
import Iphone from '../../Images/iphones.png'
import Ipad from '../../Images/ipad-1.png'
import Iwatch from '../../Images/iwatch.png'
import Imac from '../../Images/imac.png'
import Airpod from '../../Images/airpods.png'
import AirTags from '../../Images/airtag.png'
import IPhoneProduct from '../../Components/iPhone/iPhone'
import AirPodProduct from '../../Components/AirPod/AirPod'
import BackGroundImg2 from '../../Images/BackGroudImg2.png'
import IpadProduct from '../../Components/iPad/iPad'
import ImacProduct from '../../Components/iMac/imac'
import BackGroundImg3 from '../../Images/backGroundImg3.png'
import HomeEndImg from '../../Images/HomeEndImg.png'
import DiliverDetails from '../../Components/DiliverDetails/DiliverDetails'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <img src={BackGroundImg} alt="" className='	BackGroundImg mx-auto'/>
        <div className="max-w-5xl mx-auto p-4 bg-white ">
            <div>
            <div className="flex flex-col items-center p-8">
                <h1 className="text-2xl font-semibold mb-8">The best way to buy the products you love.</h1>
                <div className="flex justify-center items-center space-x-8">
                  {/* Product 1 - iPhone */}
                  <img
                    src={Iphone}
                    alt="iPhone"
                    className="w-32 h-32 object-cover"
                  />
                  
                  {/* Product 2 - iPad */}
                  <img
                    src={Ipad}
                    alt="iPad"
                    className="w-32 h-32 object-cover"
                  />
                  
                  {/* Product 3 - Apple Watch */}
                  <img
                    src={Iwatch}
                    alt="Apple Watch"
                    className="w-32 h-32 object-cover"
                  />
                  
                  {/* Product 4 - MacBook */}
                  <img
                    src={Imac}
                    alt="MacBook"
                    className="w-32 h-32 object-cover"
                  />
                  
                  {/* Product 5 - AirPods */}
                  <img
                    src={Airpod}
                    alt="AirPods"
                    className="w-32 h-32 object-cover"
                  />
                  
                  {/* Product 6 - AirTag */}
                  <img
                    src={AirTags}
                    alt="AirTag"
                    className="w-32 h-32 object-cover"
                  />
                </div>
              </div>
            </div>
        </div>
        <div className="flex flex-col items-center p-8 ">
          <h1 className="text-2xl font-semibold mb-8">Apple iPhone</h1>
          <h1 className="text-2xl font-semibold  text-lg	font-thin	iphone-margin">Which iPhone is right for you?</h1>
        </div>
          <div>
            <div className="flex flex-col items-center p-8 ">
              <IPhoneProduct />
              <a href="/product"><button className='btn-iPhone'>See all in iPhones</button></a>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 ">
            <h1 className="text-2xl font-semibold mb-8">AirPods</h1>
            <h1 className="text-2xl font-semibold  text-lg	font-thin	iphone-margin">Buy Apple AirPods for best pricein Sri Lanka</h1>
          </div>
        <div>
            <div className="flex flex-col items-center p-8 ">
              <AirPodProduct />
              <button className='btn-iPhone'>See all in AirPods</button>
            </div>
          </div>
          <img src={BackGroundImg2}  className='Background-img2' alt="" />
          <div className="flex flex-col items-center p-8 ">
          <h1 className="text-2xl font-semibold mb-8">iPads</h1>
        </div>
          <div>
            <div className="flex flex-col items-center p-8 ">
              <IpadProduct />
              <button className='btn-iPhone'>See all in iPhones</button>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 ">
          <h1 className="text-2xl font-semibold mb-8">iMac</h1>
          <h1 className="text-2xl font-semibold  text-lg	font-thin	iphone-margin">Which Mac is right for you?</h1>
        </div>
          <div>
            <div className="flex flex-col items-center p-8 ">
              <ImacProduct />
              <button className='btn-iPhone'>See all in iPhones</button>
            </div>
          </div>
          <img src={BackGroundImg3} className='Background-img2' alt="" />
          <div className="flex flex-col items-center p-8 ">
          <h1 className="text-2xl font-semibold mb-8">iWatch</h1>
          <h1 className="text-2xl font-semibold  text-lg	font-thin	iphone-margin">Which Apple Watch is right for you?</h1>
        </div>
          <div>
            <div className="flex flex-col items-center p-8 ">
              <IpadProduct />
              <button className='btn-iPhone'>See all in iPhones</button>
            </div>
          </div>
          <div className="flex flex-col items-center p-8 ">
            <img src={HomeEndImg} alt="" />
          </div>
          <div>
            <br />
          <h1 className="text-2xl font-semibold mb-8 text-center	">Apple iPhone</h1>
          <h1 className="text-2xl font-semibold  text-lg	font-thin	iphone-margin text-center	">Which iPhone is right for you?</h1>
              <DiliverDetails />
          </div>
          <Footer />
    </div>
  )
}

export default Home
