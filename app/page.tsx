import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Target, Lightbulb, Heart, Handshake, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <Image
                src="/images/epitome-main-logo.jpg"
                alt="Epitome Consulting Solutions"
                width={280}
                height={90}
                className="h-20 w-auto"
                priority
              />
            </div>
            <div className="flex space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="#project-management"
                className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md transition-colors"
              >
                PROJECT MANAGEMENT
              </Link>
              <Link href="#merl" className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md transition-colors">
                MERL
              </Link>
              <Link
                href="#organization-development"
                className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md transition-colors"
              >
                ORGANIZATION DEVELOPMENT
              </Link>
            </div>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/business-meeting.jpg"
            alt="Professional consulting meeting"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-800/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-sans">
                Transforming Organizations Through
                <span className="text-yellow-500"> Excellence</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed font-sans" style={{ textAlign: "justify" }}>
                Epitome Consulting Solutions is a regional consulting firm specializing in Project Management,
                Monitoring, Evaluation, Reporting, and Learning (MERL), and Organizational Development within the
                development sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  Explore Our Services
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-yellow-600 rounded-lg p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white rounded-lg p-6 transform -rotate-6">
                  <h3 className="text-2xl font-bold text-black mb-4 font-sans">Our Mission</h3>
                  <p className="text-gray-700 font-sans" style={{ textAlign: "justify" }}>
                    To deliver innovative, client-focused solutions in project management, MERL, and organizational
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 font-sans">About Epitome Consulting</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-sans" style={{ textAlign: "justify" }}>
                We partner with institutions to design and deliver tailored, evidence-based solutions that enhance
                performance, foster sustainable growth, and support data-driven decision-making.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-sans" style={{ textAlign: "justify" }}>
                Guided by principles of innovation, inclusion, and collaboration, we leverage a range of proven
                methodologies—including systems thinking, participatory learning, rights-based approaches, and digital
                transformation—to deliver impactful and holistic capacity development programs.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4 font-sans">Our Vision</h3>
                <p className="text-gray-700 mb-6 font-sans" style={{ textAlign: "justify" }}>
                  To be a global catalyst for transformative change by advancing organizational development, project
                  management, and monitoring, evaluation reporting and learning.
                </p>
                <div className="flex items-center text-yellow-600">
                  <Target className="h-6 w-6 mr-2" />
                  <span className="font-semibold">Global Impact Through Excellence</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/vision-image.png"
                  alt="Vision - Looking toward the future with purpose"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Guiding Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-yellow-600">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Lightbulb className="h-6 w-6 text-yellow-600 mr-2" />
                  <CardTitle className="font-sans">Innovation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans" style={{ textAlign: "justify" }}>
                  We are committed to finding innovative solutions to complex challenges, pushing the boundaries of what
                  is possible to drive meaningful change.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-600">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Users className="h-6 w-6 text-yellow-600 mr-2" />
                  <CardTitle className="font-sans">Client Focus</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans" style={{ textAlign: "justify" }}>
                  Our clients are at the heart of everything we do, thus we take the time to understand their unique
                  strengths and needs, and we tailor our services to be responsive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-600">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Award className="h-6 w-6 text-yellow-600 mr-2" />
                  <CardTitle className="font-sans">Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans" style={{ textAlign: "justify" }}>
                  We strive for excellence in everything we do, delivering high-quality solutions and services that meet
                  the highest standards of professionalism and integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-600">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Handshake className="h-6 w-6 text-yellow-600 mr-2" />
                  <CardTitle className="font-sans">Collaboration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans" style={{ textAlign: "justify" }}>
                  We believe in the power of collaboration, we can achieve greater impact and success by collaborating
                  with our clients, partners, and stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-600 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Heart className="h-6 w-6 text-yellow-600 mr-2" />
                  <CardTitle className="font-sans">Inclusion & Equity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans" style={{ textAlign: "justify" }}>
                  We are intentional in fostering an environment that values diversity, promotes equity, and ensures
                  that all voices are heard, respected, and empowered.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Management Section */}
      <section id="project-management" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 font-sans">Project Management</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <div className="relative max-w-4xl mx-auto">
              <Image
                src="/images/project-management-wordcloud.png"
                alt="Project management concepts and methodologies"
                width={800}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-yellow-600">Project Governance Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans text-justify">
                  We collaborate closely with clients to develop robust project governance frameworks that align with
                  industry standards and best practices. Our approach integrates comprehensive project planning, which
                  ensures alignment with long-term strategic goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-yellow-600">Project Management Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans text-justify">
                  At ECS, we collaborate closely with your team to transform your goals into a realistic, actionable
                  project plan. Our project management experts bring structure, discipline, and a clear roadmap to guide
                  delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-yellow-600">Development Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans text-justify">
                  We develop and review county integrated development plans and sectors plans. CIDPs serve as strategic
                  roadmaps for guiding the socio-economic development of counties thus presents a unique opportunity to
                  spur growth development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-yellow-600">
                  Project Management Capacity Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans text-justify">
                  We specialize in project management capacity building, equipping your team with the tools,
                  methodologies, and best practices needed to drive project success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-yellow-600">
                  Project Design and Feasibility Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans text-justify">
                  We help you conceptualize and design tailored projects and interventions that address your unique
                  organizational challenges. Our services include conducting feasibility studies for new programs,
                  development ventures, and interventions, ensuring that every project is grounded in solid data and
                  realistic expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MERL Section */}
      <section id="merl" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 font-sans">
              Monitoring, Evaluation, Research, and Learning (MERL)
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
            <div className="relative max-w-3xl mx-auto">
              <Image
                src="/images/merl-illustration.png"
                alt="MERL - Research, evaluation and learning processes"
                width={600}
                height={250}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Data-Driven Excellence</h3>
                  <p className="text-lg">Comprehensive MERL Solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-yellow-600">Impact and Technical Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans text-justify mb-4">
                  We craft high-quality, data-driven reports to meet diverse stakeholder requirements, ensuring clear
                  communication of project results, outcomes, and impact.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="font-sans text-sm">
                      <strong>Organizational Annual Reporting:</strong> Comprehensive annual reports highlighting
                      achievements and strategic goals.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="font-sans text-sm">
                      <strong>Donor Reporting:</strong> Tailored reports emphasizing compliance and accountability.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-yellow-600">MERL Frameworks, Plans, and Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans text-justify mb-4">
                  We empower organizations with customized frameworks and tools that integrate MERL into every phase of
                  project design and implementation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="font-sans text-sm">
                      <strong>Grant Proposal Support:</strong> Design MERL frameworks for funding proposals.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="font-sans text-sm">
                      <strong>Digital Solutions:</strong> Innovative digital tools for real-time data collection.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-yellow-600">MERL Capacity Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans text-justify mb-4">
                  We enhance the skills and knowledge of your team, enabling them to lead and implement effective MERL
                  practices within your organization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="font-sans text-sm">
                      <strong>Tailored Training Modules:</strong> Customized M&E training content.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="font-sans text-sm">
                      <strong>Data Visualization:</strong> Innovative visualization techniques.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-yellow-600">
                  Process, Performance, and Impact Evaluations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans text-justify mb-4">
                  We provide in-depth evaluations to analyse program efficiency, effectiveness, and impact, offering
                  actionable insights for improvement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="font-sans text-sm">
                      <strong>Data Quality Assessments:</strong> Comprehensive quality checks and verification.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="font-sans text-sm">
                      <strong>Baseline, Mid-term, and End-term Evaluations:</strong> Complete evaluation studies.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Organization Development Section */}
      <section id="organization-development" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 font-sans">Organization Development</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          </div>

          {/* Strategic Management */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black font-sans mb-8">Strategic Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">
                    Strategic Planning and Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    Our strategic planning services provide organizations with the tools and frameworks needed to
                    develop clear, actionable, and forward-thinking strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">Organization Capacity Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    We examine organizations' systems, structures, processes, human capital, and resources to achieve
                    mission and objectives effectively.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">
                    Business Model Development and Review
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    We offer expert guidance in business model development and review, helping organizations adapt to
                    changing markets and evolving customer needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">
                    Change Management and Culture Transformation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    We specialize in change management, providing organizations with tools and strategies needed to
                    navigate periods of transformation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Leadership and Governance */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black font-sans mb-8">Leadership and Governance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">Governance Framework Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    We help organizations design and refine governance frameworks that support sound decision-making,
                    accountability, and transparency.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">
                    Leadership Development and Coaching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    We offer leadership coaching for executive teams, helping them develop skills and competencies
                    needed to lead with confidence and vision.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">Stakeholder Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    Our services help leadership teams develop strategies for engaging with both internal and external
                    stakeholders, ensuring alignment with organizational goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Wellness Programs */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black font-sans mb-8">Wellness Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">
                    Gender Mainstreaming & GBV Prevention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    We empower organizations to integrate a gender perspective intentionally and systematically into
                    every aspect of their policies, programs, and decision-making processes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">Workplace Mental Health Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    The Workplace Mental Health Program supports organizations to address the psychological well-being
                    of employees in their work environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">HIV & STI Workplace Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    The HIV/AIDS workplace program takes a holistic and integrated approach, incorporating combined,
                    evidence-based approaches and comprehensive interventions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">
                    Disability Inclusion and Mainstreaming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    The core goal is to empower organizations to integrate individuals with disabilities intentionally
                    and systematically into all facets of society, including the workplace.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Employee Engagement */}
          <div>
            <h3 className="text-3xl font-bold text-black font-sans mb-8">Employee Engagement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">Team Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    Our team building services encompass thoughtfully curated, structured activities designed to enhance
                    communication and mutual understanding among team members.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">Coaching and Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    We support institutions to build frameworks for both internal and external coaching and mentorship,
                    creating comprehensive support systems for professional growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">Productivity Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    We offer tailored services designed to enhance organizational efficiency, optimize workflows, and
                    drive sustainable performance through evidence-based strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">Personal Branding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    We empower individuals to build and manage a public persona that reflects their values, skills, and
                    professional identity for long-term career success.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-sans text-yellow-600">Employee Engagement Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-sans text-justify text-sm">
                    Our assessment interventions integrate technical and soft skills perspectives to evaluate employee
                    performance, skills, and engagement levels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 font-sans">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 opacity-90 font-sans">
            Partner with us to design and deliver tailored, evidence-based solutions that enhance performance, foster
            sustainable growth, and support data-driven decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
              Schedule a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-yellow-600"
            >
              Download Our Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/images/epitome-logo-white.png"
                alt="Epitome Consulting Solutions"
                width={280}
                height={90}
                className="h-20 w-auto mb-6"
              />
              <p className="text-gray-300 mb-4 font-sans" style={{ textAlign: "justify" }}>
                A regional consulting firm specializing in Project Management, MERL, and Organizational Development
                within the development sector.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-sans">Contact Us</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-sans">Email: info@epitomeconsulting.com</p>
                <p className="font-sans">Phone: +254 725 384 554</p>
                <p className="font-sans">Phone: +254 792 187 994</p>
                <p className="font-sans">Address: Manga House, Kiambere Road</p>
                <p className="font-sans">Nairobi, Kenya</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-sans">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="font-sans">Project Management</li>
                <li className="font-sans">MERL Services</li>
                <li className="font-sans">Organization Development</li>
                <li className="font-sans">Wellness Programs</li>
                <li className="font-sans">Employee Engagement</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-sans">© 2024 Epitome Consulting Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
