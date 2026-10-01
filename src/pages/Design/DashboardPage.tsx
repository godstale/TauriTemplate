import { useState } from 'react';
import { Activity, Bot, FolderOpen, Home, Plus, Settings } from 'lucide-react';
import { AppMark } from '@/components/brand/AppMark';
import { Badge, type BadgeProps } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SegmentedTabs } from '@/components/ui/tabs';
import { Table, Td, Th } from '@/components/ui/table';
import { APP_NAME } from '@/lib/brand';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { PageHeader } from './DesignSection';

// Sample data for the layout preview only.
const BARS = [38, 52, 44, 66, 58, 80, 72, 90, 76, 96, 84, 70];
const HIGHLIGHT_BAR = 9;

type Status = {
  labelKey: string;
  variant: NonNullable<BadgeProps['variant']>;
};
const STATUS: Record<'done' | 'running' | 'approval', Status> = {
  done: { labelKey: 'design.status.done', variant: 'success' },
  running: { labelKey: 'design.status.running', variant: 'primary' },
  approval: { labelKey: 'design.status.needsApproval', variant: 'warning' },
};
const RUNS: ReadonlyArray<{
  id: string;
  agentKey: string;
  status: keyof typeof STATUS;
  time: string;
}> = [
  {
    id: 'run-0142',
    agentKey: 'design.dashboard.agentResearcher',
    status: 'done',
    time: '3m 41s',
  },
  {
    id: 'run-0143',
    agentKey: 'design.dashboard.agentReviewer',
    status: 'running',
    time: '1m 08s',
  },
  {
    id: 'run-0144',
    agentKey: 'design.dashboard.agentBuilder',
    status: 'approval',
    time: '—',
  },
];
const NEEDS: ReadonlyArray<{ labelKey: string; agentKey: string }> = [
  {
    labelKey: 'design.dashboard.needShell',
    agentKey: 'design.dashboard.agentBuilder',
  },
  {
    labelKey: 'design.dashboard.needWrite',
    agentKey: 'design.dashboard.agentBuilder',
  },
  {
    labelKey: 'design.dashboard.needRead',
    agentKey: 'design.dashboard.agentResearcher',
  },
];

export function DashboardPage() {
  const { t } = useLanguage();
  const [range, setRange] = useState('7');

  const stats: ReadonlyArray<{
    labelKey: string;
    value: string;
    delta: string;
    variant: NonNullable<BadgeProps['variant']>;
  }> = [
    {
      labelKey: 'design.dashboard.runs',
      value: '1,284',
      delta: '+12%',
      variant: 'success',
    },
    {
      labelKey: 'design.dashboard.successRate',
      value: '98.2%',
      delta: '+0.4%',
      variant: 'success',
    },
    {
      labelKey: 'design.dashboard.awaiting',
      value: '3',
      delta: t('design.dashboard.action'),
      variant: 'warning',
    },
    {
      labelKey: 'design.dashboard.duration',
      value: '4m 12s',
      delta: '−8%',
      variant: 'info',
    },
  ];
  const sideItems = [
    { icon: Home, labelKey: 'design.dashboard.overview', current: true },
    { icon: Bot, labelKey: 'design.dashboard.agents', current: false },
    { icon: FolderOpen, labelKey: 'design.dashboard.files', current: false },
    { icon: Activity, labelKey: 'design.dashboard.activity', current: false },
  ];

  return (
    <>
      <PageHeader
        badge={t('design.nav.dashboard')}
        title={t('design.dashboard.overview')}
        lead={t('design.dashboard.sampleData')}
      />

      <div className="grid min-h-[720px] grid-cols-[200px_minmax(0,1fr)] overflow-hidden rounded-card border border-border bg-background">
        <aside className="flex flex-col gap-6 border-r border-border bg-card p-4">
          <div className="flex items-center gap-2 px-2 text-brand">
            <AppMark compact className="h-6 w-6" />
            <strong className="text-sm tracking-tight text-foreground">
              {APP_NAME}
            </strong>
          </div>
          <nav className="flex flex-col gap-0.5">
            {sideItems.map(({ icon: Icon, labelKey, current }) => (
              <span
                key={labelKey}
                aria-current={current ? 'page' : undefined}
                className={cn(
                  'flex h-9 items-center gap-2.5 rounded-[10px] px-3 text-[13px] font-medium',
                  current
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground',
                )}
              >
                <Icon className="h-4 w-4" />
                {t(labelKey)}
              </span>
            ))}
          </nav>
          <span className="mt-auto flex h-9 items-center gap-2.5 px-3 text-[13px] font-medium text-muted-foreground">
            <Settings className="h-4 w-4" />
            {t('activityBar.settings')}
          </span>
        </aside>

        <div className="min-w-0 space-y-5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                {t('design.dashboard.workspace')}
              </p>
              <h2 className="mt-1 text-[32px] font-semibold leading-tight tracking-[-0.025em]">
                {t('design.dashboard.overview')}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <SegmentedTabs
                label={t('design.dashboard.runs')}
                value={range}
                onValueChange={setRange}
                tabs={[
                  { value: '7', label: t('design.dashboard.days7') },
                  { value: '30', label: t('design.dashboard.days30') },
                ]}
              />
              <Button variant="ink">
                <Plus />
                {t('design.dashboard.newAgent')}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {stats.map(({ labelKey, value, delta, variant }) => (
              <Card key={labelKey} className="space-y-2 p-5">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                    {t(labelKey)}
                  </p>
                  <Badge variant={variant}>{delta}</Badge>
                </div>
                <p className="text-[34px] font-semibold leading-none tracking-[-0.03em]">
                  {value}
                </p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Card className="col-span-2 space-y-5 p-5">
              <h3 className="text-base font-semibold">
                {t('design.dashboard.runsPerDay')}
              </h3>
              <div className="flex h-44 items-end gap-3">
                {BARS.map((height, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex-1 rounded-lg',
                      index === HIGHLIGHT_BAR ? 'bg-primary' : 'bg-secondary',
                    )}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </Card>
            <Card className="space-y-4 p-5">
              <h3 className="text-base font-semibold">
                {t('design.dashboard.needsYou')}
              </h3>
              {NEEDS.map(({ labelKey, agentKey }) => (
                <div key={labelKey} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Bot className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium">
                      {t(labelKey)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t(agentKey)}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    {t('design.dashboard.review')}
                  </Button>
                </div>
              ))}
            </Card>
          </div>

          <Card className="px-5 py-3">
            <Table>
              <thead>
                <tr>
                  <Th>{t('design.dashboard.colRun')}</Th>
                  <Th>{t('design.dashboard.colAgent')}</Th>
                  <Th>{t('design.dashboard.colStatus')}</Th>
                  <Th>{t('design.dashboard.colDuration')}</Th>
                </tr>
              </thead>
              <tbody>
                {RUNS.map(({ id, agentKey, status, time }) => (
                  <tr key={id}>
                    <Td className="font-mono">{id}</Td>
                    <Td>{t(agentKey)}</Td>
                    <Td>
                      <Badge variant={STATUS[status].variant} dot>
                        {t(STATUS[status].labelKey)}
                      </Badge>
                    </Td>
                    <Td className="font-mono">{time}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
