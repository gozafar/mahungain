import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { school } from "@/lib/constants";

const heroStats = [
  { value: "12+", label: "Academic Programs" },
  { value: "100%", label: "Digital Classrooms" },
  { value: "50+", label: "Science Labs" },
  { value: "5000+", label: "Library Books" },
];

const academicCards = [
  { title: "Pre-Primary", subtitle: "Nursery, LKG & UKG", color: "from-pink-500 to-rose-500", subjects: ["English", "Hindi", "Mathematics", "Drawing & Art", "EVS", "Activity & Play"] },
  { title: "Primary", subtitle: "Class I to V", color: "from-blue-500 to-cyan-500", subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer", "Art & Craft"] },
  { title: "Middle School", subtitle: "Class VI to VIII", color: "from-emerald-500 to-teal-500", subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit", "Computer"] },
  { title: "Secondary", subtitle: "Class IX to X", color: "from-orange-500 to-amber-500", subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "IT", "Sanskrit"] },
];

const leadershipTeam = [
  {
    role: "Principal",
    name: "Tabassum Ara",
    description: "Provides academic leadership, discipline, and a strong vision for student success.",
    accent: "bg-blue-600",
    initials: "PR",
    qualification: "M.A, B.Ed",
    experience: "15+ years",
    academicExp: "12+ years",
    photo: "/teacher/TabassumAra.png",
  },
];

const schoolLeadership = [
  {
    role: "Director",
    name: "Tanjim Khan",
    description: "Guiding the school with long-term vision, quality standards, and community focus.",
    photo: "/teacher/Tanjim.png",
  },
  {
    role: "Assistant Director",
    name: "Reyaz Alam",
    description: "Supporting academics, planning, and day-to-day coordination for a smooth learning experience.",
    photo: "/teacher/ReyazAlam.png",
  },
] as const;

const teachingStaff = [
  {
    name: "RANJEET RAVIDAS",
    subject: "Mathematics",
    qualification: "M.Sc, B.Ed",
    experience: "5+ years",
    photo: "/teacher/RANJEETRAVIDAS.png",
  },
  {
    name: "Arifa Naaj",
    subject: "English",
    qualification: "B.A",
    experience: "2+ years",
    photo: "/teacher/ArifaNaaj.png",
  },
  {
    name: "Ashraf Raza ",
    subject: "Science",
    qualification: "B.Sc",
    experience: "7+ years",
    photo: "/teacher/AshrafRaza.png",
  },
  {
    name: "Gulnaj Parween ",
    subject: "Social Studies",
    qualification: "12th",
    experience: "2+ years",
    photo: "/teacher/GulnajParween.png",
  },
  {
    name: "Jeba Parveen",
    subject: "Hindi",
    qualification: "B.A",
    experience: "2+ years",
    photo: "/teacher/JebaParveen.png",
  },
  {
    name: "Monty Kumari ",
    subject: "Computer",
    qualification: "BCA, MCA",
    experience: "1+ years",
    photo: "/teacher/MontyKumari.png",
  },
  {
    name: "Nida Khan",
    subject: "English",
    qualification: "B.A",
    experience: "1+ years",
    photo: "/teacher/NidaKhan.png",
  },
  {
    name: "Dewanand Verma",
    subject: "Science",
    qualification: "M.Sc, B.Ed Pursuing",
    experience: "7+ years",
    photo: "/teacher/DewanandVerma.png",
  },
  {
    name: "Ashfaq Alam",
    subject: "Mathematics",
    qualification: "B.A",
    experience: "20+ years",
    photo: "/teacher/AshfaqAlam.png",

  },
  {
    name: "Rahul Ram",
    subject: "Sanskrit",
    qualification: "M.A",
    experience: "7+ years",
    photo: "/teacher/RahulRam.png",

  },
  {
    name: "Islam Andari",
    subject: "Urdu",
    qualification: "B.ED",
    experience: "5+ years",
    photo: "/teacher/IslamAnsari.png",

  },
  {
    name: "Samina khan",
    subject: "Physical Education",
    qualification: "12Th",
    experience: "1+ years",
    photo: "/teacher/Saminakhan.png",

  },
  // {
  //   name: "Teacher Name",
  //   subject: "EVS",
  //   qualification: "M.Sc, B.Ed",
  //   experience: "7+ years",
  //   photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
  // },
  {
    name: "Dinesh Pandit ",
    subject: "Social Science",
    qualification: "M.A, B.Ed Pursuing",
    experience: "1+ years",
    photo: "/teacher/DineshPandit1.png",

  },
  {
    name: "Dinesh Yadav ",
    subject: "Science",
    qualification: "B. A B.ED Pursuing",
    experience: "1+ years",
    photo: "/teacher/DineshYadav.png",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent, Class VIII",
    rating: 5,
    initials: "R",
    tone: "bg-red-500",
    text: "Mahugain Public School has been a wonderful experience for my child. The teachers are caring and the learning environment feels very positive.",
  },
  {
    name: "Priya Sharma",
    role: "Parent, Class X",
    rating: 4,
    initials: "P",
    tone: "bg-blue-600",
    text: "The school gives strong attention to studies and discipline. We have seen very good improvement in our daughter’s confidence.",
  },
  {
    name: "Amit Singh",
    role: "Alumni, Board Achiever 2024",
    rating: 5,
    initials: "A",
    tone: "bg-green-600",
    text: "The board exam preparation was excellent and the teachers always supported me whenever I needed help.",
  },
  {
    name: "Sunita Devi",
    role: "Parent, Class V",
    rating: 3,
    initials: "S",
    tone: "bg-violet-600",
    text: "My child enjoys coming to school every day. The digital classes are helpful, and the staff is polite and approachable.",
  },
  {
    name: "Mohd. Arif",
    role: "Parent, Class VI",
    rating: 4,
    initials: "M",
    tone: "bg-amber-600",
    text: "We are happy with the teaching quality and regular communication from the school. It gives us peace of mind.",
  },
  {
    name: "Shabnam Khatoon",
    role: "Parent, Class IV",
    rating: 5,
    initials: "S",
    tone: "bg-pink-600",
    text: "Teachers are kind and very supportive. My child has become more active in studies and school activities.",
  },
  {
    name: "Ravi Kumar",
    role: "Parent, Class II",
    rating: 3,
    initials: "R",
    tone: "bg-emerald-600",
    text: "A good school with a steady academic focus. The environment is improving nicely and the staff is responsive.",
  },
  {
    name: "Nazia Parveen",
    role: "Parent, Class IX",
    rating: 4,
    initials: "N",
    tone: "bg-cyan-600",
    text: "My son feels comfortable with the teachers and the school has a very disciplined atmosphere.",
  },
];

const contactLinks = [
  { title: "Phone", detail: "+91 94311 52170\n+91 7739206148", tone: "bg-green-50 border-green-200 text-green-700" },
  { title: "Instagram", detail: "Our Instagram Account", tone: "bg-blue-50 border-blue-200 text-blue-600" },
  { title: "Facebook", detail: "Our Facebook Page", tone: "bg-blue-50 border-blue-200 text-blue-700" },
];

const getExperienceYears = (experience: string) => {
  const years = Number.parseInt(experience, 10);
  return Number.isNaN(years) ? 0 : years;
};

export default function Home() {
  return (
    <>
      {/* <NoticeStrip /> */}

      <section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=80"
            alt="School campus"
            fill
            className="object-cover opacity-25 animate-scale-in"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.78),rgba(29,78,216,0.7),rgba(126,7,7,0.86))]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_35%,rgba(15,23,42,0.2))]" />
        </div>
        <Container className="relative grid gap-10 py-14 sm:py-16 lg:min-h-[820px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="flex flex-col justify-center animate-fade-up">
            <Badge className="w-fit border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm">
              Excellence in Education
            </Badge>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Mahugain Public School
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold text-yellow-200 sm:text-2xl">
              A Class X School Affiliated to JAC, Ranchi
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              A modern co-educational school for Nursery to Class X, built around strong academics, values, and all-round growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {school.heroHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm sm:text-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#admissions" className="w-full rounded-full px-6 py-3 text-base font-bold sm:w-auto">
                Explore Programs
              </Button>
              <Button href="#contact" variant="secondary" className="w-full rounded-full border-white/25 bg-white/10 px-6 py-3 text-base font-bold text-white hover:bg-white/15 sm:w-auto">
                Contact Us
              </Button>
            </div>

            {/* <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/15 bg-white/10 px-5 py-5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                  <div className="text-3xl font-black text-yellow-300">{stat.value}</div>
                  <div className="mt-2 text-sm font-medium text-white/85">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          <div className="animate-fade-up lg:pl-6">
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.18)] backdrop-blur-md sm:rounded-[40px] sm:p-5">
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px] sm:min-h-[560px]">
                <Image
                  src="/student.png"
                  alt="Students celebrating at school"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.58))]" />

                <div className="absolute left-4 top-4 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:left-6 sm:top-6">
                  Admissions Open
                </div>

                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:bottom-6 sm:left-6 sm:right-6 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-3xl border border-white/15 bg-slate-950/55 p-4 text-white backdrop-blur-md sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">Why parents choose us</p>
                    <h2 className="mt-2 text-xl font-black leading-tight sm:text-2xl">Clear learning, caring teachers, and strong exam support.</h2>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Classes</p>
                    <div className="mt-2 text-3xl font-black text-yellow-300">Nursery - X</div>
                    <p className="mt-1 text-sm text-white/80">Co-educational, English medium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_55%,#eef6ff_100%)] px-4 py-10 shadow-[0_40px_100px_rgba(15,23,42,0.08)] sm:px-6 sm:py-12 lg:rounded-[48px] lg:px-8 lg:py-16">
            <SectionTitle
              eyebrow="News & Resources"
              title="Latest News and School Books"
              description="A clean space for school updates and quick access to textbooks from Nursery to Class X."
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-10">
              <div className="flex h-full flex-col">
                <Card className="relative flex h-full min-h-[520px] overflow-hidden border-0 bg-slate-900 p-0 shadow-[0_30px_70px_rgba(15,23,42,0.18)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.12),rgba(15,23,42,0.6))]" />
                  <Image
                    src="/student.png"
                    alt="Students studying in the classroom"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="relative flex h-full min-h-[520px] flex-col justify-between p-6 text-white sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                        School Updates
                      </div>
                      <div className="rounded-full bg-[#ffd21f] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-900">
                        New
                      </div>
                    </div>

                    <div className="max-w-xl">
                      <h3 className="text-2xl font-black leading-tight sm:text-4xl">Helpful resources, all in one calm and clear section.</h3>
                      <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
                        Parents and students can check school news, open class-wise books, and move straight to the right section without extra scrolling.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        { value: "13", label: "Book Sets" },
                        { value: "10", label: "Classes" },
                        { value: "Fast", label: "Access" },
                      ].map((item) => (
                        <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                          <div className="text-xl font-black text-[#ffd21f]">{item.value}</div>
                          <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/75">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-6 lg:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">School Books</p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900">Browse class-wise PDFs</h3>
                  </div>
                  <div className="hidden rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 sm:block">
                    Nursery to X
                  </div>
                </div>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                  Choose a class below to open the corresponding book resources. The layout is designed to feel lighter, faster, and easier to scan.
                </p>

                <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2">
                  {["Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].map((item) => (
                    <div
                      key={item}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Book pack</div>
                        <span className="mt-1 block truncate text-sm font-bold text-slate-900 sm:text-base">{item}</span>
                      </div>
                      <Button className="shrink-0 rounded-full px-4 py-2 text-xs font-bold sm:text-sm">Explore</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50" id="about">
        <Container>
          <SectionTitle eyebrow="About Us" title="About Mahugain Public School" description="A simple, modern overview of who we are and what the school stands for." />
          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)] lg:rounded-[40px]">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px] overflow-hidden bg-slate-900 sm:min-h-[420px] lg:min-h-[560px]">
                <Image
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80"
                  alt="School office"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.65))]" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                      Since 2024
                    </div>
                    <div className="rounded-full bg-[#ffd21f] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-900">
                      Trusted
                    </div>
                  </div>

                  <div className="max-w-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300">Mahungain, Koderma, Jharkhand</p>
                    <h3 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{school.name}</h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                      A growing English medium co-educational school affiliated to the Jharkhand Academic Council, focused on academics, values, and all-round development.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { value: "Nursery", label: "to Class X" },
                      { value: "JAC", label: "Affiliation" },
                      { value: "02+", label: "Years" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                        <div className="text-xl font-black text-[#ffd21f]">{item.value}</div>
                        <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/75">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 sm:text-4xl">Growing with students since 2024</h3>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-9">
                    Mahugain Public School, Markaccho is a growing English medium co-educational institution affiliated to the Jharkhand Academic Council (JAC), Ranchi.
                    We offer quality education from Nursery to Class X with a strong focus on academic growth, character building, and all-round development.
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-9">
                    In a short span of time, our school has built a caring learning environment that blends academic support, extracurricular activities, digital learning, and values.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {["JAC Board", "Digital Learning", "Expert Faculty", "Modern Labs", "Sports Facility"].map((item) => (
                    <Badge
                      key={item}
                      className="justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold text-slate-700 shadow-sm sm:text-sm"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white" id="teachers">
        <Container>
          <SectionTitle
            eyebrow="Our Team"
            title="Meet Our Principal & Teachers"
            description="A dedicated leadership and teaching team that supports students with care, discipline, and quality education."
          />
          <div className="mt-10 grid gap-6">
            <Card className="hover-lift relative overflow-hidden border-slate-200 bg-slate-50 p-0 shadow-lg">
              <div className="h-2 w-full bg-emerald-600" />
              <div className="grid gap-6 p-6 sm:grid-cols-2">
                {leadershipTeam.slice(0, 2).map((person) => (
                  <div key={person.role} className="rounded-3xl bg-white p-5 shadow-sm">
                    <div className="animate-float relative h-28 w-28 overflow-hidden rounded-3xl border-4 border-slate-100 bg-slate-100 shadow-md">
                      <Image src={person.photo} alt={person.name} fill className="object-cover object-top" sizes="112px" />
                    </div>
                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{person.role}</p>
                    <h3 className="mt-2 text-2xl font-black text-slate-900">{person.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                      <span className="rounded-full bg-slate-200 px-3 py-1">Qualification: {person.qualification}</span>
                      <span className="rounded-full bg-slate-200 px-3 py-1">Experience: {person.experience}</span>
                      <span className="rounded-full bg-slate-200 px-3 py-1">Academic Exp: {person.academicExp}</span>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-600">{person.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="hover-lift relative overflow-hidden border-slate-200 bg-slate-50 p-0 shadow-lg">
              <div className="h-2 w-full bg-blue-600" />
              <div className="p-6">
                {leadershipTeam.slice(2).map((person) => (
                  <div key={person.role} className="rounded-3xl bg-white p-5 shadow-sm">
                    <div className="animate-float relative h-28 w-28 overflow-hidden rounded-3xl border-4 border-slate-100 bg-slate-100 shadow-md">
                      <Image src={person.photo} alt={person.name} fill className="object-cover object-top" sizes="112px" />
                    </div>
                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{person.role}</p>
                    <h3 className="mt-2 text-2xl font-black text-slate-900">{person.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                      <span className="rounded-full bg-slate-200 px-3 py-1">Qualification: {person.qualification}</span>
                      <span className="rounded-full bg-slate-200 px-3 py-1">Experience: {person.experience}</span>
                      <span className="rounded-full bg-slate-200 px-3 py-1">Academic Exp: {person.academicExp}</span>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-600">{person.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="hover-lift border-slate-200 bg-[linear-gradient(180deg,#ffffff, #f8fafc)]">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Teaching Staff</p>
              <h3 className="mt-3 text-2xl font-black text-slate-900">Our Classroom Mentors</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Every teacher plays an important role in helping students build knowledge, confidence, and good values.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {[...teachingStaff].sort((a, b) => getExperienceYears(b.experience) - getExperienceYears(a.experience)).map((teacher, index) => (
                  <div key={`${teacher.subject}-${index}`} className="hover-lift rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex items-center gap-5">
                      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-[28px] border-4 border-slate-100 bg-slate-100 shadow-md sm:h-36 sm:w-36">
                        <Image
                          src={teacher.photo}
                          alt={teacher.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 640px) 128px, 144px"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-slate-900 sm:text-xl">{teacher.name}</h4>
                        <p className="text-sm text-slate-500 sm:text-base">{teacher.subject}</p>
                        <p className="text-xs font-medium text-slate-400 sm:text-sm">{teacher.qualification}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                      <span>Experience</span>
                      <span className="font-semibold">{teacher.experience}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white" id="academics">
        <Container>
          <SectionTitle eyebrow="Academics" title="Academic Programs" description="Comprehensive education from Nursery to Class X with the JAC curriculum and strong academic support." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6">
            {academicCards.map((card) => (
              <article key={card.title} className="hover-lift overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg">
                <div className={`bg-gradient-to-r ${card.color} px-5 py-6 text-white sm:px-6 sm:py-7`}>
                  <h3 className="text-2xl font-black sm:text-3xl">{card.title}</h3>
                  <p className="text-sm text-white/90 sm:text-lg">{card.subtitle}</p>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Subjects Offered</p>
                  <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                    {card.subjects.map((subject) => (
                      <span key={subject} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:px-4 sm:text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50" id="stats">
        <Container>
          <div className="hover-lift rounded-[28px] bg-[var(--color-primary)] px-5 py-8 text-white shadow-xl sm:px-8 sm:py-10 sm:rounded-[32px]">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <h3 className="text-2xl font-black sm:text-3xl">JAC Affiliated School</h3>
                <p className="mt-4 text-base text-white/80 sm:text-lg">Affiliated to the Jharkhand Academic Council, Ranchi</p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:gap-8">
                {school.stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:border-l lg:border-white/20 lg:pl-6">
                    <div className="text-3xl font-black text-yellow-300 sm:text-4xl">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="mt-2 text-xs font-semibold text-white/80 sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="admissions" className="bg-white">
        <Container>
          <SectionTitle eyebrow="Admissions Open" title="Admission Process 2026-27" description="Join our family of excellence. Admissions are open for Nursery to Class X." />
          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] shadow-[0_30px_80px_rgba(15,23,42,0.06)] lg:rounded-[40px]">
            <div className="bg-[linear-gradient(180deg,#0f172a_0%,#1d4ed8_100%)] p-6 text-white sm:p-8 lg:p-10">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">Step-by-step</p>
                <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Simple admission journey</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                  We keep the admission process clear, quick, and parent-friendly so you always know what comes next.
                </p>

                <div className="mt-6 grid gap-2 sm:grid-cols-3">
                  {[
                    { value: "4", label: "Easy Steps" },
                    { value: "Nursery", label: "to Class X" },
                    { value: "Open", label: "Admissions" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
                      <div className="text-xl font-black text-[#ffd21f]">{item.value}</div>
                      <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/75">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm sm:max-w-xl">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Need help?</div>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    Visit the office, call us, or check the required documents section below.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 lg:p-8">
              <div className="grid gap-2">
                {school.admissionInfo.items.map((step, index) => (
                  <div
                    key={step}
                    className="grid gap-3 rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 sm:grid-cols-[auto_1fr] sm:items-start sm:p-5"
                  >
                    <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-2">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#1d4ed8,#0f172a)] text-base font-black text-white shadow-md">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:hidden">
                        Step {index + 1}
                      </div>
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-black text-slate-900 sm:text-lg">{step}</h3>
                        <span className="hidden rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 sm:inline-flex">
                          Step {index + 1}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {index === 0 && "Collect the admission form from the school office or download it from our website."}
                        {index === 1 && "Complete the form with all required details and submit it along with necessary documents."}
                        {index === 2 && "Appear for the entrance test / interaction session scheduled by the school."}
                        {index === 3 && "Upon selection, pay the admission fee and complete enrollment formalities."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white" id="leadership">
        <Container>
          <SectionTitle
            eyebrow="Leadership"
            title="Director, Assistant Director, Vision & Mission"
            description="Meet the leadership team and understand the direction that guides our school every day."
          />

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] shadow-[0_30px_80px_rgba(15,23,42,0.06)] lg:rounded-[40px]">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.95fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid gap-4 md:grid-cols-2">
                  {schoolLeadership.map((person) => (
                    <Card key={person.role} className="overflow-hidden border-slate-200 bg-white p-0 shadow-sm">
                      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                        <Image
                          src={person.photo}
                          alt={person.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 360px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">{person.role}</p>
                        <h3 className="mt-2 text-2xl font-black leading-tight text-slate-900">{person.name}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{person.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-[linear-gradient(180deg,#0f172a_0%,#1d4ed8_100%)] p-6 text-white sm:p-8 lg:p-10">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">Vision</p>
                    <p className="mt-3 text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                      To build confident, responsible, and skilled learners who are ready to grow academically and contribute positively to society.
                    </p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">Mission</p>
                    <p className="mt-3 text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                      To deliver quality education with discipline, care, and modern learning support from Nursery to Class X.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">Note</p>
                  <p className="mt-3 text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                    Any school-related information or updates should be shared only after your approval so nothing is added without your confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)] lg:rounded-[40px]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-[linear-gradient(180deg,#0f172a_0%,#1d4ed8_100%)] p-6 text-white sm:p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">Admission Ready</p>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Required Documents</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                  Keep these documents ready to make the admission process faster and smoother.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Birth Certificate",
                    "Previous Report Card",
                    "Transfer Certificate (TC)",
                    "Character Certificate",
                    "Aadhar Card (Student & Parent)",
                    "Passport Size Photos (4)",
                    "Caste Certificate (if applicable)",
                    "Medical Certificate",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm font-semibold text-white/95 backdrop-blur-sm sm:px-5 sm:text-base">
                      ✅ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">Contact for Admissions</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">Need help? Reach out directly</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    Call the school office for admission guidance, class availability, and document verification.
                  </p>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Phone</div>
                    <div className="mt-2 text-base font-semibold text-slate-900 sm:text-lg">+91 94311 52170</div>
                    <div className="text-base font-semibold text-slate-900 sm:text-lg">+91 77392 06148</div>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Website</div>
                    <div className="mt-2 break-all text-base font-semibold text-slate-900 sm:text-lg">https://mahugainpublicschool.example</div>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Address</div>
                    <div className="mt-2 text-base font-semibold leading-7 text-slate-900 sm:text-lg sm:leading-8">
                      Bazar Road, Mahugain, Koderma (Jharkhand) - 825318
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white" id="facilities">
        <Container>
          <SectionTitle eyebrow="Infrastructure" title="World-Class Facilities" description="A safe, stimulating environment with modern facilities designed to support every aspect of student development." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:gap-6">
            {school.facilities.map((item, index) => (
              <Card key={item}>
                <div className="text-4xl sm:text-5xl">{["🏫", "🔬", "💻", "📚", "🏅", "🚌"][index]}</div>
                <h3 className="mt-5 text-xl font-black text-slate-900 sm:mt-6 sm:text-2xl">{item}</h3>
                <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                  {index === 0 && "Digital smart boards and multimedia-enabled classrooms for interactive learning experiences."}
                  {index === 1 && "Well-equipped Physics, Chemistry, and Biology labs for hands-on experiments and research."}
                  {index === 2 && "Modern computer center with high-speed internet for digital education and coding."}
                  {index === 3 && "Vast collection of books, journals, and digital resources for every subject and age group."}
                  {index === 4 && "Spacious playground for cricket, football, athletics, and other outdoor sports and games."}
                  {index === 5 && "Safe and reliable school bus service covering major routes across Koderma district."}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionTitle eyebrow="Testimonials" title="What Parents & Students Say" description="Real feedback from families and students across different classes." />
          <div className="relative mt-10 overflow-hidden">
            <div className="flex min-w-max gap-4 sm:gap-6 animate-marquee will-change-transform">
              {[...testimonials, ...testimonials].map((item, index) => (
                <Card key={`${item.name}-${index}`} className="flex min-h-[280px] w-[300px] shrink-0 flex-col justify-between sm:min-h-[340px] sm:w-[360px]">
                  <div>
                    <div className="text-2xl text-yellow-400 sm:text-3xl">❝</div>
                    <p className="mt-6 text-base italic leading-7 text-slate-500 sm:mt-8 sm:text-xl sm:leading-9">{item.text}</p>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white sm:h-12 sm:w-12 ${item.tone}`}>{item.initials}</div>
                      <div>
                        <div className="text-lg font-black text-slate-900 sm:text-xl">{item.name}</div>
                        <div className="text-sm text-slate-500 sm:text-base">{item.role}</div>
                      </div>
                    </div>
                    <div className="mt-4 text-yellow-400">{Array.from({ length: item.rating }).map((_, starIndex) => <span key={starIndex}>★</span>)}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white" id="gallery">
        <Container>
          <SectionTitle eyebrow="Gallery" title="School Gallery" description="A glimpse into the vibrant school life at Mahugain Public School — from academics to celebrations." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[260px] lg:col-span-8 lg:min-h-[280px]">
              <Image src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80" alt="Event" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[260px] lg:col-span-4 lg:min-h-[280px]">
              <Image src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80" alt="Sports" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[260px] lg:col-span-4 lg:min-h-[280px]">
              <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80" alt="Academics" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[260px] lg:col-span-4 lg:min-h-[280px]">
              <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" alt="Culture" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[260px] lg:col-span-4 lg:min-h-[280px]">
              <Image src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80" alt="Achievement" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50" id="contact">
        <Container>
          <SectionTitle
            eyebrow="Get in Touch"
            title="Contact Us"
            description="We would love to hear from you. Reach out for admissions, queries, or to schedule a campus visit."
          />

          <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.06)] lg:rounded-[40px]">
            <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="bg-[linear-gradient(180deg,#0f172a_0%,#1d4ed8_100%)] p-6 text-white sm:p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">School Office</p>
                <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{school.name}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                  One place for admissions, school visits, and general questions.
                </p>

                <div className="mt-8 space-y-3">
                  {contactLinks.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">{item.title}</p>
                      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-white/90 sm:text-base sm:leading-7">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { value: "Fast", label: "Response" },
                    { value: "Clear", label: "Guidance" },
                    { value: "Easy", label: "Access" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                      <div className="text-xl font-black text-[var(--color-primary)]">{item.value}</div>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[28px] border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.08),transparent_55%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 sm:p-6 lg:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">Visit Us</p>
                      <h4 className="mt-2 text-2xl font-black text-slate-900">Markacho, Jharkhand</h4>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                        Bazar Road, Mahugain, Koderma, Jharkhand - 825318
                      </p>
                    </div>
                    <div className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-black text-slate-900">
                      Admissions Open
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "School Type", value: "JAC Affiliated, Co-Educational, English Medium" },
                      { label: "Affiliation", value: "Jharkhand Academic Council, Ranchi" },
                      { label: "Classes", value: "Nursery to Class X" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl bg-white p-4 shadow-sm">
                        <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                        <div className="mt-2 text-sm font-semibold leading-6 text-slate-800">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <Button href="#" className="mt-6 w-full py-4 text-base font-bold sm:text-lg">
                    Visit Our Website
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
