/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['"Space Grotesk"', 'sans-serif'],
    },
    extend: {
      rotate: {
        '-20': '-20deg',
        '-90': '-90deg',
      },
      animation: {
        expand: 'expand 1s ease-in-out',
        'rotate-slow': 'rotate 18s linear infinite',
      },
      keyframes: {
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      transitionDuration: {
        2000: '2000ms',
      },
      space: {
        '-2': '-0.5rem',
        '-11': '-2.75rem',
        '-48': '-12rem',
      },
      height: {
        'tiny-menu': '3.656rem',
        'large-menu': '7.735rem',
        15: '4.688rem',
        70: '17.5rem',
        88: '22.19rem',
        suit: '41.1rem',
        'suit-mobile': '28.6rem',
      },
      maxWidth: {
        270: '16.875rem',
        400: '25rem',
      },
      minWidth: {
        xs: '18.75rem',
      },
      fontSize: {
        '2.5xl': '1.625rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '2.875rem',
        '6xl': '3.5rem',
        '7xl': '4.75rem',
        '8xl': '5.625rem',
      },
      letterSpacing: {
        extra: '0.21em',
      },
      lineHeight: {
        6: '1.313rem',
        8: '1.938rem',
        10: '2.688rem',
        11: '3.188rem',
        12: '5.938rem',
        15: '10.438rem',
      },
      screens: {
        tiny: '22.75rem',
        se: '23.5rem',
        tablet: '31.25rem',
        md: '37.5rem',
        sm: '40rem',
        lg: '64rem',
        xl: '80rem',
      },
      colors: {
        orb: 'var(--orb)',
        accent: 'var(--accent)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        quaternary: 'var(--quaternary)',
        'formal-accent': 'var(--formal-accent)',

        'tertiary-dark': 'var(--tertiary-dark)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        'primary-burned': 'var(--primary-burned)',
        'primary-dimmed': 'var(--primary-dimmed)',
        'primary-semi-dimmed': 'var(--primary-semi-dimmed)',
        'primary-background': 'var(--primary-background)',

        navbar: 'var(--navbar)',
        card: 'var(--card)',
      },
      boxShadow: {
        lg: '0 0 1rem 0 rgb(0 0 0 / 0.25)',
        button: '0 0 1.625rem rgb(0 0 0 / 1)',
        card: '0 1rem 11rem var(--card-shadow)',
        'iron-sphere':
          'inset 0 -0.5rem 1rem rgba(0, 0, 0, 0.6), inset 0 0.5rem 1rem rgba(255, 255, 255, 0.2)',
        'orb-generator':
          'inset 0 0 0.7rem rgba(255, 255, 255, 1), inset 0 0 0.2rem rgba(255, 255, 255, 1)',
      },
      dropShadow: {
        accent: '0rem 0rem 0.625rem var(--accent)',
        secondary: '0rem 0rem 0.625rem var(--secondary)',
        primary: '0rem 0rem 1.5rem var(--primary)',
        'secondary-semi-transparent':
          '0px 0px 7rem var(--secondary-semi-transparent)',
        'formal-accent': '0rem 0rem 0.625rem var(--formal-accent)',
        retro: '0 0 4rem var(--retro-shadow)',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        '4xl': '2.5rem',
        '22xl': '11rem',
      },
      backgroundImage: {
        retro:
          'linear-gradient(180deg, var(--secondary) 20.43%, var(--formal-accent) 25.48%, var(--formal-accent) 41.4%, var(--retro-1) 46.3%, var(--retro-2) 61.69%, var(--primary) 77.42%)',
        metallic:
          'linear-gradient(180deg, var(--metallic-1) 0%, var(--metallic-2) 15.1%, var(--metallic-3) 34.9%, var(--metallic-4) 50%, var(--metallic-5) 66.15%, var(--metallic-6) 100%) ',
      },
      strokeWidth: {
        1.5: 1.5,
        2.5: 2.5,
        4: 4,
      },
      margin: {
        136: '34rem',
        116: '29rem',
        84: '21rem',
        '-4': '-1rem',
        '-10': '-2.5rem',
        '-12': '-3rem',
        '-16': '-4rem',
        '-18': '-4.5rem',
        '-24': '-6rem',
        '-80': '-20rem',
        '-96': '-24rem',
      },
      padding: {
        25: '6.125rem',
      },
      inset: {
        '-2': '-0.5rem',
        '-6': '-1.5rem',
        '-9': '-2.25rem',
        '-11': '-2.75rem',
        '-20': '-5rem',
        '-28': '-7rem',
        '-36': '-9rem',
        '-44': '-11rem',
        '-60': '-15rem',
        '-96': '-24rem',
        '-full-125': '-125%',
        '-full-180': '-180%',
        '-1/5': '-20%',
        '1/5': '20%',
        58.5: '3.66rem',
        76: '4.75rem',
      },
      scale: {
        65: '0.65',
        175: '1.75',
      },
      zIndex: {
        '-10': '-10',
      },
      content: {
        retro: 'attr(data-text)',
      },
      translate: {
        '-0.5': '-0.25rem',
        '-7': '-1.75rem',
      },
      transitionProperty: {
        letters: 'transform 0.32s ease, box-shadow 0.32s ease',
      },
      willChange: {
        opacity: 'opacity',
      },
    },
  },
}
