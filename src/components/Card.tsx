import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import type { volumeInfo } from "@/types/response"
import img from "@/assets/no-cover.jpg"

import { TooltipComponent } from "@/components/Tooltip"

type Props = {
  item: volumeInfo
}

export function CardComponent({ item }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <TooltipComponent text={item?.title} />
        </CardTitle>
        <CardDescription>
          {item.authors && item.authors?.length !== 0 ? (
            <TooltipComponent text={item?.authors.join(", ")} />
          ) : (
            "No author provided"
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        {item?.imageLinks?.thumbnail ? (
          <img
            className="h-[172px]"
            src={item?.imageLinks?.thumbnail}
            alt={item?.title}
          />
        ) : (
          <img
            width="172"
            height="172"
            src={img}
          />
        )}
      </CardContent>
    </Card>
  )
}
