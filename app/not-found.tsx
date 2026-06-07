/*
 * Geovane2dd Portfolio — Developer documentation site
 * Copyright (C) 2026 Geovane2dd
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeRounded from "@mui/icons-material/HomeRounded";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07070f]">
      <Navbar />

      <main className="flex-grow pt-16">
        <section className="max-w-7xl mx-auto px-6 py-40">
          <div className="text-center space-y-8 max-w-lg mx-auto">
            <div className="space-y-5">
              <p className="font-mono text-[10px] tracking-[0.35em] text-white/20 uppercase">
                Error · 404
              </p>
              <h1 className="text-8xl font-bold text-white tracking-tight">
                404
              </h1>
              <div className="w-12 h-px bg-white/10 mx-auto" aria-hidden="true" />
            </div>
            <div className="space-y-3">
              <p className="text-xl font-semibold text-white/85">
                Page not found
              </p>
              <p className="text-sm text-white/38 leading-relaxed">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-7 py-3.5
                  bg-white text-black rounded-xl text-sm font-semibold
                  hover:bg-neutral-100 transition-all duration-200 active:scale-[0.975]"
              >
                <span className="text-[1em]"><HomeRounded /></span>
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
