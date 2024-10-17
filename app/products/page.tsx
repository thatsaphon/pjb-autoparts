'use client'

import ProductCard from '@/components/product-card'
import React from 'react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

type Props = {}

export default function ProductPage({}: Props) {
  return (
    <div className='px-4'>
      <h1 className='text-2xl mb-2 font-semibold'>รายการสินค้า</h1>
      <div className='relative'>
        <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input
          placeholder='ค้นหาสินค้า'
          className='pl-8 bg-popover text-popover-foreground my-2'
        />
      </div>
      <div className='flex gap-2 flex-col'>
        {[1, 2, 3].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  )
}
