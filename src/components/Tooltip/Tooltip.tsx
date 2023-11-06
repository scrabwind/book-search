import { cn } from "@/utils"

import {
  Tooltip as BaseTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

type TooltipProps = {
  text: string
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <TooltipProvider
      delayDuration={100}
      skipDelayDuration={0}
    >
      <BaseTooltip>
        <TooltipTrigger>
          <p className={cn("text-left leading-tight line-clamp-2 cursor-auto")}>
            {text}
          </p>
        </TooltipTrigger>
        <TooltipContent>
          <p className={cn("max-w-xs")}>{text}</p>
        </TooltipContent>
      </BaseTooltip>
    </TooltipProvider>
  )
}
