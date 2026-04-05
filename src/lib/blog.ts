import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOGS_PATH = path.join(process.cwd(), 'src/lib/content/blogs');

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
  content: string;
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOGS_PATH)) {
    return [];
  }

  const files = fs.readdirSync(BLOGS_PATH);

  const blogs = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(BLOGS_PATH, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        ...data,
        slug: file.replace('.mdx', ''),
        content,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return blogs;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOGS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    ...data,
    slug,
    content,
  } as BlogPost;
}

export function generateBlogSchema(blog: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "datePublished": blog.date,
    "author": {
      "@type": "Organization",
      "name": "UILora",
      "url": "https://www.uilora.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.uilora.com/blog/uilora/${blog.slug}`
    }
  };
}
