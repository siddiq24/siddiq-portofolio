import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Model = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Ambil ukuran parent div
        const container = mountRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Setup Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(0, 1, 3); // Posisi kamera di depan model

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Tambahkan Cahaya
        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7);
        scene.add(directionalLight);

        // Load Model
        const loader = new GLTFLoader();
        loader.load('/models/model.glb', (gltf) => {
            const model = gltf.scene;
            model.scale.set(1.8, 1.8, 1.8); // Sesuaikan ukuran model
            model.position.set(0, 1, 0); // Pastikan model ada di tengah
            scene.add(model);

            // Animasi render
            const animate = () => {
                requestAnimationFrame(animate);
                model.rotation.y += 0.001; // Rotasi model
                renderer.render(scene, camera);
            };
            animate();
        });

        // Resize handler agar canvas tetap fleksibel
        const handleResize = () => {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            renderer.setSize(newWidth, newHeight);
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={mountRef} style={{
            width: '100%',
            height: 'auto', // Bisa diubah sesuai kebutuhan
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // border: '1px solid #ccc'
            className:'sm:none'
        }} />
    );
};

export default Model;
