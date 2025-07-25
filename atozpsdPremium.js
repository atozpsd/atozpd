//Render Products
$(function () {
    const $fileContainer = $('.pmnt-btn-cotainer');
    const $modal = $('#pemntModal');
    const $modalCloseBtn = $modal.find('.modal-close');
    const $modalImage = $modal.find('.pack-thumbnail');
    const $modalTitle = $modal.find('.pack-title');
    const $modalDescription = $modal.find('.pack-description');
    const $cnctWhatsupBtn = $('#cnctWhatsupImageBtn');
    const $relatedList = $modal.find('.related-products-list');
   
    let premData;
    premData = atozpsPremdata;
  
    // Render products on the page
    function renderProducts() {
        $fileContainer.empty();
        premData.forEach(product => {
            const $card = $(`
            <div class="pack-card" tabindex="0" role="button" aria-pressed="false" aria-label="View details of ${product.packName}">           
              <div alt="${product.packName}"> Buy this pack </div>              
            </div>
          `);
            // Store product ID in DOM element data for easy lookup
            $card.data('pack-id', product.id);
            $fileContainer.append($card);
        });
    }

    // Open modal with product details
    function openModal(productId) {
        const product = premData.find(p => p.id === productId);
        if (!product) return;

        $modalImage.attr({
            src: product.image,
            alt: product.packName
        });
        $modalTitle.text(product.packName);
        $modalDescription.text(product.description);
       
        //$cnctWhatsupBtn.click(function () {
        //    let dlnk = product.cnctWhatsup;
        //    let windOpn = window.open(dlnk, "_blank", "width=1020px,height=400px,left=440px,top=540px");
        //    windOpn
          
        //});

        $cnctWhatsupBtn.attr({
            href: product.cnctWhatsup,
            cnctWhatsup: `${product.packName.replace(/\s/g, '_').toLowerCase()}.jpg`
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
            const relatedFile = premData.find(p => p.id === id);
            if (relatedFile) {
                const $relCard = $(`
              <div class="related-pack-card" tabindex="0" role="button" aria-pressed="false" aria-label="You might also like these ${relatedFile.packName}">
                <img class="related-product-image" src="${relatedFile.image}" alt="${relatedFile.packName}" />
                <div class="related-product-packName">${relatedFile.packName}</div>
              </div>
            `);
                $relCard.data('pack-id', relatedFile.id);
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
    $fileContainer.on('click keypress', '.pack-card', function (e) {
        if (e.type === 'click' || (e.type === 'keypress' && (e.key === 'Enter' || e.key === ' '))) {
            e.preventDefault();
            $lastFocusedFile = $(this);
            const productId = $(this).data('pack-id');
            openModal(productId);
        }
    });

    // Related product click
    $relatedList.on('click keypress', '.related-pack-card', function (e) {
        if (e.type === 'click' || (e.type === 'keypress' && (e.key === 'Enter' || e.key === ' '))) {
            e.preventDefault();
            const productId = $(this).data('pack-id');
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
