import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="absolute top-8 left-8 text-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Book Your Online Consultation
          </h1>
          <p className="font-body text-lg text-foreground/80 mb-4">
            Taking the first step toward healing is brave. I'll walk with you.
          </p>
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="font-body text-center text-foreground font-medium">
              <span className="text-accent font-semibold">💻 Online Sessions Only</span> — All consultations and therapy sessions are conducted virtually for your convenience and safety.
            </p>
          </div>
        </div>

        <Card className="glass-card hover-3d shadow-warm backdrop-blur-xl">
          <CardContent className="p-8">
            <div className="space-y-6">
              <h3 className="font-display text-xl text-primary text-center mb-6">
                Have you booked with us before?
              </h3>
              <div className="space-y-4">
                <Button
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdIr7ODnIg5gm76c0wWWldBEAL9FB_zmr9zN3Bja_klyztw2A/viewform?usp=header', '_blank')}
                  className="w-full justify-start text-left p-6 h-auto bg-primary hover:bg-primary/90"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-primary-foreground/20" />
                    <div>
                      <div className="font-semibold text-primary-foreground">No - I'm a new client</div>
                      <div className="text-sm text-primary-foreground/80">First time booking with us</div>
                    </div>
                  </div>
                </Button>
                
                <Button
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdpxRe_va3ZgmpqnAp5BVUDUjifc5waqeF9tm9PPZJvJf_ttQ/viewform', '_blank')}
                  className="w-full justify-start text-left p-6 h-auto bg-accent hover:bg-accent/90"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-accent-foreground/20" />
                    <div>
                      <div className="font-semibold text-accent-foreground">Yes - I'm a returning client</div>
                      <div className="text-sm text-accent-foreground/80">I've booked with you before</div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Booking;