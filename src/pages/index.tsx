import { trpc } from "./utils/trpc";
import Head from "next/head";

export default function Home() {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <Head>
        <title>Your App</title>
        <meta name="description" content="" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
        <div>
          <p className="text-3xl">
            {hello.data ? hello.data?.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
}
