import { FaSeedling, FaCartPlus, FaHeartbeat } from 'react-icons/fa'; // Importing icons

const data = [
    {
        id: 1,
        heading: 'Digital Cooperative Platform',
        content: 'Enables small-scale farmers to access high-quality inputs at reduced prices through bulk purchasing.',
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
        id: 4,
        heading: 'Crop Diagnosis Service',
        content: 'Scan your crops for pest issues, nutrient deficiencies, or disease signs, and receive expert advice on improving crop health.',
        to: '/',
        icon: <FaHeartbeat />, // Using FaPiggyBank icon for Financial Services
    },
]

export default data;
