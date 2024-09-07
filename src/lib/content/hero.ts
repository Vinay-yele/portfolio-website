import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Vinay Yele.',
  tagline: 'I create visually pleasing interfaces for the web.',
  description:
    "Passionate about technology, particularly machine learning and software development. Completed projects in machine learning and currently focusing on mastering data structures and algorithms. Thrive in dynamic environments and enjoy solving complex problems.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
