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
        summary: "Strong foundation in object-oriented, procedural, and scripting languages for software and algorithmic problem solving.",
        items: [
            { name: "Java", short: "Java", icon: "ri-cup-line", tag: "Core & OOP" },
            { name: "Python", short: "Python", icon: "ri-terminal-box-line", tag: "ML & Scripting" },
            { name: "C", short: "C", icon: "ri-braces-line", tag: "Systems" },
            { name: "C++", short: "C++", icon: "ri-code-box-line", tag: "DSA" },
            { name: "Dart", short: "Dart", icon: "ri-flutter-line", tag: "Cross-Platform" }
        ]
    },
    {
        id: "web",
        title: "Web & App Development",
        icon: "ri-global-line",
        accent: "#06b6d4",
        summary: "Building responsive user interfaces, interactive web platforms, and full-stack applications.",
        items: [
            { name: "HTML5", short: "HTML", icon: "ri-html5-line", tag: "Semantic UI" },
            { name: "CSS3", short: "CSS", icon: "ri-css3-line", tag: "Responsive" },
            { name: "JavaScript", short: "JavaScript", icon: "ri-javascript-line", tag: "Interactive" },
            { name: "PHP", short: "PHP", icon: "ri-server-line", tag: "Backend" },
            { name: "Flutter", short: "Flutter", icon: "ri-smartphone-line", tag: "Mobile & Web" }
        ]
    },
    {
        id: "database",
        title: "Databases & Querying",
        icon: "ri-database-2-line",
        accent: "#8b5cf6",
        summary: "Designing relational schemas, writing optimized queries, and working with structured & NoSQL storage.",
        items: [
            { name: "SQL", short: "SQL", icon: "ri-table-line", tag: "Queries" },
            { name: "MySQL", short: "MySQL", icon: "ri-database-line", tag: "Relational" },
            { name: "Oracle", short: "Oracle", icon: "ri-hard-drive-2-line", tag: "Enterprise DB" },
            { name: "MongoDB", short: "MongoDB", icon: "ri-leaf-line", tag: "NoSQL" }
        ]
    },
    {
        id: "datascience",
        title: "Data Science & Machine Learning",
        icon: "ri-line-chart-line",
        accent: "#10b981",
        summary: "Transforming raw datasets into insights and predictive models through preprocessing, EDA, and ML pipelines.",
        items: [
            { name: "Pandas", short: "Pandas", icon: "ri-table-alt-line", tag: "DataFrames" },
            { name: "NumPy", short: "NumPy", icon: "ri-functions", tag: "Numerical" },
            { name: "Scikit-Learn", short: "Scikit-Learn", icon: "ri-robot-2-line", tag: "ML Models" },
            { name: "Matplotlib", short: "Matplotlib", icon: "ri-bar-chart-2-line", tag: "Plotting" },
            { name: "Seaborn", short: "Seaborn", icon: "ri-pie-chart-2-line", tag: "Visuals" },
            { name: "EDA & Cleaning", short: "EDA", icon: "ri-search-eye-line", tag: "Preprocessing" },
            { name: "Statistical Analysis", short: "Statistics", icon: "ri-pulse-line", tag: "Analytics" }
        ]
    },
    {
        id: "core",
        title: "Core Computer Science",
        icon: "ri-brain-line",
        accent: "#f59e0b",
        summary: "Theoretical and architectural fundamentals powering reliable, efficient software systems.",
        items: [
            { name: "Data Structures & Algorithms", short: "DSA", icon: "ri-node-tree", tag: "Problem Solving" },
            { name: "Object-Oriented Programming", short: "OOP", icon: "ri-stack-line", tag: "Architecture" },
            { name: "Database Management Systems", short: "DBMS", icon: "ri-server-fill", tag: "Data Systems" },
            { name: "Probability & Statistics", short: "Probability", icon: "ri-percent-line", tag: "Math" }
        ]
    },
    {
        id: "cloud",
        title: "Cloud, AI & Developer Tools",
        icon: "ri-cloud-line",
        accent: "#ec4899",
        summary: "Version control, cloud foundations, data pipelines, and modern generative AI concepts.",
        items: [
            { name: "Git", short: "Git", icon: "ri-git-branch-line", tag: "Version Control" },
            { name: "GitHub", short: "GitHub", icon: "ri-github-fill", tag: "Collaboration" },
            { name: "AWS Cloud", short: "AWS Cloud", icon: "ri-cloud-fill", tag: "Foundations" },
            { name: "Data Engineering", short: "Data Eng", icon: "ri-flow-chart", tag: "AWS Academy" },
            { name: "Generative AI", short: "Gen AI", icon: "ri-sparkling-2-line", tag: "AWS Academy" }
        ]
    }
];
