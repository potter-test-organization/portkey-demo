import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>----------</div>
      <a href="sign">
        <button>Go to sign</button>
      </a>
      <div>----------</div>
      <a href="assets">
        <button>Go to assets</button>
      </a>
    </main>
  );
}
