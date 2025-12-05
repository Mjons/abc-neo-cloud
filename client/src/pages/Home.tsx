import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Server, Cloud, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
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
              <Link href="/"><a className="text-sm font-medium text-primary hover:text-foreground transition-colors">Home</a></Link>
              <Link href="/infrastructure"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">AI Factory</a></Link>
              <Link href="/gpuaas"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">GPU Cloud</a></Link>
              <Link href="/aihub"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Enterprise AI Solutions</a></Link>
              <Link href="/about"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About Us</a></Link>
            </div>
            <Button asChild>
              <a href="mailto:info@exorax.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/hero_banner.png"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-background/50 to-purple-500/10" />
        {/* Cloud wave pattern inspired by logo */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)
          `
        }} />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI Native Neocloud Platform
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Powering the next generation of AI innovation with purpose-built infrastructure, flexible GPU compute, and enterprise-grade platform services. We re-purpose the Existing Power Infrastructure ("EPI"), including buildings, substations, transformers et al, for Hyperscale and enterprise clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="#platform">
                  Schedule a Call <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <Link href="/about"><a>About Us</a></Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">150MW</div>
                <div className="text-sm text-muted-foreground">Current power Capacity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100kW</div>
                <div className="text-sm text-muted-foreground">Rack Density</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1.1 to 1.3</div>
                <div className="text-sm text-muted-foreground">PUE Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500MW</div>
                <div className="text-sm text-muted-foreground">2026 power capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Tier Platform */}
      <section id="platform" className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-muted-foreground text-lg">Choose your level of control - from AI factory to AI solutions</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Tier 1 */}
              <Card className="bg-card border-border relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
                {/* Subtle cloud wave pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M20,50 Q30,30 50,40 T80,50" stroke="currentColor" fill="none" strokeWidth="2" className="text-cyan-400" />
                    <path d="M20,60 Q30,40 50,50 T80,60" stroke="currentColor" fill="none" strokeWidth="2" className="text-cyan-400" />
                    <path d="M20,70 Q30,50 50,60 T80,70" stroke="currentColor" fill="none" strokeWidth="2" className="text-blue-400" />
                  </svg>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/assets/icon_serverStack.png" alt="" className="w-8 h-8" />
                    <Badge variant="secondary">INFRASTRUCTURE</Badge>
                  </div>
                  <CardTitle className="text-2xl">AI Factory</CardTitle>
                  <CardDescription>Own Your Own Neocloud</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Dedicated rack space with power</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Advanced liquid cooling (100kW/rack)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">99.999% uptime SLA</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">24/7 facility access</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Full hardware control</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-foreground">Custom Pricing</div>
                    <div className="text-xs text-muted-foreground mt-1">5-10 year contracts • Multi-year agreements</div>
                  </div>
                </CardContent>
              </Card>

              {/* Tier 2 */}
              <Card className="bg-card border-primary relative overflow-hidden group scale-105 shadow-xl shadow-cyan-500/20">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
                {/* Enhanced cloud wave pattern for featured tier */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M20,50 Q30,30 50,40 T80,50" stroke="currentColor" fill="none" strokeWidth="2" className="text-cyan-400" />
                    <path d="M20,60 Q30,40 50,50 T80,60" stroke="currentColor" fill="none" strokeWidth="2" className="text-blue-400" />
                    <path d="M20,70 Q30,50 50,60 T80,70" stroke="currentColor" fill="none" strokeWidth="2" className="text-purple-400" />
                    <circle cx="70" cy="55" r="2" fill="currentColor" className="text-cyan-400" />
                    <circle cx="75" cy="65" r="1.5" fill="currentColor" className="text-purple-400" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">POPULAR</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/assets/icon_chip.png" alt="" className="w-8 h-8" />
                    <Badge variant="secondary">COMPUTE</Badge>
                  </div>
                  <CardTitle className="text-2xl">GPU as a Service</CardTitle>
                  <CardDescription>Turnkey GPU Infrastructure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Tier-1 NVIDIA & AMD GPUs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Infrastructure managed</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Bare-metal API access</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Per-second billing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">No software overhead</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <Button className="w-full" size="lg" asChild>
                      <a href="mailto:info@exorax.com">Pricing</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tier 3 */}
              <Card className="bg-card border-border relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                {/* Subtle cloud wave pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M20,50 Q30,30 50,40 T80,50" stroke="currentColor" fill="none" strokeWidth="2" className="text-blue-400" />
                    <path d="M20,60 Q30,40 50,50 T80,60" stroke="currentColor" fill="none" strokeWidth="2" className="text-purple-400" />
                    <path d="M20,70 Q30,50 50,60 T80,70" stroke="currentColor" fill="none" strokeWidth="2" className="text-purple-400" />
                  </svg>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/assets/icon_cloudTransfer.png" alt="" className="w-8 h-8" />
                    <Badge variant="secondary">FULL STACK</Badge>
                  </div>
                  <CardTitle className="text-2xl">Enterprise AI Solutions</CardTitle>
                  <CardDescription>Complete AI Development</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Everything in Tier 1 + 2</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Managed AI Ops platform</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Model training and serving</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Collaboration tools</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Auto-scaling</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-foreground">Premium Pricing</div>
                    <div className="text-xs text-muted-foreground mt-1">Full-stack platform • Recurring SaaS revenue</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos - Continuous Scroll */}
      <section className="py-16 bg-background/50 border-y border-border overflow-hidden">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Organizations</h2>
            <p className="text-muted-foreground text-lg">Join thousands of companies transforming through exponential methodologies</p>
          </div>
        </div>

        {/* Scrolling logos container */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center gap-16 px-8 flex-shrink-0">
              <a href="https://www.accenture.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/accenture_1753422821802-C5qDsYvM.png" alt="Accenture" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.airbus.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/airbus_1753422821803-CvpEresn.png" alt="Airbus" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.bostonscientific.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/boston scientific_1753422821803-BKhiV2eV.png" alt="Boston Scientific" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.gucci.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/gucci_1753422821804-D96OB3Qx.png" alt="Gucci" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.pg.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/P_G_1753422821804-wW3Hj3Mg.png" alt="P&G" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.stanleyblackanddecker.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/stanley-black-decker-logo-png_1753423969547-CInqkwGb.png" alt="Stanley Black & Decker" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.tdameritrade.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/TD_Ameritrade-Logo.wine_1753423969547-DiAemN2d.png" alt="TD Ameritrade" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.unilever.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/unilever_1753422821805-brTr5qzj.png" alt="Unilever" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/visa_1753422821805-B-iBhL4w.png" alt="VISA" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-16 px-8 flex-shrink-0">
              <a href="https://www.accenture.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/accenture_1753422821802-C5qDsYvM.png" alt="Accenture" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.airbus.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/airbus_1753422821803-CvpEresn.png" alt="Airbus" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.bostonscientific.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/boston scientific_1753422821803-BKhiV2eV.png" alt="Boston Scientific" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.gucci.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/gucci_1753422821804-D96OB3Qx.png" alt="Gucci" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.pg.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/P_G_1753422821804-wW3Hj3Mg.png" alt="P&G" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.stanleyblackanddecker.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/stanley-black-decker-logo-png_1753423969547-CInqkwGb.png" alt="Stanley Black & Decker" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.tdameritrade.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/TD_Ameritrade-Logo.wine_1753423969547-DiAemN2d.png" alt="TD Ameritrade" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.unilever.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/unilever_1753422821805-brTr5qzj.png" alt="Unilever" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56 hover:shadow-md transition-shadow">
                <img src="/assets/partner_logos/visa_1753422821805-B-iBhL4w.png" alt="VISA" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
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
