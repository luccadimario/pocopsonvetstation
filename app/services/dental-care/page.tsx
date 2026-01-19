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
  AlertTriangle,
  Heart,
  Phone,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DentalCarePage() {
  const warningSignslist = [
    "Brown or yellow discoloration on teeth",
    "Bad breath (persistent or worsening)",
    "Difficulty eating, dropping food, or chewing on one side",
    "Red or bleeding gums",
    "Pawing at the mouth or changes in appetite",
  ];

  const homeCareTips = [
    {
      icon: Sparkles,
      title: "Home Brushing",
      description:
        "Regular brushing with pet-safe toothpaste helps reduce plaque buildup between visits.",
    },
    {
      icon: Heart,
      title: "Dental Chews",
      description:
        "Dental chews and approved oral health diets can support daily dental hygiene.",
    },
    {
      icon: Stethoscope,
      title: "Regular Checks",
      description:
        "Keep an eye on changes in breath, gums, or teeth and let us know what you observe.",
    },
  ];

  const faqs = [
    {
      question: "How often does my pet need a dental cleaning?",
      answer:
        "It depends on your pet's age, breed, and oral health. Many pets benefit from regular professional cleanings, and we'll recommend a schedule based on your pet's exam findings and risk factors.",
    },
    {
      question: "What are the most common signs of dental disease in pets?",
      answer:
        "Bad breath, yellow/brown tartar, red or bleeding gums, difficulty chewing, dropping food, and decreased appetite are common signs. Some pets hide oral pain, so routine exams are important even without obvious symptoms.",
    },
    {
      question: "Why isn't brushing at home enough?",
      answer:
        "Brushing is helpful, but it can't remove tartar below the gumline. Professional cleanings address the areas you can't see or safely reach at home and allow us to evaluate the mouth more thoroughly.",
    },
    {
      question: "Can dental disease affect my pet's overall health?",
      answer:
        "Yes. Oral bacteria and inflammation can impact the body beyond the mouth. Keeping the teeth and gums healthy supports overall wellness and may reduce risks associated with chronic infection and inflammation.",
    },
    {
      question: "What happens during a professional dental cleaning?",
      answer:
        "A professional cleaning includes removing plaque and tartar and cleaning beneath the gumline. We also assess gum health, check for dental problems, and provide recommendations for at-home care based on your pet's needs.",
    },
    {
      question: "How can I keep my pet's teeth healthier between visits?",
      answer:
        "Consistent home brushing, appropriate dental chews or diets, and regular veterinary dental exams can all help. We can recommend options that are a good fit for your pet.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 via-cream-50 to-burgundy-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Oral Health
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Pet Dental Care 🦷
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Bright smiles for healthy pets with professional dental cleanings
              and digital X-rays
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
                  Why Dental Health Matters for Dogs and Cats
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Dental care is a key part of your pet's overall wellness. Poor
                  oral health doesn't just affect the mouth—dental disease can
                  contribute to problems involving the heart, liver, and
                  kidneys, and may impact the body through the bloodstream.
                </p>
                <div className="bg-gradient-to-br from-pink-50 to-cream-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dental disease is one of the most common health issues seen
                    in pets, yet it's often overlooked at home. Many dogs and
                    cats show signs of dental disease by age three.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Routine dental care can help prevent avoidable discomfort
                    and support long-term health through professional dental
                    cleanings.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholders/dental-1-300x242.jpg"
                  alt="Pet dental care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Signs Your Pet May Need a Dental Exam
              </h2>
              <p className="text-xl text-gray-600">
                If you notice any of the following, it may be time to schedule a
                dental visit
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4">
                {warningSignslist.map((sign, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-lg text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Home Care Tips */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              At-Home Dental Hygiene Tips 🦷
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Support your pet's dental health between visits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {homeCareTips.map((tip, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-2 hover:border-pink-200 text-center"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center mb-4 mx-auto">
                    <tip.icon className="h-7 w-7 text-pink-600" />
                  </div>
                  <CardTitle className="text-pink-700 text-xl">
                    {tip.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {tip.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Cleanings */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-burgundy-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Professional Pet Dental Cleanings
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              At Pocopson Veterinary Station, we provide thorough cleanings that
              include the important area beneath the gumline—the part you can't
              see or safely reach at home. This helps remove hidden buildup and
              supports healthier gums and teeth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-burgundy-500 hover:bg-burgundy-600"
                asChild
              >
                <Link href="/services/dental-xrays">
                  Learn About Digital Dental X-Rays →
                </Link>
              </Button>
            </div>
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
                Common questions about pet dental care
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
            Time for a Dental Checkup? 😺
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            If your pet has bad breath, stained teeth, or seems uncomfortable
            while eating, dental disease may be the cause. Let's take a look!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/book-appointment">Schedule a Dental Cleaning</Link>
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
