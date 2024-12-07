import { FaSeedling, FaCartPlus, FaHandshake, FaPiggyBank } from 'react-icons/fa'; // Importing icons

const data = [
    {
        id: 1,
        heading: 'Digital Cooperative Platform',
        content: 'A platform for managing farming cooperatives and connecting farmers with each other and the market.',
        to: '/',
        icon: <FaSeedling />, // Using FaSeedling icon for Digital Cooperative Platform
    },
    {
        id: 2,
        heading: 'Farm Input Sourcing & Bulk Purchasing',
        content: 'Sourcing and bulk purchasing of essential farm inputs for better pricing and availability.',
        to: '/',
        icon: <FaCartPlus />, // Using FaCartPlus icon for Farm Input Sourcing & Bulk Purchasing
    },
    {
        id: 3,
        heading: 'Market Access & Produce Sales',
        content: 'Connecting farmers to markets for easier and more profitable sales of their produce.',
        to: '/',
        icon: <FaHandshake />, // Using FaHandshake icon for Market Access & Produce Sales
    },
    {
        id: 4,
        heading: 'Financial Services (Microloans & Insurance)',
        content: 'Providing microloans and insurance options to farmers for better financial stability.',
        to: '/',
        icon: <FaPiggyBank />, // Using FaPiggyBank icon for Financial Services
    },
]

export default data;
