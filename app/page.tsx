"use client";

import Image from "next/image";
import { Header } from "./header";
import { PC } from "./pc";
import { Teacher } from "./teacher";
import { Student1 } from "./student1";
import { Student2 } from "./student2";
import { Student3 } from "./student3";
import { Footer } from "./footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(-1);
  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      handleCount();
    }, 5000);

    return () => handleCount();
  }, [count]);

  const OVERVIEWS = [
    {
      title: "レッスン内容",
      english: "LESSON",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      title: "料金プラン",
      english: "PRICE",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      title: "講師のご紹介",
      english: "TEACHER",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      title: "BBBのQ&A",
      english: "Q&A",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
  ];

  return (
    <>
      <Header></Header>
      <main className="overflow-hidden">
        <div className="absolute top-96 left-48">
          <h1 className="text-[48px] pb-5 [text-shadow:_1px_1px_3px_gray]">
            話して学ぼう！
            <br />
            BBB英会話スクール
          </h1>
          <button className="relative bg-red-600 text-white text-xl px-40 py-5 rounded-lg -translate-x-2 duration-500 hover:scale-110 after:absolute after:top-6 after:right-5 after:w-4 after:h-4 after:border-b-2 after:border-r-2 after:border-gray-600 after:-rotate-45">無料体験はこちら</button>
        </div>
        <div className="relative -z-10 w-4/5 h-[60em] ml-auto">
          <div className="absolute w-full after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:shadow-[inset_0_0_10px_15px_#FFF]">
            <Image
              className={
                count % 3 === 0
                  ? "w-full opacity-1 duration-[2000ms]"
                  : "w-full opacity-0 duration-[2000ms]"
              }
              src="/img/mainvisual1.jpg"
              alt=""
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="absolute w-full after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:shadow-[inset_0_0_10px_15px_#FFF]">
            <Image
              className={
                count % 3 === 1
                  ? "w-full opacity-1 duration-[2000ms]"
                  : "w-full opacity-0 duration-[2000ms]"
              }
              src="/img/mainvisual2.jpg"
              alt=""
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="absolute w-full after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:shadow-[inset_0_0_10px_15px_#FFF]">
            <Image
              className={
                count % 3 === 2
                  ? "w-full opacity-1 duration-[2000ms]"
                  : "w-full opacity-0 duration-[2000ms]"
              }
              src="/img/mainvisual3.jpg"
              alt=""
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
        <div>
          <h2 className="relative text-center [font-size:2.5rem] py-10 mb-10 after:absolute after:bottom-8 after:left-[53rem] after:text-center after:w-24 after:border-b-4 after:border-black">
            BBBが選ばれる理由
          </h2>
          <div className="py-20 bg-red-600">
            <PC></PC>
            <Teacher></Teacher>
          </div>
        </div>
        <div className="pt-14 pb-10">
          <h2 className="relative text-center [font-size:2.5rem] py-10 mb-10 after:absolute after:bottom-8 after:left-[53rem] after:text-center after:w-24 after:border-b-4 after:border-black">
            受講生の声
          </h2>
          <Student1></Student1>
          <Student2></Student2>
          <Student3></Student3>
        </div>
        <div className="bg-[url('/img/bg.gif')] animate-[bg_5s_infinite_linear]">
          <h2 className="relative text-center [font-size:2.5rem] py-10 mb-10 after:absolute after:bottom-8 after:left-[53rem] after:text-center after:w-24 after:border-b-4 after:border-black">
            スクールの概要
          </h2>
          <div className="w-1/2 mx-auto grid grid-cols-2 gap-10 pb-16">
            {OVERVIEWS.map((overview) => {
              return (
                <div className="bg-white px-10 py-16 rounded-2xl">
                  <h2 className="text-center text-2xl font-bold">
                    {overview.title}
                  </h2>
                  <p className="text-center text-xl font-bold pb-5">
                    {overview.english}
                  </p>
                  <p>{overview.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center pt-32">
          <h2 className="text-3xl font-bold pb-2">まずは無料で、BBBの英会話を試してみませんか？</h2>
          <p className="text-lg pb-12">今なら初月のレッスンを特別価格で受講できる割引クーポンをプレゼント！</p>
          <button className="bg-red-600 text-white text-2xl font-bold px-72 py-5 rounded-full mb-28 border-4 border-red-600 duration-500 hover:bg-black hover:text-red-600">無料体験に申し込む</button>
        </div>
      </main>
      <footer className="bg-gray-200">
      <Footer></Footer>
      </footer>
    </>
  );
}
