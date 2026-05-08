import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { SynthesisPage } from "./pages/SynthesisPage";
import { IntervieweePage } from "./pages/IntervieweePage";
import { IntervieweesPage } from "./pages/IntervieweesPage";
import { ProcessPage } from "./pages/ProcessPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Router hook={useHashLocation}>
      <div className="min-h-screen bg-paper text-ink font-sans">
        <Switch>
          <Route path="/" component={SynthesisPage} />
          <Route path="/interviewees" component={IntervieweesPage} />
          <Route path="/interviewee/:id" component={IntervieweePage} />
          <Route path="/process" component={ProcessPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}
