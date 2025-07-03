import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // must be service role for insert
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const body = await req.json();

  // Save to Supabase
  const { error } = await supabase.from("book_a_service").insert([
    {
      full_name: body.full_name,
      email: body.email,
      phone: body.phone,
      service_needed: body.service_needed,
    },
  ]);

  if (error) return new Response("Error saving data", { status: 500 });

  // Send Email
  await resend.emails.send({
    from: "noreply@yourdomain.com",
    to: "youremail@agency.com",
    subject: "📞 New Service Booking",
    html: `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${body.full_name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Service:</strong> ${body.service_needed}</p>
    `,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
