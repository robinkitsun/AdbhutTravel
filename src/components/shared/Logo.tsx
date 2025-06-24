import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("grid", className)}>
        <div className="flex items-start">
            <span className="font-headline text-3xl font-bold tracking-tight" style={{ color: '#6d28d9' }}>
                ADBHUT
            </span>
            <span className="text-[10px] font-bold" style={{ color: '#6d28d9', lineHeight: '1.5' }}>®</span>
        </div>
        <span className="font-body text-[10px] text-right -mt-1.5" style={{fontStyle: 'italic', color: 'hsl(var(--foreground))'}}>
            Travel & Event Pvt Ltd
        </span>
    </div>
  );
}
