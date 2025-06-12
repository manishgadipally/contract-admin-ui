
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Edit, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contract Management System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive admin interface for viewing and editing contract details, 
            managing payment plans, and tracking contract progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/contract-editor')}>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Edit className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Contract Editor</CardTitle>
              <CardDescription>
                Edit all aspects of contracts including parties, dates, rates, and payment plans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" onClick={() => navigate('/contract-editor')}>
                Open Editor
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Contract Viewer</CardTitle>
              <CardDescription>
                View contract details in a read-only format with beautiful formatting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Contract Templates</CardTitle>
              <CardDescription>
                Manage and create reusable contract templates for different scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Contract Management</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Edit sender and receiver information</li>
                  <li>• Manage addresses and contact details</li>
                  <li>• Category selection and signatures</li>
                  <li>• Contract dates and recurrence rules</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Payment Management</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Dynamic payment tranche creation</li>
                  <li>• Working dates and hours tracking</li>
                  <li>• Payment status management</li>
                  <li>• Notes and comments system</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
