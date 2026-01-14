"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-20 items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/images/placeholders/logo.jpg.webp"
              alt="Pocopson Vet Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-bold text-burgundy-500">
              Pocopson Veterinary Station
            </span>
            <span className="text-xs text-gray-600">
              Est. 1893 • West Chester, PA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-burgundy-500"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
            className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-burgundy-500"
          >
            <Phone className="h-4 w-4" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <Button asChild className="bg-burgundy-500 hover:bg-burgundy-600">
            <Link href="/book-appointment">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="container px-4 py-4 flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-burgundy-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t flex flex-col space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center space-x-2 text-base font-medium text-burgundy-500"
              >
                <Phone className="h-5 w-5" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <Button
                asChild
                className="w-full bg-burgundy-500 hover:bg-burgundy-600"
              >
                <Link href="/book-appointment">Book Appointment</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
