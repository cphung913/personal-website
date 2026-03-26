import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F7F5F0] px-4 text-center sm:px-6">
      <p className="text-xs tracking-[0.18em] text-[#888880] uppercase font-['DM_Sans'] mb-4">
        404
      </p>
      <h1 className="mb-6 font-['DM_Serif_Display'] text-3xl text-[#2C3E50] sm:text-4xl">
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
