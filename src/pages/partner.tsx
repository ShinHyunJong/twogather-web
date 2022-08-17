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
  },
  {
    id: 6,
    value: 'shuttle',
  },
  {
    id: 7,
    value: 'tinker',
  },
  {
    id: 8,
    value: 'question',
  },
];

function PartnerItem({ link }: { link: string }) {
  return (
    <div className="flex items-center justify-center p-4">
      {/* <Image
        src={`/assets/images/partner/${link}.png`}
        alt={link}
        layout={'fill'}
        objectFit={'contain'}
      ></Image> */}
      <img src={`/assets/images/partner/${link}.png`} alt={link}></img>
    </div>
  );
}

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
        <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-3">
          {partners.map((x) => {
            return <PartnerItem key={x.id} link={x.value}></PartnerItem>;
          })}
        </div>
      </div>
    </MainWindow>
  );
}

PartnerPage.Layout = HomeLayout;

export default PartnerPage;
