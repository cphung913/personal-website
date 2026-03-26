import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-100 bg-[#F7F5F0] flex flex-col items-center justify-center px-6">
      <p className="text-xs tracking-[0.18em] text-[#888880] uppercase font-['DM_Sans'] mb-4">
        404
      </p>
      <h1 className="font-['DM_Serif_Display'] text-4xl text-[#2C3E50] mb-6">
        Looks like nothing is here.
      </h1>
      <Link
        href="/"
        className="text-xs tracking-[0.15em] uppercase text-[#1A6B4A] hover:underline font-['DM_Sans'] transition-colors duration-200"
      >
        Go home
      </Link>
    </main>
  );
}
