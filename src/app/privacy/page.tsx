import { readFileSync } from "node:fs";
import Link from "next/link";
import path from "path";

const privacyText = readFileSync(
  path.join(process.cwd(), "public", "privacy.txt"),
  "utf8"
);

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-carbon px-4 py-8 text-white">
      <div className="absolute inset-0 fine-grid opacity-20" />
      <div className="section-shell relative z-10">
        <div className="mb-8 flex items-center justify-between gap-4 rounded-[8px] border border-white/10 bg-carbon/58 px-4 py-4 shadow-glass backdrop-blur-2xl md:px-6">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Jagger Garage
          </Link>
          <Link href="/" className="rounded-[8px] border border-white/12 px-4 py-2 text-sm text-white/70 transition hover:border-ember/45 hover:text-white">
            На главную
          </Link>
        </div>

        <article className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 shadow-glass backdrop-blur-2xl md:p-8">
          <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7 text-white/72 md:text-base">
            {privacyText}
          </pre>
        </article>
      </div>
    </main>
  );
}
