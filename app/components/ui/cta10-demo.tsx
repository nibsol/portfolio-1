import { Cta10 } from "@/app/components/ui/cta10"

const demoData = {
  heading: "Ready to Transform Your Business with Nibsol?",
  description:
    "Join innovative businesses using our AI solutions to automate processes, enhance learning experiences, and build powerful SaaS products.",
  buttons: {
    primary: {
      text: "Get Started",
      url: "/contact",
    },
    secondary: {
      text: "Learn More",
      url: "/ai",
    },
  },
};

function Cta10Demo() {
  return <Cta10 {...demoData} />;
}

export { Cta10Demo }; 