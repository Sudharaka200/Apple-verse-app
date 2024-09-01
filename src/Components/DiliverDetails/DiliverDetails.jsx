import DeliverVan from '../../Images/DiliverVan.png'
import '../DiliverDetails/DiliverDetails.css'
import DeliverPackge from '../../Images/DiliverBag.png'
import Delivercard from '../../Images/DiliverCard.png'

const stats = [
  { id: 1, name: 'within Colombo same day delivery, Island wide within 2-3 working Days', value: 'Fast Delivery', img: DeliverVan },
  { id: 2, name: 'All our product packaging is safe & secure. We really care about every order.', value: 'Safe Packaging', img: DeliverPackge },
  { id: 3, name: 'Highly Secured Payment Gateway Trusted by Millions of People, Sri Lanka', value: 'Secure Online Payment', img: Delivercard },
]

export default function DiliverDetails() {
  return (
    <div className="bg-white py-24 sm:py-32 margin-deliver">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 bg-gray-300 rounded-md	shadow-lg">
              <img src={stat.img} alt={stat.name} className="mx-auto" />
              <dt className="text-base leading-7 text-gray-600 ">{stat.name}</dt>
              <dd className="order-first text-3xl	 font-semibold tracking-tight text-gray-900 ">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
