'use client'

import ProductCard from '@/components/product-card'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ImageIcon } from '@radix-ui/react-icons'
import {
  Box,
  BoxesIcon,
  BoxIcon,
  Grid,
  List,
  Rows4,
  Search,
} from 'lucide-react'
import Link from 'next/link'

type Props = {
  searchParams: {
    view: 'big-card' | 'small-card'
  }
}

export default function ProductPage({
  searchParams: { view = 'big-card' },
}: Props) {
  return (
    <div className='px-4'>
      <div className='flex gap-2 items-baseline'>
        <h1 className='text-2xl mb-2 font-semibold'>รายการสินค้า</h1>
        <ToggleGroup type='single' value={view}>
          <ToggleGroupItem value='big-card' aria-label='Big Card'>
            <Link href={'?view=big-card'}>
              <ImageIcon className='h-4 w-4' />
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem value='small-card' aria-label='Small Card'>
            <Link href={'?view=small-card'}>
              <Rows4 className='h-4 w-4' />
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className='relative'>
        <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input
          placeholder='ค้นหาสินค้า'
          className='pl-8 bg-popover text-popover-foreground my-2'
        />
      </div>
      <div className='flex gap-2 flex-col'>
        {[1, 2, 3].map((_, index) => (
          <ProductCard key={index} view={view} />
        ))}
      </div>
    </div>
  )
}
