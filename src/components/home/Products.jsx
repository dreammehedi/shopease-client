import ProductLayout from "./ProductLayout";
const products = [
  {
    productName: "Wireless Bluetooth Headphones",
    productImage: "https://example.com/images/headphones.jpg",
    description:
      "High-quality wireless Bluetooth headphones with noise-canceling features.",
    price: 79.99,
    brandName: "SoundMagic",
    categoryName: "Electronics",
    ratings: 4.5,
    color: "Black",
    stockAvailability: true,
    warranty: "2 years",
    createdAt: "2024-08-14T10:15:30Z",
  },
  {
    productName: "Smartphone Stand",
    productImage: "https://example.com/images/phone-stand.jpg",
    description:
      "Adjustable smartphone stand, perfect for hands-free video calls or watching videos.",
    price: 15.99,
    brandName: "TechGear",
    categoryName: "Accessories",
    ratings: 4.8,
    color: "Silver",
    stockAvailability: false,
    warranty: "6 months",
    createdAt: "2024-08-13T08:25:45Z",
  },
  {
    productName: "Gaming Mouse",
    productImage: "https://example.com/images/gaming-mouse.jpg",
    description:
      "Ergonomic gaming mouse with customizable DPI settings and RGB lighting.",
    price: 49.99,
    brandName: "GamerPro",
    categoryName: "Electronics",
    ratings: 4.7,
    color: "Black",
    stockAvailability: true,
    warranty: "1 year",
    createdAt: "2024-08-12T09:45:30Z",
  },
  {
    productName: "Portable Power Bank",
    productImage: "https://example.com/images/power-bank.jpg",
    description: "10,000mAh portable power bank with fast charging support.",
    price: 29.99,
    brandName: "ChargeMax",
    categoryName: "Electronics",
    ratings: 4.3,
    color: "White",
    stockAvailability: true,
    warranty: "1 year",
    createdAt: "2024-08-11T11:20:00Z",
  },
  {
    productName: "Wireless Keyboard",
    productImage: "https://example.com/images/wireless-keyboard.jpg",
    description:
      "Slim and lightweight wireless keyboard with long battery life.",
    price: 39.99,
    brandName: "KeyEase",
    categoryName: "Electronics",
    ratings: 4.2,
    color: "Gray",
    stockAvailability: true,
    warranty: "1 year",
    createdAt: "2024-08-10T14:35:30Z",
  },
  {
    productName: "Smart LED Bulb",
    productImage: "https://example.com/images/smart-bulb.jpg",
    description:
      "Smart LED bulb with adjustable brightness and color temperature, compatible with Alexa.",
    price: 19.99,
    brandName: "Lightify",
    categoryName: "Home Automation",
    ratings: 4.6,
    color: "White",
    stockAvailability: true,
    warranty: "2 years",
    createdAt: "2024-08-09T15:50:20Z",
  },
  {
    productName: "4K Ultra HD TV",
    productImage: "https://example.com/images/4k-tv.jpg",
    description:
      "55-inch 4K Ultra HD Smart TV with HDR10 and built-in streaming apps.",
    price: 499.99,
    brandName: "VisionPlus",
    categoryName: "Electronics",
    ratings: 4.9,
    color: "Black",
    stockAvailability: false,
    warranty: "3 years",
    createdAt: "2024-08-08T13:30:15Z",
  },
  {
    productName: "Digital Air Fryer",
    productImage: "https://example.com/images/air-fryer.jpg",
    description:
      "5.8-quart digital air fryer with adjustable temperature and timer.",
    price: 89.99,
    brandName: "CrispyCook",
    categoryName: "Kitchen Appliances",
    ratings: 4.4,
    color: "Black",
    stockAvailability: true,
    warranty: "1 year",
    createdAt: "2024-08-07T17:00:00Z",
  },
  {
    productName: "Wireless Earbuds",
    productImage: "https://example.com/images/earbuds.jpg",
    description:
      "True wireless earbuds with noise isolation and long battery life.",
    price: 59.99,
    brandName: "SoundMagic",
    categoryName: "Electronics",
    ratings: 4.3,
    color: "White",
    stockAvailability: true,
    warranty: "1 year",
    createdAt: "2024-08-06T09:10:45Z",
  },
  {
    productName: "Smartwatch",
    productImage: "https://example.com/images/smartwatch.jpg",
    description: "Fitness smartwatch with heart rate monitoring and GPS.",
    price: 129.99,
    brandName: "FitTrack",
    categoryName: "Wearables",
    ratings: 4.7,
    color: "Black",
    stockAvailability: true,
    warranty: "2 years",
    createdAt: "2024-08-05T18:25:30Z",
  },
  {
    productName: "Portable Speaker",
    productImage: "https://example.com/images/speaker.jpg",
    description:
      "Waterproof portable Bluetooth speaker with deep bass and long battery life.",
    price: 39.99,
    brandName: "BassBoom",
    categoryName: "Electronics",
    ratings: 4.5,
    color: "Blue",
    stockAvailability: true,
    warranty: "1 year",
    createdAt: "2024-08-04T12:15:00Z",
  },
  {
    productName: "Laptop Cooling Pad",
    productImage: "https://example.com/images/cooling-pad.jpg",
    description:
      "Adjustable laptop cooling pad with silent fans and USB-powered operation.",
    price: 24.99,
    brandName: "CoolTech",
    categoryName: "Accessories",
    ratings: 4.1,
    color: "Black",
    stockAvailability: true,
    warranty: "1 year",
    createdAt: "2024-08-03T11:40:50Z",
  },
  {
    productName: "Stainless Steel Water Bottle",
    productImage: "https://example.com/images/water-bottle.jpg",
    description:
      "Vacuum-insulated stainless steel water bottle, keeps drinks cold for 24 hours.",
    price: 18.99,
    brandName: "HydroFlow",
    categoryName: "Accessories",
    ratings: 4.8,
    color: "Silver",
    stockAvailability: true,
    warranty: "1 year",
    createdAt: "2024-08-02T08:55:20Z",
  },
  {
    productName: "USB-C Hub",
    productImage: "https://example.com/images/usb-c-hub.jpg",
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.",
    price: 29.99,
    brandName: "PortPlus",
    categoryName: "Accessories",
    ratings: 4.4,
    color: "Gray",
    stockAvailability: false,
    warranty: "1 year",
    createdAt: "2024-08-01T10:20:00Z",
  },
  {
    productName: "Electric Kettle",
    productImage: "https://example.com/images/electric-kettle.jpg",
    description:
      "1.7-liter electric kettle with auto shut-off and boil-dry protection.",
    price: 25.99,
    brandName: "BrewMaster",
    categoryName: "Kitchen Appliances",
    ratings: 4.6,
    color: "Stainless Steel",
    stockAvailability: true,
    warranty: "1 year",
    createdAt: "2024-07-31T09:05:45Z",
  },
  {
    productName: "Noise-Cancelling Headphones",
    productImage: "https://example.com/images/noise-cancelling-headphones.jpg",
    description:
      "Over-ear noise-cancelling headphones with Bluetooth connectivity.",
    price: 129.99,
    brandName: "SoundMagic",
    categoryName: "Electronics",
    ratings: 4.7,
    color: "Black",
    stockAvailability: true,
    warranty: "2 years",
    createdAt: "2024-07-30T14:15:00Z",
  },
];

function Products() {
  return (
    <>
      <section className="container py-4 md:py-6">
        {/* title */}
        <h1 className="text-2xl  md:text-3xl font-bold text-secondary text-center ">
          ShopEase Products
        </h1>

        {/* product layout */}
        <ProductLayout products={products}></ProductLayout>
      </section>
    </>
  );
}

export default Products;
