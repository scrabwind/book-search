import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import type { Book } from "@/types/response"
import img from "@/assets/no-cover.jpg"

import { TooltipComponent } from "@/components/Tooltip"

type Props = {
  item: Book
}

export function CardComponent({ item }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <TooltipComponent text={item?.volumeInfo?.title} />
        </CardTitle>
        <CardDescription>
          {item.volumeInfo?.authors && item.volumeInfo?.authors?.length !== 0
            ? item.volumeInfo?.authors?.join(", ")
            : "No author provided"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        {item?.volumeInfo?.imageLinks?.thumbnail ? (
          <img
            className="h-[172px]"
            src={item?.volumeInfo?.imageLinks?.thumbnail}
            alt={item?.volumeInfo?.title}
          />
        ) : (
          <img
            width="172"
            height="172"
            src={img}
          />
        )}
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  )
}
