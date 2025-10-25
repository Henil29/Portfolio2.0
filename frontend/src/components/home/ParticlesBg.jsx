
import { useEffect, useRef } from 'react'

const ParticlesBg = () => {
    const canvasRef = useRef(null)
    const animationRef = useRef(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d', { alpha: true })
        if (!ctx) return

        const particles = []
        const sparkles = []
        const MAX_PARTICLES = 160
        const MAX_SPARKLES = 70

        const resizeCanvas = () => {
            const { innerWidth, innerHeight, devicePixelRatio } = window
            const dpr = Math.min(2, devicePixelRatio || 1)
            canvas.width = innerWidth * dpr
            canvas.height = innerHeight * dpr
            canvas.style.width = `${innerWidth}px`
            canvas.style.height = `${innerHeight}px`
            ctx.setTransform(1, 0, 0, 1, 0, 0)
            ctx.scale(dpr, dpr)
            particles.splice(0, particles.length)
            sparkles.splice(0, sparkles.length)
            initParticles()
            initSparkles()
        }

        const createGradient = () => {
            const { innerWidth, innerHeight } = window
            const gradient = ctx.createRadialGradient(
                innerWidth * 0.5,
                innerHeight * 0.55,
                innerWidth * 0.1,
                innerWidth * 0.5,
                innerHeight * 0.55,
                Math.max(innerWidth, innerHeight) * 0.9
            )
            gradient.addColorStop(0, 'rgba(25, 25, 30, 0.7)');
            gradient.addColorStop(0.4, 'rgba(10, 10, 15, 0.9)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
            return gradient
        }

        const initParticles = () => {
            const { innerWidth, innerHeight } = window
            for (let i = 0; i < MAX_PARTICLES; i++) {
                particles.push({
                    x: Math.random() * innerWidth,
                    y: Math.random() * innerHeight,
                    size: Math.random() * 2.2 + 0.4,
                    baseAlpha: Math.random() * 0.6 + 0.2,
                    alphaOffset: Math.random() * Math.PI * 2,
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: Math.random() * 0.35 + 0.05,
                })
            }
        }

        const initSparkles = () => {
            const { innerWidth, innerHeight } = window
            for (let i = 0; i < MAX_SPARKLES; i++) {
                sparkles.push({
                    x: Math.random() * innerWidth,
                    y: Math.random() * innerHeight,
                    radius: Math.random() * 1.4 + 0.2,
                    alpha: Math.random() * 0.5 + 0.3,
                    twinkleSpeed: Math.random() * 0.08 + 0.02,
                    twinklePhase: Math.random() * Math.PI * 2,
                })
            }
        }

        const drawParticles = (time) => {
            const { innerWidth, innerHeight } = window
            const gradient = createGradient()
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, innerWidth, innerHeight)

            ctx.save()
            ctx.globalCompositeOperation = 'lighter'
            particles.forEach((particle, index) => {
                const alpha =
                    particle.baseAlpha + Math.sin(time * 0.002 + particle.alphaOffset) * 0.2
                ctx.fillStyle = `rgba(230, 233, 255, ${Math.max(0, Math.min(alpha, 1))})`
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fill()

                particle.x += particle.speedX
                particle.y += particle.speedY

                if (particle.x < -20 || particle.x > innerWidth + 20 || particle.y > innerHeight + 20) {
                    particles[index] = {
                        ...particle,
                        x: Math.random() * innerWidth,
                        y: -10,
                        size: Math.random() * 2.1 + 0.4,
                        baseAlpha: Math.random() * 0.7 + 0.2,
                    }
                }
            })
            ctx.restore()

            sparkles.forEach((sparkle) => {
                const alpha = sparkle.alpha + Math.sin(time * sparkle.twinkleSpeed + sparkle.twinklePhase) * 0.35
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(alpha, 0.9))})`
                ctx.beginPath()
                ctx.arc(sparkle.x, sparkle.y, sparkle.radius, 0, Math.PI * 2)
                ctx.fill()
            })

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)'
            ctx.lineWidth = 1
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 110) {
                        ctx.globalAlpha = 1 - dist / 110
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
            ctx.globalAlpha = 1
        }

        const render = (time) => {
            drawParticles(time || 0)
            animationRef.current = requestAnimationFrame(render)
        }

        resizeCanvas()
        render(0)
        window.addEventListener('resize', resizeCanvas)

        return () => {
            cancelAnimationFrame(animationRef.current)
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return <canvas ref={canvasRef} className='absolute inset-0 h-full w-full pointer-events-none select-none' />
}

export default ParticlesBg