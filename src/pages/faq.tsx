import { useState } from 'react';

import MainWindow from '@/components/MainWindow';
import HomeLayout from '@/layouts/home';

const firstRow = [
  {
    id: 0,
    name: '음악 생활 원데이 클래스는 무엇인가요?',
    desc: '티켓 혜택 = 티셔츠 제공, 티겟 하나당\nPFP 1장, 티켓 홀더 대상 파티',
    ans: '악기 연주 원데이 클래스, 악기 관련 역사 원데이 클래스 등 여러가지 음악 문화 생황을 즐길 수 있도록 준비한 콘텐츠이며, 하루 동안 짧게 진행됩니다. ',
    clicked: false,
  },
  {
    id: 1,
    name: '한달 마다 제공되는 티켓은 어떤 것들이 있나요?',
    desc: '큐앤 뮤직의 APP 진행 상황 공유\nAPP내의 콘텐츠',
    ans: '각종 음악 문화 생활 티켓 입니다. 콘서트(아이유, BTS , 흠뻑쇼등) 뮤지컬(맘마미아, 오페라의 유령 등) , 클래식 (독주회, 연주회)등 여러 장르의 음악 문화생활을 즐길 수 있는 티켓을 제공할 예정 입니다.',
    clicked: false,
  },
  {
    id: 2,
    name: '음악 테마에 맞는 특별한 파티는 무엇이며 몇 번이나 진행되나요?',
    desc: '홀더 대상 매월 악기 추첨 지급\n1년 동안 지급',
    ans: 'FIT 와 NYU 출신 FBM 전공자가 함께 하며 , 힙합 장르 , EDM 장르 , 클래식 장르등 여러가지 음악 장르에 따라서 여러 번의 파티가 진행될 예정입니다.',
    clicked: false,
  },
  {
    id: 3,
    name: '악기는 어떤 악기 인가요?',
    desc: '매월 음악 문화 공연 티켓 추첨 지급\n1년 동안 지급',
    ans: '비올라, 바이올린 등의 종류가 있으며, 국내 대형 악기사 런던 스트링과 제휴를 맺어 고품질의 악기를 준비 했습니다\n음악 테마에 맞는 특별한 파티는 무엇이며 몇번이나 진행되나요?',
    clicked: false,
  },
];

const second = [
  {
    id: 5,
    name: 'V1과 V2가 있는데 V2 런칭 이후에 V1은 어떻게 되는 건가요?',
    desc: '티켓 혜택 = 티셔츠 제공, 티겟 하나당\nPFP 1장, 티켓 홀더 대상 파티',
    ans: '악기 연주 원데이 클래스, 악기 관련 역사 원데이 클래스 등 여러가지 음악 문화 생황을 즐길 수 있도록 준비한 콘텐츠이며, 하루 동안 짧게 진행됩니다. ',
    clicked: false,
  },
  {
    id: 6,
    name: '투게더 커뮤니티 확장과 App이 어떤 확장 관계가 있나요?',
    desc: '큐앤 뮤직의 APP 진행 상황 공유\nAPP내의 콘텐츠',
    ans: '각종 음악 문화 생활 티켓 입니다. 콘서트(아이유, BTS , 흠뻑쇼등) 뮤지컬(맘마미아, 오페라의 유령 등) , 클래식 (독주회, 연주회)등 여러 장르의 음악 문화생활을 즐길 수 있는 티켓을 제공할 예정 입니다.',
    clicked: false,
  },
];

function QandAPage() {
  const [row, setRow] = useState(firstRow);
  const [secondRow, setSecondRow] = useState(second);

  const click = (memberId: number) => {
    const curruent = [...row];
    const targetIndex = curruent.findIndex((x) => x.id === memberId);
    const target = curruent[targetIndex];
    if (!target) return;
    curruent.splice(targetIndex, 1, { ...target, clicked: !target?.clicked });
    setRow(curruent);
  };
  const click2 = (memberId: number) => {
    const curruent = [...secondRow];
    const targetIndex = curruent.findIndex((x) => x.id === memberId);
    const target = curruent[targetIndex];
    if (!target) return;
    curruent.splice(targetIndex, 1, { ...target, clicked: !target?.clicked });
    setSecondRow(curruent);
  };
  return (
    <MainWindow page="faq">
      <div className="mx-auto flex h-full w-full flex-col items-center overflow-auto px-4 pb-4 text-center">
        <h1 className="title text-red-400">FAQ</h1>
        <div className="flex w-full justify-center gap-4">
          {row.map((x) => {
            return (
              <div
                role="button"
                onClick={() => click(x.id)}
                key={x.id}
                className="relative flex basis-1/4 flex-col"
              >
                <div className="relative flex h-[170px] w-full flex-col border-4 border-black bg-white px-2 pb-4 ">
                  <div className="absolute top-0 left-0 h-6 w-full border-b-4 border-black bg-red-400"></div>
                  <h2 className="font mt-10 text-lg font-bold">{x.name}</h2>
                </div>
                <div
                  className={`absolute bottom-4 z-30 h-full w-full overflow-y-auto border-4 border-black bg-white py-2 px-4 text-left transition-transform ${
                    !x.clicked ? 'scale-0' : 'scale-105'
                  }`}
                >
                  <div className="absolute top-0 left-0 h-6 w-full border-b-4 border-black bg-red-400"></div>
                  <p className="mt-8 whitespace-pre-line">{x.ans}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex w-full justify-center gap-4">
          {secondRow.map((x) => {
            return (
              <div
                role="button"
                onClick={() => click2(x.id)}
                key={x.id}
                className="relative flex basis-1/4 flex-col"
              >
                <div className="relative flex h-[170px] w-full flex-col border-4 border-black bg-white px-2 pb-4 ">
                  <div className="absolute top-0 left-0 h-6 w-full border-b-4 border-black bg-red-400"></div>
                  <h2 className="font mt-10 text-lg font-bold">{x.desc}</h2>
                </div>
                <div
                  className={`absolute bottom-4 z-30 h-full w-full overflow-auto border-4 border-black bg-white py-2 px-4 text-left transition-transform ${
                    !x.clicked ? 'scale-0' : 'scale-105'
                  }`}
                >
                  <div className="absolute top-0 left-0 h-6 w-full border-b-4 border-black bg-red-400"></div>
                  <p className="mt-8 whitespace-pre-line">{x.ans}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainWindow>
  );
}

QandAPage.Layout = HomeLayout;

export default QandAPage;
