import MainWindow from '@/components/MainWindow';
import HomeLayout from '@/layouts/home';

const maps = [
  {
    id: 0,
    name: '티켓 민팅',
    desc: '티켓 혜택 = 티셔츠 제공, 티겟 하나당\nPFP 1장, 티켓 홀더 대상 파티',
  },
  {
    id: 1,
    name: 'APP TASK 공유',
    desc: '큐앤 뮤직의 APP 진행 상황 공유\nAPP내의 콘텐츠',
  },
  {
    id: 2,
    name: '고급 악기 추첨',
    desc: '홀더 대상 매월 악기 추첨 지급\n1년 동안 지급',
  },
  {
    id: 3,
    name: '문화 공연 티켓',
    desc: '매월 음악 문화 공연 티켓 추첨 지급\n1년 동안 지급',
  },
  {
    id: 4,
    name: '테마 파티',
    desc: '여러 번의 테마 파티 진행\n음악 테마에 맞는 특별한 파티',
  },
  {
    id: 5,
    name: '원데이 클래스',
    desc: '음악 문화 생활 원데이 클래스',
  },
  {
    id: 6,
    name: 'APP 마케팅',
    desc: '투게더 커뮤니티 확장을 위한\nAPP 마케팅',
  },
  {
    id: 7,
    name: 'APP 혜택 공개',
    desc: '특별한 APP 내의 NFT 공개\n* 2023년 3분기 공개 예정',
  },
];

const RoadmapPage = () => {
  return (
    <MainWindow page="roadmap">
      <div className="mx-auto flex h-full w-full flex-col items-center overflow-auto px-4 pb-4 text-center">
        <h1 className="title text-pink-400">로드맵</h1>
        <div className="grid w-full grid-flow-col auto-rows-auto grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4">
          {maps.map((x) => {
            return (
              <div key={x.id} className="flex flex-col">
                <div className="relative flex h-[170px] w-full flex-col overflow-y-auto border-4 border-black bg-white px-2 pb-4">
                  <div className="absolute top-0 left-0 h-6 w-full border-b-4 border-black bg-[#d5bffd]"></div>
                  <h2 className="font mt-10 text-lg font-bold">{x.name}</h2>
                  <p className="z-50 mt-2 whitespace-pre-line">{x.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainWindow>
  );
};

RoadmapPage.Layout = HomeLayout;
export default RoadmapPage;
