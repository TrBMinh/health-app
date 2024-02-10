import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
];

function Footer() {
  return (
    <footer className="bg-dark-500 min-h-32 px-40 mt-auto flex justify-between items-center">
      <menu className="flex gap-11">
        {menuItems.map((item) => (
          <li key={item}>
            <Link
              className="text-light transition duration-300 hover:text-primary-400 hover:ease-in-out"
              href="/"
            >
              {item}
            </Link>
          </li>
        ))}
      </menu>
    </footer>
  );
}

export default Footer;
