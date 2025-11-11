import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Link } from "wouter";

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
              <Link href="/infrastructure"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Infrastructure</a></Link>
              <Link href="/gpuaas"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">GPUaaS</a></Link>
              <Link href="/aihub"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">AI Hub</a></Link>
              <Link href="/about"><a className="text-sm font-medium text-primary hover:text-foreground transition-colors">About Us</a></Link>
            </div>
            <Button size="sm" asChild>
              <a href="mailto:info@exorax.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-background/50 to-purple-500/10" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-1.5" variant="secondary">
              ABOUT US
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Exponential
              </span>
              <br />
              Organizations Inc.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A neocloud provider exiting stealth mode, enabling enterprises worldwide to secure institutional knowledge and optimize AI outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">Exponential Organizations Inc. ("ExO")</strong> is a neocloud provider exiting stealth mode, enabling enterprises worldwide to secure institutional knowledge and optimize AI outcomes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Led by executives with multiple 8-11 figure outcomes and supported by <strong className="text-primary">500+ engineers</strong> plus <strong className="text-primary">40,000 domain expert community</strong>, ExO builds upon successes of its eponymous 1M+ bestseller with proprietary IP for <strong className="text-primary">3x better revenue growth</strong>, <strong className="text-primary">6.8x greater profitability</strong>, <strong className="text-primary">40x higher shareholder returns</strong>, and <strong className="text-primary">11.7x higher asset utilization</strong>, across 300+ F500 engagements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
              <p className="text-muted-foreground text-lg">300+ Fortune 500 engagements across diverse industries</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">Accenture</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">Airbnb</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">Allianz</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">Amazon</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">Bank of America</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">Coca Cola</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">IBM</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">KPMG</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">P&G</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">Samsung</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">Siemens Energy</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">SpaceX</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">Tesla</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">Qualcomm</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="font-semibold">VISA</p>
                </CardContent>
              </Card>
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
                  <CardTitle className="text-5xl font-bold text-primary mb-2">150+</CardTitle>
                  <CardDescription className="text-base text-foreground">Countries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    ExO affiliates active across six continents, serving enterprises worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">57</CardTitle>
                  <CardDescription className="text-base text-foreground">Languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Multilingual support enabling seamless global collaboration and knowledge transfer.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">40K+</CardTitle>
                  <CardDescription className="text-base text-foreground">Domain Experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Extensive community of specialized professionals across diverse industries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliates */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ExO Affiliates</h2>
              <p className="text-muted-foreground text-lg">Building a comprehensive ecosystem for exponential transformation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <CardTitle className="text-xl">OpenExO</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="https://openexo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    openexo.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <CardTitle className="text-xl">ExO Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="https://exo.works" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    exo.works
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center">
                <CardHeader>
                  <CardTitle className="text-xl">ExoRAX AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="https://exorax.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    exorax.ai
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Founding Team</h2>
              <p className="text-muted-foreground text-lg">Proven expertise in infrastructure, AI, and finance</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Alex Morgan</CardTitle>
                  <CardDescription className="text-primary font-semibold">CEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Former Head of Cloud Engineering at leading hyperscaler. 15+ years in data centre innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Priya Singh</CardTitle>
                  <CardDescription className="text-primary font-semibold">CTO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI systems architect, ex-GPU platform lead at global chipmaker. Holds multiple infrastructure patents.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Daniel Kim</CardTitle>
                  <CardDescription className="text-primary font-semibold">COO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Serial entrepreneur, scaled two SaaS companies from seed to exit. Expert in operational scaling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/20 via-background to-purple-500/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our platform and discover how we can help you scale your AI initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-12 py-6 h-auto" asChild>
                <Link href="/infrastructure"><a>Explore Infrastructure</a></Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-12 py-6 h-auto" asChild>
                <a href="mailto:info@exorax.com">Contact Us</a>
              </Button>
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
