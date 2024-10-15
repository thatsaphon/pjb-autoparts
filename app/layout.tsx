import type { Metadata } from 'next'
// import localFont from 'next/font/local'
import './globals.css'
import { Sarabun } from 'next/font/google'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarLayout, SidebarTrigger } from '@/components/ui/sidebar'
import { cookies } from 'next/headers'
import Link from 'next/link'

export const fontThai = Sarabun({
  subsets: ['thai', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-thai',
})

export const metadata: Metadata = {
  title: 'สระบุรีอะไหล่',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${fontThai.className} antialiased`}>
        <SidebarLayout
          defaultOpen={cookies().get('sidebar:state')?.value === 'true'}
        >
          <AppSidebar />
          <div className='flex flex-1 flex-col'>
            <div className='p-2 transition-all duration-300 ease-in-out bg-primary/10'>
              <div className='h-full rounded-md p-2 relative'>
                <SidebarTrigger className='sticky m-0 p-0 top-0 -mt-4 -mb-4 -ml-2' />
                {/* <div className='sticky top-0'>
                </div> */}
                {children}
              </div>
            </div>
            <footer className='py-8 bg-accent'>
              <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                  <div>
                    <h3 className='font-bold mb-4'>About Us</h3>
                    <ul className='space-y-2'>
                      <li>
                        <Link href='#'>Our Story</Link>
                      </li>
                      <li>
                        <Link href='#'>Team</Link>
                      </li>
                      <li>
                        <Link href='#'>Careers</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='font-bold mb-4'>Products</h3>
                    <ul className='space-y-2'>
                      <li>
                        <Link href='#'>Featured</Link>
                      </li>
                      <li>
                        <Link href='#'>Categories</Link>
                      </li>
                      <li>
                        <Link href='#'>New Arrivals</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='font-bold mb-4'>Support</h3>
                    <ul className='space-y-2'>
                      <li>
                        <Link href='#'>FAQ</Link>
                      </li>
                      <li>
                        <Link href='#'>Shipping</Link>
                      </li>
                      <li>
                        <Link href='#'>Returns</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='font-bold mb-4'>Follow Us</h3>
                    <ul className='space-y-2'>
                      <li>
                        <Link href='#'>Facebook</Link>
                      </li>
                      <li>
                        <Link href='#'>Twitter</Link>
                      </li>
                      <li>
                        <Link href='#'>Instagram</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='mt-8 text-center'>
                  <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </SidebarLayout>
      </body>
    </html>
  )
}
