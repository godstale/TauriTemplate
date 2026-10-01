import { ArrowRight, Bot, FileText, FolderOpen, Sparkles } from 'lucide-react';
import { AppMark } from '@/components/brand/AppMark';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, Well } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { APP_NAME } from '@/lib/brand';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import pattern from '../../../design/brand/app-pattern.svg';

const STEPS = ['1', '2', '3'] as const;

// Intro / landing layout. Product names under "works with" are plain text, not logos.
export function IntroPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-20 rounded-card border border-border bg-background px-10 py-8">
      <header className="flex items-center justify-between gap-4">
        <span className="flex items-center gap-2 text-brand">
          <AppMark className="h-6 w-6" />
          <strong className="text-base tracking-tight text-foreground">
            {APP_NAME}
          </strong>
        </span>
        <nav className="flex items-center gap-1 rounded-full border border-border bg-card p-1.5 shadow-sm">
          {['navProduct', 'navDocs', 'navPricing'].map((key, index) => (
            <span
              key={key}
              className={
                index === 0
                  ? 'rounded-full bg-secondary px-3.5 py-1.5 text-[13px] font-medium'
                  : 'px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground'
              }
            >
              {t(`design.intro.${key}`)}
            </span>
          ))}
        </nav>
        <Button variant="ink">{t('design.intro.cta')}</Button>
      </header>

      <section className="flex flex-col items-center gap-6 text-center">
        <Badge>
          <Sparkles />
          {t('design.intro.badge')}
        </Badge>
        <h1 className="max-w-3xl text-balance text-7xl font-semibold leading-[1.02] tracking-[-0.035em]">
          {t('design.intro.title')}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          {t('design.intro.lead')}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="ink" size="lg">
            {t('design.intro.cta')}
          </Button>
          <Button variant="ghost" size="lg">
            {t('design.intro.guide')}
            <ArrowRight />
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-3 items-stretch gap-4">
        <Card className="-rotate-2 space-y-4 shadow-md">
          <img
            src={pattern}
            alt=""
            className="h-52 w-full rounded-[14px] object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {t('design.intro.studio')}
            </h3>
            <p className="text-xs text-muted-foreground">
              {t('design.intro.studioRole')}
            </p>
          </div>
          <div className="flex gap-2 text-muted-foreground">
            {[FolderOpen, Bot, FileText].map((Icon, index) => (
              <span
                key={index}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </Card>
        <Well className="col-span-2 flex flex-col justify-center gap-6 p-10">
          <p className="max-w-lg text-[28px] font-semibold leading-snug tracking-[-0.02em]">
            {t('design.intro.quote')}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
            {t('design.intro.worksWith')}
          </p>
          <div className="flex flex-wrap gap-7 font-semibold tracking-tight">
            <span>Claude Code</span>
            <span>Codex</span>
            <span>Gemini CLI</span>
          </div>
        </Well>
      </section>

      <section className="space-y-8">
        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
            {t('design.intro.how')}
          </p>
          <h2 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.03em]">
            {t('design.intro.howTitle')}
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {STEPS.map((n) => (
            <Card key={n} className="space-y-3">
              <Badge variant="primary" className="font-mono">
                0{n}
              </Badge>
              <h3 className="text-[22px] font-semibold tracking-tight">
                {t(`design.intro.step${n}`)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(`design.intro.step${n}Body`)}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <Card className="grid grid-cols-2 gap-10 p-10">
        <div className="space-y-3">
          <h2 className="text-5xl font-semibold leading-[1.08] tracking-[-0.03em]">
            {t('design.intro.contactTitle')}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t('design.intro.contactLead')}
          </p>
        </div>
        <form
          className="space-y-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="space-y-2">
            <label htmlFor="intro-name" className="text-[13px] font-medium">
              {t('design.components.name')}
            </label>
            <Input
              id="intro-name"
              placeholder={t('design.components.namePlaceholder')}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="intro-mail" className="text-[13px] font-medium">
              {t('design.components.email')}
            </label>
            <Input id="intro-mail" placeholder="you@company.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="intro-note" className="text-[13px] font-medium">
              {t('design.components.notes')}
            </label>
            <Textarea
              id="intro-note"
              placeholder={t('design.components.notesPlaceholder')}
            />
          </div>
          <Button variant="ink" size="lg" className="w-full" type="submit">
            {t('design.intro.send')}
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default IntroPage;
