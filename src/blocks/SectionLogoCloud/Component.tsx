import React from 'react'
import Image from 'next/image'
import type { SectionLogoCloudBlock, Media } from '@/payload-types'
import { LogoCloud } from '@/components/sections'
import { LogoMark } from '@/home/cards'
import { parseTitle } from '@/utilities/parseTitle'
import { titleMaxWidthClass, type TitleMaxWidth } from '@/utilities/titleMaxWidthClass'

export const SectionLogoCloudComponent: React.FC<SectionLogoCloudBlock> = ({
  eyebrow,
  title,
  titleMaxWidth,
  description,
  partners,
}) => {
  return (
    <LogoCloud
      eyebrow={eyebrow}
      title={title ? parseTitle(title) : undefined}
      titleClassName={titleMaxWidthClass(titleMaxWidth as TitleMaxWidth | null | undefined)}
      description={description ?? undefined}
      items={(partners ?? []).map((partner) => {
        const logo = partner.logo as Media
        return (
          <LogoMark
            key={partner.id}
            icon={
              logo?.url ? (
                <Image
                  src={logo.url}
                  alt={logo.alt ?? ''}
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              ) : undefined
            }
          />
        )
      })}
    />
  )
}
