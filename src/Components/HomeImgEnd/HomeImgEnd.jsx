import '../HomeImgEnd/HomeImgEnd.css'

const HomeImgEnd = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {/* New Arrivals Section */}
      <div className="relative col-span-2 row-span-2">
        <img
          src="https://link-to-new-arrivals-image"
          alt="New Arrivals"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold">New Arrivals</h2>
          <p className="text-md">Shop now</p>
        </div>
      </div>

      {/* Accessories Section */}
      <div className="relative">
        <img
          src="https://link-to-accessories-image"
          alt="Accessories"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold">Accessories</h2>
          <p className="text-md">Shop now</p>
        </div>
      </div>

      {/* Workspace Section */}
      <div className="relative">
        <img
          src="https://link-to-workspace-image"
          alt="Workspace"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold">Workspace</h2>
          <p className="text-md">Shop now</p>
        </div>
      </div>
    </div>
  );
};

export default HomeImgEnd;
