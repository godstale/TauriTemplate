import { useLanguage } from '@/lib/i18n/LanguageContext';
import tokens from '../../../design/tokens.json';
import { PageHeader, Section } from './DesignSection';

// [token in tokens.json, i18n role key]. Swatches show the real hex from design/tokens.json.
const SWATCHES: ReadonlyArray<readonly [string, string]> = [
  ['background', 'design.token.background'],
  ['card', 'design.token.card'],
  ['muted', 'design.token.muted'],
  ['secondary', 'design.token.secondary'],
  ['border', 'design.token.border'],
  ['foreground', 'design.token.foreground'],
  ['muted-foreground', 'design.token.mutedForeground'],
  ['primary', 'design.token.primary'],
  ['success', 'design.token.success'],
  ['info', 'design.token.info'],
  ['warning', 'design.token.warning'],
  ['destructive', 'design.token.destructive'],
  ['tertiary', 'design.token.tertiary'],
];

const THEMES = [
  { id: 'light', titleKey: 'design.palette.light', className: 'light' },
  { id: 'dark', titleKey: 'design.palette.dark', className: 'dark' },
] as const;

export function PalettePage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        badge={t('design.nav.palette')}
        title={t('design.palette.title')}
        lead={t('design.palette.lead')}
      />

      {THEMES.map(({ id, titleKey, className }) => {
        const theme: Record<string, string> = tokens.themes[id];
        // Nested .light/.dark re-scopes the CSS variables, so each block shows its own theme.
        return (
          <Section key={id} label={t(titleKey)}>
            <div
              className={`${className} grid grid-cols-4 gap-4 rounded-card border border-border bg-background p-6 text-foreground`}
            >
              {SWATCHES.map(([token, roleKey]) => (
                <div key={token} className="space-y-2">
                  <div
                    className="h-16 rounded-[14px] border border-border"
                    style={{ backgroundColor: `hsl(var(--${token}))` }}
                  />
                  <div>
                    <p className="text-[13px] font-medium">{token}</p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {theme[token]}
                    </p>
                    <p className="text-xs text-subtle">{t(roleKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}

export default PalettePage;
