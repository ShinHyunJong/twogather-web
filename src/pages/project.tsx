import MainWindow from '@/components/MainWindow';
import HomeLayout from '@/layouts/home';

const ProjectPage = () => {
  return (
    <MainWindow page="project">
      <div className="z-50 w-full overflow-y-auto pb-4">
        <div className="mx-auto flex w-full max-w-[575px] flex-col items-center px-4 text-center">
          <h1 className="title text-yellow-400">프로젝트</h1>
          <p className="break-all leading-8">
            개인의 취향을 공유하는 것이 굉장히 큰 가치로 여겨지고 있는 2022년에,
            유일하게 공유되고 있지 않은 것은 바로 음악 취향입니다. 인스타그램,
            혹은 트위터와 같은 여러 SNS 플랫폼들을 통해 개인이 듣는 음악을
            스크린 캡쳐하여 공유하고 있습니다. 하지만 억지스러운 공유 방식은
            여전히 이질감이 느껴지며, 음악을 공유하는데 있어서 최적화되어 있지
            않은 플랫폼 형식을 띄고 있습니다.
            <br />
            <br />내 자신을 온전히 표현할 수 있는 방법 중 하나를 “음악" 이라고
            믿습니다. 그리고 그 믿음으로 17년도에 처음으로 큐앤뮤직은 저작권
            공부를 하기 시작했습니다. 현재 큐앤뮤직이라고 불리는, 음악을
            공유하는 플랫폼은 6년간 준비한 프로젝트입니다. 개인의 음악 취향이
            수익을 창출할 수 있는 가치로 여겨지는 것은 물론, 지금까지 표현할 수
            없었던 온전한 나의 모습을 표현할 수 있는 플랫폼입니다. <br />
            <br /> 당사는 개인의 음악 취향을 큐앤뮤직이라는 온라인 공간 상에서
            공유하는데 그치지 않고, 현실세계에서도 단단한 음악 커뮤니티를
            만들고자 NFT라는 매개체를 선택하게 되었습니다. 또한 개인화 시대를
            넘어 취향이 제일 중요시되는 초개인화 시대에 있어서 NFT는 개성을
            표출하기 최적의 장치입니다. 이러한 NFT의 성격을 통해서 일반인들이
            쉽게 접하지 못하는 음악 관련 콘텐츠는 물론, 여러 밋업을 통해서 음악
            커뮤니티의 가치를 키워나가게 된다면, 그 어느 음악 커뮤니티 보다
            설득력 있는 플랫폼으로 자리잡아 나갈 수 있을 것이라고 굳건히
            믿습니다. <br />
            <br /> 프로젝트의 이름은 Two gather로 함께, 같이 하자는 의미를 담고
            있습니다. 이번 파트1 PFP 프로젝트는 단단한 음악 커뮤니티를 형성하는
            것이 목표입니다. 파트2에서는 WEB3, 그리고 평소에 음악을 즐기는
            사람들을 넘어 일반인들까지 조인할 수 있는 음악 커뮤니티를 조성해
            음악을 소비하는 새로운 방식을 선보이고자 합니다.
          </p>
        </div>
      </div>
    </MainWindow>
  );
};

ProjectPage.Layout = HomeLayout;
export default ProjectPage;
