import { useGLTF } from "@react-three/drei";

export function LoadModel({  }) {
    const { scene } = useGLTF('/frankieV6.6.glb');
    
    return (
        <>
            <primitive object={scene}></primitive>
        </>
    )
}
useGLTF.preload('/frankieV6.6.glb');