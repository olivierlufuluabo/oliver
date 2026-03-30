        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#6C63FF', // Violet
                        secondary: '#FF6B6B', // Rouge-orangé
                        accent: '#4ECDC4', // Turquoise
                        dark: {
                            100: '#2A2A2A',
                            200: '#222222',
                            300: '#1A1A1A',
                            400: '#121212'
                        }
                    },
                    fontFamily: {
                        'sans': ['Poppins', 'sans-serif'],
                        'mono': ['Space Mono', 'monospace']
                    }
                }
            }
        };
        
        // Toujours utiliser le mode sombre pour ce portfolio
        document.documentElement.classList.add('dark');


document.addEventListener('DOMContentLoaded', function() {
            // Menu mobile toggle
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            
            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Fermer le menu mobile quand on clique en dehors
            document.addEventListener('click', function(event) {
                if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
                    mobileMenu.classList.add('hidden');
                }
            });
            
            // Navigation fluide
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Fermer le menu mobile si ouvert
                        if (!mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                        }
                    }
                });
            });
        });