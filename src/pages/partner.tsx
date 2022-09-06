import MainWindow from '@/components/MainWindow';
import HomeLayout from '@/layouts/home';

const partners = [
  {
    id: 0,
    value: 'queueAndMusic',
  },
  {
    id: 1,
    value: 'londonString',
  },
  {
    id: 2,
    value: 'addd',
  },
  {
    id: 3,
    value: 'chungwooJung',
  },
  {
    id: 4,
    value: 'raonData',
  },
  {
    id: 5,
    value: 'pulit',
    isSquare: true,
  },
  {
    id: 6,
    value: 'shuttle',
    isSquare: true,
  },
  {
    id: 7,
    value: 'tinker',
  },
  {
    id: 8,
    value: 'connectArt',
  },
];

function PartnerItem({
  link,
  isSquare,
}: {
  link: string;
  isSquare: undefined | boolean;
}) {
  return (
    <div className="flex basis-full items-center justify-center p-8 md:basis-1/3">
      <img
        className={`${!isSquare ? 'w-full' : 'w-[50%]'} h-auto`}
        src={`/assets/images/partner/${link}.png`}
        alt={link}
      ></img>
    </div>
  );
}

function PartnerPage() {
  return (
    <MainWindow page="partner">
      <div className="relative z-50 flex h-full w-full flex-col items-center overflow-y-auto overflow-x-hidden pb-16">
        {/* <h1 className="title text-yellow-400">참여사</h1>
        <div className="flex gap-12 text-2xl">
          <h1 className="font">큐 앤 뮤직</h1>
          <h1 className="font">런던 스트링</h1>
        </div> */}
        <h1 className="title text-yellow-400">파트너</h1>
        <div className="flex flex-row flex-wrap justify-center">
          {partners.map((x) => {
            return (
              <PartnerItem
                key={x.id}
                link={x.value}
                isSquare={x.isSquare}
              ></PartnerItem>
            );
          })}
        </div>
        <div className="flex w-full justify-center">
          <h1 className="font mt-8 text-5xl">커밍쑨...</h1>
        </div>
      </div>
    </MainWindow>
  );
}

PartnerPage.Layout = HomeLayout;

export default PartnerPage;
