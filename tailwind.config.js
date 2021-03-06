module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-header-image': "url('/assets/mobile/image-header.jpg')",
        'desktop-header-image': "url('/assets/desktop/image-header.jpg')",
        'mobile-product-image__graphic-design':
          "url('/assets/mobile/image-graphic-design.jpg')",
        'mobile-product-image__photography':
          "url('/assets/mobile/image-photography.jpg')",
        'desktop-product-image__graphic-design':
          "url('/assets/desktop/image-graphic-design.jpg')",
        'desktop-product-image__photography':
          "url('/assets/desktop/image-photography.jpg')",
        'nav-clip':
          'clip-path: polygon(85% 13%, 100% 0, 100% 100%, 0 100%, 0 13%)',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        //> PRIMARIES
        'soft-red': 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        // (graphic design text)
        'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        // (photography text)
        'dark-blue': 'hsl(198, 62%, 26%)',
        // (footer)
        'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
        'light-mint': '#90D4C6',
        'mid-mint': '#458D7E',
        'dark-mint': '#2C7566',
        //> Nuetrals
        'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
        'pure-white': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
