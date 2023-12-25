import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Environment, Preload } from "@react-three/drei";
import { Perf } from "r3f-perf";
function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
      <Preload all />

      <Perf openByDefault trackGPU={true} position="top-left" />
      <Environment preset="sunset"/>
      <Experience />

      
    </Canvas>
  );
}

export default App;
