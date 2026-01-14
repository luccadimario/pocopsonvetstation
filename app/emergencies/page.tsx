import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Clock, Heart, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function EmergenciesPage() {
  const emergencySigns = [
    "Difficulty breathing or choking",
    "Bleeding that won't stop",
    "Severe vomiting or diarrhea",
    "Inability to urinate or defecate",
    "Seizures or collapse",
    "Suspected poisoning",
    "Eye injuries",
    "Heatstroke or hypothermia",
    "Broken bones or severe injuries",
    "Extreme pain or distress",
  ];

  const emergencyContacts = [
    {
      name: "VCA Emergency Animal Hospital",
      phone: "(610) 647-2777",
      address: "301 Veterans Highway, Chadds Ford, PA 19317",
      hours: "24/7 Emergency Care",
    },
    {
      name: "Penn Vet Ryan Hospital",
      phone: "(215) 898-4685",
      address: "3900 Delancey Street, Philadelphia, PA 19104",
      hours: "24/7 Emergency & Critical Care",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-500 to-red-400 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <div className="inline-block bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
              EMERGENCY INFORMATION
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Emergency Care
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8">
              When your pet needs immediate attention, every second counts.
              Here's what you need to know.
            </p>
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/30">
              <CardContent className="p-6">
                <p className="text-white text-lg font-medium mb-3">
                  <strong className="text-2xl">During Business Hours:</strong>
                </p>
                <a
                  href="tel:6107933200"
                  className="text-3xl md:text-4xl font-bold text-cream-100 hover:text-white transition-colors"
                >
                  Call Us: (610) 793-3200
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Seek Emergency Care */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                When Does My Pet Need Emergency Care?
              </h2>
              <p className="text-xl text-gray-600">
                If your pet is experiencing any of these symptoms, seek
                immediate veterinary care:
              </p>
            </div>

            <Card className="border-2 border-red-200">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {emergencySigns.map((sign, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{sign}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-900 font-medium">
                    ⚠️ <strong>When in doubt, call us!</strong> It's always
                    better to err on the side of caution when it comes to your
                    pet's health.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* During Business Hours */}
      <section className="py-16 lg:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-100">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-green-700" />
                  <div>
                    <CardTitle className="text-2xl text-green-900">
                      During Our Business Hours
                    </CardTitle>
                    <CardDescription className="text-green-700 text-base">
                      Mon-Thu: 8AM-7PM | Fri: 8AM-5PM | Sat: 8AM-12PM
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                  Call Us Immediately
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  If your pet needs urgent care during our business hours,
                  please call us right away. We'll do everything we can to see
                  your pet as quickly as possible.
                </p>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <a href="tel:6107933200">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now: (610) 793-3200
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* After Hours */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                After-Hours Emergency Care
              </h2>
              <p className="text-xl text-gray-600">
                When we're closed, these trusted partners are available 24/7:
              </p>
            </div>

            <div className="space-y-6">
              {emergencyContacts.map((contact, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow border-2 hover:border-burgundy-200"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1 min-w-[250px]">
                        <h3 className="font-heading font-bold text-xl text-burgundy-600 mb-2">
                          {contact.name}
                        </h3>
                        <div className="space-y-2 text-gray-700">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-burgundy-500" />
                            <a
                              href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                              className="font-bold text-lg hover:text-burgundy-500"
                            >
                              {contact.phone}
                            </a>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-burgundy-500 mt-1 flex-shrink-0" />
                            <span>{contact.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-burgundy-500" />
                            <span className="font-medium text-green-600">
                              {contact.hours}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="border-burgundy-500 text-burgundy-600 hover:bg-burgundy-50"
                        asChild
                      >
                        <a href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}>
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Poison Control */}
      <section className="py-16 lg:py-24 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-amber-200">
              <CardHeader className="bg-amber-100">
                <CardTitle className="text-2xl text-amber-900 flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8" />
                  Pet Poison Helpline
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-4">
                  If you suspect your pet has ingested something toxic, contact:
                </p>
                <div className="bg-white p-6 rounded-lg border-2 border-amber-300 mb-4">
                  <p className="text-2xl font-bold text-amber-900 mb-2">
                    ASPCA Poison Control
                  </p>
                  <a
                    href="tel:18884264435"
                    className="text-3xl font-bold text-burgundy-600 hover:text-burgundy-700"
                  >
                    (888) 426-4435
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Available 24/7 • $95 consultation fee may apply
                  </p>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Common toxins:</strong> Chocolate, grapes/raisins,
                  xylitol, certain plants, human medications, rodenticides
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 text-burgundy-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Prevention is the Best Medicine
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Regular wellness visits help us catch problems early and keep your
              pets healthy and happy!
            </p>
            <Button
              size="lg"
              className="bg-burgundy-500 hover:bg-burgundy-600"
              asChild
            >
              <Link href="/book-appointment">Schedule a Wellness Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
