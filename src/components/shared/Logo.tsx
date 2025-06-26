import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('transition-transform duration-300 hover:-translate-y-1', className)}>
      <Image
        src="https://www.adbhuttravel.com/wp-content/uploads/2023/08/cropped-adbhut-logo-1.png"
        alt="Adbhut Travel And Event Pvt. Ltd. Logo"
        width={188}
        height={40}
        priority
      />
    </div>
  );
}
