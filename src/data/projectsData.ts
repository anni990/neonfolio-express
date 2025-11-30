export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    images?: string[];
    tags: string[];
    purpose?: string;
    features?: string[];
    challenges?: string[];
    outcome?: string;
    links: {
        demo?: string;
        github?: string;
    };
}

export const projectsData: Project[] = [
    {
        id: 'mybillingapp',
        title: 'MyBillingApp',
        description: 'An ultimate solution for hassle-free billing and invoicing. Whether you\'re a startup, small business, or established enterprise, our app offers everything you need to streamline billing processes and save time.',
        image: '/images/mybillingapp.png',
        images: ['/images/mybillingapp_dash.png'],
        tags: ['MySQL', 'Javascript', 'Python', 'Flask', 'HTML'],
        purpose: 'To provide a user-friendly and efficient billing and invoicing system for businesses of all sizes. And connect Chartered Accountants.',
        features: [
            'Automated invoice generation',
            'Multi-user support for businesses',
            'Real-time billing analytics',
            'Integration with accounting systems',
            'Chartered Accountant connectivity'
        ],
        links: {
            demo: 'https://mba.mybillingapp.com',
            github: '#',
        },
    },
    {
        id: 'greensathi',
        title: 'GreenSathi - Krishi Guru',
        description: 'A platform where farmers can communicate with chatbot in multiple languages, analyze plant images, get soil reports and Mandi data with weather analysis.',
        image: '/images/GreenSathi-new.png',
        images: ['/images/GreenSathi-1.png', '/images/GreenSathi-2.png'],
        tags: ['LLM', 'Machine Learning', 'MySQL', 'Javascript', 'Python', 'Flask'],
        purpose: 'To help farmers make better decisions about their crops and farming practices using AI and data analysis.',
        features: [
            'Multilingual chatbot for farmer assistance',
            'Plant disease detection using image analysis',
            'Soil health report generation',
            'Real-time Mandi (market) price data',
            'Weather forecasting and analysis'
        ],
        links: {
            demo: '#',
            github: '#',
        },
    },
    {
        id: 'renewable-energy',
        title: 'Renewable Energy Forecasting',
        description: 'A problem stated by NTCP (govt. organization) to predict the generation of energy by wind and solar plants in the next upcoming days.',
        image: '/images/Renewable.png',
        images: ['/images/Renewable-1.png', '/images/Renewable-2.png'],
        tags: ['HTML', 'MySQL', 'Python-Flask', 'Machine Learning Models'],
        purpose: 'To accurately predict renewable energy generation for better grid management and resource allocation.',
        features: [
            'Wind energy generation prediction',
            'Solar energy forecasting',
            'Historical data analysis',
            'Weather pattern integration',
            'Grid management optimization'
        ],
        links: {
            demo: '#',
            github: 'https://github.com/anni990/AI-Renewable-energy-forcasting',
        },
    },
    {
        id: 'morphai',
        title: 'Morph-AI Food Waste Reduction Platform',
        description: 'A platform for caterers who provide food service to reduce food waste by predicting meals and diners.',
        image: '/images/Morphai.png',
        images: ['/images/Morphai-1.png', '/images/Morphai-2.png'],
        tags: ['Python-Flask', 'Machine Learning', 'HTML'],
        purpose: 'To help food service providers reduce waste and optimize their operations using AI predictions.',
        features: [
            'Diner count prediction',
            'Meal preference analysis',
            'Waste reduction recommendations',
            'Inventory management',
            'Cost optimization insights'
        ],
        links: {
            demo: '#',
            github: 'https://github.com/anni990/My-Public-Minor-Project',
        },
    },
];
