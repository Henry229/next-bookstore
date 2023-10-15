import Link from 'next/link';
import Container from '@/components/container';
import MainNav from '@/components/main-nav';
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
  // const categories = await getCategories()

  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href='/' className='m-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>Book Store</p>
          </Link>
          <MainNav />
          <div className='flex items-center ml-auto space-x-4'>
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </Container>
    </div>
  );
}
