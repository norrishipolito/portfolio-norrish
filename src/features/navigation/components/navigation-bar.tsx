import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const navigationItems = [
  { href: "/#about", label: "About", variant: "ghost" },
  { href: "/#projects", label: "Projects", variant: "ghost" },
  { href: "/#contact", label: "Contact Me", variant: "outline" },
] as const;

const NavigationBar = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn("flex w-full px-6 py-4 z-50 justify-between", className)}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          {navigationItems.map(({ href, label }) => (
            <NavigationMenuItem key={href} asChild>
              <NavigationMenuLink
                href={href}
                className="text-sm font-medium text-gray-700 hover:text-accent-foreground hover:bg-sidebar-ring/25 transition"
              >
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavigationBar;
