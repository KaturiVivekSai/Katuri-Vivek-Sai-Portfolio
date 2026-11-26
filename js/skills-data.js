/*==========================================================
PORTFOLIO SKILLS DATA (Single Source of Truth)
Add any new skill to a category below — both the Skills page
and the Home page 5-second rotating orbit update automatically.
==========================================================*/

window.PORTFOLIO_SKILLS = [
    {
        id: "programming",
        title: "Programming Languages",
        icon: "ri-code-s-slash-line",
        accent: "#3b82f6",
        summary: "Core languages used for backend development, data science pipelines, querying, and algorithmic problem solving.",
        items: [
            { name: "Python", short: "Python", icon: "ri-terminal-box-line", tag: "Backend & ML" },
            { name: "Java", short: "Java", icon: "ri-cup-line", tag: "Core & OOP" },
            { name: "C", short: "C", icon: "ri-braces-line", tag: "Systems" },
            { name: "SQL", short: "SQL", icon: "ri-table-line", tag: "Querying" }
        ]
    },
    {
        id: "web",
        title: "Web Technologies",
        icon: "ri-global-line",
        accent: "#06b6d4",
        summary: "Building responsive user interfaces, React applications, Node.js/Express backends, and RESTful APIs.",
        items: [
            { name: "HTML", short: "HTML", icon: "ri-html5-line", tag: "Semantic UI" },
            { name: "CSS", short: "CSS", icon: "ri-css3-line", tag: "Responsive" },
            { name: "JavaScript", short: "JavaScript", icon: "ri-javascript-line", tag: "ES6+" },
            { name: "React", short: "React", icon: "ri-reactjs-line", tag: "Frontend" },
            { name: "Express.js", short: "Express.js", icon: "ri-route-line", tag: "API Server" },
            { name: "Node.js", short: "Node.js", icon: "ri-nodejs-line", tag: "Runtime" },
            { name: "REST APIs", short: "REST APIs", icon: "ri-webhook-line", tag: "Integration" }
        ]
    },
    {
        id: "datascience",
        title: "Data Science & Analytics",
        icon: "ri-line-chart-line",
        accent: "#10b981",
        summary: "End-to-end data cleaning, preprocessing, exploratory analysis, statistical modeling, and machine learning.",
        items: [
            { name: "Pandas", short: "Pandas", icon: "ri-table-alt-line", tag: "DataFrames" },
            { name: "NumPy", short: "NumPy", icon: "ri-functions", tag: "Numerical" },
            { name: "Matplotlib", short: "Matplotlib", icon: "ri-bar-chart-2-line", tag: "Plotting" },
            { name: "Seaborn", short: "Seaborn", icon: "ri-pie-chart-2-line", tag: "Visuals" },
            { name: "Scikit-learn", short: "Scikit-learn", icon: "ri-robot-2-line", tag: "ML Models" },
            { name: "Data Cleaning", short: "Data Cleaning", icon: "ri-brush-3-line", tag: "Quality" },
            { name: "Data Preprocessing", short: "Preprocessing", icon: "ri-settings-4-line", tag: "Pipelines" },
            { name: "Exploratory Data Analysis (EDA)", short: "EDA", icon: "ri-search-eye-line", tag: "Insights" },
            { name: "Statistical Analysis", short: "Statistics", icon: "ri-pulse-line", tag: "Analytics" },
            { name: "Data Visualization", short: "Data Viz", icon: "ri-bar-chart-grouped-line", tag: "Storytelling" }
        ]
    },
    {
        id: "database",
        title: "Databases",
        icon: "ri-database-2-line",
        accent: "#8b5cf6",
        summary: "Designing relational and document-based schemas for reliable application data storage and retrieval.",
        items: [
            { name: "MySQL", short: "MySQL", icon: "ri-database-line", tag: "Relational" },
            { name: "MongoDB", short: "MongoDB", icon: "ri-leaf-line", tag: "NoSQL" }
        ]
    },
    {
        id: "core",
        title: "Core Concepts",
        icon: "ri-brain-line",
        accent: "#f59e0b",
        summary: "Software engineering lifecycle practices and computer science fundamentals for dependable systems.",
        items: [
            { name: "SDLC", short: "SDLC", icon: "ri-loop-right-line", tag: "Lifecycle" },
            { name: "Software Testing", short: "Testing", icon: "ri-bug-2-line", tag: "QA" },
            { name: "Debugging", short: "Debugging", icon: "ri-tools-line", tag: "Troubleshooting" },
            { name: "Data Structures & Algorithms", short: "DSA", icon: "ri-node-tree", tag: "Problem Solving" },
            { name: "Object-Oriented Programming", short: "OOP", icon: "ri-stack-line", tag: "Architecture" },
            { name: "Database Management Systems (DBMS)", short: "DBMS", icon: "ri-server-fill", tag: "Data Systems" },
            { name: "Operating Systems", short: "OS", icon: "ri-cpu-line", tag: "Systems" }
        ]
    },
    {
        id: "tools",
        title: "Developer Tools",
        icon: "ri-terminal-window-line",
        accent: "#ec4899",
        summary: "Daily environment for version control, notebook experimentation, coding, and REST API testing.",
        items: [
            { name: "Git", short: "Git", icon: "ri-git-branch-line", tag: "Version Control" },
            { name: "GitHub", short: "GitHub", icon: "ri-github-fill", tag: "Collaboration" },
            { name: "Jupyter Notebook", short: "Jupyter", icon: "ri-booklet-line", tag: "Data Science" },
            { name: "Google Colab", short: "Colab", icon: "ri-cloud-line", tag: "ML Notebooks" },
            { name: "Visual Studio Code", short: "VS Code", icon: "ri-code-box-line", tag: "IDE" },
            { name: "Postman", short: "Postman", icon: "ri-send-plane-line", tag: "API Testing" }
        ]
    }
];
