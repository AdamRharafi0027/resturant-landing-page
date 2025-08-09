"use client";
import { useState } from "react";

const ContactOrder = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    order: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // تحديث الحقول
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // إرسال البيانات (مؤقتا فقط console.log)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // --- هنا تضيف وظيفة الإرسال ---
      // مثال لإرسال بيانات إلى Google Sheets عبر API خاص أو Firebase

      // MOCK send delay
      await new Promise((r) => setTimeout(r, 1500));

      setMessage("Your request has been sent successfully! We will contact you soon.");
      setForm({ name: "", phone: "", order: "" });
    } catch (error) {
      setMessage("An error occurred while sending. Try again." );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer fixed bottom-8 right-8 bg-amber-400 text-black px-6 py-4 rounded-full text-xl shadow-lg hover:bg-amber-500 transition"
      >
        Order Now
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-md w-full p-6 relative text-white shadow-xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-amber-400 text-2xl font-bold hover:text-amber-600"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4 text-amber-400">Order Now</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-amber-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-amber-400"
              />
              <textarea
                name="order"
                placeholder="Your order (eg: 2 burgers, fries, drink)"
                value={form.order}
                onChange={handleChange}
                required
                rows={3}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-amber-400 resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-400 text-black py-3 rounded font-semibold hover:bg-amber-500 transition"
              >
                {loading ? "Sending..." : "send order"}
              </button>
              {message && (
                <p className="mt-2 text-center text-green-400 font-semibold">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactOrder;
