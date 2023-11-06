import { Info, XCircle } from "lucide-react"
import { cn } from "@/utils"
import {
  Alert as BaseAlert,
  AlertDescription,
  AlertTitle
} from "@/components/ui/alert"

type AlertProps = {
  title: string
  description: string
  variant: "default" | "destructive" | null
}

export function Alert({
  variant = "default",
  title = "",
  description = ""
}: AlertProps) {
  return (
    <BaseAlert
      className={cn("max-w-alert")}
      variant={variant}
    >
      {variant === "default" ? (
        <Info
          className={cn("h-4 w-4")}
          data-testid="info-icon"
        />
      ) : (
        <XCircle
          className={cn("h-4 w-4")}
          data-testid="error-icon"
        />
      )}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </BaseAlert>
  )
}
