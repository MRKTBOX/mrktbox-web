import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { resetOrder } from '../slices/orderSlice'
import { selectBrand } from '../slices/configSlice'
import { Button } from 'open-tender'

const HeaderLogo = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const brand = useSelector(selectBrand)

  const handleLogo = (evt) => {
    evt.preventDefault()
    dispatch(resetOrder())
    history.push(`/`)
    evt.target.blur()
  }

  return (
    <Button onClick={handleLogo}>
      <img src={brand.logo} className="logo" alt="logo" />
    </Button>
  )
}

HeaderLogo.displayName = 'HeaderLogo'

export default HeaderLogo
