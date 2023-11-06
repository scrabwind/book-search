import { Info, XCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertComponent({ variant, title = "", description = "" }: any) {
  return (
    <Alert
      className="max-w-[360px]"
      variant={variant}
    >
      {variant === "default" ? (
        <Info className="h-4 w-4 " />
      ) : (
        <XCircle className="h-4 w-4 " />
      )}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
