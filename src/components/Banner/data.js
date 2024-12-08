import banner1 from '../../assets/home/banner1.png';  // Updated path for banner1
import banner2 from '../../assets/home/banner2.png';  // Path for banner2
import banner3 from '../../assets/home/banner3.png';  // Path for banner3

const slides = [
  {
    id: 2,
    image: banner2,
    text: 'Farm Supplies',
    description: 'Access high-quality farm inputs, equipment, and resources tailored for your agricultural needs.',
    buttonLabel: "Explore Supplies",
    link: '/farm-supplies'  // Link to the second page
  },
  {
    id: 3,
    image: banner3,
    text: 'Market Hub',
    description: 'Connect directly to buyers and sellers with a seamless marketplace for agricultural products.',
    buttonLabel: "Visit Market Hub",
    link: '/market-hub'  // Link to the third page
  },
  {
    id: 4, // Duplicated the slide with id: 1
    image: banner1,  // Image for the first slide
    text: 'Digital Cooperative Platform',
    description: 'Empowering farmers to collaborate and thrive with digital tools for management and communication.',
    buttonLabel: "Learn More",
    link: '/digital-cooperative-platform'  // Link to the first page
  }
];

export default slides;
