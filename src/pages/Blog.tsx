import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  User, 
  ArrowRight, 
  TrendingUp,
  Target,
  Zap,
  BarChart3
} from "lucide-react"

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Lightning Ads Blog",
    "description": "Expert insights, strategies, and updates on premium advertising accounts",
    "publisher": {
      "@type": "Organization",
      "name": "Lightning Ads"
    }
  };

  const featuredPost = {
    title: "The Complete Guide to Agency Ad Accounts in 2024",
    excerpt: "Everything you need to know about premium agency accounts, from setup to scaling your campaigns across multiple platforms.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Guide",
    image: "/api/placeholder/800/400"
  }

  const blogPosts = [
    {
      title: "How to Scale TikTok Ads Without Getting Banned",
      excerpt: "Learn the proven strategies for scaling TikTok advertising campaigns while maintaining account health and avoiding restrictions.",
      author: "Mike Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "TikTok",
      icon: TrendingUp
    },
    {
      title: "Google Ads Agency Account Benefits: A Deep Dive",
      excerpt: "Discover why premium Google Ads agency accounts outperform regular accounts and how they can transform your campaigns.",
      author: "Alex Rodriguez",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Google Ads",
      icon: Target
    },
    {
      title: "Meta Account Warming: Best Practices for 2024",
      excerpt: "Master the art of warming Facebook and Instagram advertising accounts to ensure long-term campaign stability.",
      author: "Emma Davis",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Meta",
      icon: Zap
    },
    {
      title: "ROI Optimization Across Multiple Ad Platforms",
      excerpt: "Advanced strategies for maximizing return on investment when running campaigns across Google, Meta, TikTok, and more.",
      author: "David Kim",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Strategy",
      icon: BarChart3
    },
    {
      title: "Snapchat Ads: The Underutilized Platform for Agencies",
      excerpt: "Why Snapchat advertising should be part of your multi-platform strategy and how to get started with agency accounts.",
      author: "Lisa Wang",
      date: "March 3, 2024",
      readTime: "4 min read",
      category: "Snapchat",
      icon: Target
    },
    {
      title: "Compliance and Risk Management for Ad Accounts",
      excerpt: "Essential guidelines for maintaining compliance and minimizing risks when managing multiple advertising accounts.",
      author: "John Martinez",
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "Compliance",
      icon: TrendingUp
    }
  ]

  const categories = ["All", "Guides", "Google Ads", "Meta", "TikTok", "Snapchat", "Strategy", "Compliance"]

  return (
    <>
      <SEO 
        title="Blog - Expert Advertising Insights & Strategies"
        description="Get expert insights, strategies, and tips on scaling advertising campaigns with premium agency accounts. Learn about Google Ads, Meta, TikTok, and more."
        keywords="advertising blog, marketing strategies, Google Ads tips, Meta advertising, TikTok ads guide, agency account strategies"
        canonical="/blog"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Lightning Ads Blog
                </span>
              </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights, strategies, and updates from the world of premium advertising accounts and campaign management.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-primary" : "border-primary/30 hover:border-primary hover:bg-primary/10"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Featured Article
              </span>
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-electric">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-primary/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="p-4 bg-gradient-primary/20 rounded-lg w-fit mx-auto mb-4">
                    <BarChart3 className="h-12 w-12 text-primary" />
                  </div>
                  <Badge className="bg-gradient-primary text-primary-foreground mb-4">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl mb-4">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base">
                    {featuredPost.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <Button className="bg-gradient-primary hover:shadow-electric transition-all duration-300 group">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Latest Articles
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest strategies, tips, and insights from our advertising experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const IconComponent = post.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-electric">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-gradient-primary/10 rounded-lg group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="border-primary/30">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto text-center border-border/50 bg-gradient-primary/5">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Never Miss an Update
                </span>
              </CardTitle>
              <CardDescription className="text-base">
                Subscribe to our newsletter for the latest insights, strategies, and industry updates delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                />
                <Button className="bg-gradient-primary hover:shadow-electric transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}

export default Blog