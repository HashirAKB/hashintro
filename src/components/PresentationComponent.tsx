"use client"
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Hashir Ahmed KB",
      subtitle: "Full Stack Engineer",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Experienced Full Stack Developer with nearly 3 years of experience in designing and building robust, scalable web applications.</p>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              963-307-8242
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              ahmedhashir96@gmail.com
            </Button>
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" />
              github.com/HashirAKB
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="mr-2 h-4 w-4" />
              linkedin.com/in/hashirakb
            </Button>
          </div>
        </div>
      )
    },
    {
      title: "Professional Journey",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Started as a React developer at UST, working on enterprise hybrid cloud storage solutions for NetApp.</p>
          <p className="text-lg">Managed multiple customer-facing dashboards, implemented new features, and fixed bugs.</p>
          <p className="text-lg">Gained experience in Node.js and participated in a DB migration from MongoDB to GraphQL DB.</p>
          <p className="text-lg">After 2.7 years, joined an advanced level full stack development cohort to upskill and explore new technologies.</p>
        </div>
      )
    },
    {
      title: "Key Skills",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside">
                <li>React.js</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Recoil</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="list-disc list-inside">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
                <li>PostgreSQL</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">DevOps</h3>
              <ul className="list-disc list-inside">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>AWS</li>
                <li>CI/CD pipelines</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Other</h3>
              <ul className="list-disc list-inside">
                <li>Serverless Architecture</li>
                <li>Performance Optimization</li>
                <li>Security Best Practices</li>
                <li>Agile Methodologies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: "Side Project: PayTM Wallet",
      content: (
        <div className="space-y-4">
          <p className="text-lg">A digital wallet application inspired by PayTM, simulating real-world financial transactions.</p>
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside">
            <li>User authentication and account management</li>
            <li>Simulated fund transfers between users</li>
            <li>Real-time balance updates</li>
            <li>Secure and responsive user interface</li>
          </ul>
          <h3 className="font-semibold">Technologies Used:</h3>
          <p>Node.js, Express, MongoDB, Mongoose, React, Tailwind CSS, Axios</p>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/HashirAKB/Paytm-Wallet" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub Repo
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://paytm-l3vn.onrender.com" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      )
    },
    {
      title: "Side Project: Medium Vanced",
      content: (
        <div className="space-y-4">
          <p className="text-lg">A comprehensive, full-stack blogging platform inspired by Medium, built from scratch.</p>
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside">
            <li>JWT-based user authentication and management</li>
            <li>Rich text editor for content creation</li>
            <li>Social features: follow/unfollow, like/dislike</li>
            <li>Personalized content feed</li>
            <li>Secure password hashing and credential encryption</li>
          </ul>
          <h3 className="font-semibold">Technologies Used:</h3>
          <p>TypeScript, Express, PostgreSQL, Prisma ORM, React, Tailwind CSS, Cloudflare Workers</p>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/HashirAKB/Medium" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub Repo
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://medium-vanced.vercel.app" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      )
    },
    {
      title: "Side Project: HeadPhone Store",
      content: (
        <div className="space-y-4">
          <p className="text-lg">An animated, responsive e-commerce frontend for a headphone store.</p>
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside">
            <li>Responsive design with animated navigation</li>
            <li>Custom cursor implementation</li>
            <li>Smooth page transitions and interactive elements</li>
          </ul>
          <h3 className="font-semibold">Technologies Used:</h3>
          <p>React, Tailwind CSS, Framer Motion, Vite</p>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/HashirAKB/headphone-store" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub Repo
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/HashirAKB/headphone-store" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      )
    },
    {
      title: "Why Choose Me?",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside text-lg">
            <li>Nearly 3 years of professional experience in full stack development</li>
            <li>Strong foundation in MERN stack and modern web technologies</li>
            <li>Proven track record of building and deploying scalable web applications</li>
            <li>Continuous learner: Completed a 6-month advanced web development cohort</li>
            <li>Hands-on experience with DevOps practices and cloud infrastructure</li>
            <li>Passionate about clean code, system design, and performance optimization</li>
            <li>Unique perspective: Certified yoga trainer with a love for podcasts and books</li>
          </ul>
        </div>
      )
    },
    {
      title: "Thank You!",
      content: (
        <div className="space-y-4 text-center">
          <p className="text-2xl font-semibold">Any questions?</p>
          <p className="text-lg">I'd be happy to discuss my projects and experience in more detail.</p>
          <div className="flex justify-center space-x-4 mt-8">
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-4 w-4" />
              963-307-8242
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              ahmedhashir96@gmail.com
            </Button>
          </div>
        </div>
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <Card className="w-full max-w-4xl min-h-[60vh] flex flex-col">
        <CardContent className="flex-grow flex flex-col p-6">
          <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
          {slides[currentSlide].subtitle && (
            <h3 className="text-xl text-muted-foreground mb-6">{slides[currentSlide].subtitle}</h3>
          )}
          <div className="flex-grow overflow-y-auto">
            {slides[currentSlide].content}
          </div>
        </CardContent>
        <div className="flex justify-between p-4">
          <Button onClick={prevSlide} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button onClick={nextSlide} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}