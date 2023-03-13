import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Cube = () => {
	const ref = useRef();
	useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.02));
	return (
		<mesh
			ref={ref}
			onClick={(e) => console.log('click')}
			onPointerOver={(e) => console.log('hover')}
			onPointerOut={(e) => console.log('unhover')}
		>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshNormalMaterial attach="material" />
		</mesh>
	);
};

const R3f = () => {
	return (
		<Canvas camera={{ position: [0, 0, 3] }}>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Cube />
		</Canvas>
	);
};

export default R3f;
