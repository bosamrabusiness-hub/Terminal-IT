// src/app/projects/kurskonfigurator/page.tsx
// 'use client';

import ProjectLayout from '@/app/projects/ProjectLayout';

export default function KurskonfiguratorPage() {
  return (
    <ProjectLayout slug="kurskonfigurator">
      <section className="p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4">Kurskonfigurator</h1>
        <p className="mb-2">
          Welcome to the Kurskonfigurator page! Use this area to add unique
          content related to your course configuration tool.
        </p>
        {/* You can add more components, forms, images, etc. here */}
      </section>
    </ProjectLayout>
  );
}
