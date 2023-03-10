# Vite + React + TS + Tailwind 

[![CI](https://github.com/tkaeophian/vite-react-ts-tailwindcss/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/tkaeophian/vite-react-ts-tailwindcss/actions/workflows/ci.yml)

A simple, scalable, and powerful architecture for building production ready React applications.

## Introduction
React is an excellent tool for building front-end applications. It has a diverse ecosystem with hundreds of great libraries for literally anything you might need. However, being forced to make so many choices can be overwhelming. It is also very flexible, you can write React applications in any way you like, but that flexibility comes with a cost. Since there is no pre-defined architecture that developers can follow, it often leads to a messy, inconsistent, and over-complicated codebase.

This repo attempts to present a way of creating React applications using some of the best tools in the ecosystem with a good project structure that scales very well. Based on my vast experience working with different codebases, this architecture turns out to be the most effective.

<img SRC="https://ik.imagekit.io/xbqs6c3wef/pitchfork__1__QXL1n_H9u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678482974836" />

## Why Vite
Vite is a build tool that bridges the gap between current and next-generation web development, providing a faster and more performant experience for developers and modern web projects.

Vite is built on top of esbuild, a JavaScript bundler written in Go that bundles dependencies 10 to 100 times faster than JavaScript-based bundlers

Created by Evan You, the creator of Vue, Vite is platform-agnostic, meaning you can use it to develop JavaScript and TypeScript applications with support for popular libraries like React, Svelte, Preact, and even vanilla JavaScript

Unlike CRA, Vite does not build your entire application before serving, instead, it builds the application on demand. It also leverages the power of native ES modules, esbuild, and Rollup to improve development and build time.

## Why Tailwind

What Tailwind does is it offers more control over styling to the developers. This not only improves development speed but also improves productivity.

A major advantage of Tailwind CSS is that optimization can be performed using PurgeCSS. PurgeCSS can reduce the file size considerably by scanning the HTML and removing unused classes.

### Disclaimer

This is not supposed to be a template, boilerplate or a framework. It is an opinionated guide that shows how to do some things in a certain way. You are not forced to do everything exactly as it is shown here, decide what works best for you and your team and stay consistent with your style.

## Contributing

Contributions are always welcome! If you have any ideas, suggestions, fixes, feel free to contribute.

## Contributors ✨

<a href="https://github.com/tkaeophian/vite-react-ts-tailwindcss/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tkaeophian/vite-react-ts-tailwindcss" />
</a>
