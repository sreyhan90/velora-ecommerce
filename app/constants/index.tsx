export interface CorouselType {
  id: number;
  image: string;
}

export const CorouselList: CorouselType[] = [
  {
    id: 1,
    image: "/slider/5.jpg",
  },
  {
    id: 2,
    image: "/slider/6.jpg",
  },
  {
    id: 3,
    image: "/slider/7.jpg",
  },
];

export interface ProductType {
  id: number;
  title: string;
  price: number;
  mrp: number;
  description: string;
  image: string;
  rating: number;
  reviews: number;
}

export const products: ProductType[] = [
  {
    id: 1,
    title: "Urban Runner Sneakers",
    price: 125,
    mrp: 120,
    description:
      "Lightweight everyday sneakers designed for comfort and urban style.",
    image: "/products/1.jpg",
    rating: 4.1,
    reviews: 350,
  },
  {
    id: 2,
    title: "Classic Leather Sneakers",
    price: 185,
    mrp: 170,
    description:
      "Timeless leather sneakers with a clean look perfect for daily wear.",
    image: "/products/2.jpg",
    rating: 4.2,
    reviews: 320,
  },
  {
    id: 3,
    title: "AirFlex Running Shoes",
    price: 140,
    mrp: 220,
    description:
      "Breathable running shoes with cushioned soles for maximum performance.",
    image: "/products/3.jpg",
    rating: 4.6,
    reviews: 720,
  },
  {
    id: 4,
    title: "StreetStyle High Tops",
    price: 350,
    mrp: 270,
    description:
      "High-top sneakers with bold streetwear aesthetics and durable build.",
    image: "/products/4.jpg",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 5,
    title: "SportX Training Shoes",
    price: 165,
    mrp: 320,
    description:
      "Multi-purpose training shoes built for gym sessions and active lifestyles.",
    image: "/products/5.jpg",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 6,
    title: "Velero Casual Sneakers",
    price: 110,
    mrp: 370,
    description:
      "Minimalist casual sneakers designed for everyday comfort and versatility.",
    image: "/products/6.jpg",
    rating: 4.2,
    reviews: 100,
  },
  {
    id: 7,
    title: "TrailMaster Outdoor Shoes",
    price: 155,
    mrp: 420,
    description:
      "Durable outdoor shoes with strong grip for hiking and rough terrain.",
    image: "/products/7.jpg",
    rating: 3.5,
    reviews: 1200,
  },
  {
    id: 8,
    title: "AirFlow Sport Sneakers",
    price: 180,
    mrp: 470,
    description:
      "Ultra-light sneakers with breathable mesh for long-day comfort.",
    image: "/products/8.jpg",
    rating: 3.6,
    reviews: 120,
  },
  {
    id: 9,
    title: "Classic White Sneakers",
    price: 165,
    mrp: 520,
    description: "Clean and versatile white sneakers that match every outfit.",
    image: "/products/9.jpg",
    rating: 2.5,
    reviews: 1250,
  },
  {
    id: 10,
    title: "ProRun Performance Shoes",
    price: 170,
    mrp: 570,
    description:
      "Performance-focused running shoes with responsive cushioning.",
    image: "/products/10.jpg",
    rating: 3.5,
    reviews: 120,
  },
  {
    id: 11,
    title: "Elite Sport Sneakers",
    price: 130,
    mrp: 620,
    description: "Premium athletic sneakers engineered for speed and comfort.",
    image: "/products/11.jpg",
    rating: 2.5,
    reviews: 120,
  },
  {
    id: 12,
    title: "Velero Signature Sneakers",
    price: 105,
    mrp: 670,
    description:
      "Signature Velero sneakers combining modern design with premium materials.",
    image: "/products/12.jpg",
    rating: 2.5,
    reviews: 10,
  },
  {
    id: 13,
    title: "Urban Runner Sneakers",
    price: 100,
    mrp: 120,
    description:
      "Lightweight everyday sneakers designed for comfort and urban style.",
    image: "/products/1.jpg",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 14,
    title: "Classic Leather Sneakers",
    price: 150,
    mrp: 170,
    description:
      "Timeless leather sneakers with a clean look perfect for daily wear.",
    image: "/products/2.jpg",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 15,
    title: "AirFlex Running Shoes",
    price: 200,
    mrp: 220,
    description:
      "Breathable running shoes with cushioned soles for maximum performance.",
    image: "/products/3.jpg",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 16,
    title: "StreetStyle High Tops",
    price: 250,
    mrp: 270,
    description:
      "High-top sneakers with bold streetwear aesthetics and durable build.",
    image: "/products/4.jpg",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 17,
    title: "SportX Training Shoes",
    price: 300,
    mrp: 320,
    description:
      "Multi-purpose training shoes built for gym sessions and active lifestyles.",
    image: "/products/5.jpg",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 18,
    title: "Velero Casual Sneakers",
    price: 350,
    mrp: 370,
    description:
      "Minimalist casual sneakers designed for everyday comfort and versatility.",
    image: "/products/6.jpg",
    rating: 4.2,
    reviews: 100,
  },
  {
    id: 19,
    title: "TrailMaster Outdoor Shoes",
    price: 400,
    mrp: 420,
    description:
      "Durable outdoor shoes with strong grip for hiking and rough terrain.",
    image: "/products/7.jpg",
    rating: 3.5,
    reviews: 1200,
  },
  {
    id: 20,
    title: "AirFlow Sport Sneakers",
    price: 450,
    mrp: 470,
    description:
      "Ultra-light sneakers with breathable mesh for long-day comfort.",
    image: "/products/8.jpg",
    rating: 4.8,
    reviews: 120,
  },
  {
    id: 21,
    title: "Classic White Sneakers",
    price: 500,
    mrp: 520,
    description: "Clean and versatile white sneakers that match every outfit.",
    image: "/products/9.jpg",
    rating: 4.7,
    reviews: 1250,
  },
  {
    id: 22,
    title: "ProRun Performance Shoes",
    price: 550,
    mrp: 570,
    description:
      "Performance-focused running shoes with responsive cushioning.",
    image: "/products/10.jpg",
    rating: 3.5,
    reviews: 120,
  },
  {
    id: 23,
    title: "Elite Sport Sneakers",
    price: 600,
    mrp: 620,
    description: "Premium athletic sneakers engineered for speed and comfort.",
    image: "/products/11.jpg",
    rating: 2.5,
    reviews: 120,
  },
  {
    id: 24,
    title: "Velero Signature Sneakers",
    price: 650,
    mrp: 670,
    description:
      "Signature Velero sneakers combining modern design with premium materials.",
    image: "/products/12.jpg",
    rating: 4.9,
    reviews: 10,
  },
];
