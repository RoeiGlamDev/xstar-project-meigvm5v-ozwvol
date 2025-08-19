import { useRef, useEffect } from 'react'
import * as THREE from 'three'
/
 * Custom hook to create 3D interactions for GlamCS cosmetics website elements.
 * This hook integrates three.js to create modern and elegant 3D effects,
 * enhancing the user experience on GlamCS.
 * 
 * @typedef {Object} GlamCS3DProps
 * @property {string} containerId - The ID of the HTML element to attach the 3D scene.
 * @property {string} modelPath - The path to the 3D model to be displayed.
 * 
 * @param {GlamCS3DProps} props - Properties to configure the 3D scene.
 */
const use3D = ({ containerId, modelPath }: { containerId: string; modelPath: string }) => {
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  useEffect(() => {
    // Setting up the 3D scene/
    const scene = new THREE.Scene()
    sceneRef.current = scene
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);/
    camera.position.z = 5
    cameraRef.current = camera
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById(containerId)?.appendChild(renderer.domElement)
    rendererRef.current = renderer
    // Adding light to the scene/
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(5, 5, 5).normalize()
    scene.add(light)
    // Load the 3D model/
    const loader = new THREE.GLTFLoader()
    loader.load(modelPath, (gltf) => {
      scene.add(gltf.scene)
    }, undefined, (error) => {
      console.error('An error occurred while loading the 3D model:', error)
    })
    const animate = () => {
      requestAnimationFrame(animate)
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }
    animate()
    // Clean up on unmount/
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      sceneRef.current = null
      cameraRef.current = null
      rendererRef.current = null
    }
  }, [containerId, modelPath])
  return { sceneRef, cameraRef, rendererRef }
}
export default use3D;