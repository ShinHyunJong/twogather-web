import MainWindow from '@/components/MainWindow';
import HomeLayout from '@/layouts/home';

const members = [
  {
    id: 0,
    name: '릴민',
    url: '/assets/images/about/2-프로필1.png',
  },
  {
    id: 1,
    name: '마법 아재',
    url: '/assets/images/about/2-프로필2.png',
  },
  {
    id: 2,
    name: '큐앤뮤직',
    url: '/assets/images/about/2-프로필3.png',
  },
  {
    id: 3,
    name: '혼란',
    url: '/assets/images/about/2-프로필4.png',
  },
  {
    id: 4,
    name: '기린좋군',
    url: '/assets/images/about/2-프로필5.png',
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
  return (
    <MainWindow page="about">
      <div className="mx-auto flex h-full w-full flex-col items-center overflow-auto px-4 pb-4 text-center">
        <h1 className="title text-sky-500">팀 소개</h1>
        <div className="flex flex-row gap-2">
          {members.map((x) => {
            return (
              <div key={x.id} className="basis-1/5">
                <div className="flex flex-col">
                  <h2 className="profileName">{x.name}</h2>
                  <div className="flex w-full flex-col border-4 border-black">
                    <div className="h-5 w-full border-b-4 border-black bg-[#d5bffd]"></div>
                    <img alt={x.name} src={x.url}></img>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="subTitle text-sky-500">개발진</h1>
        <div className="flex w-full flex-row gap-2">
          {memberInfo.map((x) => {
            return (
              <div key={x.id} className="basis-1/4">
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
