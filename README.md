# Velora – Modern E-commerce UI

Velora is a modern e-commerce user interface built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

This project focuses on building a scalable frontend architecture with reusable components and modern UI patterns. It demonstrates how a real online store interface can be structured using **Next.js App Router**, **component-driven development**, and **clean UI design**.

### Live Demo: velora-ecommerce-pi.vercel.app


## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React
- LocalStorage

## Features

### Product Listing

- Responsive product grid
- Product cards with rating and pricing

### Product Detail

- Product preview modal
- Quantity selector
- Add to cart functionality

### Cart System

- Slide cart menu
- Cart items with total price calculation
- LocalStorage persistence

### Favorites

- Add / remove favorite products
- Favorite indicator in header

### Search

- Animated search placeholder
- Product filtering by name

### Filters

- Price: Low to High
- Price: High to Low
- Customer Rating

### Order Tracking Page

- Shipment timeline UI
- Order summary

### Support Center

- FAQ section
- Contact form

### Authentication UI

- Login page
- Register page
- Custom auth layout

### Dark Mode

- Dark mode support

## Project Structure

```bash
app
├─ (routes)
│  ├─ (home)
│  ├─ about
│  ├─ support
│  ├─ track-order
│  └─ cart
├─ auth
│  ├─ login
│  └─ register

components
├─ menu
├─ product
├─ ui

context
├─ cart-context.tsx
└─ favorites-context.tsx

public
├─ about
├─ products
└─ slider
```

### Installation

- Clone the repository: git clone https://github.com/sreyhan90/velora-ecommerce.git
- Go to the project folder: cd velora-ecommerce
- Run the development server: npm run dev
- Open in your browser: http://localhost:3000

### Future Improvements

- API integration

- Authentication system

- Payment integration

- Admin dashboard

- Product database

### Author

### Semir Reyhan
