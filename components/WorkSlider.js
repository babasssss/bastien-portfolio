import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import Image from 'next/image'

// icons
import { BsArrowRight } from 'react-icons/bs'

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          url: 'castorservice',
          path: '/thumb6.jpg'
        },
        {
          url: 'formaflix',
          path: '/thumb8.jpg'
        },
        {
          url: 'eformaliste',
          path: '/thumb9.jpg'
        }

      ]
    }
  ]
}

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {
        workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return (
                    <a key={index} href={`projets/${image.url}`} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                      {/* image */}
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        <Image src={image.path} width={500} height={300} alt='SOREAU Bastien' />
                        {/* overlay graddient */}
                        <div className='absolute inset-0 bg-[rgba(0,0,0,0)] group-hover:bg-[rgba(0,0,0,.6)] transition-all duration-700' />

                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10  group-hover:xl-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-shadow-voirplus'>
                            {/* url part 1 */}
                            <div className='delay-100'>VOIR</div>
                            {/* url part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PLUS</div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        }
        )
      }
    </Swiper>
  )
}

export default WorkSlider
