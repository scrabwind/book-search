import {
  Card as BaseCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { type VolumeInfo } from "@/api/getBooks"
import img from "@/assets/no-cover.jpg"
import { cn } from "@/utils"

import { Tooltip } from "@/components/Tooltip/Tooltip"

type CardProps = Pick<VolumeInfo, "title" | "imageLinks" | "authors">

export function Card({ title, authors, imageLinks }: CardProps) {
  return (
    <BaseCard data-testid="card">
      <CardHeader>
        <CardTitle>
          <Tooltip text={title} />
        </CardTitle>
        <CardDescription>
          {authors?.length ? (
            <Tooltip text={authors.join(", ")} />
          ) : (
            <p>No author provided</p>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("flex justify-center")}>
        {imageLinks?.thumbnail ? (
          <img
            data-testid="book-cover"
            className={cn("h-cover")}
            src={imageLinks?.thumbnail}
            alt={title}
          />
        ) : (
          <img
            data-testid="book-cover"
            width="172"
            height="172"
            src={img}
          />
        )}
      </CardContent>
    </BaseCard>
  )
}
