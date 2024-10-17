'use client'

import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from './ui/carousel'
import Image from 'next/image'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'

// Slide Banner Component
export default function SlideBanner() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className='flex flex-col gap-2'>
      <Carousel
        className='w-full max-w-4xl mx-auto'
        opts={{ loop: true }}
        setApi={setApi}
        plugins={[Autoplay({ delay: 4000 })]}
        // autoplay
        // autoplayInterval={4000}
      >
        <CarouselContent>
          {[1, 2, 3].map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-video items-center justify-center p-6 overflow-hidden'>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={`https://v0.dev/placeholder.svg`}
                        alt={`Slide ${index + 1}`}
                        width={800}
                        height={400}
                        className='rounded-md object-cover max-w-full max-h-full w-full'
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='py-2 text-center text-sm text-muted-foreground'>
        Slide {current} of {count}
      </div>
    </div>
  )
}
