import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      petName,
      dateRequested,
      email,
      phone,
      bestTimeToCall,
      alternatePhone,
      receivingMeds,
      requestedMedications,
      currentMedications,
      comments,
    } = body;

    // Format requested medications
    const requestedMedsFormatted = requestedMedications
      .filter((med: { name: string }) => med.name.trim() !== "")
      .map(
        (med: { name: string; dosage: string; quantity: string }) =>
          `• ${med.name} - Dosage: ${med.dosage || "N/A"} - Quantity: ${med.quantity || "N/A"}`,
      )
      .join("\n");

    // Format current medications
    const currentMedsFormatted = currentMedications
      .filter((med: { name: string }) => med.name.trim() !== "")
      .map(
        (med: { name: string; dosage: string; lastDose: string }) =>
          `• ${med.name} - Dosage: ${med.dosage || "N/A"} - Last Dose: ${med.lastDose || "N/A"}`,
      )
      .join("\n");

    const receivingMethod =
      receivingMeds === "pickup"
        ? "Pick up at clinic"
        : receivingMeds === "mail"
          ? "Mail to my address"
          : "Call me to discuss";

    const emailContent = `
New Prescription Refill Request

CLIENT INFORMATION
------------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Best Time to Call: ${bestTimeToCall}
Alternate Phone: ${alternatePhone || "N/A"}
Date Requested: ${dateRequested}
Receiving Medications: ${receivingMethod}

PET INFORMATION
---------------
Pet's Name: ${petName}

REQUESTED PRESCRIPTION REFILLS
------------------------------
${requestedMedsFormatted || "None specified"}

CURRENT MEDICATIONS
-------------------
${currentMedsFormatted || "None specified"}

COMMENTS
--------
${comments || "None"}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: "Pocopson Vet Website <onboarding@resend.dev>",
      to: ["pocopsonvs@gmail.com"],
      cc: ["luccadimario@gmail.com"],
      replyTo: email,
      subject: `Prescription Refill Request - ${petName} (${lastName})`,
      text: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
