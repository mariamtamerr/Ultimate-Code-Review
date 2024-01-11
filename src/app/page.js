import About from "@/components/About";
import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Pricing2 from "@/components/Pricing2";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* navbar */}
      <Navbar/>

      {/* header */}
      <Header />

      {/* About Us */}
      <About />

      {/* our services */}
      <Services />

      {/* our clients */}
      <Clients />

      {/* <Testimonials/> */}

      {/* sign up and prices  */}
      <Pricing/>
      <Pricing2/>

      {/* Contact Us */}
      <div id="contact-us">
        <ContactUs/>
      </div>

      

      {/* footer */}
      <Footer/>



    </div>
  );
}
