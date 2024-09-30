"use client"
import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (section) => {
    setExpandedSections(prev => ({...prev, [section]: !prev[section]}))
  }

  const sections = [
    {
      title: "Introduction",
      content: [
        "Name: Hashir",
        "Fullstack developer with nearly 3 years of experience",
        "Specialized in JavaScript-based technologies, primarily in MERN stack"
      ]
    },
    {
      title: "Educational Background",
      content: [
        "Completed computer engineering diploma in 2020",
        "Certified in MEAN stack after college"
      ]
    },
    {
      title: "Professional Experience",
      content: [
        "Joined UST as a Software Engineer in 2021",
        "Worked on a client-side project for NetApp, specializing in hybrid cloud storage solutions (similar to AWS)",
        "Transitioned from Angular to React for client requirements",
        "Key responsibilities:",
        "- Managed multiple customer-facing dashboards",
        "- Implemented features and fixed bugs on dashboards",
        "- Developed new components for dashboard applications for new or updated devices",
        "- Gained experience in Node.js with Express.js",
        "- Participated in a MongoDB to GraphQL database migration",
        "Skills developed: MERN stack, SQL, NoSQL databases, schema design, and backend access"
      ]
    },
    {
      title: "Upskilling",
      content: [
        "Resigned from UST after 2.7 years to join an advanced fullstack development cohort (6+ months)",
        "Explored various technologies: TypeScript, Next.js, REST APIs, ORMs, DevOps, serverless architecture, CI/CD",
        "Focused on frontend frameworks (TailwindCSS, Shadcn) and performance optimization",
        "Coded daily and maintained a public GitHub dev journal"
      ]
    },
    {
      title: "Personal Projects",
      content: [
        "Paytm-like Wallet Application:",
        "- Backend: Node.js (Express), MongoDB (Mongoose)",
        "- Key features: User authentication, account balances, simulated fund transfers, and profile management",
        "- Utilized libraries: Zod, Bcrypt, Dotenv, Axios (for API requests)",
        "- Frontend: ReactJS with Vite, styled using TailwindCSS",
        "",
        "Medium Vanced (Blogging Platform):",
        "- Backend: Express, PostgreSQL (Prisma ORM), JWT for authentication, Bcrypt for encryption",
        "- Serverless deployment: Cloudflare Workers, Cloudflare KV for multimedia storage",
        "- Frontend: React with Shadcn-UI, ContextAPI, Recoil for state management",
        "- Implemented rich content management, social interactions (like/follow), and secure authentication",
        "- Created custom npm package for type safety using Zod validation",
        "",
        "Headphone Store Landing Page:",
        "- Built with React, styled using TailwindCSS and Framermotion",
        "- Responsive design"
      ]
    },
    {
      title: "Deployment",
      content: [
        "Utilizes Render and Vercel for deployment, GitHub for CI/CD"
      ]
    },
    {
      title: "Certifications",
      content: [
        "GCP Architect specialization (completed during college)"
      ]
    },
    {
      title: "Personal Interests",
      content: [
        "Former book reader, now enjoys podcasts",
        "Certified yoga trainer"
      ]
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <Card className="w-full max-w-4xl">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-4">Hashir Ahmed KB - Full Stack Engineer</h1>
          <div className="flex flex-wrap gap-2 mb-6">
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
          {sections.map((section, index) => (
            <Card key={index} className="mb-4">
              <CardContent className="p-4">
                <div 
                  className="flex justify-between items-center cursor-pointer" 
                  onClick={() => toggleSection(section.title)}
                >
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  {expandedSections[section.title] ? <ChevronUp /> : <ChevronDown />}
                </div>
                {expandedSections[section.title] && (
                  <ul className="list-disc list-inside mt-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="mt-1">
                        {item.startsWith('-') ? <span className="ml-4">{item}</span> : item}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}