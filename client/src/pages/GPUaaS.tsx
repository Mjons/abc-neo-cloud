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
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  EXORAX
                </span>
              </a>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a></Link>
              <Link href="/infrastructure"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Infrastructure</a></Link>
              <Link href="/gpuaas"><a className="text-sm font-medium text-primary hover:text-foreground transition-colors">GPUaaS</a></Link>
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
              GPU AS A SERVICE • COMPUTE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Instant GPU Access
              </span>
              <br />
              for AI Innovation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Immediate, self-service access to a global fleet of high-performance GPUs. Scale your AI workloads on demand without infrastructure constraints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="mailto:info@exorax.com">Start Deploying</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">Instant</div>
                <div className="text-sm text-muted-foreground">Global Availability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Flexible</div>
                <div className="text-sm text-muted-foreground">Usage-Based Pricing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$50M+</div>
                <div className="text-sm text-muted-foreground">2027 ARR Target</div>
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

            <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  Our platform addresses the critical shortage of GPU availability in the market, positioning us as a key enabler for accelerated AI innovation and deployment. Investment in GPUaaS offers exposure to a fast-growing sector, robust revenue potential, and a leadership team with proven expertise in cloud and AI infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The GPU Availability Crisis</h2>
              <p className="text-muted-foreground text-lg">Critical bottlenecks limiting AI development and deployment</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_chip.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">Unprecedented Demand</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Rapid expansion of artificial intelligence applications has led to unprecedented demand for high-performance GPUs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_power.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">Provisioning Bottlenecks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Traditional cloud providers face significant bottlenecks in provisioning these resources, resulting in delays and inflated costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_networkConnection.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">Missed Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Resource constraints lead to missed innovation opportunities for businesses and developers seeking to advance AI initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
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
                  GPUaaS delivers immediate, self-service access to a global fleet of high-performance GPUs. Our platform streamlines deployment, allowing clients to scale resources on demand and accelerate their AI initiatives without infrastructure constraints.
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

      {/* Market Opportunity */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Opportunity</h2>
              <p className="text-muted-foreground text-lg">Rapidly expanding market with strong growth drivers</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">$25B+</CardTitle>
                  <CardDescription className="text-lg text-foreground">Global Cloud GPU Market by 2028</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    CAGR above 30%. AI adoption across industries and expansion of hyperscale data centres driving sustained growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">10M+</CardTitle>
                  <CardDescription className="text-lg text-foreground">Active AI Developers Worldwide</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developer demand seeking scalable GPU access for model training and deployment continues to accelerate.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Growth Drivers</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">AI Adoption</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Enterprise AI initiatives expanding across financial services, healthcare, retail, and manufacturing sectors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">Hyperscale Expansion</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cloud providers and technology platforms investing heavily in GPU infrastructure to meet demand.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">Developer Ecosystem</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Growing community of AI/ML developers requiring accessible, cost-effective compute resources.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why EXORAX GPUaaS</h2>
              <p className="text-muted-foreground text-lg">Proprietary infrastructure, cost efficiency, and developer focus</p>
            </div>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Capability</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-primary">EXORAX GPUaaS</th>
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

            <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-2xl">Financial Projections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Annual Recurring Revenue</div>
                    <div className="text-4xl font-bold text-primary mb-1">$50M+</div>
                    <div className="text-sm text-muted-foreground">Projected by 2027</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Customer Growth CAGR</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">35%</div>
                    <div className="text-sm text-muted-foreground">Next three years</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Gross Margins</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">&gt;60%</div>
                    <div className="text-sm text-muted-foreground">Operational efficiency</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Go-to-Market Strategy */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Go-to-Market Strategy</h2>
              <p className="text-muted-foreground text-lg">Multi-channel approach targeting enterprise and developer segments</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                    <img src="/assets/icon_networkConnection.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Direct Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dedicated sales teams targeting large enterprises and hyperscale clients with customized solutions.
                  </p>
                  <div className="text-sm font-semibold text-primary">Focus: Enterprise & Hyperscale</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-blue-500/10 rounded-lg">
                    <img src="/assets/icon_cloudTransfer.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Strategic Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Collaborations with cloud service providers, system integrators, and AI solution vendors.
                  </p>
                  <div className="text-sm font-semibold text-primary">Focus: Channel & Ecosystem</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-purple-500/10 rounded-lg">
                    <img src="/assets/icon_chip.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Marketing Initiatives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Industry events, digital campaigns, technical content, and community engagement programs.
                  </p>
                  <div className="text-sm font-semibold text-primary">Focus: Brand & Community</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                    <img src="/assets/icon_arrows.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Developer Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Self-service portal, comprehensive documentation, and support for fast-growing AI developer segment.
                  </p>
                  <div className="text-sm font-semibold text-primary">Focus: Developer Experience</div>
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
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/assets/logo_white.png"
                    alt="EXORAX Neo Cloud"
                    className="h-12 w-auto"
                  />
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
