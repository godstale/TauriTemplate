import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Workspace from '@/pages/Workspace';
import SettingsLayout from '@/pages/Settings/SettingsLayout';
import SettingsGeneral from '@/pages/Settings/SettingsGeneral';
import SettingsApp from '@/pages/Settings/SettingsApp';
import DesignLayout from '@/pages/Design/DesignLayout';
import BrandPage from '@/pages/Design/BrandPage';
import PalettePage from '@/pages/Design/PalettePage';
import TypographyPage from '@/pages/Design/TypographyPage';
import ComponentsPage from '@/pages/Design/ComponentsPage';
import DashboardPage from '@/pages/Design/DashboardPage';
import IntroPage from '@/pages/Design/IntroPage';

import { ThemeProvider } from '@/lib/context/ThemeContext';
import { SettingsProvider } from '@/lib/context/SettingsContext';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { LanguageSelectDialog } from '@/components/language/LanguageSelectDialog';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SettingsProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Workspace />} />
              <Route path="/settings" element={<SettingsLayout />}>
                <Route index element={<SettingsGeneral />} />
                <Route path="general" element={<SettingsGeneral />} />
                <Route path="app" element={<SettingsApp />} />
              </Route>
              <Route path="/design" element={<DesignLayout />}>
                <Route index element={<BrandPage />} />
                <Route path="palette" element={<PalettePage />} />
                <Route path="typography" element={<TypographyPage />} />
                <Route path="components" element={<ComponentsPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="intro" element={<IntroPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <LanguageSelectDialog />
          </HashRouter>
        </SettingsProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
