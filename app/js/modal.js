//audios
const clickClose = new Audio('app/audio/click_close.mp3');

// Modal content data
const modalData = {
    about: {
        title: 'about',
        content: `
            <h3>Hello there! <span class="on-wave">👋</span></h3>
            <p>I'm Moksh, a creative developer and designer passionate about crafting digital experiences that push boundaries and leave lasting impressions.</p>
            
            <h3>What I Do</h3>
            <ul>
                <li><strong>Development:</strong> Building performant, accessible web applications with modern technologies</li>
                <li><strong>Design:</strong> Creating compelling visual narratives and intuitive user experiences</li>
                <li><strong>3D & Motion:</strong> Exploring the intersection of code and creative expression</li>
            </ul>
            
            <h3>Currently</h3>
            <p>I'm a Computer Science Engineering student at VIT-Bhopal University, diving deep into 3D graphics, AI/ML, and open-source development.</p>
        `
    },
    links: {
        title: 'links',
        content: `
            <h3>Connect With Me</h3>
            <p>Find me across the web — I'm always excited to connect with fellow creators and developers.</p>
            
            <ul>
                <li><strong>GitHub:</strong> <a href="https://github.com/mokshdoshi2005" target="_blank">@mokshdoshi2005</a></li>
                <li><strong>LinkedIn:</strong> Professional network and career journey</li>
                <li><strong>Dribbble:</strong> Design explorations and visual work</li>
                <li><strong>Twitter/X:</strong> Thoughts on tech, design & creativity</li>
            </ul>
            
            <p>Feel free to reach out!</p>
        `
    },
    work: {
        title: 'works',
        content: `
            <h3>Selected Work</h3>
            <p>A curated selection of projects that showcase my skills across different domains.</p>
            
            <h3>Development</h3>
            <ul>
                <li>Interactive portfolio websites with cutting-edge animations</li>
                <li>Full-stack web applications with modern architectures</li>
                <li>Creative coding experiments & generative art</li>
                <li>Open-source tools and libraries</li>
            </ul>
            
            <h3>Design & 3D</h3>
            <ul>
                <li>UI/UX design for web and mobile applications</li>
                <li>3D modeling and rendering in Blender</li>
                <li>Motion graphics and visual effects</li>
                <li>Brand identity and logo design</li>
            </ul>
            
            <p><em>More projects coming soon!</em></p>
        `
    },
    faq: {
        title: 'faq',
        content: `
            <h3>Frequently Asked Questions</h3>
            
            <div class="dropdown-container">
                <details>
                    <summary><strong>What's your tech stack?</strong></summary>
                    <p>I work with Python, JavaScript/TypeScript, C++, and Rust. For web development, I use React, Next.js, and Node.js.</p>
                </details>
            </div>
            
            <div class="dropdown-container">
                <details>
                    <summary><strong>Are you available for freelance work?</strong></summary>
                    <p>Yes! I'm always interested in exciting projects that challenge my creativity.</p>
                </details>
            </div>
            
            <div class="dropdown-container">
                <details>
                    <summary><strong>What software do you use?</strong></summary>
                    <p>VS Code for coding, Figma for design, Blender for 3D work.</p>
                </details>
            </div>
            
            <div class="dropdown-container">
                <details>
                    <summary><strong>Do you take on internships?</strong></summary>
                    <p>Absolutely! Reach out at doshimoksh3@gmail.com.</p>
                </details>
            </div>
        `
    },
    contact: {
        title: 'contact',
        content: `
            <h3>Let's Create Something Amazing</h3>
            <p>Whether you have a project in mind or just want to say hello — I'd love to hear from you!</p>
            
            <div class="postcard">
                <div class="postcard-header">📬 Developer for Hire</div>
                
                <div class="address-label">Services I Offer:</div>
                <div class="services-grid">
                    <div class="service-item">
                        <input type="checkbox" id="web-dev" name="services">
                        <label for="web-dev">Web Development</label>
                    </div>
                    <div class="service-item">
                        <input type="checkbox" id="ui-design" name="services">
                        <label for="ui-design">UI/UX Design</label>
                    </div>
                    <div class="service-item">
                        <input type="checkbox" id="3d-work" name="services">
                        <label for="3d-work">3D & Motion</label>
                    </div>
                    <div class="service-item">
                        <input type="checkbox" id="consulting" name="services">
                        <label for="consulting">Consulting</label>
                    </div>
                </div>
                
                <div class="address-label">Your Message:</div>
                <input class="message-lines" placeholder="Hi Moksh, I'd love to discuss..." id="message-line-1">
                <input class="message-lines" placeholder="My project is about..." id="message-line-2">
                
                <input class="signature-line" placeholder="Your Name">
                
                <button class="send-button" onclick="sendPostcard()">✉️ Send Message</button>
                
                <div class="contact-info-vintage">
                    <h4>Direct Contact</h4>
                    <div class="contact-line">📧 doshimoksh3@gmail.com</div>
                    <div class="contact-line">⚡ Usually responds within 48hrs</div>
                </div>
            </div>
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
    const offsetX = (modalCounter - 1) * 20;
    const offsetY = (modalCounter - 1) * 20;

    const modalHTML = `
        <div class="modal" id="${modalId}">
            <div class="modal-header">
                <h2>${data.title}</h2>
                <button class="modal-close" onclick="closeModal('${modalId}')">&times;</button>
            </div>
            <div class="modal-content">
                ${data.content}
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = document.getElementById(modalId);

    // Apply offset
    if (modalCounter > 1) {
        modal.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(1)`;
    }

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

    try {
        clickClose.play();
    } catch (e) { }

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
            parseInt(getComputedStyle(m).zIndex) || 2000
        ));
        modal.style.zIndex = maxZ + 1;

        const rect = modal.getBoundingClientRect();
        dragOffset.x = e.clientX - rect.left;
        dragOffset.y = e.clientY - rect.top;

        header.style.cursor = 'grabbing';
        e.preventDefault();
    });
}

// Global drag handlers
document.addEventListener('mousemove', (e) => {
    if (!isDragging || !currentModal) return;

    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;

    currentModal.style.left = newX + 'px';
    currentModal.style.top = newY + 'px';
    currentModal.style.transform = 'none';
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

        try {
            clickOpen.play();
        } catch (err) { }

        // Get section from data-section attribute
        const section = item.getAttribute('data-section');

        if (section && modalData[section]) {
            createModal(section);
        }
    });
});

// Send postcard function
function sendPostcard() {
    const message1 = document.getElementById('message-line-1')?.value || '';
    const message2 = document.getElementById('message-line-2')?.value || '';

    const fullMessage = `${message1}\n${message2}`.trim();

    if (fullMessage) {
        const subject = encodeURIComponent('Project Inquiry from Portfolio');
        const body = encodeURIComponent(fullMessage);
        window.open(`mailto:doshimoksh3@gmail.com?subject=${subject}&body=${body}`);
    } else {
        alert('Please fill in at least one message field!');
    }
}
