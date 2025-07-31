"use client";
import React from "react";
import ProductModal from "./ProductModal";

type productType = {
  name: string;
  description: string;
  image: string;
  rate?: string;
  details?: string;
  brand: string;
  type: string;
  model: string;
};
const salesProducts: productType[] = [
  {
    name: "Commax IP Intercom X100",
    description: "Premium IP intercom with touch display and mobile app integration.",
    image: "/images/ip-intercom.jpg",
    rate: "₹18,500",
    details: "7'' touch display, PoE, remote unlock, 2-year warranty.",
    brand: "Commax",
    type: "IP Intercom",
    model: "X100",
  },
  {
    name: "Panasonic Analog Intercom KX-T7705",
    description: "Reliable analog intercom for homes and offices.",
    image: "/images/analog-intercom.jpg",
    rate: "₹6,900",
    details: "Expandable up to 16 units, wall-mountable, clear audio.",
    brand: "Panasonic",
    type: "Analog Intercom",
    model: "KX-T7705",
  },
  {
    name: "Godrej Video Door Phone SeeThru",
    description: "HD video door phone with night vision and recording.",
    image: "/images/video-door-phone.jpg",
    rate: "₹11,500",
    details: "7'' color display, night vision, SD card recording.",
    brand: "Godrej",
    type: "Video Door Phone",
    model: "SeeThru",
  },
  {
    name: "Hikvision CCTV TurboHD",
    description: "High-definition CCTV camera for 24/7 surveillance.",
    image: "/images/cctv.jpg",
    rate: "₹3,200",
    details: "1080p, IR night vision, weatherproof, 1-year warranty.",
    brand: "Hikvision",
    type: "CCTV",
    model: "TurboHD",
  },
  {
    name: "Commax Audio Door Phone DP-2S",
    description: "Simple audio door phone for apartments and homes.",
    image: "/images/audio-door-phone.jpg",
    rate: "₹2,800",
    details: "Hands-free, wall-mountable, clear audio.",
    brand: "Commax",
    type: "Audio Door Phone",
    model: "DP-2S",
  },
  {
    name: "Panasonic EPABX KX-NS300",
    description: "Advanced EPABX system for business communication.",
    image: "/images/epabx.jpg",
    rate: "₹24,000",
    details: "Supports up to 100 extensions, voicemail, auto-attendant.",
    brand: "Panasonic",
    type: "EPABX",
    model: "KX-NS300",
  },
];

const brands = ["All Brands", "Commax", "Panasonic", "Godrej", "Hikvision"];
const equipmentTypes = [
  "All Types",
  "IP Intercom",
  "Analog Intercom",
  "Video Door Phone",
  "Audio Door Phone",
  "EPABX",
  "CCTV",
];

const ProductsSection = () => {
  const [brand, setBrand] = React.useState("All Brands");
  const [type, setType] = React.useState("All Types");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null as productType | null);


  // Filtering logic
  const filteredProducts = salesProducts.filter((product) => {
    const brandMatch = brand === "All Brands" || product.brand === brand;
    const typeMatch = type === "All Types" || product.type === type;
    return brandMatch && typeMatch;
  });

  const handleViewDetails = (product: productType) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="w-full max-w-6xl mx-auto p-6 sm:p-10 animate-fade-in">
      <div className="mb-2 text-sm text-gray-500 flex items-center gap-2">
        <span className="text-blue-700 font-semibold">Home</span>
        <span>/</span>
        <span className="text-gray-700 font-semibold">Products</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">Products we Offer</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">Browse our gallery of products and find a product that's right for you.</p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 bg-white/80 dark:bg-gray-900/80 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-4 text-gray-700 dark:text-gray-200">Filter</h3>
          <div className="mb-6">
            <div className="font-semibold text-gray-600 dark:text-gray-300 mb-2">Brand</div>
            <ul className="space-y-2">
              {brands.map((b) => (
                <li key={b}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="brand"
                      value={b}
                      checked={brand === b}
                      onChange={() => setBrand(b)}
                      className="accent-blue-600"
                    />
                    <span className="text-gray-700 dark:text-gray-200 text-sm">{b}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-600 dark:text-gray-300 mb-2">Equipment Type</div>
            <ul className="space-y-2">
              {equipmentTypes.map((t) => (
                <li key={t}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value={t}
                      checked={type === t}
                      onChange={() => setType(t)}
                      className="accent-blue-600"
                    />
                    <span className="text-gray-700 dark:text-gray-200 text-sm">{t}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-12 text-lg">No products found for the selected filters.</div>
            ) : (
              filteredProducts.map((product, idx) => (
                <div
                  key={product.name}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-6 group animate-fade-in"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 object-cover rounded-lg shadow mb-4 border border-gray-200 dark:border-gray-800 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 text-center">{product.name}</h3>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 text-center">{product.brand} &middot; {product.type} &middot; {product.model}</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-2">{product.description}</p>
                  <button
                    className="mt-auto px-4 py-1.5 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition-colors text-sm"
                    onClick={() => handleViewDetails(product)}
                  >
                    View Details
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <ProductModal open={modalOpen} onClose={handleCloseModal} product={selectedProduct} />
    </section>
  );
};

export default ProductsSection;

