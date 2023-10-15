'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import { Button } from './ui/button';
import { Check, ChevronsUpDown, PlusCircle, StoreIcon } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './ui/command';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

// type PopoverTriggerProps = React.ComponentPropsWithoutRef<
//   typeof PopoverTrigger
// >;

// interface AdminMenuProps extends PopoverTriggerProps {
//   items: [Categories, ]
// }

const adminMenuItems = [
  { label: 'Categories', route: '/admin/categories' },
  { label: 'Settings', route: '/admin/settings' },
  { label: 'Product', route: '/admin/product' },
  { label: 'Order', route: '/admin/order' },
];

export default function AdminMenu() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          role='combobox'
          aria-expanded={open}
          aria-label='Select a store'
          className={cn('w-[200px] justify-between')}
        >
          {/* <StoreIcon className='w-4 h-4 mr-2' />
        {currentStore?.label} */}
          <ChevronsUpDown className='w-4 h-4 ml-auto opacity-50 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandList>
            <CommandInput placeholder='Search item...' />
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup heading='Admin'>
              {adminMenuItems.map((item) => (
                <CommandItem
                  key={item.label}
                  onSelect={() => {
                    setOpen(false);
                    // *** should be set properly
                    // router.push(item.route);
                  }}
                  className='text-sm'
                >
                  {/* <StoreIcon className='w-4 h-4 mr-2' /> */}
                  {item.label}
                  {/* <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      currentStore?.value === store.value
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  /> */}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
          <CommandSeparator />
          {/* <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  // storeModal.onOpen();
                }}
              >
                <PlusCircle className='w-5 h-5 mr-2' />
                Create Store
              </CommandItem>
            </CommandGroup>
          </CommandList> */}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
