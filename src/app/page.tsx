import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      

      <div className="container mx-auto grid grid-cols-3 gap-10 mt-[300px] ">
        {/* 챔피언 목록으로 이동 */}
        <Link href="/champion">
          <div className="cursor-pointer">
            <Image
              src="https://i.namu.wiki/i/X2LX-EypUqp76v__SBIIo2nA_f-0odbKAYhfkzWV2mhD50NVCXbQ1prUxgCe3jmUvSheiFSRl_dCGD_LFVnwAUywupaXEYi0oS0ZQ-YVDfvWYfTtuWI5rB99y7RjPP_gUFvqDSLCkgR7xEv5iU0I7A.webp" 
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
            <Image
              src="https://i.namu.wiki/i/iUveqO96eeFZAJX99jxCHtAa57mzQ7Ufn2F4af9yMq1eaQEmhteeBmwGtvn-kAD8npWTI-dP2MBjkSmruyeBX64NO91mG57NXGPxJBNbwkU4laKZCBYvlKGP20WjuFv46q9Zg_02n_8pE7sGrj-fjA.webp" // 로테이션 썸네일 이미지 (이미지 경로에 맞게 수정)
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
            <Image
              src="https://i.namu.wiki/i/Yr4KG2F1WKaNj7ex6j_1CyNOMRl1Q8HQUlnq0Z0v-MZ3MP561AK4bd4l_OoAX47yoYZO31Rimf_2EGOYzPy_ZP48BE1SMRsKUl7C3Lm_XPyYDppqwBUHJBeAaktt5lMVQxZ-8dndC7CgYbTLCvo7Rg.webp" // 아이템 목록 썸네일 이미지 (이미지 경로에 맞게 수정)
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
