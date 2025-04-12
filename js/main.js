document.addEventListener('DOMContentLoaded', () => {
    console.log('Main.js loaded');
    // Typing effect implementation
    const typedTextSpan = document.getElementById("typed-text");
    if (typedTextSpan) {
        const phrases = [
            "Publications",
            "Research Publications",
            "How ILF Supports Mental Health",
            "Infra-Low Frequency for Optimum Performance"
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isWaiting = false;
        
        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                // Deleting text
                typedTextSpan.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Typing text
                typedTextSpan.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }
            
            // Dynamic typing speed - typing at 50ms, deleting at 25ms
            let typingSpeed = isDeleting ? 25 : 50;
            
            // Handle phrase completion
            if (!isDeleting && charIndex === currentPhrase.length) {
                // Pause at end of phrase
                isWaiting = true;
                setTimeout(() => {
                    isWaiting = false;
                    isDeleting = true;
                }, 2000);
                typingSpeed = 25;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            
            if (!isWaiting) {
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, 2000);
            }
        }
        
        // Start the typing effect
        setTimeout(type, 1000);
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    console.log('Menu button:', mobileMenuBtn);
    console.log('Nav links:', navLinks);

    if (mobileMenuBtn && navLinks) {
        // Remove any existing event listeners
        const newMenuBtn = mobileMenuBtn.cloneNode(true);
        mobileMenuBtn.parentNode.replaceChild(newMenuBtn, mobileMenuBtn);
        
        newMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navLinks.classList.toggle('active');
            body.classList.toggle('menu-open');
            newMenuBtn.classList.toggle('active');
        });

        // Close menu when clicking links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                newMenuBtn.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (body.classList.contains('menu-open') && 
                !e.target.closest('.nav-links') && 
                !e.target.closest('.mobile-menu-btn')) {
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                newMenuBtn.classList.remove('active');
            }
        });
    }

    // Load featured publications on home page
    const featuredGrid = document.querySelector('.publications-grid');
    if (featuredGrid) {
        // Show first 6 publications from overview category
        const featuredPubs = publications.overview.slice(0, 6);
        featuredPubs.forEach(pub => {
            const card = createPublicationCard(pub);
            featuredGrid.appendChild(card);
            
            // Add event listeners
            const pdfBtn = card.querySelector('.pdf-btn');
            const shareBtn = card.querySelector('.share-btn');
            
            pdfBtn.addEventListener('click', () => handlePdfClick(pub.pdfUrl));
            shareBtn.addEventListener('click', () => handleShare(pub));
        });
    }

    // Global share functionality
    window.handleShare = function(publication) {
        const shareData = {
            title: publication?.title || document.querySelector('.hero h1')?.textContent || 'Neurofeedback Publications',
            text: publication ? 
                `${publication.title} by ${publication.authors}` : 
                document.querySelector('.hero p')?.textContent || 'Explore the latest research and publications in neurofeedback',
            url: window.location.href
        };

        // Use custom modal only
        showShareModal(shareData);
    }

    function showShareModal(shareData) {
        // Remove any existing modals first
        const existingModal = document.querySelector('.share-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'share-modal';
        
        const encodedUrl = encodeURIComponent(shareData.url);
        const encodedText = encodeURIComponent(shareData.text);
        const encodedTitle = encodeURIComponent(shareData.title);

        const links = {
            twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            whatsapp: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
            telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
            email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`
        };

        modal.innerHTML = `
            <div class="share-modal-content">
                <h3>Share via</h3>
                <div class="preview-card">
                    <div class="preview-text">
                        <h4>${decodeURIComponent(shareData.title)}</h4>
                        <p>${decodeURIComponent(shareData.text)}</p>
                    </div>
                </div>
                <div class="share-buttons">
                    <a href="${links.twitter}" target="_blank" rel="noopener noreferrer" class="twitter">
                        <i class="fab fa-x-twitter"></i> X
                    </a>
                    <a href="${links.linkedin}" target="_blank" rel="noopener noreferrer" class="linkedin">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="${links.facebook}" target="_blank" rel="noopener noreferrer" class="facebook">
                        <i class="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="${links.whatsapp}" target="_blank" rel="noopener noreferrer" class="whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="${links.telegram}" target="_blank" rel="noopener noreferrer" class="telegram">
                        <i class="fab fa-telegram"></i> Telegram
                    </a>
                    <a href="${links.email}" class="email">
                        <i class="fas fa-envelope"></i> Email
                    </a>
                    <button class="copy-link">
                        <i class="fas fa-link"></i> Copy Link
                    </button>
                </div>
                <button class="close-modal">Close</button>
            </div>
        `;

        document.body.appendChild(modal);

        // Handle copy link button
        const copyBtn = modal.querySelector('.copy-link');
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(window.location.href);
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-link"></i> Copy Link';
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                copyBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-link"></i> Copy Link';
                }, 2000);
            }
        });
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}); 