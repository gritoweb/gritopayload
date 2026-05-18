import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { FaqBlockComponent } from '@/blocks/FaqBlock/Component'
import { SectionAboutComponent } from '@/blocks/SectionAbout/Component'
import { SectionLogoCloudComponent } from '@/blocks/SectionLogoCloud/Component'
import { SectionProcessComponent } from '@/blocks/SectionProcess/Component'
import { SectionProjectsComponent } from '@/blocks/SectionProjects/Component'
import { SectionServicesComponent } from '@/blocks/SectionServices/Component'
import { SectionStatsComponent } from '@/blocks/SectionStats/Component'
import { SectionTestimonialsComponent } from '@/blocks/SectionTestimonials/Component'
import { SectionCtaComponent } from '@/blocks/SectionCta/Component'
import { ContactSectionComponent } from '@/blocks/ContactSection/Component'
import { SectionContactComponent } from '@/blocks/SectionContact/Component'
import { ChecklistGridComponent } from '@/blocks/ChecklistGrid/Component'
import { PullQuoteComponent } from '@/blocks/PullQuote/Component'
import { PortfolioListingComponent } from '@/blocks/PortfolioListing/Component'
import { BlogListingComponent } from '@/blocks/BlogListing/Component'
import { LatestPostsComponent } from '@/blocks/LatestPosts/Component'
import { LatestPortfoliosComponent } from '@/blocks/LatestPortfolios/Component'

const blockComponents = {
  faqBlock: FaqBlockComponent,
  homeSectionAbout: SectionAboutComponent,
  homeSectionLogoCloud: SectionLogoCloudComponent,
  homeSectionProcess: SectionProcessComponent,
  homeSectionProjects: SectionProjectsComponent,
  homeSectionServices: SectionServicesComponent,
  homeSectionStats: SectionStatsComponent,
  homeSectionTestimonials: SectionTestimonialsComponent,
  homeSectionCta: SectionCtaComponent,
  contactSection: ContactSectionComponent,
  homeSectionContact: SectionContactComponent,
  checklistGrid: ChecklistGridComponent,
  pullQuote: PullQuoteComponent,
  portfolioListing: PortfolioListingComponent,
  blogListing: BlogListingComponent,
  latestPosts: LatestPostsComponent,
  latestPortfolios: LatestPortfoliosComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return null

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block

        if (blockType && blockType in blockComponents) {
          const Block = blockComponents[blockType as keyof typeof blockComponents]
          if (Block) {
            return (
              <div key={index}>
                <Block {...(block as any)} />
              </div>
            )
          }
        }
        return null
      })}
    </Fragment>
  )
}
