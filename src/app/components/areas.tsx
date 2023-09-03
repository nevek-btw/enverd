import { IconBook, IconBuildingStore, IconChefHat, IconCodeCircle, IconHeart } from '@tabler/icons-react'
import Marquee from 'react-fast-marquee'

const AREAS = [
  {
    text: 'INFORMATICA',
    icon: <IconCodeCircle />,
    color: 'text-amber-300'
  },
  {
    text: 'CONTABILIDAD',
    icon: <IconBook />,
    color: 'text-blue-300'
  },
  {
    text: 'MERCADEO',
    icon: <IconBuildingStore />,
    color: 'text-orange-300'
  },
  {
    text: 'GASTRONOMIA',
    icon: <IconChefHat />,
    color: 'text-red-300'
  },
  {
    text: 'ENFERMERIA',
    icon: <IconHeart />,
    color: 'text-green-300'
  }
]

function applyOffset (arr: any[], offsetValue: number) {
  if (offsetValue >= arr.length || offsetValue <= 0) {
    // El offset es igual o mayor que la longitud del array, o negativo o cero, no es necesario hacer cambios
    return arr
  }

  // Copia los últimos 'offsetValue' elementos de 'arr' al principio de 'resultArr'
  const resultArr = arr.slice(-offsetValue)

  // Copia los primeros 'N - offsetValue' elementos de 'arr' al final de 'resultArr'
  resultArr.push(...arr.slice(0, arr.length - offsetValue))

  return resultArr
}

const AreasMarqueeComponent = ({ direction, jump = 0, speed = 50 }: { direction?: 'left' | 'right', jump?: number, speed?: number }) => (
  <div className="py-1 transition cursor-pointer group-hover:opacity-50 hover:!opacity-100">
    <Marquee speed={speed} direction={direction}>
      <h4 className="flex items-center justify-center mr-4 gap-x-4 md:flex-row shadow-black">
        {applyOffset(AREAS, jump).map(({ text, icon, color }) => (
          <span
            className={`${color} group-hover:opacity-60 hover:!opacity-100 hover:!scale-110 transition flex items-center justify-center gap-x-2`}
            key={text}
          >
            {icon}
            <span className={color}>{text}</span>
          </span>
        ))}
      </h4>
    </Marquee>
  </div>
)

export default function Areas () {
  return (
    <section className="flex flex-col max-w-[76rem] -my-20 text-xl rotate-12 group">
      <AreasMarqueeComponent jump={1} direction="right" speed={32} />
      <AreasMarqueeComponent jump={3} speed={33} />
      <AreasMarqueeComponent jump={3} speed={43} />
      <AreasMarqueeComponent jump={5} speed={33} direction="right" />
      <AreasMarqueeComponent jump={2} speed={40} />
      <AreasMarqueeComponent jump={4} speed={34} direction="right" />
      <AreasMarqueeComponent jump={1} speed={41} />
      <AreasMarqueeComponent jump={3} speed={37} direction="right" />
      <AreasMarqueeComponent jump={5} speed={41} />
      <AreasMarqueeComponent jump={2} speed={42} direction="right" />
      <AreasMarqueeComponent jump={2} speed={28} direction="right" />
      <AreasMarqueeComponent jump={4} />
      <AreasMarqueeComponent jump={1} speed={33} />
      <AreasMarqueeComponent jump={3} speed={33} direction="right" />
      <AreasMarqueeComponent jump={5} speed={33} />
      <AreasMarqueeComponent direction="right" />
    </section>
  )
}
