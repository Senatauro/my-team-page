import "./App.css";

import members from "./data/members";
import TeamMember from "./components/TeamMember/TeamMember";

function App() {
  return (
    <div className="page">
      <div className="my-team">
        <h1 className="my-team-title">The creative crew</h1>
        <div className="my-team-info">
          <h3 className="my-team-info-header">Who we are</h3>
          <p className="my-team-info-body">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>
      <div className="my-team-members">
        <div className="t1">
          <TeamMember member={members[0]} />
        </div>
        <div className="t2">
          <TeamMember member={members[1]} />
        </div>
        <div className="t3">
          <TeamMember member={members[2]} />
        </div>
        <div className="t4">
          <TeamMember member={members[3]} />
        </div>
        <div className="t5">
          <TeamMember member={members[4]} />
        </div>
        <div className="t6">
          <TeamMember member={members[5]} />
        </div>
      </div>

      <footer>
        created by <a href="https://senatauro.github.io/">Senatauro</a> -
        devChallenges.io
      </footer>
    </div>
  );
}

export default App;
