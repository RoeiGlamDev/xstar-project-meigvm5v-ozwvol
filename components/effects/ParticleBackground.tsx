import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
const ParticleBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);/
        const renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement)
        }

        const particles: THREE.Points[] = []
        const particleCount = 500
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)
        for (let i = 0; i < particleCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  10
            positions[i  3 + 1] = (Math.random() - 0.5)  10
            positions[i  3 + 2] = (Math.random() - 0.5)  10
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const sprite = new THREE.TextureLoader().load('path/to/your/particle/texture.png');/
        const material = new THREE.PointsMaterial({ size: 0.2, map: sprite, transparent: true })
        const particlesMesh = new THREE.Points(geometry, material)
        scene.add(particlesMesh)
        particles.push(particlesMesh)
        camera.position.z = 5
        const animate = () => {
            requestAnimationFrame(animate)
            particles.forEach((particle) => {
                particle.rotation.y += 0.001
            })
            renderer.render(scene, camera)
        }
        animate()
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement)
            }
        }
    }, [])
    return (
        <div ref={mountRef} className="absolute top-0 left-0 w-full h-full">
            <motion.div 
                className="flex items-center justify-center h-full"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
            >
                <h1 className="text-6xl font-bold text-orange-500 hover:text-white transition-colors duration-300">
                    GlamCS
                </h1>/
                <p className="mt-4 text-lg text-white">
                    Experience the luxury of GlamCS cosmetics. Elevate your beauty with our premium products crafted for the modern individual.
                </p>/
            </motion.div>/
        </div>/
    )
}
export default ParticleBackground;