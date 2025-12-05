import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

// Company logos
import observableLogo from "@/logos/obs_networks.png";
import singularityLogo from "@/logos/singularity_U.png";
import sunLogo from "@/logos/sun_microsystems_logo_2385.png";
import yahooLogo from "@/logos/yahoo-logo-2019.png";
import xprizeLogo from "@/logos/XPRIZE_Logo.png";
import xtiumLogo from "@/logos/mk-capital-brand xtium-logo.svg";
import akamaiLogo from "@/logos/Akami.png";
import btLogo from "@/logos/BTLogo.png";
import motorolaLogo from "@/logos/Motorola-Logo-700x394.png";
import vmwareLogo from "@/logos/VMware-Logo.png";
import ricohLogo from "@/logos/logRicoho.svg";
import keystoneNapLogo from "@/logos/keystoneNAP.png";

const companyLogos = [
  { name: "Observable Networks", logo: observableLogo, url: "https://cisco.com" },
  { name: "Singularity University", logo: singularityLogo, url: "https://su.org" },
  { name: "Sun Microsystems", logo: sunLogo, url: "https://oracle.com/sun" },
  { name: "Yahoo", logo: yahooLogo, url: "https://yahoo.com" },
  { name: "XPRIZE", logo: xprizeLogo, url: "https://xprize.org" },
  { name: "Xtium", logo: xtiumLogo, url: "https://xtium.com" },
  { name: "Akamai", logo: akamaiLogo, url: "https://akamai.com" },
  { name: "BT", logo: btLogo, url: "https://bt.com" },
  { name: "Motorola", logo: motorolaLogo, url: "https://motorola.com" },
  { name: "VMware", logo: vmwareLogo, url: "https://vmware.com" },
  { name: "Ricoh", logo: ricohLogo, url: "https://ricoh.com" },
  { name: "KeystoneNAP", logo: keystoneNapLogo, url: "https://www.keystonenap.com" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <a className="cursor-pointer">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  EXORAX
                </span>
              </a>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a></Link>
              <Link href="/infrastructure"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">AI Factory</a></Link>
              <Link href="/gpuaas"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">GPU Cloud</a></Link>
              <Link href="/aihub"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Enterprise AI Solutions</a></Link>
              <Link href="/about"><a className="text-sm font-medium text-primary hover:text-foreground transition-colors">About Us</a></Link>
            </div>
            <Button size="sm" asChild>
              <a href="mailto:info@exorax.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-background/50 to-purple-500/10" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-1.5" variant="secondary">
              ABOUT US
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                EXORAX
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              EXORAX AI is a leading neocloud provider exiting stealth mode, enabling enterprises worldwide to meet the compute-intensive demands of modern AI workloads, to secure institutional knowledge and to optimize AI outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Engineers</div>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div>
                <div className="text-3xl font-bold text-primary">40K+</div>
                <div className="text-sm text-muted-foreground">Domain Experts</div>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div>
                <div className="text-3xl font-bold text-primary">8-11</div>
                <div className="text-sm text-muted-foreground">Figure Outcomes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership</h2>
              <p className="text-muted-foreground text-lg">Exponential Organizations methodology powering enterprise transformation</p>
            </div>

            {/* ExO Company Overview */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 mb-8">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <span className="text-primary font-bold">Exponential Organizations Inc.</span> ("ExO") is a leading edge <span className="text-primary font-semibold">neocloud provider</span> enabling enterprises worldwide to <span className="font-semibold text-foreground">secure institutional knowledge</span> and <span className="font-semibold text-foreground">optimize AI outcomes</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Led by executives with multiple <span className="text-primary font-bold">8-11 figure outcomes</span> and supported by <span className="text-primary font-bold">500+ engineers</span> plus <span className="text-primary font-bold">40,000 domain expert</span> community, ExO builds upon successes of its eponymous <span className="font-semibold text-foreground">1M+ bestseller</span> with proprietary IP for:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3x</div>
                    <div className="text-xs text-muted-foreground">Better Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">6.8x</div>
                    <div className="text-xs text-muted-foreground">Greater Profitability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">40x</div>
                    <div className="text-xs text-muted-foreground">Higher Shareholder Returns</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">11.7x</div>
                    <div className="text-xs text-muted-foreground">Higher Asset Utilization</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Across <span className="text-primary font-semibold">300+ F500 engagements</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  <a href="https://salimismail.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Salim Ismail</a>, former head of innovation at <span className="text-primary font-semibold">Yahoo</span>, founding executive of <span className="text-primary font-semibold">Singularity University</span>, current board member at <a href="https://xprize.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">XPRIZE</a>, and bestselling author of <span className="font-semibold text-foreground">Exponential Organizations</span>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founded or Led Companies */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Founded or Led</h2>
              <p className="text-muted-foreground text-lg">Track record of building successful technology companies</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
              {companyLogos.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white/5 rounded-xl h-24 w-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-14 max-w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Presence</h2>
              <p className="text-muted-foreground text-lg">Worldwide reach with local expertise</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">40K+</CardTitle>
                  <CardDescription className="text-base text-foreground">Domain Experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Extensive community of specialized professionals across diverse industries.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">150+</CardTitle>
                  <CardDescription className="text-base text-foreground">Countries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    ExO affiliates active across six continents, serving enterprises worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">47</CardTitle>
                  <CardDescription className="text-base text-foreground">Languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Multilingual support enabling seamless global collaboration and knowledge transfer.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Ecosystem</h2>
            <p className="text-muted-foreground text-lg mb-8">Building a comprehensive platform for exponential transformation</p>
            <a
              href="https://openexo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary font-medium transition-colors"
            >
              OpenExO Community
              <span className="text-xs opacity-70">openexo.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-2">
                <div className="mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    EXORAX
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  EXORAX AI is a leading neocloud provider exiting stealth mode, enabling enterprises worldwide to meet the compute-intensive demands of modern AI workloads, to secure institutional knowledge and to optimize AI outcomes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/infrastructure"><a className="hover:text-foreground transition-colors">AI Factory</a></Link></li>
                  <li><Link href="/gpuaas"><a className="hover:text-foreground transition-colors">GPU Cloud</a></Link></li>
                  <li><Link href="/aihub"><a className="hover:text-foreground transition-colors">Enterprise AI Solutions</a></Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/about"><a className="hover:text-foreground transition-colors">About Us</a></Link></li>
                  <li><a href="mailto:info@exorax.com" className="hover:text-foreground transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>© 2025 EXORAX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
