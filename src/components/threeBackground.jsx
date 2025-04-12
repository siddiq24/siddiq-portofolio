import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();
        const starTexture = textureLoader.load('../public/star.png');
        const material = new THREE.PointsMaterial({ 
            map: starTexture, 
            size: 20, 
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false 
        });
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.z = 3;
        camera.lookAt(scene.position);
        
        // State untuk mouse
        let isMouseDown = false;
        let mouseX = 0;
        let mouseY = 0;
        
        // Star Field di sekitar galaxy
        const geometry = new THREE.BufferGeometry();
        const starCount = 5000;
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
        
        const starField = new THREE.Points(geometry, material);
        scene.add(starField);
        starTexture.onError = (err) => {
            console.error('Gagal memuat tekstur:', err);
        };
    
        // Mouse Controls
        const handleMouseDown = (e) => {
            isMouseDown = true;
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
    
        const handleMouseUp = () => {
            isMouseDown = false;
        };
    
        const handleMouseMove = (e) => {
            if (isMouseDown) {
                const deltaX = (e.clientX - mouseX) * 0.001;
                const deltaY = (e.clientY - mouseY) * -0.001;
                starField.rotation.y -= deltaX;
                starField.rotation.x += deltaY;
                camera.lookAt(scene.position);
                mouseX = e.clientX;
                mouseY = e.clientY;
            } else {
                const deltaX = (e.clientX - mouseX) * 0.0002;
                const deltaY = (e.clientY - mouseY) * -0.0002;
                starField.rotation.y -= deltaX;
                starField.rotation.x += deltaY;
                camera.lookAt(scene.position);
                mouseX = e.clientX;
                mouseY = e.clientY;
            }
        };
    
        // Scroll untuk vertikal
        const handleWheel = (e) => {
            starField.rotation.x += e.deltaY * 0.002;
            // camera.lookAt(scene.position);
        };
    
        // Event listeners
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('wheel', handleWheel);
    
        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
    
            // Rotasi untuk efek spiral galaksi
            starField.rotation.x += 0.001;
            starField.rotation.y += 0.001;
    
            renderer.render(scene, camera);
        };
    
        animate();
    
        // Cleanup
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('wheel', handleWheel);
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
