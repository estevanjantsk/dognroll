import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dog'n Roll</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex">
        <div className="bg-white w-3/5 flex justify-between px-4 py-2">
          <img src="/logo.png" alt="logo do dognroll" />
          <ul className="flex items-center gap-4">
            <li>REDES SOCIAIS</li>
            <li>CARDÁPIO</li>
            <li>CONTATO</li>
          </ul>
        </div>
        <div className="bg-dr-red flex-1"></div>
      </nav>

      <section className="flex">
        <div className="flex-1">
          <div>
            <img className="" src="/dognroll.png" alt="carrinho do dognroll" />
            <div className="bg-white flex justify-center items-end pt-16">
              <h2 className="text-dr-black text-4xl font-bold">DELIVERY</h2>
            </div>
          </div>
        </div>
        <div className="bg-dr-red flex-1 flex flex-col items-center justify-start">
          <img className="relative -top-12" src="/logo-principal.png" alt="logo principal do dognroll" />
          <h1 className="text-5xl font-bold text-white">
            Os mais saborosos <br />  Burgers e Hot Dogs <br /> de Curitiba
          </h1>
          <div className="bg-dr-red-light py-4 px-24 mt-20 text-white">
            PEÇA JÁ
          </div>
        </div>
      </section>

      <section className="flex justify-center gap-10 py-20 bg-white">
        <div className="bg-dr-red border-8 border-dr-black flex justify-center items-center w-36 h-36">
          <img src="/rappi.svg" alt="rappi" />
        </div>
        <div className="bg-dr-red border-8 border-dr-black flex justify-center items-center w-36 h-36">
          <img src="/ifood.svg" alt="ifood" />
        </div>
        <div className="bg-dr-red border-8 border-dr-black flex justify-center items-center w-36 h-36">
          <img src="/motoboy.svg" alt="motoboy" />
        </div>
        <div className="bg-dr-red border-8 border-dr-black flex justify-center items-center w-36 h-36">
          <img src="/ubereats.svg" alt="ubereats" />
        </div>
      </section>

      <section className=" bg-dr-red py-10">
        <h2 className="text-dr-yellow text-4xl font-bold uppercase text-center">Conecte-se conosco!</h2>
        <div className="flex justify-center gap-20 my-24">
          <img src="/facebook.svg" alt="facebook" />
          <img src="/instagram.svg" alt="instagram" />
        </div>
        <h2 className="text-white text-4xl font-bold uppercase text-center">Contato</h2>
        <div className="flex justify-center gap-20 px-20 py-10">
          <div className="flex-1">
            <h3 className="text-dr-yellow text-2xl font-bold uppercase">ENDEREÇO</h3>
            <p className="text-white text-2xl font-bold uppercase">
              Rua Paulo Setúbal, 2230 <br />
              Boqueirão <br />
              Curitiba/PR
            </p>
            <h3 className="text-dr-yellow text-2xl font-bold uppercase">TEL</h3>
            <p className="text-white text-2xl font-bold uppercase">
              +55 41 99246-2219 / <br /> 3402-9334
            </p>
            <h3 className="text-dr-yellow text-2xl font-bold uppercase">EMAIL</h3>
            <p className="text-white text-2xl font-bold uppercase">dognrollcwb@hotmail.com</p>
          </div>
          <div className="flex-1">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.2548902523467!2d-49.25447948498259!3d-25.496544441768396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb24be8fb867%3A0x3141ad24ab27e1bf!2sDog%20N%20Roll%20CWB!5e0!3m2!1sen!2see!4v1609197278716!5m2!1sen!2see" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} frameBorder={0} />
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-center py-4 bg-white">
        <span>© 2020 Estevan jantsk.</span>
      </footer>
    </div >
  )
}
