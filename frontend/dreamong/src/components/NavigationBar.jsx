import { Link, useLocation } from 'react-router-dom';
import { MainIcon, SquareIcon, CreateIcon, StreamingIcon, SettingsIcon, STTIcon } from '../assets/icons';
import { useRecoilState } from 'recoil';
import { isListeningState } from '../recoil/atoms';

const NavigationBar = () => {
  const location = useLocation();
  const paths = [
    {
      pathname: '/',
      icon: (color) => <MainIcon color={color} />,
    },
    {
      pathname: '/square',
      icon: (color) => <SquareIcon color={color} />,
    },
    {
      pathname: '/dream/create',
      icon: (color) => <CreateIcon color={color} />,
    },
    {
      pathname: '/streaming',
      icon: (color) => <StreamingIcon color={color} />,
    },
    {
      pathname: '/settings',
      icon: (color) => <SettingsIcon color={color} />,
    },
  ];

  // 음성인식을 사용할 url
  const useSTTPath = ['/dream/create', '/dream/'];

  const MAIN_COLOR = '#737DFE';
  const SECONDARY_COLOR = '#000000';

  const [isListening, setIsListening] = useRecoilState(isListeningState);
  const handleSTT = async () => {
    setIsListening(prev => !prev);
    setTimeout(() => console.log(isListening),1000)
  };

  // path에 따라서 렌더링되는 내용이 바뀌도록 설정
  return location.pathname == '/login' ? null : (
    <div className="fixed bottom-0 h-[60px] max-w-[600px] bg-white text-white last:w-full">
      <div className="mx-4 my-3 flex justify-between">
        {paths.map(({ pathname, icon }) => {
          const color = location.pathname === pathname ? MAIN_COLOR : SECONDARY_COLOR;
          // paths 내부에서 pathname == "/dream/create"인 path에 대해서
          // 현재 경로가 useSTTPath(STT를 사용하는 경로)에 해당될 때 true 반환
          const isSTTActive =
            pathname == '/dream/create' && useSTTPath.some((path) => location.pathname.includes(path));
          return (
            <Link key={pathname} to={pathname} className="relative">
              {/* 꿈 등록페이지와 수정페이지에서 아이콘이 바뀌도록 후에 수정 예정 */}
              {isSTTActive ? <STTIcon handleSTT={handleSTT}></STTIcon> : icon(color)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationBar;
