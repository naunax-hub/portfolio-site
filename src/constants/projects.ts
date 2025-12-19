export interface Project {
  id: string
  title: string
  category: string
  description: string
  heroImage: string
  challenge: string
  solution: string
  results: string[]
  nextProjectId: string
}

export const PROJECTS: Project[] = [
  {
    id: 'restaurant',
    title: 'Restaurant Experience',
    category: 'UX/UI Design',
    description: 'A comprehensive ecosystem for restaurant management, optimizing workflows from kitchen to front-of-house.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000',
    challenge: 'Restaurant owners struggled with fragmented systems that didn\'t communicate with each other, leading to bottlenecks in order management, kitchen coordination, and customer service.',
    solution: 'We designed an integrated platform that seamlessly connects front-of-house operations with kitchen management, real-time inventory tracking, and customer relationship tools. The interface was optimized for both quick interactions at the counter and detailed analytics for management.',
    results: ['40% reduction in order processing time', '25% increase in customer satisfaction', 'Unified dashboard for all operations'],
    nextProjectId: 'retail'
  },
  {
    id: 'retail',
    title: 'Retail Experience',
    category: 'UX/UI Design',
    description: 'Revolutionizing the shopping journey by blending self-scanning autonomy with mobile versatility.',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
    challenge: 'Retailers wanted to modernize the shopping experience but faced challenges in balancing self-service convenience with traditional point-of-sale requirements, plus the need for real-time inventory visibility.',
    solution: 'We created a mobile-first platform that enables customers to scan items themselves, access personalized recommendations, and complete purchases directly from their phones. Store associates get real-time inventory updates and customer analytics to improve service.',
    results: ['35% faster checkout process', 'Increased average transaction value by 20%', 'Better inventory accuracy'],
    nextProjectId: 'diesel'
  },
  {
    id: 'diesel',
    title: 'Diesel Redesign',
    category: 'AI Content Design',
    description: 'Leveraging generative AI to explore new visual languages and narrative structures for modern luxury brands.',
    heroImage: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?auto=format&fit=crop&q=80&w=1000',
    challenge: 'Luxury fashion brands face the challenge of maintaining exclusivity and prestige while adapting to digital-first consumer behaviors and the need for personalized brand experiences at scale.',
    solution: 'Using generative AI, we developed a dynamic brand language that adapts to different channels and audience segments while maintaining core brand identity. AI-powered content creation tools enabled rapid campaign development with consistent visual storytelling.',
    results: ['300% increase in social engagement', 'Faster content production cycles', 'Stronger brand consistency across channels'],
    nextProjectId: 'restaurant'
  }
]

export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find(project => project.id === id)
}

export const getNextProject = (currentId: string): Project | undefined => {
  const current = getProjectById(currentId)
  return current ? getProjectById(current.nextProjectId) : undefined
}
