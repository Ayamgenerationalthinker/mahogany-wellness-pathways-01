import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic info
    hasBookedBefore: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    preferredDate: '',
    preferredTime: '',
    
    // New client fields
    age: '',
    occupation: '',
    reasonForConsultation: '',
    previousTherapy: '',
    currentMedication: '',
    goalsForTherapy: '',
    
    // Returning client fields
    sinceLastSession: '',
    situationChanges: '',
    medicationUpdates: '',
    todaysFocus: ''
  });
  const navigate = useNavigate();

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.hasBookedBefore !== '';
      case 2:
        return formData.firstName.trim() !== '' && 
               formData.lastName.trim() !== '' && 
               formData.email.trim() !== '' && 
               /\S+@\S+\.\S+/.test(formData.email) &&
               formData.dateOfBirth !== '';
      case 3:
        if (formData.hasBookedBefore === 'no') {
          return formData.age.trim() !== '' && 
                 formData.occupation.trim() !== '' && 
                 formData.reasonForConsultation.trim() !== '' &&
                 formData.goalsForTherapy.trim() !== '';
        } else {
          return formData.sinceLastSession.trim() !== '' && 
                 formData.todaysFocus.trim() !== '';
        }
      case 4:
        return true; // Scheduling is optional
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps && validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://formspree.io/f/xldlqgzg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `Consultation Request - ${formData.hasBookedBefore === 'no' ? 'New Client' : 'Returning Client'}
          
${formData.hasBookedBefore === 'no' ? 
`Age: ${formData.age}
Occupation: ${formData.occupation}
Reason for Consultation: ${formData.reasonForConsultation}
Previous Therapy: ${formData.previousTherapy || 'None'}
Current Medication: ${formData.currentMedication || 'None'}
Goals for Therapy: ${formData.goalsForTherapy}` :
`How have you been since last session: ${formData.sinceLastSession}
Situation changes: ${formData.situationChanges || 'None'}
Medication updates: ${formData.medicationUpdates || 'None'}
Today's focus: ${formData.todaysFocus}`
}

Preferred Date: ${formData.preferredDate || 'Not specified'}
Preferred Time: ${formData.preferredTime || 'Not specified'}
Phone: ${formData.phone || 'Not provided'}
Date of Birth: ${formData.dateOfBirth}`
        }),
      });

      if (response.ok) {
        toast({
          title: "Consultation Request Submitted!",
          description: "We'll contact you within 24 hours to confirm your online consultation.",
        });
        
        // Navigate back to homepage after a short delay
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Unable to send request. Please check your connection.",
        variant: "destructive",
      });
    }
  };

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
          
          {/* Progress indicator */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Badge variant={currentStep >= 1 ? "default" : "secondary"} className="rounded-full">
              1
            </Badge>
            <div className={`h-1 w-8 rounded ${currentStep >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            <Badge variant={currentStep >= 2 ? "default" : "secondary"} className="rounded-full">
              2
            </Badge>
            <div className={`h-1 w-8 rounded ${currentStep >= 3 ? 'bg-primary' : 'bg-muted'}`} />
            <Badge variant={currentStep >= 3 ? "default" : "secondary"} className="rounded-full">
              3
            </Badge>
            <div className={`h-1 w-8 rounded ${currentStep >= 4 ? 'bg-primary' : 'bg-muted'}`} />
            <Badge variant={currentStep >= 4 ? "default" : "secondary"} className="rounded-full">
              4
            </Badge>
          </div>
          
          <p className="font-body text-sm text-muted-foreground">
            Step {currentStep} of 4
          </p>
        </div>

        <Card className="glass-card hover-3d shadow-warm backdrop-blur-xl">
          <CardContent className="p-8">
            {/* Step 1: Have you booked before? */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="font-display text-xl text-primary text-center mb-6">
                  Have you booked with us before?
                </h3>
                <RadioGroup 
                  value={formData.hasBookedBefore} 
                  onValueChange={(value) => handleInputChange('hasBookedBefore', value)}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3 p-4 border-2 border-border rounded-lg hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-body text-lg cursor-pointer flex-1">
                      <div className="font-semibold">No - I'm a new client</div>
                      <div className="text-sm text-muted-foreground">First time booking with us</div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 border-2 border-border rounded-lg hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-body text-lg cursor-pointer flex-1">
                      <div className="font-semibold">Yes - I'm a returning client</div>
                      <div className="text-sm text-muted-foreground">I've booked with you before</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="font-display text-xl text-primary text-center mb-6">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-body font-medium text-primary mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Background Information (conditional) */}
            {currentStep === 3 && formData.hasBookedBefore === 'no' && (
              <div className="space-y-6">
                <h3 className="font-display text-xl text-primary text-center mb-6">
                  Background Information
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body font-medium text-primary mb-2">Age *</label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                        placeholder="Your age"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-primary mb-2">Occupation *</label>
                      <input
                        type="text"
                        value={formData.occupation}
                        onChange={(e) => handleInputChange('occupation', e.target.value)}
                        className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                        placeholder="Your occupation"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">Reason for Consultation *</label>
                    <textarea
                      value={formData.reasonForConsultation}
                      onChange={(e) => handleInputChange('reasonForConsultation', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      rows={3}
                      placeholder="Please describe what brings you to seek consultation..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">Previous Therapy Experience</label>
                    <textarea
                      value={formData.previousTherapy}
                      onChange={(e) => handleInputChange('previousTherapy', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      rows={2}
                      placeholder="Describe any previous therapy or counseling experience (or write 'None')"
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">Current Medication</label>
                    <textarea
                      value={formData.currentMedication}
                      onChange={(e) => handleInputChange('currentMedication', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      rows={2}
                      placeholder="List any current medications (or write 'None')"
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">Goals for Therapy *</label>
                    <textarea
                      value={formData.goalsForTherapy}
                      onChange={(e) => handleInputChange('goalsForTherapy', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      rows={3}
                      placeholder="What would you like to achieve through therapy?"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Progress and Updates (returning clients) */}
            {currentStep === 3 && formData.hasBookedBefore === 'yes' && (
              <div className="space-y-6">
                <h3 className="font-display text-xl text-primary text-center mb-6">
                  Progress and Updates
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">How have you been since your last session? *</label>
                    <textarea
                      value={formData.sinceLastSession}
                      onChange={(e) => handleInputChange('sinceLastSession', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      rows={3}
                      placeholder="Please describe how you've been feeling and any changes since our last session..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">Any changes in your situation?</label>
                    <textarea
                      value={formData.situationChanges}
                      onChange={(e) => handleInputChange('situationChanges', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      rows={2}
                      placeholder="Any changes in work, relationships, living situation, etc. (or write 'None')"
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">Medication updates</label>
                    <textarea
                      value={formData.medicationUpdates}
                      onChange={(e) => handleInputChange('medicationUpdates', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      rows={2}
                      placeholder="Any changes to your medications or side effects to report (or write 'None')"
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-primary mb-2">What would you like today's session to focus on? *</label>
                    <textarea
                      value={formData.todaysFocus}
                      onChange={(e) => handleInputChange('todaysFocus', e.target.value)}
                      className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder:text-muted-foreground"
                      rows={3}
                      placeholder="What specific topics or issues would you like to discuss in this session?"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Scheduling Preferences */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="font-display text-xl text-primary text-center mb-6">
                  Scheduling Preferences
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body font-medium text-primary mb-2">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-primary mb-2">Preferred Time</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                        className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      >
                        <option value="">Select time preference</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                        <option value="evening">Evening (5 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-body text-sm text-foreground mb-3">
                      <strong>Note:</strong> If you don't specify preferences, we'll contact you to schedule at a mutually convenient time.
                    </p>
                    <div className="border-t border-accent/20 pt-3">
                      <p className="font-body text-sm text-accent font-medium">
                        <span className="font-semibold">🌐 Online Sessions:</span> All consultations are conducted via secure video call for your comfort and convenience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              {currentStep > 1 && (
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="flex items-center glass-button hover-3d-subtle"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
              )}
              
              {currentStep < totalSteps && (
                <Button
                  onClick={nextStep}
                  disabled={!validateStep(currentStep)}
                  className="ml-auto flex items-center glass-button hover-3d-subtle"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
              
              {currentStep === totalSteps && (
                <Button
                  onClick={handleSubmit}
                  className="ml-auto flex items-center glass-button hover-3d-subtle bg-primary hover:bg-primary/90"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Submit Request
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Booking;