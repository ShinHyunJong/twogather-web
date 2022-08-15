import Image from 'next/image';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';

import treeJson from '@/public/assets/lottie/project/page1-L tree.json';
import cactusJson from '@/public/assets/lottie/project/page1-R cactus.json';

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

export const TreeLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: treeJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

export const CactusLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cactusJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

function MainWindow({ children, page }: MainWindowProps) {
  const router = useRouter();

  const renderLeftImg = () => {
    switch (router.asPath) {
      case '/project':
        return (
          <>
            <div className="absolute bottom-[-20px] left-[-45px] z-30">
              <Image
                width={200}
                height={300}
                alt="leftCorner"
                src="/assets/images/project/leftCorner.png"
              ></Image>
            </div>
            <div className="absolute bottom-2 left-[-10px] z-20 w-[250px]">
              <TreeLottie></TreeLottie>
            </div>
          </>
        );
      default:
        return <div></div>;
    }
  };

  const renderRightImg = () => {
    switch (router.asPath) {
      case '/project':
        return (
          <>
            <div className="absolute bottom-[-15px] right-[-20px] z-30 w-[150px]">
              <Image
                width={400}
                height={350}
                alt="rightCorner"
                src="/assets/images/project/rightCorner.png"
              ></Image>
            </div>
            <div className="absolute bottom-[-10px] right-[-50px] z-20 w-[250px]">
              <CactusLottie></CactusLottie>
            </div>
          </>
        );
      default:
        return <div></div>;
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
