import { notFound } from "next/navigation";
import { CATEGORIES, getCategoryComponents, getCategoryGroups } from "@/src/lib/categories";
import CategoryPage from "@/src/components/commom/category-page";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const config = CATEGORIES.find((c) => c.slug === category);
  if (!config) return {};
  return {
    title: `${config.name} — UIlora`,
    description: config.description,
  };
}

export default async function CategoryRoute({ params }: Props) {
  const { category } = await params;
  const config = CATEGORIES.find((c) => c.slug === category);
  if (!config) notFound();

  const components = getCategoryComponents(category);
  const groups = getCategoryGroups(category);

  return (
    <div className="min-h-screen bg-black">
      <CategoryPage
        title={config.name}
        description={config.description}
        components={components}
        basePath={`/${category}`}
        groups={groups}
      />
    </div>
  );
}
