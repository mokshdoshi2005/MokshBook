//audios
const clickClose = new Audio('app/audio/click_close.mp3');
 
// Modal content data
const modalData = {
    about: {
        title: 'about',
        icon: `<circle cx="12" cy="12" r="10"></circle>
                <path d="m9,9h0a3,3 0 016,0v1a2,2 0 01-2,2h-1"></path>
                <circle cx="12" cy="17" r="1"></circle>`,
        content: `
            <h3>Hello there! <span class="on-wave">👋</span></h3>
            <p>I'm Moksh, a pseudo-creative non-professional, passionate about bringing ideas to life through visual storytelling and technology.</p>
            
            <h3>What I Do</h3>
            <ul>
                <li><strong>Development:</strong> Building interactive experiences and web applications</li>
                <li><strong>Design:</strong> Creating compelling visual narratives and artwork</li>
                <li><strong>Testing:</strong> </li>
            </ul>
            
            <p>I love combining autistic creativity with technical skills to create unique, my inspiration led me to a work of patches (scrapbook effect).</p>
        `
    },
    links: {
        title: 'links',
        icon: `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>`,
        content: `
            <h3>Find Me Online</h3>
            <p>Connect with me on various platforms to see my work and stay updated:</p>
            
            <ul>
                <li><strong>Portfolio:</strong> My latest creative projects and case studies</li>
                <li><strong>GitHub:</strong> projects and code repositories</li>
                <li><strong>Dribbble:</strong> Design and illustration showcase</li>
                <li><strong>LinkedIn:</strong> Professional network and career updates</li>
            </ul>
            
            <p>Feel free to follow along on my creative journey!</p>
        `
    },
    work: {
        title: 'work',
        icon: `<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>`,
        content: `
            <h3>Recent Projects</h3>
            <p>Here's a selection of my recent work across different mediums:</p>
            
            <h3>Projects</h3>
            <ul>
                <li>Character animation for indie game studios</li>
                <li>Motion graphics for digital marketing campaigns</li>
                <li>Explainer video animations for tech startups</li>
            </ul>
            
            <h3>Development Work</h3>
            <ul>
                <li>Interactive portfolio websites</li>
                <li>Creative coding experiments</li>
                <li>Web applications with engaging UI/UX</li>
            </ul>
            
            <h3>Poster</h3>
            <ul>
                <li>Book and magazine illustrations</li>
                <li>Brand identity and logo design</li>
                <li>Digital art and concept work</li>
            </ul>
        `
    },
    faq: {
        title: 'faq',
        icon: `<rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M9 9h0a3 3 0 0 1 6 0v1a2 2 0 0 1-2 2h-1"></path>
                <circle cx="12" cy="17" r="1"></circle>`,
        content: `
            <h3 id="faq_folder">Frequently Asked Questions</h3>
            <div class="dropdown-container">
            <details id="faq_file">
                <summary><strong>Q: What's your background?</strong></summary><br>
                <p>A: I'm a Computer Science Engineering student at VIT-Bhopal University, passionate about 3D graphics, AI/ML, and open-source development.</p>
            </details></div>
            
            <div class="dropdown-container">
            <details id="faq_file">
                <summary><strong>Q: What programming languages do you work with?</strong></summary><br>
                <p>A: I enjoy working across different tech stacks. I'm proficient in Python, C++, C, and JavaScript. I also have experience with BASH, Rust, Prolog, SQL, Java, and C#.</p>
            </details></div>
            
            <div class="dropdown-container">
            <details id="faq_file">
                <summary><strong>Q: What software do you use?</strong></summary><br>
                <p>A: Figma for design, Blender for 3D work, and various coding environments depending on the project.</p>
            </details></div>
            
            <div class="dropdown-container">
            <details id="faq_file">
                <summary><strong>Q: Do you take on freelance projects?</strong></summary><br>
                <p>A: Yes! I'm always interested in collaborating on exciting projects that challenge my creativity.</p>
            </details></div>
            
            <div class="dropdown-container">
            <details id="faq_file">
                <summary><strong>Q: What's your turnaround time?</strong></summary><br>
                <p>A: It depends on the scope, but I always communicate timelines clearly upfront and keep you updated throughout.</p>
            </details></div>
            
            <div class="dropdown-container">
            <details id="faq_file">
                <summary><strong>Q: Are you available for internships or projects?</strong></summary><br>
                <p>A: Yes! I'm always interested in exciting opportunities, especially those involving 3D graphics, AI/ML, or open-source contributions. Feel free to reach out at doshimoksh3@gmail.com.</strong></p><br>
            </details></div>
        `
    },
    contact: {
        title: 'contact',
        icon: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
                <path d="M16 10l6 6"></path>`,
        content: `
            <h3>Get In Touch</h3>
            <p>Ready to collaborate or just want to say hello? I'd love to hear from you!</p>
            
            <h3>Email</h3>
            <p>doshimoksh3@gmail.com<br>
            <small>I typically respond within 48 hours</small></p>
            
            <h3>For Project Inquiries</h3>
            <p>Please include:</p>
            <ul>
                <li>Brief project description</li>
                <li>Timeline and budget range</li>
                <li>Any reference materials</li>
                <li>Preferred communication method</li>
            </ul>

            <div class="postcard">
        <div class="postcard-header">DEVELOPER FOR HIRE</div>
        
        <div class="vintage-stamps">
            <div class="stamp">
                <div class="stamp-content">
                    <div>CODE</div>
                    <div>CRAFT</div>
                    <div>25¢</div>
                </div>
            </div>
            <div class="stamp stamp-2">
                <div class="stamp-content">
                    <div>DIGITAL</div>
                    <div>SOLUTIONS</div>
                    <div>15¢</div>
                </div>
            </div>
        </div>
        
        <div class="postmark">
            <div>AVAILABLE</div>
            <div>FOR HIRE</div>
            <div>2024</div>
        </div>
        
        <div class="content-area">
            <div class="left-panel">
                <div class="address-section">
                    <div class="address-label">Services Available:</div>
                    <div class="services-grid">
                        <div class="service-item">
                            <input type="checkbox" id="web-dev" name="services">
                            <label for="web-dev">Web Development</label>
                        </div>
                        <div class="service-item">
                            <input type="checkbox" id="mobile-dev" name="services">
                            <label for="mobile-dev">Mobile Apps</label>
                        </div>
                        <div class="service-item">
                            <input type="checkbox" id="game-dev" name="services">
                            <label for="game-dev">Game Development</label>
                        </div>
                        <div class="service-item">
                            <input type="checkbox" id="ui-design" name="services">
                            <label for="ui-design">UI/UX Design</label>
                        </div>
                        <div class="service-item">
                            <input type="checkbox" id="api-dev" name="services">
                            <label for="api-dev">API Development</label>
                        </div>
                        <div class="service-item">
                            <input type="checkbox" id="database" name="services">
                            <label for="database">Database Design</label>
                        </div>
                        <div class="service-item">
                            <input type="checkbox" id="iot" name="services">
                            <label for="iot">IoT & Sensors</label>
                        </div>
                        <div class="service-item">
                            <input type="checkbox" id="automation" name="services">
                            <label for="automation">Automation</label>
                        </div>
                        <div class="service-item">
                            <input type="checkbox" id="consulting" name="services">
                            <label for="consulting">Tech Consulting</label>
                        </div>
                        <div class="service-item">
                            <input type="checkbox" id="prototyping" name="services">
                            <label for="prototyping">Prototyping</label>
                        </div>
                    </div>
                </div>
                
                <div class="contact-info-vintage">
                    <h4>Developer Contact:</h4>
                    <div class="contact-line">📧 doshimoksh3@gmail.com</div>
                    <div class="contact-line">🌐 Available Worldwide</div>
                    <div class="contact-line">⚡ Quick Response Time</div>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="right-panel">
                <div class="address-section">
                    <div class="address-label">Message:</div>
                    <div class="message-area">
                        <input class="message-lines" placeholder="Dear Developer, I need help with..." id="message-line-1">
                        <input class="message-lines" placeholder="My project involves..." id="message-line-2">
                        <input class="message-lines" placeholder="Timeline and budget..." id="message-line-3">
                        <input class="message-lines" placeholder="Additional requirements..." id="message-line-4">
                        <input class="message-lines" placeholder="Contact me at..." id="message-line-5">
                    </div>
                    
                    <div class="signature-area">
                        <input class="signature-line" placeholder="Your Name">
                        <div style="font-size: 0.7em; color: #666; margin-top: 5px;">Signature</div>
                    </div>
                    
                    <button class="send-button" onclick="sendPostcard()">SEND POSTCARD</button>
                </div>
            </div>
        </div>
        
        <div class="watermark">EST. 2025 • PREMIUM DEVELOPMENT SERVICES</div>
    </div>
            
            <p>Looking forward to hearing about your project and discussing how we can work together to bring your vision to life!</p>

            <script>
                
const pen = new Audio('app/audio/mixkit-short-pencil-writing-2376.wav');
// Play sound on typing

document.querySelectorAll('input[type="text"], .message-lines').forEach(input => {
    input.addEventListener('keydown', () => {
        pen.currentTime = 0; // Reset to start
        pen.play().catch(e => console.log('Audio play failed'));
    });
});

// Play sound on checkbox clicks
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        pen.play().catch(e => console.log('Audio play failed'));
    });
});
            </script>
        `
    }
};
// Modal management
let modalCounter = 0;
let activeModals = new Map();
let isDragging = false;
let currentModal = null;
let dragOffset = { x: 0, y: 0 };

function createModal(section) {
    const data = modalData[section];
    if (!data) return;

    modalCounter++;
    const modalId = `modal-${section}-${modalCounter}`;
    
    // Calculate position for new modals (slight offset)
    const offsetX = (modalCounter - 1) * 30;
    const offsetY = (modalCounter - 1) * 30;
    const startX = 50 + (offsetX / window.innerWidth) * 100;
    const startY = 50 + (offsetY / window.innerHeight) * 100;

    const modalHTML = `
        <div class="modal" id="${modalId}" style="left: ${startX}%; top: ${startY}%;">
            <div class="modal-header">
                <h2>
                    <svg class="icon" style="width: 24px; height: 24px; stroke: currentColor; stroke-width: 1.5; fill: none;" viewBox="0 0 24 24">
                        ${data.icon}
                    </svg>
                    ${data.title}
                </h2>
                <button class="modal-close" onclick="closeModal('${modalId}')">&times;</button>
            </div>
            <div class="modal-content">
                ${data.content}
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = document.getElementById(modalId);
    
    // Store modal reference
    activeModals.set(modalId, modal);

    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Set up dragging for this modal
    setupModalDrag(modal);

    return modalId;
}
function closeModal(modalId) {
    const modal = activeModals.get(modalId);
    if (!modal) return;
    clickClose.play();
    modal.classList.remove('active');
    setTimeout(() => {
        modal.remove();
        activeModals.delete(modalId);
    }, 300);
}

function setupModalDrag(modal) {
    const header = modal.querySelector('.modal-header');
    
    header.addEventListener('mousedown', (e) => {
        // Don't drag if clicking on close button
        if (e.target.closest('.modal-close')) return;
        
        isDragging = true;
        currentModal = modal;
        
        // Bring modal to front
        const maxZ = Math.max(...Array.from(activeModals.values()).map(m => 
            parseInt(getComputedStyle(m).zIndex) || 1000
        ));
        modal.style.zIndex = maxZ + 1;
        
        const rect = modal.getBoundingClientRect();
        const modalCenterX = rect.left + rect.width / 2;
        const modalCenterY = rect.top + rect.height / 2;
        
        dragOffset.x = e.clientX - modalCenterX;
        dragOffset.y = e.clientY - modalCenterY;
        
        header.style.cursor = 'grabbing';
        e.preventDefault();
    });
}

// Global drag handlers
document.addEventListener('mousemove', (e) => {
    if (!isDragging || !currentModal) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    // Keep modal within viewport bounds
    const rect = currentModal.getBoundingClientRect();
    const maxX = window.innerWidth - rect.width / 2;
    const maxY = window.innerHeight - rect.height / 2;
    const minX = rect.width / 2;
    const minY = rect.height / 2;
    
    const clampedX = Math.max(minX, Math.min(maxX, newX));
    const clampedY = Math.max(minY, Math.min(maxY, newY));
    
    currentModal.style.left = clampedX + 'px';
    currentModal.style.top = clampedY + 'px';
    currentModal.style.transform = 'translate(-50%, -50%) scale(1)';
});

document.addEventListener('mouseup', () => {
    if (isDragging && currentModal) {
        const header = currentModal.querySelector('.modal-header');
        header.style.cursor = 'grab';
        isDragging = false;
        currentModal = null;
    }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close the most recently opened modal
        const modals = Array.from(activeModals.values());
        if (modals.length > 0) {
            const lastModal = modals[modals.length - 1];
            closeModal(lastModal.id);
        }
    }
});

// Navigation items click handlers
const clickOpen = new Audio('app/audio/click_general.mp3');
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        clickOpen.play();
        const section = item.getAttribute('href').substring(1);
        
        // Click animation
        item.style.transform = 'scale(0.95) translateY(-3px)';
        setTimeout(() => {
            item.style.transform = 'translateY(-3px)';
            createModal(section);
        }, 150);
    });
});

// Add smooth hover effects and original background animation
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    document.body.style.background = `linear-gradient(${135 + mouseX * 10}deg, 
        hsl(${210 + mouseX * 20}, ${30 + mouseY * 20}%, ${96 - mouseY * 5}%) 0%, 
        hsl(${220 + mouseX * 15}, ${35 + mouseY * 15}%, ${85 - mouseY * 10}%) 100%)`;
});