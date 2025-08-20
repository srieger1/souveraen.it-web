'use client'

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Wrench, GraduationCap, Server, Settings, CheckCircle2, ArrowRight, LockKeyhole, Cpu, GitBranch, BookOpen, Phone, Mail, MapPin, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Farbwelt (an Logo angelehnt): Dunkelblau & Grün
const brand = {
  primary: "#0b3b5a", // dark blue
  accent: "#16a34a", // green
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

function Nav() {
  const links = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#vorteile", label: "Warum wir" },
    { href: "#prozess", label: "Vorgehen" },
    { href: "#schulungen", label: "Schulungen" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border" style={{ borderColor: brand.primary }}>
            <ShieldCheck style={{ color: brand.accent }} className="h-5 w-5" />
          </span>
          <span className="text-xl font-bold tracking-tight" style={{ color: brand.primary }}>Souverän<span className="text-neutral-900">IT</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#kontakt">
            <Button className="rounded-2xl" style={{ backgroundColor: brand.accent }}>Kostenloses Erstgespräch</Button>
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20" style={{ background: brand.accent }} />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-20" style={{ background: brand.primary }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 110, damping: 16 }} className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Badge className="mb-4" style={{ backgroundColor: brand.primary }}>Digitale Souveränität • Open Source • Eigenbetrieb</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-neutral-900">
              Aufbau & Betrieb souveräner IT‑Infrastrukturen –
              <span className="block" style={{ color: brand.primary }}>mit Open Source, sicher und eigenständig</span>
            </h1>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl">
              SouveränIT unterstützt Sie dabei, Private‑ und Public‑Cloud‑Alternativen wie OpenStack und Nextcloud zu planen, aufzusetzen und nachhaltig selbst zu betreiben. Wir befähigen Teams – von der Inbetriebnahme bis zu Schulungen & Best Practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#kontakt"><Button size="lg" className="rounded-2xl px-6" style={{ backgroundColor: brand.accent }}>Projekt anfragen</Button></a>
              <a href="#leistungen"><Button variant="outline" size="lg" className="rounded-2xl px-6">Leistungen ansehen</Button></a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
              <div className="inline-flex items-center gap-2"><LockKeyhole className="h-4 w-4" /> DSGVO‑konform</div>
              <div className="inline-flex items-center gap-2"><GitBranch className="h-4 w-4" /> 100% Open Source Fokus</div>
              <div className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> Enablement statt Abhängigkeit</div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl opacity-20 blur-xl" style={{ background: brand.accent }} />
              <Card className="relative rounded-3xl shadow-xl">
                <CardHeader>
                  <CardTitle>Ihr Weg zur souveränen Cloud</CardTitle>
                  <CardDescription>Schritt für Schritt zum Eigenbetrieb</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {[
                    { icon: <Cpu className="h-5 w-5" />, t: "Architektur & Planung" },
                    { icon: <Server className="h-5 w-5" />, t: "Inbetriebnahme & Automatisierung" },
                    { icon: <Settings className="h-5 w-5" />, t: "Betrieb, Monitoring & Härtung" },
                    { icon: <GraduationCap className="h-5 w-5" />, t: "Training & Übergabe an Ihr Team" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-neutral-100 flex items-center justify-center">{s.icon}</div>
                      <span className="font-medium">{s.t}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Leistungen() {
  const items = [
    {
      title: "OpenStack Private Cloud",
      desc: "Design, Deployment (IaC), Härtung, Upgrades & Betriebsübergabe – von Proof‑of‑Concept bis Produktion.",
      icon: Cloud,
      bullets: ["HA‑Architekturen", "Ceph/SDS", "K8s‑Integration"],
    },
    {
      title: "Nextcloud & Kollaboration",
      desc: "Sichere Datei‑, Sync‑ & Kollaborationsplattform als Alternative zu US‑Public‑Clouds – inkl. Backup & SSO.",
      icon: Wrench,
      bullets: ["Skalierung", "Hardening", "Monitoring"],
    },
    {
      title: "Betrieb & Automation",
      desc: "GitOps, CI/CD, Observability – wir bringen Best Practices in Ihren Alltag und machen Sie unabhängig.",
      icon: Settings,
      bullets: ["Ansible/Terraform", "Prometheus/Grafana", "Incident‑Prozesse"],
    },
  ];

  return (
    <section id="leistungen" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="rounded-3xl h-full">
                <CardHeader>
                  <div className="h-11 w-11 rounded-2xl bg-neutral-100 inline-flex items-center justify-center mb-3">
                    {React.createElement(it.icon, { className: "h-5 w-5" })}
                  </div>
                  <CardTitle>{it.title}</CardTitle>
                  <CardDescription>{it.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    {it.bullets.map((b, i) => (
                      <li key={i} className="text-sm inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: brand.accent }} /> {b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Vorteile() {
  const points = [
    { title: "Enablement statt Abhängigkeit", desc: "Wir bauen mit Ihnen – und übergeben strukturiert in Ihr Team.", icon: Rocket },
    { title: "Sicher & compliant", desc: "Härtung, Zero‑Trust‑Prinzipien und DSGVO‑konforme Setups.", icon: ShieldCheck },
    { title: "100% Open‑Source‑Fokus", desc: "Keine Vendor‑Lock‑ins, transparente Roadmaps, lebendige Communities.", icon: GitBranch },
  ];
  return (
    <section id="vorteile" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight">Warum SouveränIT?</h2>
            <p className="mt-4 text-neutral-600">Wir liefern nachhaltige Infrastruktur – technisch exzellent, transparent dokumentiert und darauf ausgelegt, von Ihren Teams selbst betrieben zu werden.</p>
            <a href="#kontakt" className="inline-flex mt-6"><Button className="rounded-2xl" style={{ backgroundColor: brand.primary }}>Beratung anfragen</Button></a>
          </div>
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-4">
            {points.map((p, i) => (
              <Card key={i} className="rounded-3xl">
                <CardHeader>
                  <div className="h-10 w-10 rounded-2xl bg-neutral-100 inline-flex items-center justify-center mb-2">{React.createElement(p.icon, { className: "h-5 w-5" })}</div>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Prozess() {
  const steps = [
    { k: "01", t: "Scoping & Architektur", d: "Ziele, Compliance, Plattform‑Design, Kapazitäten & Budget." },
    { k: "02", t: "Pilot & Automatisierung", d: "IaC, GitOps, CI/CD – reproduzierbar und dokumentiert." },
    { k: "03", t: "Sicherer Betrieb", d: "Monitoring, Backups, Patch‑Prozesse, Notfall‑Übungen." },
    { k: "04", t: "Enablement & Übergabe", d: "Trainings, Runbooks, On‑Call‑Guides, Wissensaufbau." },
  ];
  return (
    <section id="prozess" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight mb-10">So arbeiten wir</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Card key={i} className="rounded-3xl">
              <CardHeader>
                <Badge variant="secondary" className="w-fit" style={{ backgroundColor: brand.accent, color: "white" }}>{s.k}</Badge>
                <CardTitle className="mt-2">{s.t}</CardTitle>
                <CardDescription>{s.d}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schulungen() {
  const topics = [
    { t: "OpenStack Admin Essentials", d: "Vom Aufbau bis zu Upgrades und Fehlersuche.", lvl: "2 Tage" },
    { t: "Nextcloud für Unternehmen", d: "Hardening, Skalierung, SSO & Backup.", lvl: "1 Tag" },
    { t: "GitOps & IaC mit Ansible/Terraform", d: "Wiederholbare Deployments & Betrieb.", lvl: "2 Tage" },
    { t: "Observability mit Prometheus/Grafana", d: "Dashboards, Alerting, SRE‑Patterns.", lvl: "1–2 Tage" },
  ];
  return (
    <section id="schulungen" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight">Schulungen & Enablement</h2>
            <p className="mt-4 text-neutral-600">Praxisnah, herstellerunabhängig und auf Ihren Stack zugeschnitten. Auf Wunsch mit Zertifikatsprüfung.</p>
            <div className="mt-6 flex items-center gap-3">
              <Badge variant="outline">On‑site</Badge>
              <Badge variant="outline">Remote</Badge>
              <Badge variant="outline">Deutsch & Englisch</Badge>
            </div>
          </div>
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
            {topics.map((c, i) => (
              <Card key={i} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-lg">{c.t}</CardTitle>
                  <CardDescription>{c.d}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">Dauer: {c.lvl}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Kontakt() {
  return (
    <section id="kontakt" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight">Kostenloses Erstgespräch</h2>
            <p className="mt-4 text-neutral-300">Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns mit Terminvorschlägen und einer groben Aufwandsschätzung.</p>
            <ul className="mt-6 space-y-3 text-neutral-300">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +49 (0) 30 000 000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> kontakt@souveraenit.de</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Berlin • Remote‑first in D‑A‑CH</li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <Card className="rounded-3xl bg-white text-neutral-900">
              <CardHeader>
                <CardTitle>Projekt anfragen</CardTitle>
                <CardDescription>Wir antworten in der Regel innerhalb eines Werktags.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Vor- und Nachname" required />
                    <Input placeholder="E-Mail" type="email" required />
                  </div>
                  <Input placeholder="Unternehmen / Organisation" />
                  <Input placeholder="Thema (z. B. OpenStack, Nextcloud, Automation)" />
                  <Textarea placeholder="Kurzbeschreibung Ihres Vorhabens" rows={5} />
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-neutral-500">Mit dem Senden stimmen Sie der Verarbeitung Ihrer Daten gemäß Datenschutzhinweisen zu.</div>
                    <Button className="rounded-2xl" style={{ backgroundColor: brand.accent }}>Senden <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border" style={{ borderColor: brand.primary }}>
              <ShieldCheck style={{ color: brand.accent }} className="h-4 w-4" />
            </span>
            <strong className="tracking-tight">SouveränIT</strong>
          </div>
          <p className="text-neutral-600">Open‑Source‑Infrastrukturen, die Sie selbstbestimmt betreiben können.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Leistungen</div>
          <ul className="space-y-2 text-neutral-600">
            <li>OpenStack Private Cloud</li>
            <li>Nextcloud & Kollaboration</li>
            <li>Betrieb & Automation</li>
            <li>Schulungen</li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Rechtliches</div>
          <ul className="space-y-2 text-neutral-600">
            <li>Impressum</li>
            <li>Datenschutz</li>
            <li>AGB</li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Kontakt</div>
          <ul className="space-y-2 text-neutral-600">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> kontakt@souveraenit.de</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Berlin • Remote‑first</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} SouveränIT. Alle Rechte vorbehalten.</div>
    </footer>
  );
}

export default function SouveraenITSite() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />
      <Hero />
      <Leistungen />
      <Vorteile />
      <Prozess />
      <Schulungen />
      <Kontakt />
      <Footer />
    </div>
  );
}
