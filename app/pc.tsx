import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function PC() {
  const { ref, inView } = useInView({
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div
      ref={ref}
      className={
        inView
          ? "w-[98vw] lg:w-[calc(50vw+2rem)] -ml-8 h-30 lg:h-44 mb-10 flex bg-white rounded-3xl opacity-1 duration-500"
          : "lg:w-[calc(50vw+2rem)] -ml-[calc(50vw+2rem)] h-30 lg:h-44 mb-10 flex bg-white rounded-3xl opacity-0 uration-500"
      }
    >
      <div className="flex mx-auto">
        <Image
          className="mr-5 w-20 object-contain"
          src="/img/icon-pc.png"
          alt=""
          width={174}
          height={120}
        ></Image>
        <div className="py-10 lg:pt-14">
          <h3 className="text-red-600 text-2xl font-bold">オンライン対応</h3>
          <p >24時間いつでも受講できる！</p>
        </div>
      </div>
    </div>
  );
}
