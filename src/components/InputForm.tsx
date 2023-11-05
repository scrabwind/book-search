"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
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
  query: z.string().min(1),
  filter: z.string(),
  orderBy: z.string()
})

type Props = {
  onSubmit: (data: z.infer<typeof FormSchema>) => void
}

export function InputForm({ onSubmit }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: "",
      filter: "ebooks",
      orderBy: "relevance"
    }
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-end gap-4 mb-8"
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
        <FormField
          control={form.control}
          name="orderBy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order by</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Order by" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Search</Button>
      </form>
    </Form>
  )
}
