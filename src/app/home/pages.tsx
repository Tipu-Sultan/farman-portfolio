"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, FileText, Mail, Phone, User, Book, Award, Briefcase } from "lucide-react"
import Image from "next/image"

export default function EnhancedPortfolio() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Pharmacology Basics", content: "Introduction to pharmacology and its importance in healthcare. Key topics include drug absorption, distribution, metabolism, and excretion (ADME)." },
    { id: 2, title: "Drug Interactions", content: "Common drug interactions and their effects on patient health. Focus on cytochrome P450 enzymes and their role in drug metabolism." },
    { id: 3, title: "Pharmacy Ethics", content: "Ethical considerations in pharmaceutical practice and research. Topics include informed consent, patient confidentiality, and ethical drug pricing." },
    { id: 4, title: "Clinical Pharmacy", content: "The role of clinical pharmacists in patient care. Includes medication therapy management and interprofessional collaboration." },
    { id: 5, title: "Pharmaceutical Calculations", content: "Essential calculations for pharmacy practice, including dosage calculations, concentration expressions, and compounding formulas." },
  ])

  const [activeNote, setActiveNote] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            <li><Button variant="link" onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</Button></li>
            <li><Button variant="link" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</Button></li>
            <li><Button variant="link" onClick={() => document.getElementById('notes').scrollIntoView({ behavior: 'smooth' })}>Notes</Button></li>
            <li><Button variant="link" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</Button></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section id="home" className="mb-16">
          <Card className="overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=1000"
                alt="Pharmacy background"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold mb-2">Farman Ahmad Khan</h1>
                  <p className="text-xl">Aspiring Pharmacist | Dedicated Student</p>
                </div>
              </div>
            </div>
            <CardContent className="mt-4">
              <p className="text-lg text-center">
                Welcome to my pharmacy portfolio! I'm passionate about improving healthcare through pharmaceutical science.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="about" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Farman Ahmad Khan"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-semibold">Farman Ahmad Khan</h2>
                  <p className="text-muted-foreground">Pharmacy Student</p>
                  <div className="flex space-x-2 mt-2">
                    <Badge>Pharmacology</Badge>
                    <Badge>Clinical Research</Badge>
                    <Badge>Patient Care</Badge>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Book className="inline-block mr-2" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Bachelor of Pharmacy</p>
                    <p className="text-sm text-muted-foreground">XYZ University, 2020-2024</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Award className="inline-block mr-2" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside">
                      <li>Dean's List 2022</li>
                      <li>Research Assistant</li>
                      <li>Pharmacy Club President</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Briefcase className="inline-block mr-2" />
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Pharmacy Intern</p>
                    <p className="text-sm text-muted-foreground">ABC Hospital, Summer 2023</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="notes" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Pharmacy Study Notes</CardTitle>
              <CardDescription>Access and contribute to important pharmacy notes</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="view" className="w-full">
                <TabsList>
                  <TabsTrigger value="view">View Notes</TabsTrigger>
                  <TabsTrigger value="add">Add Note</TabsTrigger>
                </TabsList>
                <TabsContent value="view">
                  <div className="grid md:grid-cols-2 gap-4">
                    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                      {notes.map((note) => (
                        <Button
                          key={note.id}
                          variant="ghost"
                          className="w-full justify-start mb-2"
                          onClick={() => setActiveNote(note)}
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          {note.title}
                        </Button>
                      ))}
                    </ScrollArea>
                    <Card>
                      <CardHeader>
                        <CardTitle>{activeNote ? activeNote.title : "Select a note"}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{activeNote ? activeNote.content : "Click on a note to view its content."}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="add">
                  <form className="space-y-4">
                    <Input placeholder="Note Title" />
                    <Textarea placeholder="Note Content" />
                    <Button>Add Note</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Contact Me</CardTitle>
              <CardDescription>Get in touch for collaborations or inquiries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-2" />
                <span>farmankhan12ab@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" />
                <span>7348158118</span>
              </div>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" />
                <Button>Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">Farman Ahmad Khan</h3>
              <p>Aspiring Pharmacist</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="link" className="text-white">LinkedIn</Button>
              <Button variant="link" className="text-white">Twitter</Button>
              <Button variant="link" className="text-white">GitHub</Button>
            </div>
          </div>
          <Separator className="my-4" />
          <p className="text-center">&copy; 2023 Farman Ahmad Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}