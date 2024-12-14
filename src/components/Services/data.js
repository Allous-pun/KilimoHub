import { FaSeedling, FaCartPlus, FaHeartbeat } from 'react-icons/fa';

const data = [
    {
        id: 1,
        heading: 'Digital Cooperative Platform',
        content: 'Enables small-scale farmers to access high-quality inputs at reduced prices through bulk purchasing.',
        to: '/',
        icon: <FaSeedling />,
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
        heading: 'Farm Input Bulk Purchasing',
        content: 'Save costs and improve efficiency by sourcing quality inputs like seeds and fertilizers at bulk rates through MazaoHub.',
        to: '/',
        icon: <FaCartPlus />,
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
        id: 4,
        heading: 'Crop Diagnosis Service',
        content: 'Scan your crops for pest issues, nutrient deficiencies, or disease signs, and receive expert advice on improving crop health.',
        to: '/',
        icon: <FaHeartbeat />,
        contents: [
            {
                heading: 'Crop Health Analysis',
                content: 'Receive a detailed analysis and expert advice to improve crop yield and health.'
            },
            {
                heading: 'Actionable Insights',
                content: 'Get tailored recommendations to address specific crop issues effectively.'
            },
        ]
    },
]

export default data;
