'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from './ui/button';
import { Check, ChevronsUpDown, PlusCircle, StoreIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';

// type PopoverTriggerProps = React.ComponentPropsWithoutRef<
//   typeof PopoverTrigger
// >;

// interface AdminMenuProps extends PopoverTriggerProps {
//   items: [Categories, ]
// }

type AdminMenuItem = {
  label: string;
  route: string;
};

const adminMenuItems: AdminMenuItem[] = [
  { label: 'Categories', route: '/admin/categories' },
  { label: 'Settings', route: '/admin/settings' },
  { label: 'Product', route: '/admin/product' },
  { label: 'Order', route: '/admin/order' },
];

export default function AdminMenu() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleItemClick = (route: string) => {
    router.push(route);
  };
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            open ? 'text-black dark:text-white' : 'text-muted-foreground'
          )}
        >
          Admin
        </MenubarTrigger>
        <MenubarContent>
          {adminMenuItems.map((item) => (
            <MenubarItem
              key={item.label}
              onClick={() => handleItemClick(item.route)}
            >
              {item.label}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
