"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import { Pill, Phone, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MedicationEntry {
  name: string;
  dosage: string;
  quantity: string;
}

interface CurrentMedicationEntry {
  name: string;
  dosage: string;
  lastDose: string;
}

export default function PrescriptionRefillPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    petName: "",
    dateRequested: "",
    email: "",
    phone: "",
    bestTimeToCall: "",
    alternatePhone: "",
    receivingMeds: "pickup",
    comments: "",
  });

  const [requestedMedications, setRequestedMedications] = useState<MedicationEntry[]>([
    { name: "", dosage: "", quantity: "" }
  ]);

  const [currentMedications, setCurrentMedications] = useState<CurrentMedicationEntry[]>([
    { name: "", dosage: "", lastDose: "" }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addRequestedMedication = () => {
    setRequestedMedications(prev => [...prev, { name: "", dosage: "", quantity: "" }]);
  };

  const removeRequestedMedication = (index: number) => {
    if (requestedMedications.length > 1) {
      setRequestedMedications(prev => prev.filter((_, i) => i !== index));
    }
  };

  const updateRequestedMedication = (index: number, field: keyof MedicationEntry, value: string) => {
    setRequestedMedications(prev =>
      prev.map((med, i) => i === index ? { ...med, [field]: value } : med)
    );
  };

  const addCurrentMedication = () => {
    setCurrentMedications(prev => [...prev, { name: "", dosage: "", lastDose: "" }]);
  };

  const removeCurrentMedication = (index: number) => {
    if (currentMedications.length > 1) {
      setCurrentMedications(prev => prev.filter((_, i) => i !== index));
    }
  };

  const updateCurrentMedication = (index: number, field: keyof CurrentMedicationEntry, value: string) => {
    setCurrentMedications(prev =>
      prev.map((med, i) => i === index ? { ...med, [field]: value } : med)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prescription-refill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          requestedMedications,
          currentMedications,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <Pill className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Request Submitted!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your prescription refill request. Our team will review it and contact you within 1-2 business days.
              </p>
              <p className="text-gray-600 mb-8">
                If you need immediate assistance, please call us at{" "}
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`} className="text-burgundy-500 font-medium hover:text-burgundy-600">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-burgundy-500 hover:bg-burgundy-600">
                  <Link href="/">Return Home</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://pocopsonvetstation.covetruspharmacy.com" target="_blank" rel="noopener noreferrer">
                    Visit Online Pharmacy
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] bg-gray-800">
        <Image
          src="/images/placeholders/pazzo_slide_79.webp"
          alt="Prescription Refill"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 via-30% to-transparent to-60%" />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Prescription Refill Request
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Request your pet's prescription refills online for your convenience
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-gradient-to-b from-burgundy-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Pocopson Veterinary Station is dedicated to providing the West Chester, PA community with the highest level of service. That's why we offer a fully stocked pharmacy to meet all your pet's needs.
            </p>
            <p className="text-gray-600 mb-6">
              We want you to get your medications and products from reputable, trusted suppliers, so we have stocked our pharmacy with a huge inventory of quality brands and products that are properly stored under optimal conditions.
            </p>
            <p className="text-gray-600 mb-8">
              We carry popular items like flea and tick preventatives, as well as heartworm preventatives and other medications. For your convenience, fill out and submit the form below to request your pet's prescription refill online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-burgundy-500 text-burgundy-600">
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us: {siteConfig.contact.phone}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://pocopsonvetstation.covetruspharmacy.com" target="_blank" rel="noopener noreferrer">
                  <Pill className="h-4 w-4 mr-2" />
                  Visit Online Pharmacy
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {/* Client and Patient Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-burgundy-600 text-xl">
                  Client and Patient Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pet's Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your pet's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date Requested <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="date"
                      name="dateRequested"
                      value={formData.dateRequested}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Best Time to Call <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="bestTimeToCall"
                      value={formData.bestTimeToCall}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Morning, Afternoon, Evening"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Alternate Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="alternatePhone"
                      value={formData.alternatePhone}
                      onChange={handleInputChange}
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    How would you like to receive your medications? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="receivingMeds"
                    value={formData.receivingMeds}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                  >
                    <option value="pickup">Pick up at clinic</option>
                    <option value="mail">Mail to my address</option>
                    <option value="call">Call me to discuss</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Requested Prescription Refills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-burgundy-600 text-xl">
                  Requested Prescription Refills
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Please list the names, dosages and quantities of the medication(s) you are requesting.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {requestedMedications.map((med, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                      <Input
                        placeholder="Medication Name"
                        value={med.name}
                        onChange={(e) => updateRequestedMedication(index, "name", e.target.value)}
                      />
                      <Input
                        placeholder="Dosage / Strength"
                        value={med.dosage}
                        onChange={(e) => updateRequestedMedication(index, "dosage", e.target.value)}
                      />
                      <Input
                        placeholder="Quantity"
                        value={med.quantity}
                        onChange={(e) => updateRequestedMedication(index, "quantity", e.target.value)}
                      />
                    </div>
                    {requestedMedications.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeRequestedMedication(index)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addRequestedMedication}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Medication
                </Button>
              </CardContent>
            </Card>

            {/* Current Medications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-burgundy-600 text-xl">
                  Your Pet's Current Medications
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Please list the names and amounts of any medication your pet is currently receiving. Also include the time your pet last received each medication.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentMedications.map((med, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                      <Input
                        placeholder="Medication Name"
                        value={med.name}
                        onChange={(e) => updateCurrentMedication(index, "name", e.target.value)}
                      />
                      <Input
                        placeholder="Dosage / Strength"
                        value={med.dosage}
                        onChange={(e) => updateCurrentMedication(index, "dosage", e.target.value)}
                      />
                      <Input
                        placeholder="Time of Last Dose"
                        value={med.lastDose}
                        onChange={(e) => updateCurrentMedication(index, "lastDose", e.target.value)}
                      />
                    </div>
                    {currentMedications.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeCurrentMedication(index)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addCurrentMedication}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Medication
                </Button>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-burgundy-600 text-xl">
                  Comments
                </CardTitle>
                <p className="text-sm text-gray-600">
                  If you have noticed any changes in your pet's health or behavior, please comment below.
                </p>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Any additional information about your pet's health..."
                  rows={4}
                />
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-burgundy-500 hover:bg-burgundy-600 px-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Refill Request"}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                We will contact you within 1-2 business days to confirm your request.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
