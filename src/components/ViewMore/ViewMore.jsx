import React, { useState } from 'react';
import { Link } from 'react-router';

 const sampleItems = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  subtitle: `Nice description for product ${i + 1}`,
  price: (9.99 + i).toFixed(2),
  image: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect fill='%23e2e8f0' width='100%25' height='100%25'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='%23626e7b'>Product ${i + 1}</text></svg>`,
 }));

 function ViewMore({ initial = 6, step = 6 }) {
  const [visible, setVisible] = useState(initial);

  const showMore = () => setVisible((v) => Math.min(sampleItems.length, v + step));
  const showLess = () => setVisible(initial);

  const visibleItems = sampleItems.slice(0, visible);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Page Header */}
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">View More Page</h1>
          <Link to="/" className="text-sm px-3 py-2 rounded-md border border-gray-200 bg-white hover:shadow-sm">
            Back Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-10">
        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-full aspect-[3/2] bg-gray-200 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-500 mt-1 truncate">{item.subtitle}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">${item.price}</span>
                  <Link to={`/product/${item.id}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm shadow-md hover:opacity-95">
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          {visible < sampleItems.length ? (
            <button onClick={showMore} className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow hover:shadow-lg transition">
              View More
            </button>
          ) : (
            <>
              <button onClick={showLess} className="px-5 py-2 rounded-full bg-white border border-gray-200 shadow hover:shadow-lg transition">
                View Less
              </button>
              <span className="text-sm text-gray-600">You are viewing all items</span>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </footer>
    </div>
  );
 }
 export default ViewMore;
