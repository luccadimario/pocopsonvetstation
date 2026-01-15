import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, CheckCircle2, FileText, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewClientsPage() {
  const steps = [
    {
      icon: Calendar,
      title: "Book Your Visit",
      description:
        "Schedule your first appointment online or give us a call. We'll find a time that works for you!",
    },
    {
      icon: FileText,
      title: "Bring Medical Records",
      description:
        "If your pet has seen another vet, bringing their records helps us provide the best care.",
    },
    {
      icon: Heart,
      title: "Meet Our Team",
      description:
        "We'll get to know you and your pet, answer questions, and create a personalized care plan.",
    },
  ];

  const faqs = [
    {
      question: "What should I bring to my first visit?",
      answer:
        "Please bring any previous medical records, a list of current medications, and your pet's favorite treats! If your pet is anxious, bringing a familiar blanket or toy can help them feel more comfortable.",
    },
    {
      question: "How long does a first visit usually take?",
      answer:
        "Plan for about 30-45 minutes. This gives us time to get to know you and your pet, perform a thorough examination, and answer all your questions without feeling rushed.",
    },
    {
      question: "Do you accept pet insurance?",
      answer:
        "Yes! We work with all major pet insurance providers. We'll provide you with detailed invoices that you can submit to your insurance company for reimbursement.",
    },
    {
      question: "What if my pet is nervous about vet visits?",
      answer:
        "We completely understand! Our team is experienced in working with anxious pets. Let us know ahead of time, and we'll take extra steps to make your pet comfortable. We have a calm, quiet environment and use gentle handling techniques.",
    },
    {
      question: "Can I stay with my pet during the exam?",
      answer:
        "Absolutely! We encourage you to stay with your pet throughout their visit. You know your pet best, and your presence helps keep them calm and comfortable.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px]">
        <Image
          src="/images/placeholders/pazzo-slide-09.webp"
          alt="Happy pet owner with dog at Pocopson Vet"
          width={1920}
          height={1080}
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-block bg-cream-100 text-burgundy-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Welcome!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              New Clients Welcome!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              We can't wait to meet you and your furry family members! Here's
              what to expect.
            </p>
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/book-appointment">Schedule Your Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Your First Visit - Step by Step 🐾
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've made it easy to get started!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:border-burgundy-200 transition-colors"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-burgundy-100 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-burgundy-500" />
                  </div>
                  <div className="text-sm font-medium text-burgundy-500 mb-2">
                    Step {index + 1}
                  </div>
                  <CardTitle className="text-xl text-burgundy-600 mb-3">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-cream-50 to-burgundy-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Why New Clients Love Us ❤️
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-burgundy-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    Courteous Reception Staff
                  </h3>
                  <p className="text-gray-600">
                    Friendly faces ready to help from the moment you walk in
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-burgundy-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    Clean, Sanitary Facility
                  </h3>
                  <p className="text-gray-600">
                    Spotless examination rooms in our charming historic building
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-burgundy-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    Experienced Veterinarians
                  </h3>
                  <p className="text-gray-600">
                    Qualified doctors who truly care about your pet's wellbeing
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-burgundy-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    State-of-the-Art Technology
                  </h3>
                  <p className="text-gray-600">
                    Modern equipment for the most accurate diagnoses
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-burgundy-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    Attentive Support Staff
                  </h3>
                  <p className="text-gray-600">
                    Caring technicians who treat your pet like family
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-burgundy-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    On-Site Pharmacy
                  </h3>
                  <p className="text-gray-600">
                    Convenient access to medications and prescriptions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Got questions? We've got answers!
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-heading font-bold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-burgundy-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Get Started? 🎉
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
            Book your first appointment today and discover why families trust us
            with their pets!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/book-appointment">Book Appointment</Link>
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
