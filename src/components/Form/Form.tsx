import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/utils"
import { Button } from "@/components/ui/button"
import {
  Form as BaseForm,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

const FormSchema = z.object({
  query: z.string(),
  filter: z.string()
})

type FormProps = {
  onSubmit: (data: z.infer<typeof FormSchema>) => void
}

export function Form({ onSubmit }: FormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: "",
      filter: "ebooks"
    }
  })

  return (
    <BaseForm {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex items-end gap-4 mb-8")}
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search</FormLabel>
              <FormControl>
                <Input
                  placeholder="Search for book, author"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="filter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Filter</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ebooks">All ebooks</SelectItem>
                  <SelectItem value="free-ebooks">Free ebooks</SelectItem>
                  <SelectItem value="paid-ebooks">Paid ebooks</SelectItem>
                  <SelectItem value="full">Full text</SelectItem>
                  <SelectItem value="partial">Partial text</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Search</Button>
      </form>
    </BaseForm>
  )
}
