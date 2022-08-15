import Image from 'next/image';

import MainWindow from '@/components/MainWindow';
import HomeLayout from '@/layouts/home';

function PartnerPage() {
  return (
    <MainWindow page="partner">
      <div className="relative flex h-full w-full flex-col items-center">
        <h1 className="title text-yellow-400">참여사</h1>
        <div className="flex gap-12 text-2xl">
          <h1 className="font">큐 앤 뮤직</h1>
          <h1 className="font">런던 스트링</h1>
        </div>
        <h1 className="title text-yellow-400">파트너</h1>
        <h1 className="font text-2xl">커밍순...</h1>
        <div className="absolute top-2 left-4">
          <Image
            alt="leftTopCorner"
            width={70}
            height={60}
            src="/assets/images/partner/leftTopPartner.png"
          ></Image>
        </div>
        <div className="absolute top-[30%] left-0">
          <Image
            alt="leftMiddleCorner"
            width={200}
            height={55}
            src="/assets/images/partner/leftMiddleCorner.png"
          ></Image>
        </div>
        <div className="absolute bottom-[-10px] left-0">
          <Image
            alt="leftBottomCorner"
            width={300}
            height={264}
            src="/assets/images/partner/leftPartnerCorner.png"
          ></Image>
        </div>
        <div className="absolute bottom-[-15px] right-[-12px]">
          <Image
            alt="rightBottomCorner"
            width={300}
            height={407}
            src="/assets/images/partner/4-오 이미지.png"
          ></Image>
        </div>
      </div>
    </MainWindow>
  );
}

PartnerPage.Layout = HomeLayout;

export default PartnerPage;
