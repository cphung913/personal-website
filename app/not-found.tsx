import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center sm:px-6">
      <p className="font-sans text-xs tracking-[0.18em] text-pencil uppercase mb-4">
        404
      </p>
      <h1 className="mb-6 font-serif text-3xl text-slate sm:text-4xl">
        Looks like nothing is here.
      </h1>
      <p className="mb-5 font-sans text-xs tracking-[0.12em] text-pencil uppercase">
        Here are some places to go:
      </p>
      <div className="flex gap-6">
        <Link href="/" className="font-sans text-xs tracking-[0.15em] uppercase text-forest transition-colors duration-150 hover:underline">
          Home
        </Link>
        <Link href="/projects" className="font-sans text-xs tracking-[0.15em] uppercase text-forest transition-colors duration-150 hover:underline">
          Projects
        </Link>
        <Link href="/about" className="font-sans text-xs tracking-[0.15em] uppercase text-forest transition-colors duration-150 hover:underline">
          About
        </Link>
      </div>
    </div>
  );
}
