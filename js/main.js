document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

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

    // Share modal functionality
    function showShareModal(links) {
        const modal = document.createElement('div');
        modal.className = 'share-modal';
        modal.innerHTML = `
            <div class="share-modal-content">
                <h3>Share via</h3>
                <div class="share-buttons">
                    <a href="${links.twitter}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="${links.linkedin}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="${links.facebook}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook"></i> Facebook
                    </a>
                </div>
                <button class="close-modal">Close</button>
            </div>
        `;

        document.body.appendChild(modal);
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
    }

    // Add mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const body = document.body;

    mobileMenuBtn?.addEventListener('click', () => {
        body.classList.toggle('menu-open');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (body.classList.contains('menu-open') && 
            !e.target.closest('.mobile-menu-container') && 
            !e.target.closest('.mobile-menu-btn')) {
            body.classList.remove('menu-open');
        }
    });
}); 