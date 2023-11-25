import Image from "next/image";

export default function CupCarePage() {
  return (
    <div className="flex-row min-h-screen bg-gray-300">
      <div className="flex justify-center">
        {/* show the imported png logo horizontally centered  use img tag*/}
        <Image
          src="/images/cup-care.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="fixed flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">pages/index.js</code>
      </div>
      <p>Find in-depth information about Next.js features and API.</p>
    </div>
  );
}
