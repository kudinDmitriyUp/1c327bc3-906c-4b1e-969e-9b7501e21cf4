"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Bevel"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Experience Luxury Redefined"
          description="Step into elegance. Our premium boutique hotel offers personalized service, stunning design, and unforgettable moments in the heart of the city."
          tag="Welcome to Bevel"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143608257-tivl9ojy.jpg",
              imageAlt: "Luxury hotel suite"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143609118-574dopf5.jpg",
              imageAlt: "Hotel lobby"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143609992-4l87p9op.jpg",
              imageAlt: "Restaurant area"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143610786-vunhf5n9.jpg",
              imageAlt: "Spa and wellness"
            }
          ]}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          title="Where Hospitality Meets Artistry"
          description="Founded on the principle that every guest deserves extraordinary care, Bevel combines timeless elegance with modern comfort. Our team is dedicated to crafting unforgettable experiences, one stay at a time."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143611651-josy2rea.jpg",
            imageAlt: "Hotel booking experience"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143612520-36dpde4x.jpg",
            imageAlt: "Guest app interface"
          }}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="World-Class Amenities"
          description="Discover the services that make your stay exceptional"
          tag="Premium Services"
          features={[
            {
              id: "01",
              title: "Concierge Service",
              description: "24/7 dedicated concierge to arrange dining, entertainment, and travel. Your every need is our priority.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143613176-c8pr2092.jpg",
              imageAlt: "Concierge service"
            },
            {
              id: "02",
              title: "Rooftop Terrace",
              description: "Unwind on our exclusive rooftop with panoramic city views, curated cocktails, and Mediterranean cuisine.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143613679-vgm4tf5r.jpg",
              imageAlt: "Rooftop terrace"
            },
            {
              id: "03",
              title: "Spa & Wellness",
              description: "Rejuvenate with our signature treatments in a sanctuary of calm. Holistic wellness for body and mind.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143614338-3q7uduk8.jpg",
              imageAlt: "Spa treatment"
            },
            {
              id: "04",
              title: "Fine Dining",
              description: "Award-winning chefs craft culinary masterpieces using the finest seasonal ingredients locally sourced.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143615030-afv9i340.jpg",
              imageAlt: "Restaurant"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Team"
          description="Exceptional people creating exceptional experiences"
          tag="Our Experts"
          members={[
            {
              id: "1",
              name: "Margot Leclerc",
              role: "General Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143616007-bu5jbz62.jpg",
              imageAlt: "Margot Leclerc",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            },
            {
              id: "2",
              name: "Guillaume Devereaux",
              role: "Concierge Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143616987-7u6jvipy.jpg",
              imageAlt: "Guillaume Devereaux",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            },
            {
              id: "3",
              name: "Sophie Renard",
              role: "Executive Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143618137-gkolmyss.jpg",
              imageAlt: "Sophie Renard",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            },
            {
              id: "4",
              name: "Laurent Beaumont",
              role: "Housekeeping Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143618824-03czyxy1.jpg",
              imageAlt: "Laurent Beaumont",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com" }]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Guest Reviews"
          description="Hear from those who have experienced Bevel"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Victoria Hart",
              handle: "@victoriaheart",
              testimonial: "Absolutely perfect. The attention to detail is remarkable. Every moment of our stay felt carefully curated. We will definitely return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143619586-zpdsbxjj.jpg",
              imageAlt: "Victoria Hart"
            },
            {
              id: "2",
              name: "James Mitchell",
              handle: "@jamesmitchell",
              testimonial: "The best hotel experience I have ever had. Elegant, luxurious, and the staff treated us like family. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143620455-i2w3oxlf.jpg",
              imageAlt: "James Mitchell"
            },
            {
              id: "3",
              name: "Emma Richardson",
              handle: "@emmarichardson",
              testimonial: "Bevel exceeded all expectations. The rooftop views are breathtaking and the dining was exquisite. Worth every penny.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143621329-t4z9s7o0.jpg",
              imageAlt: "Emma Richardson"
            },
            {
              id: "4",
              name: "Alexander Costa",
              handle: "@alexcosta",
              testimonial: "A sanctuary of elegance and comfort. The spa treatments are world-class and the concierge service is unparalleled.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143621993-rpjdjiwi.jpg",
              imageAlt: "Alexander Costa"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay"
          tag="Help & Support"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, our concierge team can arrange airport pickup and drop-off services. Please contact us in advance to arrange this amenity."
            },
            {
              id: "3",
              title: "Is there a cancellation policy?",
              content: "Cancellations made 48 hours prior to arrival receive a full refund. Cancellations within 48 hours will be charged one night's stay."
            },
            {
              id: "4",
              title: "What dining options are available?",
              content: "We offer fine dining at our restaurant, rooftop bar with cocktails, and room service available 24/7. Special dietary requirements can be accommodated."
            },
            {
              id: "5",
              title: "Do you have parking facilities?",
              content: "Yes, we offer secure underground parking for our guests. Rates apply for stays longer than 3 nights."
            },
            {
              id: "6",
              title: "Can I host events at the hotel?",
              content: "Absolutely. Our event spaces are perfect for intimate gatherings, conferences, and celebrations. Contact our events manager for details."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143622621-xj7ajeut.jpg"
          imageAlt="Hotel concierge service"
          mediaPosition="right"
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready for your next escape?"
          description="Subscribe to our newsletter for exclusive offers, travel tips, and first access to special promotions. Join our community of discerning travelers."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764143624200-27ylsru1.jpg"
          imageAlt="Hotel contact"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime from our newsletter."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Bevel"
          copyrightText="© Bevel Luxury Hotels, 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Dining", href: "services" },
                { label: "Spa & Wellness", href: "services" },
                { label: "Concierge", href: "services" }
              ]
            },
            {
              title: "Policies",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Cancellation", href: "#" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Email", href: "mailto:hello@bevel.hotel" },
                { label: "Phone", href: "tel:+1234567890" },
                { label: "Address", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}