'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">{t('common.language')}:</span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
        className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
} 