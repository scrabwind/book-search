import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import type { Book } from "@/types/response"

type Props = {
  item: Book
}

export function CardComponent({ item }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item?.volumeInfo?.title}</CardTitle>
        <CardDescription>
          {item.volumeInfo?.authors && item.volumeInfo?.authors?.length !== 0
            ? item.volumeInfo?.authors?.join(", ")
            : "Author Unknown"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <img
          src={item?.volumeInfo?.imageLinks?.thumbnail}
          alt={item?.volumeInfo?.title}
        />
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  )
}
