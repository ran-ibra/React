export default function Bio(){
    return (
        <section id="bio" className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <img 
                            src="vite.svg" 
                            alt="Rana Ibrahim Profile" 
                            className="img-fluid profile-bio-img w-100" 
                        />
                    </div>
                    <div className="col-md-8">
                        <h2>About Me</h2>
                        <p className="lead">
                            I'm a passionate Full Stack Developer with a keen eye for creating 
                            beautiful, functional, and user-friendly web applications.
                        </p>
                        <p>
                            With expertise in modern web technologies, I specialize in building 
                            responsive interfaces using React, crafting semantic HTML, and writing 
                            clean, maintainable CSS. I believe in the power of accessible design 
                            and always strive to create inclusive digital experiences.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, 
                            contributing to open-source projects, or mentoring fellow developers 
                            in the community.
                        </p>
                        <a href="./assets/Rana-Ibrahim-Mohamed-DataManager.pdf" className="btn-custom" download>
                            <i className="fas fa-download me-2"></i>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}