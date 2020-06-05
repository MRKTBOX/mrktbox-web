import React from 'react'
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  updateCustomerCreditCard,
  removeCustomerCreditCard,
} from '../slices/customerSlice'
import SectionRow from './SectionRow'
import { Button } from '../packages'
import { cardIcons } from '../packages/utils/cards'

const CreditCards = ({ creditCards, token, isLoading }) => {
  const dispatch = useDispatch()

  const handleDefault = (evt, creditCard) => {
    evt.preventDefault()
    const cardId = creditCard.customer_card_id
    const data = { is_default: true }
    dispatch(updateCustomerCreditCard({ token, cardId, data }))
    evt.target.blur()
  }

  const handleDelete = (evt, creditCard) => {
    evt.preventDefault()
    const cardId = creditCard.customer_card_id
    dispatch(removeCustomerCreditCard({ token, cardId }))
    evt.target.blur()
  }

  return (
    <div className="section__content bg-color border-radius">
      <div className="section__rows">
        {creditCards.map((creditCard) => (
          <SectionRow
            key={creditCard.customer_card_id}
            title={
              <div className="cards__card__image">
                <img
                  src={cardIcons[creditCard.card_type]}
                  alt={creditCard.card_type_name}
                />
              </div>
            }
          >
            <div className="section__row__container">
              <div className="section__row__container__content">
                {creditCard.is_default && (
                  <p className="preface font-size-x-small secondary-color">
                    Default
                  </p>
                )}
                <p>
                  {creditCard.card_type_name} ending in {creditCard.last4}
                </p>
                {/* <p>
                  <span className="tag-sibling">
                    {creditCard.card_type_name} ending in {creditCard.last4}
                  </span>
                  {creditCard.is_default && (
                    <Tag text="Default" icon="CheckCircle" />
                  )}
                </p> */}
                <p className="font-size-small secondary-color">
                  {creditCard.masked}
                </p>
                <p className="font-size-small secondary-color">
                  <Button
                    text="make default"
                    classes="btn-link"
                    onClick={(evt) => handleDefault(evt, creditCard)}
                    disabled={creditCard.is_default || isLoading}
                  />
                  <span className="btn-link-separator">|</span>
                  <Button
                    text="remove"
                    classes="btn-link"
                    onClick={(evt) => handleDelete(evt, creditCard)}
                    disabled={isLoading}
                  />
                </p>
              </div>
            </div>
          </SectionRow>
        ))}
      </div>
    </div>
  )
}

CreditCards.displayName = 'CreditCards'
CreditCards.prototypes = {
  creditCards: propTypes.array,
  token: propTypes.string,
  isLoading: propTypes.boolean,
}
export default CreditCards
