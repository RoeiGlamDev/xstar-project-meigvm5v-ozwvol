import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
const FloatingElements: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);/
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement)
    }

    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshStandardMaterial({ color: 0xFFA500 }); // Orange color/
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 5, 5).normalize()
    scene.add(light)
    camera.position.z = 5
    const animate = () => {
      requestAnimationFrame(animate)
      sphere.position.y = Math.sin(Date.now()  0.002)  1.5; // Floating effect/
      sphere.rotation.x += 0.01
      sphere.rotation.y += 0.01
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
    <div ref={mountRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <motion.div
        className="absolute top-2 left-2 text-orange-600 font-bold text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        GlamCS
      </motion.div>/
      <motion.div
        className="absolute bottom-2 right-2 text-white text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Elevate Your Beauty with GlamCS
      </motion.div>/
    </div>/
  )
}
export default FloatingElements;