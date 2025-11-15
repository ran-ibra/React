export default function Education() {
    const items = [
        { 
            year: '2024', 
            title: 'B.Sc. Computer Science', 
            org: 'Cairo University',
            description: 'Focused on software engineering, algorithms, and data structures. Graduated with honors.',
            icon: 'fas fa-graduation-cap'
        },
        { 
            year: '2025', 
            title: 'Full Stack Developer Program', 
            org: 'Information Technology Institute (ITI)',
            description: 'Intensive training in modern web development technologies and best practices.',
            icon: 'fas fa-code'
        }
    ];

    return (
        <section id="education" className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Education & Training</h2>
                    <p className="lead text-muted">
                        My academic journey and professional development
                    </p>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {items.map(item => (
                            <div key={item.title} className="education-item">
                                <div className="row align-items-center">
                                    <div className="col-md-2 text-center mb-3 mb-md-0">
                                        <div className="year-badge">
                                            <i className={`${item.icon} fa-2x text-primary mb-2`}></i>
                                            <div className="fw-bold text-primary">{item.year}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <h5 className="mb-2">{item.title}</h5>
                                        <h6 className="text-muted mb-3">{item.org}</h6>
                                        <p className="mb-0 text-muted">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}