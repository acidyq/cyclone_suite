import { notFound } from "next/navigation";
import { COMPONENT_DATA } from "@/lib/constants";
import { ComponentPage } from "@/components/ui/component-page";
import { InstallCommand } from "@/components/ui/install-command";

// Demo imports - Original
import { LoaderDemo } from "@/components/demos/loader-demo";
import { ParticleButtonDemo } from "@/components/demos/particle-button-demo";
import { GlitchTextDemo } from "@/components/demos/glitch-text-demo";
import { MatrixTextDemo } from "@/components/demos/matrix-text-demo";
import { ShimmerTextDemo } from "@/components/demos/shimmer-text-demo";
import { TypewriterDemo } from "@/components/demos/typewriter-demo";
import { AILoadingDemo } from "@/components/demos/ai-loading-demo";
import { GradientButtonDemo } from "@/components/demos/gradient-button-demo";
import { AuroraBackgroundDemo } from "@/components/demos/aurora-background-demo";
import { SpotlightDemo } from "@/components/demos/spotlight-demo";
import { DockDemo } from "@/components/demos/dock-demo";
import { TiltCardDemo } from "@/components/demos/tilt-card-demo";
import { MovingBorderDemo } from "@/components/demos/moving-border-demo";
import { FlipWordsDemo } from "@/components/demos/flip-words-demo";
import { TextGenerateDemo } from "@/components/demos/text-generate-demo";
import { EncryptedTextDemo } from "@/components/demos/encrypted-text-demo";
import { GradientHeadingDemo } from "@/components/demos/gradient-heading-demo";
import { SpinningTextDemo } from "@/components/demos/spinning-text-demo";
import { MagneticButtonDemo } from "@/components/demos/magnetic-button-demo";
import { ShimmerButtonDemo } from "@/components/demos/shimmer-button-demo";
import { StatefulButtonDemo } from "@/components/demos/stateful-button-demo";
import { ExpandableCardDemo } from "@/components/demos/expandable-card-demo";
import { CardStackDemo } from "@/components/demos/card-stack-demo";
import { InfiniteSliderDemo } from "@/components/demos/infinite-slider-demo";
import { BackgroundBeamsDemo } from "@/components/demos/background-beams-demo";
import { MeteorShowerDemo } from "@/components/demos/meteor-shower-demo";
import { SparklesDemo } from "@/components/demos/sparkles-demo";
import { AccordionDemo } from "@/components/demos/accordion-demo";
import { AnimatedModalDemo } from "@/components/demos/animated-modal-demo";
import { AnimatedTabsDemo } from "@/components/demos/animated-tabs-demo";
import { ScrollProgressDemo } from "@/components/demos/scroll-progress-demo";
import { TimelineDemo } from "@/components/demos/timeline-demo";
import { DynamicIslandDemo } from "@/components/demos/dynamic-island-demo";
import { ImageCompareDemo } from "@/components/demos/image-compare-demo";
import { FileUploadDemo } from "@/components/demos/file-upload-demo";
import { CarouselDemo } from "@/components/demos/carousel-demo";
import { TextMorphDemo } from "@/components/demos/text-morph-demo";
import { TextScrambleDemo } from "@/components/demos/text-scramble-demo";
import { BorderTrailDemo } from "@/components/demos/border-trail-demo";
import { GlowEffectDemo } from "@/components/demos/glow-effect-demo";
import { TextEffectDemo } from "@/components/demos/text-effect-demo";
import { MorphingDialogDemo } from "@/components/demos/morphing-dialog-demo";
import { VortexBackgroundDemo } from "@/components/demos/vortex-background-demo";
import { WavyBackgroundDemo } from "@/components/demos/wavy-background-demo";
import { GridBackgroundDemo } from "@/components/demos/grid-background-demo";
import { LampEffectDemo } from "@/components/demos/lamp-effect-demo";
import { HeroParallaxDemo } from "@/components/demos/hero-parallax-demo";
import { TracingBeamDemo } from "@/components/demos/tracing-beam-demo";
import { Card3dDemo } from "@/components/demos/card-3d-demo";
import { FocusCardsDemo } from "@/components/demos/focus-cards-demo";
import { Marquee3dDemo } from "@/components/demos/marquee-3d-demo";
import { WorldMapDemo } from "@/components/demos/world-map-demo";

// Demo imports - NEW Aceternity
import { GlareCardDemo } from "@/components/demos/glare-card-demo";
import { WobbleCardDemo } from "@/components/demos/wobble-card-demo";
import { CardSpotlightDemo } from "@/components/demos/card-spotlight-demo";
import { SvgMaskEffectDemo } from "@/components/demos/svg-mask-effect-demo";
import { CanvasRevealDemo } from "@/components/demos/canvas-reveal-demo";
import { GlowingEffectDemo } from "@/components/demos/glowing-effect-demo";
import { HeroHighlightDemo } from "@/components/demos/hero-highlight-demo";
import { NoiseBackgroundDemo } from "@/components/demos/noise-background-demo";
import { BackgroundGradientAnimDemo } from "@/components/demos/background-gradient-anim-demo";
import { BackgroundLinesDemo } from "@/components/demos/background-lines-demo";
import { ShootingStarsDemo } from "@/components/demos/shooting-stars-demo";
import { DraggableCardDemo } from "@/components/demos/draggable-card-demo";
import { InfiniteMovingCardsDemo } from "@/components/demos/infinite-moving-cards-demo";
import { FloatingNavbarDemo } from "@/components/demos/floating-navbar-demo";
import { MultiStepLoaderDemo } from "@/components/demos/multi-step-loader-demo";
import { DirectionAwareHoverDemo } from "@/components/demos/direction-aware-hover-demo";
import { TextHoverEffectDemo } from "@/components/demos/text-hover-effect-demo";
import { TooltipCardDemo } from "@/components/demos/tooltip-card-demo";
import { ContainerScrollDemo } from "@/components/demos/container-scroll-demo";
import { EvervaultCardDemo } from "@/components/demos/evervault-card-demo";
import { GlowingStarsDemo } from "@/components/demos/glowing-stars-demo";
import { LayoutGridDemo } from "@/components/demos/layout-grid-demo";
import { AnimatedTooltipDemo } from "@/components/demos/animated-tooltip-demo";
import { StickyBannerDemo } from "@/components/demos/sticky-banner-demo";
import { VanishInputDemo } from "@/components/demos/vanish-input-demo";
import { LensDemo } from "@/components/demos/lens-demo";
import { HoverBorderGradientDemo } from "@/components/demos/hover-border-gradient-demo";
import { ThreeDPinDemo } from "@/components/demos/three-d-pin-demo";
import { FollowingPointerDemo } from "@/components/demos/following-pointer-demo";
import { BackgroundRippleDemo } from "@/components/demos/background-ripple-demo";
import { ColourfulTextDemo } from "@/components/demos/colourful-text-demo";
import { BackgroundBoxesDemo } from "@/components/demos/background-boxes-demo";
import { SignupFormDemo } from "@/components/demos/signup-form-demo";

// Demo imports - NEW Base UI Primitives
import { ToastDemo } from "@/components/demos/toast-demo";
import { TooltipDemo } from "@/components/demos/tooltip-demo";
import { PopoverDemo } from "@/components/demos/popover-demo";
import { SwitchDemo } from "@/components/demos/switch-demo";
import { SelectDemo } from "@/components/demos/select-demo";
import { ProgressDemo } from "@/components/demos/progress-demo";
import { SliderDemo } from "@/components/demos/slider-demo";
import { AvatarDemo } from "@/components/demos/avatar-demo";
import { DialogDemo } from "@/components/demos/dialog-demo";
import { AlertDialogDemo } from "@/components/demos/alert-dialog-demo";
import { ContextMenuDemo } from "@/components/demos/context-menu-demo";
import { CheckboxDemo } from "@/components/demos/checkbox-demo";
import { RadioDemo } from "@/components/demos/radio-demo";
import { ToggleDemo } from "@/components/demos/toggle-demo";
import { InputDemo } from "@/components/demos/input-demo";
import { CollapsibleDemo } from "@/components/demos/collapsible-demo";
import { SeparatorDemo } from "@/components/demos/separator-demo";
import { MeterDemo } from "@/components/demos/meter-demo";
import { PreviewCardDemo } from "@/components/demos/preview-card-demo";

import { MovingBorderButtonDemo } from "@/components/demos/moving-border-button-demo";
import { NeumorphButtonDemo } from "@/components/demos/neumorph-button-demo";
import { ColorPickerDemo } from "@/components/demos/color-picker-demo";
import { SortableListDemo } from "@/components/demos/sortable-list-demo";
import { CodeBlockDemo } from "@/components/demos/code-block-demo";
import { ToolbarDynamicDemo } from "@/components/demos/toolbar-dynamic-demo";
import { ResizableNavbarDemo } from "@/components/demos/resizable-navbar-demo";
import { MacbookScrollDemo } from "@/components/demos/macbook-scroll-demo";
import { AppleCardsDemo } from "@/components/demos/apple-cards-demo";
import { GitHubGlobeDemo } from "@/components/demos/github-globe-demo";
import { StickyScrollDemo } from "@/components/demos/sticky-scroll-demo";
import { ParallaxScrollDemo } from "@/components/demos/parallax-scroll-demo";
import { LinkPreviewDemo } from "@/components/demos/link-preview-demo";

// Generate static params for all components
export async function generateStaticParams() {
    return Object.keys(COMPONENT_DATA).map((slug) => ({
        slug,
    }));
}

// Generate metadata for each component page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const component = COMPONENT_DATA[slug];

    if (!component) {
        return {
            title: "Component Not Found",
        };
    }

    return {
        title: `${component.title} - Cyclone Suite`,
        description: component.description,
    };
}

// Component demos map
const DEMO_MAP: Record<string, React.ComponentType> = {
    // Core components
    "loader": LoaderDemo,

    // Motion components
    "text-effect": TextEffectDemo,
    "text-morph": TextMorphDemo,
    "text-scramble": TextScrambleDemo,
    "border-trail": BorderTrailDemo,
    "glow-effect": GlowEffectDemo,
    "spotlight": SpotlightDemo,
    "magnetic": MagneticButtonDemo,
    "tilt-card": TiltCardDemo,
    "infinite-slider": InfiniteSliderDemo,
    "dock": DockDemo,
    "morphing-dialog": MorphingDialogDemo,
    "scroll-progress": ScrollProgressDemo,
    "tracing-beam": TracingBeamDemo,
    "hero-parallax": HeroParallaxDemo,
    "wobble-card": WobbleCardDemo,
    "draggable-card": DraggableCardDemo,
    "direction-aware-hover": DirectionAwareHoverDemo,
    "following-pointer": FollowingPointerDemo,

    // Effects components
    "aurora-background": AuroraBackgroundDemo,
    "background-beams": BackgroundBeamsDemo,
    "meteor-shower": MeteorShowerDemo,
    "sparkles": SparklesDemo,
    "moving-border": MovingBorderDemo,
    "vortex": VortexBackgroundDemo,
    "wavy-background": WavyBackgroundDemo,
    "grid-background": GridBackgroundDemo,
    "lamp-effect": LampEffectDemo,
    "glare-card": GlareCardDemo,
    "card-spotlight": CardSpotlightDemo,
    "svg-mask-effect": SvgMaskEffectDemo,
    "canvas-reveal": CanvasRevealDemo,
    "glowing-effect": GlowingEffectDemo,
    "hero-highlight": HeroHighlightDemo,
    "noise-background": NoiseBackgroundDemo,
    "background-gradient-anim": BackgroundGradientAnimDemo,
    "background-lines": BackgroundLinesDemo,
    "shooting-stars": ShootingStarsDemo,
    "background-ripple": BackgroundRippleDemo,
    "background-boxes": BackgroundBoxesDemo,
    "evervault-card": EvervaultCardDemo,
    "glowing-stars": GlowingStarsDemo,
    "hover-border-gradient": HoverBorderGradientDemo,

    // Components
    "expandable-card": ExpandableCardDemo,
    "card-stack": CardStackDemo,
    "file-upload": FileUploadDemo,
    "image-compare": ImageCompareDemo,
    "carousel": CarouselDemo,
    "timeline": TimelineDemo,
    "dynamic-island": DynamicIslandDemo,
    "3d-card": Card3dDemo,
    "focus-cards": FocusCardsDemo,
    "3d-marquee": Marquee3dDemo,
    "world-map": WorldMapDemo,
    "tooltip-card": TooltipCardDemo,
    "container-scroll": ContainerScrollDemo,
    "layout-grid": LayoutGridDemo,
    "animated-tooltip": AnimatedTooltipDemo,
    "infinite-moving-cards": InfiniteMovingCardsDemo,
    "floating-navbar": FloatingNavbarDemo,
    "multi-step-loader": MultiStepLoaderDemo,
    "sticky-banner": StickyBannerDemo,
    "three-d-pin": ThreeDPinDemo,
    "lens": LensDemo,
    "signup-form": SignupFormDemo,

    // Text components
    "typewriter": TypewriterDemo,
    "glitch-text": GlitchTextDemo,
    "matrix-text": MatrixTextDemo,
    "shimmer-text": ShimmerTextDemo,
    "flip-words": FlipWordsDemo,
    "text-generate": TextGenerateDemo,
    "encrypted-text": EncryptedTextDemo,
    "gradient-heading": GradientHeadingDemo,
    "spinning-text": SpinningTextDemo,
    "text-hover-effect": TextHoverEffectDemo,
    "colourful-text": ColourfulTextDemo,

    // Button components
    "particle-button": ParticleButtonDemo,
    "gradient-button": GradientButtonDemo,
    "magnetic-button": MagneticButtonDemo,
    "shimmer-button": ShimmerButtonDemo,
    "stateful-button": StatefulButtonDemo,
    "moving-border-button": MovingBorderButtonDemo,
    "neumorph-button": NeumorphButtonDemo,

    // Interactive components
    "accordion": AccordionDemo,
    "animated-modal": AnimatedModalDemo,
    "animated-tabs": AnimatedTabsDemo,
    "vanish-input": VanishInputDemo,
    "color-picker": ColorPickerDemo,
    "sortable-list": SortableListDemo,
    "code-block": CodeBlockDemo,
    "toolbar-dynamic": ToolbarDynamicDemo,
    "resizable-navbar": ResizableNavbarDemo,

    // Special
    "macbook-scroll": MacbookScrollDemo,
    "apple-cards": AppleCardsDemo,
    "github-globe": GitHubGlobeDemo,
    "sticky-scroll": StickyScrollDemo,
    "parallax-scroll": ParallaxScrollDemo,
    "link-preview": LinkPreviewDemo,

    // AI components
    "ai-loading": AILoadingDemo,

    // Primitives (Base UI)
    "toast": ToastDemo,
    "tooltip": TooltipDemo,
    "popover": PopoverDemo,
    "switch": SwitchDemo,
    "select": SelectDemo,
    "progress": ProgressDemo,
    "slider": SliderDemo,
    "avatar": AvatarDemo,
    "dialog": DialogDemo,
    "alert-dialog": AlertDialogDemo,
    "context-menu": ContextMenuDemo,
    "checkbox": CheckboxDemo,
    "radio": RadioDemo,
    "toggle": ToggleDemo,
    "input": InputDemo,
    "collapsible": CollapsibleDemo,
    "separator": SeparatorDemo,
    "meter": MeterDemo,
    "preview-card": PreviewCardDemo,
};

// Placeholder demo for components without specific demos
function PlaceholderDemo({ title, description }: { title: string; description: string }) {
    return (
        <div className="text-center space-y-4">
            <div className="text-6xl">🚧</div>
            <div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    {title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {description}
                </p>
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
                Demo coming soon
            </p>
        </div>
    );
}

export default async function ComponentSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const component = COMPONENT_DATA[slug];

    if (!component) {
        notFound();
    }

    const DemoComponent = DEMO_MAP[slug];

    return (
        <ComponentPage
            title={component.title}
            description={component.description}
            installSection={<InstallCommand packageName={component.package} />}
            techBadge="Motion"
        >
            {DemoComponent ? (
                <DemoComponent />
            ) : (
                <PlaceholderDemo title={component.title} description={component.description} />
            )}
        </ComponentPage>
    );
}
