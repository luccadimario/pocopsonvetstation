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
import {
  CheckCircle,
  Eye,
  Phone,
  Search,
  Shield,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DentalXraysPage() {
  const benefits = [
    {
      icon: Search,
      title: "Improved Diagnosis",
      description:
        "Reveals changes beneath the gums and within tooth roots that may not be visible during an exam.",
    },
    {
      icon: Eye,
      title: "Earlier Detection",
      description:
        "Helps identify developing dental issues before they become more painful or complex.",
    },
    {
      icon: CheckCircle,
      title: "Better Treatment Planning",
      description:
        "Gives our team the information needed to recommend the safest and most effective dental care.",
    },
    {
      icon: Stethoscope,
      title: "Comprehensive Care",
      description:
        "Supports thorough evaluations of the entire oral cavity, including the jaw and supporting structures.",
    },
  ];

  const faqs = [
    {
      question: "What is digital dental radiology for pets?",
      answer:
        "Digital dental radiology uses dental X-rays to capture images of your pet's teeth, roots, and jaw structures. It helps veterinarians evaluate the areas below the gumline that can't be seen during a routine oral exam.",
    },
    {
      question: "Why are dental X-rays important if my pet's teeth look fine?",
      answer:
        "Many dental problems occur beneath the gums or within the tooth roots. Even if the visible teeth look normal, X-rays can reveal hidden issues that may cause pain or progress over time.",
    },
    {
      question: "Are dental X-rays safe for my dog or cat?",
      answer:
        "Yes. Dental X-rays are considered safe, and our team follows established safety protocols. Digital imaging also allows for efficient exposure and clear diagnostic images.",
    },
    {
      question: "When might my pet need dental X-rays?",
      answer:
        "Dental X-rays are often recommended during professional dental cleanings and oral evaluations, especially when we need to assess the tooth roots, jaw health, or any suspected dental disease below the gumline.",
    },
    {
      question: "Do dental X-rays replace an oral exam?",
      answer:
        "No. Dental X-rays complement an oral exam. Together, they provide a more complete understanding of your pet's oral health so we can recommend appropriate care.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-cream-50 to-burgundy-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Advanced Imaging
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Digital Dental X-Rays 📷
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              See what the naked eye can't with advanced digital dental
              radiology
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-burgundy-500 hover:bg-burgundy-600"
                asChild
              >
                <Link href="/book-appointment">Schedule Dental Care</Link>
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
                  Why Digital Dental Radiology Matters
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Pocopson Veterinary Station, we're proud to stay on the
                  cutting edge of veterinary technology. Digital dental
                  radiology (dental X-rays) is especially valuable for pets
                  receiving dental care.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-cream-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Digital dental radiology helps us see what the naked eye
                    can't. While an oral exam can evaluate the visible surfaces
                    of the teeth and gums, dental X-rays provide a view of
                    what's happening below the gumline and within the jaw.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This deeper look helps our veterinarians detect, assess, and
                    prevent dental problems that can otherwise go unnoticed.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholders/dental-xray-300x225.jpg"
                  alt="Digital dental X-ray"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How Dental X-Rays Help Protect Your Pet 🦷
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A clearer picture of your pet's oral health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-2 hover:border-blue-200"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-700 text-xl">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Safe, Modern Technology
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Digital dental radiology is safe, and our staff is highly trained
              in proper techniques and safety protocols. Our goal is to provide
              your pet with the highest level of medical care possible, and
              advanced diagnostics like dental X-rays are one of the ways we
              help deliver that standard of care.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-burgundy-500 text-burgundy-600 hover:bg-burgundy-50"
              asChild
            >
              <Link href="/services/dental-care">
                Learn About Our Dental Care →
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
                Common questions about digital dental radiology
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
            Questions About Dental X-Rays? 🐾
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            If you'd like to learn more about digital dental radiology or
            schedule a dental visit for your pet, we're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/book-appointment">Schedule a Dental Visit</Link>
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
