export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 px-6 max-w-xl mx-auto">
      <h1 className="text-4xl font-semibold mb-10">Contact</h1>

      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-black outline-none"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-black outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            rows="5"
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-black outline-none"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-xl w-full hover:opacity-80 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
