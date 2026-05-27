'use client'

import Image, { type ImageProps } from 'next/image'
import { useEffect, useRef, useState } from 'react'

/**
 * Next.js Image that fades in once it has scrolled into the viewport AND
 * finished loading.
 *
 * Gating on load matters: the IntersectionObserver can fire before the
 * (lazy-loaded) image has any pixels. If we revealed then, the opacity
 * transition would run on an empty box and the image would just pop in when it
 * finally arrives. So `.is-visible` is added only when in-view AND loaded.
 *
 * The initial `opacity: 0` comes from the `.fade-in-img` class (rendered on the
 * server, so there's no flash). Users with `prefers-reduced-motion` never get
 * the hidden state (handled in CSS), and environments without
 * IntersectionObserver reveal the image as soon as it loads.
 */
export function FadeInImage({ className, alt, onLoad, ...props }: ImageProps) {
  const ref = useRef<HTMLImageElement | null>(null)
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // The image may already be complete (served from cache) before onLoad fires.
    if (el.complete && el.naturalWidth > 0) setLoaded(true)

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.01 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const merged = ['fade-in-img', inView && loaded && 'is-visible', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Image
      {...props}
      ref={ref}
      alt={alt}
      className={merged}
      onLoad={(event) => {
        setLoaded(true)
        onLoad?.(event)
      }}
      onError={() => setLoaded(true)}
    />
  )
}
