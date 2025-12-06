import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Mail, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function GPUaaS() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <a className="cursor-pointer">
                <img src="/assets/EXORAX_logo.png" alt="EXORAX" className="h-8 w-auto" />
              </a>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a></Link>
              <Link href="/infrastructure"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">AI Factory</a></Link>
              <Link href="/gpuaas"><a className="text-sm font-medium text-primary hover:text-foreground transition-colors">GPU Cloud</a></Link>
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
              GPU CLOUD • COMPUTE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                GPU Cloud
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Immediate, self-service access to a global fleet of high performance GPUs. Scale your AI workload with AI innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="mailto:info@exorax.com">Start Deploying</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">Instant</div>
                <div className="text-sm text-muted-foreground">Global Availability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Flexible</div>
                <div className="text-sm text-muted-foreground">Usage-Based Pricing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Secure</div>
                <div className="text-sm text-muted-foreground">Enterprise-Grade</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Sovereign</div>
                <div className="text-sm text-muted-foreground">Workload Sovereignty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Enabling Accelerated AI Innovation</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              A pioneering cloud infrastructure provider enabling instant, scalable access to GPU resources for enterprises, developers, and hyperscale clients.
            </p>

          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground text-lg">Immediate access to enterprise-grade GPU infrastructure</p>
            </div>

            <Card className="bg-card border-border mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Platform Capabilities</CardTitle>
                <CardDescription>Streamlined deployment for AI, machine learning, and data analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  GPU Cloud delivers immediate, self-service access to a global fleet of high-performance GPUs. Our platform streamlines deployment, allowing clients to scale resources on demand and accelerate their AI initiatives without infrastructure constraints.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Instant Deployment</div>
                      <div className="text-sm text-muted-foreground">Fully automated provisioning in seconds</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Secure Isolation</div>
                      <div className="text-sm text-muted-foreground">Enterprise-grade security and compliance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Seamless Integration</div>
                      <div className="text-sm text-muted-foreground">Compatible with existing cloud environments</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                    <img src="/assets/icon_chip.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>GPU Fleet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tier-1 NVIDIA and AMD GPUs, optimized for AI workloads and high-throughput computing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-blue-500/10 rounded-lg">
                    <img src="/assets/icon_cloudTransfer.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Real-Time Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive monitoring, cost management tools, and usage analytics dashboard.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-purple-500/10 rounded-lg">
                    <img src="/assets/icon_networkConnection.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Developer APIs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Developer-focused APIs for rapid onboarding and seamless workflow integration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why EXORAX GPU Cloud</h2>
              <p className="text-muted-foreground text-lg">Proprietary infrastructure, cost efficiency, and developer focus</p>
            </div>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Capability</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-primary">EXORAX GPU Cloud</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Traditional Cloud</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Emerging Provider</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">GPU Availability</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Instant, global</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Limited, region-specific</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Moderate, select markets</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Pricing Model</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Flexible, usage-based</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Fixed, subscription</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Variable</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Developer Features</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Developer APIs, real-time monitoring</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Basic provisioning</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Some developer tools</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Market Position</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Innovator</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Incumbent</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Challenger</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                    <img src="/assets/icon_serverStack.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Infrastructure Advantage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Proprietary data centre network in strategically important markets, ensuring low-latency and high-availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-blue-500/10 rounded-lg">
                    <img src="/assets/icon_arrows.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Cost Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Flexible pricing models tailored to developer and enterprise needs, reducing total cost of ownership by up to 40%.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-purple-500/10 rounded-lg">
                    <img src="/assets/icon_networkConnection.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Developer Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Intuitive platform designed for rapid onboarding and seamless workflow integration with existing tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Model & Economics</h2>
              <p className="text-muted-foreground text-lg">High-margin profile driven by proprietary technology and operational scale</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Revenue Mechanics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Usage-based billing per GPU-hour</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Subscription tiers for enterprise customers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Value-added services and support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Cost Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Capital-efficient infrastructure expansion</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Streamlined operations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Automated resource management</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Unit Economics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">High gross margins (&gt;60%)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Strong customer retention</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Scalable platform architecture</span>
                    </div>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your AI Workloads?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers and enterprises deploying on instant, scalable GPU infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-12 py-6 h-auto" asChild>
                <a href="mailto:info@exorax.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Get Started
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
                  <img src="/assets/EXORAX_logo.png" alt="EXORAX" className="h-8 w-auto" />
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
