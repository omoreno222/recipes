import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Wellcome to Recipe App</h1>
      <Link href="/recipe-list">go to recipe list</Link>
    </main>
  );
}
