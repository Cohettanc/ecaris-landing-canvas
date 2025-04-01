
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from "@/components/ui/button";
import { InfoIcon } from 'lucide-react';

const DataGovernanceCTA = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="heading-md mb-6 text-gray-900">Ready to Transform Your Data Strategy?</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
          Contact our team to discuss how our Data Governance and Data Products services can help your organization 
          unlock the full potential of your data assets and drive informed decision-making.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-ecaris-green hover:bg-ecaris-green/90 text-white px-8 py-6 rounded-md text-lg"
          >
            Contact Us Today
          </Button>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Free Assessment <InfoIcon className="ml-2 h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h3 className="font-medium">Data Maturity Assessment</h3>
                <p className="text-sm text-gray-500">
                  Our complimentary assessment evaluates your organization's current data capabilities and identifies opportunities for improvement.
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-full bg-ecaris-green hover:bg-ecaris-green/90">Request Assessment</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Request Assessment</AlertDialogTitle>
                      <AlertDialogDescription>
                        Thank you for your interest in our Data Maturity Assessment. Please contact us through the contact form below for more information.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Go to Contact
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default DataGovernanceCTA;
