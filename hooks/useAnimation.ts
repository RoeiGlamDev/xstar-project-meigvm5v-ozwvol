import { useEffect, useRef, useState } from 'react'
/
 * Custom hook formanaging animations in the GlamCS cosmetics website.
 * This hook provides a smooth animation experience using CSS transitions for a modern, high-end feel.
 * 
 * @param {string} animationClass - The CSS class that defines the animation effect.
 * @param {boolean} trigger - A boolean value that triggers the animation when set to true.
 * @returns {string} - The current animation class for the component.
 */
export function useAnimation(animationClass: string, trigger: boolean): string {
    const [currentAnimation, setCurrentAnimation] = useState<string>(animationClass)
    const animationRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (trigger) {
            // Apply the animation class/
            setCurrentAnimation(${animationClass} animate)
            // Remove the animation class after it completes to allow re-triggering/
            const handleAnimationEnd = () => {
                setCurrentAnimation(animationClass)
            }
            const node = animationRef.current
            if (node) {
                node.addEventListener('animationend', handleAnimationEnd)
            }

            return () => {
                if (node) {
                    node.removeEventListener('animationend', handleAnimationEnd)
                }
            }
        }
    }, [animationClass, trigger])
    return currentAnimation
}

/
 * GlamCSAnimationProps interface defines the properties for 
 * the animation component in the GlamCS cosmetics website.
 */
export interface GlamCSAnimationProps {
    animationClass: string; // The CSS class for the animation/
    trigger: boolean; // Trigger for the animation effect/
}

/
 * GlamCS specific hook formanaging complex animations in the cosmetics context.
 * 
 * @returns {GlamCSAnimationProps} - The animation properties for GlamCS components.
 */
export const useGlamCSAnimation = (): GlamCSAnimationProps => {
    const [trigger, setTrigger] = useState<boolean>(false)
    const toggleAnimation = () => {
        setTrigger(prev => !prev)
    }
    return {
        animationClass: 'glamcs-animation',
        trigger,
    }
};