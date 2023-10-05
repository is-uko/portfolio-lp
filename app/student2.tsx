import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function Student2() {
  const { ref, inView } = useInView({
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div
      ref={ref}
      className={
        inView
          ? "pb-10 w-[600px] mx-auto translate-x-28 flex opacity-1 duration-1000"
          : "pb-10 w-[600px] mx-auto translate-x-28 flex opacity-0 scale-50 duration-1000"
      }
    >
      <div className="w-[150px] order-2">
        <Image
          className="bg-gray-400 rounded-full"
          src="/img/icon-student2.png"
          alt=""
          width={150}
          height={150}
        ></Image>
        <p className="text-center">⚪︎⚪︎⚪︎さん</p>
        <p className="text-center">会社員</p>
      </div>
      <div className="relative mr-10 w-[440px] order-1 before:absolute before:top-20 before:-right-5 before:bg-[#e0edff] before:w-5 before:h-5 before:rotate-45 after:absolute after:-z-10 after:bg-[#e0edff] after:top-3 after:-left-5 after:w-[450px] after:h-32 after:rounded-xl">
        <p className="pt-7">
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    </div>
  );
}
