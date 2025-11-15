function SkillCard({ skill, icon, description }) {
    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="skill-card">
                <i className={`${icon} mb-3`}></i>
                <h5>{skill}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Skills() {
    const skills = [
        { 
            name: 'HTML5', 
            icon: 'fab fa-html5', 
            description: 'Semantic markup and modern HTML standards' 
        },
        { 
            name: 'CSS3', 
            icon: 'fab fa-css3-alt', 
            description: 'Advanced styling, animations, and responsive design' 
        },
        { 
            name: 'JavaScript', 
            icon: 'fab fa-js-square', 
            description: 'ES6+, DOM manipulation, and async programming' 
        },
        { 
            name: 'React', 
            icon: 'fab fa-react', 
            description: 'Component-based UI development and hooks' 
        },
        { 
            name: 'Bootstrap', 
            icon: 'fab fa-bootstrap', 
            description: 'Responsive grid system and utility classes' 
        },
        { 
            name: 'Git', 
            icon: 'fab fa-git-alt', 
            description: 'Version control and collaborative development' 
        },
        { 
            name: 'Node.js', 
            icon: 'fab fa-node-js', 
            description: 'Server-side JavaScript development' 
        },
        { 
            name: 'Database', 
            icon: 'fas fa-database', 
            description: 'SQL and NoSQL database management' 
        }
    ];

    return (
        <section id="skills" className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Technical Skills</h2>
                    <p className="lead text-muted">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>
                <div className="row">
                    {skills.map(skill => (
                        <SkillCard 
                            key={skill.name} 
                            skill={skill.name} 
                            icon={skill.icon}
                            description={skill.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}