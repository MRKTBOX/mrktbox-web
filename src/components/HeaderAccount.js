import React from 'react'
import propTypes from 'prop-types'
import { isBrowser } from 'react-device-detect'

import { HeaderMobile } from '.'
import { ButtonBackToAccount, ButtonLogout } from './buttons'
import { ButtonMobileBack, ButtonMobileNav } from './buttonsMobile'

const HeaderAccount = ({ maxWidth = '100%', title, bgColor, borderColor }) => {
  return (
    <HeaderMobile
      title={title}
      maxWidth={maxWidth}
      bgColor={bgColor}
      borderColor={borderColor}
      left={isBrowser ? <ButtonBackToAccount /> : <ButtonMobileBack />}
      right={isBrowser ? <ButtonLogout /> : <ButtonMobileNav />}
    />
  )
}

HeaderAccount.displayName = 'HeaderAccount'
HeaderAccount.propTypes = {
  maxWidth: propTypes.string,
  title: propTypes.string,
  bgColor: propTypes.string,
  borderColor: propTypes.string,
}

export default HeaderAccount
