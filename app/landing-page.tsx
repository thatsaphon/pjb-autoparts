import Image from 'next/image'
// import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import SlideBanner from '@/components/slide-banner'

// Best Seller and Promotion Component
const BestSellerAndPromotion = () => (
  <section className='py-12 '>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-8 text-center'>
        Best Sellers & Promotions
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className='overflow-hidden'>
            <Image
              src={`https://v0.dev/placeholder.svg`}
              alt={`Product ${item}`}
              width={300}
              height={200}
              className='w-full h-48 object-cover'
            />
            <CardContent className='p-4'>
              <h3 className='font-semibold mb-2'>Product {item}</h3>
              <p className='text-sm text-gray-600 mb-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className='flex justify-between items-center'>
                <span className='font-bold text-lg'>$99.99</span>
                <Button size='sm'>Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

// Partnership Logo Component
const PartnershipLogo = () => (
  <section className='py-12 '>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Our Partners</h2>
      <div className='flex flex-wrap justify-center items-center gap-8'>
        {[1, 2, 3, 4, 5].map((logo) => (
          <div
            key={logo}
            className='w-32 h-32 rounded-full flex items-center justify-center'
          >
            <Image
              src={`https://v0.dev/placeholder.svg`}
              alt={`Partner Logo ${logo}`}
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Contact Component
const Contact = () => (
  <section className='py-12'>
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Contact Us</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <form className='space-y-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full p-2 border border-gray-300 rounded'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='w-full p-2 border border-gray-300 rounded'
            />
            <textarea
              placeholder='Your Message'
              rows={4}
              className='w-full p-2 border border-gray-300 rounded'
            ></textarea>
            <Button type='submit' className='w-full'>
              Send Message
            </Button>
          </form>
        </div>
        <div className='space-y-4'>
          <div className='flex items-center'>
            <MapPin className='mr-2' />
            <span>123 Main St, City, Country</span>
          </div>
          <div className='flex items-center'>
            <Phone className='mr-2' />
            <span>+1 234 567 890</span>
          </div>
          <div className='flex items-center'>
            <Mail className='mr-2' />
            <span>info@example.com</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// // Footer Menu Component
// const FooterMenu = () => (
//   <footer className='py-8 bg-accent'>
//     <div className='container mx-auto px-4'>
//       <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
//         <div>
//           <h3 className='font-bold mb-4'>About Us</h3>
//           <ul className='space-y-2'>
//             <li>
//               <Link href='#'>Our Story</Link>
//             </li>
//             <li>
//               <Link href='#'>Team</Link>
//             </li>
//             <li>
//               <Link href='#'>Careers</Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className='font-bold mb-4'>Products</h3>
//           <ul className='space-y-2'>
//             <li>
//               <Link href='#'>Featured</Link>
//             </li>
//             <li>
//               <Link href='#'>Categories</Link>
//             </li>
//             <li>
//               <Link href='#'>New Arrivals</Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className='font-bold mb-4'>Support</h3>
//           <ul className='space-y-2'>
//             <li>
//               <Link href='#'>FAQ</Link>
//             </li>
//             <li>
//               <Link href='#'>Shipping</Link>
//             </li>
//             <li>
//               <Link href='#'>Returns</Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className='font-bold mb-4'>Follow Us</h3>
//           <ul className='space-y-2'>
//             <li>
//               <Link href='#'>Facebook</Link>
//             </li>
//             <li>
//               <Link href='#'>Twitter</Link>
//             </li>
//             <li>
//               <Link href='#'>Instagram</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className='mt-8 text-center'>
//         <p>&copy; 2024 Your Company Name. All rights reserved.</p>
//       </div>
//     </div>
//   </footer>
// )

// Main Landing Page Component
export default function LandingPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow'>
        <section className='w-full mx-auto px-4 mb-6'>
          <AspectRatio ratio={1200 / 300} asChild>
            <Image
              src={`https://v0.dev/placeholder.svg`}
              alt={`Landing Page`}
              className='rounded-md object-cover max-w-full max-h-full w-full'
              width={800}
              height={400}
            />
          </AspectRatio>
        </section>
        <SlideBanner />
        <BestSellerAndPromotion />
        <PartnershipLogo />
        <Contact />
      </main>
      {/* <FooterMenu /> */}
    </div>
  )
}
