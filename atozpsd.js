//Render Products
$(function () {
    const $fileContainer = $('.products-container');
    const $modal = $('#productModal');
    const $modalCloseBtn = $modal.find('.modal-close');
    const $modalImage = $modal.find('.modal-image');
    const $modalTitle = $modal.find('.modal-title');
    const $modalDescription = $modal.find('.modal-description');
    const $downloadBtn = $('#downloadImageBtn');
    const $relatedList = $modal.find('.related-products-list');
   
    let fileData;
    fileData = atozpsdata;
  
    // Render products on the page
    function renderProducts() {
        $fileContainer.empty();
        fileData.forEach(product => {
            const $card = $(`
            <div class="product-card" tabindex="0" role="button" aria-pressed="false" aria-label="View details of ${product.name}">
            <div class=p-overlay></div>
              <img src="${product.image}" alt="${product.name}" class="product-image" />
              <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description.substring(0, 60)}...</p>
              </div>
            </div>
          `);
            // Store product ID in DOM element data for easy lookup
            $card.data('product-id', product.id);
            $fileContainer.append($card);
        });
    }

    // Open modal with product details
    function openModal(productId) {
        const product = fileData.find(p => p.id === productId);
        if (!product) return;

        $modalImage.attr({
            src: product.image,
            alt: product.name
        });
        $modalTitle.text(product.name);
        $modalDescription.text(product.description);
        $downloadBtn.attr({
            href: product.download,
            download: `${product.name.replace(/\s/g, '_').toLowerCase()}.jpg`
        });

        renderRelatedFiles(product.related, product.id);

        $modal.addClass('active');
        // Focus modal for accessibility
        $modal.attr('tabindex', -1).focus();
    }
   
    // Render related products
    function renderRelatedFiles(relatedIds, currentProductId) {
        $relatedList.empty();
        if (!relatedIds || relatedIds.length === 0) {
            $relatedList.append('<p>No related products found.</p>');
            return;
        }
        relatedIds.forEach(id => {
            const relatedFile = fileData.find(p => p.id === id);
            if (relatedFile) {
                const $relCard = $(`
              <div class="related-product-card" tabindex="0" role="button" aria-pressed="false" aria-label="You might also like these ${relatedFile.name}">
                <img class="related-product-image" src="${relatedFile.image}" alt="${relatedFile.name}" />
                <div class="related-product-name">${relatedFile.name}</div>
              </div>
            `);
                $relCard.data('product-id', relatedFile.id);
                $relatedList.append($relCard);
            }
          
        });
    }
   
    // Close modal function
    function closeModal() {
        $modal.removeClass('active');
        if ($lastFocusedFile) {
            $lastFocusedFile.focus();
        }
    }

    // Track last focused product for returning focus
    let $lastFocusedFile = null;

    // Event delegation for product click
    $fileContainer.on('click keypress', '.product-card', function (e) {
        if (e.type === 'click' || (e.type === 'keypress' && (e.key === 'Enter' || e.key === ' '))) {
            e.preventDefault();
            $lastFocusedFile = $(this);
            const productId = $(this).data('product-id');
            openModal(productId);
        }
    });

    // Related product click
    $relatedList.on('click keypress', '.related-product-card', function (e) {
        if (e.type === 'click' || (e.type === 'keypress' && (e.key === 'Enter' || e.key === ' '))) {
            e.preventDefault();
            const productId = $(this).data('product-id');
            openModal(productId);
        }
    });

    // Close modal events
    $modalCloseBtn.on('click', closeModal);
    $modal.on('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });
    $(document).on('keydown', function (e) {
        if (e.key === "Escape" && $modal.hasClass('active')) {
            closeModal();
        }
    });

    renderProducts();
});