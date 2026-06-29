import Image from "next/image";
import { BASE_PATH } from "@/lib/base-path";

export function P41Scene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src={`${BASE_PATH}/images/frontviewblack.png`}
        alt="P-41 front view"
        fill
        priority
        sizes="100vw"
        className="translate-y-12 scale-[1.58] object-contain object-center sm:translate-y-8 sm:scale-[1.38] md:translate-y-0 md:scale-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,6,7,0.18)_52%,rgba(5,6,7,0.88)_100%)]" />
    </div>
  );
}
