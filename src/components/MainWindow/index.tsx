import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type MainWindowProps = {
  children: ReactNode;
  page: string;
};

type BigDivProps = {
  page: string;
};

const BgDiv = styled.section<BigDivProps>`
  background-image: ${(props) => `url(/assets/images/${props.page}/bgImg.png)`};
  background-repeat: no-repeat;
  background-size: 130% 130%;
  background-position: center;
`;

function MainWindow({ children, page }: MainWindowProps) {
  const router = useRouter();

  const renderLeftImg = () => {
    switch (router.asPath) {
      case '/project':
        return (
          <img
            className="absolute bottom-[-10px] left-[-35px] w-[150px]"
            alt="leftCorner"
            src="/assets/images/project/leftCorner.png"
          ></img>
        );
      default:
        break;
    }
  };

  const renderRightImg = () => {
    switch (router.asPath) {
      case '/project':
        return (
          <img
            className="absolute bottom-[-10px] right-[-20px] w-[150px]"
            alt="leftCorner"
            src="/assets/images/project/rightCorner.png"
          ></img>
        );
      default:
        break;
    }
  };

  return (
    <div
      id="mainWindow"
      className="relative h-[90%] w-[80%] border-4 border-black"
    >
      <div className="h-8 min-w-full border-b-4 border-black bg-[#d5bffd]"></div>
      <BgDiv
        className="flex w-full justify-center overflow-y-hidden"
        style={{ height: `calc(100% - 32px)` }}
        page={page}
      >
        {children}
      </BgDiv>
      {renderLeftImg()}
      {renderRightImg()}
    </div>
  );
}

export default MainWindow;
