import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

export function TooltipComponent({ text }: { text: string }) {
  return (
    <TooltipProvider
      delayDuration={100}
      skipDelayDuration={0}
    >
      <Tooltip>
        <TooltipTrigger>
          <p className="text-left leading-tight line-clamp-2 cursor-auto">
            {text}
          </p>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
