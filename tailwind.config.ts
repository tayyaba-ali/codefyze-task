import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}', // Adjusted path based on your structure
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'var(--background)',
    			foreground: 'var(--foreground)'
    		},
    		fontFamily: {
    			syne: [
    				'Syne',
    				'sans-serif'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
