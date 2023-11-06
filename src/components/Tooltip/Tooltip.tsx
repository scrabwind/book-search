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
      data-testid="tooltip"
      delayDuration={100}
      skipDelayDuration={0}
    >
      <BaseTooltip>
        <TooltipTrigger>
          <p
            data-testid="tooltip-text"
            className="text-left leading-tight line-clamp-2 cursor-auto"
          >
            {text}
          </p>
        </TooltipTrigger>
        <TooltipContent>
          <p
            data-testid="tooltip-content"
            className="max-w-xs"
          >
            {text}
          </p>
        </TooltipContent>
      </BaseTooltip>
    </TooltipProvider>
  )
}
