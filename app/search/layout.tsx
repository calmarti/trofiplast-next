import { ReactNode } from 'react';
import { ItemsProvider } from '@/app/lib/context'; 

export default function SearchLayout({ children }: { children : ReactNode } ) {
    return (
      <ItemsProvider>
        <div className="">
          {children}
        </div>
      </ItemsProvider>
    );
  }

