import Image from 'next/image';

import MainWindow from '@/components/MainWindow';
import HomeLayout from '@/layouts/home';

function PartnerPage() {
  return (
    <MainWindow page="partner">
      <div className="relative z-50 flex h-full w-full flex-col items-center overflow-y-auto overflow-x-hidden">
        {/* <h1 className="title text-yellow-400">참여사</h1>
        <div className="flex gap-12 text-2xl">
          <h1 className="font">큐 앤 뮤직</h1>
          <h1 className="font">런던 스트링</h1>
        </div> */}
        <h1 className="title text-yellow-400">파트너</h1>
        <div className="flex w-full flex-row items-center justify-center">
          <div className="flex basis-1/3 justify-center">
            <Image
              width={250}
              height={55}
              src="/assets/images/partner/queueAndMusic.png"
              alt="큐뮤"
            ></Image>
          </div>
          <div className="flex basis-1/3 justify-center">
            <Image
              width={250}
              height={36}
              src="/assets/images/partner/londonString.png"
              alt="런던스트링"
            ></Image>
          </div>
          <div className="flex basis-1/3 justify-center">
            <Image
              width={250}
              height={53}
              src="/assets/images/partner/addd.png"
              alt="애드"
            ></Image>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-row items-center justify-center">
          <div className="flex basis-1/3 justify-center">
            <Image
              width={250}
              height={137}
              src="/assets/images/partner/chungwooJung.png"
              alt="청우"
            ></Image>
          </div>
          <div className="flex basis-1/3 justify-center">
            <Image
              width={250}
              height={43}
              src="/assets/images/partner/raonData.png"
              alt="라온데이터"
            ></Image>
          </div>
          <div className="flex basis-1/3 justify-center">
            <Image
              width={150}
              height={132}
              src="/assets/images/partner/pulit.png"
              alt="풀릿"
            ></Image>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex basis-1/3 justify-center">
            <Image
              width={150}
              height={132}
              src="/assets/images/partner/question.png"
              alt="물음표"
            ></Image>
          </div>
        </div>
      </div>
    </MainWindow>
  );
}

PartnerPage.Layout = HomeLayout;

export default PartnerPage;
