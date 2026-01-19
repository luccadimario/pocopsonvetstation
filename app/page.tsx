import { TrainAnimation } from "@/components/home/train-animation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  Clock,
  Heart,
  MapPin,
  Phone,
  Star,
  Stethoscope,
  Store,
  Syringe,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: Stethoscope,
      title: "Wellness Exams",
      description:
        "Complete health checkups to keep your furry friends happy and healthy",
      href: "/services/wellness-exams",
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Protect your pets with gentle, caring immunizations",
      href: "/services/vaccinations",
    },
    {
      icon: Activity,
      title: "Surgery",
      description: "Advanced surgical care with compassion and expertise",
      href: "/services/surgery",
    },
    {
      icon: Heart,
      title: "Dental Care",
      description: "Bright smiles for healthy pets with digital dental X-rays",
      href: "/services/dental-care",
    },
    {
      icon: Zap,
      title: "Surgical Laser",
      description:
        "Advanced CO2 laser surgery for precise, less invasive procedures",
      href: "/services/laser-surgery",
    },
    {
      icon: Stethoscope,
      title: "Diagnostics",
      description: "Advanced testing to understand your pet's health",
      href: "/services/diagnostics",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The staff is so caring and gentle with my anxious dog. They treat him like family!",
      rating: 5,
    },
    {
      name: "Mike T.",
      text: "Best vet in West Chester! The historic building is charming and the care is exceptional.",
      rating: 5,
    },
    {
      name: "Jennifer L.",
      text: "They saved my cat's life. Forever grateful for their expertise and compassion.",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] md:h-[700px] bg-gray-800">
        <Image
          src="/images/placeholders/pazzo_slide_74.webp"
          alt="Pocopson Veterinary Station - Historic railroad building"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 via-30% to-transparent to-60%" />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-block bg-cream-100 text-burgundy-500 px-4 py-2 rounded-full text-sm font-medium">
                Historic Railroad Station Since 1893
              </div>
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Proudly Independent & Locally Owned
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Where Every Pet Is Family
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              Compassionate veterinary care in the heart of West Chester. Your
              pets deserve the very best!{" "}
              <Image
                src="/images/placeholders/dogcuteanimation31.gif"
                alt="Happy dog wagging tail"
                width={50}
                height={50}
                className="inline-block align-middle"
                unoptimized
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                className="bg-white/10 border-white hover:bg-white/20 text-white"
                asChild
              >
                <Link href="/new-clients">New Clients Welcome! 👋</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Train Animation */}
      <TrainAnimation />

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-cream-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How We Care For Your Pets 🐕 🐈
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine checkups to advanced treatments, we're here for every
              step of your pet's journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-burgundy-200 h-full cursor-pointer">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-burgundy-100 to-burgundy-50 flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-burgundy-500" />
                    </div>
                    <CardTitle className="text-burgundy-600">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-burgundy-500 hover:bg-burgundy-600"
            >
              <Link href="/services">Explore All Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Historic Railroad Station */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gray-700">
              <Image
                src="/images/placeholders/pazzo-slide-09.webp"
                alt="Historic train station at Pocopson Vet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-block bg-burgundy-100 text-burgundy-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Historic Home
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                A Station for Healing Since 1991
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Our charming practice is housed in a historic 1893 railroad
                station that once served the Wilmington and Northern Railroad.
                The building later became the Pocopson Post Office in 1947
                before finding its true calling as a veterinary hospital in
                1991.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Listed in the Chester County Register of Historic Places, our
                clinic combines historic charm with modern veterinary
                excellence. We've preserved the building's character while
                equipping it with state-of-the-art medical technology to serve
                your pets.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-burgundy-500 text-burgundy-600 hover:bg-burgundy-50"
              >
                <Link href="/about">Learn Our Story →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-burgundy-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Happy Pets, Happy Families ❤️
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what pet parents are saying about us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base text-gray-700 italic mb-4">
                    "{testimonial.text}"
                  </CardDescription>
                  <CardTitle className="text-base font-medium text-burgundy-600">
                    — {testimonial.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Families Choose Us 🌟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just a vet - we're your partner in pet wellness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-2xl hover:bg-cream-50/50 transition-colors">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-burgundy-100 to-burgundy-50 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-burgundy-500" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-burgundy-600">
                Compassionate Team
              </h3>
              <p className="text-gray-600">
                Our loving staff treats every pet like their own. We understand
                the special bond you share!
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-cream-50/50 transition-colors">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-burgundy-100 to-burgundy-50 flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-10 w-10 text-burgundy-500" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-burgundy-600">
                Advanced Care
              </h3>
              <p className="text-gray-600">
                Modern technology meets gentle touch with our digital X-rays,
                surgical laser, and more
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-cream-50/50 transition-colors">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-burgundy-100 to-burgundy-50 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-burgundy-500" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-burgundy-600">
                Trusted Since 1991
              </h3>
              <p className="text-gray-600">
                Three decades of exceptional care from our charming historic
                station
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:bg-cream-50/50 transition-colors">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mx-auto mb-4">
                <Store className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-green-700">
                Proudly Independent
              </h3>
              <p className="text-gray-600">
                Locally owned and operated, not a corporation. Your pets get
                personal attention, not a number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="relative py-24 lg:py-32 bg-burgundy-400">
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Your Pet's Health Journey Starts Here! 🐾
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Whether it's a wellness checkup, urgent care, or just a question
            about your furry friend - we're here to help every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200 text-lg px-8"
              asChild
            >
              <Link href="/book-appointment">Schedule an Appointment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-2 border-white hover:bg-white/20 text-white text-lg px-8"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Phone className="h-12 w-12 text-burgundy-500 mx-auto mb-4" />
              <h3 className="text-lg font-heading font-bold mb-2">Call Us</h3>
              <a
                href="tel:6107933200"
                className="text-burgundy-500 hover:text-burgundy-600"
              >
                (610) 793-3200
              </a>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-burgundy-500 mx-auto mb-4" />
              <h3 className="text-lg font-heading font-bold mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon & Thu: 8AM-6PM
                <br />
                Tue, Wed, Fri: 8AM-5PM
                <br />
                Sat: 8AM-12PM
              </p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-burgundy-500 mx-auto mb-4" />
              <h3 className="text-lg font-heading font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                2100 West Street Road
                <br />
                West Chester, PA 19382
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
