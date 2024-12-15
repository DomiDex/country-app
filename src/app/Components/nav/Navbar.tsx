import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center h-16 bg-amber-500 px-4 py-8'>
      <Link className='text-2xl font-bold text-amber-50' href='/'>
        Logo
      </Link>
      <div className='flex items-center space-x-4'>
        <Link href='/'>Home</Link>
        <Link href='/dashboard'>Dashboard</Link>
      </div>
    </nav>
  );
}
