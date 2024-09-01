import Navbar from '../../Components/Navabar/Navbar'
import IPhoneProduct from '../../Components/iPhone/iPhone'

function Product() {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center p-8 ">
        </div>
        <h1 className="text-2xl font-semibold mb-8 text-center mt-px">Apple iPhone</h1>

          <div>
            <div className="flex flex-col items-center p-10">
              <IPhoneProduct />
            </div>
          </div>
    </div>
  )
}

export default Product
