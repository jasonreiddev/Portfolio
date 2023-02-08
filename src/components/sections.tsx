import { HeroProps } from "./hero"
import { FeatureListProps } from "../stories/kontent/FeatureList/FeatureList"
import { LogoListProps } from "../stories/kontent/LogoList/LogoList"
import { BenefitListProps } from "./benefit-list"
import { TestimonialListProps } from "./testimonial-list"
import { StatListProps } from "../stories/kontent/StatList/StatList"
import { CTAProps } from "../stories/kontent/CTA/CTA"
import { ProductListProps } from "./product-list"

import { AboutHeroProps } from "./about-hero"
import { AboutStatListProps } from "./about-stat-list"
import { AboutLeadershipProps } from "./about-leadership"
import { AboutLogoListProps } from "./about-logo-list"
import { TimelineProps } from "../stories/kontent/Timeline/Timeline"

export { default as HomepageHero } from "./hero"
export { FeatureList as HomepageFeatureList } from "../stories/kontent/FeatureList/FeatureList"
export { LogoList as HomepageLogoList } from "../stories/kontent/LogoList/LogoList"
export { default as HomepageBenefitList } from "./benefit-list"
export { default as HomepageTestimonialList } from "./testimonial-list"
export { StatList as HomepageStatList } from "../stories/kontent/StatList/StatList"
export { CTA as HomepageCta } from "../stories/kontent/CTA/CTA"
export { default as HomepageProductList } from "./product-list"
export { default as AboutHero } from "./about-hero"
export { default as AboutStatList } from "./about-stat-list"
export { default as AboutLeadership } from "./about-leadership"
export { default as AboutLogoList } from "./about-logo-list"
export { Timeline } from "../stories/kontent/Timeline/Timeline"

export type SectionProps =
  | HeroProps
  | FeatureListProps
  | LogoListProps
  | BenefitListProps
  | TestimonialListProps
  | StatListProps
  | CTAProps
  | ProductListProps
  | AboutHeroProps
  | AboutStatListProps
  | AboutLeadershipProps
  | AboutLogoListProps

type Blocktypes =
  | "HomepageHero"
  | "HomepageFeatureList"
  | "HomepageLogoList"
  | "HomepageBenefitList"
  | "HomepageTestimonialList"
  | "HomepageStatList"
  | "HomepageCta"
  | "HomepageProductList"
  | "AboutHero"
  | "AboutStatList"
  | "AboutLeadership"
  | "AboutLogoList"
  | "Timeline"

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string
  blocktype: B
} & P

export type HomepageBlock =
  | WithBlocktype<"HomepageHero", HeroProps>
  | WithBlocktype<"HomepageFeatureList", FeatureListProps>
  | WithBlocktype<"HomepageLogoList", LogoListProps>
  | WithBlocktype<"HomepageBenefitList", BenefitListProps>
  | WithBlocktype<"HomepageTestimonialList", TestimonialListProps>
  | WithBlocktype<"HomepageStatList", StatListProps>
  | WithBlocktype<"HomepageCta", CTAProps>
  | WithBlocktype<"HomepageProductList", ProductListProps>
  | WithBlocktype<"AboutHero", AboutHeroProps>
  | WithBlocktype<"AboutStatList", AboutStatListProps>
  | WithBlocktype<"AboutLeadership", AboutLeadershipProps>
  | WithBlocktype<"AboutLogoList", AboutLogoListProps>
  | WithBlocktype<"Timeline", TimelineProps>
