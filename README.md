# CasePix

![CasePix Banner](https://casepix.vercel.app/thumbnail.png)

**CasePix** is a sleek and intuitive e-commerce platform that allows users to design and purchase custom phone cases with their own images. The application provides a seamless design experience, enabling users to upload, position, and customize their images on a phone case without requiring authentication.

Once satisfied with their design, users can proceed to checkout after signing in, ensuring a smooth and uninterrupted experience. The platform integrates Stripe for secure payments and provides an admin dashboard for monitoring sales, order statuses, and business performance.

🚀 **Live Demo:** [CasePix](https://casepix.vercel.app/)

## 📖 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration (.env)](#configuration-env)
- [Usage](#usage)
- [Admin Dashboard](#admin-dashboard)

---

## ✨ Features

- **Instant Customization** – Users can upload and position images without authentication.
- **Drag & Drop Image Upload** – Powered by UploadThing for seamless file handling.
- **Live Design Preview** – Resize, reposition, and adjust images in real time.
- **Material & Finish Selection** – Choose from multiple phone models, materials, and finishes.
- **Secure Authentication** – Implemented via KindeAuth.
- **Persistent User Session** – Users are redirected back to their design after login/signup.
- **Stripe Payment Integration** – Secure and smooth checkout process.
- **Order Confirmation & Email** – Users receive an order summary with a visual mockup.
- **Admin Dashboard** – Monitor sales performance, order status, and business metrics.
- **Deployed on Vercel** – Ensuring high performance and scalability.

---

## 🛠️ Technology Stack

| Category           | Technologies Used                                               |
| ------------------ | --------------------------------------------------------------- |
| **Frontend**       | Next.js, React, TypeScript, Tailwind CSS, ShadCN, Framer Motion |
| **Backend**        | Next.js API Routes, Prisma, Zod                                 |
| **Database**       | PostgreSQL (NeonDB)                                             |
| **Authentication** | KindeAuth                                                       |
| **File Uploads**   | UploadThing                                                     |
| **Payments**       | Stripe                                                          |
| **Email Service**  | Resend                                                          |
| **Hosting**        | Vercel                                                          |

---

## 🛠 Installation

### Prerequisites

- **Node.js** (>= 18)
- **PostgreSQL Database**
- **Stripe Account**

### Steps

1. **Clone the repository**

   ```sh
   git clone https://github.com/the-nazzmul/casepix.git
   cd casepix
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables** (see `.env.example` below)

4. **Generate Prisma client**

   ```sh
   npx prisma generate
   ```

5. **Run the development server**
   ```sh
   npm run dev
   ```

---

## ⚙️ Configuration (.env)

Create a `.env` file in the root directory and configure the following:

```env
# Kinde Authentication
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_ISSUER_URL=your_kinde_issuer_url
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/auth-callback

# Admin Email
ADMIN_EMAIL=your_admin_email@example.com

# UploadThing API Keys
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

# Database Configuration
DATABASE_URL=your_postgresql_connection_url

# Stripe API Keys
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Server Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

🚨 **Important:** Never expose your `.env` file in public repositories. Use `.gitignore` to keep it secure.

---

## 🚀 Usage

1. **Start Designing** – Upload an image, position it on the phone case, and choose materials.
2. **Review Design** – View a summary with pricing and specifications.
3. **Login/Register** – Authenticate before proceeding to checkout.
4. **Checkout** – Securely pay using Stripe.
5. **Order Confirmation** – View a personalized mockup and receive an email confirmation.

---

## 📊 Admin Dashboard

The admin panel provides:

- **Sales Metrics** – Weekly and monthly goals tracking.
- **Order Management** – View order statuses and customer details.
- **Business Insights** – Monitor revenue and trends.

---

## 🌍 Live Demo & Repository

- **Live Site:** [CasePix](https://casepix.vercel.app/)
- **GitHub Repository:** [GitHub Link](https://github.com/yourusername/casepix)

---

🚀 **Enjoy creating your custom phone cases with CasePix!** 🎨📱
