"use client";

import { notFound } from "next/navigation";
import { BLOCK_DATA } from "@/lib/constants";
import { ComponentPage } from "@/components/ui/component-page";
import { InstallCommand } from "@/components/ui/install-command";
import { use } from "react";

// Block demos
import { HeroBlockDemo } from "@/components/blocks/hero-block";
import { FeaturesBlockDemo } from "@/components/blocks/features-block";

import { TestimonialsBlockDemo } from "@/components/blocks/testimonials-block";
import { FaqBlockDemo } from "@/components/blocks/faq-block";
import { FooterBlockDemo } from "@/components/blocks/footer-block";
import { NavbarBlockDemo } from "@/components/blocks/navbar-block";
import { CtaBlockDemo } from "@/components/blocks/cta-block";
import { ContactBlockDemo } from "@/components/blocks/contact-block";
import { BlogBlockDemo } from "@/components/blocks/blog-block";
import { BentoBlockDemo } from "@/components/blocks/bento-block";
import { StatsBlockDemo } from "@/components/blocks/stats-block";

// Block demos map
const BLOCK_DEMO_MAP: Record<string, React.ComponentType> = {
    "hero": HeroBlockDemo,
    "features": FeaturesBlockDemo,

    "testimonials": TestimonialsBlockDemo,
    "faq": FaqBlockDemo,
    "footer": FooterBlockDemo,
    "navbar": NavbarBlockDemo,
    "cta": CtaBlockDemo,
    "contact": ContactBlockDemo,
    "blog": BlogBlockDemo,
    "bento": BentoBlockDemo,
    "stats": StatsBlockDemo,
};

export default function BlockSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const block = BLOCK_DATA[slug];

    if (!block) {
        notFound();
    }

    const DemoComponent = BLOCK_DEMO_MAP[slug];

    return (
        <ComponentPage
            title={block.title}
            description={block.description}
            installSection={<InstallCommand packageName={block.package} />}
            techBadge="Blocks"
        >
            {DemoComponent ? (
                <DemoComponent />
            ) : (
                <div className="text-center space-y-4">
                    <div className="text-6xl">🚧</div>
                    <div>
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                            {block.title}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {block.description}
                        </p>
                    </div>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500">
                        Demo coming soon
                    </p>
                </div>
            )}
        </ComponentPage>
    );
}
