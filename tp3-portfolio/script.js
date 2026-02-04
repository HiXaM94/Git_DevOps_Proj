// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    
    // Feature pour une future PR : Ajouter l'année dynamique
    const footerText = document.getElementById('footer-text');
    const year = new Date().getFullYear();
    // footerText.innerHTML = `&copy; ${year} DevOps Student. All rights reserved.`;
});

// Fonction simple à tester (pour le CI)
function add(a, b) {
    return a + b;
}

// Export pour les tests (Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add };
}
