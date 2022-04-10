import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isBrowser } from 'react-device-detect'
import styled from '@emotion/styled'
import {
  selectAnnouncementsPage,
  fetchAnnouncementPage,
} from '@open-tender/redux'
import BackgroundImage from './BackgroundImage'
import BackgroundContent from './BackgroundContent'

const makeImageUrl = (images, isBrowser) => {
  return images.find(
    (i) => i.type === (isBrowser ? 'FEATURED_IMAGE' : 'SECONDARY_IMAGE')
  ).url
}

const makeSlides = (items) => {
  if (!items || !items.length) return null
  return items.map((i) => ({
    ...i,
    imageUrl: makeImageUrl(i.images, isBrowser),
  }))
}

const AnnoucementsView = styled.div`
  label: AnnoucementsView;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Annoucement = styled.div`
  label: Annoucement;

  display: flex;
  width: 100%;
  height: 24rem;
  border-radius: ${(props) => props.theme.border.radius};
  overflow: hidden;
  height: 48rem;
  margin: 0 0 ${(props) => props.theme.layout.padding};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 24rem;
    margin: 0 0 ${(props) => props.theme.layout.paddingMobile};
  }

  // &:last-of-type {
  //   margin: 0;
  // }
`

const Annoucements = () => {
  const dispatch = useDispatch()
  const announcements = useSelector(selectAnnouncementsPage('HOME'))
  const { entities, loading, error } = announcements || {}
  const isLoading = loading === 'pending'
  const slides = isLoading || error ? null : makeSlides(entities)

  useEffect(() => {
    dispatch(fetchAnnouncementPage('HOME'))
  }, [dispatch])

  if (!slides) return null

  return (
    <AnnoucementsView>
      {slides.map((slide) => {
        return (
          <Annoucement key={slide.imageUrl}>
            <BackgroundImage {...slide}>
              <BackgroundContent {...slide} />
            </BackgroundImage>
          </Annoucement>
        )
      })}
    </AnnoucementsView>
  )
}

Annoucements.displayName = 'Annoucements'
export default Annoucements
