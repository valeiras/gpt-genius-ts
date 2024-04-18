import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">GPT-Genius</h1>
          <p className="py-6 text-lg leading-loose">Some serious GPT things going on...</p>
          <Link href="/chat" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
