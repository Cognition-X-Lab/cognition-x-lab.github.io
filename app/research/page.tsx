import { researchOverview, projects, prototypes } from '@/lib/data'
import { SectionTitle } from '@/components/SectionTitle'
//import Link from 'next/link'
import { ProjectCard } from '@/components/ProjectCard'

export default function ResearchPage() {
  return (
    <div className="space-y-10">
      <SectionTitle title="Research" subtitle="" />

      <div className="rounded-xl2 border bg-panel p-6">
        <div className="text-xl font-semibold">{researchOverview.tagline}</div>
        <p className="text-neutralMid mt-2">{researchOverview.blurb}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {researchOverview.pillars.map(p => (
          <div key={p.title} className="rounded-xl2 border p-6 bg-surface">
            <div className="text-lg font-semibold">{p.title}</div>
            <p className="text-neutralMid mt-2">{p.description}</p>
          </div>
        ))}
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Projects</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
           <ProjectCard key={p.slug} project={p} clickable />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Prototypes</h3>
        {prototypes.map(p => (
          <div className="rounded-xl2 border bg-panel p-6">
            <div className="text-xl font-semibold">{p.title}</div>
            <p className="text-neutralMid mt-2">{p.summary}</p>
            {p.Url && (
              <a href={p.Url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {p.Url}
              </a>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}
