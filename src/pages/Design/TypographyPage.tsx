import { Card } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { PageHeader, Section } from './DesignSection';

// Style name and spec are identifiers, not UI copy; the sample text is translated.
const SCALE: ReadonlyArray<{
  name: string;
  spec: string;
  className: string;
  sampleKey: string;
}> = [
  {
    name: 'Display',
    spec: '72 / 1.02 · 600 · −3.5%',
    className:
      'text-7xl font-semibold leading-[1.02] tracking-[-0.035em] text-balance',
    sampleKey: 'design.type.sampleDisplay',
  },
  {
    name: 'H1',
    spec: '48 / 1.08 · 600 · −3%',
    className: 'text-5xl font-semibold leading-[1.08] tracking-[-0.03em]',
    sampleKey: 'design.type.sampleH1',
  },
  {
    name: 'H2',
    spec: '32 / 1.15 · 600 · −2.5%',
    className: 'text-[32px] font-semibold leading-[1.15] tracking-[-0.025em]',
    sampleKey: 'design.type.sampleH2',
  },
  {
    name: 'H3',
    spec: '22 / 1.25 · 600 · −1.5%',
    className: 'text-[22px] font-semibold leading-tight tracking-[-0.015em]',
    sampleKey: 'design.type.sampleH3',
  },
  {
    name: 'H4',
    spec: '16 / 1.35 · 600',
    className: 'text-base font-semibold',
    sampleKey: 'design.type.sampleH4',
  },
  {
    name: 'Lead',
    spec: '18 / 1.55 · 400 · muted',
    className: 'text-lg leading-relaxed text-muted-foreground',
    sampleKey: 'design.type.sampleLead',
  },
  {
    name: 'Body',
    spec: '14 / 1.6 · 400',
    className: 'text-sm leading-relaxed',
    sampleKey: 'design.type.sampleBody',
  },
  {
    name: 'Small',
    spec: '12 / 1.5 · 400 · muted',
    className: 'text-xs text-muted-foreground',
    sampleKey: 'design.type.sampleSmall',
  },
  {
    name: 'Label',
    spec: '11 · 500 · +8% caps · subtle',
    className:
      'font-mono text-[11px] font-medium uppercase tracking-wider text-subtle',
    sampleKey: 'design.type.sampleLabel',
  },
];

export function TypographyPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        badge={t('design.nav.typography')}
        title={t('design.type.title')}
        lead={t('design.type.lead')}
      />

      <Card className="divide-y divide-border py-2">
        {SCALE.map(({ name, spec, className, sampleKey }) => (
          <div
            key={name}
            className="grid grid-cols-[180px_minmax(0,1fr)] items-baseline gap-6 py-6"
          >
            <div>
              <p className="text-[13px] font-medium">{name}</p>
              <p className="font-mono text-xs text-muted-foreground">{spec}</p>
            </div>
            <p className={cn(className)}>{t(sampleKey)}</p>
          </div>
        ))}
      </Card>

      <Section label={`${t('design.type.mono')} · ${t('design.type.korean')}`}>
        <div className="grid grid-cols-2 gap-4">
          <Card className="space-y-3">
            <p className="font-mono text-sm">
              ~/projects/vanilla/.app-data/project.db
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              1,284 runs · 98.2% · 00:04:12
            </p>
          </Card>
          <Card className="space-y-2">
            <p className="text-3xl font-semibold tracking-tight">
              {t('design.type.koreanSample')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('design.type.sampleLead')}
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}

export default TypographyPage;
