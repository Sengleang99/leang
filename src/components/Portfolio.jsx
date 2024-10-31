import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ProjectImage from "../assets/f8c12fd0ad6f7c09576ffef2de8b33d5.png"; // Replace with your image
import Data_Analytic_Image from "../assets/image.png";
import folio from "../assets/Screenshot 2024-09-05 170105.png";
import portal from "../assets/portal.png";
import zando from "../assets/Screenshot 2024-09-05 171654.png";
import pos from "../assets/Screenshot 2024-09-05 180526.png";
import photo from "../assets/photo.png";
import news from "../assets/news.png";



function Portfolio() {
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration (optional)
            once: false, // Whether animation should happen only once
        });
    }, []);

    const projects = [
        { id: 1, title: 'My Web Portfolio', image: folio, url: 'https://porfolio-tawny-five.vercel.app/' },
        { id: 2, title: 'Fullstack POS System', image: pos, url: 'https://www.example.com/project-two' },
        { id: 3, title: 'Fullstack System Portal Student', image: portal, url: 'https://www.example.com/project-three' },
        { id: 4, title: 'Photography', image: photo, url: 'https://photographer-zeta.vercel.app/' },
        { id: 5, title: 'Web News PHP', image: news, url: 'https://www.example.com/project-five' },
        { id: 6, title: 'Web Front-End Data Analytic', image: Data_Analytic_Image, url: 'https://manage-data-e5b6.vercel.app/' },
        { id: 7, title: 'Zendo', image: zando, url: 'https://www.example.com/project-six' },
        { id: 8, title: 'No avialable project', image: ProjectImage, url: 'https://www.example.com/project-seven' },
        { id: 9, title: 'No avialable project', image: ProjectImage, url: 'https://www.example.com/project-seven' },
    ];

    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className='mb-5 text-black bg-slate-50' id='portfolio'>
            <div className='container flex flex-col items-center justify-center h-full px-4 mx-auto md:px-8 lg:px-16'>
                <section className="bg-white">
                    <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
                        <h2 data-aos="zoom-in" className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-center md:text-3xl sm:text-3xl">
                            My Portfolio
                        </h2>
                        <p data-aos="zoom-in" className="mb-6 font-light text-center text-gray-500 lg:mb-8 dark:text-gray-400 sm:text-lg">
                            All of my latest developed projects are here. Simply click the projects <br /> title and visit my full project.
                        </p> 
                    </div>
                    <div className='grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 '>
                        {visibleProjects.map((project) => (
                            <div data-aos="zoom-in" key={project.id} className='overflow-hidden bg-white rounded-lg shadow-md'>
                                <img src={project.image} className='object-cover w-full h-48' alt={project.title} />
                                <div className='p-4'>
                                    <h3 className='text-lg font-light text-gray-500'>
                                        <a href={project.url} target='_blank' rel="noopener noreferrer" className='hover:underline'>
                                            {project.title}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {projects.length > 6 && (
                        <div data-aos="zoom-in" className="flex justify-center mt-6">
                            <button 
                                onClick={handleToggleShowAll} 
                                className="px-6 py-3 font-semibold text-white bg-blue-600 rounded hover:bg-blue-500"
                            >
                                {showAll ? 'Show Less' : 'See All My Projects'}
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Portfolio;
