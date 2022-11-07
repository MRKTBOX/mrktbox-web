import propTypes from 'prop-types'
import MenuItemOverlay from './MenuItemOverlay'
import styled from '@emotion/styled'
import gfTag from '../assets/GF-01.png'
import localTag from '../assets/LOCAL-01.png'
import orgTag from '../assets/ORGANIC-01.png'
import plantTag from '../assets/PLANTBASED-01.png'

const tagMapping = {
  'Gluten-free': gfTag,
  'Organic': orgTag,
  'Plant Based': plantTag,
  'Local': localTag
}

const MenuItemImageTagsView = styled.div`
  position: relative;
  img {
    height: ${props => props.imageSize ? props.imageSize : '5rem'};
    margin-right: 1rem;
  }
`

const MenuItemTagImages = ({tags, imageSize = null}) => {

  return (
    <MenuItemImageTagsView imageSize={imageSize} >
      {tags.map(tag => (
        <img src={tagMapping[tag]}/>
      ))}
    </MenuItemImageTagsView>
  )
}

MenuItemTagImages.displayName = 'MenuItemTagImages'
MenuItemTagImages.propTypes = {
  tagUrls: propTypes.array,
}

export default MenuItemTagImages