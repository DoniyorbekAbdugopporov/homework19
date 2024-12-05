import React from 'react'

const Hero = () => {
  return (
    <section className="hero bg-heroImg h-[780px] bg-cover bg-center flex items-center justify-center">
      <div className="container">
        <div className="hero_card w-[730px] h-[350px] bg-[#F7F8FACC] flex flex-col items-center justify-center gap-14 mx-auto">
          <div className="flex flex-col items-center justify-center gap-3 text-center px-20">
            <h2 className="text-4xl font-semibold">🌱</h2>
            <h2 className="text-4xl font-semibold text-[#1D252C]">
              The nature candle
            </h2>
            <p className="text-[#1D252C] text-lg font-medium">
              All handmade with natural soy wax, Candleaf is a companion for all
              your pleasure moments
            </p>
          </div>
          <div>
            <button className="w-[310px] h-[40px] bg-[#56B280] text-white rounded-lg hover:bg-[#4ea575]">
              Discovery our collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero