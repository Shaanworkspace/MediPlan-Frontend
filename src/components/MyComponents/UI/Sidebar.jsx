import {
    Calendar,
    FileText,
    Home,
    MessageCircle,
    Stethoscope,
    User,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const routes = [
    { title: "Dashboard", icon: Home, href: "/user" },
    { title: "Appointments", icon: Calendar, href: "/appointment" },
    { title: "Medicines", icon: Stethoscope, href: "/medicines" },
    { title: "Reports", icon: FileText, href: "/reports" },
    { title: "Contact", icon: MessageCircle, href: "/contact" },
    { title: "Profile", icon: User, href: "/profile" },
];

export function Sidebar() {
    const location = useLocation();

    return (
        <div className="hidden border-r bg-background md:block w-64 h-full fixed top-16 left-0">
            <div className="flex h-full flex-col gap-2 p-4">
                <nav className="grid gap-1">
                    {routes.map(({ title, icon: Icon, href }) => {
                        const isActive = location.pathname === href;
                        return (
                            <Link
                                key={title}
                                to={href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all",
                                    isActive
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {title}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}

export function SidebarMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">Menu</Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}
