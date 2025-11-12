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
              <Link href="/infrastructure"><a className="text-sm font-medium text-primary hover:text-foreground transition-colors">Infrastructure</a></Link>
              <Link href="/gpuaas"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">GPUaaS</a></Link>
              <Link href="/aihub"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">AI Hub</a></Link>
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
              INFRASTRUCTURE • POWER + SPACE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Turnkey AI Infrastructure
              </span>
              <br />
              Foundation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Purpose-built infrastructure delivering high-density, scalable, and secure solutions tailored for artificial intelligence and high-performance computing workloads.
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

      {/* Problem Statement */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">The AI Infrastructure Crisis</h2>
            <p className="text-muted-foreground text-center mb-12">
              The demand for artificial intelligence is rapidly surpassing the capacity of global infrastructure.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_chip.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">Capacity Constraints</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Constraints in data centre capacity threaten both innovation and sustained growth.
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    Current data centre supply falls short by over 40% in strategic markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_power.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">Operational Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Increasing requirements for power, cooling, and security pose significant operational challenges.
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    Extended lead times and high capital intensity restrict deployment.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-2xl">Key Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Global demand for AI computing projected to increase tenfold by 2030</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Investments in AI infrastructure expected to exceed $1 trillion over the coming decade</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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

      {/* Service Models */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Models</h2>
              <p className="text-muted-foreground text-lg">Flexible deployment options to meet your specific needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Colocation */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <Badge className="w-fit mb-4" variant="secondary">COLOCATION</Badge>
                  <CardTitle className="text-2xl">Secure Space</CardTitle>
                  <CardDescription>Scalable space for client-owned equipment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Dedicated rack space with power allocation</span>
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
                    <div className="text-sm text-muted-foreground mb-2">Revenue Contribution: 55%</div>
                    <div className="text-sm text-muted-foreground">Typical Contract: 3-5 years</div>
                  </div>
                </CardContent>
              </Card>

              {/* Build-to-Suit */}
              <Card className="bg-card border-primary relative overflow-hidden scale-105 shadow-xl shadow-cyan-500/20">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">POPULAR</Badge>
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-4" variant="secondary">BUILD-TO-SUIT</Badge>
                  <CardTitle className="text-2xl">Custom Facilities</CardTitle>
                  <CardDescription>Developed to meet specific enterprise needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Purpose-built infrastructure</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Custom power & cooling specifications</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Location flexibility</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Dedicated team & support</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground mb-2">Revenue Contribution: 30%</div>
                    <div className="text-sm text-muted-foreground">Typical Contract: 5-10 years</div>
                  </div>
                </CardContent>
              </Card>

              {/* Powered Shell */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <Badge className="w-fit mb-4" variant="secondary">POWERED SHELL</Badge>
                  <CardTitle className="text-2xl">Ready Infrastructure</CardTitle>
                  <CardDescription>Ready-to-fit infrastructure for swift activation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Pre-configured power distribution</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Cooling infrastructure in place</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Rapid deployment timeline</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Flexible fit-out options</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground mb-2">Revenue Contribution: 15%</div>
                    <div className="text-sm text-muted-foreground">Typical Contract: 3-7 years</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Transparent, competitive pricing aligned with customer scale and utilization</p>
              <Button size="lg" asChild>
                <a href="mailto:info@exorax.com">
                  <Mail className="mr-2 w-4 h-4" />
                  Request Pricing
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure Advantages</h2>
              <p className="text-muted-foreground text-lg">Purpose-built for AI workloads with industry-leading efficiency</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <img src="/assets/icon_power.png" alt="" className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">150MW</CardTitle>
                  <CardDescription className="text-base">Current Power Capacity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access to reliable, high-capacity grids. Expansion rights for 75MW additional capacity secured.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <img src="/assets/icon_fan.png" alt="" className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">100kW</CardTitle>
                  <CardDescription className="text-base">Rack Power Density</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced liquid and air cooling systems enabling maximum performance and efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-lg">
                    <img src="/assets/icon_arrows.png" alt="" className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-5xl font-bold text-primary mb-2">1.1</CardTitle>
                  <CardDescription className="text-base">PUE Rating</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Industry-leading efficiency. 38% lower operating costs vs traditional facilities.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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
                  Exponential Organizations Inc. "ExO" is a leading edge neocloud provider
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  enabling enterprises worldwide to secure institutional knowledge and optimize
                </p>
                <p className="text-sm text-muted-foreground mb-4">AI outcomes.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/infrastructure"><a className="hover:text-foreground transition-colors">Infrastructure</a></Link></li>
                  <li><Link href="/gpuaas"><a className="hover:text-foreground transition-colors">GPUaaS</a></Link></li>
                  <li><Link href="/aihub"><a className="hover:text-foreground transition-colors">AI Hub</a></Link>
              <Link href="/about"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About Us</a></Link></li>
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
