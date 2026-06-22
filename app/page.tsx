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

      <section className="relative max-h-[780px] overflow-y-auto overflow-x-hidden bg-[var(--color-primary)] text-white">
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
        <Container className="relative grid min-h-[780px] gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <Badge className="w-fit border-white/20 bg-white/10 text-white">Excellence in Education</Badge>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-none tracking-tight sm:text-7xl">
              Mahugain Public School
            </h1>
            <p className="mt-4 text-2xl font-semibold text-yellow-200">A Class X School Affiliated to JAC, Ranchi</p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/85">
              Empowering students from Nursery to Class X with a strong foundation in academics, arts, and sports in a modern co-educational setting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#admissions">Explore Programs</Button>
              <Button href="#contact" variant="secondary" className="border-white/30 bg-transparent text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <div className="grid w-full max-w-md gap-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/30 bg-white/10 px-6 py-6 backdrop-blur-sm">
                  <div className="text-4xl font-black text-yellow-300">{stat.value}</div>
                  <div className="mt-2 text-lg text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container>
          <div className="rounded-[48px] bg-white px-8 py-16 shadow-[0_40px_100px_rgba(0,0,0,0.06)]">
              <SectionTitle
                eyebrow="News & Resources"
                title="Latest News & School Books"
                description="Stay updated with school news and access textbooks from Nursery to Class X."
              />
            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
              <Card className="relative min-h-[360px] overflow-hidden bg-slate-50">
                <Image
                  src="/student.png"
                  alt="Student"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </Card>
              <div>
                <SectionTitle title="School Books" description="Nursery to Class X - Click Explore for PDFs" />
                <div className="mt-6 grid max-h-[520px] gap-4 overflow-y-auto pr-3">
                  {["Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                      <span className="text-lg font-semibold text-slate-800">📘 {item}</span>
                      <Button className="rounded-full px-5 py-2">Explore</Button>
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
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden rounded-[32px] bg-white shadow-lg">
              <Image src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80" alt="School office" width={1200} height={800} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <p className="text-sm text-yellow-300">Estd. 2022</p>
                <h3 className="text-3xl font-black">{school.name}</h3>
                <p className="text-lg text-white/80">Mahungain, Koderma, Jharkhand</p>
              </div>
              <div className="absolute bottom-6 right-6 rounded-3xl bg-yellow-400 px-6 py-5 text-center text-slate-900 shadow-xl">
                <div className="text-4xl font-black">04+</div>
                <div className="font-bold">YEARS OF TRUST</div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900">Shaping the Future of Students Since 2010</h3>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                Mahugain Public School, Markaccho is a premier English medium co-educational institution affiliated to the Jharkhand Academic Council (JAC), Ranchi.
                We offer quality education from Nursery to Class X with a strong focus on academic growth, character building, and all-round development.
              </p>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                With a commitment to holistic development, our school blends academic excellence with extracurricular activities, digital learning, and character building.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["JAC Board", "Digital Learning", "Expert Faculty", "Modern Labs", "Sports Facility"].map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white" id="academics">
        <Container>
          <SectionTitle eyebrow="Academics" title="Academic Programs" description="Comprehensive education from Nursery to Class X with the JAC curriculum and strong academic support." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {academicCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg">
                <div className={`bg-gradient-to-r ${card.color} px-6 py-7 text-white`}>
                  <h3 className="text-3xl font-black">{card.title}</h3>
                  <p className="text-lg text-white/90">{card.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Subjects Offered</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {card.subjects.map((subject) => (
                      <span key={subject} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
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
          <div className="rounded-[32px] bg-[var(--color-primary)] px-8 py-10 text-white shadow-xl">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <h3 className="text-3xl font-black">JAC Affiliated School</h3>
                <p className="mt-4 text-lg text-white/80">Affiliated to the Jharkhand Academic Council, Ranchi</p>
              </div>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
                {school.stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:border-l lg:border-white/20 lg:pl-6">
                    <div className="text-4xl font-black text-yellow-300">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white/80">{stat.label}</div>
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
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {school.admissionInfo.items.map((step, index) => (
              <Card key={step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-2xl font-black text-white">{String(index + 1).padStart(2, "0")}</div>
                <div className="mt-6 text-5xl">📋</div>
                <h3 className="mt-6 text-2xl font-black text-slate-900">{step}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-500">
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
            <h2 className="text-3xl font-black text-slate-900">Required Documents</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-lg font-medium text-slate-700 shadow-sm">
                  ✅ {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[28px] bg-[var(--color-primary)] p-8 text-white">
              <h3 className="text-2xl font-black">Contact for Admissions</h3>
              <div className="mt-6 grid gap-4 text-lg">
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
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {school.facilities.map((item, index) => (
              <Card key={item}>
                <div className="text-5xl">{["🏫", "🔬", "💻", "📚", "🏅", "🚌"][index]}</div>
                <h3 className="mt-6 text-2xl font-black text-slate-900">{item}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-500">
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
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((text, index) => (
              <Card key={text} className="flex min-h-[340px] flex-col justify-between">
                <div>
                  <div className="text-3xl text-yellow-400">❝</div>
                  <p className="mt-8 text-xl italic leading-9 text-slate-500">{text}</p>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${["bg-red-500", "bg-blue-600", "bg-green-600", "bg-violet-600"][index]}`}>
                      {["R", "P", "A", "S"][index]}
                    </div>
                    <div>
                      <div className="text-xl font-black text-slate-900">{["Rajesh Kumar", "Priya Sharma", "Amit Singh", "Sunita Devi"][index]}</div>
                      <div className="text-slate-500">{["Parent, Class VIII", "Parent, Class X", "Alumni — Board Achiever 2024", "Parent, Class V"][index]}</div>
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
          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            <div className="relative min-h-[280px] overflow-hidden rounded-[28px] lg:col-span-8">
              <Image src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80" alt="Event" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-[28px] lg:col-span-4">
              <Image src="https://images.unsplash.com/photo-1529068755536-a5adef0de2b4?auto=format&fit=crop&w=1200&q=80" alt="Sports" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-[28px] lg:col-span-4">
              <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80" alt="Academics" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-[28px] lg:col-span-4">
              <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" alt="Culture" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-[28px] lg:col-span-4">
              <Image src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80" alt="Achievement" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50" id="contact">
        <Container>
          <SectionTitle eyebrow="Get in Touch" title="Contact Us" description="We would love to hear from you. Reach out for admissions, queries, or to schedule a campus visit." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {contactLinks.map((item) => (
              <Card key={item.title} className={`min-h-[260px] text-center ${item.tone}`}>
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="text-6xl">☎️</div>
                  <h3 className="mt-8 text-3xl font-black">{item.title}</h3>
                  <p className="mt-4 whitespace-pre-line text-2xl leading-10">{item.detail}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="flex min-h-[360px] items-center justify-center overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100">
              <div className="text-center">
                <div className="text-4xl">🗺️</div>
                <div className="mt-4 text-2xl font-black text-slate-700">Parsabad, Jharkhand, India</div>
              </div>
            </div>
            <div className="rounded-[28px] bg-[var(--color-primary)] p-8 text-white">
              <h3 className="text-3xl font-black">{school.name}</h3>
              <div className="mt-8 grid gap-6 text-lg">
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
