import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        let renderer, scene, camera, starField;

        const handleMouseDown = (e) => {
            isMouseDown = true;
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseUp = () => { isMouseDown = false; };

        const handleMouseMove = (e) => {
            const deltaX = (e.clientX - mouseX) * 0.0005;
            const deltaY = (e.clientY - mouseY) * -0.0005;
            if (starField) {
                starField.rotation.y -= deltaX;
                starField.rotation.x += deltaY;
            }
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleWheel = (e) => {
            if (starField) {
                starField.rotation.x += e.deltaY * 0.002;
            }
        };

        let isMouseDown = false, mouseX = 0, mouseY = 0;

        const animate = () => {
            requestAnimationFrame(animate);
            if (starField) {
                starField.rotation.x += 0.001;
                starField.rotation.y += 0.001;
            }
            renderer?.render(scene, camera);
        };

        const initScene = (starTexture) => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
            camera.position.z = 3;

            renderer = new THREE.WebGLRenderer({ canvas, preserveDrawingBuffer: false });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.debug.checkShaderErrors = true;

            const material = new THREE.PointsMaterial({ 
                map: starTexture, 
                size: 20, 
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false 
            });

            const geometry = new THREE.BufferGeometry();
            const starCount = 3000;
            const positions = new Float32Array(starCount * 3);
            const radius = 2000;

            for (let i = 0; i < starCount; i++) {
                const theta = Math.random() * 2 * Math.PI;
                const r = radius * Math.sqrt(Math.random());
                positions[i * 3] = r * Math.cos(theta);
                positions[i * 3 + 1] = r * Math.sin(theta);
                positions[i * 3 + 2] = (Math.random() - 0.5) * 4000;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            starField = new THREE.Points(geometry, material);
            scene.add(starField);

            animate();
        };

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            '/star.png',
            (texture) => {
                initScene(texture);
            },
            undefined,
            (error) => {
                console.error('❌ Texture load error:', error);
            }
        );

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('wheel', handleWheel);
            renderer?.dispose?.();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        />
    );
};

export default ThreeBackground;
