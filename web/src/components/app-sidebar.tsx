import { Atom, Calendar, ChevronDown, Eclipse, Home, Inbox, Rabbit, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { NavTeamSwitcher } from "./nav-team-switcher"

// Menu items.
const items = [
  {
    title: "Search",
    url: "#",
    icon: Home,
  },
  {
    title: "Option 2",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Option 3",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Option 4",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const teams = [
        {
          name: "Acme Inc",
          logo: Atom,
          plan: "Enterprise",
        },
        {
          name: "Acme Corp.",
          logo: Eclipse,
          plan: "Startup",
        },
        {
          name: "Evil Corp.",
          logo: Rabbit,
          plan: "Free",
        },
]


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Bot</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                <NavTeamSwitcher teams={teams} />
                </SidebarMenuItem>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
