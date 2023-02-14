import Head from "next/head";
import MyImages from "@/components/MyImages";
import Overlap from "@/components/Infobar";
import Image from "next/image";
import Link from "next/link";
import bgImage from "images/filters_quality(85).webp";
import lemonImage from "images/filters_lemon(85).webp";
import svgLeft from "images/svg/svgexport-8.svg";
import avacardo from "images/filters_quality(85) (3).webp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apeel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative w-full min-h-screen">
          <div className=" absolute bottom-6 -translate-y-1/2 mx-10 px-8 py-6">
            <p className="mb-6 text-sm text-offWhite">
              Longer-lasting produce.
            </p>
            <div>
              <h1 className=" mb-6 w-4/6 leading-14 text-offWhite text-5xl font-bold tracking-tighter">
                Plant-based protection
                <br /> that helps the produce you love stay fresh for longer.
              </h1>
            </div>
            <button className="px-6 py-3 rounded-3xl bg-offWhite">
              Find Apeel
            </button>
          </div>

          <MyImages
            src={bgImage}
            width={"100%"}
            className={"absolute -top-24 -z-10 w-full min-h-full"}
          />
        </div>

        {/* The yellow floting section */}
        <Overlap />

        <div className="relative w-full min-h-screen">
          {/* <MyImages src={lemonImage} fill className={"object-cover"} />
           */}

          <MyImages
            src={lemonImage}
            fill
            className={"absolute -z-10 -top-24 w-[100%] h-[120vh]"}
          />
          <div className="w-[100%] min-h-screen px-8 py-9 absolute flex lg:flex-row sm:flex-col">
            <div className="flex-1">
              <h1 className=" mb-0 w-full leading-14 text-offWhite text-7xl font-bold tracking-tighter">
                This Peel is
                <br /> Powerful
              </h1>
            </div>
            <div className="flex-1 flex items-end justify-end ">
              <div className="flex flex-col justify-end items-end ">
                <p className="w-1/2 mb-2 text-justify text-md leading-5 font-semibold text-offWhite">
                  Apeel keeps moisture inside the produce adn oxygen out,
                  dramatically slowing the rate that produce spoils. because we
                  use edible plant- based materials, we call it food protecting
                  your food.
                </p>

                <Link
                  href="/index"
                  className="w-1/2 flex items-center text-sm text-left leading-5 font-semibold text-offWhite"
                >
                  <p>How Apeel Works</p> <Image src={svgLeft} width={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between text-my-green w-full min-h-screen rounded-xl">
          <div className="relative flex lg:flex-col justify-between flex-1 p-12 rounded-l-lg bg-offWhite">
            <h1 className="text-6xl w-100 font-extrabold">
              Seeing is
              <br /> believing.
            </h1>

            {/* <div className="flex-1">
            <Image src={avacardo} fill className="" />
            </div> */}

            <div className="text-center" >Without Apeel</div>
          </div>
          <div className="relative flex lg:flex-col justify-between flex-1 p-12 rounded-r-lg bg-banana-400">
            <h1 className="text-6xl w-100 font-extrabold">
             
              .
            </h1>

    
            <div className="text-center" >With Apeel</div>
          </div>
        </div>
        <section className="bg-banana relative w-full min-h-screen">

        </section>
      </main>
    </div>
  );
}
