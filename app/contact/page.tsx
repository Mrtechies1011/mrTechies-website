"use client";

import { useState, useRef } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        formRef.current?.reset();

        // WhatsApp redirect after short delay
        setTimeout(() => {
          const text = encodeURIComponent(
            `Hi MrTechies 👋\n\nI just submitted the contact form.\n\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\n\nLooking forward to your response.`
          );
          window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
        }, 2000);
      }
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-10 py-20">

      {/* HEADER */}
      <section className="max-w-3xl mb-16 animate-fade-up">
        <h1 className="text-5xl font-bold text-brand-blue mb-4">
          Let’s Talk About Your Project
        </h1>
        <p className="text-gray-600 text-lg">
          Fill in the details below. Our team will reach out within
          <strong> 5–10 minutes</strong>.
        </p>
      </section>

      {/* FORM */}
      <section className="glass-card text-brand-dark p-10 max-w-3xl animate-fade-up delay-1">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`space-y-6 ${loading ? "opacity-70 pointer-events-none" : ""}`}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              name="name"
              required
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-brand-blue"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-brand-blue"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              name="phone"
              required
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-brand-blue"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Tell us about your project
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-brand-blue"
              placeholder="Website, app, SEO, budget, timeline…"
            />
          </div>

          <button
            disabled={loading}
            className="bg-brand-orange text-white px-8 py-4 rounded-lg font-medium cursor-pointer hover:opacity-90 w-full"
          >
            {loading ? "Submitting..." : "Get Free Consultation"}
          </button>

          <p className="text-sm text-gray-500 text-center">
            🔒 Your details are safe with us. No spam. No sharing.
          </p>
        </form>
      </section>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 max-w-md text-center animate-fade-up">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">
              Thank You! 🎉
            </h3>
            <p className="text-gray-600 mb-6">
              We’ve received your details.<br />
              Our team will contact you within <strong>5–10 minutes</strong>.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-brand-orange text-white px-6 py-3 rounded-lg cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
