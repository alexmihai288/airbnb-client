"use client"
import { ScrollArea } from '@/components/ui/scroll-area'
import { CategoryIcons } from '@/constants'
import { cn } from '@/lib/utils'
import { FC } from 'react'

interface ChooseLocationTypeProps {
  
}

const ChooseLocationType: FC<ChooseLocationTypeProps> = ({}) => {
  return  <ScrollArea className="max-h-[500px]">
  <div className="grid grid-cols-2 gap-5 mr-4">
    {CategoryIcons.map((categoryIcon, i) => (
      <div
        key={i}
        className={cn(
          "border-2 border-primaryGrey px-3 py-4 rounded-md hover:border-black transition-colors",
          i == 0 && "border-black"
        )}
      >
        <categoryIcon.icon className="text-4xl" />
        <p>{categoryIcon.label}</p>
      </div>
    ))}
  </div>
</ScrollArea>
}

export default ChooseLocationType