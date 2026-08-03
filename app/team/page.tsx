import { people } from '@/lib/data'
import { PersonaCard } from '@/components/PersonaCard'
import { TeamMemberCard } from '@/components/TeamMemberCard'
import { SectionTitle } from '@/components/SectionTitle'

const GROUP_ORDER = ['Postdoc', 'PhD', 'Masters', 'Undergrad', 'Visiting', 'Alumni'] as const
const groupIndex = (g: string) => {
  const i = GROUP_ORDER.indexOf(g as typeof GROUP_ORDER[number])
  return i === -1 ? GROUP_ORDER.length : i
}
function intakeRank(intake?: string): number {
  if (!intake) return Number.POSITIVE_INFINITY
  const m = intake.match(/\b(Spring|Summer|Fall|Autumn|Winter)\s+(\d{4})\b/i)
  if (!m) return Number.POSITIVE_INFINITY
  const term = m[1].toLowerCase()
  const year = parseInt(m[2], 10)
  const order: Record<string, number> = { spring: 1, summer: 2, fall: 3, autumn: 3, winter: 4 }
  return year * 10 + (order[term] ?? 99)
}

export default function TeamPage() {
  const pi = people.find(p => p.group === 'PI')
  const current = people
    .filter(p => p.current === 'Yes' && p.group !== 'PI')
    .sort((a, b) => {
      const gi = groupIndex(a.group) - groupIndex(b.group)
      if (gi !== 0) return gi
      return intakeRank(a.intake) - intakeRank(b.intake)
    })
    
  const past = people
    .filter(p => p.current === 'No' && p.group !== 'PI')
    .sort((a, b) => {
      const gi = groupIndex(a.group) - groupIndex(b.group)
      if (gi !== 0) return gi
      return intakeRank(a.intake) - intakeRank(b.intake)
    })

  return (
    <div className="space-y-10">
      <SectionTitle title="Principal Investigator" subtitle="" />
      {pi && (
        <section className="max-w-4xl">
          <PersonaCard person={pi} full clickable />
        </section>
      )}

      <SectionTitle title="Team" subtitle="" />
      <section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {current.map(p => (
            <TeamMemberCard key={p.id} person={p} />
          ))}
        </div>
      </section>
      
      <SectionTitle title="Past Members" subtitle="" />
      <section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {past.map(p => (
            <TeamMemberCard key={p.id} person={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
