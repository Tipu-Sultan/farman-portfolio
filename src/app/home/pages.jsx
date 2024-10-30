"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ChevronDown, FileText, Mail, Phone, User, Book, Award, Briefcase } from "lucide-react"
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Textarea,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ScrollArea,
  Badge,
  Separator
} from "../components/input"
import logo from '../../../public/logo1.png'
import farman from '../../../public/farman.jpg'


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
                src={logo}
                alt="Pharmacy background"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold mb-2">Farman Khan</h1>
                  <p className="text-xl">Aspiring Pharmacist | Dedicated Student</p>
                </div>
              </div>
            </div>
            <CardContent className="mt-4">
              <p className="text-lg text-black text-center"> {/* Changed to text-black */}
                Welcome to my pharmacy portfolio! I`m passionate about improving healthcare through pharmaceutical science.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="about" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-black"> {/* Changed to text-black */}
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={farman}
                  alt="Farman Khan"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-black"> {/* Changed to text-black */}
                    Farman Ahmad Khan
                  </h2>
                  <p className="text-gray-600">Pharmacy Student</p>
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
                    <CardTitle className="text-lg text-black"> {/* Changed to text-black */}
                      <Book className="inline-block mr-2" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black"> {/* Changed to text-black */}
                      Bachelor of Pharmacy
                    </p>
                    <p className="text-sm text-gray-600">XYZ University, 2020-2024</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-black"> {/* Changed to text-black */}
                      <Award className="inline-block mr-2" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside">
                      <li className="text-black">Dean`s List 2022</li> {/* Changed to text-black */}
                      <li className="text-black">Research Assistant</li> {/* Changed to text-black */}
                      <li className="text-black">Pharmacy Club President</li> {/* Changed to text-black */}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-black"> {/* Changed to text-black */}
                      <Briefcase className="inline-block mr-2" />
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black"> {/* Changed to text-black */}
                      Pharmacy Intern
                    </p>
                    <p className="text-sm text-gray-600">ABC Hospital, Summer 2023</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="notes" className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black"> {/* Changed to text-black */}
                Pharmacy Study Notes
              </CardTitle>
              <CardDescription className="text-black"> {/* Changed to text-black */}
                Access and contribute to important pharmacy notes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="view" className="w-full">
                <TabsList>
                  <TabsTrigger value="view" className="text-black"> {/* Changed to text-black */}
                    View Notes
                  </TabsTrigger>
                  <TabsTrigger value="add" className="text-black"> {/* Changed to text-black */}
                    Add Note
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="view">
                  <div className="grid md:grid-cols-2 gap-4">
                    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                      {notes.map((note) => (
                        <Button
                          key={note.id}
                          variant="link"
                          className="w-full justify-start mb-2 text-black" // Changed to text-black
                          onClick={() => setActiveNote(note)}
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          {note.title}
                        </Button>
                      ))}
                    </ScrollArea>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-black"> {/* Changed to text-black */}
                          {activeNote ? activeNote.title : "Select a note"}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-black"> {/* Changed to text-black */}
                          {activeNote ? activeNote.content : "Click on a note to view its content."}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="add">
                  <form className="space-y-4">
                    <Input placeholder="Note Title" className="text-black" /> {/* Changed to text-black */}
                    <Textarea placeholder="Note Content" className="text-black" /> {/* Changed to text-black */}
                    <Button>Add Note</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <section id="contact">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black"> {/* Changed to text-black */}
                Contact Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="text-black" /> {/* Changed to text-black */}
                <Input placeholder="Your Email" type="email" className="text-black" /> {/* Changed to text-black */}
                <Input placeholder="Subject" className="text-black" /> {/* Changed to text-black */}
                <Textarea placeholder="Message" className="text-black" /> {/* Changed to text-black */}
                <Button>Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-white text-center py-4">
        <p className="text-black"> {/* Changed to text-black */}
          &copy; {new Date().getFullYear()} Farman Ahmad Khan. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
