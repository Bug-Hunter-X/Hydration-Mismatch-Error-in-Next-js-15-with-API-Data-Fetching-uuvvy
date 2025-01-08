# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a hydration mismatch error in a Next.js 15 application. The error occurs when fetching data from an API route within a component, and the server-side rendered data differs from the client-side fetched data.

## Bug Description

A hydration mismatch occurs when the initial HTML rendered on the server does not match the updated data fetched on the client-side. This can lead to unexpected behavior and visual glitches.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Observe the initial render and the subsequent update after data fetching.

## Solution

The solution involves ensuring that the server-side and client-side data fetching mechanisms return consistent results. This can be done by using a consistent data source or by handling the loading state effectively.