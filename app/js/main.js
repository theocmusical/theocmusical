!(function() {
    var fixHeroHeight = function() {
        var heroContainer = document.querySelector('.hero');
        var heroImage = document.querySelector('.hero__image');
        var setHeroHeight = function() {
            heroContainer.style.height = heroImage.clientHeight + 'px';
        };

        setHeroHeight();

        window.addEventListener('resize', function() {
            window.requestAnimationFrame(setHeroHeight);
        }, true);
    };

    var parallaxHero = function() {
        var heroImage = document.querySelector('.hero__image');
        window.addEventListener('scroll', function() {
            window.requestAnimationFrame(function() {
                var y = window.scrollY;
                heroImage.style = 'transform: translate3d(0px, ' + (y / 2) + 'px, 0)';
            });
        });
    };

    fixHeroHeight();
    parallaxHero();
})();
