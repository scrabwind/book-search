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

Using prettier and eslint is my go-to choice for consistent code writing usually using airbnb for strict code quality

### UI library

My main goal was to write a solution with minimal UI and clean code. Using [shadcn](https://ui.shadcn.com/) for minimal design was no-brainer since it provides a lot of customization, clean API based on [radix ui](https://www.radix-ui.com/) and proper accessibility features which streamlined the process of creating application.

### CSS library

Since shadcn uses tailwind as it's styling choice that was obvious choice for me to make as well. Tailwind also provided me with ability for quick prototyping.
