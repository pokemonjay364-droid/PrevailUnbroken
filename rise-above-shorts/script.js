// Rise Above Shorts - Script

document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-btn');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const videoNum = this.getAttribute('data-video');
            handleVideoClick(videoNum);
        });
    });
});

function handleVideoClick(videoNum) {
    // Map video numbers to video files
    const videoMap = {
        '01': 'The 3 Second Rule',
        '02': 'Your Worst Day is Your Best Teacher',
        '03': 'Fall 7 Times, Rise 8',
        '04': 'The Bamboo Tree Secret',
        '05': 'You Are Stronger Than You Know'
    };

    const videoTitle = videoMap[videoNum];
    
    // Check if video file exists in exports folder
    const videoPath = `exports/${videoNum}-${videoTitle.toLowerCase().replace(/\s+/g, '-')}.mp4`;
    
    // Create modal for video player
    showVideoModal(videoTitle, videoPath, videoNum);
}

function showVideoModal(title, videoPath, videoNum) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.video-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>${title}</h2>
            <div class="video-container">
                <video width="100%" controls>
                    <source src="${videoPath}" type="video/mp4">
                    Your browser does not support the video tag.
                    <p><a href="${videoPath}">Download video</a></p>
                </video>
            </div>
            <div class="video-info">
                <p>Video ${videoNum} of the Overcoming Series</p>
            </div>
        </div>
    `;

    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .video-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .modal-content {
            position: relative;
            background: #000;
            border-radius: 12px;
            max-width: 90vw;
            max-height: 90vh;
            width: 100%;
            overflow: auto;
            padding: 0;
        }

        .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 40px;
            cursor: pointer;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1001;
            transition: all 0.3s ease;
        }

        .modal-close:hover {
            background: rgba(255, 255, 255, 0.4);
        }

        .modal-content h2 {
            color: white;
            padding: 20px 20px 10px;
            margin: 0;
            font-size: 1.5rem;
        }

        .video-container {
            position: relative;
            width: 100%;
            padding: 0 20px 20px;
        }

        .video-container video {
            width: 100%;
            height: auto;
            border-radius: 8px;
            background: #000;
        }

        .video-info {
            padding: 0 20px 20px;
            color: #ccc;
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            .modal-content {
                max-width: 95vw;
                max-height: 95vh;
            }

            .modal-close {
                width: 40px;
                height: 40px;
                font-size: 30px;
            }

            .modal-content h2 {
                font-size: 1.2rem;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(modal);

    // Close button functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', function() {
        modal.remove();
        // Clean up style if no other modals exist
        setTimeout(() => {
            if (!document.querySelector('.video-modal')) {
                const modals = document.querySelectorAll('style');
                modals.forEach(s => {
                    if (s.textContent.includes('.video-modal')) {
                        s.remove();
                    }
                });
            }
        }, 100);
    });

    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeBtn.click();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.parentNode) {
            closeBtn.click();
        }
    });
}

// Smooth scroll for navigation (if needed in future)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add loading state for images
document.querySelectorAll('.thumbnail-wrapper img').forEach(img => {
    img.addEventListener('load', function() {
        this.parentElement.classList.add('loaded');
    });
    
    img.addEventListener('error', function() {
        this.style.display = 'none';
        this.parentElement.style.background = '#ccc';
    });
});