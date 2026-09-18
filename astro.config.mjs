// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightSidebarSwipe from 'starlight-sidebar-swipe';
import starlightUiTweaks from 'starlight-ui-tweaks';
import starlightPageActions from 'starlight-page-actions';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
    site: 'https://wiki.vistavalley.net',
    trailingSlash: 'always',
    integrations: [
        starlight({
            title: 'Vista Valley',
            description: 'Official documentation for Vista Valley',
            logo: {
                src: './src/assets/images/logo.png',
                alt: 'Vista Valley Logo',
                replacesTitle: true,
            },
            editLink: {
                baseUrl: 'https://github.com/VistaValleyMC/wiki/edit/main/',
            },
            defaultLocale: 'root',
            locales: {
                root: { label: 'English', lang: 'en' },
                // id: { label: 'Bahasa Indonesia', lang: 'id' },
            },
            favicon: '/logo.png',
            social: [{ icon: 'discord', label: 'Discord', href: 'https://discord.vistavalley.net' }, { icon: 'github', label: 'GitHub', href: 'https://github.com/VistaValleyMC' }],
            customCss: ['./src/styles/custom.css', '@fontsource-variable/anuphan/wght.css'],
            head: [
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:image',
                        content: 'https://wiki.vistavalley.net/logo.png'
                    }
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'twitter:image',
                        content: 'https://wiki.vistavalley.net/logo.png'
                    }
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'twitter:card',
                        content: 'summary'
                    }
                }
            ],
            lastUpdated: true,
            plugins: [
                starlightSidebarTopics([
                    {
                        label: 'Home',
                        link: 'home/welcome',
                        icon: 'open-book',
                        items: [
                            {
                                label: 'Welcome',
                                link: 'home/welcome',
                            },
                            {
                                label: 'How to Join',
                                link: 'home/how-to-join',
                            },
                            {
                                label: 'Rules',
                                link: 'home/rules',
                            },
                            {
                                label: 'Vote',
                                link: 'home/vote',
                            },
                            {
                                label: 'FAQ',
                                link: 'home/faq',
                            }
                        ],
                    },
                    {
                        label: 'Earth',
                        link: 'earth',
                        icon: 'sun',
                        items: [
                            {
                                label: 'Gameplay',
                                collapsed: true,
                                items: [
                                    { autogenerate: { directory: 'earth/gameplay', collapsed: true } }
                                ],
                            },
                            {
                                label: 'Economy',
                                collapsed: true,
                                items: [
                                    { autogenerate: { directory: 'earth/economy', collapsed: true } }
                                ],
                            },
                            {
                                label: 'Towny',
                                collapsed: true,
                                items: [
                                    { label: 'Overview', link: 'earth/towny' },
                                    { label: 'Commands', link: 'earth/towny/commands' },
                                    { label: 'Towns', items: [{ autogenerate: { directory: 'earth/towny/towns', collapsed: true } }] },
                                    { label: 'Nations', items: [{ autogenerate: { directory: 'earth/towny/nations', collapsed: true } }] },
                                ]
                            },
                            {
                                label: 'Fluff',
                                collapsed: true,
                                items: [
                                    { autogenerate: { directory: 'earth/fluff', collapsed: true } }
                                ],
                            },
                            {
                                label: 'Technical',
                                collapsed: true,
                                items: [
                                    { autogenerate: { directory: 'earth/technical', collapsed: true } }
                                ],
                            },
                            {
                                label: 'Remnants of Gaia',
                                collapsed: true,
                                items: [
                                    { autogenerate: { directory: 'earth/remnants', collapsed: true } }
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Branding',
                        link: 'branding',
                        icon: 'pen',
                        items: [
                            {
                                label: 'Overview',
                                link: 'branding',
                            }
                        ],
                    },
                ]),
                starlightSidebarSwipe(),
                starlightUiTweaks({
                    navbarLinks: [
                        { label: "Discord Server", href: "https://discord.vistavalley.net" },
                        { label: "Live Map", href: "https://map.vistavalley.net" },
                        { label: "Webstore", href: "https://store.vistavalley.net" },
                    ],
                }),
                starlightPageActions({
                    share: true,
                }),
                starlightLlmsTxt({
                    promote: ['home/welcome*', 'home/play-now*', 'home/**/*'],
                    demote: ['branding*'],
                })
            ],
        }),
    ]
});
