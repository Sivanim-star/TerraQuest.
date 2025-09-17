import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Leaf, LogOut, Sparkles, Zap } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import vayuMascot from "@/assets/vayu-mascot.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signOut } = useAuth();

  const navItems = [
    { label: "Learn", href: "#learn", icon: "📚" },
    { label: "Games", href: "#games", icon: "🎮" },
    { label: "Challenges", href: "#challenges", icon: "🏆" },
    { label: "Community", href: "#community", icon: "👥" },
    { label: "About", href: "#about", icon: "🌱" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-soft" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img 
                src={vayuMascot} 
                alt="ClimaQuest Logo" 
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-hero rounded-full animate-pulse opacity-75"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent group-hover:animate-pulse">
                ClimaQuest
              </span>
              <Leaf className="w-5 h-5 text-primary transition-all duration-300 group-hover:text-success group-hover:rotate-12" />
              <Sparkles className="w-4 h-4 text-pathfinder animate-pulse" />
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium group rounded-lg hover:bg-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-hero transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></div>
              </button>
            ))}
          </nav>

          {/* Enhanced Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-gradient-pathfinder rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>2,340 pts</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Welcome back, Hero! 🌟
                </span>
                <Button 
                  variant="ghost" 
                  className="font-medium hover:bg-destructive/10 hover:text-destructive transition-all duration-300" 
                  onClick={signOut}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Button variant="ghost" className="font-medium hover:scale-105 transition-all duration-300" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button 
                  variant="hero" 
                  className="font-medium hover:scale-105 hover:shadow-glow transition-all duration-300 relative overflow-hidden group" 
                  asChild
                >
                  <Link to="/auth">
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Enhanced Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-all duration-300">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gradient-earth">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <img 
                    src={vayuMascot} 
                    alt="ClimaQuest" 
                    className="w-8 h-8 animate-bounce"
                  />
                  <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    ClimaQuest
                  </span>
                  <Sparkles className="w-4 h-4 text-pathfinder animate-pulse" />
                </div>
                
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-primary/5 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      {item.label}
                      <div className="ml-auto w-2 h-2 bg-gradient-hero rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  {user ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-gradient-pathfinder rounded-lg text-sm font-medium">
                        <Zap className="w-4 h-4" />
                        <span>2,340 Eco Points</span>
                      </div>
                      <span className="text-sm text-muted-foreground px-3">
                        Welcome back, Climate Hero! 🌟
                      </span>
                      <Button 
                        variant="ghost" 
                        className="justify-start hover:bg-destructive/10 hover:text-destructive transition-all duration-300" 
                        onClick={signOut}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Button 
                        variant="ghost" 
                        className="justify-start hover:scale-105 transition-all duration-300" 
                        asChild
                      >
                        <Link to="/auth">Sign In</Link>
                      </Button>
                      <Button 
                        variant="hero" 
                        className="justify-start hover:scale-105 hover:shadow-glow transition-all duration-300 relative overflow-hidden group" 
                        asChild
                      >
                        <Link to="/auth">
                          <span className="relative z-10">Get Started</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;