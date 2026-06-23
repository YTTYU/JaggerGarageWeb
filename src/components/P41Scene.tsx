import Image from "next/image";

export function P41Scene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src="/images/frontviewblack.png"
        alt="P-41 front view"
        fill
        priority
        sizes="100vw"
        // className="object-contain object-center px-0 pt-10"
        className="object-contain object-center scale-155"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,6,7,0.18)_52%,rgba(5,6,7,0.88)_100%)]" />
    </div>
  );
}
