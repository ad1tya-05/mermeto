
document.querySelectorAll('.tab-btn').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach((tab) => {
    tab.classList.remove('active-tab');
    });
    tabBtn.classList.add('active-tab');
   
    const targetTab = tabBtn.dataset.tab;
    document.querySelectorAll('.product-card').forEach((productCard) => {
    if (productCard.dataset.tab === targetTab) {
    productCard.style.display = 'block';
    calculateDiscount(productCard);
    } else {
    productCard.style.display = 'none';
    }
    });
    });
   });
   
   function calculateDiscount(productCard) {
    const price = parseFloat(productCard.querySelector('.price').innerText.replace('Rs', ''));
    const compareAtPrice = parseFloat(productCard.querySelector('.compare-at-price').innerText.replace('Rs', ''));
   
    if (compareAtPrice > price) {
    const discountPercentage = ((compareAtPrice - price) / compareAtPrice) * 100;
    productCard.querySelector('.badge').innerText = `Discount: ${discountPercentage.toFixed(0)}%`;
    }
   }
   
   document.querySelectorAll('.product-card').forEach((productCard) => {
    calculateDiscount(productCard);
   });
