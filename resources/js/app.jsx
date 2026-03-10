import '../css/app.css';
import './bootstrap';

import { Ziggy } from './ziggy';
import { route } from 'ziggy-js';

window.route = (name, params, absolute) => route(name, params, absolute, Ziggy);

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx');

        const normalized = name
            .split('/')
            .map(p => p.charAt(0).toUpperCase() + p.slice(1))
            .join('/');

        return resolvePageComponent(
            `./Pages/${normalized}.jsx`,
            pages
        );
    },

    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },

    progress: {
        color: '#4B5563',
    },
});
