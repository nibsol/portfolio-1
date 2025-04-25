import { BrainCircuit, GraduationCap, LineChart, Settings } from "lucide-react";
import { SparklesCore } from "@/app/components/ui/sparkles";

const solutions = [
  {
    title: "AI Automation",
    description: "Streamline your business processes with intelligent automation solutions powered by cutting-edge AI.",
    icon: Settings,
    features: [
      "Intelligent process automation",
      "Workflow optimization",
      "Document processing", 
      "Predictive analytics"
    ],
  },
  {
    title: "EdTech Solutions",
    description: "Transform educational experiences with AI-driven platforms that personalize learning and improve outcomes.",
    icon: GraduationCap,
    features: [
      "Adaptive learning platforms",
      "Automated grading systems",
      "Personalized curriculum design",
      "Student engagement analytics"
    ],
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and applications.",
    icon: BrainCircuit,
    features: [
      "Custom AI model development",
      "API and system integration",
      "Natural language processing",
      "Computer vision systems"
    ],
  },
  {
    title: "Analytics & Insights",
    description: "Extract valuable insights from your data with advanced AI-powered analytics.",
    icon: LineChart,
    features: [
      "Business intelligence dashboards",
      "Predictive modeling",
      "Anomaly detection",
      "Trend analysis and forecasting"
    ],
  },
];

const AISolutions = () => {
  return (
    <section id="ai-solutions" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="sparkles-solutions"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={20}
          className="w-full h-full"
          particleColor="hsl(var(--primary))"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our AI Solutions</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We build tailored AI applications that solve specific business challenges and 
            drive efficiency across your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 transition-all hover:shadow-md hover:shadow-primary/20 hover:border-primary/50"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISolutions; 