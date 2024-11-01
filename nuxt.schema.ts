import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    profile: group({
      title: 'Personal Information',
      description: 'Personal Information Configuration',
      icon: 'i-lucide-user',
      fields: {
        name: field({
          type: 'string',
          title: 'Name',
          description: 'Your First and Last Name',
          icon: 'i-lucide-user',
          default: 'Favour Emeka',
        }),
        jobTittle: field({
          type: 'string',
          title: 'Job Tittle',
          description: 'Your Job Tittle',
          icon: 'i-lucide-briefcase',
          default: 'Front-end Web Developer',
        }),
        description: field({
          type: 'string',
          title: 'Description',
          description: 'Very brief introduction about yourself',
          icon: 'i-lucide-text',
          default: 'Vue/Nuxt Front-end Web Developer proficient in building user-friendly web applications.',
        }),
        location: field({
          type: 'string',
          title: 'Location',
          description: 'Your Location',
          icon: 'i-lucide-map-pin',
          default: 'Imo, Nigeria.',
        }),
        email: field({
          type: 'string',
          title: 'Email',
          description: 'Your Email Address',
          icon: 'i-lucide-mail',
          default: 'favorodera@gmail.com',
        }),
        phone: field({
          type: 'string',
          title: 'Phone',
          description: 'Your Phone Number',
          icon: 'i-lucide-phone',
          default: '+234-802-438-3756',
        }),
        website: field({
          type: 'string',
          title: 'Website',
          description: 'Your Website',
          icon: 'i-lucide-link',
          default: 'https://favorodera.vercel.app',
        }),
        picture: field({
          type: 'string',
          title: 'Picture',
          description: 'Your Picture',
          icon: 'i-lucide-image',
          default: '/avatar.jpg',
        }),
      },
    }),

    socials: group({
      title: 'Socials',
      description: 'Socials Configuration',
      icon: 'i-lucide-link',
      fields: {
        github: field({
          type: 'string',
          title: 'Github',
          description: 'Your Github Profile',
          icon: 'i-lucide-github',
          default: 'https://github.com/favorodera',
        }),
        twitter: field({
          type: 'string',
          title: 'Twitter',
          description: 'Your Twitter Profile',
          icon: 'i-lucide-twitter',
          default: 'https://twitter.com/favordoera',
        }),
        linkedin: field({
          type: 'string',
          title: 'Linkedin',
          description: 'Your Linkedin Profile',
          icon: 'i-lucide-linkedin',
          default: 'https://linkedin.com/in/favorodera',
        },
        ),
      },
    }),

    seo: group({
      title: 'SEO',
      description: 'SEO configuration',
      icon: 'i-lucide-search',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Title of your website (used in the preview of your website).',
          icon: 'i-lucide-type-outline',
          default: 'Favour Emeka | Resume',
        }),
        description: field({
          type: 'string',
          title: 'Description',
          description: 'Description of your website (used in the preview of your website).',
          icon: 'i-lucide-scroll-text',
          default: 'Favour Emeka - Front-end Web Developer',
        }),
        url: field({
          type: 'string',
          title: 'URL',
          description: 'Public URL of your website.',
          icon: 'i-lucide-link',
          default: 'https://resume-favorodera.vercel.app',
        }),
        image: field({
          type: 'string',
          title: 'Image',
          description: 'The image that will be displayed in the preview of your website (when you share it on social networks).',
          icon: 'i-lucide-image',
          default: '/images/avatar.jpg',
        }),
        lang: field({
          type: 'string',
          title: 'Language',
          description: 'The language that you want to use for your website.',
          icon: 'i-lucide-speech',
          default: 'en',
        }),
      },
    }),
  },
})
