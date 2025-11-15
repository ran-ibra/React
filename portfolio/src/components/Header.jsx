import {SocialLinks} from "./Footer";

export default function Hero() {
    return (
        <header className="bg-light py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h1 className="display-5">Hi, I'm <span className="text-primary">Rana Ibrahim</span></h1>
                        <p className="lead">An AI Full Stack developer training at iti.</p>
                        <p>
                            <a href="#contact" className="btn btn-primary me-2">Contact me</a>
                            <a href="#bio" className="btn btn-outline-secondary">Learn more</a>
                        </p>
                    </div>
                    <div className="col-md-4 text-md-end mt-4 mt-md-0">
                        <SocialLinks />
                        <img src="vite.svg" alt="avatar" className="rounded-circle img-fluid mt-3" />
                    </div>
                </div>
            </div>
        </header>
    );
}