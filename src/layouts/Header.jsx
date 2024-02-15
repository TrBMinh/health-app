import Logo from '/src/assets/logo.svg?react';
import NavigationRow from './NavigationRow';
import NavigationCol from './NavigationCol';
import IconMemo from '/src/assets/icons/navbar/memo.svg?react';
import IconChallenge from '/src/assets/icons/navbar/challenge.svg?react';
import IconInfo from '/src/assets/icons/navbar/info.svg?react';
import BtnMenu from '../components/buttons/BtnMenu';
import { useCallback, useState } from 'react';

const rowMenuItems = [
  {
    name: '自分の記録',
    icon: <IconMemo />,
    path: 'my-record',
  },
  {
    name: 'チャレンジ',
    icon: <IconChallenge />,
    path: '',
  },
  {
    name: 'お知らせ',
    icon: <IconInfo />,
    path: '',
  },
];

const colMenuItems = [
  {
    name: '自分の記録',
    path: 'my-record',
  },
  {
    name: '体重グラフ',
    path: '',
  },
  {
    name: '目標',
    path: '',
  },
  {
    name: '選択中のコース',
    path: '',
  },
  {
    name: 'コラム一覧',
    path: 'column',
  },
  {
    name: '設定',
    path: '',
  },
];

function Header() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const btnMenuHandler = useCallback(() => {
    setIsOpenedMenu((prevState) => !prevState);
  }, []);

  return (
    <header className="bg-dark-500 min-h-16 px-40 flex items-center relative">
      <Logo width={109} height={40} />
      <NavigationRow className="ml-auto mr-8" menuItems={rowMenuItems} />
      <BtnMenu onClick={btnMenuHandler} isOpened={isOpenedMenu} />
      {isOpenedMenu && (
        <NavigationCol
          className="absolute -bottom-80 right-40"
          menuItems={colMenuItems}
          isOpened={isOpenedMenu}
        />
      )}
    </header>
  );
}

export default Header;
