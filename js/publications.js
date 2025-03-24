const publicationCategories = {
    overview: "InfraLow Frequency (ILF) Neurofeedback Overview",
    clinical: "Clinical Applications",
    books: "Books and Book Chapters",
    featured: "Featured Research"
};

const publications = {
    featured: [
        {
            authors: "Fleischman, MJ",
            year: "2022",
            title: "Documenting the Impact of Infra Low-Frequency Neurofeedback on Underserved Populations With Complex Clinical Presentations",
            journal: "Front. Hum. Neurosci. 16:921491",
            doi: "10.3389/fnhum.2022.921491",
            abstract: "There is a crisis in mental health. The demand for services is huge; the efficacy of current services is lacking, and the traditional path to developing effective treatments is not working...",
            pdfUrl: "#"
        }
    ],
    overview: [
        {
            authors: "Altan, S., Berberoglu, B., Canan, S. & Dane, S.",
            year: "2016",
            title: "Effects of neurofeedback therapy in healthy young subjects",
            journal: "Clin invest Med 39, 27–30",
            pdfUrl: "#"
        },
        {
            authors: "Dobrushina, O. et al.",
            year: "2020",
            title: "Modulation of Intrinsic Brain Connectivity by Implicit Electroencephalographic Neurofeedback",
            journal: "Frontiers in Human Neuroscience, 14: 192",
            pdfUrl: "#"
        },
        {
            authors: "Grin-Yatsenko, V. A., Ponomarev, V. A., Kara, O., Wandernoth, B., Gregory, M., Ilyukhina, V. A., & Kropotov, J. D.",
            year: "2018",
            title: "Effect of Infra-Low Frequency Neurofeedback on Infra-Slow EEG Fluctuations",
            journal: "Biofeedback. IntechOpen",
            pdfUrl: "#"
        },
        // Add more overview publications
    ],
    clinical: {
        "ADDICTION": [
            {
                authors: "Corominas-Roso, M. et al.",
                year: "2020",
                title: "Benefits of EEG-Neurofeedback on the Modulation of Impulsivity in a Sample of Cocaine and Heroin Long-Term Abstinent Inmates: A Pilot Study",
                journal: "International Journal of Offender Therapy and Comparative Criminology, 64(12), 1275-1298",
                pdfUrl: "#"
            },
            {
                authors: "Leong, S. L., Vanneste, S., Lim, J., Smith, M., Manning, P., & De Ridder, D.",
                year: "2018",
                title: "A randomised, double-blind, placebo-controlled parallel trial of closed-loop infraslow brain training in food addiction",
                journal: "Scientific reports, 8(1), 1-9",
                pdfUrl: "#"
            }
        ],
        "DEPRESSION": [
            {
                authors: "Grin-Yatsenko, V. A. et al.",
                year: "2018",
                title: "Infra-low frequency neurofeedback in depression: Three case studies",
                journal: "NeuroRegulation 5, 30–42",
                pdfUrl: "#"
            }
        ]
        // Add more clinical categories
    },
    books: [
        {
            authors: "Kirk H.",
            year: "2015",
            title: "Restoring the Brain: Neurofeedback as an Integrative Approach to Health",
            journal: "CRC Press, Taylor and Francis Group",
            chapter: "Chapter 11, Neurofeedback in application to the ADHD spectrum, R. Sasu & S. Othmer",
            pdfUrl: "#"
        }
        // Add other books...
    ]
};

// Function to create publication card
function createPublicationCard(publication) {
    const card = document.createElement('div');
    card.className = 'publication-card';
    
    card.innerHTML = `
        <div class="card-content">
            <h3>${publication.title}</h3>
            <p class="authors">${publication.authors}</p>
            <p class="year">${publication.year}</p>
            <p class="journal">${publication.journal}</p>
            <div class="card-actions">
                <button class="pdf-btn" data-url="${publication.pdfUrl}">
                    <i class="fas fa-file-pdf"></i> View PDF
                </button>
                <button class="share-btn">
                    <i class="fas fa-share-alt"></i> Share
                </button>
            </div>
        </div>
        <div class="loading-overlay hidden">
            <i class="fas fa-spinner loading"></i>
        </div>
    `;

    return card;
}

// Function to handle PDF opening
function handlePdfClick(url) {
    const loadingOverlay = this.closest('.publication-card').querySelector('.loading-overlay');
    loadingOverlay.classList.remove('hidden');
    
    // Simulate loading (replace with actual PDF loading)
    setTimeout(() => {
        window.open(url, '_blank');
        loadingOverlay.classList.add('hidden');
    }, 1000);
}

// Function to handle sharing
function handleShare(publication) {
    if (navigator.share) {
        navigator.share({
            title: publication.title,
            text: `${publication.authors} (${publication.year})`,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = encodeURIComponent(window.location.href);
        const shareText = encodeURIComponent(`${publication.title} - ${publication.authors} (${publication.year})`);
        
        const shareLinks = {
            twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
        };

        // Create and show share modal
        showShareModal(shareLinks);
    }
}

class CitationGenerator {
    static generateAPA(publication) {
        // APA 7th edition format
        const authors = this.formatAuthorsAPA(publication.authors);
        return `${authors} (${publication.year}). ${publication.title}. ${publication.journal}.${publication.doi ? ` https://doi.org/${publication.doi}` : ''}`;
    }

    static generateMLA(publication) {
        // MLA 8th edition format
        const authors = this.formatAuthorsMLA(publication.authors);
        return `${authors}. "${publication.title}." ${publication.journal}, ${publication.year}.${publication.doi ? ` DOI: ${publication.doi}` : ''}`;
    }

    static generateBibTeX(publication) {
        // Create a unique citation key based on first author's lastname and year
        const firstAuthor = publication.authors.split(',')[0].split('&')[0].trim().split(' ').pop();
        const citationKey = `${firstAuthor}${publication.year}`;
        
        return `@article{${citationKey},
    author = {${this.formatAuthorsBibTeX(publication.authors)}},
    year = {${publication.year}},
    title = {${publication.title}},
    journal = {${publication.journal}}${publication.doi ? `,
    doi = {${publication.doi}}` : ''}
}`;
    }

    static formatAuthorsAPA(authors) {
        return authors.split(', ')
            .map(author => {
                const parts = author.trim().split(' ');
                const lastName = parts.pop();
                const initials = parts.map(name => `${name.charAt(0)}.`).join(' ');
                return `${lastName}, ${initials}`;
            })
            .join(', ');
    }

    static formatAuthorsMLA(authors) {
        const authorList = authors.split(', ');
        if (authorList.length === 1) {
            return authorList[0];
        } else if (authorList.length === 2) {
            return `${authorList[0]} and ${authorList[1]}`;
        } else {
            return `${authorList[0]}, et al`;
        }
    }

    static formatAuthorsBibTeX(authors) {
        return authors.replace(' &', ' and');
    }
}

// Enhanced PublicationManager class with sorting
class PublicationManager {
    constructor() {
        this.initializeElements();
        this.initializeFilters();
        this.bindEvents();
        this.renderPublications();
    }

    initializeElements() {
        this.searchInput = document.getElementById('search-input');
        this.categoryFilter = document.getElementById('category-filter');
        this.yearFilter = document.getElementById('year-filter');
        this.sortSelect = document.getElementById('sort-select');
        this.publicationsGrid = document.getElementById('publications-grid');
    }

    initializeFilters() {
        // Initialize years
        const years = new Set();
        this.getAllPublications().forEach(pub => years.add(pub.year));
        
        Array.from(years)
            .sort((a, b) => b - a)
            .forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                this.yearFilter.appendChild(option);
            });
    }

    getAllPublications() {
        const allPubs = [];
        Object.values(publications).forEach(category => {
            if (Array.isArray(category)) {
                allPubs.push(...category);
            } else if (typeof category === 'object') {
                Object.values(category).forEach(subcategory => {
                    if (Array.isArray(subcategory)) {
                        allPubs.push(...subcategory);
                    }
                });
            }
        });
        return allPubs;
    }

    sortPublications(pubs, sortBy) {
        switch (sortBy) {
            case 'year-desc':
                return pubs.sort((a, b) => b.year - a.year);
            case 'year-asc':
                return pubs.sort((a, b) => a.year - b.year);
            case 'author':
                return pubs.sort((a, b) => a.authors.localeCompare(b.authors));
            case 'title':
                return pubs.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return pubs;
        }
    }

    filterAndSortPublications() {
        const searchTerm = this.searchInput.value.toLowerCase();
        const category = this.categoryFilter.value;
        const year = this.yearFilter.value;
        const sortBy = this.sortSelect.value;

        this.publicationsGrid.innerHTML = '';

        const filterPublication = (pub) => {
            const matchesSearch = !searchTerm || 
                pub.title.toLowerCase().includes(searchTerm) ||
                pub.authors.toLowerCase().includes(searchTerm) ||
                (pub.abstract && pub.abstract.toLowerCase().includes(searchTerm));
            const matchesYear = year === 'all' || pub.year === year;
            return matchesSearch && matchesYear;
        };

        // Handle featured publications first
        if (category === 'all' || category === 'featured') {
            const filteredFeatured = publications.featured.filter(filterPublication);
            if (filteredFeatured.length > 0) {
                this.renderCategoryHeader('Featured Research');
                this.sortPublications(filteredFeatured, sortBy)
                    .forEach(pub => this.renderPublicationCard(pub, true));
            }
        }

        // Handle other categories
        if (category === 'all' || category === 'overview') {
            const filteredOverview = publications.overview.filter(filterPublication);
            if (filteredOverview.length > 0) {
                this.renderCategoryHeader('Overview & Mechanisms');
                this.sortPublications(filteredOverview, sortBy)
                    .forEach(pub => this.renderPublicationCard(pub));
            }
        }

        if (category === 'all' || category === 'clinical') {
            Object.entries(publications.clinical).forEach(([subCategory, pubs]) => {
                const filteredPubs = pubs.filter(filterPublication);
                if (filteredPubs.length > 0) {
                    this.renderCategoryHeader(subCategory);
                    this.sortPublications(filteredPubs, sortBy)
                        .forEach(pub => this.renderPublicationCard(pub));
                }
            });
        }
    }

    renderPublicationCard(publication, isFeatured = false) {
        const card = document.createElement('div');
        card.className = `publication-card ${isFeatured ? 'featured' : ''}`;
        
        card.innerHTML = `
            <div class="card-content">
                <div class="card-header">
                    ${isFeatured ? '<span class="featured-badge">Featured</span>' : ''}
                    <h3>${publication.title}</h3>
                </div>
                <p class="authors">${publication.authors}</p>
                <p class="year">${publication.year}</p>
                <p class="journal">${publication.journal}</p>
                ${publication.abstract ? `
                    <div class="abstract">
                        <p>${publication.abstract}</p>
                    </div>
                ` : ''}
                <div class="card-actions">
                    <button class="pdf-btn" data-url="${publication.pdfUrl}">
                        <i class="fas fa-file-pdf"></i> View PDF
                    </button>
                    <button class="share-btn" data-title="${publication.title}">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                    <button class="cite-btn">
                        <i class="fas fa-quote-right"></i> Cite
                    </button>
                    ${publication.doi ? `
                        <a href="https://doi.org/${publication.doi}" class="doi-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i> DOI
                        </a>
                    ` : ''}
                </div>
            </div>
            <div class="loading-overlay hidden">
                <i class="fas fa-spinner loading"></i>
            </div>
        `;

        // Add event listeners
        card.querySelector('.pdf-btn').addEventListener('click', () => this.handlePdfClick(publication.pdfUrl));
        card.querySelector('.share-btn').addEventListener('click', () => this.handleShare(publication));
        card.querySelector('.cite-btn').addEventListener('click', () => this.showCitationModal(publication));

        this.publicationsGrid.appendChild(card);
    }

    renderCategoryHeader(category) {
        const header = document.createElement('h2');
        header.className = 'category-header';
        header.textContent = category;
        this.publicationsGrid.appendChild(header);
    }

    renderPublications() {
        this.filterAndSortPublications();
    }

    bindEvents() {
        this.searchInput?.addEventListener('input', () => this.filterAndSortPublications());
        this.categoryFilter?.addEventListener('change', () => this.filterAndSortPublications());
        this.yearFilter?.addEventListener('change', () => this.filterAndSortPublications());
        this.sortSelect?.addEventListener('change', () => this.filterAndSortPublications());
    }

    showCitationModal(publication) {
        const modal = document.createElement('div');
        modal.className = 'citation-modal';
        
        const apa = CitationGenerator.generateAPA(publication);
        const mla = CitationGenerator.generateMLA(publication);
        const bibtex = CitationGenerator.generateBibTeX(publication);
        
        modal.innerHTML = `
            <div class="citation-modal-content">
                <h3>Citation Formats</h3>
                <div class="citation-tabs">
                    <button class="tab-btn active" data-format="apa">APA</button>
                    <button class="tab-btn" data-format="mla">MLA</button>
                    <button class="tab-btn" data-format="bibtex">BibTeX</button>
                </div>
                <div class="citation-content">
                    <div class="citation-format apa active">
                        <pre>${apa}</pre>
                        <button class="copy-btn" data-citation="${encodeURIComponent(apa)}">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                    <div class="citation-format mla">
                        <pre>${mla}</pre>
                        <button class="copy-btn" data-citation="${encodeURIComponent(mla)}">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                    <div class="citation-format bibtex">
                        <pre>${bibtex}</pre>
                        <button class="copy-btn" data-citation="${encodeURIComponent(bibtex)}">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                </div>
                <button class="close-modal">Close</button>
            </div>
        `;

        document.body.appendChild(modal);

        // Handle tab switching
        const tabs = modal.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const format = tab.dataset.format;
                modal.querySelectorAll('.citation-format').forEach(f => f.classList.remove('active'));
                modal.querySelector(`.citation-format.${format}`).classList.add('active');
            });
        });

        // Handle copy buttons
        modal.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const citation = decodeURIComponent(btn.dataset.citation);
                await navigator.clipboard.writeText(citation);
                
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            });
        });

        // Handle close button
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
}

// Initialize the publication manager when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.publications-container')) {
        new PublicationManager();
    }
}); 