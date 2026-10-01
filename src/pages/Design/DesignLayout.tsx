import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  LayoutDashboard,
  Palette,
  Rocket,
  Shapes,
  Sparkles,
  Type,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SegmentedTabs } from '@/components/ui/tabs';
import { AppMark } from '@/components/brand/AppMark';
import { APP_NAME } from '@/lib/brand';
import { useTheme } from '@/lib/context/ThemeContext';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { cn } from '@/lib/utils';

interface NavItem {
  path: string;
  labelKey: string;
  icon: LucideIcon;
}

// Add a page here and a matching <Route> in App.tsx.
const NAV_ITEMS: NavItem[] = [
  { path: '/design', labelKey: 'design.nav.brand', icon: Sparkles },
  { path: '/design/palette', labelKey: 'design.nav.palette', icon: Palette },
  { path: '/design/typography', labelKey: 'design.nav.typography', icon: Type },
  {
    path: '/design/components',
    labelKey: 'design.nav.components',
    icon: Shapes,
  },
  {
    path: '/design/dashboard',
    labelKey: 'design.nav.dashboard',
    icon: LayoutDashboard,
  },
  { path: '/design/intro', labelKey: 'design.nav.intro', icon: Rocket },
];

export function DesignLayout() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background text-foreground">
      <aside className="flex w-60 shrink-0 flex-col justify-between border-r border-border bg-sidebar p-4">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => void navigate('/')}
              title={t('design.back')}
              aria-label={t('design.back')}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="min-w-0">
              <h1 className="text-sm font-semibold tracking-tight">
                {t('design.title')}
              </h1>
              <p className="truncate text-[11px] text-muted-foreground">
                {t('design.subtitle')}
              </p>
            </div>
          </div>

          <nav className="flex flex-col gap-0.5" aria-label={t('design.title')}>
            {NAV_ITEMS.map(({ path, labelKey, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end
                className={({ isActive }) =>
                  cn(
                    'flex h-9 items-center gap-2.5 rounded-[10px] px-3 text-[13px] font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-sidebar-accent hover:text-foreground',
                  )
                }
              >
                <Icon className="h-4 w-4" />
                <span>{t(labelKey)}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <SegmentedTabs
            label={t('design.themeLabel')}
            value={resolvedTheme}
            onValueChange={(v) => setTheme(v === 'dark' ? 'dark' : 'light')}
            tabs={[
              { value: 'light', label: t('design.themeLight') },
              { value: 'dark', label: t('design.themeDark') },
            ]}
          />
          <div className="flex items-center gap-2 text-brand">
            <AppMark compact />
            <span className="text-[11px] font-semibold text-foreground">
              {APP_NAME}
            </span>
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-10 py-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DesignLayout;
