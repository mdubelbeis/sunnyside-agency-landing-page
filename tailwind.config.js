module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-header-image':
          "url('./src/images/mobile/image-header.jpg')",
        'mobile-product-image__graphic-design':
          "url('./src/images/mobile/image-graphic-design.jpg')",
        'mobile-product-image__photography':
          "url('./src/images/mobile/image-photography.jpg')",
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
