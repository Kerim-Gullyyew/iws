import { MetadataRoute } from 'next'
import { keyStages } from './data/keystage'
export default function sitemap(): MetadataRoute.Sitemap {

  const subjects = keyStages.map((subject) => {
    const includedCourses = subject.includedSubjects.map((course) => ({
      url: `${process.env.NEXT_WEBSITE_URL}/${course.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.8,
    }));
  
    const additionalCourses = subject.additionalSubjects.map((course) => ({
      url: `${process.env.NEXT_WEBSITE_URL}/${course.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.8,
    }));
  
    return [...includedCourses, ...additionalCourses];
  });

  const courses = subjects.flat();

  return [
    {
      url: `${process.env.NEXT_WEBSITE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_WEBSITE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_WEBSITE_URL}/cambridge-primary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_WEBSITE_URL}/cambridge-secondary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_WEBSITE_URL}/cambridge-igcse`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_WEBSITE_URL}/cambridge-a-level`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    {
      url: `${process.env.NEXT_WEBSITE_URL}/school-fees`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_WEBSITE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    {
      url: `${process.env.NEXT_WEBSITE_URL}/thank-you`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...courses
  ]
}