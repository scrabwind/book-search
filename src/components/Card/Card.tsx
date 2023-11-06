import {
  Card as BaseCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { type VolumeInfo } from "@/api/getBooks"
import img from "@/assets/no-cover.jpg"

import { Tooltip } from "@/components/Tooltip/Tooltip"

type CardProps = {
  item: VolumeInfo
}

export function Card({ item }: CardProps) {
  return (
    <BaseCard>
      <CardHeader>
        <CardTitle>
          <Tooltip text={item?.title} />
        </CardTitle>
        <CardDescription>
          {item.authors && item.authors?.length !== 0 ? (
            <Tooltip text={item?.authors.join(", ")} />
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
    </BaseCard>
  )
}
