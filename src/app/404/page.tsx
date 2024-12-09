import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <div className="flex flex-col gap-7 justify-center items-center text-center container h-[80vh]">
        <Image width={800} height={800} className=" " src="/404.png" alt="" />
        <h1>Ooops! Page Not Found</h1>
        <p>
          {"This page doesn't exist or remove! We suggest you back to home"}
        </p>
        <Link className="px-8 py-3 bg-blue-600 text-white rounded-full w-fit" href="/">Back to Home Page</Link>
      </div>
    </>
  );
}
