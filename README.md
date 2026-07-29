# 💍 Wedora — Everything for Your Dream Wedding

![Wedora](https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80)

> A modern, Apple-inspired luxury wedding shopping web application built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons. Featuring an iOS glassmorphism design system with a clean light-blue and white palette.

---

## ✨ Live Preview

**GitHub Repository:** [https://github.com/prathamgk0001/wedora](https://github.com/prathamgk0001/wedora)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI component library |
| **Vite 6** | Lightning-fast build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion** | Smooth page transitions & animations |
| **Lucide React** | Minimal icon set |
| **React Router DOM 6** | Client-side routing |
| **JavaScript (JSX)** | No TypeScript — pure `.jsx` files |

---

## 🎨 Design System

### iOS Glassmorphism Theme

| Token | Value |
|---|---|
| **Primary Blue** | `#3B82F6` |
| **Light Blue** | `#60A5FA` |
| **Sky Blue** | `#BFDBFE` |
| **Background** | `#F8FBFF` |
| **Glass** | `rgba(255, 255, 255, 0.65)` + `backdrop-blur-xl` |
| **Text** | `#0F172A` |
| **Secondary Text** | `#64748B` |
| **Border** | `rgba(255, 255, 255, 0.80)` |
| **Border Radius** | `24px` (`rounded-3xl`) |
| **Currency** | Indian Rupees `₹` |

---

## 📁 Folder Structure

```
wedshop/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx          # Floating glass navbar with cart & wishlist badges
│   │   ├── Footer.jsx          # Brand, quick links, social icons
│   │   ├── Hero.jsx            # Full-screen wedding background hero section
│   │   ├── CategoryCard.jsx    # Glass category cards with hover lift
│   │   ├── ProductCard.jsx     # Glass product card with wishlist & quick-view
│   │   ├── ProductGrid.jsx     # Responsive product grid wrapper
│   │   ├── SearchBar.jsx       # Live search with autocomplete dropdown
│   │   ├── Button.jsx          # Reusable button component (6 variants)
│   │   ├── GlassCard.jsx       # Base iOS glassmorphic card component
│   │   ├── CartItem.jsx        # Cart item row with quantity stepper
│   │   ├── WishlistItem.jsx    # Wishlist item row with move-to-cart
│   │   ├── Loader.jsx          # Animated spinner loader
│   │   ├── Toast.jsx           # iOS notification toast (cart/wishlist)
│   │   └── QuickViewModal.jsx  # Quick product preview modal
│   ├── context/
│   │   └── ShopContext.jsx     # Global state: cart, wishlist, search, toasts
│   ├── data/
│   │   ├── categories.js       # 10 wedding categories
│   │   └── products.js         # 30 luxury demo products (INR pricing)
│   ├── hooks/
│   │   └── useDebounce.js      # Debounce hook for search input
│   ├── layouts/
│   │   └── MainLayout.jsx      # Navbar + Outlet + Footer + Toast wrapper
│   ├── pages/
│   │   ├── Home.jsx            # Hero, categories, trending, new arrivals
│   │   ├── Products.jsx        # Catalog with filters, sort, search
│   │   ├── ProductDetails.jsx  # Product detail view with specs & related items
│   │   ├── Categories.jsx      # All 10 categories grid with search
│   │   ├── Wishlist.jsx        # Saved items manager
│   │   ├── Cart.jsx            # Cart with order summary & checkout modal
│   │   ├── About.jsx           # Brand story & stats
│   │   ├── Contact.jsx         # Contact form with FAQ accordion
│   │   ├── Login.jsx           # iOS glass login page (split layout)
│   │   ├── Signup.jsx          # iOS glass signup page (split layout)
│   │   └── NotFound.jsx        # Custom 404 page
│   ├── styles/
│   │   └── index.css           # Tailwind base + glassmorphism utilities
│   ├── App.jsx                 # React Router setup with all routes
│   └── main.jsx                # React DOM entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## 📦 Installation & Setup

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### 1. Clone the repository

```bash
git clone https://github.com/prathamgk0001/wedora.git
cd wedora
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be live at **http://localhost:5173**

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero section, categories, trending & new arrivals |
| `/products` | Products | Full catalog with filters, search & sort |
| `/product/:id` | Product Details | Individual product view with specs |
| `/categories` | Categories | All 10 wedding categories grid |
| `/wishlist` | Wishlist | Saved items with move-to-cart |
| `/cart` | Cart | Order summary, promo code & checkout UI |
| `/about` | About | Brand story, values & stats |
| `/contact` | Contact | Glass form + FAQ accordion |
| `/login` | Login | iOS glass split-screen login |
| `/signup` | Signup | iOS glass split-screen registration |
| `*` | 404 | Custom not found page |

---

## 🛍️ Wedding Categories

| # | Category |
|---|---|
| 1 | 👰 Bridal Wear |
| 2 | 🤵 Groom Wear |
| 3 | 💎 Jewellery |
| 4 | 💍 Wedding Rings |
| 5 | 🌸 Decoration |
| 6 | ✉️ Invitation Cards |
| 7 | 👠 Footwear |
| 8 | ⌚ Accessories |
| 9 | 🎁 Return Gifts |
| 10 | 📦 Wedding Essentials |

---

## ⚡ Features

### 🛒 Shopping
- ✅ Add to cart with quantity control
- ✅ Real-time cart total (₹ INR)
- ✅ Promo code support (`WEDORA10`)
- ✅ Simulated iOS-style checkout modal
- ✅ LocalStorage persistence (cart & wishlist)

### ❤️ Wishlist
- ✅ Toggle save/unsave on any product
- ✅ Move individual or all items to cart
- ✅ Persistent across page refresh

### 🔍 Search
- ✅ Live autocomplete search dropdown in navbar
- ✅ Full text search in Products page
- ✅ Filter by category, `New`, `Trending`
- ✅ Sort by Price (Low→High, High→Low) and Rating

### 🎨 UI / UX
- ✅ iOS Glassmorphism design throughout
- ✅ Framer Motion page transitions & hover animations
- ✅ QuickView product modal
- ✅ Toast notifications for cart & wishlist actions
- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Custom scrollbar styling

### 🔐 Auth Pages
- ✅ Login page — split layout with wedding image, glass form, social login buttons
- ✅ Signup page — with full validation, success animation & redirect
- ✅ Password show/hide toggle

---

## 🖼️ Screenshots

### Home — Hero Section
> Full-screen wedding background with floating product glass card

### Products — Catalog View
> Glass product cards with New/Trending badges, wishlist heart, quick-view

### Cart — Order Summary
> Glass cart items, quantity steppers, INR total, promo code, checkout modal

### Login / Signup
> Split-screen iOS glass authentication pages

---

## 📝 Data Structure

All data is stored in local JS files — **no backend, no API, no database**.

### Product Object
```js
{
  id: "prod-1",
  title: "Royal Crimson Zardozi Lehenga",
  price: 185000,           // Indian Rupees (₹)
  rating: 4.9,
  category: "bridal-wear",
  image: "https://...",   // Unsplash high-quality images
  description: "...",
  isNew: true,
  isTrending: true,
  specs: {
    Fabric: "Raw Silk & Velvet",
    Work: "Hand Zardozi",
    Colors: "Crimson Red / Antique Gold",
    Origin: "Jaipur Atelier"
  }
}
```

### Category Object
```js
{
  id: "bridal-wear",
  name: "Bridal Wear",
  itemCount: 4,
  icon: "Sparkles",       // Lucide icon name
  image: "https://...",
  description: "Royal lehengas, silk sarees & luxury bridal gowns."
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m 'Add my feature'`
4. Push to branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Pratham GK**
- GitHub: [@prathamgk0001](https://github.com/prathamgk0001)
- Repository: [github.com/prathamgk0001/wedora](https://github.com/prathamgk0001/wedora)

---

<p align="center">
  Crafted with ❤️ for your special day — <strong>Wedora</strong>
</p>
