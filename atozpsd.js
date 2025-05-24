//Render Products
$(function () {
    const $productsContainer = $('.products-container');
    const $modal = $('#productModal');
    const $modalCloseBtn = $modal.find('.modal-close');
    const $modalImage = $modal.find('.modal-image');
    const $modalTitle = $modal.find('.modal-title');
    const $modalDescription = $modal.find('.modal-description');
    const $downloadBtn = $('#downloadImageBtn');
    const $relatedList = $modal.find('.related-products-list');

    // Render products on the page
    function renderProducts() {
        $productsContainer.empty();
        productsData.forEach(product => {
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
            $productsContainer.append($card);
        });
    }

    // Open modal with product details
    function openModal(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        $modalImage.attr({
            src: product.image,
            alt: product.name
        });
        $modalTitle.text(product.name);
        $modalDescription.text(product.description);
        $downloadBtn.attr({
            href: product.image,
            download: `${product.name.replace(/\s/g, '_').toLowerCase()}.jpg`
        });

        renderRelatedProducts(product.related, product.id);

        $modal.addClass('active');
        // Focus modal for accessibility
        $modal.attr('tabindex', -1).focus();
    }

    // Render related products
    function renderRelatedProducts(relatedIds, currentProductId) {
        $relatedList.empty();
        if (!relatedIds || relatedIds.length === 0) {
            $relatedList.append('<p>No related products found.</p>');
            return;
        }
        relatedIds.forEach(id => {
            const relatedProduct = productsData.find(p => p.id === id);
            if (relatedProduct) {
                const $relCard = $(`
              <div class="related-product-card" tabindex="0" role="button" aria-pressed="false" aria-label="View details of related product ${relatedProduct.name}">
                <img class="related-product-image" src="${relatedProduct.image}" alt="${relatedProduct.name}" />
                <div class="related-product-name">${relatedProduct.name}</div>
              </div>
            `);
                $relCard.data('product-id', relatedProduct.id);
                $relatedList.append($relCard);
            }
        });
    }

    // Close modal function
    function closeModal() {
        $modal.removeClass('active');
        // Return focus to the last focused product card for accessibility
        if ($lastFocusedProduct) {
            $lastFocusedProduct.focus();
        }
    }

    // Track last focused product for returning focus
    let $lastFocusedProduct = null;

    // Event delegation for product click
    $productsContainer.on('click keypress', '.product-card', function (e) {
        if (e.type === 'click' || (e.type === 'keypress' && (e.key === 'Enter' || e.key === ' '))) {
            e.preventDefault();
            $lastFocusedProduct = $(this);
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

    // Init render of product cards
    renderProducts();
});