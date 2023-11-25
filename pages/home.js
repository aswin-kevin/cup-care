import React from "react";

export default function RecyclingPage() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col">
      <header className="text-center py-5 bg-green-500 text-white">
        <h1 className="text-4xl md:text-5xl">Paper Cup Recycling</h1>
      </header>
      <main className="flex-grow px-5 py-10 md:px-20">
        <h2 className="text-2xl md:text-3xl mb-5">
          Steps to Recycle Paper Cups
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Collect used paper cups.</li>
          <li>Rinse them to remove any leftover drink.</li>
          <li>Place them in a recycling bin.</li>
          <li>Take the bin to a recycling center or schedule a pickup.</li>
          <li>
            The recycling center will process the paper cups and turn them into
            new products.
          </li>
        </ol>
        <ol className="list-decimal list-inside space-y-2">
          <li>Collect used paper cups.</li>
          <li>Rinse them to remove any leftover drink.</li>
          <li>Place them in a recycling bin.</li>
          <li>Take the bin to a recycling center or schedule a pickup.</li>
          <li>
            The recycling center will process the paper cups and turn them into
            new products.
          </li>
        </ol>
        <ol className="list-decimal list-inside space-y-2">
          <li>Collect used paper cups.</li>
          <li>Rinse them to remove any leftover drink.</li>
          <li>Place them in a recycling bin.</li>
          <li>Take the bin to a recycling center or schedule a pickup.</li>
          <li>
            The recycling center will process the paper cups and turn them into
            new products.
          </li>
        </ol>
      </main>
      <footer className="text-center py-5 bg-green-500 text-white">
        <p>&copy; 2022 Recycling Initiative</p>
      </footer>
    </div>
  );
}
