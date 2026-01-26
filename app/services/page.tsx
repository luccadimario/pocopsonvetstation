import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  Apple,
  Heart,
  Microscope,
  Pill,
  Scissors,
  Stethoscope,
  Syringe,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/placeholders/pazzo_slide_77.jpg";

export default function ServicesPage() {
  const services: {
    icon: typeof Stethoscope;
    title: string;
    description: string;
    color: string;
    href: string;
  }[] = [
    {
      icon: Stethoscope,
      title: "Wellness Exams & Consultations",
      description:
        "Comprehensive health checkups, preventive care, and expert advice for keeping your pets healthy and happy.",
      color: "from-blue-100 to-blue-50",
      href: "/services/wellness-exams",
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description:
        "Complete immunization programs tailored to your pet's lifestyle, age, and health needs.",
      color: "from-green-100 to-green-50",
      href: "/services/vaccinations",
    },
    {
      icon: Activity,
      title: "Surgery",
      description:
        "Advanced surgical procedures performed with modern equipment and compassionate care, from routine spay/neuter to complex operations.",
      color: "from-purple-100 to-purple-50",
      href: "/services/surgery",
    },
    {
      icon: Heart,
      title: "Dental Care",
      description:
        "Digital dental X-rays, cleanings, and oral health treatments to keep your pet's smile bright and healthy.",
      color: "from-pink-100 to-pink-50",
      href: "/services/dental-care",
    },
    {
      icon: Zap,
      title: "CO2 Surgical Laser",
      description:
        "State-of-the-art Aesculight CO2 laser technology for precise surgical procedures with less bleeding, reduced pain, and faster recovery.",
      color: "from-yellow-100 to-yellow-50",
      href: "/services/laser-surgery",
    },
    {
      icon: Microscope,
      title: "Diagnostics & Lab Work",
      description:
        "In-house laboratory testing, digital X-rays, and advanced diagnostics for accurate, timely results.",
      color: "from-indigo-100 to-indigo-50",
      href: "/services/diagnostics",
    },
    {
      icon: Pill,
      title: "Pharmacy & Medications",
      description:
        "On-site pharmacy with prescription medications, supplements, and preventive treatments.",
      color: "from-red-100 to-red-50",
      href: "/services/pharmacy",
    },
    {
      icon: Scissors,
      title: "Microchipping",
      description:
        "Permanent pet identification for peace of mind - because every pet deserves to find their way home.",
      color: "from-teal-100 to-teal-50",
      href: "/services/microchipping",
    },
    {
      icon: Apple,
      title: "Nutritional Counseling",
      description:
        "Expert dietary guidance to help your pet maintain a healthy weight and optimal nutrition.",
      color: "from-orange-100 to-orange-50",
      href: "/services/nutrition",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] bg-stone-300">
        <Image
          src={heroImage}
          alt="Veterinarian caring for happy pets"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 via-30% to-transparent to-60%" />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Complete Care for Happy, Healthy Pets 🐾
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              From routine wellness visits to advanced treatments, we're
              equipped to handle all your pet's healthcare needs
            </p>
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/book-appointment">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything your furry friend needs under one roof
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 h-full cursor-pointer border-2 hover:border-burgundy-200">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                    >
                      <service.icon className="h-8 w-8 text-burgundy-500" />
                    </div>
                    <CardTitle className="text-burgundy-600 text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      {service.description}
                    </CardDescription>
                    <span className="inline-flex items-center text-sm text-burgundy-500 hover:text-burgundy-600 mt-3 font-medium">
                      Learn more →
                    </span>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Care */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
              <Activity className="h-10 w-10 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Need Urgent Care? 🚨
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              If your pet needs immediate attention during our business hours,
              please call us right away. For after-hours emergencies, we'll
              direct you to our trusted emergency partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <a href="tel:6107933200">Call Now: (610) 793-3200</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50"
                asChild
              >
                <Link href="/emergencies">Emergency Info</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Questions About Our Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're happy to help you choose the right care for your pet!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-burgundy-500 hover:bg-burgundy-600"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-burgundy-500 text-burgundy-600 hover:bg-burgundy-50"
              asChild
            >
              <Link href="/new-clients">New Client Info</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
