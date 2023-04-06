import { useState } from "react";

function Text({content }) {
    const [expanded, setExpanded] = useState(false);
    const words = content.split(" ");
    const displayText = expanded ? words.join(" ") : words.slice(0, 50).join(" ") + "…";
  
    return (
      <div>
        <p>{displayText}</p>
        {!expanded && (
          <button onClick={() => setExpanded(true)}>…</button>
        )}
      </div>
    );
  }
  
  
export default Text  