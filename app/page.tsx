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

const testimonials = [
  "Mahugain Public School has been a wonderful experience for my child.",
  "My daughter scored 95% in boards and we are very happy with the faculty.",
  "The teachers are supportive and the board exam preparation is excellent.",
  "My daughter loves going to school every day and the digital classrooms make learning fun.",
];

const contactLinks = [
  { title: "Phone", detail: "+91 94311 52170\n+91 7739206148", tone: "bg-green-50 border-green-200 text-green-700" },
  { title: "Instagram", detail: "Our Instagram Account", tone: "bg-blue-50 border-blue-200 text-blue-600" },
  { title: "Facebook", detail: "Our Facebook Page", tone: "bg-blue-50 border-blue-200 text-blue-700" },
];

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
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(126,7,7,0.6),rgba(126,7,7,0.72))]" />
        </div>
        <Container className="relative grid gap-10 py-16 lg:min-h-[780px] lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <Badge className="w-fit border-white/20 bg-white/10 text-white text-xs sm:text-sm">Excellence in Education</Badge>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Mahugain Public School
            </h1>
            <p className="mt-4 text-lg font-semibold text-yellow-200 sm:text-2xl">A Class X School Affiliated to JAC, Ranchi</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Empowering students from Nursery to Class X with a strong foundation in academics, arts, and sports in a modern co-educational setting.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#admissions" className="w-full sm:w-auto">Explore Programs</Button>
              <Button href="#contact" variant="secondary" className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <div className="grid w-full max-w-md gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/30 bg-white/10 px-5 py-5 backdrop-blur-sm sm:px-6 sm:py-6">
                  <div className="text-3xl font-black text-yellow-300 sm:text-4xl">{stat.value}</div>
                  <div className="mt-2 text-sm text-white/90 sm:text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="rounded-[32px] bg-white px-4 py-10 shadow-[0_40px_100px_rgba(0,0,0,0.06)] sm:px-6 sm:py-12 lg:rounded-[48px] lg:px-8 lg:py-16">
              <SectionTitle
                eyebrow="News & Resources"
                title="Latest News & School Books"
                description="Stay updated with school news and access textbooks from Nursery to Class X."
              />
            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
              <Card className="relative min-h-[260px] overflow-hidden bg-slate-50 sm:min-h-[320px] lg:min-h-[360px]">
                <Image
                  src="/student.png"
                  alt="Student"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </Card>
              <div>
                <SectionTitle title="School Books" description="Nursery to Class X - Click Explore for PDFs" />
                <div className="mt-6 grid gap-3 sm:gap-4">
                  {["Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].map((item) => (
                    <div key={item} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-5 sm:py-4">
                      <span className="min-w-0 flex-1 text-sm font-semibold text-slate-800 sm:text-lg">📘 {item}</span>
                      <Button className="shrink-0 rounded-full px-4 py-2 text-sm sm:px-5">Explore</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <SectionTitle eyebrow="About Us" title="About Mahugain Public School" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[32px]">
              <Image src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80" alt="School office" width={1200} height={800} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-white sm:p-6">
                <p className="text-xs text-yellow-300 sm:text-sm">Estd. 2022</p>
                <h3 className="text-xl font-black sm:text-3xl">{school.name}</h3>
                <p className="text-sm text-white/80 sm:text-lg">Mahungain, Koderma, Jharkhand</p>
              </div>
              <div className="absolute bottom-4 right-4 rounded-2xl bg-yellow-400 px-4 py-3 text-center text-slate-900 shadow-xl sm:bottom-6 sm:right-6 sm:rounded-3xl sm:px-6 sm:py-5">
                <div className="text-2xl font-black sm:text-4xl">04+</div>
                <div className="text-xs font-bold sm:text-base">YEARS OF TRUST</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">Shaping the Future of Students Since 2010</h3>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-9">
                Mahugain Public School, Markaccho is a premier English medium co-educational institution affiliated to the Jharkhand Academic Council (JAC), Ranchi.
                We offer quality education from Nursery to Class X with a strong focus on academic growth, character building, and all-round development.
              </p>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-9">
                With a commitment to holistic development, our school blends academic excellence with extracurricular activities, digital learning, and character building.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                {["JAC Board", "Digital Learning", "Expert Faculty", "Modern Labs", "Sports Facility"].map((item) => (
                  <Badge key={item} className="text-xs sm:text-sm">{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white" id="academics">
        <Container>
          <SectionTitle eyebrow="Academics" title="Academic Programs" description="Comprehensive education from Nursery to Class X with the JAC curriculum and strong academic support." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6">
            {academicCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg">
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
          <div className="rounded-[28px] bg-[var(--color-primary)] px-5 py-8 text-white shadow-xl sm:px-8 sm:py-10 sm:rounded-[32px]">
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:gap-6">
            {school.admissionInfo.items.map((step, index) => (
              <Card key={step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-xl font-black text-white sm:h-16 sm:w-16 sm:text-2xl">{String(index + 1).padStart(2, "0")}</div>
                <div className="mt-5 text-4xl sm:mt-6 sm:text-5xl">📋</div>
                <h3 className="mt-5 text-xl font-black text-slate-900 sm:mt-6 sm:text-2xl">{step}</h3>
                <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                  {index === 0 && "Collect the admission form from the school office or download it from our website."}
                  {index === 1 && "Complete the form with all required details and submit it along with necessary documents."}
                  {index === 2 && "Appear for the entrance test / interaction session scheduled by the school."}
                  {index === 3 && "Upon selection, pay the admission fee and complete enrollment formalities."}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Required Documents</h2>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
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
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm sm:px-5 sm:py-4 sm:text-lg">
                  ✅ {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[28px] bg-[var(--color-primary)] p-6 text-white sm:p-8">
              <h3 className="text-xl font-black sm:text-2xl">Contact for Admissions</h3>
              <div className="mt-5 grid gap-3 text-sm sm:mt-6 sm:gap-4 sm:text-lg">
                  <div>📞 +91 9431152170 | +91 7739206148</div>
                <div>🌐 https://mahugainpublicschool.example</div>
                <div>📍 Bazar Road, mahugain, Koderma (Jharkhand) - 825318</div>
              </div>
            </div>
          </div>
          {/* <Card className="p-8">
            <h2 className="text-3xl font-black text-slate-900">Admission Inquiry</h2>
            <form className="mt-8 grid gap-5">
              {["Student Name", "Parent / Guardian Name", "Phone Number", "Email Address", "Class Applying For"].map((label) => (
                <label key={label} className="grid gap-2">
                  <span className="text-lg font-semibold text-slate-700">{label}</span>
                  <input
                    className="rounded-2xl border border-slate-200 px-5 py-4 text-lg outline-none focus:border-[var(--color-primary)]"
                    placeholder={
                      label === "Student Name"
                        ? "Enter student name"
                        : label === "Parent / Guardian Name"
                          ? "Enter parent name"
                          : label === "Phone Number"
                            ? "+91 XXXXX XXXXX"
                            : label === "Email Address"
                              ? "your@email.com"
                              : "Select Class"
                    }
                  />
                </label>
              ))}
              <Button type="submit" className="mt-2 py-4 text-lg">Submit Inquiry</Button>
            </form>
          </Card> */}
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
          <SectionTitle eyebrow="Testimonials" title="What Parents & Students Say" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:gap-6">
            {testimonials.map((text, index) => (
              <Card key={text} className="flex min-h-[280px] flex-col justify-between sm:min-h-[340px]">
                <div>
                  <div className="text-2xl text-yellow-400 sm:text-3xl">❝</div>
                  <p className="mt-6 text-base italic leading-7 text-slate-500 sm:mt-8 sm:text-xl sm:leading-9">{text}</p>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white sm:h-12 sm:w-12 ${["bg-red-500", "bg-blue-600", "bg-green-600", "bg-violet-600"][index]}`}>
                      {["R", "P", "A", "S"][index]}
                    </div>
                    <div>
                      <div className="text-lg font-black text-slate-900 sm:text-xl">{["Rajesh Kumar", "Priya Sharma", "Amit Singh", "Sunita Devi"][index]}</div>
                      <div className="text-sm text-slate-500 sm:text-base">{["Parent, Class VIII", "Parent, Class X", "Alumni — Board Achiever 2024", "Parent, Class V"][index]}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-yellow-400">★★★★★</div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white" id="gallery">
        <Container>
          <SectionTitle eyebrow="Gallery" title="School Gallery" description="A glimpse into the vibrant school life at Mahugain Public School — from academics to celebrations." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[260px] lg:col-span-8 lg:min-h-[280px]">
              <Image src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80" alt="Event" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[260px] lg:col-span-4 lg:min-h-[280px]">
              <Image src="https://images.unsplash.com/photo-1529068755536-a5adef0de2b4?auto=format&fit=crop&w=1200&q=80" alt="Sports" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[260px] lg:col-span-4 lg:min-h-[280px]">
              <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80" alt="Academics" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[260px] lg:col-span-4 lg:min-h-[280px]">
              <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" alt="Culture" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-[24px] sm:min-h-[260px] lg:col-span-4 lg:min-h-[280px]">
              <Image src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80" alt="Achievement" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50" id="contact">
        <Container>
          <SectionTitle eyebrow="Get in Touch" title="Contact Us" description="We would love to hear from you. Reach out for admissions, queries, or to schedule a campus visit." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {contactLinks.map((item) => (
              <Card key={item.title} className={`min-h-[220px] text-center ${item.tone}`}>
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="text-5xl sm:text-6xl">☎️</div>
                  <h3 className="mt-6 text-2xl font-black sm:mt-8 sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 whitespace-pre-line text-lg leading-8 sm:text-2xl sm:leading-10">{item.detail}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr] sm:mt-10 sm:gap-8">
            <div className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 sm:min-h-[280px] lg:min-h-[360px]">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl">🗺️</div>
                <div className="mt-3 text-lg font-black text-slate-700 sm:mt-4 sm:text-2xl">Parsabad, Jharkhand, India</div>
              </div>
            </div>
            <div className="rounded-[24px] bg-[var(--color-primary)] p-6 text-white sm:rounded-[28px] sm:p-8">
              <h3 className="text-2xl font-black sm:text-3xl">{school.name}</h3>
              <div className="mt-6 grid gap-5 text-sm sm:mt-8 sm:gap-6 sm:text-lg">
                <p><strong className="text-yellow-300">School Type</strong><br />Class X School - JAC Affiliated, Co-Educational, English Medium</p>
                <p><strong className="text-yellow-300">Affiliation</strong><br />Jharkhand Academic Council, Ranchi</p>
                <p><strong className="text-yellow-300">Classes Offered</strong><br />Nursery to Class X</p>
                {/* <p><strong className="text-yellow-300">Certification</strong><br />ISO 9001:2015 Certified Institution</p> */}
              </div>
              <Button href="#" className="mt-10 w-full py-4 text-lg">Visit Our Website</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
