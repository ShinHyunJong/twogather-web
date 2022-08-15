import Image from 'next/image';
import { useState } from 'react';

import MainWindow from '@/components/MainWindow';
import HomeLayout from '@/layouts/home';

const members = [
  {
    id: 0,
    name: '릴민',
    position: 'PM, 파운더',
    url: '/assets/images/about/2-프로필1.png',
    desc: '1. 이커머스 인프라 엔지니어\n2.국내 언론사 NFT 어드바이져\n3.클레이튼 프로젝트 어드바이져',
    clicked: false,
  },
  {
    id: 1,
    name: '마법 아재',
    position: '아트, 파운더',
    url: '/assets/images/about/2-프로필2.png',
    desc: '1. 캐릭터 IP 사업 경력\n2.일러스트레이터\n3.NFT 아트 담당 경력\n4.상표 사업 경력',
    clicked: false,
  },
  {
    id: 2,
    name: '큐앤뮤직',
    position: '어플 파운더',
    url: '/assets/images/about/2-프로필3.png',
    desc: '1. 패션 브랜드 런칭\n2. 현악기 경매, 유통 경력\n3. 패션 공유 앱 개발\n4. (주) 에드 스타트업 경력\n',
    clicked: false,
  },
  {
    id: 3,
    name: '혼란',
    position: '기획자',
    url: '/assets/images/about/2-프로필4.png',
    desc: '1. 원 이더 게임 경력\n2. 블루칩 NFT 활동 다수\n3. 클레이튼 프로젝트 기획자',
    clicked: false,
  },
  {
    id: 4,
    name: '기린좋군',
    position: 'CM',
    url: '/assets/images/about/2-프로필5.png',
    desc: '1. 원 이더 게임 경력\n2. NFT B 엠버서더 경력\n3. CCCC운영 경력\n',
    clicked: false,
  },
];

const memberInfo = [
  {
    id: 0,
    name: 'LEE',
    field: 'WEB3.0',
    desc: '여러 NFT 프로젝트 개발 경험',
  },
  {
    id: 1,
    name: 'KIM',
    field: '프론트',
    desc: '블록체인 활용 인증 및 개발',
  },
  {
    id: 2,
    name: 'DON',
    field: '백엔드',
    desc: '현 O크OOO 개발팀\n서버 개발 3년 이력',
  },
  {
    id: 3,
    name: 'SHIN',
    field: '시니어',
    desc: '시니어 풀스텍 개발자',
  },
];

const AboutPage = () => {
  const [memberList, setMemberList] = useState(members);

  const clickMember = (memberId: number) => {
    const curruent = [...memberList];
    const targetIndex = curruent.findIndex((x) => x.id === memberId);
    const target = curruent[targetIndex];
    if (!target) return;
    curruent.splice(targetIndex, 1, { ...target, clicked: !target?.clicked });
    setMemberList(curruent);
  };

  return (
    <MainWindow page="about">
      <div className="mx-auto flex h-full w-full flex-col items-center overflow-auto px-4 pb-4 text-center">
        <h1 className="title text-sky-500">팀 소개</h1>
        <div className="flex flex-row gap-4">
          {memberList.map((x) => {
            return (
              <div
                role="button"
                key={x.id}
                onClick={() => clickMember(x.id)}
                className="relative basis-1/5 cursor-pointer"
              >
                <div className="flex flex-col">
                  <h2 className="profileName">{x.name}</h2>
                  <div className="flex w-full flex-col border-4 border-black">
                    <div className="h-5 w-full border-b-4 border-black bg-[#d5bffd]"></div>
                    <Image
                      width={400}
                      height={400}
                      alt={x.name}
                      src={x.url}
                    ></Image>
                  </div>
                </div>

                <div
                  className={`absolute bottom-4 z-30 h-full w-full border-4 border-black bg-white py-2 px-4 text-left transition-transform ${
                    !x.clicked ? 'scale-0' : 'scale-105'
                  }`}
                >
                  <h1 className="font text-2xl">{x.position}</h1>
                  <p className="whitespace-pre-line">{x.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="subTitle text-sky-500">개발진</h1>
        <div className="flex w-full flex-row gap-2">
          {memberInfo.map((x) => {
            return (
              <div key={x.id} className="z-30 basis-1/4">
                <div className="flex flex-col">
                  <h2 className="font text-3xl font-bold">{x.name}</h2>
                  <h2 className="font text-xl font-bold">{x.field}</h2>
                  <p className="mt-6 whitespace-pre-line">{x.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainWindow>
  );
};

AboutPage.Layout = HomeLayout;
export default AboutPage;
