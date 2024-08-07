import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            {/* Cabeçalho */}
            <header className="header bg-pink-600 text-white p-4">
                <h1 className="text-4xl font-bold">Blog de Camila</h1>
                <nav className="nav">
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="hover:underline">Home</a></li>
                        <li><a href="#sobre" className="hover:underline">Sobre mim</a></li>
                        <li><a href="#posts" className="hover:underline">Posts</a></li>
                        <li><a href="#contato" className="hover:underline">Contato</a></li>
                    </ul>
                </nav>
            </header>

            {/* Seção de artigos em destaque */}
            <section id="posts" className="posts-section m-4">
                <h2 className="text-2xl font-semibold mb-4">Artigos em Destaque</h2>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6 bg-pink-300 p-4 rounded-lg">
                        <h3 className="text-xl font-bold">Artigo 1</h3>
                        <p>Descrição do artigo 1...</p>
                    </div>
                    <div className="col-span-6 bg-pink-200 p-4 rounded-lg">
                        <h3 className="text-xl font-bold">Artigo 2</h3>
                        <p>Descrição do artigo 2...</p>
                    </div>
                </div>
            </section>

            {/* Seção "Sobre mim" */}
            <section id="sobre" className="about-section bg-pink-100 p-4 m-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
                <p>Olá, sou a Camila. Sou apaixonada por tecnologia e desenvolvimento web...</p>
            </section>

            {/* Seção de contato */}
            <section id="contato" className="contact-section bg-pink-50 p-4 m-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Contato</h2>
                <p>Você pode me contatar através das minhas redes sociais:</p>
                <div className="social-links">
                    <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/whatsapp.svg" alt="WhatsApp" className="social-icon" />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Home;
