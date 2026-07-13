'use client'

import { SectionTitle } from '@/components/SectionTitle'
import { resources } from '@/lib/data'

import MarkdownFile from '@/components/MarkdownFile'

export default function ResourcesPage() {
  const labManualUrl = '/resources/lab-manual.md'

  return (
    <div className="space-y-10">
      <SectionTitle title="Resources" subtitle="" />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-neutralHigh">
          Lab Manual
        </h2>

        <div className="rounded-2xl border bg-surface overflow-hidden">
          <MarkdownFile src={labManualUrl} />
        </div>
      </section>

      <div className="space-y-8">
        {resources.map((section, idx) => (
          <ResourceSection
            key={idx}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </div>
  )
}

// export default function ResourcesPage() {
//   const labManualUrl = '/resources/lab-manual.md'

//   return (
//     <div className="space-y-10">
//       <SectionTitle title="Resources" subtitle="" />

//       <section className="space-y-4">
//         <h2 className="text-lg font-semibold text-neutralHigh">Lab Manual</h2>
//         <div className="rounded-2xl border bg-surface overflow-hidden">
//           <iframe
//             src={labManualUrl}
//             width="100%"
//             height="700"
//             style={{ border: 'none' }}
//             />
//         </div>
//       </section>

//       <div className="space-y-8">
//         {resources.map((section, idx) => (
//           <ResourceSection key={idx} title={section.title} items={section.items} />
//         ))}
//       </div>
//     </div>
//   )
// }

function ResourceSection({
  title,
  items,
}: {
  title: string
  items: { name: string; type: string; url: string }[]
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-neutralHigh">{title}</h2>
      <div className="rounded-2xl border bg-surface divide-y">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-5 py-3 hover:bg-panel transition-colors"
          >
            <div className="font-medium">{item.name}</div>
            <div className="text-xs text-neutralMid">{item.type}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
