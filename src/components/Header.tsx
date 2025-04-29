'use client';

import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Mentana</h1>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-4">
              <a href="/" className="text-gray-600 hover:text-gray-900">{t('common.home')}</a>
              <a href="/login" className="text-gray-600 hover:text-gray-900">{t('common.login')}</a>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
} 