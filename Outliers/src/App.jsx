function App() {
  return (
    <main className="bg-white text-dark font-sans">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-primary">Outliers</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          A digital marketing agency helping brands grow, connect & thrive online.
        </p>
        <button className="bg-primary text-black px-6 py-3 rounded-full hover:brightness-90 transition">
          Let's Talk
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="max-w-2xl mx-auto text-lg">
          We are a team of creatives & strategists building impactful digital experiences for brands in Africa.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-dark text-white text-center">
        <p>© {new Date().getFullYear()} Outliers Marketing. All Rights Reserved.</p>
      </footer>
    </main>
  )
}

export default App;
