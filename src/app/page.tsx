import React from 'react';
import Link from 'next/link';


const page = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto grid grid-cols-3 gap-10 mt-[300px] ">
        {/* 챔피언 목록으로 이동 */}
        <Link href="/champion">
          <div className="cursor-pointer">
            <img
              src="https://i.ibb.co/NTS9QDN/d603da97bb8ff4f182d1c42137a7f7b5.png" 
              alt="챔피언 목록"
              width={500}
              height={300}
              className="hover:opacity-80 transition duration-200"
            />
            <p className="text-center text-xl mt-4">챔피언 목록</p>
          </div>
        </Link>

        {/* 로테이션 정보로 이동 */}
        <Link href="/rotation">
          <div className="cursor-pointer">
            <img
              src="https://i.ibb.co/zXmDX3m/ec6fbc9a397f7238523a0bf477bcdd9e.png" 
              alt="로테이션 정보"
              width={500}
              height={300}
              className="hover:opacity-80 transition duration-200"
            />
            <p className="text-center text-xl mt-4">로테이션 정보</p>
          </div>
        </Link>

        {/* 아이템 목록으로 이동 */}
        <Link href="/item">
          <div className="cursor-pointer">
            <img
              src="https://i.ibb.co/Vvsrt1g/image.jpg" 
              alt="아이템 목록"
              width={500}
              height={300}
              className="hover:opacity-80 transition duration-200"
            />
            <p className="text-center text-xl mt-4">아이템 목록</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
