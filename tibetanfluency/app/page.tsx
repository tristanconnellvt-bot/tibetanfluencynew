'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, BookOpen, Volume2, MessageCircle, Video, FileText, Users, Globe, Star, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-amber-600 to-orange-500 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Tibetan Language Course
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#course" className="text-slate-700 hover:text-amber-600 transition-colors">
                What You Get
              </Link>
              <Link href="#why" className="text-slate-700 hover:text-amber-600 transition-colors">
                Why Learn Here
              </Link>
              <Link href="#included" className="text-slate-700 hover:text-amber-600 transition-colors">
                What's Included
              </Link>
              <Button className="bg-amber-600 hover:bg-amber-700">Enroll Now</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] opacity-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center space-y-8">
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200">
                <GraduationCap className="h-3 w-3 mr-1" />
                Structured & Step-by-Step Learning
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-slate-900">Unlock the Tibetan Language</span>
                <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Learn Clearly, Confidently, and Step-by-Step
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
                A modern, structured Tibetan language program designed to help beginners and dedicated learners finally understand Tibetan with clarity and ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 h-12">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 h-12 border-slate-300">
                  Get Free Intro Lesson
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  For beginners & dedicated learners
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Live classes & direct support
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Cultural insights included
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="course" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">What This Course Gives You</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Everything You Need to Master Tibetan
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Whether you're learning for Dharma study, travel, or personal interest, this course is built to give you real understanding—not confusion.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Clear Grammar & Vocabulary',
                  description: 'Clear explanations of grammar and vocabulary that make sense from day one',
                  color: 'from-amber-500 to-orange-500'
                },
                {
                  icon: Volume2,
                  title: 'Pronunciation Training',
                  description: 'Guided pronunciation training using simple, memorable methods',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Globe,
                  title: 'Cultural Insights',
                  description: 'Cultural insight woven naturally into each lesson for deeper understanding',
                  color: 'from-emerald-500 to-teal-500'
                },
                {
                  icon: Video,
                  title: 'Weekly Live Classes',
                  description: 'Weekly live classes or pre-recorded lessons to keep you progressing',
                  color: 'from-rose-500 to-pink-500'
                },
                {
                  icon: MessageCircle,
                  title: 'Direct Support',
                  description: 'Direct support so you never feel stuck on your learning journey',
                  color: 'from-violet-500 to-purple-500'
                },
                {
                  icon: GraduationCap,
                  title: 'Structured Learning Path',
                  description: 'Step-by-step progression designed to build real confidence and fluency',
                  color: 'from-indigo-500 to-blue-500'
                }
              ].map((feature, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">Why Learn With Me</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                A Method Built on Clarity and Simplicity
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3">Years of Teaching Experience</CardTitle>
                      <CardDescription className="text-base leading-relaxed text-slate-700">
                        Years of experience teaching Tibetan to international students, refined through countless hours of helping learners achieve their goals.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3">Simplicity-Focused Methods</CardTitle>
                      <CardDescription className="text-base leading-relaxed text-slate-700">
                        Methods focused on simplicity, clarity, and real comprehension—not overwhelming complexity or memorization without understanding.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3">Build Real Confidence</CardTitle>
                      <CardDescription className="text-base leading-relaxed text-slate-700">
                        Lessons that gently build your confidence so Tibetan becomes a language you use, not one you fear. My goal is to help you read, understand, and pronounce Tibetan in a way that feels natural and enjoyable.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">Who This Course Is For</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Perfect for Your Learning Journey
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                'Complete beginners starting from scratch',
                'Dharma practitioners wanting clearer understanding of prayers and texts',
                'Anyone who has tried learning Tibetan before but found it overwhelming',
                'Curious learners who want to explore a rich language and culture'
              ].map((item, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-lg text-slate-700 leading-relaxed">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-xl text-slate-600 mt-12 max-w-2xl mx-auto leading-relaxed">
              If you can dedicate a little time each week, you can make real progress—this course shows you exactly how.
            </p>
          </div>
        </section>

        <section id="included" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">What's Included</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Everything You Need in One Place
              </h2>
              <p className="text-xl text-slate-600">
                Everything is designed to keep you progressing smoothly
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Video,
                  title: 'Structured Video Lessons',
                  description: 'Professionally produced lessons that guide you step-by-step'
                },
                {
                  icon: MessageCircle,
                  title: 'Live Q&A Sessions',
                  description: 'Live Q&A or support sessions to answer all your questions'
                },
                {
                  icon: FileText,
                  title: 'Practice Materials',
                  description: 'Practice worksheets & guided exercises for hands-on learning'
                },
                {
                  icon: Volume2,
                  title: 'Pronunciation Tutorials',
                  description: 'Detailed pronunciation tutorials to perfect your spoken Tibetan'
                },
                {
                  icon: Users,
                  title: '1-on-1 Feedback',
                  description: 'Optional 1-on-1 feedback to accelerate your progress'
                },
                {
                  icon: MessageCircle,
                  title: 'Community Support',
                  description: 'Private community or chat support to connect with fellow learners'
                }
              ].map((item, index) => (
                <Card key={index} className="border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">Student Results</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Clear Teaching, Real Results
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  content: 'Finally understanding the structure of Tibetan.',
                  rating: 5
                },
                {
                  content: 'Feeling confident reading and pronouncing words.',
                  rating: 5
                },
                {
                  content: 'Being able to follow Dharma teachings more deeply.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={index} className="border-slate-200 bg-white">
                  <CardHeader>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <CardDescription className="text-lg text-slate-700 leading-relaxed">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to Start Learning Tibetan?
            </h2>
            <p className="text-xl text-amber-100">
              Join the program today and begin your journey with a structured, friendly, and effective Tibetan learning method.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100 text-lg px-8 h-12">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 h-12">
                Get Free Intro Lesson
              </Button>
            </div>
            <div className="pt-4">
              <Link href="#contact" className="text-white underline hover:text-amber-100 transition-colors text-lg">
                Contact for Questions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-to-br from-amber-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Tibetan Language</span>
              </div>
              <p className="text-sm">
                Helping students master the Tibetan language with clarity, confidence, and cultural understanding.
              </p>
            </div>
            {[
              {
                title: 'Course',
                links: ['What You Get', "Who It's For", "What's Included", 'Student Results']
              },
              {
                title: 'Learn',
                links: ['Enroll Now', 'Free Intro Lesson', 'Course Materials', 'Live Sessions']
              },
              {
                title: 'Support',
                links: ['Contact', 'FAQ', 'Community', 'Resources']
              }
            ].map((column, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-white">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <Link href="#" className="text-sm hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2024 Tibetan Language Course. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
