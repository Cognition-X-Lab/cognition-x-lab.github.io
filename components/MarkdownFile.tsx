'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

type MarkdownFileProps = {
  src: string
}

export default function MarkdownFile({ src }: MarkdownFileProps) {
  const [markdown, setMarkdown] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadMarkdown() {
      try {
        const response = await fetch(src, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Could not load Markdown file: ${response.status}`)
        }

        const text = await response.text()
        setMarkdown(text)
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError(error.message)
        }
      }
    }

    loadMarkdown()

    return () => {
      controller.abort()
    }
  }, [src])

  if (error) {
    return <div className="p-6 text-red-600">{error}</div>
  }

  if (!markdown) {
    return <div className="p-6 text-neutral-500">Loading lab manual...</div>
  }

  return (
<div>
  <article className="markdown-body">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {markdown}
    </ReactMarkdown>
  </article>
</div>
  )
}