import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

export function PageHeader({
  badge,
  title,
  lead,
}: {
  badge: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="space-y-4">
      <Badge>{badge}</Badge>
      <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.03em]">
        {title}
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {lead}
      </p>
    </header>
  );
}

export function Section({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-subtle">
        {label}
      </p>
      {children}
    </section>
  );
}
