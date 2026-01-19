import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Heart, MapPin, Phone, Shield, Syringe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VaccinationsPage() {
  const highlights = [
    {
      icon: Shield,
      title: "Disease Protection",
      description:
        "Vaccinations prepare your pet's immune system to respond to specific diseases, reducing the risk of serious illness.",
    },
    {
      icon: Heart,
      title: "Tailored to Your Pet",
      description:
        "Vaccine plans are customized based on your pet's age, lifestyle, health status, and environment.",
    },
    {
      icon: MapPin,
      title: "Regional Expertise",
      description:
        "We understand the unique risks of living in our area and recommend vaccines accordingly.",
    },
    {
      icon: Calendar,
      title: "Lifelong Wellness",
      description:
        "Vaccination is an integral part of an overall preventive health plan that supports lifelong wellness.",
    },
  ];

  const faqs = [
    {
      question: "Why does my pet need vaccinations?",
      answer:
        "Vaccinations help reduce the risk of contagious diseases by preparing your pet's immune system to respond. They are a key part of preventive care and can help protect both individual pets and the broader pet community.",
    },
    {
      question: "Are vaccines the same for every pet?",
      answer:
        "No. Vaccine recommendations can vary based on your pet's age, lifestyle, health status, and exposure risk. We tailor vaccine plans to your pet's individual needs.",
    },
    {
      question: "What vaccines are required for my pet?",
      answer:
        "Requirements can depend on factors like species, age, and local regulations. We can explain which vaccines are required and which are recommended based on your pet's situation.",
    },
    {
      question: "How often does my pet need booster vaccines?",
      answer:
        "Booster schedules vary by vaccine type and your pet's health history. During your visit, we'll review your pet's records and recommend an appropriate schedule.",
    },
    {
      question: "Can my pet have a reaction to vaccines?",
      answer:
        "Most pets do very well with vaccinations. Mild side effects can occur, and serious reactions are uncommon. We'll review what to watch for and answer questions based on your pet's history.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-cream-50 to-burgundy-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Preventive Care
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Pet Vaccinations 💉
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Protect your furry friends with gentle, caring immunizations
              tailored to their unique needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-burgundy-500 hover:bg-burgundy-600"
                asChild
              >
                <Link href="/book-appointment">Schedule Vaccinations</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-burgundy-500 text-burgundy-600 hover:bg-burgundy-50"
                asChild
              >
                <a href="tel:6107933200">
                  <Phone className="mr-2 h-5 w-5" />
                  (610) 793-3200
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Why Vaccines Matter for Dogs and Cats
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Pocopson Veterinary Station, we believe vaccination is one
                  of the most important ways to protect your pet's health. Pets
                  can be exposed to a variety of contagious diseases, and
                  staying current on recommended vaccines helps reduce the risk
                  of serious illness.
                </p>
                <div className="bg-gradient-to-br from-green-50 to-cream-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Vaccinations help support your pet's immune system by
                    preparing it to respond to specific diseases. Because
                    exposure risks vary by lifestyle, age, health status, and
                    environment, vaccine plans should be tailored to the
                    individual pet.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We're happy to discuss which vaccines are recommended for
                    your pet and explain the unique risks of living in our area.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholders/vaccination-300x200.jpg"
                  alt="Pet vaccination"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Protecting Your Pet's Health 💉
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Personalized vaccine recommendations for our region
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-2 hover:border-green-200"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mb-4">
                    <highlight.icon className="h-7 w-7 text-green-600" />
                  </div>
                  <CardTitle className="text-green-700 text-xl">
                    {highlight.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive Care Note */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-burgundy-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Preventive Care That Supports Lifelong Wellness
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our goal is to provide the highest level of care for your pet, and
              vaccination is an integral part of an overall preventive health
              plan. Regular wellness visits also allow us to review vaccine
              status, monitor health over time, and adjust recommendations as
              your pet's lifestyle changes.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-burgundy-500 text-burgundy-600 hover:bg-burgundy-50"
              asChild
            >
              <Link href="/services/wellness-exams">
                Learn About Wellness Exams →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about pet vaccinations
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-lg border-2 border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-burgundy-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-burgundy-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Questions About Vaccines? 🐾
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            We're here to help you understand your pet's vaccination needs and
            create a personalized plan for their health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/book-appointment">Schedule an Appointment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white hover:bg-white/20"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
