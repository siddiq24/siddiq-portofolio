
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
        path : "M14.874,11.167 L14.262,14.207 C14.062,15.208 13.100,15.992 12.072,15.992 L10.000,15.992 L10.000,30.000 C10.000,31.104 9.159,32.000 8.049,32.000 L5.030,32.000 C3.920,32.000 3.017,31.102 3.017,29.999 L3.017,15.992 L2.011,15.992 C0.901,15.992 -0.002,15.095 -0.002,13.991 L-0.002,10.990 C-0.002,9.887 0.901,8.989 2.011,8.989 L3.017,8.989 L3.017,6.003 C3.017,2.716 5.693,0.041 8.994,0.013 C9.015,0.012 9.033,0.001 9.055,0.001 L13.081,0.001 C13.636,0.001 14.000,0.448 14.000,1.000 L14.000,6.000 C14.000,6.553 13.636,7.004 13.081,7.004 L10.061,7.004 L10.060,8.989 L13.079,8.989 C13.645,8.989 14.167,9.228 14.509,9.644 C14.852,10.059 14.985,10.615 14.874,11.167 ZM9.092,10.990 C9.078,10.991 9.067,10.998 9.053,10.998 L9.053,10.998 C8.497,10.997 8.046,10.549 8.047,9.997 L8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 C8.047,9.990 8.047,9.990 8.047,9.990 L8.049,6.003 C8.049,5.450 8.499,5.003 9.055,5.003 L12.074,5.003 L12.074,2.002 L9.094,2.002 C9.077,2.002 9.063,2.011 9.045,2.011 C6.831,2.011 5.030,3.802 5.030,6.003 L5.030,10.005 C5.030,10.558 4.579,11.006 4.023,11.006 C3.996,11.006 3.973,10.992 3.946,10.990 L2.011,10.990 L2.011,13.991 L4.023,13.991 C4.579,13.991 5.030,14.439 5.030,14.992 C5.030,15.044 5.008,15.088 5.000,15.138 L5.000,30.000 L8.049,29.999 L8.049,15.002 C8.049,14.998 8.047,14.995 8.047,14.992 C8.047,14.439 8.497,13.991 9.053,13.991 L12.072,13.991 C12.145,13.991 12.275,13.886 12.288,13.816 L12.857,10.990 L9.092,10.990 Z",
        viewBox:'0 0 17 35'
    },
    {
        id : 2,
        path : "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
        viewBox:'0 0 24 24',
    },
    {
        id : 3,
        path :"M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM7.5 18H5V9H7.5V18ZM6.25 7.5C5.56 7.5 5 6.94 5 6.25C5 5.56 5.56 5 6.25 5C6.94 5 7.5 5.56 7.5 6.25C7.5 6.94 6.94 7.5 6.25 7.5ZM19 18H16.5V13.5C16.5 12.4 15.6 11.5 14.5 11.5C13.4 11.5 12.5 12.4 12.5 13.5V18H10V9H12.5V10.2C13.1 9.5 14 9 15 9C17 9 19 10.5 19 13V18Z",
        viewBox:'0 0 24 24',
    },
    {
        id : 4,
        path : "M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z", 
        viewBox:'0 0 24 24',
    }
];

export default { variants, socialIcons };


export const Number = [
    {
        id: 1,
        number: 10,
        title: 'Projects Completed',
    },
    {
        id: 2,
        number: 50,
        title: 'Projects',
    },
    {
        id: 3,
        number: 15,
        title: 'Clients Served',
    },
    {
        id: 4,
        number: 20,
        title: 'Years of Experience',
    }
];

export const services =[
    {
        id:1,
        title: 'WEB DEVELOPMENT',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus atque nihil laudantium beatae ad. Sed quia labore maiores officia.',
    },
    {
        id:2,
        title: 'FRONT END DEVELOPMENT',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus atque nihil laudantium beatae ad. Sed quia labore maiores officia.',
    },
    {
        id:3,
        title: 'WEB DESIGN',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus atque nihil laudantium beatae ad. Sed quia labore maiores officia.',
    }
]

//Skills Section
export const skills = [
    {
        skill: 'React.js',
        percentage: 70,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        skill: 'Three.js',
        percentage: 70,
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
    },
    {
        skill: 'Tailwind CSS',
        percentage: 70,
        icon: 'https://img.icons8.com/color/40/tailwindcss.png',

    },
    {
        skill: 'Figma',
        percentage: 70,
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
        year: '2020 - Present',
        description: 'Developed and maintained user interfaces using React.js and Tailwind CSS. Collaborated with designers and backend developers to deliver high-quality web applications.',
        icon: 'https://img.icons8.com/?size=100&id=dhecLjnptiQg&format=png&color=000000',
    },
    {
        id: 2,
        title: 'Web Designer',
        company: 'Creative Studio',
        year: '2018 - 2020',
        description: 'Designed responsive and visually appealing websites using Figma and Adobe XD. Worked closely with clients to understand their requirements and deliver custom designs.',
        icon: 'https://img.icons8.com/color/40/design.png',
    },
    {
        id: 3,
        title: 'Junior Developer',
        company: 'Startup Hub',
        year: '2016 - 2018',
        description: 'Assisted in building web applications using Vue.js and JavaScript. Gained experience in debugging and optimizing code for better performance.',
        icon: 'https://img.icons8.com/color/40/code.png',
    },
    {
        id: 4,
        title: 'Intern',
        company: 'Innovate Labs',
        year: '2015 - 2016',
        description: 'Worked on small-scale projects to enhance coding skills. Learned about modern web development practices and tools.',
        icon: 'https://img.icons8.com/color/40/internship.png',
    },
];

export const education = [
    {
        id: 1,
        title: 'Bachelor of Science in Computer Science',
        institution: 'Senior High School of Science and Technology Bontang',
        year: '2012 - 2016',
        description: 'Studied core computer science subjects including algorithms, data structures, and software engineering.',
        icon: 'https://img.icons8.com/color/40/university.png',
    },
    {
        id: 2,
        title: 'Web Development Bootcamp',
        institution: 'Scrimba',
        year: '2016 - 2017',
        description: 'Completed an intensive bootcamp focusing on web development technologies including HTML, CSS, JavaScript, and React.js.',
        icon: 'https://img.icons8.com/?size=100&id=13203&format=png&color=000000',
    },
];
//Project Section

export const projects = [
    {
        id: 1,
        title: '1. Portfolio Website',
        description: 'A personal portfolio website showcasing my skills, projects, and experience. Built using React.js and Tailwind CSS.',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    },
    {
        id: 2,
        title: '2. E-commerce Platform',
        description: 'An e-commerce platform with features like product listing, shopping cart, and payment integration. Developed using Vue.js and Firebase.',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    },
    {
        id: 3,
        title: '3. 3D Visualization App',
        description: 'A web application for 3D model visualization and interaction, built using Three.js and React.js.',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    },
    {
        id: 4,
        title: '4. Blog Platform',
        description: 'A blogging platform allowing users to create, edit, and share blog posts. Developed using React.js and Node.js.',
        imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 5,
        title: '5. Social Media App',
        description: 'A social media application with features like user profiles, posts, and comments. Built using React Native and Firebase.',
        imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
    }
];