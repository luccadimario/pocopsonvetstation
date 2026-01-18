"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Calendar, Clock, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function BookAppointmentPage() {
  // Try to open Otto widget when page loads
  useEffect(() => {
    // Give Otto a moment to initialize, then try to open it
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        // Otto/Televet widgets often have an open method
        const win = window as typeof window & {
          otto?: { open?: () => void };
          televet?: { open?: () => void };
        };
        if (win.otto?.open) {
          win.otto.open();
        } else if (win.televet?.open) {
          win.televet.open();
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] bg-gray-800">
        <Image
          src="/images/placeholders/pazzo_slide_74.webp"
          alt="Book an appointment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 via-30% to-transparent to-60%" />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Schedule Your Visit
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              We're here to provide the best care for your furry family members
            </p>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Book Your Appointment
              </h2>
              <p className="text-xl text-gray-600">
                Use our convenient chat assistant to schedule your pet's visit,
                or give us a call!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Chat Option */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-burgundy-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-burgundy-100 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-burgundy-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-burgundy-600 mb-3">
                    Chat With Us
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Use the chat widget in the bottom right corner of your
                    screen to book appointments, ask questions, or get help
                    anytime.
                  </p>
                  <p className="text-sm text-gray-500">
                    Look for the chat icon in the bottom right corner
                  </p>
                </CardContent>
              </Card>

              {/* Phone Option */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                    Call Us Directly
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Prefer to speak with someone? Our friendly staff is happy to
                    help schedule your appointment.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Hours Reminder */}
            <Card className="bg-gradient-to-br from-cream-50 to-burgundy-50 border-2 border-burgundy-100">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-burgundy-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-burgundy-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-burgundy-600 mb-3">
                      Our Hours
                    </h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-gray-700">
                      {siteConfig.hours.map((schedule, index) => (
                        <p key={index} className="flex justify-between gap-4">
                          <span className="font-medium">{schedule.day}:</span>
                          <span>{schedule.hours}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <div className="mt-12">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
                What to Expect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Easy Scheduling
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Book online or by phone - we'll find a time that works for
                    you
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Confirmation</h4>
                  <p className="text-gray-600 text-sm">
                    You'll receive a confirmation with all the details for your
                    visit
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Arrive Ready</h4>
                  <p className="text-gray-600 text-sm">
                    Bring any records and arrive 10 minutes early for new visits
                  </p>
                </div>
              </div>
            </div>

            {/* New Clients CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">First time visiting us?</p>
              <Button
                asChild
                variant="outline"
                className="border-burgundy-500 text-burgundy-600"
              >
                <Link href="/new-clients">New Client Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
