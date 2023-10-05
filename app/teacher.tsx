import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function Teacher() {
  const { ref, inView } = useInView({
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div
      ref={ref}
      className={
        inView
          ? "w-[calc(50%+2rem)] -mr-8 h-44 ml-auto flex bg-slate-800 rounded-3xl opacity-1 duration-500"
          : "w-[calc(50%+2rem)] -mr-[calc(50%+2rem)] h-44 ml-auto flex bg-slate-800 rounded-3xl opacity-0 duration-500"
      }
    >
      <div className="flex mx-auto">
        <Image
          className="mr-5 w-16 object-contain"
          src="/img/icon-teacher.png"
          alt=""
          width={101}
          height={120}
        ></Image>
        <div className="pt-14">
          <h3 className="text-red-600 text-2xl font-bold">講師はネイティブ</h3>
          <p className="text-white">お気に入りの講師が自由に選べる！</p>
        </div>
      </div>
    </div>
  );
}
