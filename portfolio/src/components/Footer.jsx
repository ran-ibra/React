import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export function SocialLinks({ className = '' }) {
    return (
        <div className={className}>
            <a href="https://github.com/ran-ibra" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-reset me-3">
                <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ran-ibra" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-reset me-3">
                <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/ran-ibra" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-reset me-3">
                <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com/ran-ibra" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-reset">
                <FaFacebook size={24} />
            </a>
        </div>
    );
}
export default function Footer() {
    return (
        <footer className="py-4 bg-dark text-light">
            <div className="container d-flex justify-content-between align-items-center">
                <small>© {new Date().getFullYear()} Rana Ibrahim</small>
                <SocialLinks />
            </div>
        </footer>
    );
}