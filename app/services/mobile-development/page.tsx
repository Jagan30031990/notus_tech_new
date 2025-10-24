
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import MobileDevHero from './MobileDevHero';
import MobileDevServices from './MobileDevServices';
import MobileDevCTA from './MobileDevCTA';
import FAQSection from '../../../components/FAQSection';

export default function MobileDevelopmentPage() {
  const mobileFAQs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Development time varies based on complexity. Simple apps take 2-4 months, while complex apps with advanced features can take 6-12 months. We provide detailed timelines during consultation."
    },
    {
      question: "Should I build a native app or cross-platform app?",
      answer: "Native apps offer best performance and platform-specific features, ideal for complex applications. Cross-platform is cost-effective for simpler apps targeting multiple platforms simultaneously."
    },
    {
      question: "What's included in your mobile app development service?",
      answer: "Complete end-to-end service including consultation, UI/UX design, development, testing, deployment, and 3 months of free maintenance and support."
    },
    {
      question: "Do you help with app store submissions?",
      answer: "Yes, we handle the complete app store submission process for both iOS App Store and Google Play Store, including optimization for better visibility."
    },
    {
      question: "Can you integrate my app with existing business systems?",
      answer: "Absolutely! We specialize in API integration and can connect your mobile app with CRM, ERP, payment gateways, and other business systems."
    },
    {
      question: "What technologies do you use for mobile development?",
      answer: "For native: iOS (Swift, Objective-C), Android (Kotlin, Java). For cross-platform: React Native, Flutter, Xamarin. We choose based on your specific requirements."
    },
    {
      question: "Do you provide ongoing maintenance and updates?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, OS compatibility updates, and feature enhancements."
    },
    {
      question: "How much does mobile app development cost?",
      answer: "Costs vary based on features, complexity, and platform. Simple apps start from $10K, while complex enterprise apps can range $50K+. We provide detailed quotes after requirements analysis."
    },
    {
      question: "Can you develop IoT and wearable apps?",
      answer: "Yes, we have expertise in IoT integration and wearable app development for Apple Watch, Android Wear, fitness trackers, and smart home devices."
    },
    {
      question: "What about app security and data protection?",
      answer: "We implement enterprise-grade security including data encryption, secure authentication, API security, and comply with GDPR, HIPAA, and other privacy regulations."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <MobileDevHero />
      <MobileDevServices />
      <FAQSection faqs={mobileFAQs} />
      <MobileDevCTA />
      <Footer />
    </div>
  );
}
