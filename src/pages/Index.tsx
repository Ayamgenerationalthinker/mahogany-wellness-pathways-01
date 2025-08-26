import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { 
  Mail, 
  CheckCircle, 
  Heart, 
  Brain, 
  Users, 
  Sparkles,
  MessageCircle,
  User,
  ClipboardList,
  Shield,
  Award,
  Clock,
  Menu,
  X,
  DollarSign,
  AlertTriangle,
  Star,
  Quote,
  Calendar,
  Phone,
  Zap,
  Moon,
  Activity,
  UserCheck,
  MapPin
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";
import { useState, useEffect, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav ${
        isScrolled ? 'shadow-elegant' : ''
      }`} style={{ backgroundColor: '#5C4033' }}>
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img 
              src="/lovable-uploads/033b9631-2244-47e9-85e8-3b8e5684eadc.png" 
              alt="Mahogany's Health & Wellness" 
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-3 border-primary shadow-xl hover:scale-105 transition-transform duration-300 ring-4 ring-primary/20"
              loading="eager"
              decoding="async"
            />
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg truncate">Mahoganys Health & Wellness</h1>
              <p className="font-body text-sm sm:text-base text-white/90 drop-shadow-md hidden sm:block">Healing begins with connection</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('home')} className="font-body text-white hover:text-white/80 transition-colors font-medium text-sm xl:text-base">Home</button>
            <button onClick={() => scrollToSection('about')} className="font-body text-white hover:text-white/80 transition-colors font-medium text-sm xl:text-base">About</button>
            <button onClick={() => scrollToSection('services')} className="font-body text-white hover:text-white/80 transition-colors font-medium text-sm xl:text-base">Services</button>
            <button onClick={() => scrollToSection('faq')} className="font-body text-white hover:text-white/80 transition-colors font-medium text-sm xl:text-base">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="font-body text-white hover:text-white/80 transition-colors font-medium text-sm xl:text-base">Contact</button>
          </div>
          
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-container animate-fade-in">
            <div className="container mx-auto px-3 sm:px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left font-body text-white hover:text-white/80 transition-colors py-2 text-base">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left font-body text-white hover:text-white/80 transition-colors py-2 text-base">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left font-body text-white hover:text-white/80 transition-colors py-2 text-base">Services</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left font-body text-white hover:text-white/80 transition-colors py-2 text-base">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left font-body text-white hover:text-white/80 transition-colors py-2 text-base">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Healing Begins with Connection
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed px-4">
            Empowering your mental and physical well-being from anywhere.
          </p>
          <div className="glass-card rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 max-w-2xl mx-auto hover-3d-subtle">
            <p className="font-body text-white/95 text-center font-medium text-sm sm:text-base">
              <span className="text-white font-semibold">💻 100% Online Sessions</span> Safe, convenient, and effective therapy from the comfort of your own space.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="glass-button font-body font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover-3d-subtle w-full sm:w-auto"
              onClick={() => navigate('/booking')}
            >
              Book Consultation
            </Button>
            <Button 
              size="lg" 
              className="glass-button font-body font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover-3d-subtle w-full sm:w-auto"
              onClick={() => scrollToSection('services')}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 sm:mb-8">Mission</h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Mahoganys Health and Wellness exists to uplift, heal, and empower turning personal pain into purpose and transforming care into community. Together, well walk the path toward healing one story, one heart, one life at a time.
          </p>
        </div>
      </section>

      {/* Meet Your Provider */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-12 sm:mb-16">Meet Your Provider</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 glass-card rounded-3xl transform rotate-3 hover-3d"></div>
                <img 
                  src="/lovable-uploads/9c7be8ee-1e8a-47a8-ba8d-c5387a5e2e4e.png"
                  alt="Hakim Du Pree, MSN, PMHNP-C, APRN, FNP-C"
                  className="relative z-10 w-full rounded-3xl shadow-warm hover-3d"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Hakim Du Pree</h3>
                  <p className="font-body text-base sm:text-lg text-white font-semibold mb-4">MSN, APRN, FNP C, PMHNP C</p>
                </div>
                
                <p className="font-body text-base sm:text-lg text-foreground leading-relaxed">
                  "Im Hakim Du Pree, a psychiatric and family nurse practitioner with over 20 years of nursing experience. I believe that healing should be whole, personal, and accessible. Thats why I started Mahoganys Health & Wellness to walk with you through lifes toughest moments with compassion and care."
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <Badge variant="secondary" className="justify-center py-2 text-xs sm:text-sm">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Licensed in Florida
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2 text-xs sm:text-sm">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    HIPAA Compliant
                  </Badge>
                  <Badge variant="secondary" className="justify-center py-2 text-xs sm:text-sm sm:col-span-2 lg:col-span-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    20 Years Experience
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-12 sm:mb-16">Services</h2>
          
          <div className="text-center mb-8 sm:mb-12">
            <p className="font-body text-base sm:text-lg text-foreground max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
              Transforming Lives with Mahoganys Health & Wellness
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Psychotic & Related Disorders */}
              <AccordionItem value="psychotic" className="glass-card rounded-lg border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">Psychotic & Related Disorders</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-3">Common Symptoms</h4>
                      <ul className="font-body text-sm text-muted-foreground space-y-2">
                        <li>• Hallucinations (seeing or hearing things others don't)</li>
                        <li>• Delusions (strongly held false beliefs)</li>
                        <li>• Disorganized speech or behavior</li>
                        <li>• Social withdrawal</li>
                      </ul>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-body font-semibold text-accent mb-2">When to Reach Out</h4>
                      <p className="font-body text-sm text-foreground">If you or a loved one is struggling to tell what's real, or daily functioning is severely impacted, professional support can help restore stability and safety.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Mood & Related Disorders */}
              <AccordionItem value="mood" className="glass-card rounded-lg border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">Mood & Related Disorders</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-3">Common Symptoms</h4>
                      <ul className="font-body text-sm text-muted-foreground space-y-2">
                        <li>• Persistent sadness or emptiness</li>
                        <li>• Loss of interest in activities</li>
                        <li>• Mood swings (highs and lows)</li>
                        <li>• Fatigue or low energy</li>
                      </ul>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-body font-semibold text-accent mb-2">When to Reach Out</h4>
                      <p className="font-body text-sm text-foreground">If your mood disrupts your relationships, work, or quality of life, it may be time to seek help.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Anxiety & Related Disorders */}
              <AccordionItem value="anxiety" className="glass-card rounded-lg border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">Anxiety & Related Disorders</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-3">Common Symptoms</h4>
                      <ul className="font-body text-sm text-muted-foreground space-y-2">
                        <li>• Excessive worry or nervousness</li>
                        <li>• Panic attacks (racing heart, shortness of breath)</li>
                        <li>• Restlessness or irritability</li>
                        <li>• Avoidance of feared situations</li>
                      </ul>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-body font-semibold text-accent mb-2">When to Reach Out</h4>
                      <p className="font-body text-sm text-foreground">If anxiety feels constant, overwhelming, or keeps you from enjoying life, treatment can provide relief.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Personality Disorders */}
              <AccordionItem value="personality" className="glass-card rounded-lg border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">Personality Disorders</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-3">Common Symptoms</h4>
                      <ul className="font-body text-sm text-muted-foreground space-y-2">
                        <li>• Intense or unstable relationships</li>
                        <li>• Impulsive or risky behaviors</li>
                        <li>• Strong fears of abandonment</li>
                        <li>• Difficulty with identity or self-image</li>
                      </ul>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-body font-semibold text-accent mb-2">When to Reach Out</h4>
                      <p className="font-body text-sm text-foreground">If patterns of relating to others cause ongoing distress or conflict, therapy and support can foster healthier connections.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Somatic Symptom & Related Disorders */}
              <AccordionItem value="somatic" className="glass-card rounded-lg border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Activity className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">Somatic Symptom & Related Disorders</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-3">Common Symptoms</h4>
                      <ul className="font-body text-sm text-muted-foreground space-y-2">
                        <li>• Persistent physical symptoms without clear medical cause</li>
                        <li>• High anxiety about health</li>
                        <li>• Frequent doctor visits without answers</li>
                        <li>• Pain or fatigue linked to stress</li>
                      </ul>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-body font-semibold text-accent mb-2">When to Reach Out</h4>
                      <p className="font-body text-sm text-foreground">If physical symptoms and health worries interfere with your daily life, integrated care can help body and mind heal.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Sleep-Wake Disorders */}
              <AccordionItem value="sleep" className="glass-card rounded-lg border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Moon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">Sleep-Wake Disorders</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-3">Common Symptoms</h4>
                      <ul className="font-body text-sm text-muted-foreground space-y-2">
                        <li>• Insomnia or difficulty staying asleep</li>
                        <li>• Excessive daytime sleepiness</li>
                        <li>• Irregular sleep patterns</li>
                        <li>• Nightmares or sleep disruptions</li>
                      </ul>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-body font-semibold text-accent mb-2">When to Reach Out</h4>
                      <p className="font-body text-sm text-foreground">If poor sleep affects mood, concentration, or overall health, treatment can improve rest and energy.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Dementia-Related Disorders */}
              <AccordionItem value="dementia" className="glass-card rounded-lg border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">Dementia-Related Disorders</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-3">Common Symptoms</h4>
                      <ul className="font-body text-sm text-muted-foreground space-y-2">
                        <li>• Memory loss worsening over time</li>
                        <li>• Trouble completing familiar tasks</li>
                        <li>• Personality or mood changes</li>
                        <li>• Getting lost in familiar places</li>
                      </ul>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-body font-semibold text-accent mb-2">When to Reach Out</h4>
                      <p className="font-body text-sm text-foreground">If changes in memory, thinking, or behavior affect independence, early intervention and family support are key.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-12 sm:mt-16 px-4">
            <p className="font-body text-base sm:text-lg text-foreground max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6">
              If you are struggling with any of these diagnoses or any other mental health issues, let's start working together to improve your mental outlook.
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">Mahoganys Health & Wellness</h3>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-12 sm:mb-16">Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="glass-card hover-3d">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <ClipboardList className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">60 minutes intake</h3>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">$175</div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-3d">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">45 minutes followup</h3>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">$150</div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-3d">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">30 minutes followup</h3>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">$125</div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-3d">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">15 minutes followup</h3>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">$100</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-center mb-16">What to Expect at Your First Appointment</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">1</div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">Schedule Your Appointment</h3>
              <p className="font-body text-foreground">Email to book your consultation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">2</div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">Receive Secure Link</h3>
              <p className="font-body text-foreground">Get your HIPAA compliant telehealth link</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground font-bold text-xl">3</div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">Talk with Hakim</h3>
              <p className="font-body text-foreground">Full wellness discussion in a safe space</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">4</div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">Get Your Care Plan</h3>
              <p className="font-body text-foreground">Leave with personalized next steps</p>
            </div>
          </div>

          <Card className="glass-card hover-3d max-w-2xl mx-auto shadow-soft">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-bold text-primary text-center mb-6">Checklist to Prepare:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="font-body text-foreground">Quiet space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="font-body text-foreground">Good internet & webcam</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="font-body text-foreground">Health notes or medications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="font-body text-foreground">An open heart this is a safe space</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Simple Notice Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card/50 border border-primary/20 rounded-xl p-6">
              <p className="font-body text-foreground leading-relaxed">
                <span className="font-semibold">MAHOGANY'S HEALTH & WELLNESS</span> does not operate 24/7 and does not provide crisis services. Please seek immediate help if you are in distress by calling 988 or visiting your nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="glass-card hover-3d">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 text-center">Where do you see patients?</h3>
                <p className="font-body text-foreground text-center">Via secure, HIPAA compliant telehealth across the state of Florida.</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-3d">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 text-center">Do you provide therapy and medication management?</h3>
                <p className="font-body text-foreground text-center">Yes, both are available no need for multiple providers unless we choose to collaborate for extra support.</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-3d">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 text-center">How do I schedule an appointment?</h3>
                <p className="font-body text-foreground text-center">Use our booking form below to request an appointment.</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-3d">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 text-center">What happens in the first session?</h3>
                <p className="font-body text-foreground text-center">We'll talk about your history, goals, and concerns. Then, we'll create a personalized plan together.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Ready to Start Your Journey?</h2>
            <p className="font-body text-xl text-foreground mb-12">
              Taking the first step toward healing is brave. I'll walk with you.
            </p>
            <Button 
              onClick={() => navigate('/booking')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-warm transition-all duration-300 hover:shadow-xl"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-primary" />
              <span className="font-body font-semibold text-primary">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-primary" />
              <span className="font-body font-semibold text-primary">Licensed Florida Provider</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-primary" />
              <span className="font-body font-semibold text-primary">Secure Online Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <p className="font-body text-xl text-primary mb-8">Connect with us on social media</p>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.tiktok.com/@kimfnp9?_t=ZM-8yd0NnyQc7i&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-warm-cream hover:text-logo-tan transition-all duration-300 hover:scale-110"
              >
                <FaTiktok size={40} />
              </a>
              <a
                href="https://www.facebook.com/share/15rMLfmENL/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-warm-cream hover:text-logo-tan transition-all duration-300 hover:scale-110"
              >
                <FaFacebook size={40} />
              </a>
              <a
                href="https://www.instagram.com/mahoganyshealthandwellness?igsh=djRydzVubThicDVo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-warm-cream hover:text-logo-tan transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={40} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-tan text-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="flex items-center space-x-3 sm:space-x-4 justify-center md:justify-start">
              <img 
                src="/lovable-uploads/033b9631-2244-47e9-85e8-3b8e5684eadc.png" 
                alt="Mahogany's Health & Wellness" 
                className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-foreground/20"
              />
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground">Mahogany's Health & Wellness</h3>
                <p className="font-body text-xs sm:text-sm text-foreground/80">Healing begins with connection</p>
              </div>
            </div>
            
            <div className="text-center order-3 md:order-2">
              <nav aria-label="Footer navigation">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                  <button onClick={() => scrollToSection('home')} className="font-body text-foreground hover:text-primary transition-colors text-sm sm:text-base">Home</button>
                  <button onClick={() => scrollToSection('about')} className="font-body text-foreground hover:text-primary transition-colors text-sm sm:text-base">About</button>
                  <button onClick={() => scrollToSection('services')} className="font-body text-foreground hover:text-primary transition-colors text-sm sm:text-base">Services</button>
                  <button onClick={() => scrollToSection('faq')} className="font-body text-foreground hover:text-primary transition-colors text-sm sm:text-base">FAQ</button>
                  <button onClick={() => scrollToSection('contact')} className="font-body text-foreground hover:text-primary transition-colors text-sm sm:text-base">Contact</button>
                </div>
              </nav>
            </div>
            
            <div className="text-center md:text-right order-2 md:order-3">
              <div className="text-foreground/80 text-xs sm:text-sm font-body italic">
                Professional, compassionate care
              </div>
            </div>
          </div>
          
          <div className="border-t border-foreground/20 mt-8 pt-8 text-center space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-foreground/90">
              <span className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant</span>
              </span>
              <span className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Licensed Florida Provider</span>
              </span>
              <span className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>20 Years Experience</span>
              </span>
            </div>
            <p className="font-body text-sm text-foreground/80">
              This website does not provide emergency care. If you are in crisis, call 911 or go to your nearest emergency room.
            </p>
            <p className="font-body text-sm text-foreground/60">
              © 2025 Mahogany's Health & Wellness. All rights reserved. | 
              <button className="hover:text-primary transition-colors ml-1">Privacy Policy</button> | 
              <button className="hover:text-primary transition-colors ml-1">Terms of Service</button>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
