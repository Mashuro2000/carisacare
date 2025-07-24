"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Heart, Users, Shield, Clock, CheckCircle, Star, Brain, Home, Stethoscope, Menu, X, User, Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { useState } from "react"

export default function CarisaCareLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Thanks! We've received your message.");
      form.reset();
    } else {
      alert('There was a problem sending your message. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo-assets/png/color_transparent_small.png" alt="Carisa Care" className="w-auto h-16" />
          </div>
          
          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-rose-600" />
              <span className="text-sm font-medium text-gray-700">+61 499 921 450</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-rose-600" />
              <span className="text-sm font-medium text-gray-700">info@carisacare.com.au</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-rose-600 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-rose-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {/* Mobile Contact Info */}
              <div className="space-y-3 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-rose-600" />
                  <span className="text-gray-700">+61 499 921 450</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-rose-600" />
                  <span className="text-gray-700">info@carisacare.com.au</span>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="space-y-3">
                <Link 
                  href="#services" 
                  className="block text-gray-700 hover:text-rose-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="#about" 
                  className="block text-gray-700 hover:text-rose-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="#contact" 
                  className="block text-gray-700 hover:text-rose-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  NDIS Registered Provider
                </h1>
                <h3 className="text-1xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Specialising in Mental Health Support
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  At Carisa Care, we provide personalised disability support services under the NDIS to empower individuals to live independently and achieve their goals with dignity and respect. 
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contact" scroll={true}>
                    <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg px-8 py-3">
                      Start Your Journey
                    </Button>
                  </Link>
                  <Link href="#services" scroll={true}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-rose-600 text-rose-600 hover:bg-rose-50 text-lg px-8 py-3"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="flex items-start space-x-6 pt-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-600">NDIS Registered Provider</span>
                    </div>
                    <Image src="/NDIS.png" alt="NDIS Logo" width={100} height={50} className="mt-2"/>
                  </div>
                  <div className="flex items-center space-x-2 pt-px">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm text-gray-600">5-Star Rated Service</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/stock_photos/friends-having-fun-together.jpg"
                  alt="Caring support worker with client"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-xl shadow-lg max-w-[280px] md:max-w-none">
                  <div className="flex items-center space-x-3">
                    <div className="bg-rose-100 p-2 md:p-3 rounded-full flex-shrink-0">
                      <Heart className="h-5 w-5 md:h-6 md:w-6 text-rose-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-sm md:text-base">500+ Happy Clients</p>
                      <p className="text-xs md:text-sm text-gray-600">Trusted NDIS Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Community Health Support Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of community health and disability support services tailored to meet your unique needs and goals under the NDIS.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-rose-100 p-3 rounded-full w-fit">
                    <Home className="h-8 w-8 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl">In Home Care</CardTitle>
                  <CardDescription>
                    Assistance with daily living activities, personal hygiene, and maintaining independence at home 24/7.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-full w-fit">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Community Access</CardTitle>
                  <CardDescription>
                    Support to engage in community activities, social events, and building meaningful relationships.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-fit">
                    <Brain className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Mental Health Support</CardTitle>
                  <CardDescription>
                    We specialise in mental health support services for complex mental health needs including bipolar disorder, schizophrenia, depression & anxiety, complex PTSD, and alcohol & other drugs addiction.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-purple-100 p-3 rounded-full w-fit">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Respite Care</CardTitle>
                  <CardDescription>
                    Short-term care services to give primary caregivers a break while ensuring quality support.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-orange-100 p-3 rounded-full w-fit">
                    <Home className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Supported Independent Living</CardTitle>
                  <CardDescription>
                    We support individuals to live independently and sustain stable accommodation with the help of support workers 24/7.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-teal-100 p-3 rounded-full w-fit">
                    <Stethoscope className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">Nursing Care</CardTitle>
                  <CardDescription>
                    We provide at home nursing care including medication management, wound care, and other nursing services.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="stock_photos/support_down.jpg"
                  alt="Our team of caring professionals"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">About Us</h2>
                <p className="text-lg text-gray-600">
                  We are a dedicated team with years of experience in disability and specialised mental health services, we understand that every individual is
                  unique. Our person-centered approach ensures that your goals, preferences, and choices are at the
                  heart of everything we do.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">NDIS Registered & Compliant</h3>
                      <p className="text-gray-600">
                        Fully registered NDIS provider meeting all quality and safety standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                      <p className="text-gray-600">
                        Qualified mental health clinicians and compassionate support workers with extensive training.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Flexible Support</h3>
                      <p className="text-gray-600">
                        Services tailored to your schedule, preferences, and individual needs.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-rose-600 hover:bg-rose-700 text-lg px-8 py-3">Meet Our Team</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
              <blockquote className="text-rose-600 italic text-xl font-semibold mb-4" style={{ opacity: 0.8 }}>
                "Connecting and caring together"
              </blockquote>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our highly qualified and compassionate mental professionals are dedicated to providing exceptional care.
                services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Team Member 1 */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-rose-100 rounded-full mx-auto flex items-center justify-center">
                      <User className="h-16 w-16 text-rose-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Margret Mutarisi</h3>
                  <p className="text-rose-600 font-medium mb-3">Social Worker</p>
                </CardContent>
              </Card>

              {/* Team Member 2 */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                      <User className="h-16 w-16 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Michelle Mashuro</h3>
                  <p className="text-blue-600 font-medium mb-3">Provisional Clinical Psychologist</p>
                </CardContent>
              </Card>

              {/* Team Member 3 */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                      <User className="h-16 w-16 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Alex Jameson</h3>
                  <p className="text-green-600 font-medium mb-3">Registered Nurse</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Real stories from the people we're proud to support</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-rose-50 border-rose-200">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Carisa Care has been amazing. The support workers are so caring and really understand my needs. I
                    feel more confident and independent now."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-rose-200 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-rose-700 font-semibold">S</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Sarah M.</p>
                      <p className="text-sm text-gray-600">NDIS Participant</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "The team at Carisa Care goes above and beyond. They've helped my son participate in community
                    activities and build friendships."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-blue-200 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">M</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Maria K.</p>
                      <p className="text-sm text-gray-600">Parent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Professional, reliable, and genuinely caring. Carisa Care has made such a positive difference in my
                    daily life."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-green-200 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-green-700 font-semibold">J</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">James R.</p>
                      <p className="text-sm text-gray-600">NDIS Participant</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">Ready to start your journey with Carisa Care? We're here to help.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-rose-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-rose-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">+61 499 921 450</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">info@carisacare.com.au</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Office</p>
                        <p className="text-gray-600">
                          17 Waterfall Avenue, Forestville, 2087, New South Wales
                          <br />
                          Services in Queensland and New South Wales
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">First Name</label>
                        <Input name="firstName" placeholder="Your first name" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name</label>
                        <Input name="lastName" placeholder="Your last name" required />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                      <Input name="email" type="email" placeholder="your.email@example.com" required />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
                      <Input name="phone" type="tel" placeholder="Your phone number" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                      <Textarea name="message" placeholder="Tell us about your support needs or ask any questions..." rows={4} required />
                    </div>

                    <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">Send Message</Button>
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src="/logo-assets/png/white_transparent_small.png" alt="Carisa Care" className="w-auto h-12" />
              <p className="text-gray-400">
                Providing compassionate NDIS support services across Australia with dignity, respect, and care.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="https://www.facebook.com/people/Carisa-Care/61573586196095/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link 
                  href="https://www.instagram.com/carisa__care/?igsh=cXlsM2Rmb3F0ZW1p&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    In Home Care
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Community Access
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Mental Health Support
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Respite Care
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Supported Independent Living
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Nursing Care
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Magnetic Health Services trading as Carisa Care. All rights reserved. | ABN:
              97 651 957 505
            </p>
          </div>
        </div>
      </footer>
      
      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  )
}
