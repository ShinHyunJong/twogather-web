import { useRouter } from 'next/router';

function BarItem({
  content,
  onClick,
}: {
  content: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex w-32 cursor-pointer items-start justify-center border-4 border-black py-1"
    >
      {content}
    </div>
  );
}

export const routes = [
  {
    id: 0,
    name: '프로젝트',
    link: '/project',
  },
  {
    id: 1,
    name: '팀 소개',
    link: '/about',
  },
  {
    id: 2,
    name: '로드맵',
    link: '/roadmap',
  },
  {
    id: 3,
    name: '파트너',
    link: '/partner',
  },
  {
    id: 4,
    name: 'FAQ',
    link: '/faq',
  },
];

function BottomBar() {
  const router = useRouter();
  return (
    <div className="flex h-full w-full items-center justify-between overflow-x-auto text-xl font-bold">
      <div className="flex flex-row items-center">
        <div
          role="button"
          onClick={() => router.push('/')}
          className="flex w-20 flex-row items-center border-4 border-black p-1"
        >
          <img
            className="h-6 w-auto"
            alt="soundOn"
            src="/assets/images/bottom/logo.png"
          ></img>
          시작
        </div>
        <div className="mx-1 h-9 w-1 bg-black"></div>
        <div className="flex flex-row items-center gap-2 text-xl font-bold">
          {routes.map((x) => {
            return (
              <BarItem
                key={x.id}
                onClick={() => router.push(`${x.link}`)}
                content={x.name}
              ></BarItem>
            );
          })}
        </div>
      </div>
      <div className="flex h-full flex-row items-center">
        <div className="mr-1 h-9 w-1 bg-black"></div>
        <div className="flex flex-row items-center border-4 border-black p-1">
          <img
            className="h-6 w-auto"
            alt="soundOn"
            src="/assets/images/bottom/soundOn.png"
          ></img>
          <div className="flex flex-row text-xl font-bold">
            <p className="mx-2">오후</p> 11:11
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
