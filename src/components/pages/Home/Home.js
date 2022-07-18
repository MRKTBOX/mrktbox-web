import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isBrowser } from 'react-device-detect'
import { Helmet } from 'react-helmet'
import { useTheme } from '@emotion/react'
import {
  fetchAnnouncementPage,
  selectAnnouncementsPage,
} from '@open-tender/redux'
import { closeModal, selectBrand, selectContentSection } from '../../../slices'
import { BackgroundContent, Content, HeaderSite, Main, PageIntro } from '../..'
import PageHero from '../../PageHero'

const Home = () => {
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const brand = useSelector(selectBrand)
  const { background, mobile, title, subtitle, content } = useSelector(
    selectContentSection('home')
  )
  const hasContent = !!(content && content.length)
  const announcements = useSelector(selectAnnouncementsPage('HOME'))

  useEffect(() => {
    dispatch(closeModal())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchAnnouncementPage('HOME'))
  }, [dispatch])

  return (
    <>
      <Helmet>
        <title>{brand.title}</title>
      </Helmet>
      <Content>
        <HeaderSite />
        <Main style={{ paddingTop: '0' }}>
          <PageHero
            announcements={announcements}
            imageUrl={isBrowser ? background : mobile}
          >
            <BackgroundContent
              title={title}
              subtitle={subtitle}
              title_color={colors.light}
              subtitle_color={colors.light}
              vertical="BOTTOM"
              horizontal="LEFT"
            />
          </PageHero>
          {hasContent && <PageIntro content={content} />}
        </Main>
      </Content>
    </>
  )
}

Home.displayName = 'Home'
export default Home
