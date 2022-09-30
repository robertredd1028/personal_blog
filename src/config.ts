import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    // media: {
    //     path: '/media',
    //     title: 'media'
    // },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'RobertRedd',
    title: 'RobertRedd - My Personal Blog',
    description: "robertredd's personal blog build on Astro",
    url: 'https://sensational-sopapillas-961977.netlify.app/',
    githubUrl: 'https://github.com/robertredd1028/personal_blog',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
