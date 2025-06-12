
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Save, User, MapPin, Calendar, DollarSign, CreditCard, Settings } from 'lucide-react';

// Contract data interface
interface ContractData {
  contractIdentifier: string;
  contractStatus: string;
  contractType: string;
  sender: {
    firstName: string;
    lastName: string;
    email: string;
  };
  receiver: {
    firstName: string;
    lastName: string;
    email: string;
  };
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  dates: {
    startDate: string;
    endDate: string;
    signedDate: string;
  };
  rates: {
    hourlyRate: string;
    totalAmount: string;
    currency: string;
  };
  payment: {
    paymentMethod: string;
    paymentSchedule: string;
    accountNumber: string;
  };
  misc: {
    notes: string;
    terms: string;
  };
}

// Initial contract data
const initialContractData: ContractData = {
  contractIdentifier: "CID-E3E1780F83",
  contractStatus: "Completed",
  contractType: "Basic",
  sender: {
    firstName: "JamesCameron",
    lastName: "V",
    email: "cameron@gmail.com"
  },
  receiver: {
    firstName: "Sai Teja",
    lastName: "Kotagiri",
    email: "samjose@gmail.com"
  },
  location: {
    address: "123 Main Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102"
  },
  dates: {
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    signedDate: "2024-01-01"
  },
  rates: {
    hourlyRate: "75",
    totalAmount: "150000",
    currency: "USD"
  },
  payment: {
    paymentMethod: "Bank Transfer",
    paymentSchedule: "Monthly",
    accountNumber: "****1234"
  },
  misc: {
    notes: "Standard contract terms apply",
    terms: "Net 30 payment terms"
  }
};

const ContractEditor = () => {
  const [contractData, setContractData] = useState<ContractData>(initialContractData);
  const [activeSection, setActiveSection] = useState('parties');
  const { toast } = useToast();

  const handleSave = () => {
    console.log('Saving contract data:', contractData);
    toast({
      title: "Contract Saved",
      description: "All changes have been saved successfully.",
    });
  };

  const updateContractData = (section: keyof ContractData, field: string, value: string) => {
    setContractData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const sections = [
    { id: 'parties', label: 'Parties', icon: User },
    { id: 'location', label: 'Location & Place', icon: MapPin },
    { id: 'dates', label: 'Contract Dates', icon: Calendar },
    { id: 'rates', label: 'Rates & Amounts', icon: DollarSign },
    { id: 'payment', label: 'Payment Plan', icon: CreditCard },
    { id: 'misc', label: 'Miscellaneous', icon: Settings },
  ];

  const renderPartiesSection = () => (
    <Card>
      <CardHeader>
        <CardTitle>Contract Parties</CardTitle>
        <CardDescription>Manage sender and receiver information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Sender</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="senderFirstName">First Name</Label>
              <Input
                id="senderFirstName"
                value={contractData.sender.firstName}
                onChange={(e) => updateContractData('sender', 'firstName', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="senderLastName">Last Name</Label>
              <Input
                id="senderLastName"
                value={contractData.sender.lastName}
                onChange={(e) => updateContractData('sender', 'lastName', e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="senderEmail">Email</Label>
              <Input
                id="senderEmail"
                type="email"
                value={contractData.sender.email}
                onChange={(e) => updateContractData('sender', 'email', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Receiver</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="receiverFirstName">First Name</Label>
              <Input
                id="receiverFirstName"
                value={contractData.receiver.firstName}
                onChange={(e) => updateContractData('receiver', 'firstName', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="receiverLastName">Last Name</Label>
              <Input
                id="receiverLastName"
                value={contractData.receiver.lastName}
                onChange={(e) => updateContractData('receiver', 'lastName', e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="receiverEmail">Email</Label>
              <Input
                id="receiverEmail"
                type="email"
                value={contractData.receiver.email}
                onChange={(e) => updateContractData('receiver', 'email', e.target.value)}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderLocationSection = () => (
    <Card>
      <CardHeader>
        <CardTitle>Location & Place</CardTitle>
        <CardDescription>Contract location and address details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={contractData.location.address}
              onChange={(e) => updateContractData('location', 'address', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={contractData.location.city}
              onChange={(e) => updateContractData('location', 'city', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              value={contractData.location.state}
              onChange={(e) => updateContractData('location', 'state', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="zipCode">ZIP Code</Label>
            <Input
              id="zipCode"
              value={contractData.location.zipCode}
              onChange={(e) => updateContractData('location', 'zipCode', e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderDatesSection = () => (
    <Card>
      <CardHeader>
        <CardTitle>Contract Dates</CardTitle>
        <CardDescription>Important contract dates and timeline</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={contractData.dates.startDate}
              onChange={(e) => updateContractData('dates', 'startDate', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              type="date"
              value={contractData.dates.endDate}
              onChange={(e) => updateContractData('dates', 'endDate', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="signedDate">Signed Date</Label>
            <Input
              id="signedDate"
              type="date"
              value={contractData.dates.signedDate}
              onChange={(e) => updateContractData('dates', 'signedDate', e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderRatesSection = () => (
    <Card>
      <CardHeader>
        <CardTitle>Rates & Amounts</CardTitle>
        <CardDescription>Financial details and pricing information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="hourlyRate">Hourly Rate</Label>
            <Input
              id="hourlyRate"
              type="number"
              value={contractData.rates.hourlyRate}
              onChange={(e) => updateContractData('rates', 'hourlyRate', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="totalAmount">Total Amount</Label>
            <Input
              id="totalAmount"
              type="number"
              value={contractData.rates.totalAmount}
              onChange={(e) => updateContractData('rates', 'totalAmount', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="currency">Currency</Label>
            <Input
              id="currency"
              value={contractData.rates.currency}
              onChange={(e) => updateContractData('rates', 'currency', e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderPaymentSection = () => (
    <Card>
      <CardHeader>
        <CardTitle>Payment Plan</CardTitle>
        <CardDescription>Payment method and schedule details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="paymentMethod">Payment Method</Label>
            <Input
              id="paymentMethod"
              value={contractData.payment.paymentMethod}
              onChange={(e) => updateContractData('payment', 'paymentMethod', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="paymentSchedule">Payment Schedule</Label>
            <Input
              id="paymentSchedule"
              value={contractData.payment.paymentSchedule}
              onChange={(e) => updateContractData('payment', 'paymentSchedule', e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input
              id="accountNumber"
              value={contractData.payment.accountNumber}
              onChange={(e) => updateContractData('payment', 'accountNumber', e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderMiscSection = () => (
    <Card>
      <CardHeader>
        <CardTitle>Miscellaneous</CardTitle>
        <CardDescription>Additional notes and terms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Input
              id="notes"
              value={contractData.misc.notes}
              onChange={(e) => updateContractData('misc', 'notes', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="terms">Terms</Label>
            <Input
              id="terms"
              value={contractData.misc.terms}
              onChange={(e) => updateContractData('misc', 'terms', e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'parties':
        return renderPartiesSection();
      case 'location':
        return renderLocationSection();
      case 'dates':
        return renderDatesSection();
      case 'rates':
        return renderRatesSection();
      case 'payment':
        return renderPaymentSection();
      case 'misc':
        return renderMiscSection();
      default:
        return renderPartiesSection();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Contract Editor</h1>
          <div className="flex items-center mt-2 space-x-4">
            <Badge variant="secondary">Contract ID: {contractData.contractIdentifier}</Badge>
            <Badge variant="outline">Status: {contractData.contractStatus}</Badge>
            <Badge variant="outline">Type: {contractData.contractType}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sections</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-none hover:bg-gray-50 transition-colors ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                            : 'text-gray-600'
                        }`}
                      >
                        <Icon className="mr-3 h-4 w-4" />
                        {section.label}
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="space-y-6">
                {renderActiveSection()}
                
                <Separator />
                
                {/* Save Button */}
                <div className="flex justify-end pt-6">
                  <Button onClick={handleSave} size="lg" className="px-8">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractEditor;
