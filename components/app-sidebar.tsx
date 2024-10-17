'use client'

import {
  Atom,
  Bird,
  Bolt,
  BookOpen,
  Bot,
  CarIcon,
  Code2,
  Eclipse,
  Frame,
  History,
  LampIcon,
  LifeBuoy,
  Map,
  PieChart,
  Rabbit,
  Send,
  Settings2,
  SquareTerminal,
  Star,
  Turtle,
} from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavProjects } from '@/components/nav-projects'
import { NavSecondary } from '@/components/nav-secondary'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from '@/components/ui/sidebar'
import { BoxIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
const data = {
  teams: [
    {
      name: 'Acme Inc',
      logo: Atom,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: Eclipse,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Rabbit,
      plan: 'Free',
    },
  ],
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'สินค้า',
      url: '/products',
      icon: Bolt,
      isActive: true,
      items: [
        { title: 'ผลิตภัณฑ์สารหล่อลื่น', url: '/products' },
        { title: 'ระบบเบรค', url: '/products' },
        { title: 'ข่วงล่าง', url: '/products' },
        { title: 'ระบบเครื่องยนต์', url: '/products' },
        { title: 'ระบบความเย็นและความร้อน', url: '/products' },
      ],
    },
    // {
    //   title: 'ผลิตภัณฑ์สารหล่อลื่น',
    //   url: '#',
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: 'น้ำมันเครื่อง',
    //       url: '#',
    //       icon: History,
    //       description: 'View your recent prompts',
    //     },
    //     {
    //       title: 'น้ำมันเบรค',
    //       url: '#',
    //       icon: Star,
    //       description: 'Browse your starred prompts',
    //     },
    //     {
    //       title: 'น้ำมันเกียร์',
    //       url: '#',
    //       icon: Settings2,
    //       description: 'Configure your playground',
    //     },
    //   ],
    // },
    // {
    //   title: 'ระบบเบรค',
    //   url: '#',
    //   icon: Bot,
    //   items: [
    //     {
    //       title: 'ผ้าดิสเบรค',
    //       url: '#',
    //       icon: Rabbit,
    //       description: 'Our fastest model for general use cases.',
    //     },
    //     {
    //       title: 'ก้ามเบรค',
    //       url: '#',
    //       icon: Bird,
    //       description: 'Performance and speed for efficiency.',
    //     },
    //     {
    //       title: 'จานดิสเบรค',
    //       url: '#',
    //       icon: Turtle,
    //       description: 'The most powerful model for complex computations.',
    //     },
    //   ],
    // },
    // {
    //   title: 'ช่วงล่าง',
    //   url: '#',
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: 'ลูกหมากแร็ค',
    //       url: '#',
    //     },
    //     {
    //       title: 'ลูกหมากคันชัก',
    //       url: '#',
    //     },
    //     {
    //       title: 'ลูกหมากกันโครง',
    //       url: '#',
    //     },
    //   ],
    // },
    // {
    //   title: 'ระบบความเย็นและความร้อน',
    //   url: '#',
    //   icon: Code2,
    //   items: [
    //     {
    //       title: 'พัดลมแอร์',
    //       url: '#',
    //     },
    //     {
    //       title: 'หม้อน้ำ',
    //       url: '#',
    //     },
    //     {
    //       title: 'ปั๊มน้ำ',
    //       url: '#',
    //     },
    //     {
    //       title: 'มอเตอร์พัดลม',
    //       url: '#',
    //     },
    //   ],
    // },
    // {
    //   title: 'อะไหล่รถบรรทุก',
    //   url: '#',
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: 'แหนบ',
    //       url: '#',
    //     },
    //     {
    //       title: 'สาแหรก',
    //       url: '#',
    //     },
    //     {
    //       title: 'สลักแหนบ',
    //       url: '#',
    //     },
    //   ],
    // },
  ],

  navSecondary: [
    {
      title: 'Support',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
  information: [
    {
      name: 'ประวัติบริษัท',
      url: '#',
      icon: Frame,
    },
    {
      name: 'ติดต่อ',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'โปรโมชั่น',
      url: '#',
      icon: Map,
    },
  ],
  products: [
    {
      name: 'น้ำมันเครื่อง',
      url: '#',
      icon: Frame,
    },
    {
      name: 'ระบบช่วงล่าง',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'ระบบเบรค',
      url: '#',
      icon: Map,
    },
  ],
  searchResults: [
    {
      title: 'Routing Fundamentals',
      teaser:
        'The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.',
      url: '#',
    },
    {
      title: 'Layouts and Templates',
      teaser:
        'The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.',
      url: '#',
    },
    {
      title: 'Data Fetching, Caching, and Revalidating',
      teaser:
        'Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.',
      url: '#',
    },
    {
      title: 'Server and Client Composition Patterns',
      teaser:
        'When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ',
      url: '#',
    },
    {
      title: 'Server Actions and Mutations',
      teaser:
        'Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.',
      url: '#',
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar className='bg-primary/20'>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarHeader className='mb-0 mt-3'>
        <SidebarItem>
          <Link className='flex gap-2' href={'/'}>
            <CarIcon />
            <span>สระบุรีอะไหล่</span>
          </Link>
          {/* <Image
            src='/pjb-logo.jpg'
            alt='logo'
            width={100}
            height={100}
            className='w-8 h-8'
            unoptimized
          /> */}
        </SidebarItem>
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Information</SidebarLabel>
          {/* <NavMain items={data.navMain} searchResults={data.searchResults} /> */}
          <NavProjects projects={data.information} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel>Feature</SidebarLabel>
          <NavMain items={data.navMain} searchResults={data.searchResults} />
        </SidebarItem>
        {/* <SidebarItem>
          <SidebarLabel>Products</SidebarLabel>
          <NavProjects projects={data.products} />
        </SidebarItem> */}
        <SidebarItem className='mt-auto'>
          <SidebarLabel>Help</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  )
}
