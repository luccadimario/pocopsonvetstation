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
  Calendar,
  CheckCircle,
  ClipboardList,
  Heart,
  Phone,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WellnessExamsPage() {
  const benefits = [
    {
      icon: ClipboardList,
      title: "Health Baseline",
      description:
        "Establishes what's normal for your pet, making subtle changes easier to catch over time.",
    },
    {
      icon: CheckCircle,
      title: "Early Detection",
      description:
        "Helps identify issues sooner, when treatment may be simpler and more effective.",
    },
    {
      icon: Heart,
      title: "Personalized Prevention",
      description:
        "Supports tailored recommendations based on age, lifestyle, and medical history.",
    },
    {
      icon: Calendar,
      title: "Less Stressful Visits",
      description:
        "Routine appointments help your pet become familiar with our hospital and team, making future visits easier.",
    },
  ];

  const faqs = [
    {
      question: "How often should my pet have a wellness exam?",
      answer:
        "Most pets benefit from at least one wellness exam each year. Puppies, kittens, seniors, and pets with ongoing health concerns may need exams more frequently based on veterinary recommendations.",
    },
    {
      question: "What happens during a routine wellness exam?",
      answer:
        "A veterinarian performs a thorough physical exam and evaluates overall health. Depending on your pet's age and needs, we may also discuss preventive care, nutrition, and any recommended screenings.",
    },
    {
      question: "Why are wellness exams important if my pet seems healthy?",
      answer:
        "Many conditions develop gradually, and pets often hide signs of discomfort. Wellness exams can help detect subtle changes early, when treatment may be easier and outcomes may be better.",
    },
    {
      question: "Do wellness exams help reduce stress for future visits?",
      answer:
        "Yes! Regular, low-stress visits help pets become more comfortable with our hospital environment and team, which can make future appointments and treatments easier.",
    },
    {
      question: "Should I bring anything to my pet's appointment?",
      answer:
        "Bring any medical records you have, a list of medications or supplements, and notes about diet, behavior changes, or symptoms you've observed. This helps us provide the most complete care.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-cream-50 to-burgundy-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Preventive Care
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Wellness Exams & Checkups 🩺
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Regular checkups are the foundation of a long, healthy life for
              your furry family members
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-burgundy-500 hover:bg-burgundy-600"
                asChild
              >
                <Link href="/book-appointment">Schedule a Wellness Exam</Link>
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
                  Why Routine Wellness Visits Are So Important
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Pocopson Veterinary Station, we believe regular checkups
                  and wellness exams are essential to your pet's long-term
                  health. These visits allow our veterinary team to evaluate
                  your pet's overall well-being while also establishing a
                  baseline for what's normal for your pet's unique body and
                  needs.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-cream-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Wellness exams help us stay up-to-date on your pet's health
                    and can also identify potential concerns early, before they
                    become more serious. During your pet's checkup, a
                    veterinarian will perform a thorough exam and gather
                    important information that helps guide preventive care and
                    recommendations for a healthy life.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholders/wellness-3-300x200.jpg"
                  alt="Pet wellness exam"
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
              Benefits of Regular Wellness Exams 💝
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prevention is the best medicine for your furry friends
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-2 hover:border-burgundy-200"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-burgundy-100 to-burgundy-50 flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-burgundy-500" />
                  </div>
                  <CardTitle className="text-burgundy-600 text-xl">
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
                Everything you need to know about wellness exams
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
            Ready to Schedule Your Pet's Checkup? 🐾
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Regular wellness exams help keep your pet happy and healthy for
            years to come. We'd love to see you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/book-appointment">Book Your Visit</Link>
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
