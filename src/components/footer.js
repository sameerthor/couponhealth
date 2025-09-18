import Link from "next/link";
import Image from "next/image";


export default function Footer() {


    return (
        <>
            <>
                <footer id="footer">
                    <div className="footer-container">
                        {/* <!-- Left Section --> */}
                        <div className="footer-brand">
                            <Image
                                src={'/images/coupon-template-footer-logo.webp'}
                                    width="160"
                                    height="55"
                                    alt="logo"
                                    className="footer-logo"
                            />
                            <p>
                                    Discover trusted healthcare and wellness products at unbeatable prices. From medicines to daily essentials, shop conveniently, earn rewards, and enjoy exclusive offers. Stay healthy, save more, and experience professional care with our reliable, customer-focused healthcare platform.
                            </p>
                            {/* <div className="footer-social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-x-twitter"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-wordpress"></i></a>
                            </div> */}
                    
                        </div>

                        {/* <!-- Right Section (Links) --> */}
                        <div className="footer-links">
                            <div>
                                <h4>Shop</h4>
                                <a href="#">Medicines & Essentials</a>
                                <a href="#">Wellness Products</a>
                                <a href="#">Personal Care</a>
                                <a href="#">Fitness & Nutrition</a>
                            </div>
                            <div>
                                <h4>Services</h4>
                                <a href="#">Health Checkup Packages</a>
                                <a href="#">Doctor Consultations</a>
                                <a href="#">Lab Tests</a>
                                <a href="#">Pharmacy Offers</a>
                            </div>
                            <div>
                                <h4>Support</h4>
                                
                                <a href="#">FAQs</a>
                                <a href="#">Blog</a>
                                <a href="#">Contact</a>
                            </div>
                            <div>
                                <h4>Company</h4>
                                <a href="#">About Us</a>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className="copybox">
                        <p className="copyright text-center">© 2025 Coupon.Health. All rights reserved.</p>
                    </div>
                </footer>
            </>

        </>
    )

}
