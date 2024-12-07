import { FaSeedling, FaCartPlus, FaHandshake, FaPiggyBank } from 'react-icons/fa'; // Importing icons

const data = [
    {
        id: 1,
        heading: 'Digital Cooperative Platform',
        content: 'A platform for managing farming cooperatives and connecting farmers with each other and the market.',
        to: '/',
        icon: <FaSeedling />, // Using FaSeedling icon for Digital Cooperative Platform
        contents: [
            {
                heading: 'Get The Maximum Benefits',
                content: 'Maximize your cooperative benefits through collaborative farming and better market access.'
            },
            {
                heading: 'Sustainable Farming Practices',
                content: 'Adopt sustainable and eco-friendly farming practices to increase productivity and preserve the environment.'
            },
        ]
    },
    {
        id: 2,
        heading: 'Farm Input Sourcing & Bulk Purchasing',
        content: 'Sourcing and bulk purchasing of essential farm inputs for better pricing and availability.',
        to: '/',
        icon: <FaCartPlus />, // Using FaCartPlus icon for Farm Input Sourcing & Bulk Purchasing
        contents: [
            {
                heading: 'Better Pricing',
                content: 'Access bulk purchasing options at discounted rates to reduce farming costs.'
            },
            {
                heading: 'Availability Assurance',
                content: 'Ensure a steady supply of quality farm inputs for every farming season.'
            },
        ]
    },
    {
        id: 3,
        heading: 'Market Access & Produce Sales',
        content: 'Connecting farmers to markets for easier and more profitable sales of their produce.',
        to: '/',
        icon: <FaHandshake />, // Using FaHandshake icon for Market Access & Produce Sales
        contents: [
            {
                heading: 'Maximize Sales',
                content: 'Gain access to local and international markets for increased revenue from your produce.'
            },
            {
                heading: 'Improve Negotiations',
                content: 'Leverage market connections to negotiate better prices for your produce.'
            },
        ]
    },
    {
        id: 4,
        heading: 'Financial Services (Microloans & Insurance)',
        content: 'Providing microloans and insurance options to farmers for better financial stability.',
        to: '/',
        icon: <FaPiggyBank />, // Using FaPiggyBank icon for Financial Services
        contents: [
            {
                heading: 'Microloans for Farmers',
                content: 'Access affordable microloans for purchasing equipment or expanding farm operations.'
            },
            {
                heading: 'Insurance Coverage',
                content: 'Secure your farm operations with comprehensive insurance plans against natural disasters and market fluctuations.'
            },
        ]
    },
]

export default data;
