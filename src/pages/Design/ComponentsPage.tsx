import { useState } from 'react';
import {
  Activity,
  Bell,
  Bot,
  Check,
  FolderOpen,
  Home,
  Plus,
  Settings,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, Well } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { SegmentedTabs } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Table, Td, Th } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { PageHeader, Section } from './DesignSection';

export function ComponentsPage() {
  const { t } = useLanguage();
  const [auto, setAuto] = useState(true);
  const [shell, setShell] = useState(false);
  const [tab, setTab] = useState('overview');
  const [nav, setNav] = useState('overview');

  const sideItems = [
    { value: 'overview', icon: Home, labelKey: 'design.dashboard.overview' },
    { value: 'agents', icon: Bot, labelKey: 'design.dashboard.agents' },
    { value: 'files', icon: FolderOpen, labelKey: 'design.dashboard.files' },
    {
      value: 'activity',
      icon: Activity,
      labelKey: 'design.dashboard.activity',
    },
    { value: 'settings', icon: Settings, labelKey: 'activityBar.settings' },
  ];

  return (
    <>
      <PageHeader
        badge={t('design.nav.components')}
        title={t('design.components.title')}
        lead={t('design.components.lead')}
      />

      <Section label={t('design.components.buttons')}>
        <Card className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="ink">{t('design.components.getStarted')}</Button>
            <Button>
              <Plus />
              {t('design.components.primary')}
            </Button>
            <Button variant="secondary">
              {t('design.components.secondary')}
            </Button>
            <Button variant="outline">{t('design.components.outline')}</Button>
            <Button variant="ghost">{t('design.components.ghost')}</Button>
            <Button variant="destructive">
              <Trash2 />
              {t('design.components.delete')}
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="ink" size="sm">
              {t('design.components.small')}
            </Button>
            <Button variant="ink">{t('design.components.default')}</Button>
            <Button variant="ink" size="lg">
              {t('design.components.large')}
            </Button>
            <Button
              variant="secondary"
              size="icon"
              aria-label={t('activityBar.settings')}
            >
              <Settings />
            </Button>
          </div>
        </Card>
      </Section>

      <Section label={t('design.components.fields')}>
        <Card className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="c-name" className="text-[13px] font-medium">
              {t('design.components.name')}
            </label>
            <Input
              id="c-name"
              placeholder={t('design.components.namePlaceholder')}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="c-mail" className="text-[13px] font-medium">
              {t('design.components.email')}
            </label>
            <Input id="c-mail" placeholder="you@company.com" />
            <p className="text-xs text-muted-foreground">
              {t('design.components.emailHint')}
            </p>
          </div>
          <div className="col-span-2 space-y-2">
            <label htmlFor="c-notes" className="text-[13px] font-medium">
              {t('design.components.notes')}
            </label>
            <Textarea
              id="c-notes"
              placeholder={t('design.components.notesPlaceholder')}
            />
          </div>
          <label className="flex items-center gap-3 text-sm">
            <Switch checked={auto} onCheckedChange={setAuto} />
            {t('design.components.switchAuto')}
          </label>
          <label className="flex items-center gap-3 text-sm">
            <Switch checked={shell} onCheckedChange={setShell} />
            {t('design.components.switchShell')}
          </label>
        </Card>
      </Section>

      <Section label={t('design.components.status')}>
        <Card className="flex flex-wrap items-center gap-3">
          <Badge>
            <Sparkles />
            {t('design.components.intro')}
          </Badge>
          <Badge variant="primary" dot>
            {t('design.status.running')}
          </Badge>
          <Badge variant="success" dot>
            {t('design.status.connected')}
          </Badge>
          <Badge variant="info" dot>
            {t('design.status.syncing')}
          </Badge>
          <Badge variant="warning" dot>
            {t('design.status.needsApproval')}
          </Badge>
          <Badge variant="destructive" dot>
            {t('design.status.failed')}
          </Badge>
        </Card>
      </Section>

      <Section label={t('design.components.navigation')}>
        <div className="grid grid-cols-2 gap-4">
          <Well className="space-y-6">
            <SegmentedTabs
              label={t('design.components.navigation')}
              value={tab}
              onValueChange={setTab}
              tabs={[
                { value: 'overview', label: t('design.dashboard.overview') },
                { value: 'runs', label: t('design.dashboard.runs') },
                { value: 'settings', label: t('activityBar.settings') },
              ]}
            />
            <Button variant="ink" size="sm">
              {t('design.components.getStarted')}
            </Button>
          </Well>
          <Card className="flex flex-col gap-0.5 p-3">
            {sideItems.map(({ value, icon: Icon, labelKey }) => (
              <button
                key={value}
                type="button"
                onClick={() => setNav(value)}
                className={cn(
                  'flex h-9 items-center gap-2.5 rounded-[10px] px-3 text-[13px] font-medium transition-colors',
                  nav === value
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                )}
              >
                <Icon className="h-4 w-4" />
                {t(labelKey)}
              </button>
            ))}
          </Card>
        </div>
      </Section>

      <Section label={t('design.components.data')}>
        <div className="grid grid-cols-3 gap-4">
          <Card className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
              {t('design.components.contextUsed')}
            </p>
            <p className="text-3xl font-semibold tracking-tight">62%</p>
            <Progress value={62} />
            <p className="text-xs text-muted-foreground">
              {t('design.components.sample')}
            </p>
          </Card>
          <Card className="col-span-2 px-4 py-3">
            <Table>
              <thead>
                <tr>
                  <Th>{t('design.dashboard.colRun')}</Th>
                  <Th>{t('design.dashboard.colAgent')}</Th>
                  <Th>{t('design.dashboard.colStatus')}</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td className="font-mono">run-0142</Td>
                  <Td>{t('design.dashboard.agentResearcher')}</Td>
                  <Td>
                    <Badge variant="success" dot>
                      {t('design.status.done')}
                    </Badge>
                  </Td>
                </tr>
                <tr>
                  <Td className="font-mono">run-0143</Td>
                  <Td>{t('design.dashboard.agentReviewer')}</Td>
                  <Td>
                    <Badge variant="primary" dot>
                      {t('design.status.running')}
                    </Badge>
                  </Td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </Section>

      <Section label={t('design.components.feedback')}>
        <div className="grid grid-cols-2 gap-4">
          <Well className="space-y-3">
            <div className="flex items-center gap-3 rounded-[14px] border border-border bg-popover px-4 py-3 shadow-sm">
              <Check className="h-4 w-4 text-primary" />
              <div className="flex-1">
                <p className="text-[13px] font-medium">
                  {t('design.components.toastTitle')}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t('design.components.toastBody')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-[14px] border border-border bg-popover px-4 py-3 shadow-sm">
              <Bell className="h-4 w-4 text-warning" />
              <p className="flex-1 text-[13px] font-medium">
                {t('design.status.needsApproval')}
              </p>
              <kbd className="rounded-md border border-border bg-muted px-1.5 text-[11px] text-muted-foreground">
                ⏎
              </kbd>
            </div>
          </Well>
          <Well>
            <div className="space-y-4 rounded-3xl border border-border bg-popover p-7 shadow-lg">
              <CardTitle className="text-xl">
                {t('design.components.dialogTitle')}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {t('design.components.dialogBody')}
              </p>
              <div className="flex justify-end gap-2">
                <Button variant="ghost">{t('design.components.cancel')}</Button>
                <Button variant="ink">{t('design.components.trust')}</Button>
              </div>
            </div>
          </Well>
        </div>
      </Section>
    </>
  );
}

export default ComponentsPage;
