// Wait for page to fully load
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    
    // Get elements
    const closedBook = document.getElementById('closedBook');
    const openBook = document.getElementById('openBook');
    const openBookBtn = document.getElementById('openBookBtn');
    const hearts = document.querySelectorAll('.heart');
    const shareBtn = document.getElementById('shareBtn');
  
    console.log('Elements:', {closedBook, openBook, openBookBtn});
  
    // Click button to open book
    openBookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Button clicked!');
      
      // Hide closed book and button
      closedBook.style.display = 'none';
      openBookBtn.style.display = 'none';
      
      // Show open book
      openBook.style.display = 'block';
      
      // Trigger heart animations after a short delay
      setTimeout(() => {
        hearts.forEach(heart => {
          heart.classList.add('animate');
        });
        
        // Show the text inputs
        document.querySelectorAll('.floating-heart-input').forEach(input => {
          input.classList.add('show');
        });
        
        // Show share button after hearts finish animating
        setTimeout(() => {
          shareBtn.style.display = 'inline-block';
          resetBtn.style.display = 'inline-block'; 
        }, 1500);
  
    // Share button functionality
    shareBtn.addEventListener('click', () => {
      const coverTo = document.getElementById('coverTo').value;
      const coverFrom = document.getElementById('coverFrom').value;
      
      const heart1 = document.getElementById('heartInput1').value;
      const heart2 = document.getElementById('heartInput2').value;
      const heart3 = document.getElementById('heartInput3').value;
      const heart4 = document.getElementById('heartInput4').value;
      const heart5 = document.getElementById('heartInput5').value;
      const heart6 = document.getElementById('heartInput6').value;
      
      const params = new URLSearchParams({
        to: coverTo,
        from: coverFrom,
        h1: heart1,
        h2: heart2,
        h3: heart3,
        h4: heart4,
        h5: heart5,
        h6: heart6
      });
      
      const shareUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
      
      navigator.clipboard.writeText(shareUrl).then(() => {
        shareBtn.textContent = 'Link Copied! ✓';
        setTimeout(() => {
          shareBtn.textContent = 'Create & Share Link';
        }, 2000);
      });
    });
  });
  // Load shared card data from URL
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    
    // Check if there are parameters in the URL
    if (params.has('to')) {
      // Fill in the cover fields
      document.getElementById('coverTo').value = params.get('to') || '';
      document.getElementById('coverFrom').value = params.get('from') || '';
      
      // Fill in the heart messages
      document.getElementById('heartInput1').value = params.get('h1') || 'BE MINE';
      document.getElementById('heartInput2').value = params.get('h2') || 'XOXO';
      document.getElementById('heartInput3').value = params.get('h3') || 'LOVE U';
      document.getElementById('heartInput4').value = params.get('h4') || 'CUTIE';
      document.getElementById('heartInput5').value = params.get('h5') || 'HUG ME';
      document.getElementById('heartInput6').value = params.get('h6') || 'SWEET';
    }
  });
  // Reset button functionality
const resetBtn = document.getElementById('resetBtn');

// Show reset button when share button appears
// Update the existing openBookBtn click handler to also show resetBtn:
// Find this line in your code:
// shareBtn.style.display = 'block';
// And add right after it:
// resetBtn.style.display = 'inline-block';

resetBtn.addEventListener('click', () => {
  // Clear URL parameters
  window.history.pushState({}, '', window.location.pathname);
  
  // Reload the page to start fresh
  window.location.reload();
});