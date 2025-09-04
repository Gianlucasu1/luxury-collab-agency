# Sanity CMS Setup Guide

## Environment Variables

Create a `.env` file in your project root with the following variables:

```bash
# Sanity CMS Configuration
REACT_APP_SANITY_PROJECT_ID=your-project-id-here
REACT_APP_SANITY_DATASET=production
REACT_APP_SANITY_API_VERSION=2024-01-01
REACT_APP_SANITY_TOKEN=your-token-here
```

## Installation

1. Install the required dependencies:

```bash
npm install @sanity/client
# or
yarn add @sanity/client
```

2. Get your Sanity credentials:
   - Go to [sanity.io](https://sanity.io)
   - Create a new project or use an existing one
   - Go to Project Settings > API
   - Copy your Project ID and Dataset name
   - Create a token if you need write access

3. Update your `.env` file with the actual values

## Usage

The `BlogMain.tsx` component now:
- Fetches blog posts from Sanity CMS
- Implements search functionality
- Provides category filtering
- Handles pagination
- Shows loading and error states
- Uses proper TypeScript interfaces

## Schema

Make sure you have the `blogPost` schema set up in your Sanity Studio with the following fields:
- `title` (string)
- `slug` (slug)
- `excerpt` (text)
- `heroImage` (image)
- `publishDate` (datetime)
- `readTime` (string)
- `category` (string)
- `tags` (array of strings)
- `author` (reference to author)
- `isPublished` (boolean)

## Testing

1. Start your development server
2. Navigate to `/blog`
3. You should see the blog posts loading from Sanity
4. Test search and category filtering
5. Check pagination functionality

## Troubleshooting

- Make sure your environment variables are correctly set
- Check the browser console for any error messages
- Verify your Sanity project has the correct schema
- Ensure your content is published (`isPublished: true`)
