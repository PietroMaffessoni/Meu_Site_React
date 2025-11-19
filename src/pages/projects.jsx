export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-black pt-32 px-6">
      <h1 className="text-4xl font-semibold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Project 1</h2>
          <p className="text-gray-600 mb-4">Short description of this project.</p>
          <a href="#" className="text-blue-600 hover:underline">View details →</a>
        </div>

        <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Project 2</h2>
          <p className="text-gray-600 mb-4">Short description of this project.</p>
          <a href="#" className="text-blue-600 hover:underline">View details →</a>
        </div>

        <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Project 3</h2>
          <p className="text-gray-600 mb-4">Short description of this project.</p>
          <a href="#" className="text-blue-600 hover:underline">View details →</a>
        </div>
      </div>
    </div>
  );
}
