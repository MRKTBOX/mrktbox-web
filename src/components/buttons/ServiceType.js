import React from 'react'
import propTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectOrder } from '@open-tender/redux'
import { makeServiceTypeName } from '@open-tender/js'

import { openModal, selectOutpostName } from '../../slices'
import iconMap from '../iconMap'
import { ButtonBoth } from '.'

const ServiceType = ({ style = null, useButton = false }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { orderType, serviceType, isOutpost, prepType } =
    useSelector(selectOrder)
  const outpostName = useSelector(selectOutpostName)
  const isCatering = orderType === 'CATERING'
  const serviceTypeName = makeServiceTypeName(
    serviceType,
    isCatering,
    isOutpost,
    outpostName
  )
  const name = prepType === 'TAKE_OUT' ? 'Take Out' : serviceTypeName
  const icon =
    iconMap[
      isCatering
        ? 'Calendar'
        : serviceType === 'DELIVERY'
        ? 'Truck'
        : serviceType === 'WALKIN' && prepType !== 'TAKE_OUT'
        ? 'Coffee'
        : 'ShoppingBag'
    ]

  if (!serviceType) return null

  const handleServiceType = () => {
    dispatch(openModal({ type: 'orderType' }))
  }

  const handlePrepType = () => {
    dispatch(openModal({ type: 'prepType' }))
  }

  const handleCatering = () => {
    history.push(`/catering-address`)
  }

  const change =
    prepType !== null
      ? handlePrepType
      : isCatering
      ? handleCatering
      : handleServiceType

  return (
    <ButtonBoth
      text={name}
      icon={icon}
      onClick={change}
      style={style}
      useButton={useButton}
    />
  )
}

ServiceType.displayName = 'ServiceType'
ServiceType.propTypes = {
  style: propTypes.object,
  useButton: propTypes.bool,
}

export default ServiceType
