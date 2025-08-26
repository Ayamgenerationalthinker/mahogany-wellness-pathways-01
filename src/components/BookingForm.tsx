import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, User, Calendar, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const BookingForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    clientType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    reasonForVisit: '',
    preferredDate: '',
    preferredTime: '',
    emergencyContact: '',
    medications: '',
    allergies: '',
    previousTreatment: ''
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Appointment Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    // Reset form
    setCurrentStep(1);
    setFormData({
      clientType: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      reasonForVisit: '',
      preferredDate: '',
      preferredTime: '',
      emergencyContact: '',
      medications: '',
      allergies: '',
      previousTreatment: ''
    });
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-warm">
      <CardHeader>
        <CardTitle className="font-display text-2xl text-center text-primary">
          Book Your Appointment
        </CardTitle>
        <p className="text-center font-body text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </p>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Step 1: Client Type */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="font-display text-xl text-primary text-center mb-6">
              Are you a new or returning client?
            </h3>
            <div className="space-y-4">
              <Button
                variant={formData.clientType === 'new' ? 'default' : 'outline'}
                onClick={() => handleInputChange('clientType', 'new')}
                className="w-full justify-start text-left p-6 h-auto"
              >
                <User className="w-5 h-5 mr-3" />
                <div>
                  <div className="font-semibold">New Client</div>
                  <div className="text-sm opacity-70">First time visiting our practice</div>
                </div>
              </Button>
              
              <Button
                variant={formData.clientType === 'returning' ? 'default' : 'outline'}
                onClick={() => handleInputChange('clientType', 'returning')}
                className="w-full justify-start text-left p-6 h-auto"
              >
                <User className="w-5 h-5 mr-3" />
                <div>
                  <div className="font-semibold">Returning Client</div>
                  <div className="text-sm opacity-70">I've been seen here before</div>
                </div>
              </Button>
            </div>
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
                  className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block font-body font-medium text-primary mb-2">Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className="block font-body font-medium text-primary mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block font-body font-medium text-primary mb-2">Date of Birth *</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Appointment Details */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="font-display text-xl text-primary text-center mb-6">
              Appointment Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block font-body font-medium text-primary mb-2">Reason for Visit *</label>
                <textarea
                  value={formData.reasonForVisit}
                  onChange={(e) => handleInputChange('reasonForVisit', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                  placeholder="Please describe your reason for seeking care..."
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body font-medium text-primary mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block font-body font-medium text-primary mb-2">Preferred Time</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select time preference</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Medical History */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="font-display text-xl text-primary text-center mb-6">
              Medical Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block font-body font-medium text-primary mb-2">Current Medications</label>
                <textarea
                  value={formData.medications}
                  onChange={(e) => handleInputChange('medications', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={2}
                  placeholder="List any current medications (or write 'None')"
                />
              </div>
              <div>
                <label className="block font-body font-medium text-primary mb-2">Allergies</label>
                <textarea
                  value={formData.allergies}
                  onChange={(e) => handleInputChange('allergies', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={2}
                  placeholder="List any allergies (or write 'None')"
                />
              </div>
              <div>
                <label className="block font-body font-medium text-primary mb-2">Previous Mental Health Treatment</label>
                <textarea
                  value={formData.previousTreatment}
                  onChange={(e) => handleInputChange('previousTreatment', e.target.value)}
                  className="w-full p-3 border border-border rounded-lg font-body focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={2}
                  placeholder="Brief description of any previous treatment (or write 'None')"
                />
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
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
          )}
          
          {currentStep < totalSteps && (
            <Button
              onClick={nextStep}
              disabled={currentStep === 1 && !formData.clientType}
              className="ml-auto flex items-center"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
          
          {currentStep === totalSteps && (
            <Button
              onClick={handleSubmit}
              className="ml-auto flex items-center bg-primary hover:bg-primary/90"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Submit Request
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};