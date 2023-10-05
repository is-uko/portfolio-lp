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
          ? "w-[calc(50%+2rem)] -ml-8 h-44 mb-10 flex bg-slate-800 rounded-3xl opacity-1 duration-500"
          : "w-[calc(50%+2rem)] -ml-[calc(50%+2rem)] h-44 mb-10 flex bg-slate-800 rounded-3xl opacity-0 uration-500"
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
        <div className="pt-14">
          <h3 className="text-red-600 text-2xl font-bold">オンライン対応</h3>
          <p className="text-white">24時間いつでも受講できる！</p>
        </div>
      </div>
    </div>
  );
}
