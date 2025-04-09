
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, GraduationCap } from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
  isNew?: boolean;
}

const jobPositions: JobPosition[] = [
  {
    id: "senior-cloud-architect",
    title: "Senior Cloud Architect",
    location: "Luxembourg",
    type: "Full-time",
    department: "Cloud Services",
    description: "We are looking for a Senior Cloud Architect to design and implement robust cloud solutions for our clients.",
    requirements: [
      "7+ years of experience with AWS, Azure, or GCP",
      "Strong background in infrastructure as code (Terraform, CloudFormation)",
      "Experience with containerization (Docker, Kubernetes)",
      "Excellent communication skills",
    ],
    isNew: true,
  },
  {
    id: "data-governance-specialist",
    title: "Data Governance Specialist",
    location: "Paris",
    type: "Full-time",
    department: "Data Governance",
    description: "Join our team to help clients establish effective data governance frameworks and policies.",
    requirements: [
      "5+ years of experience in data governance or data management",
      "Knowledge of data privacy regulations (GDPR, CCPA)",
      "Experience with data cataloging and metadata management",
      "Strong analytical and problem-solving skills",
    ],
  },
  {
    id: "erp-consultant",
    title: "ERP Consultant",
    location: "Remote (EU)",
    type: "Full-time",
    department: "ERP Applications",
    description: "Looking for an experienced ERP Consultant to provide implementation and support services to our clients.",
    requirements: [
      "4+ years of experience with major ERP systems (SAP, Oracle)",
      "Strong understanding of business processes",
      "Project management experience",
      "Client-facing consulting experience",
    ],
  },
];

const Careers = () => {
  useEffect(() => {
    // Update document title
    document.title = "Careers | ECARIS";
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Join Our Team
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                Be part of a growing consultancy that values expertise, collaboration, and innovation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Join ECARIS?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                We offer a supportive environment where you can grow your career and make an impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <CardTitle>Challenging Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Work on diverse and challenging projects for leading companies across Europe.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-green-100 text-green-600 mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <CardTitle>Collaborative Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Join a team that values collaboration, knowledge sharing, and mutual support.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-100 text-purple-600 mb-4">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <CardTitle>Continuous Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Benefit from professional development opportunities and stay at the cutting edge of technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Open Positions Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                Explore our current opportunities and find your next career move.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {jobPositions.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {job.location} • {job.type} • {job.department}
                        </CardDescription>
                      </div>
                      {job.isNew && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          New
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button className="bg-ecaris-green hover:bg-ecaris-green/90">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact CTA Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See a Perfect Match?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let's start a conversation.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-ecaris-green hover:bg-ecaris-green/90">
                Send Resume
              </Button>
              <Button variant="outline">
                <Link to="/#contact" className="text-ecaris-green">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
