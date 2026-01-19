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
  ExternalLink,
  Heart,
  Phone,
  Pill,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PharmacyPage() {
  const products = [
    {
      icon: Shield,
      title: "Flea & Tick Preventatives",
      description:
        "Protect your pet from fleas, ticks, and the diseases they carry with trusted preventive products.",
    },
    {
      icon: Heart,
      title: "Heartworm Preventatives",
      description:
        "Keep your pet safe from heartworm disease with monthly preventive medications.",
    },
    {
      icon: Pill,
      title: "Prescription Medications",
      description:
        "A full range of prescription medications and supportive care products for your pet's health needs.",
    },
    {
      icon: CheckCircle,
      title: "Quality Products",
      description:
        "All products sourced from reputable suppliers and stored under appropriate conditions.",
    },
  ];

  const faqs = [
    {
      question:
        "Why should I purchase pet medications from a veterinary pharmacy?",
      answer:
        "Veterinary pharmacies source medications from reputable suppliers and store them appropriately. Purchasing through your veterinarian also allows your pet's care team to help ensure the product is appropriate for your pet's needs.",
    },
    {
      question: "Do you carry flea, tick, and heartworm preventatives?",
      answer:
        "Yes. We carry popular flea and tick preventatives as well as heartworm preventatives. If you're unsure which option is best, we can help recommend a product based on your pet's lifestyle and risk factors.",
    },
    {
      question: "Can I request a prescription refill?",
      answer:
        "Yes. Contact our team and we'll help you with refill options based on your pet's prescription and medical history.",
    },
    {
      question: "How are medications stored in your pharmacy?",
      answer:
        "Medications and products are stored under appropriate conditions to support quality and effectiveness. Our team follows proper storage guidelines for veterinary pharmaceuticals.",
    },
    {
      question: "Do you offer over-the-counter products as well?",
      answer:
        "We carry a range of veterinary products, which may include prescription medications and commonly used supportive care items. Contact us to ask about a specific product or recommendation.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 via-cream-50 to-burgundy-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Convenience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Veterinary Pharmacy 💊
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Trusted medications and preventatives, conveniently on-site
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-burgundy-500 hover:bg-burgundy-600"
                asChild
              >
                <Link href="/prescription-refill">Request a Refill</Link>
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
                  Trusted Products from Reputable Sources
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Pocopson Veterinary Station is dedicated to providing the West
                  Chester community with the highest level of service, and that
                  includes convenient access to trusted medications.
                </p>
                <div className="bg-gradient-to-br from-red-50 to-cream-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We want you to feel confident about the medications and
                    products you give your pet. Our pharmacy is stocked with
                    quality brands from reputable suppliers.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If you're not sure what your pet needs or have questions
                    about a specific medication, our team can help guide you.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholders/pharmacy-2-300x200.jpg"
                  alt="Veterinary pharmacy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What We Carry 💊
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common medications and preventatives for your pet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-2 hover:border-red-200"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mb-4">
                    <product.icon className="h-7 w-7 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700 text-xl">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Pharmacy */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-burgundy-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-burgundy-100 flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="h-10 w-10 text-burgundy-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Shop Our Online Pharmacy
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Need medications delivered to your door? Visit our online pharmacy
              for convenient ordering and home delivery of your pet's
              prescriptions and preventatives.
            </p>
            <Button
              size="lg"
              className="bg-burgundy-500 hover:bg-burgundy-600"
              asChild
            >
              <a
                href="https://pocopsonvetstation.covetruspharmacy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Online Pharmacy →
              </a>
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
                Common questions about our pharmacy
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
            Questions About Our Pharmacy? 🐾
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            To learn more about our pharmacy offerings or to ask about a
            medication refill, reach out to our team!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/prescription-refill">Request a Refill</Link>
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
