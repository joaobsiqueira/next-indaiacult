import React from "react";
import NavBar from "./components/NavBar";
import Image from "next/image";

const page = () => {
  return (
    <>
      <NavBar />
      <section className="prose px-4 py-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-52 lg:gap-52">
          <div className="mx-auto text-left lg:text-center">
            <p className="text-black text-2xl font-semibold md:text-4xl lg:text-6xl">
              Descubra toda a cultura de Indaiatuba em um só lugar!
            </p>
            <p className="text-black text-lg lg:text-2xl">
              O IndaiaCult te permite explorar completamente a história e toda
              arte indaiatubana.
            </p>
          </div>
          <div className="mt-6">
            <Image
              src="/undraw_art_lover.svg"
              alt="ilustração"
              width={559}
              height={689}
              className="mx-auto h-auto max-w-[500px] lg:max-w-[900px] w-[300px] sm:w-[500px] aspect-w-16 aspect-h-9"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
