import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { ExternalLink, Heart, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdoptionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] bg-stone-300">
        <Image
          src="/images/placeholders/pazzo_slide_77.webp"
          alt="Adoptable pets"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 via-30% to-transparent to-60%" />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Pet Adoptions
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Open your heart and home to a furry friend in need
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-pink-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Give a Pet a Forever Home
              </h2>
              <p className="text-xl text-gray-600">
                The compassion of animal lovers like you saves countless
                homeless pets every day! Check this page for adoptable pets that
                could be a great addition to your family.
              </p>
            </div>

            {/* Rescue Organizations */}
            <div className="space-y-8 mb-12">
              {/* Andy's Friends */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative min-h-[250px] bg-gradient-to-br from-burgundy-50 to-cream-50">
                      <Image
                        src="/images/placeholders/andysfriends.png"
                        alt="Andy's Friends"
                        fill
                        className="object-contain p-6"
                      />
                    </div>
                    <div className="p-8">
                      <p className="text-gray-700 mb-4">
                        <strong>Andy's Friends</strong> is a rescue that
                        provides food, medical services, and safe housing to
                        homeless cats and kittens until loving homes can be
                        found.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Their cats are owner surrenders, strays, and rescues
                        from shelters where adoptable animals are in danger of
                        being euthanized.
                      </p>
                      <p className="text-gray-600 mb-6">
                        Their mission is to save as many lives as they can
                        through fostering and adoption.
                      </p>
                      <Button
                        asChild
                        className="bg-burgundy-500 hover:bg-burgundy-600"
                      >
                        <a
                          href="https://www.facebook.com/Andys-Friends-Cat-Rescue-310aborinesfriends"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Learn More About Andy's Friends
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Kitty Cat Cafe */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-burgundy-600 mb-4">
                    Kitty Cat Cafe - Kennett Square
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The <strong>Kitty Cat Cafe</strong> in Kennett Square is a
                    unique adoption center and cafe where you can enjoy time
                    with adoptable cats while supporting their rescue and
                    rehoming efforts.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Visit their location to meet friendly felines looking for
                    their forever homes in a comfortable, welcoming environment.
                  </p>
                  <Button
                    asChild
                    className="bg-burgundy-500 hover:bg-burgundy-600"
                  >
                    <a
                      href="https://www.kittycatcafe.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Kitty Cat Cafe
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Lucky Dawg */}
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-burgundy-600 mb-4">
                    Lucky Dawg Animal Rescue
                  </h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Lucky Dawg Animal Rescue</strong> is dedicated to
                    rescuing and rehoming dogs in need, giving them a second
                    chance at a happy life with loving families.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Their team works tirelessly to provide medical care,
                    fostering, and support to help dogs find their perfect
                    forever homes.
                  </p>
                  <Button
                    asChild
                    className="bg-burgundy-500 hover:bg-burgundy-600"
                  >
                    <a
                      href="https://www.luckydawganimalrescue.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More About Lucky Dawg
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* How We Help */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
                How We Support Adoptions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Heart className="h-6 w-6 text-pink-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Medical Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We provide veterinary care for rescue animals to ensure
                    they're healthy and ready for their new homes
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Community Partner
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We work with local rescues to help connect adoptable pets
                    with loving families
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Heart className="h-6 w-6 text-purple-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Ongoing Care</h4>
                  <p className="text-gray-600 text-sm">
                    Once you adopt, we're here to support your new pet's health
                    journey
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <Card className="bg-burgundy-500 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Interested in Adopting?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Contact us to learn more about adoptable pets or to schedule a
                  wellness visit for your newly adopted companion.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-burgundy-600 hover:bg-cream-100"
                  >
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {siteConfig.contact.phone}
                    </a>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
