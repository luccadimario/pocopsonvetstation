import { Button } from "@/components/ui/button";
import { Award, Heart, Home, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] bg-gray-800">
        <Image
          src="/images/placeholders/pvs_q55.webp"
          alt="Happy pet owner with dog at Pocopson Vet"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 via-30% to-transparent to-60%" />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              Here's our historical journey through time, bringing you the best
              vetrinary care we can!
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-burgundy-100 text-burgundy-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ❤️ Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              "We are dedicated to providing the highest level of veterinary
              medicine along with friendly, compassionate service."
            </h2>
            <p className="text-xl text-gray-600">
              We treat every patient as if they were our own pet, giving them
              the same loving care and attention we'd want for our furry family
              members.
            </p>
          </div>
        </div>
      </section>

      {/* Historic Building */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block bg-burgundy-100 text-burgundy-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Historic Landmark
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                From Railroad Station to House of Healing
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong className="text-burgundy-600">1893:</strong> Our
                  beautiful building was constructed as a passenger station for
                  the Wilmington and Northern Railroad, serving travelers along
                  the historic rail line.
                </p>
                <p>
                  <strong className="text-burgundy-600">1947:</strong> The
                  station found new life as the Pocopson Post Office, becoming a
                  hub for the local community.
                </p>
                <p>
                  <strong className="text-burgundy-600">1991:</strong> The
                  building was lovingly converted into Pocopson Veterinary
                  Station, where we've been caring for pets ever since!
                </p>
                <p>
                  <strong className="text-burgundy-600">Today:</strong> Listed
                  in the Chester County Register of Historic Places, our clinic
                  honors its rich heritage while providing cutting-edge
                  veterinary care.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-700">
              <Image
                src="/images/placeholders/pazzo_slide_77.webp"
                alt="Historic train station building at Pocopson Vet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What We Believe 💫
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy-100 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-burgundy-500" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-burgundy-600">
                Compassion First
              </h3>
              <p className="text-gray-600">
                Every pet deserves gentle, loving care
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy-100 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-burgundy-500" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-burgundy-600">
                Excellence
              </h3>
              <p className="text-gray-600">
                We never stop learning and improving
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy-100 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-burgundy-500" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-burgundy-600">
                Partnership
              </h3>
              <p className="text-gray-600">
                You know your pet best - we listen
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy-100 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-burgundy-500" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-burgundy-600">
                Community
              </h3>
              <p className="text-gray-600">
                Proud to serve West Chester families
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-burgundy-50 to-cream-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Ready to Join Our Family? 🏡
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to meet you and your furry friends!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-burgundy-500 hover:bg-burgundy-600"
              asChild
            >
              <Link href="/book-appointment">Book Your Visit</Link>
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
