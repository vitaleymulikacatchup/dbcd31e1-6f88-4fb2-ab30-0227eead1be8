"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Clock, CreditCard, Crown, Dumbbell, Heart, MessageCircle, Rocket, Sparkles, Star, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Pricing", id: "pricing" },
            { name: "Trainers", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="FitZone"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Transform Your Body, Transform Your Life"
          description="Join FitZone and discover your strongest, healthiest self with expert trainers, state-of-the-art equipment, and a supportive community."
          tag="Premium Fitness"
          tagIcon={Zap}
          buttons={[
            { text: "Start Your Journey", href: "pricing" },
            { text: "Take a Tour", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern gym with professional equipment"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose FitZone"
          description="We're more than just a gym. We're your partners in achieving lasting fitness results through expert guidance, premium facilities, and unwavering support."
          tag="Our Difference"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Expert Trainers",
              description: "Certified professionals with years of experience helping members reach their goals",
              icon: Users
            },
            {
              title: "Premium Equipment",
              description: "State-of-the-art machines and free weights maintained to the highest standards",
              icon: Dumbbell
            },
            {
              title: "Flexible Scheduling",
              description: "24/7 access and classes that fit your busy lifestyle",
              icon: Clock
            },
            {
              title: "Results Guaranteed",
              description: "Proven track record with thousands of successful transformations",
              icon: Target
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7500131/pexels-photo-7500131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Person doing strength training workout"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Complete Fitness Solutions"
          description="Everything you need to achieve your fitness goals under one roof"
          tag="Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Strength Training",
              description: "Build muscle and increase power with our comprehensive weight training programs",
              imageSrc: "https://images.pexels.com/photos/7500131/pexels-photo-7500131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Strength training session"
            },
            {
              title: "Cardio Fitness",
              description: "Improve heart health and endurance with our varied cardio equipment and classes",
              imageSrc: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cardio workout session"
            },
            {
              title: "Personal Training",
              description: "One-on-one coaching tailored to your specific goals and fitness level",
              imageSrc: "https://images.pexels.com/photos/5793687/pexels-photo-5793687.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Personal training session"
            },
            {
              title: "Group Classes",
              description: "Fun, energetic classes that keep you motivated and engaged",
              imageSrc: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Group fitness class"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Membership Plans"
          description="Choose the perfect plan to start your fitness journey"
          tag="Pricing"
          tagIcon={CreditCard}
          plans={[
            {
              id: "basic",
              price: "$29/month",
              name: "Basic Plan",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "24/7 gym access",
                "Basic equipment usage",
                "Locker room access",
                "Mobile app access"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$59/month",
              name: "Premium Plan",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "Everything in Basic",
                "Unlimited group classes",
                "Guest pass privileges",
                "Nutritional guidance",
                "Priority booking"
              ]
            },
            {
              id: "elite",
              price: "$89/month",
              name: "Elite Plan",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "Everything in Premium",
                "Personal training sessions",
                "Exclusive member events",
                "Advanced body composition analysis",
                "Priority equipment access"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Proven Results"
          description="Numbers that speak to our commitment to your success"
          tag="Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "5000+",
              title: "Members",
              description: "Active fitness enthusiasts achieving their goals",
              icon: Users
            },
            {
              id: "2",
              value: "98%",
              title: "Satisfaction",
              description: "Member retention rate year over year",
              icon: Heart
            },
            {
              id: "3",
              value: "15",
              title: "Years",
              description: "Of excellence in fitness and wellness",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Your Trainers"
          description="Our certified professionals are here to guide your fitness journey"
          tag="Expert Team"
          tagIcon={Star}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Head Trainer",
              description: "10+ years of experience in strength training and nutrition coaching. Specializes in weight loss and muscle building programs.",
              imageSrc: "https://images.pexels.com/photos/5916354/pexels-photo-5916354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson - Head Trainer"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Fitness Coach",
              description: "Former professional athlete turned coach. Expert in sports performance and injury prevention training.",
              imageSrc: "https://images.pexels.com/photos/8173463/pexels-photo-8173463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Chen - Fitness Coach"
            },
            {
              id: "3",
              name: "Lisa Rodriguez",
              role: "Yoga Instructor",
              description: "Certified yoga instructor and wellness coach. Focuses on flexibility, mindfulness, and stress reduction.",
              imageSrc: "https://images.pexels.com/photos/6740309/pexels-photo-6740309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Rodriguez - Yoga Instructor"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Cardio Specialist",
              description: "Marathon runner and cardio expert. Helps members improve endurance and cardiovascular health.",
              imageSrc: "https://images.pexels.com/photos/4999845/pexels-photo-4999845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim - Cardio Specialist"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Success Stories"
          description="Real transformations from real members"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Emily Davis",
              role: "Marketing Manager",
              company: "TechCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6972784/pexels-photo-6972784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Davis testimonial"
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Software Engineer",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6311448/pexels-photo-6311448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Wilson testimonial"
            },
            {
              id: "3",
              name: "Maria Garcia",
              role: "Business Owner",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3838271/pexels-photo-3838271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Garcia testimonial"
            },
            {
              id: "4",
              name: "Robert Thompson",
              role: "Teacher",
              company: "City Schools",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/31216063/pexels-photo-31216063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Thompson testimonial"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Transform Your Life?"
          description="Join thousands of members who have already started their fitness journey. Get exclusive updates, fitness tips, and special offers."
          tagIcon={Rocket}
          inputPlaceholder="Enter your email address"
          buttonText="Start Today"
          termsText="By signing up, you agree to receive fitness tips and special offers. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                { label: "Personal Training", href: "feature" },
                { label: "Group Classes", href: "feature" },
                { label: "Nutrition Coaching", href: "feature" },
                { label: "Membership Plans", href: "pricing" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Trainers", href: "team" },
                { label: "Success Stories", href: "testimonial" },
                { label: "Contact Us", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "#" },
                { label: "Member Portal", href: "#" },
                { label: "Schedule", href: "#" },
                { label: "Location", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 | FitZone Gym"
        />
      </div>
    </ThemeProvider>
  );
}