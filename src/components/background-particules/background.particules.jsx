import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particulesConfig from "./particules-config";

const ParticulesBackground = () => {
    const particlesInit = async (main) =>  await loadFull(main);
    return <Particles id="tsparticles" init={particlesInit} options={particulesConfig} />
} 
export default ParticulesBackground;