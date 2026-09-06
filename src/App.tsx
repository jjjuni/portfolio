import { useState } from "react";
import BootScreen from "./component/bootScreen/BootScreen";
import Background from "./component/mac/Background";
import Content from "./component/mac/Content";
import ProjectWindow from "./component/projects/window/ProjectWindow";
import Window from "./component/window/Window";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState<string | null>(null);

  return (
    <>
      <div id="page" className="w-screen h-[100dvh] select-none">
        <BootScreen>
          <div className={`absolute`}>
            <Background />
          </div>
          <Content setTitle={setTitle} setIsOpen={setIsOpen} />
          <Window title={title} isOpen={isOpen} setIsOpen={setIsOpen} />
          <ProjectWindow />
        </BootScreen>
      </div>
    </>
  );
}

export default App;
