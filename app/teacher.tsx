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
          ? "w-[98vw] lg:w-[calc(50vw+2rem)] -mr-8 h-30 lg:h-44 ml-auto flex bg-white rounded-3xl opacity-1 duration-500"
          : "lg:w-[calc(50vw+2rem)] -mr-[calc(50vw+2rem)] h-30 lg:h-44 ml-auto flex bg-white rounded-3xl opacity-0 duration-500"
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
        <div className="py-10 lg:pt-14">
          <h3 className="text-red-600 text-2xl font-bold">講師はネイティブ</h3>
          <p>お気に入りの講師が自由に選べる！</p>
        </div>
      </div>
    </div>
  );
}
