import Head from 'next/head'

export default function Home() {
  return (
    <div className="m-auto max-w-screen-xl">
      <Head>
        <title>Dog'n Roll</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex">
        <div className="bg-white md:w-3/5 flex-1 md:flex-none flex justify-between px-4 py-2">
          <img src="/logo.png" alt="logo do dognroll" />
          <ul className="flex items-center gap-4">
            <li><a href="#social">REDES SOCIAIS</a></li>
            <li><a href="https://pedir.delivery/dognroll" target="_blank">CARDÁPIO</a></li>
            <li><a href="#contact">CONTATO</a></li>
          </ul>
        </div>
        <div className="bg-dr-red flex-none md:flex-1"></div>
      </nav>

      <section className="flex flex-col md:flex-row">
        <div className="flex-1 hidden md:block">
          <div>
            <img src="/dognroll.png" alt="carrinho do dognroll" />
            <div className="bg-white flex justify-center items-end pt-16">
              <h2 className="text-dr-black text-4xl font-bold">DELIVERY</h2>
            </div>
          </div>
        </div>
        <div className="bg-dr-red flex-1 flex flex-col items-center md:justify-start">
          <img className="relative mt-5 md:mt-0 mx-4 md:mx-0 mb-4 md:mb-0 w-44 top-0 md:-top-12" src="/logo-principal.png" alt="logo principal do dognroll" />
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Os mais saborosos <br />  Burgers e Hot Dogs <br /> de Curitiba
          </h1>
          <a href="#delivery" className="bg-dr-red-light mt-12 md:mt-6 mb-5 md:mb-0 py-4 px-24 lg:mt-20 text-white text-2xl">
            PEÇA JÁ
          </a>
        </div>
      </section>

      <div className="block md:hidden bg-white">
        <h2 className="text-dr-black text-4xl py-6 font-bold uppercase text-center">Delivery!</h2>
      </div>
      <section id="delivery" className="flex flex-wrap justify-center gap-10 py-10 md:py-20 bg-white">
        <a href="https://www.rappi.com.br/curitiba/restaurantes/dog-n-roll" target="_blank" className="relative bg-dr-red border-8 border-dr-black flex justify-center items-center w-36 h-36">
          <img src="/rappi.svg" alt="rappi" />
          <img className="absolute -bottom-8" src="/joinha.png" alt="dognroll fazendo joinha" />
        </a>
        <a href="https://pedir.delivery/dognroll" target="_blank" className="relative bg-dr-red border-8 border-dr-black flex justify-center items-center w-36 h-36">
          <img src="/motoboy.svg" alt="motoboy" />
          <img className="absolute -bottom-8" src="/joinha.png" alt="dognroll fazendo joinha" />
        </a>
        <a href="https://www.ubereats.com/br/curitiba/food-delivery/dog-n-roll-cwb/6rS8XadDQ7W6Ado7E51UkA" target="_blank" className="relative bg-dr-red border-8 border-dr-black flex justify-center items-center w-36 h-36">
          <img src="/ubereats.svg" alt="ubereats" />
          <img className="absolute -bottom-8" src="/joinha.png" alt="dognroll fazendo joinha" />
        </a>
      </section>

      <section className=" bg-dr-red py-10">
        <h2 id="social" className="text-dr-yellow text-3xl md:text-4xl font-bold uppercase text-center">Conecte-se conosco!</h2>
        <div className="flex justify-center gap-20 my-10 md:my-24">
          <a href="https://www.facebook.com/dognrollcwb/" target="_blank">
            <img src="/facebook.svg" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/dognrollcwb/" target="_blank">
            <img src="/instagram.svg" alt="instagram" />
          </a>
        </div>
        <h2 className="text-white text-4xl font-bold uppercase text-center">Contato</h2>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 px-10 md:px-20 py-10">
          <div id="contact" className="flex-1">
            <h3 className="text-dr-yellow text-2xl font-bold uppercase">ENDEREÇO</h3>
            <p className="text-white text-2xl font-bold uppercase">
              Rua Paulo Setúbal, 2230 <br />
              Boqueirão <br />
              Curitiba/PR
            </p>
            <h3 className="text-dr-yellow text-2xl font-bold uppercase">TEL</h3>
            <p className="text-white text-2xl font-bold uppercase">
              <a className="flex items-center" href="https://wa.me/5541992462219" target="_blank">+55 41 99246-2219 <img className="pl-2" src="/whatsapp.svg" alt="whatsapp" /></a>
            </p>
            <h3 className="text-dr-yellow text-2xl font-bold uppercase">EMAIL</h3>
            <a href="mailto:dognrollcwb@hotmail.com?subject=Contato Dog'n Roll!" target="_blank" rel="noopener noreferrer" className="text-white text-2xl font-bold uppercase">dognrollcwb@hotmail.com</a>
          </div>
          <div className="w-full md:flex-1">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.2548902523467!2d-49.25447948498259!3d-25.496544441768396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb24be8fb867%3A0x3141ad24ab27e1bf!2sDog%20N%20Roll%20CWB!5e0!3m2!1sen!2see!4v1609197278716!5m2!1sen!2see" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} frameBorder={0} />
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-center py-4 bg-white">
        <span>© {new Date().getFullYear()} <a href="https://www.instagram.com/estevanj/" target="_blank">Estevan jantsk.</a></span>
      </footer>
    </div >
  )
}
