import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { navigation } from '@/config/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              Pocopson Veterinary Station
            </h3>
            <p className="text-sm mb-4">
              Providing compassionate care for your furry family members since 1893 from our historic railroad station in West Chester, PA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/prescription-refill"
                  className="text-sm hover:text-white transition-colors"
                >
                  Prescription Refill
                </Link>
              </li>
              <li>
                <a
                  href="https://pocopsonvetstation.covetruspharmacy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Online Pharmacy
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Hours
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.hours.map((schedule, index) => (
                <li key={index}>
                  <span className="font-medium">{schedule.day}:</span>{' '}
                  <span>{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <div className="flex items-center justify-center gap-2">
            <p>
              © {currentYear} Pocopson Veterinary Station. All rights reserved.
            </p>
            <Image
              src="/images/placeholders/dogcuteanimation31.gif"
              alt="Cute dog wagging tail"
              width={24}
              height={24}
              className="inline-block"
              unoptimized
            />
          </div>
          <p className="mt-2 text-gray-500">
            Historic building established 1893 • Veterinary practice since 1991
          </p>
        </div>
      </div>
    </footer>
  );
}
