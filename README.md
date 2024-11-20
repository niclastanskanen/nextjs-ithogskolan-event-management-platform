# EventHub

**Note:** The TicketMaster API key used in this project is free and has limited searches. The API might occasionally reach its rate limit and show no results. For the best experience, consider obtaining your own API key.

<div align="center">
  <h3 align="center">EventHub</h3>

   <div align="center">
     Deployed site at vercel <a href="https://nextjs-ithogskolan-event-management-platform.vercel.app/" target="_blank"><b>EventHub</b></a> 
    </div>
    <br />
    <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>

## Lighthouse Results

<a href="https://imgbb.com/"><img src="https://i.ibb.co/XJYgbkn/Screenshot-2024-11-20-at-10-41-32.png" alt="Screenshot-2024-11-20-at-10-41-32" border="0"></a>

- **Performance**: 100
- **Accessibility**: 99
- **Best Practices**: 100
- **SEO**: 100

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Notice](#notice)

## Introduction

EventHub is a modern event management platform built with Next.js 14, designed to help users discover, create, and manage events. The platform offers a seamless experience for both event organizers and attendees, featuring real-time event discovery through integration with the TicketMaster Discovery API, an intuitive calendar interface, and comprehensive event management tools.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **API**: [TicketMaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn](https://ui.shadcn.com/) - reusable components
- **Code Formatting**: [Prettier](https://prettier.io/)

## Features

- **Event Discovery**

  - Browse and search events from TicketMaster API
  - Filter events by category, date, and location
  - Detailed event information including pricing, venue details, and ticket availability

- **Interactive Calendar**

  - Monthly calendar view for event browsing
  - Date-based event filtering
  - Visual representation of events by date

- **Event Management**

  - Create and publish new events
  - RSVP functionality for event attendance
  - Detailed event pages with comprehensive information

- **User Experience**

  - Responsive design for all devices
  - Dark/Light theme support
  - Real-time search and filtering
  - Toast notifications for user actions

- **Technical Features**
  - Server-side rendering with Next.js 14
  - Type-safe development with TypeScript
  - Responsive UI with Tailwind CSS
  - Reusable components with Shadcn UI
  - Form validation with Zod
  - Modern date handling with date-fns

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/niclastanskanen/nextjs-ithogskolan-event-management-platform.git
   ```
2. Navigate into the project directory:
   ```bash
   cd nextjs-ithogskolan-event-management-platform
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   - Get your API key from [TicketMaster Developer Portal](https://developer.ticketmaster.com/)
   - Create a `.env.local` file in the root directory
   - Copy the contents from `.env.example` to `.env.local`
   - Replace `your_api_key_here` with your actual TicketMaster API key

5. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

- Open http://localhost:3000 in your browser to view the app.
- Make sure your API key is properly configured in `.env.local` to see event data.

## Notice

This project is developed as part of the Web Development course at IT-Högskolan. The project follows the specific course requirements
