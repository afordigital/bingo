import { defineConfig, presetIcons, presetWebFonts, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      customBgLight: '#2455c0',
      customBgDark: '#0b142c',
      customRed: '#9e1c23',
      customBrown: '#54090d',
      customWhite: '#eeeeee'
    }
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {}
    }),
    presetIcons({
      cdn: 'https://esm.sh/',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ]
})
