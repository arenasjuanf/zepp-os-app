import { gettext } from 'i18n'


Page({
  build: () => {
    return Button({
      label: 'Delete',
      style: {
        fontSize: '12px',
        borderRadius: '30px',
        background: '#D85E33',
        color: 'white'
      },
      onClick: () => {
        // ...
      }
    })

  },
  onInit: () => {
    console.log('*******onInit ');
  },
  build() {
    console.log(gettext('example'))
  }
})
