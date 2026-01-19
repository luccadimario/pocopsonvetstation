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
import { Activity, Apple, Heart, Phone, Scale, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NutritionPage() {
  const features = [
    {
      icon: Apple,
      title: "Personalized Diet Plans",
      description:
        "Nutrition recommendations tailored to your pet's age, activity level, breed, and health needs.",
    },
    {
      icon: Scale,
      title: "Weight Management",
      description:
        "Help your pet reach and maintain a healthy weight with appropriate diet and portion control.",
    },
    {
      icon: Activity,
      title: "Life Stage Nutrition",
      description:
        "Guidance for every stage of your pet's life, from puppyhood to senior years.",
    },
    {
      icon: Heart,
      title: "Overall Wellness",
      description:
        "Support energy, digestion, skin and coat health, and immune function through proper nutrition.",
    },
  ];

  const faqs = [
    {
      question: "What is nutritional counseling for pets?",
      answer:
        "Nutritional counseling is a service where we evaluate your pet's diet, body condition, and lifestyle, then provide recommendations to help meet their nutritional needs and support overall health.",
    },
    {
      question: "How do I know if my pet is overweight?",
      answer:
        "Many pets gain weight gradually, so it can be hard to notice. A veterinary exam can assess your pet's body condition and help determine whether weight loss is recommended.",
    },
    {
      question: "Does my pet's diet need to change as they age?",
      answer:
        "Yes. Nutritional needs often change between life stages (puppy/kitten, adult, and senior) and can also change with activity level and health conditions. We can help you choose a diet that fits your pet's current needs.",
    },
    {
      question: "Can you help with portion sizes and feeding schedules?",
      answer:
        "Absolutely. Portion control is one of the most important parts of a healthy diet. We can guide you on appropriate feeding amounts, schedules, and treat intake based on your pet's goals.",
    },
    {
      question: "What are common health risks associated with obesity in pets?",
      answer:
        "Extra weight can contribute to mobility issues and other health problems over time. Maintaining a healthy weight is an important part of preventive care and can improve comfort and quality of life.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-cream-50 to-burgundy-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Wellness
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Nutritional Counseling 🍎
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Expert dietary guidance for a healthier, happier pet
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-burgundy-500 hover:bg-burgundy-600"
                asChild
              >
                <Link href="/book-appointment">Schedule a Consultation</Link>
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
                  Why Nutrition Matters for Your Pet's Health
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Proper nutrition supports energy, healthy digestion, skin and
                  coat condition, immune health, and overall wellness. Because
                  every pet is different, the right diet depends on factors like
                  age, activity level, breed, medical history, and body
                  condition.
                </p>
                <div className="bg-gradient-to-br from-orange-50 to-cream-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Pocopson Veterinary Station offers nutritional counseling
                    for pet owners in West Chester and surrounding communities.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our team can work with you to build a nutrition plan
                    designed for your pet's unique needs and lifestyle.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholders/nutrition-2-300x200.jpg"
                  alt="Pet nutrition"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Management */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
              <Scale className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Support for Healthy Weight
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Obesity is common in pets, and it can be surprisingly easy to
              overfeed a pet who knows how to beg! Extra weight is more than a
              cosmetic issue—it can contribute to real health problems as pets
              age and may reduce overall quality of life. With an appropriate
              diet and consistent exercise, most pets can reach and maintain a
              healthy weight range.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How We Can Help 🍎
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Personalized nutrition guidance for every life stage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-2 hover:border-orange-200"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <CardTitle className="text-orange-700 text-xl">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life Stage Note */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-burgundy-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="h-16 w-16 text-burgundy-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Nutrition for Every Life Stage
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A pet's nutritional needs change throughout life, from puppy and
              kittenhood to adulthood and the senior years. The most effective
              way to ensure your pet's needs are met is to consult with our team
              about a diet plan tailored to your pet's current stage of life and
              daily routine.
            </p>
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
                Common questions about pet nutrition
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
            Ready to Create a Nutrition Plan? 🐾
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            If you'd like help choosing the right food, portion sizes, or a
            weight-management strategy, contact us today. We would love to speak
            with you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/book-appointment">Schedule a Consultation</Link>
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
