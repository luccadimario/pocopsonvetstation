import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] bg-stone-300">
        <Image
          src="/images/placeholders/pazzo_slide_77.webp
          alt="Contact Pocopson Vet"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 via-30% to-transparent to-60%" />

        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              We're here to answer your questions and help your pets thrive!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
                  We'd Love to Hear From You!
                </h2>
              </div>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-burgundy-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-burgundy-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-burgundy-600 mb-2">
                      Call Us
                    </h3>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                      className="text-2xl font-bold text-gray-900 hover:text-burgundy-500 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-gray-600 mt-2">
                      Call during business hours or leave a message!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-burgundy-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-burgundy-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-burgundy-600 mb-2">
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xl font-bold text-gray-900 hover:text-burgundy-500 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-gray-600 mt-2">
                      Send us a message and we'll get back to you soon!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-burgundy-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-burgundy-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-burgundy-600 mb-2">
                      Visit Us
                    </h3>
                    <p className="text-lg font-medium text-gray-900">
                      {siteConfig.contact.address.street}
                      <br />
                      {siteConfig.contact.address.city},{" "}
                      {siteConfig.contact.address.state}{" "}
                      {siteConfig.contact.address.zip}
                    </p>
                    <p className="text-gray-600 mt-2">
                      In our charming 1893 railroad station building
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-burgundy-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-burgundy-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-burgundy-600 mb-2">
                      Office Hours
                    </h3>
                    <div className="space-y-1 text-gray-900">
                      {siteConfig.hours.map((schedule, index) => (
                        <p key={index} className="flex justify-between gap-4">
                          <span className="font-medium">{schedule.day}:</span>
                          <span>{schedule.hours}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder & Quick Actions */}
            <div className="space-y-6">
              <div className="rounded-2xl h-[400px] overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=Pocopson+Veterinary+Station,2100+West+Street+Rd,West+Chester,PA+19382&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pocopson Veterinary Station Location"
                />
              </div>

              <Card className="bg-gradient-to-br from-burgundy-50 to-cream-50 border-2 border-burgundy-100">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl text-burgundy-600 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-burgundy-500 hover:bg-burgundy-600"
                      size="lg"
                      asChild
                    >
                      <Link href="/book-appointment">Book an Appointment</Link>
                    </Button>
                    <Button
                      className="w-full"
                      variant="outline"
                      size="lg"
                      asChild
                    >
                      <Link href="/prescription-refill">
                        Request Prescription Refill
                      </Link>
                    </Button>
                    <Button
                      className="w-full"
                      variant="outline"
                      size="lg"
                      asChild
                    >
                      <Link href="/emergencies">Emergency Information</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              {/*
              <Card className="bg-blue-50 border-2 border-blue-200">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-heading font-bold text-lg text-blue-900 mb-2">
                    Need Immediate Help?
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Our live chat is available during business hours!
                  </p>
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                    Chat widget coming soon
                  </div>
                </CardContent>
              </Card>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
              Finding Us 🚗
            </h2>
            <div className="prose prose-lg max-w-none">
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl text-burgundy-600 mb-4">
                    Directions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We're conveniently located on West Street Road (Route 926)
                    in West Chester, PA. Look for our charming historic railroad
                    station building - you can't miss it!
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>From Route 1:</strong> Take Route 926 West. We're
                    approximately 2 miles on the right.
                  </p>
                  <p className="text-gray-700">
                    <strong>Parking:</strong> Free parking is available in our
                    lot adjacent to the building.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
