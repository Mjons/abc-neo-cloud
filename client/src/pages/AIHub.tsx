import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Mail, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function AIHub() {
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
              <Link href="/infrastructure"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Infrastructure</a></Link>
              <Link href="/gpuaas"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">GPUaaS</a></Link>
              <Link href="/aihub"><a className="text-sm font-medium text-primary hover:text-foreground transition-colors">AI Hub</a></Link>
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
              AI HUB • FULL STACK MLOPS
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Enterprise MLOps
              </span>
              <br />
              Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Accelerate, scale, and secure your machine learning operations. End-to-end platform for the entire ML lifecycle—from data ingestion to production deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="mailto:info@exorax.com">Request Demo</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">39%</div>
                <div className="text-sm text-muted-foreground">Market CAGR</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$15B</div>
                <div className="text-sm text-muted-foreground">2027 Market Size</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">&gt;60%</div>
                <div className="text-sm text-muted-foreground">Gross Margins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Empowering Enterprise AI</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              An integrated MLOps platform designed to address critical challenges enterprises face in deploying and managing AI initiatives at scale.
            </p>

            <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  By offering a unified solution for the entire machine learning lifecycle, EXORAX AI Hub enables organizations to accelerate innovation, ensure security, and optimize operational efficiency.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Projected ARR exceeding $50M by 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Customer growth CAGR of 35%</span>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Deployment Challenges</h2>
              <p className="text-muted-foreground text-lg">Critical obstacles preventing AI projects from reaching production</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_networkConnection.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">Fragmented Toolchains</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enterprises encounter significant obstacles operationalizing AI, including disconnected tools and complex integration challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_shield.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">Security & Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Security vulnerabilities and insufficient governance create compliance risks and operational uncertainty.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src="/assets/icon_arrows.png" alt="" className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-lg">High Failure Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Over 70% of AI initiatives fail to transition from pilot to production due to infrastructure complexity and lack of scalability.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
              <CardHeader>
                <CardTitle className="text-2xl">The Cost of Failure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="text-5xl font-bold text-primary">$50B+</div>
                  <div>
                    <div className="font-semibold mb-2">Annual Global Cost of Failed AI Projects</div>
                    <p className="text-sm text-muted-foreground">
                      Underscoring the urgent need for reliable, scalable MLOps solutions that ensure AI initiatives deliver measurable business value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive MLOps Platform</h2>
              <p className="text-muted-foreground text-lg">Streamline the entire machine learning lifecycle with confidence</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                    <img src="/assets/icon_cloudTransfer.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Data Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Secure, scalable data pipelines supporting diverse data sources and real-time ingestion with automated versioning.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-blue-500/10 rounded-lg">
                    <img src="/assets/icon_chip.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Model Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Collaborative workspaces, automated training workflows, and hyperparameter optimization for rapid experimentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-purple-500/10 rounded-lg">
                    <img src="/assets/icon_serverStack.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Model Registry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Centralized repository for version control, lineage tracking, and model governance with complete audit trails.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                    <img src="/assets/icon_arrows.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Model Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Real-time performance analytics, drift detection, and proactive alerting to ensure model reliability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-blue-500/10 rounded-lg">
                    <img src="/assets/icon_shield.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Security & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enterprise-grade access controls, comprehensive audit trails, and regulatory compliance modules.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-purple-500/10 rounded-lg">
                    <img src="/assets/icon_networkConnection.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>CI/CD Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automated model testing, validation, and deployment pipelines for continuous delivery at scale.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Benefits</h2>
              <p className="text-muted-foreground text-lg">Unified platform delivering measurable business outcomes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                    <img src="/assets/icon_arrows.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Infrastructure Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Unified platform reduces integration overhead, accelerates deployment, and minimizes operational risk through automation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-blue-500/10 rounded-lg">
                    <img src="/assets/icon_power.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Cost Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Consolidation of tools and automation of processes yield substantial savings on infrastructure and personnel costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-purple-500/10 rounded-lg">
                    <img src="/assets/icon_shield.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Enhanced Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Built-in compliance and monitoring ensure data integrity, regulatory adherence, and enterprise-grade governance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Opportunity</h2>
              <p className="text-muted-foreground text-lg">Rapidly growing market driven by AI adoption and operational needs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">$15B</CardTitle>
                  <CardDescription className="text-lg text-foreground">Global MLOps Market by 2027</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Expected to grow at a CAGR of 39%, driven by widespread AI adoption and increasing demand for scalable, secure ML infrastructure.
                  </p>
                  <div className="text-sm font-semibold text-primary">39% CAGR through 2027</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">70%</CardTitle>
                  <CardDescription className="text-lg text-foreground">AI Project Failure Rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Enterprises prioritize operational efficiency and governance, creating sustained demand for comprehensive MLOps solutions.
                  </p>
                  <div className="text-sm font-semibold text-primary">Massive value creation opportunity</div>
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
                      Enterprise AI investments accelerating across all industries, driving demand for production-ready platforms.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">Governance Requirements</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Increasing regulatory scrutiny and compliance requirements creating demand for secure, auditable platforms.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">Digital Transformation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Organizations modernizing infrastructure and seeking integrated solutions to streamline operations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Model & Pricing</h2>
              <p className="text-muted-foreground text-lg">Flexible tiers designed for organizations at every stage</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-card border-border">
                <CardHeader>
                  <Badge className="w-fit mb-4" variant="secondary">DEVELOPER</Badge>
                  <CardTitle className="text-2xl">Entry Tier</CardTitle>
                  <CardDescription>Small teams or pilot projects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Core platform features</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Limited compute resources</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Community support</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">Freemium model with paid upgrades</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary relative overflow-hidden scale-105 shadow-xl shadow-cyan-500/20">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">POPULAR</Badge>
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-4" variant="secondary">PROFESSIONAL</Badge>
                  <CardTitle className="text-2xl">Standard Features</CardTitle>
                  <CardDescription>Mid-sized organizations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Full platform access</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Flexible compute allocation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Professional support</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">Monthly or annual subscription plans</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <Badge className="w-fit mb-4" variant="secondary">ENTERPRISE</Badge>
                  <CardTitle className="text-2xl">Custom Solutions</CardTitle>
                  <CardDescription>Large-scale deployments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Unlimited platform access</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Dedicated infrastructure</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Enterprise SLA & support</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">Custom annual contracts</div>
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

      {/* Target Customers */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Target Customers</h2>
              <p className="text-muted-foreground text-lg">Serving organizations at the forefront of AI innovation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                    <img src="/assets/icon_chip.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Enterprises</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Financial services, healthcare, retail, and manufacturing companies seeking to scale AI initiatives with governance and security.
                  </p>
                  <div className="text-sm font-semibold text-primary">Primary revenue driver</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-blue-500/10 rounded-lg">
                    <img src="/assets/icon_cloudTransfer.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Cloud-Native Startups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Technology-driven businesses requiring robust, scalable MLOps infrastructure for rapid innovation and deployment.
                  </p>
                  <div className="text-sm font-semibold text-primary">High-growth segment</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 flex items-center justify-center bg-purple-500/10 rounded-lg">
                    <img src="/assets/icon_shield.png" alt="" className="w-9 h-9" />
                  </div>
                  <CardTitle>Public Sector</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Government agencies focused on digital transformation and data-driven decision-making with strict compliance requirements.
                  </p>
                  <div className="text-sm font-semibold text-primary">Emerging opportunity</div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Notable customers include leading global banks, healthcare providers, and multinational retailers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why EXORAX AI Hub</h2>
              <p className="text-muted-foreground text-lg">End-to-end lifecycle coverage with enterprise-grade governance</p>
            </div>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Capability</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-primary">EXORAX AI Hub</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Competitor A</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Competitor B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Feature Coverage</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Comprehensive</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Partial</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Partial</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Security</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Advanced</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Standard</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Basic</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Scalability</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">High</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Medium</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Medium</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-muted-foreground">Integration</td>
                    <td className="py-4 px-4 text-sm font-semibold text-primary">Seamless</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Limited</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">End-to-End</div>
                  <div className="text-sm text-muted-foreground">Lifecycle Coverage</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">Enterprise</div>
                  <div className="text-sm text-muted-foreground">Governance & Compliance</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">Rapid</div>
                  <div className="text-sm text-muted-foreground">Onboarding</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Superior</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Growth Strategy</h2>
              <p className="text-muted-foreground text-lg">Multi-channel approach driving adoption and expansion</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <CardTitle>Product-Led Growth</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Continuous platform enhancements to drive user adoption and engagement through superior developer experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <CardTitle>Enterprise Sales</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dedicated sales teams targeting key verticals and strategic accounts with customized solutions and support.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <CardTitle>Partnerships</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Collaboration with cloud providers, system integrators, and technology partners to expand market reach.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <CardTitle>Customer Journey</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    High-touch onboarding, comprehensive support, and community-driven engagement ensuring customer success.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your AI Operations</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading enterprises deploying production-ready AI with confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-12 py-6 h-auto" asChild>
                <a href="mailto:info@exorax.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Request Demo
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
