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
import { CheckCircle, Heart, Home, Phone, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MicrochippingPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Permanent Identification",
      description:
        "A microchip can't fall off like a collar or tag can—it stays with your pet for life.",
    },
    {
      icon: Zap,
      title: "Quick, Simple Procedure",
      description:
        "Implanting the microchip is fast and typically causes minimal discomfort for your pet.",
    },
    {
      icon: CheckCircle,
      title: "Easy Reunification",
      description:
        "Found pets can be scanned and matched to your registered information at any vet or shelter.",
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description:
        "Microchipping adds an extra layer of protection if your pet ever slips out the door.",
    },
  ];

  const faqs = [
    {
      question: "What is a pet microchip?",
      answer:
        "A pet microchip is a tiny implant placed under the skin that contains a unique identification number. That number can be linked to your contact information in a registration database to help reunite you with your pet if they are found.",
    },
    {
      question: "Does microchipping hurt my pet?",
      answer:
        "Most pets tolerate microchipping very well. The process is quick and often compared to receiving a routine vaccination. Your veterinarian can explain what to expect based on your pet's age and temperament.",
    },
    {
      question: "Can a microchip track my pet's location like GPS?",
      answer:
        "No. Microchips do not provide real-time location tracking. They store an ID number that can be read by a scanner at a veterinary office or animal shelter.",
    },
    {
      question: "Who can scan a microchip if my pet is found?",
      answer:
        "Most veterinary clinics and animal shelters can scan for a microchip. If a chip is detected, the ID number can be used to look up the registered contact information.",
    },
    {
      question: "Do I need to register my pet's microchip?",
      answer:
        "Yes! Registration is essential because the microchip ID must be linked to your current contact information. If you move or change phone numbers, update the registration so you can be reached quickly.",
    },
    {
      question: "When should my pet be microchipped?",
      answer:
        "Many pets can be microchipped at a young age, and adult pets can be microchipped too. Our team can recommend the best timing for your pet during a visit.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-cream-50 to-burgundy-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Pet Safety
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Pet Microchipping 🏠
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Because every pet deserves to find their way home
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-burgundy-500 hover:bg-burgundy-600"
                asChild
              >
                <Link href="/book-appointment">Schedule Microchipping</Link>
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
                  How Microchipping Helps Bring Pets Home
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Every year, thousands of pets go missing. Not knowing where
                  your pet is—or how to bring them home—can be a heartbreaking
                  experience. Microchipping is a simple, safe, and effective way
                  to improve the chances of being reunited with your pet if they
                  ever become lost.
                </p>
                <div className="bg-gradient-to-br from-teal-50 to-cream-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A microchip is a tiny device implanted just under the skin.
                    The procedure is quick, well-tolerated by most pets, and is
                    considered very safe.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Your pet's microchip contains a unique identification number
                    linked to your contact information. If your pet is found,
                    any vet or shelter can scan the chip to help contact you.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholders/microchipping-2-300x200.jpg"
                  alt="Pet microchipping"
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
              Benefits of Microchipping Your Pet 🏠
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A small chip for big peace of mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-2 hover:border-teal-200"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-teal-600" />
                  </div>
                  <CardTitle className="text-teal-700 text-xl">
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

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-cream-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about microchipping
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border-2 border-gray-100 px-6"
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
            Microchips Help Bring Pets Home 🐾
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Save yourself the heartache and stress of a lost pet. To schedule
            microchipping or learn more, reach out today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/book-appointment">Schedule Microchipping</Link>
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
