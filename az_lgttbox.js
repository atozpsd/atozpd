//Social Shared Link atozpsd
$(document).ready(function () {
    // Current URL to share (you can customize this)
    const sharedUrl = window.location.href;
    if (!sharedUrl || sharedUrl === 'about:blank') {
        alert('Please open this page from a proper URL to enable sharing');
        return;
    }
    const encodedUrl = encodeURIComponent(sharedUrl);
    const title = encodeURIComponent(document.title || 'Check out this content!');

    // Set shareable URL input value
    $('#shareable-url').val(sharedUrl);

    // Initialize share buttons with their URLs
    $('.share-btn').each(function () {
        const platform = $(this).data('platform');
        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${title}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case 'pinterest':
                shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${title}`;
                break;
            case 'reddit':
                shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${title}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${title}%20${encodedUrl}`;
                break;
        }

        $(this).attr('href', shareUrl);
    });

    // Open share windows in popup
    $('.share-btn').click(function (e) {
        e.preventDefault();
        const shareUrl = $(this).attr('href');
        window.open(shareUrl, 'newwindow', 'width=800,height=400,left=440px,top=240px',);

        // Simulate share count increment (in a real app, you'd use API calls)
        incrementShareCount($(this).data('platform'));
    });

    // Copy URL functionality
    $('#copy-url').click(function () {
        const urlInput = $('#shareable-url');
        urlInput.select();
        document.execCommand('copy');

        $(this).text('Copied!');
        setTimeout(() => $(this).text('Copy'), 2000);
    });

    // Function to increment share count (simulated)
    function incrementShareCount(platform) {
        const countElement = $(`.share-btn[data-platform="${platform}"] .count`);
        let currentCount = parseInt(countElement.text()) || 0;
        currentCount++;
        countElement.text(currentCount);

        updateTotalShares();
    }

    // Function to update total shares display
    function updateTotalShares() {
        let total = 0;
        $('.share-btn .count').each(function () {
            total += parseInt($(this).text()) || 0;
        });
        $('#total-shares').text(total);
    }

    // Simulate initial share counts (in a real app, you'd fetch these from an API)
    function loadShareCounts() {
        const platforms = ['facebook', 'twitter', 'linkedin', 'pinterest', 'reddit', 'whatsapp'];
        platforms.forEach(platform => {
            const count = localStorage.getItem(`shares_${platform}`) || 0;
            $(`.share-btn[data-platform="${platform}"] .count`).text(count);
        });
        updateTotalShares();
    }
    loadShareCounts();
});

//Social Shared Link atozpsd // END ---

// Lightbox
    document.addEventListener('DOMContentLoaded', function () {
        const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.azlightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    const images = [];
    const captions = [];

        // Populate images and captions arrays
        galleryItems.forEach((item, index) => {
            const img = item.querySelector('.gallery-img');
    const caption = item.querySelector('.gallery-caption');

    images.push(img.src);
    captions.push({
        title: caption.querySelector('h3').textContent,
    description: caption.querySelector('p').textContent
            });

            // Add click event to each gallery item
            item.addEventListener('click', () => {
        currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
            });
        });

    // Update lightbox content
    function updateLightbox() {
        lightboxImg.src = images[currentIndex];
    lightboxImg.alt = galleryItems[currentIndex].querySelector('.gallery-img').alt;
    lightboxCaption.innerHTML = `
    <h3>${captions[currentIndex].title}</h3>
    <p>${captions[currentIndex].description}</p>
    `;
        }

    // Navigation functions
    function goToPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
        }

    function goToNext() {
        currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
        }

        // Event listeners
        lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        });

    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
            } else if (e.key === 'ArrowLeft') {
        goToPrev();
            } else if (e.key === 'ArrowRight') {
        goToNext();
            }
        });

        // Close when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
        lightbox.classList.remove('active');
            }
        });
    });
