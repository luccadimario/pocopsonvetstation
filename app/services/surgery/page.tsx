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
  Activity,
  Heart,
  MessageCircle,
  Phone,
  Shield,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SurgeryPage() {
  const features = [
    {
      icon: Stethoscope,
      title: "Experienced Care",
      description:
        "Our surgical team is highly trained and experienced, approaching every procedure with careful planning and attention to detail.",
    },
    {
      icon: Shield,
      title: "Modern Standards",
      description:
        "We utilize state-of-the-art surgical equipment including advanced CO2 laser technology for precision and patient comfort.",
    },
    {
      icon: Heart,
      title: "Compassionate Approach",
      description:
        "We treat every patient like our own pet and do everything we can to reduce anxiety and provide a calm, caring experience.",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description:
        "We'll communicate with you every step of the way - before, during, and after your pet's procedure.",
    },
  ];

  const faqs = [
    {
      question: "How do I know if my pet needs surgery?",
      answer:
        "A veterinarian will recommend surgery based on your pet's exam, symptoms, and diagnostic findings. We'll explain why surgery is recommended, what it aims to treat, and what alternatives may be available when appropriate.",
    },
    {
      question: "What should I expect before my pet's surgery?",
      answer:
        "Before surgery, we provide instructions that may include fasting guidelines and arrival times. We also review your pet's history and may recommend pre-surgical testing to support safety and planning.",
    },
    {
      question: "Will I receive updates while my pet is at the hospital?",
      answer:
        "Yes! We believe communication is important. Our team will keep you informed and provide updates as appropriate, including information you need for recovery at home.",
    },
    {
      question: "How do I care for my pet after surgery?",
      answer:
        "After surgery, you'll receive clear at-home care instructions, including activity restrictions, medication guidance, and signs to watch for. If you have questions during recovery, we're here to help.",
    },
    {
      question: "How long will my pet's recovery take?",
      answer:
        "Recovery time varies depending on the procedure and your pet's overall health. We'll discuss expected recovery timelines and schedule follow-up recommendations as needed.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-cream-50 to-burgundy-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Advanced Care
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Veterinary Surgery 🏥
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              State-of-the-art surgical procedures with compassionate care and
              modern technology
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
                  We Understand Surgery Can Feel Stressful
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We know it can be stressful when your pet needs surgery. Our
                  team is here to support you and reassure you that your pet is
                  in good hands. We're proud to provide West Chester and
                  surrounding communities with state-of-the-art veterinary
                  surgical procedures.
                </p>
                <div className="bg-gradient-to-br from-purple-50 to-cream-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Surgery is an important part of veterinary medicine, and we
                    approach every procedure with careful planning and attention
                    to detail. From pre-surgical evaluation to post-operative
                    recovery support, our goal is to help your pet heal as
                    comfortably as possible.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You'll receive guidance on preparation, aftercare, and
                    recovery, and we'll be available to address questions along
                    the way.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholders/surgery-3-300x200.jpg"
                  alt="Veterinary surgery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Expert Surgical Care 💜
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your pet's safety and comfort are our top priorities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-2 hover:border-purple-200"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-700 text-xl">
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

      {/* Laser Surgery Callout */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-6">
              <Activity className="h-10 w-10 text-yellow-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Advanced CO2 Laser Surgery Available
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              For many procedures, we offer CO2 laser surgery which can reduce
              pain, minimize bleeding, and support faster recovery for your pet.
            </p>
            <Button
              size="lg"
              className="bg-burgundy-500 hover:bg-burgundy-600"
              asChild
            >
              <Link href="/services/laser-surgery">
                Learn About Laser Surgery →
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
                Common questions about veterinary surgery
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
            Questions About Your Pet's Surgery? 🐾
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            We're here to answer your questions, address your concerns, and help
            your pet through every step of their surgical care.
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
