import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Server, Cloud, CheckCircle2, TrendingUp } from "lucide-react";
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
              <a href="#platform" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Platform</a>
              <a href="#infrastructure" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Infrastructure</a>
              <a href="#market" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Market</a>
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
              Infrastructure-First
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI Computing Platform
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Powering the next generation of AI innovation with purpose-built infrastructure, flexible GPU compute, and enterprise-grade platform services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="#platform">
                  Explore Platform <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <Link href="/about"><a>About Us</a></Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">45MW</div>
                <div className="text-sm text-muted-foreground">Power Capacity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100kW</div>
                <div className="text-sm text-muted-foreground">Rack Density</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1.12</div>
                <div className="text-sm text-muted-foreground">PUE Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$100M</div>
                <div className="text-sm text-muted-foreground">2028 Target ARR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">The AI Infrastructure Bottleneck</h2>
            <p className="text-muted-foreground text-center mb-12">Critical challenges limiting AI innovation and deployment</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_chip.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">Critical Power Shortage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Demand for AI compute exceeds supply, with persistent GPU shortages. Current data centre capacity falls short by over 40% in key markets, with 18-24 month deployment delays.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_power.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">Power & Cooling Capital Trap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Data centre power and cooling limitations create a "capital trap," stalling new AI deployments and limiting access to transformative technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_networkConnection.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">Vendor Fragmentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fragmented vendor landscape leads to inefficient resource utilization, project delays, and up to 60% higher operational overhead for enterprises.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Tier Platform */}
      <section id="platform" className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Three-Tier Model</h2>
              <p className="text-muted-foreground text-lg">Choose your level of control - from pure infrastructure to fully managed AI platform</p>
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
                  <CardTitle className="text-2xl">Power + Space</CardTitle>
                  <CardDescription>Bring Your Own Hardware</CardDescription>
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
                    <div className="text-xs text-muted-foreground mt-1">3-10 year contracts • Multi-year agreements</div>
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
                    <div className="text-2xl font-bold text-foreground">On-Demand Pricing</div>
                    <div className="text-xs text-muted-foreground mt-1">Usage-based billing • Instant deployment</div>
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
                  <CardTitle className="text-2xl">AI Hub Platform</CardTitle>
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
                      <span className="text-sm text-muted-foreground">Managed MLOps platform</span>
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

            {/* Blended Economics */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <circle cx="40" cy="10" r="1.5" fill="currentColor" className="text-cyan-400" />
                    <circle cx="35" cy="15" r="1" fill="currentColor" className="text-cyan-400" />
                  </svg>
                </div>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">55-65%</div>
                  <div className="text-sm text-muted-foreground">Blended Gross Margin</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <circle cx="40" cy="10" r="1.5" fill="currentColor" className="text-blue-400" />
                    <circle cx="35" cy="15" r="1" fill="currentColor" className="text-purple-400" />
                  </svg>
                </div>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Renewable Energy</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border-purple-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 50 50" className="w-full h-full">
                    <circle cx="40" cy="10" r="1.5" fill="currentColor" className="text-purple-400" />
                    <circle cx="35" cy="15" r="1" fill="currentColor" className="text-cyan-400" />
                  </svg>
                </div>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">90 Days</div>
                  <div className="text-sm text-muted-foreground">Deployment Speed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Foundation */}
      <section id="infrastructure" className="py-20 bg-card/50 relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Infrastructure Foundation</h2>
              <p className="text-muted-foreground text-lg">Purpose-built for AI workloads with industry-leading efficiency</p>
            </div>

            {/* Infrastructure showcase images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card border-border overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/assets/datacenter.png"
                    alt="High-density data center infrastructure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">High-Density Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">Purpose-built facilities optimized for AI compute</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/assets/liqud_cooling.png"
                    alt="Advanced liquid cooling system"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Advanced Liquid Cooling</h3>
                    <p className="text-sm text-muted-foreground">100kW per rack with immersion cooling technology</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <img src="/assets/icon_power.png" alt="" className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">45MW</CardTitle>
                  <CardDescription className="text-base">Total Power Capacity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Operational Phase 1. Expansion rights for 75MW additional capacity secured.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <img src="/assets/icon_fan.png" alt="" className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">100kW</CardTitle>
                  <CardDescription className="text-base">Rack Power Density</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced liquid and immersion cooling enables maximum performance and efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <img src="/assets/icon_arrows.png" alt="" className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">1.12</CardTitle>
                  <CardDescription className="text-base">PUE Rating</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    38% lower operating costs vs traditional facilities. 100% renewable energy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="py-20 relative">
        {/* Background image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/areal view data center.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Opportunity</h2>
              <p className="text-muted-foreground text-lg">Massive, supply-constrained market with winner-take-most dynamics</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 relative overflow-hidden">
                {/* Cloud wave pattern */}
                <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M30,80 Q40,60 60,70 T90,80" stroke="currentColor" fill="none" strokeWidth="3" className="text-cyan-400" />
                    <path d="M20,90 Q35,70 55,80 T85,90" stroke="currentColor" fill="none" strokeWidth="3" className="text-blue-400" />
                  </svg>
                </div>
                <CardHeader>
                  <CardTitle className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">$100B+</CardTitle>
                  <CardDescription className="text-lg text-foreground">AI Infrastructure Market 2028</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    30%+ CAGR. Supply constraints expected to persist for years, creating significant market opportunity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-purple-500/20 relative overflow-hidden">
                {/* Cloud wave pattern */}
                <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M30,80 Q40,60 60,70 T90,80" stroke="currentColor" fill="none" strokeWidth="3" className="text-blue-400" />
                    <path d="M20,90 Q35,70 55,80 T85,90" stroke="currentColor" fill="none" strokeWidth="3" className="text-purple-400" />
                  </svg>
                </div>
                <CardHeader>
                  <CardTitle className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">2GW+</CardTitle>
                  <CardDescription className="text-lg text-foreground">Demand Gap in Priority Markets</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Hyperscale capacity shortage exceeding 2GW in strategic regions creates immediate revenue opportunity.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Launch Strategy Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Launch Strategy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Year One</Badge>
                    <CardTitle>Infrastructure Launch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Deploy flagship data centres in high-demand regions
                    </p>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">Target $10M ARR</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Year Two</Badge>
                    <CardTitle>GPUaaS Expansion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Scale GPU fleet and customer base
                    </p>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">Target $25M ARR</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Year Three</Badge>
                    <CardTitle>Platform Maturity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Full three-tier platform operational
                    </p>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">Target $50M ARR</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Positioning */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Competitive Positioning</h2>
              <p className="text-muted-foreground text-lg">Unique advantages across infrastructure, cost, and platform</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Capability</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-primary">EXOAI Neo</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Legacy Cloud</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">GPU Broker</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Colo Provider</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Infrastructure Ownership</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Yes</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">No</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">No</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Yes</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">GPUaaS</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Yes</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Partial</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Yes</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">No</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">AI Platform</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Yes</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Partial</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">No</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">No</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Sustainability</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">High</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Medium</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Low</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Medium</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Moat Strength</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Asset + Platform</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Scale</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Network</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Asset</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                    <img src="/assets/icon_shield.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Hard Asset Moat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    24+ month lead time to replicate infrastructure. Secured power and land rights in key markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-blue-500/10 rounded-lg">
                    <img src="/assets/icon_arrows.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Cost Advantage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    42% lower TCO vs hyperscalers through ownership economics and energy efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-purple-500/10 rounded-lg">
                    <img src="/assets/icon_networkConnection.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Platform Network Effect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Customer lock-in via unified platform, proprietary orchestration, and data gravity.
                  </p>
                </CardContent>
              </Card>
            </div>
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
                  Infrastructure-First AI Computing Platform
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/infrastructure"><a className="hover:text-foreground transition-colors">Infrastructure</a></Link></li>
                  <li><Link href="/gpuaas"><a className="hover:text-foreground transition-colors">GPUaaS</a></Link></li>
                  <li><Link href="/aihub"><a className="hover:text-foreground transition-colors">AI Hub</a></Link></li>
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
