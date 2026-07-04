import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-[1080px] flex-col justify-center px-6 sm:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-sage-deep">
        404
      </p>
      <h1 className="mt-4 font-serif text-[clamp(2.25rem,6vw,3.5rem)] font-medium leading-[1.05]">
        Nothing here.
      </h1>
      <div className="mt-8 flex gap-6">
        <Link
          href="/"
          className="py-2 text-sm font-semibold text-sage-deep no-underline transition-colors duration-150 hover:text-sage"
        >
          Home →
        </Link>
        <Link
          href="/projects"
          className="py-2 text-sm font-semibold text-sage-deep no-underline transition-colors duration-150 hover:text-sage"
        >
          Projects →
        </Link>
      </div>
    </div>
  );
}
