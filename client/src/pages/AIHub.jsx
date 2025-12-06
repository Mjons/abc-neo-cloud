import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Mail } from "lucide-react";
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
                <img src="/assets/EXORAX_logo.png" alt="EXORAX" className="h-8 w-auto" />
              </a>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a></Link>
              <Link href="/infrastructure"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">AI Factory</a></Link>
              <Link href="/gpuaas"><a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">GPU Cloud</a></Link>
              <Link href="/aihub"><a className="text-sm font-medium text-primary hover:text-foreground transition-colors">Enterprise AI Solutions</a></Link>
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
              ENTERPRISE AI SOLUTIONS AND SLAs
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Accelerate Your
              </span>
              <br />
              AI Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Accelerate, scale, and secure your AI innovation and operations. Enterprise AI operating system for the entire AI lifecycle—from data ingestion to production deployment and outcome optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="mailto:info@exorax.com">Find Your Use Cases</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Partner Logos - Continuous Scroll */}
      <section className="py-16 bg-background/50 border-y border-border overflow-hidden">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Companies That Trust Us</h2>
            <p className="text-muted-foreground text-lg">We help you explore and transition to AI cloud</p>
          </div>
        </div>

        {/* Scrolling logos container */}
        <div className="relative">
          <div className="flex animate-scroll-aihub">
            {/* First set of logos */}
            <div className="flex items-center gap-16 px-8 flex-shrink-0">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/accenture_1753422821802-C5qDsYvM.png" alt="Accenture" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/airbus_1753422821803-CvpEresn.png" alt="Airbus" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/boston scientific_1753422821803-BKhiV2eV.png" alt="Boston Scientific" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/gucci_1753422821804-D96OB3Qx.png" alt="Gucci" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/P_G_1753422821804-wW3Hj3Mg.png" alt="P&G" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/stanley-black-decker-logo-png_1753423969547-CInqkwGb.png" alt="Stanley Black & Decker" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/TD_Ameritrade-Logo.wine_1753423969547-DiAemN2d.png" alt="TD Ameritrade" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/unilever_1753422821805-brTr5qzj.png" alt="Unilever" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/visa_1753422821805-B-iBhL4w.png" alt="VISA" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-16 px-8 flex-shrink-0">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/accenture_1753422821802-C5qDsYvM.png" alt="Accenture" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/airbus_1753422821803-CvpEresn.png" alt="Airbus" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/boston scientific_1753422821803-BKhiV2eV.png" alt="Boston Scientific" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/gucci_1753422821804-D96OB3Qx.png" alt="Gucci" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/P_G_1753422821804-wW3Hj3Mg.png" alt="P&G" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/stanley-black-decker-logo-png_1753423969547-CInqkwGb.png" alt="Stanley Black & Decker" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/TD_Ameritrade-Logo.wine_1753423969547-DiAemN2d.png" alt="TD Ameritrade" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/unilever_1753422821805-brTr5qzj.png" alt="Unilever" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-28 w-56">
                <img src="/assets/partner_logos/visa_1753422821805-B-iBhL4w.png" alt="VISA" className="h-18 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll-aihub {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-aihub {
            animation: scroll-aihub 30s linear infinite;
          }

          .animate-scroll-aihub:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Platform</h2>
              <p className="text-muted-foreground text-lg">Streamline the entire AI lifecycle with confidence</p>
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

            
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We serve</h2>
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
                    Technology-driven businesses requiring robust, scalable AI infrastructure for rapid innovation and deployment.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/20 via-background to-purple-500/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Accelerate Your AI Operations</h2>
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
