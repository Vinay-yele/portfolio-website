import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';



export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Gradient Website',
      url: 'https://gradientaiml.tech/',
      repo: 'https://github.com/Vinay-yele/Gradient-Website',
      img: '/image.png',
      year: 2023,
      tags: ['React', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'Zoro Apparel Website',
      url: 'https://v0-zoro-clothing-website.vercel.app/',
      repo: 'https://github.com/Vinay-yele/zoro-apparel',
      img: '/zoro.jpeg',
      year: 2023,
      tags: ['CSS Animations', 'Sass'],
    },






  ],
};
