# Book Search

## Search for books using Google Books API

https://developers.google.com/books/docs/overview

## Project setup

### To setup project

`pnpm install`

`pnpm dev`

### Run tests

`pnpm test`

### or with watch mode

`pnpm test:dev`

## Architectural decisions

### Build tools

I don't really consider alternatives to Vite, at least for small project due to growing community, speed and out-of-box experience.

### Code formating

Using prettier and eslint is my go-to choice for consistent code writing using airbnb for strict code quality while disabling some really opinionated formating that I do not agree with.

### UI library

My main goal was to write a solution with minimal UI and clean code. Using [shadcn](https://ui.shadcn.com/) for minimal design was no-brainer since it provides a lot of customization, clean API based on [radix ui](https://www.radix-ui.com/) and proper accessibility features which streamlined the process of creating application.

### CSS library

Since shadcn uses tailwind as it's styling choice that was obvious choice for me to make as well. Tailwind also provided me with ability for quick prototyping.

### Making requests

Using [react-query](https://tanstack.com/query/latest/docs/react/overview) to make effecient use of fetching and caching. Customizibility allowed me to avoid some of weird quirks of API (not consistent order of results) and make predictible and easy states of pagination (disabled on fetching)

### Pagination

I've decided to create manual pagination since Googles **Total Items** makes no sense to me

### Testing

For testing I went with [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/) it allowed me to easily simulate components and make reliable tests

#### Jest vs Vitest

I went with Vitest since it's easier intergration with Vite while API beging basically the same. Also Vitest UI mode is kinda nice
