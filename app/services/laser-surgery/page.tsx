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
  Heart,
  Phone,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LaserSurgeryPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Reduced Pain",
      description:
        "The CO2 laser seals nerve endings during incision, which may reduce post-operative discomfort compared to traditional methods.",
    },
    {
      icon: Activity,
      title: "Reduced Bleeding",
      description:
        "The laser seals small blood vessels as it works, often resulting in less bleeding and reduced need for extensive bandaging.",
    },
    {
      icon: Sparkles,
      title: "Reduced Swelling",
      description:
        'Because laser surgery is a "no-contact" technique, it can help lessen tissue trauma, bruising, and tearing—supporting a calmer healing response.',
    },
    {
      icon: Shield,
      title: "Reduced Infection Risk",
      description:
        "Laser energy generates high temperatures at the surgical site, which can help reduce microbial contamination during the procedure.",
    },
    {
      icon: Clock,
      title: "Faster Recovery",
      description:
        "With less bleeding, swelling, and discomfort, many pets experience a quicker, more comfortable recovery and return to normal activity.",
    },
  ];

  const faqs = [
    {
      question: "Is laser surgery safe for pets?",
      answer:
        "Yes. CO2 laser surgery is widely used in veterinary medicine and is considered safe when performed by trained veterinary professionals. Your pet's safety is supported by proper case selection, monitoring, and post-op care.",
    },
    {
      question: "Does laser surgery mean my pet won't feel any pain?",
      answer:
        "Laser surgery can reduce post-operative discomfort because it helps seal nerve endings and minimizes tissue trauma. However, pets can still experience some soreness after surgery, so pain management is still an important part of care.",
    },
    {
      question: "What kinds of procedures can be performed with a CO2 laser?",
      answer:
        "CO2 lasers are commonly used for many soft-tissue procedures. Whether it's the right option depends on your pet's condition and the type of surgery recommended—our team can advise you during an exam or consult.",
    },
    {
      question: "Will my pet recover faster with laser surgery?",
      answer:
        "Many pets do. Because laser surgery may reduce bleeding, swelling, and discomfort, it can support a smoother recovery. Individual recovery time varies based on overall health and the specific procedure performed.",
    },
    {
      question: "Is laser surgery more expensive than traditional surgery?",
      answer:
        "Costs can vary depending on the procedure and your pet's needs. Some laser-assisted procedures may have different pricing due to specialized equipment and training. We can provide an estimate after evaluating your pet.",
    },
    {
      question:
        "How do I know if my pet is a good candidate for laser surgery?",
      answer:
        "The best next step is a consultation. We'll assess your pet, discuss surgical options, and explain the benefits and expectations so you can make an informed decision.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-50 via-cream-50 to-burgundy-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Advanced Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              CO2 Laser Surgery ⚡
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Advanced laser technology for gentler procedures with less pain
              and faster recovery
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
                  What Is CO2 Laser Surgery for Pets?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Pocopson Veterinary Station, we offer CO2 laser surgery to
                  help make many procedures gentler for pets. Laser technology
                  can reduce discomfort, minimize bleeding, and support a
                  smoother healing process—so your pet can get back to feeling
                  like themselves sooner.
                </p>
                <div className="bg-gradient-to-br from-yellow-50 to-cream-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    CO2 laser surgery uses a focused beam of light to precisely
                    cut and treat soft tissue while simultaneously sealing small
                    blood vessels and nerve endings. This added precision helps
                    reduce common surgical side effects like swelling and
                    post-operative discomfort.
                  </p>
                </div>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholders/vet-laser-graphic.jpg"
                  alt="CO2 Laser Surgery"
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
              Benefits of Laser Surgery for Dogs and Cats ⚡
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A gentler approach to surgical care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all border-2 hover:border-yellow-200"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-yellow-600" />
                  </div>
                  <CardTitle className="text-yellow-700 text-xl">
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

      {/* Learn More PDF Link */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-burgundy-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Want to Learn More About Our Laser Technology?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We use the Aesculight CO2 surgical laser system. Download our
              information sheet to learn more about how laser surgery compares
              to traditional methods.
            </p>
            <Button
              size="lg"
              className="bg-burgundy-500 hover:bg-burgundy-600"
              asChild
            >
              <a
                href="/images/placeholders/Aesculight-veterinary-laser-comparison.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Laser Surgery Information (PDF) →
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
                Laser Surgery FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about CO2 laser surgery
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
            Considering Laser Surgery for Your Pet? 🐾
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            If you're considering surgery for your pet and want to learn whether
            laser surgery is appropriate, our team is happy to help. We'll
            review your pet's needs and answer your questions.
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
