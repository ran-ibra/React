import {SocialLinks} from './Footer';


export default function Contact() {
    return (
        <section id="contact" className="py-5">
            <div className="container">
                <h2>Contact</h2>
                <p>Send an email to <a href="mailto:ranibra781@gmail.com">ranibra781@gmail.com</a> or find me on social media below.</p>
                <SocialLinks className="mt-3" />
            </div>
        </section>
    );
}