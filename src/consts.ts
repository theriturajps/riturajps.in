import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ritu Raj's Blog",
  DESCRIPTION: "Welcome to Ritu Raj's Blog, a portfolio and blog for #techie, #developers and #students.",
  AUTHOR: 'Ritu Raj',
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'iamriturajps@gmail.com',
    HREF: 'mailto:iamriturajps@gmail.com',
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'markhorn-dev',
    HREF: 'https://github.com/theriturajps',
  },
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    TEXT: 'markhorn-dev',
    HREF: 'https://www.linkedin.com/in/iamriturajps/',
  },
  {
    NAME: 'Twitter',
    ICON: 'twitter-x',
    TEXT: 'markhorn_dev',
    HREF: 'https://twitter.com/riturajps',
  },
]

