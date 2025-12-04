import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Infrastructure() {
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
              <Link href="/infrastructure"><a className="text-sm font-medium text-primary hover:text-foreground transition-colors">AI Factory</a></Link>
              <Link href="/gpuaas"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">GPU Cloud</a></Link>
              <Link href="/aihub"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Enterprise AI Solutions</a></Link>
              <Link href="/about"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About Us</a></Link>
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
              AI FACTORY • POWER + SPACE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Turnkey AI Factory
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We re-purpose the Existing Power Infrastructure ("EPI"), including buildings, substations, transformers et al, for Hyperscale and enterprise clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="mailto:info@exorax.com">Request Information</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground text-lg">Expedited deployment with customizable, enterprise-grade infrastructure</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <img src="/assets/icon_serverStack.png" alt="" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Expedited Deployment</h3>
                  <p className="text-sm text-muted-foreground">Deploy in priority AI markets in as little as 90 days</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <img src="/assets/icon_fan.png" alt="" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Advanced Cooling</h3>
                  <p className="text-sm text-muted-foreground">Customizable power and cooling solutions up to 100kW per rack</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <img src="/assets/icon_shield.png" alt="" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Security & Compliance</h3>
                  <p className="text-sm text-muted-foreground">Integrated security and regulatory compliance</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <img src="/assets/icon_arrows.png" alt="" className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Flexible Services</h3>
                  <p className="text-sm text-muted-foreground">Service models designed to meet enterprise requirements</p>
                </CardContent>
              </Card>
            </div>

            {/* Core Features */}
            <Card className="bg-card border-border mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Core Infrastructure Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">High-Density Racks</div>
                      <div className="text-sm text-muted-foreground">Advanced liquid cooling infrastructure</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Redundant Power</div>
                      <div className="text-sm text-muted-foreground">Backup systems ensuring 99.999% uptime</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Carrier-Neutral Connectivity</div>
                      <div className="text-sm text-muted-foreground">Direct cloud on-ramps and peering</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">24/7 Monitoring</div>
                      <div className="text-sm text-muted-foreground">Continuous monitoring and technical support</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Automated Provisioning</div>
                      <div className="text-sm text-muted-foreground">Infrastructure management and automation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Multi-Layer Security</div>
                      <div className="text-sm text-muted-foreground">Physical and digital security protocols</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why EXORAX Neo Cloud</h2>
              <p className="text-muted-foreground text-lg">Industry-leading deployment speed, density, and reliability</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Capability</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-primary">EXORAX Neo</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Competitor A</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Competitor B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Deployment Speed</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">&lt; 90 days</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">180 days</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">120 days</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Power Density</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Up to 100kW per rack</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">50kW per rack</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">30kW per rack</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Customization</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Comprehensive</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Partial</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Limited</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Uptime SLA</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">99.999%</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">99.99%</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">99.9%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Security</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Multi-layer</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Standard</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">90 Days</div>
                  <div className="text-sm text-muted-foreground">Rapid Deployment Speed</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Renewable Energy</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">38%</div>
                  <div className="text-sm text-muted-foreground">Lower Operating Costs</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build on Our Infrastructure?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading AI companies deploying on purpose-built, scalable infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-12 py-6 h-auto" asChild>
                <a href="mailto:info@exorax.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Our Team
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-12 py-6 h-auto" asChild>
                
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">info@exorax.com</p>
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
                  
                  <li><Link href="/about"><a className="hover:text-foreground transition-colors">About Us</a></Link></li><li><a href="mailto:info@exorax.com" className="hover:text-foreground transition-colors">Contact</a></li>
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
