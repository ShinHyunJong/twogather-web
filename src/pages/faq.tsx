import MainWindow from '@/components/MainWindow';
import HomeLayout from '@/layouts/home';

const firstRow = [
  {
    id: 0,
    name: '음악 생활 원데이 클래스는 무엇인가요?',
    desc: '티켓 혜택 = 티셔츠 제공, 티겟 하나당\nPFP 1장, 티켓 홀더 대상 파티',
  },
  {
    id: 1,
    name: '한달 마다 제공되는 티켓은 어떤 것들이 있나요?',
    desc: '큐앤 뮤직의 APP 진행 상황 공유\nAPP내의 콘텐츠',
  },
  {
    id: 2,
    name: '음악 테마에 맞는 특별한 파티는 무엇이며 몇 번이나 진행되나요?',
    desc: '홀더 대상 매월 악기 추첨 지급\n1년 동안 지급',
  },
  {
    id: 3,
    name: '악기는 어떤 악기 인가요?',
    desc: '매월 음악 문화 공연 티켓 추첨 지급\n1년 동안 지급',
  },
];

function QandAPage() {
  return (
    <MainWindow page="faq">
      <div className="mx-auto flex h-full w-full flex-col items-center overflow-auto px-4 pb-4 text-center">
        <h1 className="title text-red-400">FAQ</h1>
        <div className="flex w-full justify-center gap-4">
          {firstRow.map((x) => {
            return (
              <div key={x.id} className="flex basis-1/4 flex-col">
                <div className="relative flex h-[170px] w-full flex-col border-4 border-black bg-white px-2 pb-4 ">
                  <div className="absolute top-0 left-0 h-6 w-full border-b-4 border-black bg-red-400"></div>
                  <h2 className="font mt-10 text-lg font-bold">{x.name}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex w-full justify-center gap-4">
          <div className="flex basis-1/4 flex-col">
            <div className="relative flex h-[170px] w-full flex-col border-4 border-black bg-white px-2 pb-4 ">
              <div className="absolute top-0 left-0 h-6 w-full border-b-4 border-black bg-red-400"></div>
              <h2 className="font mt-10 text-lg font-bold">
                V1과 V2가 있는데 V2 런칭 이후에 V1은 어떻게 되는 건가요?
              </h2>
            </div>
          </div>
          <div className="flex basis-1/4 flex-col">
            <div className="relative flex h-[170px] w-full flex-col border-4 border-black bg-white px-2 pb-4 ">
              <div className="absolute top-0 left-0 h-6 w-full border-b-4 border-black bg-red-400"></div>
              <h2 className="font mt-10 text-lg font-bold">
                투게더 커뮤니티 확장과 App이 어떤 확장 관계가 있나요?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </MainWindow>
  );
}

QandAPage.Layout = HomeLayout;

export default QandAPage;
