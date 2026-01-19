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
  Clock,
  Microscope,
  Phone,
  Search,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DiagnosticsPage() {
  const features = [
    {
      icon: Microscope,
      title: "Advanced Technology",
      description:
        "State-of-the-art diagnostic equipment for accurate, reliable results.",
    },
    {
      icon: Clock,
      title: "Faster Answers",
      description:
        "In-house testing means reduced delays and timely treatment recommendations.",
    },
    {
      icon: Search,
      title: "Early Detection",
      description:
        "Identify issues before symptoms appear for better treatment outcomes.",
    },
    {
      icon: Stethoscope,
      title: "Informed Decisions",
      description:
        "Detailed insights help create personalized care plans for your pet.",
    },
  ];

  const faqs = [
    {
      question: "What is diagnostic testing for pets?",
      answer:
        "Diagnostic testing includes medical tests used to help identify or rule out disease. These tests can provide important information to support accurate diagnosis and treatment planning.",
    },
    {
      question: "Why would my veterinarian recommend diagnostic tests?",
      answer:
        "Diagnostic tests help confirm what may be causing symptoms, establish baseline health information, and detect issues early—sometimes before outward signs are obvious.",
    },
    {
      question: "What are the benefits of in-house diagnostic testing?",
      answer:
        "In-house testing can provide faster results, which may help your veterinarian make timely recommendations and begin appropriate treatment sooner.",
    },
    {
      question: "Do all pets need diagnostic testing?",
      answer:
        "Not always, but diagnostic testing can be helpful in many situations, including illness, monitoring chronic conditions, pre-anesthetic screening, and preventive wellness care.",
    },
    {
      question: "How do I know which tests my pet needs?",
      answer:
        "Recommended tests depend on your pet's age, medical history, symptoms, and exam findings. Our team will explain the options and what the results can tell us.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-cream-50 to-burgundy-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Medical Testing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Diagnostics & Lab Work 🔬
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              In-house diagnostic testing for faster answers and better care
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-burgundy-500 hover:bg-burgundy-600"
                asChild
              >
                <Link href="/book-appointment">Schedule an Appointment</Link>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Microscope className="h-16 w-16 text-indigo-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Why Diagnostic Testing Matters for Your Pet
              </h2>
              <p className="text-xl text-gray-600">
                Diagnostic testing is a cornerstone of veterinary medicine.
                These medical tests help detect disease, confirm a diagnosis,
                and identify health concerns early so treatment can begin before
                problems worsen.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-cream-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pets can be very good at hiding illness, and some conditions
                progress quietly before noticeable symptoms appear. Diagnostic
                tests give our veterinary team valuable information about what's
                happening inside your pet's body, helping us make informed
                decisions and create a care plan tailored to your pet's needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pocopson Veterinary Station offers a wide variety of in-house
                diagnostic testing using advanced, state-of-the-art technology.
                Having diagnostics available on-site helps streamline care,
                reduces delays, and supports timely treatment recommendations
                when your pet needs answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Modern, In-House Diagnostics 🔬
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Faster answers for better care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-2 hover:border-indigo-200"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-indigo-600" />
                  </div>
                  <CardTitle className="text-indigo-700 text-xl">
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

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-cream-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about diagnostic testing
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
            Questions About Diagnostics? 🐾
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            To learn more about our diagnostic capabilities or to schedule an
            appointment, reach out to our team today.
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
