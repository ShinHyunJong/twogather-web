import MainWindow from '@/components/MainWindow';
import HomeLayout from '@/layouts/home';

const ProjectPage = () => {
  return (
    <MainWindow page="project">
      <div className="w-full overflow-y-auto pb-4">
        <div className="mx-auto flex w-full max-w-[568px] flex-col items-center px-4 text-center">
          <h1 className="title text-yellow-400">프로젝트</h1>
          <p className="leading-8">
            프로젝트의 이름은 Two gather로 함께, 같이 하자는 의미를 담고
            있습니다. 이번 V1 프로젝트를 통해 단단한 음악 커뮤니티를 형성하는 게
            목표입니다. V2에서는 WEB3, 그리고 평소에 음악을 즐기는 사람들을 넘어
            일반인들까지 조인할 수 있는 음악 커뮤니티의 환경을 조성해 음악을
            소비하는 새로운 방식을 선보이고자 합니다. <br></br>
            <br></br> Two Gather 는 개인의 음악 취향을 큐앤뮤직이라는 온라인
            공간 상에서 공유하는데 그치지 않고, 현실세계에서도 단단한 음악
            커뮤니티를 만들고자 NFT라는 매개체를 선택하게 되었습니다.<br></br>
            <br></br> 큐앤뮤직이라는 음악 SNS 플랫폼은, 개인이 음악 콘텐츠를
            통해서 수익을 창출할 수 있다는 점이 WEB3 가 지향하는 방향과 굉장히
            유사한 성향을 띄고 있습니다. 해당 플랫폼을 통해 자신의 음악 콘텐츠에
            가치를 부여함으로써, WEB3나 음악을 평소에 즐기는 사람들 뿐만 아닌,
            세상이 음악을 소비하는 방식을 바꿀 수 있을 것이라고 자부합니다.
          </p>
        </div>
      </div>
    </MainWindow>
  );
};

ProjectPage.Layout = HomeLayout;
export default ProjectPage;
