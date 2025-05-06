
const animationDuration = 2;
export const variants = {
    initial : {pathLength:1,strokeOpacity:1, fillOpacity:0},
    animate:
    {
        pathLength: 1,
        strokeOpacity:1,
        fillOpacity:1,
        transition:{
            duration:animationDuration,
            ease:'easeInOut',
            strokeOpacity:{
                delay:animationDuration
            },
            fillOpacity:{
                delay:animationDuration
            }
        }
    }
};

export const socialIcons = [
    {
        id : 1,
        path : "M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.5 13.6439 3.5 12ZM12 1.5C6.20103 1.5 1.5 6.20101 1.5 12C1.5 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z",
        viewBox:'0 0 24 24',
        url : "https://wa.me/62895704425888/",
    },
    {
        id : 2,
        path : "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
        viewBox:'0 0 24 24',
        url : "https://www.instagram.com/siddiqrm24_?igsh=MWduZHJpajd3dXI3ZQ=="
    },
    {
        id : 3,
        path :"M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM7.5 18H5V9H7.5V18ZM6.25 7.5C5.56 7.5 5 6.94 5 6.25C5 5.56 5.56 5 6.25 5C6.94 5 7.5 5.56 7.5 6.25C7.5 6.94 6.94 7.5 6.25 7.5ZM19 18H16.5V13.5C16.5 12.4 15.6 11.5 14.5 11.5C13.4 11.5 12.5 12.4 12.5 13.5V18H10V9H12.5V10.2C13.1 9.5 14 9 15 9C17 9 19 10.5 19 13V18Z",
        viewBox:'0 0 24 24',
        url : "https://www.linkedin.com/in/sidik-wisnu-sasmita-0b1a1b1a4/",
    },
    {
        id : 4,
        path : "M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z", 
        viewBox:'0 0 24 24',
        url: "https://github.com/siddiq24"
    }
];

export default { variants, socialIcons };


export const Number = [
    {
        id: 1,
        number: 20,
        title: 'Projects Completed',
    },
    {
        id: 2,
        number: 25,
        title: 'Projects',
    },
    {
        id: 3,
        number: 15,
        title: 'Clients Served',
    },
    {
        id: 4,
        number: 2,
        title: 'Years of Experience',
    }
];

export const services = [
    {
        id: 1,
        title: 'WEB DEVELOPMENT',
        description: 'Building responsive and dynamic websites using modern web technologies to meet client requirements.',
    },
    {
        id: 2,
        title: 'FRONT END DEVELOPMENT',
        description: 'Creating visually appealing and user-friendly interfaces with a focus on performance and accessibility.',
    },
    {
        id: 3,
        title: 'WEB DESIGN',
        description: 'Designing intuitive and aesthetically pleasing website layouts and user experiences.',
    }
];

//Skills Section
export const skills = [
    {
        skill: 'React.js',
        percentage: 70,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        skill: 'Three.js',
        percentage: 60,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
    },
    {
        skill: 'Tailwind CSS',
        percentage: 80,
        icon: 'https://img.icons8.com/color/40/tailwindcss.png',

    },
    {
        skill: 'Figma',
        percentage: 75,
        icon: 'https://img.icons8.com/color/40/figma.png',
    },
    {
        skill: 'Vue.js',
        percentage: 70,
        icon: 'https://img.icons8.com/fluency/40/vuejs.png',
    }
];

//Experience And Education Section

export const experience = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        year: '2024 - Present',
        description: 'Developed and maintained user interfaces using React.js and Tailwind CSS. Collaborated with designers and backend developers to deliver high-quality web applications.',
        icon: 'https://img.icons8.com/?size=100&id=dhecLjnptiQg&format=png&color=000000',
    },
    {
        id: 2,
        title: 'Web Designer',
        company: 'Creative Studio',
        year: '2023 - 2024',
        description: 'Designed responsive and visually appealing websites using Figma and Canva. Worked closely with clients to understand their requirements and deliver custom designs.',
        icon: 'https://img.icons8.com/color/40/design.png',
    },
    {
        id: 3,
        title: 'Junior Developer',
        company: 'Startup Hub',
        year: '2022 - 2023',
        description: 'Assisted in building web applications using HTML, CSS and JavaScript. Gained experience in debugging and optimizing code for better performance.',
        icon: 'https://img.icons8.com/color/40/code.png',
    },
    {
        id: 4,
        title: 'Intern',
        company: 'Innovate Labs',
        year: '2020 - 2022',
        description: 'Worked on small-scale projects to enhance coding skills. Learned about modern web development practices and tools.',
        icon: 'https://img.icons8.com/color/40/internship.png',
    },
];

export const education = [
    {
        id: 2,
        title: 'State Senior High School 2 in Bontang',
        institution: 'Senior High School of Science and Technology Bontang',
        year: '2017 - 2020',
        description: 'Studied core computer science subjects including algorithms, data structures, and software engineering.',
        icon: 'https://img.icons8.com/color/40/university.png',
    },
    {
        id: 1,
        title: 'Web Development Bootcamp',
        institution: 'Scrimba',
        year: '2022 - 2023',
        description: 'Completed an intensive bootcamp focusing on web development technologies including HTML, CSS, JavaScript, and React.js.',
        icon: 'https://img.icons8.com/?size=100&id=13203&format=png&color=000000',
    },
];
//Project Section
import foto from '/portofolio.jpg';


export const projects = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my skills, projects, and experience. Built using React.js and Tailwind CSS.',
        imgSrc: foto,
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        description: 'An e-commerce platform with features like product listing, shopping cart, and payment integration. Developed using Vue.js and Firebase.',
        imgSrc: 'https://i.pinimg.com/736x/7b/54/10/7b5410a550059972eb8b3b16c9fe0e53.jpg',
    },
    {
        id: 3,
        title: '3D Visualization App',
        description: 'A web application for 3D model visualization and interaction, built using Three.js and React.js.',
        imgSrc: 'https://i.pinimg.com/736x/d2/13/6c/d2136cd1cda289cd31fb7470863ca910.jpg',
    },
    {
        id: 4,
        title: 'Blog Platform',
        description: 'A blogging platform allowing users to create, edit, and share blog posts. Developed using React.js and Node.js.',
        imgSrc: 'https://i.pinimg.com/736x/15/ee/3d/15ee3d6e6b30e35fd897f4d37e18abd2.jpg',
    },
    {
        id: 5,
        title: 'Social Media App',
        description: 'A social media application with features like user profiles, posts, and comments. Built using React Native and Firebase.',
        imgSrc: 'https://i.pinimg.com/736x/6b/86/15/6b86154b6b167074620503cfa883a151.jpg',
    }
];