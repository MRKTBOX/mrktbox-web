import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import iconMap from './iconMap'
import { PageSectionHeader } from '.'

const PageSectionView = styled('div')`
  margin: ${(props) => props.theme.layout.margin} 0;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: ${(props) => props.theme.layout.marginMobile} 0;
  }

  &:first-of-type {
    margin-top: 0;
  }
`

const PageSectionLink = styled('div')`
  text-align: center;
  margin: ${(props) => props.theme.layout.padding} 0 0;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: ${(props) => props.theme.layout.paddingMobile} 0 0;
  }

  p {
    display: block;
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: ${(props) => props.theme.fonts.sizes.small};
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span {
      display: block;
    }

    span + span {
      width: 1.2rem;
      height: 1.2rem;
      margin: 0 0 0 0.5rem;
    }
  }
`

const PageSection = ({ title, subtitle, to, style = null, children }) => {
  return (
    <PageSectionView style={style}>
      <PageSectionHeader title={title} subtitle={subtitle} />
      {children}
      {to && (
        <PageSectionLink>
          {to && (
            <p>
              <Link to={to}>
                <span>View all</span>
                <span>{iconMap.ArrowRight}</span>
              </Link>
            </p>
          )}
        </PageSectionLink>
      )}
    </PageSectionView>
  )
}

PageSection.displayName = 'PageHeader'
PageSection.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
}

export default PageSection
