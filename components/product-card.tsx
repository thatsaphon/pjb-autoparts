import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

type Props = {
  view: 'big-card' | 'small-card'
}
export default function ProductCard({ view }: Props) {
  return (
    <Card className='w-full'>
      <div
        className={cn(
          'grid md:grid-cols-[2fr_3fr] gap-6',
          view === 'small-card' && 'md:grid-cols-1'
        )}
      >
        <div
          className='relative aspect-square md:aspect-auto'
          hidden={view === 'small-card'}
        >
          <Image
            src='https://www.v0.dev/placeholder.svg'
            alt='Product Image'
            layout='fill'
            objectFit='cover'
            className='rounded-l-lg'
          />
        </div>
        <div className='flex flex-col justify-between p-6'>
          <CardHeader className='p-0'>
            <div className='flex justify-between items-start mb-2'>
              <div className='flex-1'>
                <CardTitle className='text-2xl font-bold'>
                  Ergonomic Desk Chair
                </CardTitle>
                <p className='text-sm text-muted-foreground'>
                  Office Furniture
                </p>
              </div>
              <Badge variant='secondary' className='text-sm'>
                In Stock
              </Badge>
            </div>
          </CardHeader>
          <CardContent className='p-0 space-y-4' hidden={view === 'small-card'}>
            <p className='text-base'>
              Experience ultimate comfort with our ergonomic desk chair.
              Designed to support your body during long work hours, this chair
              features adjustable lumbar support, breathable mesh back, and
              customizable armrests.
            </p>
            <div className='flex flex-wrap gap-2'>
              <Badge variant='outline'>Ergonomic</Badge>
              <Badge variant='outline'>Adjustable</Badge>
              <Badge variant='outline'>Mesh Back</Badge>
              <Badge variant='outline'>Lumbar Support</Badge>
            </div>
          </CardContent>
          <CardFooter className='p-0 pt-4'>
            <div className='flex items-center justify-between w-full'>
              <div className='text-2xl font-bold'>$299.99</div>
              <Button>Add to Cart</Button>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
