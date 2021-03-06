import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">
          Вернуться на главную
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
