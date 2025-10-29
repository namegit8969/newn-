
import React from 'react';

export const servicesMarquee = [
  "Mobile Application Design", "UI/UX Mobile Design", "Mobile Application Design", "Website Design"
];

export const statsMarquee = [
  "1520 + Project Completed", "1020+ Satisfied Clients", "80+ Team Members", "12+ Worldwide language"
];

export const awards = [
    { title: "Site Of The Day", category: "Css & Animation", year: "2018" },
    { title: "Best Business Model", category: "New Strategy", year: "2019" },
    { title: "Video Design", category: "Css & Animation", year: "2022" },
];

export const portfolioItems = [
    { category: "PRODUCT DESIGN", title: "Brand Identity & Motion Design", img: "https://picsum.photos/seed/p1/600/600", color: 'bg-orange-100' },
    { category: "PRODUCT DESIGN", title: "Giftcard Holder Mockup", img: "https://picsum.photos/seed/p2/600/600", color: 'bg-yellow-400' },
    { category: "PRODUCT DESIGN", title: "Design & Branding Mockup", img: "https://picsum.photos/seed/p3/600/600", color: 'bg-yellow-200' },
    { category: "UI/UX DESIGN", title: "Mobile Application Development", img: "https://picsum.photos/seed/p4/600/600", color: 'bg-orange-100' },
    { category: "UI/UX DESIGN", title: "Mobile Application Development", img: "https://picsum.photos/seed/p5/600/600", color: 'bg-blue-200' },
    { category: "UI/UX DESIGN", title: "Mobile Application Development", img: "https://picsum.photos/seed/p6/600/600", color: 'bg-yellow-200' },
];

export const serviceItems = [
    { number: "01", title: "Illustration Design", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit" },
    { number: "02", title: "Business Branding", description: "esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit" },
    { number: "03", title: "Web UI/UX Design", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit" },
    { number: "04", title: "Web Design Application Design", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit" },
    { number: "05", title: "SEO Analytics Digital Marketing", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit" },
];

export const processSteps = [
    {
        title: "Concept",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
        points: [
            "Reviewing any existing branding",
            "Target audience and competitors research",
            "Developing a strategy"
        ]
    },
    {
        title: "Design",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
        points: [
            "Developing wireframes and mockup",
            "Choosing typography, color palettes",
            "Refining the design"
        ]
    },
    {
        title: "Webflow",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
        points: [
            "Testing the website thoroughly launch",
            "Choosing typography, color palettes",
            "Refining the design"
        ]
    }
];

export const socialLinks = [
    { name: "Facebook", icon: <FacebookIcon />, link: "#" },
    { name: "Twitter", icon: <TwitterIcon />, link: "#" },
    { name: "LinkedIn", icon: <LinkedinIcon />, link: "#" },
    { name: "Instagram", icon: <InstagramIcon />, link: "#" },
    { name: "Dribbble", icon: <DribbbleIcon />, link: "#" },
    { name: "Webflow", icon: <WebflowIcon />, link: "#" },
];

// SVG Icons
export const MatiasLogo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0L27.0711 2.92893L30 5.85786L32.9289 2.92893L40 0L37.0711 7.07107L34.1421 10L37.0711 12.9289L40 20L32.9289 27.0711L30 24.1421L27.0711 27.0711L20 40L12.9289 37.0711L10 34.1421L7.07107 37.0711L0 40L2.92893 32.9289L5.85786 30L2.92893 27.0711L0 20L7.07107 12.9289L10 15.8579L12.9289 12.9289L20 0Z" fill="#D7F443"/>
    </svg>
);

export function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export function InstagramIcon() {
  return (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}

export function DribbbleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
    </svg>
  )
}

export function WebflowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.22 2.22v19.56h5.832c3.486 0 5.58-1.53 5.58-4.836 0-2.052-1.056-3.468-2.928-4.068.792-.612 1.224-1.5 1.224-2.532 0-2.58-1.74-4.056-4.5-4.056H4.22zm4.356 12.636H6.188V9.8h2.388c1.38 0 2.22.612 2.22 1.956 0 1.488-.936 2.1-2.22 2.1zm0-4.824H6.188V4.088h2.292c1.236 0 1.992.516 1.992 1.632.012 1.296-.804 1.836-2.052 1.836zm10.74-5.352c-1.428 1.452-3.864 2.304-7.056 2.304v2.736c3.276 0 5.568-.732 7.044-2.124v-2.916zM19.316.032c-1.284 1.284-3.336 2.052-5.976 2.052v2.724c2.532 0 4.512-.66 5.976-1.884V.032zm-2.292 21.684c-1.548-1.5-3.828-2.316-6.792-2.316v-2.736c3.12 0 5.4.78 6.816 2.208v2.844z"/>
    </svg>
  )
}

export const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);
