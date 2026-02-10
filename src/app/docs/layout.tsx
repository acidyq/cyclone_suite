import { DocsLayout } from "@/components/layout/docs-layout";

export default function DocsPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DocsLayout>{children}</DocsLayout>;
}
