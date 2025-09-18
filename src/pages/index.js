import Head from "next/head";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/home.css";
import Link from "next/link";
import moment from "moment";
import { NextSeo } from 'next-seo';

export default function Home({ categories, stores, blogs }) {
  // Helper function to validate image URLs
  const validImageSrc = (image) =>
    image && (image.startsWith("/") || image.startsWith("http"));

  return (
    <>
      <NextSeo
        title="Coupon.Template - Best Discount Code, Coupons & Promo Codes 2025"
        description="Find out the working and verified coupon codes only at Coupon.Template.com. All the coupons are tested and verified by the team."
      />
        
 <section className="hero-section">
    <div className="container">
      <div className="row align-items-center">
        
        {/* <!-- Left Content --> */}
        <div className="col-md-6">
          <span className="badge rounded-pill px-3 py-2 mb-3">
            Trusted by 1M+ Customers
          </span>
          <h1>
            Stay Healthy. <br /> Save More. Live Better.
          </h1>
          <p className="mt-3 mb-4">
            Discover top-quality healthcare & wellness products at exclusive prices.
            Earn rewards every time you shop.
          </p>

          <div className="d-flex gap-3 flex-wrap btnBox">
            <a href="#shop" className="btn btn-primary btn-lg">Shop Now</a>
            <a href="#offers" className="btn btn-outline-success btn-lg">View Offers</a>
          </div>

          <div className="d-flex gap-5 mt-5 flex-wrap heroTxt">
            <div className="highlight-box text-center">
              <h5>500+</h5>
              <small>Healthcare Brands</small>
            </div>
            {/* <div className="highlight-box text-center">
              <h5>Instant</h5>
              <small>Reward Points</small>
            </div> */}
            <div className="highlight-box text-center">
              <h5>24/7</h5>
              <small>Support</small>
            </div>
          </div>
        </div>

        {/* <!-- Right Image --> */}
        <div className="col-md-6 text-center mt-4 mt-md-0 heroImg">
          <Image 
                src={'/images/helathcare-hero.webp'}
                className="card-img-top" 
                width={600}
                height={400}
                alt="Product 1" 
            />
        </div>
      </div>
    </div>
  </section>

  <section id="products" className="promo-section">
    <div className="container">
      <h2>Popular Healthcare Products</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <Image 
                src={'/images/wellness.webp'}
                className="card-img-top" 
                width={200}
                height={120}
                alt="Product 1" 
            />
            <div className="card-body">
              <h5 className="card-title">Wellness Supplement</h5>
              <p className="card-text">Boost your immunity with daily vitamins.</p>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <Image 
                src={'/images/everherb.webp'}
                className="card-img-top" 
                width={200}
                height={120}
                alt="Product 1" 
            />
            <div className="card-body">
              <h5 className="card-title">Herbal Care</h5>
              <p className="card-text">Natural remedies for everyday health.</p>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <Image 
                src={'/images/fitness.webp'}
                className="card-img-top" 
                width={200}
                height={120}
                alt="Product 1" 
            />
            <div className="card-body">
              <h5 className="card-title">Fitness Essentials</h5>
              <p className="card-text">Stay active with premium fitness gear.</p>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="promo-section bg-light">
    <div className="container">
      <h2>Exclusive Health Offers</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <Image 
                src={'/images/skin-care.webp'}
                className="card-img-top" 
                width={200}
                height={120}
                alt="Product 1" 
            />
            <div className="card-body">
              <h5 className="card-title">50% Off on Skincare</h5>
              <p className="card-text">Pamper your skin with dermatologist-approved products.</p>
              <a href="#" className="btn btn-primary">Grab Deal</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
           <Image 
                src={'/images/everherb.webp'}
                className="card-img-top" 
                width={200}
                height={120}
                alt="Product 1" 
            />
            <div className="card-body">
              <h5 className="card-title">Buy 1 Get 1 Free</h5>
              <p className="card-text">On selected wellness products. Limited time!</p>
              <a href="#" className="btn btn-primary">Grab Deal</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
           <Image 
                src={'/images/wellness-p.webp'}
                className="card-img-top" 
                width={200}
                height={120}
                alt="Product 1" 
            />
            <div className="card-body">
              <h5 className="card-title">Buy 1 Get 1 Free</h5>
              <p className="card-text">On selected wellness products. Limited time!</p>
              <a href="#" className="btn btn-primary">Grab Deal</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="promo-section">
    <div className="container">
      <h2>New Arrivals</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card h-100">
            <Image 
                src={'/images/protienx.webp'}
                className="card-img-top" 
                width={200}
                height={120}
                alt="Product 1" 
            />
            <div className="card-body">
              <h5 className="card-title">Organic Protein Powder</h5>
              <p className="card-text">Fuel your workouts with plant-based protein.</p>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <Image 
                src={'/images/ortho.webp'}
                className="card-img-top" 
                width={200}
                height={120}
                alt="Product 1" 
            />
            <div className="card-body">
              <h5 className="card-title">Essential Oils Set</h5>
              <p className="card-text">Relax with pure essential oils collection.</p>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <Image 
                src={'/images/thermameter.webp'}
                className="card-img-top" 
                width={200}
                height={120}
                alt="Product 1" 
            />
            <div className="card-body">
              <h5 className="card-title">Digital Thermometer</h5>
              <p className="card-text">Accurate and fast readings for your health.</p>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
             <Image 
                src={'/images/tea.webp'}
                className="card-img-top" 
                width={200}
                height={120}
                alt="Product 1" 
            />
            <div className="card-body">
              <h5 className="card-title">Ayurvedic Tea Pack</h5>
              <p className="card-text">Detox and refresh with herbal teas.</p>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const [categoriesRes, storesRes, blogsRes] = await Promise.all([
      fetch(`https://backend.Coupon.Template.com/categories?ordering=title`),
      fetch(`https://backend.Coupon.Template.com/stores?ordering=title`),
      fetch(`https://backend.Coupon.Template.com/posts?ordering=-updated_at`),
    ]);

    const [categories, stores, blogs] = await Promise.all([
      categoriesRes.json(),
      storesRes.json(),
      blogsRes.json(),
    ]);

    return {
      props: { categories, stores, blogs },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { categories: [], stores: [], blogs: [] }, revalidate: 10 };
  }
}
