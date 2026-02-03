import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Services } from './components/Services';
import { Investment } from './components/Investment';
import { Deliverables } from './components/Deliverables';
import { NextSteps } from './components/NextSteps';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <Overview />
      <Services />
      <Investment />
      <Deliverables />
      <NextSteps />
      <Footer />
    </div>
  );
}