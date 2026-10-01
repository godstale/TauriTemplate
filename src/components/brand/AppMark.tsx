import { cn } from '@/lib/utils';

export interface AppMarkProps {
  className?: string;
  compact?: boolean;
}

// [rotation°, length factor] for the five petals — same geometry as design/brand/app-mark.svg.
const PETALS: ReadonlyArray<readonly [number, number]> = [
  [8, 1],
  [80, 0.9],
  [152, 0.8],
  [224, 0.8],
  [296, 0.9],
];

const petalPath = (length: number, width: number) =>
  `M0 0C${-width * 0.9} ${-length * 0.25} ${-width * 0.7} ${-length * 0.72} 0 ${-length}C${width * 0.7} ${-length * 0.72} ${width * 0.9} ${-length * 0.25} 0 0Z`;

// Vanilla orchid line mark (currentColor). Replace with your own logo — see BRANDING.md.
export function AppMark({ className, compact = false }: AppMarkProps) {
  const size = compact ? 32 : 64;
  const length = compact ? 13.5 : 27;
  const width = compact ? 4.6 : 8;
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={cn(compact ? 'h-4 w-4' : 'h-8 w-8', className)}
      aria-hidden="true"
    >
      <g transform={`translate(${size / 2} ${size * 0.547})`}>
        {PETALS.map(([rotation, k]) => (
          <path
            key={rotation}
            transform={`rotate(${rotation})`}
            d={petalPath(length * k, width)}
            stroke="currentColor"
            strokeWidth={compact ? 2.4 : 2.6}
            strokeLinejoin="round"
          />
        ))}
        <circle r={compact ? 2.6 : 5} fill="currentColor" />
      </g>
    </svg>
  );
}

export default AppMark;
