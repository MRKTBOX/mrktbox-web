import styled from '@emotion/styled'
import propTypes from 'prop-types'
import { Heading } from '@open-tender/components'

const AccountSectionTitleView = styled.div`
  width: 100%;
  margin: 0 0 1.25rem;
  text-align: left;
  font-size: ${(props) => props.theme.fonts.sizes.h4};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.fonts.sizes.main};
  }

  p {
    width: 100%;
  }
`

const AccountSectionTitle = ({ title }) => (
  <AccountSectionTitleView>
    <Heading as="p">{title}</Heading>
  </AccountSectionTitleView>
)

AccountSectionTitle.displayName = 'AccountSectionTitle'
AccountSectionTitle.propTypes = {
  title: propTypes.string,
}

export default AccountSectionTitle
