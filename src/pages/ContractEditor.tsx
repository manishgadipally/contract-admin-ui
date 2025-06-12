
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Save, User, MapPin, Calendar, DollarSign, CreditCard, Settings } from 'lucide-react';

// Simple initial contract data for now
const initialContractData = {
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
  }
};

const ContractEditor = () => {
  const [contractData, setContractData] = useState(initialContractData);
  const [activeSection, setActiveSection] = useState('parties');

  const handleSave = () => {
    console.log('Saving contract data:', contractData);
    // Handle save logic here
  };

  const sections = [
    { id: 'parties', label: 'Parties', icon: User },
    { id: 'location', label: 'Location & Place', icon: MapPin },
    { id: 'dates', label: 'Contract Dates', icon: Calendar },
    { id: 'rates', label: 'Rates & Amounts', icon: DollarSign },
    { id: 'payment', label: 'Payment Plan', icon: CreditCard },
    { id: 'misc', label: 'Miscellaneous', icon: Settings },
  ];

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
                {activeSection === 'parties' && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Contract Parties</CardTitle>
                      <CardDescription>
                        Manage sender and receiver information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Sender</h3>
                          <p>{contractData.sender.firstName} {contractData.sender.lastName}</p>
                          <p className="text-gray-600">{contractData.sender.email}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Receiver</h3>
                          <p>{contractData.receiver.firstName} {contractData.receiver.lastName}</p>
                          <p className="text-gray-600">{contractData.receiver.email}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {activeSection !== 'parties' && (
                  <Card>
                    <CardHeader>
                      <CardTitle>{sections.find(s => s.id === activeSection)?.label}</CardTitle>
                      <CardDescription>
                        This section is under development.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">Content for {activeSection} section will be implemented here.</p>
                    </CardContent>
                  </Card>
                )}
                
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
