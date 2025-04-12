document.addEventListener('DOMContentLoaded', () => {
    console.log('Main.js loaded');
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
});

// Add this function before the DOMContentLoaded event
function handleShare(publication) {
    const shareData = {
        title: publication.title,
        text: `${publication.title} by ${publication.authors}`,
        url: window.location.href
    };

    // Create share links
    const links = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`
    };

    // Show share modal
    showShareModal(links);
} 