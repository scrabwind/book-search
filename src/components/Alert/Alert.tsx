import { Info, XCircle } from "lucide-react"

import {
  Alert as BaseAlert,
  AlertDescription,
  AlertTitle
} from "@/components/ui/alert"

type AlertProps = {
  title: string
  description: string
  variant?: "default" | "destructive" | null
}

export function Alert({
  variant = "default",
  title = "",
  description = ""
}: AlertProps) {
  return (
    <BaseAlert
      className="max-w-[360px]"
      variant={variant}
    >
      {variant === "default" ? (
        <Info
          className="h-4 w-4"
          data-testid="info-icon"
        />
      ) : (
        <XCircle
          className="h-4 w-4"
          data-testid="error-icon"
        />
      )}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </BaseAlert>
  )
}
