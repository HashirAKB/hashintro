"use client"
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [backgroundShapes, setBackgroundShapes] = useState([])

  useEffect(() => {
    const shapes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 50 + 20,
    }))
    setBackgroundShapes(shapes)
  }, [])

  const slides = [
    {
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Hashir Ahmed KB</h2>
          <h3 className="text-xl">Full Stack Engineer</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Fullstack developer with nearly 3 years of experience</li>
            <li>Specialized in JavaScript-based technologies, primarily in MERN stack</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
              <Phone className="mr-2 h-4 w-4" />
              963-307-8242
            </Button>
            <Button variant="outline" size="sm" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
              <Mail className="mr-2 h-4 w-4" />
              ahmedhashir96@gmail.com
            </Button>
            <Button variant="outline" size="sm" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
              <Github className="mr-2 h-4 w-4" />
              github.com/HashirAKB
            </Button>
            <Button variant="outline" size="sm" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
              <Linkedin className="mr-2 h-4 w-4" />
              linkedin.com/in/hashirakb
            </Button>
          </div>
        </div>
      )
    },
    {
      title: "Educational Background",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Completed computer engineering diploma in 2020</li>
          <li>Certified in MEAN stack after college</li>
        </ul>
      )
    },
    {
      title: "Professional Experience",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Joined UST as a Software Engineer in 2021</li>
            <li>Worked on a client-side project for NetApp, specializing in hybrid cloud storage solutions (similar to AWS)</li>
            <li>Transitioned from Angular to React for client requirements</li>
          </ul>
          <h4 className="font-semibold">Key responsibilities:</h4>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Managed multiple customer-facing dashboards</li>
            <li>Implemented features and fixed bugs on dashboards</li>
            <li>Developed new components for dashboard applications for new or updated devices</li>
            <li>Gained experience in Node.js with Express.js</li>
            <li>Participated in a MongoDB to GraphQL database migration</li>
          </ul>
          <p><strong>Skills developed:</strong> MERN stack, SQL, NoSQL databases, schema design, and backend access</p>
        </div>
      )
    },
    {
      title: "Upskilling",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Resigned from UST after 2.7 years to join an advanced fullstack development cohort (6+ months)</li>
          <li>Explored various technologies: TypeScript, Next.js, REST APIs, ORMs, DevOps, serverless architecture, CI/CD</li>
          <li>Focused on frontend frameworks (TailwindCSS, Shadcn) and performance optimization</li>
          <li>Coded daily and maintained a public GitHub dev journal</li>
        </ul>
      )
    },
    {
      title: "Project: Paytm-like Wallet Application",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <video 
              controls 
              className="w-full h-auto rounded-lg shadow-lg"
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="https://example.com/paytm-wallet-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Backend: Node.js (Express), MongoDB (Mongoose)</li>
              <li>Frontend: ReactJS with Vite, styled using TailwindCSS</li>
              <li>Key features: User authentication, account balances, simulated fund transfers, and profile management</li>
              <li>Utilized libraries: Zod, Bcrypt, Dotenv, Axios (for API requests)</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Button asChild variant="outline" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
                <a href="https://github.com/HashirAKB/Paytm-Wallet" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repo
                </a>
              </Button>
              <Button asChild variant="outline" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
                <a href="https://paytm-l3vn.onrender.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Project: Medium Vanced (Blogging Platform)",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <video 
              controls 
              className="w-full h-auto rounded-lg shadow-lg"
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="https://example.com/medium-vanced-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Backend: Express, PostgreSQL (Prisma ORM), JWT for authentication, Bcrypt for encryption</li>
              <li>Frontend: React with Shadcn-UI, ContextAPI, Recoil for state management</li>
              <li>Serverless deployment: Cloudflare Workers, Cloudflare KV for multimedia storage</li>
              <li>Implemented rich content management, social interactions (like/follow), and secure authentication</li>
              <li>Created custom npm package for type safety using Zod validation</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Button asChild variant="outline" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
                <a href="https://github.com/HashirAKB/Medium" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repo
                </a>
              </Button>
              <Button asChild variant="outline" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
                <a href="https://medium-vanced.vercel.app" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Project: Headphone Store Landing Page",
      content: (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <video 
              controls 
              className="w-full h-auto rounded-lg shadow-lg"
              poster="/placeholder.svg?height=400&width=600"
            >
              <source src="https://example.com/headphone-store-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Built with React, styled using TailwindCSS and Framermotion</li>
              <li>Responsive design</li>
              <li>Animated components and transitions</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Button asChild variant="outline" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
                <a href="https://github.com/HashirAKB/headphone-store" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repo
                </a>
              </Button>
              <Button asChild variant="outline" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
                <a href="https://github.com/HashirAKB/headphone-store" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Deployment",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Utilizes Render and Vercel for deployment</li>
          <li>GitHub for CI/CD</li>
        </ul>
      )
    },
    {
      title: "Certifications",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>GCP Architect specialization (completed during college)</li>
        </ul>
      )
    },
    {
      title: "Personal Interests",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Former book reader, now enjoys podcasts</li>
          <li>Certified yoga trainer</li>
        </ul>
      )
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 relative overflow-hidden">
      {backgroundShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full bg-blue-500 opacity-10"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            x: [0, Math.random() * 20 - 10],
            y: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      <Card className="w-full max-w-4xl h-[600px] flex flex-col bg-gray-800 text-gray-100 relative z-10">
        <CardContent className="flex-grow flex flex-col p-6 overflow-hidden">
          <h2 className="text-3xl font-bold mb-4 text-blue-300">{slides[currentSlide].title}</h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex items-center justify-center overflow-y-auto"
            >
              <div className="max-h-full overflow-y-auto pr-4">
                {slides[currentSlide].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </CardContent>
        <div className="flex justify-between p-4 border-t border-gray-700">
          <Button onClick={prevSlide} variant="outline" size="icon" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-gray-400">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button onClick={nextSlide} variant="outline" size="icon" className="text-gray-900 bg-gray-300 hover:bg-gray-400 hover:text-gray-900">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}