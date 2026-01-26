import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/placeholders/pazzo-slide-09.webp";

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: "Dr. Amy L. Kidd, VMD",
      role: "Veterinarian & Practice Owner",
      image: "/images/placeholders/Amy_1-236x300.jpg",
      bio: "Dr. Amy Kidd has been in small animal private practice since her graduation from the University of Pennsylvania in 1998. She is a native of the greater Philadelphia area, growing up in Huntingdon Valley, Pennsylvania, and attending Muhlenberg College in Allentown prior to veterinary school. While a student at the University of Pennsylvania, Dr. Kidd’s interest in critical and emergent care was fostered and is still with her today. A strong proponent of cutting-edge medicine, Dr. Kidd prides herself in her ability to deliver high quality preventive medicine and perform both routine and emergency surgeries. Now, she is excited to be able to provide these services for the patients and their owners at Pocopson Veterinary Station. Practicing in this immediate area since 2000 has enabled Dr. Kidd to form strong relationships with many of the specialists and referral centers in this region. If intensive or emergency care is needed, these relationships will allow a rapid and smooth referral process. She is also the proud mother of three children: Emilea, Noah, and Nathaniel, as well as countless rescue dogs and cats!",
    },
    {
      name: "Dr. Lisa Foose",
      role: "Veterinarian",
      image: "/images/placeholders/Dr.Foose-1-1-300x278.jpeg",
      bio: "Dr. Lisa Foose is excited to be the newest member of the Pocopson Veterinary Station team! She grew up in Lititz, Pennsylvania and worked as a veterinary assistant at a family-owned small animal veterinary clinic. After studying biology at Elizabethtown College, she attended veterinary school at the University of Pennsylvania School of Veterinary Medicine. In school, Dr. Foose developed a passion for small animal preventive care and a collaborative approach to veterinary medicine. Dr. Foose is excited to bring her medical skills, love for animals, and personable approach to medicine to the PVS team! In her free time, Dr. Foose enjoys jigsaw puzzles, traveling to visit family, beating escape rooms, trying new foods, and going to country concerts. Dr. Foose lives in Ardmore with her perfect kitty, Tuna.",
    },
    {
      name: "Dr. Ruth Eriksson",
      role: "Veterinarian",
      image: "/images/placeholders/Dr.Ruth-2-1-230x300.jpeg",
      bio: "Dr. Ruth Eriksson brings extensive experience and a deep love for animals to our team. She is dedicated to providing compassionate, comprehensive care for all of our patients.",
    },
  ];

  const supportStaff = [
    {
      name: "Sue L.",
      role: "Certified Veterinary Technician",
      image: "/images/placeholders/Sue_L-1-1-285x300.jpeg",
      bio: "Sue adds her personality and veterinary experience of over 20 years at Pocopson Vet Station. Her knowledge of the clients and more importantly the patients, is one of the highlights of having her as part of our team. Sue graduated from Harcum in 1992 with a degree in Veterinary Technology. Sue currently resides in Downingtown with her daughter where they share space with their menagerie of pets including rescue dogs, cats, and others!",
    },
    {
      name: "Melinda H.",
      role: "Certified Veterinary Technician",
      image: "/images/placeholders/Melinda-244x300.jpg",
      bio: "Melinda is originally from Landenberg. She is a local girl, having graduated from Kennett High School and Harcum College. She has been a certified Technician since 1992 and brings over 20 years of experience to Pocopson Vet Station. Melinda has had a love for animals since she was a child playing on her grandparents' farm.",
    },
    {
      name: "Lynne O.",
      role: "Client Care Coordinator",
      image: "/images/placeholders/Lynne_O-1-1-295x300.jpeg",
      bio: "Lynne has always had a passion for all things medicine. She has worked in the human medical field for 25 years. Now she is very excited to join our veterinary team, combining her love of animals with her medical interests. You will see her always smiling face greeting you at the front desk or will recognize her friendly voice on the phone. Lynne will also be assisting the technicians and doctors in the care of all of your pets' needs. Lynne lives in Unionville with her husband Tom and their two children, Jason and Katie. They are all surrounded by their own fur babies as well!",
    },
    {
      name: "Emilea S.",
      role: "Veterinary Assistant",
      image: "/images/placeholders/Emilea_S-1-1-285x300.jpeg",
      bio: "Emilea is a dedicated member of our veterinary team, providing compassionate care and assistance to ensure every patient receives the best treatment possible.",
    },
    {
      name: "Christin B.",
      role: "Veterinary Assistant",
      image: "/images/placeholders/Christin_B-1-1-300x282.jpeg",
      bio: "Christin brings enthusiasm and dedication to our team, working closely with our veterinarians to provide excellent care for all our patients.",
    },
    {
      name: "Leanne B.",
      role: "Veterinary Assistant",
      image: "/images/placeholders/Leanne_B-1-1-287x300.jpeg",
      bio: "Leanne is committed to providing exceptional care and creating a welcoming environment for both pets and their families.",
    },
    {
      name: "Vanessa H.",
      role: "Veterinary Assistant",
      image: "/images/placeholders/Vanessa_H-1-1-300x291.jpeg",
      bio: "Vanessa's passion for animals and dedication to their wellbeing makes her an invaluable part of our veterinary care team.",
    },
    {
      name: "Melissa J.",
      role: "Veterinary Assistant",
      image: "/images/placeholders/Melissa_J-2-255x300.jpeg",
      bio: "Melissa's caring approach and attention to detail ensure that every pet receives personalized, quality care during their visit.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] bg-stone-300">
        <Image
          src={heroImage}
          alt="Our caring team at Pocopson Veterinary Station"
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
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              Compassionate professionals dedicated to your pet's health and
              happiness 🐾
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-burgundy-100 text-burgundy-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ❤️ Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Experienced, Caring Professionals Who Treat Every Pet Like Family
            </h2>
            <p className="text-xl text-gray-600">
              At Pocopson Veterinary Station, we're proud to have assembled a
              team of dedicated veterinarians and support staff who share a
              common passion: providing the highest quality care with genuine
              compassion. Get to know the faces you'll see when you visit us!
            </p>
          </div>
        </div>
      </section>

      {/* Veterinarians */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-burgundy-100 text-burgundy-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Veterinarians
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Expert Veterinary Care 🩺
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our doctors combine years of experience with a genuine love for
              animals
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-6 items-center">
                  <div className="flex justify-center md:justify-start">
                    <div className="relative w-[180px] h-[220px] rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="180px"
                      />
                    </div>
                  </div>
                  <div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl md:text-3xl text-burgundy-600 mb-2">
                        {member.name}
                      </CardTitle>
                      <p className="text-burgundy-500 font-medium text-lg mb-4">
                        {member.role}
                      </p>
                      <CardDescription className="text-base text-gray-700 leading-relaxed">
                        {member.bio}
                      </CardDescription>
                    </CardHeader>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-burgundy-100 text-burgundy-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Support Team
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Amazing Support Staff 💚
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals who ensure every visit is smooth and every
              pet receives exceptional care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {supportStaff.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="grid grid-cols-[140px_1fr] gap-4 p-4">
                  <div className="flex justify-center items-start">
                    <div className="relative w-[130px] h-[160px] rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="130px"
                      />
                    </div>
                  </div>
                  <div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-burgundy-600 text-xl mb-1">
                        {member.name}
                      </CardTitle>
                      <p className="text-sm text-burgundy-500 font-medium mb-3">
                        {member.role}
                      </p>
                      <CardDescription className="text-sm text-gray-700 leading-relaxed">
                        {member.bio}
                      </CardDescription>
                    </CardHeader>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-burgundy-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Meet Our Team? 🏥
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            We'd love to welcome you and your furry friend to our practice!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cream-100 text-burgundy-600 hover:bg-cream-200"
              asChild
            >
              <Link href="/book-appointment">Book an Appointment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20"
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
