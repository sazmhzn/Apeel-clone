import Head from "next/head";
import MyImages from "@/components/MyImages";
import Overlap from "@/components/Infobar";
import bgImage from "images/filters_quality(85).webp";

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
            <p className="mb-6 text-sm text-offWhite">Longer-lasting produce.</p>
            <div>
              <h1 className=" mb-6 w-4/6 leading-14 text-offWhite text-5xl font-bold tracking-tighter">
                Plant-based protection<br/> that helps the produce you love stay
                fresh for longer.
              </h1>
            </div>
            <button className="px-6 py-3 rounded-3xl bg-offWhite">
              Find Apeel
            </button>
          </div>
          
          <MyImages src={bgImage} width={'100%'} />
        </div>
        <Overlap />
        <div>

          
        </div>
      </main>
    </div>
  );
}
