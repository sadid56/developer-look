"use client";

import * as React from "react";
import Link from "next/link";
import { Newspaper, Globe, Layers } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "../ui/button";
import { countries } from "@/constant/common";

const categories = [
  {
    title: "Business",
    href: "/category/business",
    description: "Latest business and finance news from around the world.",
  },
  {
    title: "Technology",
    href: "/category/technology",
    description: "Tech updates, startups, AI, and innovations.",
  },
  {
    title: "Sports",
    href: "/category/sports",
    description: "Live scores, match updates, and sports highlights.",
  },
  {
    title: "Entertainment",
    href: "/category/entertainment",
    description: "Movies, celebrities, music and TV updates.",
  },
  {
    title: "Health",
    href: "/category/health",
    description: "Health tips, medical breakthroughs and wellness news.",
  },
  {
    title: "Science",
    href: "/category/science",
    description: "Discoveries, space, and research updates.",
  },
];

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <nav className='container mx-auto flex items-center justify-between py-3'>
      <Link href='/' className='flex items-center gap-2 font-bold text-xl'>
        <Newspaper className='h-6 w-6' />
        DevNews
      </Link>

      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className='flex-wrap'>
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href='/'>Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Top Headlines */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href='/top-headlines'>Top Headlines</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Categories */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Layers className='mr-2 h-4 w-4' /> Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 md:w-[450px] md:grid-cols-2 p-4'>
                {categories.map((cat) => (
                  <ListItem key={cat.title} title={cat.title} href={cat.href}>
                    {cat.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Countries */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Globe className='mr-2 h-4 w-4' /> Countries
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 w-[250px] p-4'>
                {countries.map((c) => (
                  <NavigationMenuLink key={c.code} asChild>
                    <Link href={`/${c.code}`}>{c.name}</Link>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button>Login</Button>
    </nav>
  );
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
