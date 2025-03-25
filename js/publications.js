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
            pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_81a1bb956d8644499f9a7153e2c5b691.pdf"
        }
    ],
    overview: [
        {
            authors: "Altan, S., Berberoglu, B., Canan, S. & Dane, S.",
            year: "2016",
            title: "Effects of neurofeedback therapy in healthy young subjects",
            journal: "Clin invest Med 39, 27–30",
            pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_fc2e850ad6874933994d04d20e26146c.pdf"
        },
        {
            authors: "Dobrushina, O. et al.",
            year: "2020",
            title: "Modulation of Intrinsic Brain Connectivity by Implicit Electroencephalographic Neurofeedback",
            journal: "Frontiers in Human Neuroscience, 14: 192",
            pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_d0b6004040e947dfb0c505475f631e03.pdf"
        },
        {
            authors: "Grin-Yatsenko, V. A., Ponomarev, V. A., Kara, O., Wandernoth, B., Gregory, M., Ilyukhina, V. A., & Kropotov, J. D.",
            year: "2018",
            title: "Effect of Infra-Low Frequency Neurofeedback on Infra-Slow EEG Fluctuations",
            journal: "Biofeedback. IntechOpen",
            pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_9dd9f9a264b7400bbc0990d2e2b6a171.pdf"
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
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_10bbc4f379bc46d1b32f33e6c37fc7ca.pdf"
            },
            {
                authors: "Leong, S. L., Vanneste, S., Lim, J., Smith, M., Manning, P., & De Ridder, D.",
                year: "2018",
                title: "A randomised, double-blind, placebo-controlled parallel trial of closed-loop infraslow brain training in food addiction",
                journal: "Scientific reports, 8(1), 1-9",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_410d76faaa6244768e2744a472ee8499.pdf"
            }
        ],
        "ADHD & AUTISM": [
            {
                authors: "Asadpour, V.",
                year: "2021",
                title: "Therapeutic Effect of Infra-Low-Frequency Neurofeedback Training on Children and Adolescents with ADHD",
                journal: "Brain-Computer Interface (1-18)",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_87d3c434181d4f8e979c70e1b61bcd03.pdf"
            }
        ],
        "DEPRESSION": [
            {
                authors: "Grin-Yatsenko, V. A. et al.",
                year: "2018",
                title: "Infra-low frequency neurofeedback in depression: Three case studies",
                journal: "NeuroRegulation 5, 30–42",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_d77ff848293b492ca1beaa0a858d796d.pdf"
            }
        ],
        "MIGRAINE": [
            {
                authors: "Dobrushina, O., Arina, G., Osina, E. & Aziatskaya, G.",
                year: "2017",
                title: "Clinical and psychological confirmation of stabilizing effect of neurofeedback in migraine",
                journal: "European Psychiatry, 41",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_6215720e90974f2d80669d1e6e8e4c5e.pdf"
            }
        ],
        "EATING DISORDERS": [
            {
                authors: "Chirita-Emandi, A., & Puiu, M.",
                year: "2014",
                title: "Outcomes of neurofeedback training in childhood obesity management: A pilot study",
                journal: "Journal of Alternative and Complementary Medicine, 20(11), 831–837",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_4167a7936fed4cb880a9fc2a71a992a9.pdf"
            }
        ],
        "FIBROMYALGIA_MS_CONCUSSION": [
            {
                authors: "Dobrushina, O. R., Varako, N. A., Kovyazina, M. S. & Zinchenko, Y. P.",
                year: "2016",
                title: "Combination of Neurofeedback and cognitive training in attention deficit due to multiple sclerosis",
                journal: "Int. J. Psychophysiol. 108, 118",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_3651402a9807418abc1c894dca74a634.pdf"
            },
            {
                authors: "Ingvaldsen, S. H.",
                year: "2019",
                title: "QEEG and Infra-Low Frequency Neurofeedback Training in Fibromyalgia: A Pilot Study",
                journal: "Master's thesis, NTNU",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_a74cb03cbaef48118a8283904158fb89.pdf"
            }
        ],
        "TRAUMA_PTSD": [
            {
                authors: "Gerge, A.",
                year: "2020",
                title: "A multifaceted case-vignette integrating neurofeedback and EMDR in the treatment of complex PTSD",
                journal: "European Journal of Trauma & Dissociation, 4(3), 100157",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_61f417f531364735838f9e53fc78aad1.pdf"
            },
            {
                authors: "Rogel, A., et al.",
                year: "2020",
                title: "The Impact of Neurofeedback Training on Children With Developmental Trauma: A Randomized Controlled Study",
                journal: "Psychological Trauma: Theory, Research, Practice, and Policy",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_a3243540cf294126b3595001f4f283df.pdf"
            }
        ],
        "REFRACTORY_NEUROLOGICAL": [
            {
                authors: "Legarda, S. B., McMahon, D., Othmer, S. S. & Othmer, S. S.",
                year: "2011",
                title: "Clinical neurofeedback: Case studies, proposed mechanism, and implications for pediatric neurology practice",
                journal: "J. Child Neurol. 26, 1045–1051",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_140ef78b62034bb3ac9d41d2296c1a44.pdf"
            }
        ],
        "TINNITUS": [
            {
                authors: "Leong, S. L., Vanneste, S., Lim, J., Smith, M., Manning, P., & De Ridder, D.",
                year: "2018",
                title: "A randomised, double-blind, placebo-controlled parallel trial of closed-loop infraslow brain training in food addiction",
                journal: "Scientific reports, 8(1), 1-9",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_410d76faaa6244768e2744a472ee8499.pdf"
            }
        ],
        "TRAUMATIC BRAIN INJURY (TBI)": [
            {
                authors: "Carlson, J. & Ross, G.W.",
                year: "2021",
                title: "Neurofeedback Impact on Chronic Headache, Sleep, and Attention Disorders Experienced by Veterans with Mild Traumatic Brain Injury: A Pilot Study",
                journal: "Biofeedback, 49(1), 2-9",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_4cf9cf8bc08a426c85f73e907e6d7b84.pdf"
            }
        ],
        "VR_PAIN_TREATMENT": [
            {
                authors: "Orakpo, N., Vieux, U. & Castro-Nunez, C.",
                year: "2021",
                title: "Case Report: Virtual Reality Neurofeedback Therapy as a Novel Modality for Sustained Analgesia in Centralized Pain Syndromes",
                journal: "Frontiers in Psychiatry, 12, 418",
                pdfUrl: "https://www.neurofeedbackadvocacyproject.com/_files/ugd/1341df_d9e255c865444097b7ddadadd7b5ec89.pdf"
            }
        ]
        // Add more clinical categories
    },
    books: [
        {
            authors: "Kirk H.",
            year: "2015",
            title: "Restoring the Brain: Neurofeedback as an Integrative Approach to Health",
            publisher: "CRC Press, Taylor and Francis Group",
            chapter: "Chapter 11, Neurofeedback in application to the ADHD spectrum",
            chapterAuthors: "R. Sasu & S. Othmer",
            pdfUrl: "https://www.eeginfo.com/research/pdfs/ADHD-Chapter-Roxana-Sieg-22720-for-ResearchGate.pdf"
        },
        {
            authors: "Othmer, S. & Othmer, S. F.",
            year: "2011",
            title: "Performance Enhancement Applications of Neurofeedback",
            publisher: "Wiley-Blackwell",
            bookTitle: "Case Studies in Applied Psychophysiology: Neurofeedback and Biofeedback Treatments for Advances in Human Performance",
            pages: "17-30",
            pdfUrl: "https://www.eeginfo.com/research/pdfs/ADHD-Chapter-Roxana-Sieg-22720-for-ResearchGate.pdf"
        },
        {
            authors: "Othmer S.",
            year: "2019",
            title: "Protocol Guide for Neurofeedback Clinicians",
            edition: "7th Edition",
            publisher: "EEG Info",
            pdfUrl: "https://www.eeginfo.com/research/pdfs/ADHD-Chapter-Roxana-Sieg-22720-for-ResearchGate.pdf"
        }
    ]
};

// Keep only one version of the CitationGenerator class (outside of PublicationManager)
class CitationGenerator {
    static generateAPA(publication) {
        try {
            console.log("Generating APA citation for:", publication); // Debug log
            let citation = '';
            if (publication.authors && publication.year && publication.title) {
                if (publication.journal) {
                    // For journal articles
                    citation = `${publication.authors} (${publication.year}). ${publication.title}. ${publication.journal}.`;
                } else if (publication.publisher) {
                    // For books
                    citation = `${publication.authors} (${publication.year}). ${publication.title}. ${publication.publisher}.`;
                    if (publication.chapter) {
                        citation = `${publication.chapterAuthors} (${publication.year}). ${publication.chapter}. In ${publication.authors}, ${publication.title} (pp. ${publication.pages}). ${publication.publisher}.`;
                    }
                }
                if (publication.doi) {
                    citation += ` https://doi.org/${publication.doi}`;
                }
            }
            return citation;
        } catch (error) {
            console.error("Error generating APA citation:", error);
            return "Error generating citation";
        }
    }

    static generateMLA(publication) {
        try {
            console.log("Generating MLA citation for:", publication); // Debug log
            let citation = '';
            if (publication.authors && publication.year && publication.title) {
                const authors = publication.authors.split(',')[0].trim();
                if (publication.journal) {
                    citation = `${authors}. "${publication.title}." ${publication.journal}, ${publication.year}.`;
                } else if (publication.publisher) {
                    citation = `${authors}. ${publication.title}. ${publication.publisher}, ${publication.year}.`;
                }
            }
            return citation;
        } catch (error) {
            console.error("Error generating MLA citation:", error);
            return "Error generating citation";
        }
    }

    static generateBibTeX(publication) {
        try {
            console.log("Generating BibTeX citation for:", publication); // Debug log
            const firstAuthor = publication.authors.split(',')[0].split(' ').pop();
            const citationKey = `${firstAuthor}${publication.year}`;
            
            let citation = publication.journal ? 
                `@article{${citationKey},\n` : 
                `@book{${citationKey},\n`;
            
            citation += `    author = {${publication.authors}},\n`;
            citation += `    year = {${publication.year}},\n`;
            citation += `    title = {${publication.title}},\n`;
            
            if (publication.journal) {
                citation += `    journal = {${publication.journal}}`;
            } else if (publication.publisher) {
                citation += `    publisher = {${publication.publisher}}`;
            }
            
            if (publication.doi) {
                citation += `,\n    doi = {${publication.doi}}`;
            }
            
            citation += '\n}';
            return citation;
        } catch (error) {
            console.error("Error generating BibTeX citation:", error);
            return "Error generating citation";
        }
    }
}

// Standalone showCitationModal function
function showCitationModal(publication) {
    const modal = document.createElement('div');
    modal.className = 'citation-modal';
    
    const apa = CitationGenerator.generateAPA(publication);
    const mla = CitationGenerator.generateMLA(publication);
    const bibtex = CitationGenerator.generateBibTeX(publication);
    
    modal.innerHTML = `
        <div class="citation-modal-content">
            <button class="close-modal" aria-label="Close modal">
                <i class="fas fa-times"></i>
            </button>
            <h3>Citation Formats</h3>
            <div class="citation-tabs">
                <button class="tab-btn active" data-format="apa">
                    <i class="fas fa-quote-left"></i> APA
                </button>
                <button class="tab-btn" data-format="mla">
                    <i class="fas fa-quote-right"></i> MLA
                </button>
                <button class="tab-btn" data-format="bibtex">
                    <i class="fas fa-code"></i> BibTeX
                </button>
            </div>
            <div class="citation-content">
                <div class="citation-format apa active">
                    <div class="citation-box">
                    <pre>${apa}</pre>
                    <button class="copy-btn" data-citation="${encodeURIComponent(apa)}">
                            <i class="fas fa-copy"></i>
                            <span>Copy APA</span>
                    </button>
                    </div>
                </div>
                <div class="citation-format mla">
                    <div class="citation-box">
                    <pre>${mla}</pre>
                    <button class="copy-btn" data-citation="${encodeURIComponent(mla)}">
                            <i class="fas fa-copy"></i>
                            <span>Copy MLA</span>
                    </button>
                    </div>
                </div>
                <div class="citation-format bibtex">
                    <div class="citation-box">
                    <pre>${bibtex}</pre>
                    <button class="copy-btn" data-citation="${encodeURIComponent(bibtex)}">
                            <i class="fas fa-copy"></i>
                            <span>Copy BibTeX</span>
                    </button>
                </div>
            </div>
            </div>
        </div>
    `;

    // Update the CSS for better copy button styling
    const style = document.createElement('style');
    style.textContent = `
        .citation-box {
            position: relative;
            margin-bottom: 1.5rem;
            background: #f8fafc;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            padding: 1.5rem;
        }

        .citation-box pre {
            font-family: var(--font-mono);
            font-size: 0.9rem;
            line-height: 1.5;
            color: #2d3748;
            margin: 0;
            padding-right: 100px;
        }

        .copy-btn {
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 1.2rem;
            border: 1px solid #e1e8f0;
            border-radius: 8px;
            background: white;
            color: #2563eb; /* Blue text */
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .copy-btn:hover {
            background: #f8fafc;
            border-color: #2563eb;
            color: #1d4ed8; /* Darker blue on hover */
            transform: translateY(-50%) scale(1.05);
            box-shadow: 0 4px 8px rgba(37, 99, 235, 0.1);
        }

        .copy-btn:active {
            transform: translateY(-50%) scale(0.95);
        }

        .copy-btn i {
            font-size: 1rem;
            color: inherit;
        }

        .copy-btn.copied {
            background: #ecfdf5; /* Light green background */
            color: #059669; /* Green text */
            border-color: #059669;
        }

        .copy-btn.error {
            background: #fef2f2; /* Light red background */
            color: #dc2626; /* Red text */
            border-color: #dc2626;
        }

        .copy-btn.copied i {
            animation: copySuccess 0.3s ease-out;
        }

        /* Make the button more visible on mobile */
        @media (max-width: 768px) {
            .citation-box {
                padding: 1.5rem 1rem;
            }

            .citation-box pre {
                padding-right: 80px;
                font-size: 0.85rem;
            }

            .copy-btn {
                padding: 0.5rem 1rem;
                font-size: 0.85rem;
            }
        }

        @keyframes copySuccess {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }

        .citation-title {
            font-size: 0.75rem;  /* Reduced from 0.85rem */
            color: #94a3b8;
            margin-bottom: 1.5rem;
            font-weight: 500;
            display: block;
            text-transform: uppercase;  /* Added to maintain readability at smaller size */
            letter-spacing: 0.02em;    /* Added for better legibility */
        }
    `;
    document.head.appendChild(style);

    // Update the copy button click handler
    modal.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            try {
                const citation = decodeURIComponent(btn.dataset.citation);
                await navigator.clipboard.writeText(citation);
                
                btn.classList.add('copied');
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `
                    <i class="fas fa-check"></i>
                    <span>Copied!</span>
                `;
                
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = originalHTML;
                }, 2000);
            } catch (error) {
                console.error("Error copying citation:", error);
                btn.classList.add('error');
                btn.innerHTML = `
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>Error</span>
                `;
                setTimeout(() => {
                    btn.classList.remove('error');
                    btn.innerHTML = originalHTML;
                }, 2000);
            }
        });
    });

    document.body.appendChild(modal);

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

// Update createPublicationCard function to properly bind the cite button
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
                <button class="cite-btn">
                    <i class="fas fa-quote-right"></i> Cite
                </button>
            </div>
        </div>
    `;

    // Add event listeners
    const pdfBtn = card.querySelector('.pdf-btn');
    pdfBtn.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    });

    // Add cite button functionality
    const citeBtn = card.querySelector('.cite-btn');
    citeBtn.addEventListener('click', () => {
        console.log("Cite button clicked for:", publication); // Debug log
        showCitationModal(publication);
    });

    return card;
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
        const pdfBtn = card.querySelector('.pdf-btn');
        pdfBtn.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url && url !== '#') {
                window.open(url, '_blank');
            }
        });
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
        
        // Generate citations
        const apa = CitationGenerator.generateAPA(publication);
        const mla = CitationGenerator.generateMLA(publication);
        const bibtex = CitationGenerator.generateBibTeX(publication);
        
        modal.innerHTML = `
            <div class="citation-modal-content">
                <button class="close-modal" aria-label="Close modal">
                    <i class="fas fa-times"></i>
                </button>
                <h3>Citation Formats</h3>
                <div class="citation-tabs">
                    <button class="tab-btn active" data-format="apa">
                        <i class="fas fa-quote-left"></i> APA
                    </button>
                    <button class="tab-btn" data-format="mla">
                        <i class="fas fa-quote-right"></i> MLA
                    </button>
                    <button class="tab-btn" data-format="bibtex">
                        <i class="fas fa-code"></i> BibTeX
                    </button>
                </div>
                <div class="citation-content">
                    <div class="citation-format apa active">
                        <div class="citation-box">
                        <pre>${apa}</pre>
                        <button class="copy-btn" data-citation="${encodeURIComponent(apa)}">
                                <i class="fas fa-copy"></i>
                                <span>Copy APA</span>
                        </button>
                        </div>
                    </div>
                    <div class="citation-format mla">
                        <div class="citation-box">
                        <pre>${mla}</pre>
                        <button class="copy-btn" data-citation="${encodeURIComponent(mla)}">
                                <i class="fas fa-copy"></i>
                                <span>Copy MLA</span>
                        </button>
                    </div>
                </div>
                    <div class="citation-format bibtex">
                        <div class="citation-box">
                            <pre>${bibtex}</pre>
                            <button class="copy-btn" data-citation="${encodeURIComponent(bibtex)}">
                                <i class="fas fa-copy"></i>
                                <span>Copy BibTeX</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Update the CSS for better copy button styling
        const style = document.createElement('style');
        style.textContent = `
            .citation-box {
                position: relative;
                margin-bottom: 1.5rem;
                background: #f8fafc;
                border-radius: 12px;
                border: 1px solid #e2e8f0;
                padding: 1.5rem;
            }

            .citation-box pre {
                font-family: var(--font-mono);
                font-size: 0.9rem;
                line-height: 1.5;
                color: #2d3748;
                margin: 0;
                padding-right: 100px;
            }

            .copy-btn {
                position: absolute;
                top: 50%;
                right: 1rem;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.6rem 1.2rem;
                border: 1px solid #e1e8f0;
                border-radius: 8px;
                background: white;
                color: #2563eb; /* Blue text */
                font-size: 0.9rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            }

            .copy-btn:hover {
                background: #f8fafc;
                border-color: #2563eb;
                color: #1d4ed8; /* Darker blue on hover */
                transform: translateY(-50%) scale(1.05);
                box-shadow: 0 4px 8px rgba(37, 99, 235, 0.1);
            }

            .copy-btn:active {
                transform: translateY(-50%) scale(0.95);
            }

            .copy-btn i {
                font-size: 1rem;
                color: inherit;
            }

            .copy-btn.copied {
                background: #ecfdf5; /* Light green background */
                color: #059669; /* Green text */
                border-color: #059669;
            }

            .copy-btn.error {
                background: #fef2f2; /* Light red background */
                color: #dc2626; /* Red text */
                border-color: #dc2626;
            }

            .copy-btn.copied i {
                animation: copySuccess 0.3s ease-out;
            }

            /* Make the button more visible on mobile */
            @media (max-width: 768px) {
                .citation-box {
                    padding: 1.5rem 1rem;
                }

                .citation-box pre {
                    padding-right: 80px;
                    font-size: 0.85rem;
                }

                .copy-btn {
                    padding: 0.5rem 1rem;
                    font-size: 0.85rem;
                }
            }

            @keyframes copySuccess {
                0% { transform: scale(1); }
                50% { transform: scale(1.2); }
                100% { transform: scale(1); }
            }

            .citation-title {
                font-size: 0.75rem;  /* Reduced from 0.85rem */
                color: #94a3b8;
                margin-bottom: 1.5rem;
                font-weight: 500;
                display: block;
                text-transform: uppercase;  /* Added to maintain readability at smaller size */
                letter-spacing: 0.02em;    /* Added for better legibility */
            }
        `;
        document.head.appendChild(style);

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
                try {
                    const citation = decodeURIComponent(btn.dataset.citation);
                    await navigator.clipboard.writeText(citation);
                    
                    btn.classList.add('copied');
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = `
                        <i class="fas fa-check"></i>
                        <span>Copied!</span>
                    `;
                    
                    setTimeout(() => {
                        btn.classList.remove('copied');
                        btn.innerHTML = originalHTML;
                    }, 2000);
                } catch (error) {
                    console.error("Error copying citation:", error);
                    btn.classList.add('error');
                    btn.innerHTML = `
                        <i class="fas fa-exclamation-triangle"></i>
                        <span>Error</span>
                    `;
                    setTimeout(() => {
                        btn.classList.remove('error');
                        btn.innerHTML = originalHTML;
                    }, 2000);
                }
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

// Add this function to handle book-specific cards
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'publication-card book-card';
    
    card.innerHTML = `
        <div class="card-content">
            <h3>${book.title}</h3>
            <p class="authors">${book.authors} (${book.year})</p>
            <p class="publisher">${book.publisher}</p>
            ${book.chapter ? `<p class="chapter">${book.chapter}</p>` : ''}
            ${book.chapterAuthors ? `<p class="chapter-authors">Chapter Authors: ${book.chapterAuthors}</p>` : ''}
            ${book.bookTitle ? `<p class="book-title">In: ${book.bookTitle}</p>` : ''}
            ${book.pages ? `<p class="pages">Pages: ${book.pages}</p>` : ''}
            ${book.edition ? `<p class="edition">${book.edition}</p>` : ''}
            <div class="card-actions">
                <button class="pdf-btn" data-url="${book.pdfUrl}">
                    <i class="fas fa-file-pdf"></i> View PDF
                </button>
                <button class="share-btn">
                    <i class="fas fa-share-alt"></i> Share
                </button>
                <button class="cite-btn">
                    <i class="fas fa-quote-right"></i> Cite
                </button>
            </div>
        </div>
    `;

    // Add event listeners
    const pdfBtn = card.querySelector('.pdf-btn');
    pdfBtn.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    });

    // Add cite button functionality
    const citeBtn = card.querySelector('.cite-btn');
    citeBtn.addEventListener('click', () => showCitationModal(book));

    return card;
}

// Add this function to render all publication types including books
function renderPublications() {
    const publicationsGrid = document.getElementById('publications-grid');
    if (!publicationsGrid) return;

    // Clear existing content
    publicationsGrid.innerHTML = '';

    // Define main sections
    const mainSections = [
        {
            title: 'Featured Research',
            data: publications.featured,
            className: 'featured-section'
        },
        {
            title: 'Overview & Mechanisms',
            data: publications.overview,
            className: 'overview-section'
        },
        {
            title: 'Clinical Applications',
            data: publications.clinical,
            className: 'clinical-section',
            isClinical: true
        },
        {
            title: 'Books & Chapters',
            data: publications.books,
            className: 'books-section',
            isBooks: true
        }
    ];

    // Render each main section
    mainSections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = `publication-section ${section.className}`;
        
        // Add section title
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.title;
        sectionDiv.appendChild(sectionTitle);

        // Create grid container
        const gridContainer = document.createElement('div');
        gridContainer.className = section.isBooks ? 'books-grid' : 'publications-grid';

        if (section.isClinical) {
            // Handle Clinical Applications section
            Object.entries(section.data).forEach(([category, items]) => {
                if (items && items.length > 0) {
                    const categoryDiv = document.createElement('div');
                    categoryDiv.className = 'clinical-category';
                    
                    const categoryTitle = document.createElement('h3');
                    categoryTitle.textContent = category.replace(/_/g, ' ');
                    categoryDiv.appendChild(categoryTitle);

                    const categoryGrid = document.createElement('div');
                    categoryGrid.className = 'publications-grid';

                    items.forEach(item => {
                        const card = createPublicationCard(item);
                        categoryGrid.appendChild(card);
                    });

                    categoryDiv.appendChild(categoryGrid);
                    gridContainer.appendChild(categoryDiv);
                }
            });
        } else {
            // Handle other sections
            section.data.forEach(item => {
                const card = section.isBooks ? createBookCard(item) : createPublicationCard(item);
                gridContainer.appendChild(card);
            });
        }

        sectionDiv.appendChild(gridContainer);
        publicationsGrid.appendChild(sectionDiv);
    });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', renderPublications); 

// Update the mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu');  // Changed from mobile-menu-btn to mobile-menu
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    mobileMenuBtn?.addEventListener('click', () => {
        body.classList.toggle('menu-open');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (body.classList.contains('menu-open') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.mobile-menu')) {
            body.classList.remove('menu-open');
            navLinks.classList.remove('active');
        }
    });
}); 