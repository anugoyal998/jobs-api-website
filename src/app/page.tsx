import type { Metadata } from "next";
import Link from "next/link";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";

export const metadata: Metadata = {
  title: "React Finance API | Home",
  description: "Free & open source finance API",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full mt-[10vh] gap-6 flex justify-start lg:justify-center items-center lg:items-start">
          <div>
            <LargeHeading
              size="lg"
              className="three-d text-black dark:text-light-gold"
            >
              Get Real-time <br /> Stock Analysis
            </LargeHeading>
            <Paragraph className="max-w-xl lg:text-left">
              With the React Finance API, you can easily analyse Stocks in
              real-time with a free{" "}
              <Link
                href="/login"
                className="underline underline-offset-2 text-black dark:text-light-gold"
              >
                API Key
              </Link>
            </Paragraph>
          </div>
          {/* <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src='/Snap.png'
              alt='hero'
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
