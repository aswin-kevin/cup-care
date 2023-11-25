import React from "react";

export default function SecondHome() {
  return (
    <div className="min-h-screen bg-green-100">
      <header className="text-center py-5 bg-green-500 text-white">
        <h1 className="text-4xl md:text-5xl">CupCare Initiative</h1>
      </header>
      <main className="px-5 py-10 md:px-20">
        <h2 className="text-2xl md:text-3xl mb-5">
          Paper Cup Recycling Initiative
        </h2>
        <p className="mb-5">
          Welcome to CupCare Initiative, where we&apos;re taking a step towards
          a greener, more sustainable future. Our latest initiative focuses on
          the responsible disposal of used paper cups, aiming to make a positive
          impact on both the environment and the lives of waste collectors in
          our community.
        </p>
        <h3 className="text-xl md:text-2xl mb-3">
          Why Paper Cup Recycling Matters:
        </h3>
        <p className="mb-5">
          Did you know that a significant number of paper cups end up in
          landfills every day? By participating in our initiative, you
          contribute to reducing this environmental impact. Paper cup recycling
          not only saves trees but also conserves energy compared to
          manufacturing new cups from raw materials.
        </p>
        <h3 className="text-xl md:text-2xl mb-3">How It Works:</h3>
        <ol className="list-decimal list-inside space-y-2 mb-5">
          <li>
            Empty the liquid: Visit our collection point at Research Park mess,
            empty the liquid in the dedicated funnel.
          </li>
          <li>
            Drop Off: Drop off your used paper cups in the specially designated
            bin.
          </li>
          <li>
            Make a Difference: Your contribution goes a long way in supporting
            waste collectors who manually segregate and recycle these cups,
            diverting them from landfills.
          </li>
        </ol>
        <h3 className="text-xl md:text-2xl mb-3">Benefits of Joining:</h3>
        <ul className="list-disc list-inside space-y-2 mb-5">
          <li>
            Environmental Impact: Reduce your carbon footprint by recycling
            paper cups, contributing to a cleaner, healthier planet.
          </li>
          <li>
            Community Support: Help local waste collectors by providing them
            with a source of recyclable material that they can process and sell.
          </li>
          <li>
            Educational Outreach: Raise awareness about the importance of
            responsible waste disposal and inspire others to join the cause.
          </li>
        </ul>
        <h3 className="text-xl md:text-2xl mb-3">Join Us Today!</h3>
        <p className="mb-5">
          Make a positive change by participating in our Paper Cup Recycling
          Initiative. Every cup you recycle is a step towards a more sustainable
          future. Spread the word, encourage your friends and colleagues to
          join, and let&apos;s make a collective impact!
        </p>
      </main>
      <footer className="text-center py-5 bg-green-500 text-white">
        <p>
          Visit us at{" "}
          <a href="https://cupcare.hackwithash.com" className="underline">
            cupcare.hackwithash.com
          </a>{" "}
          for more information and updates on our initiatives.
        </p>
        <p className="mt-3">
          Together, we can make a difference—one paper cup at a time!
        </p>
      </footer>
    </div>
  );
}
