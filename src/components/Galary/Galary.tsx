import s from './Gallery.module.css'

import image from './image.webp'

export const Gallery = () => {
  return (
    <div className={s.wrapper}>
      <img alt={'текст для продвижения'} src={image} />
      <img alt={'текст для продвижения'} src={image} />
      <img alt={'текст для продвижения'} src={image} />
      <img alt={'текст для продвижения'} src={image} />
      <img alt={'текст для продвижения'} src={image} />
    </div>
  )
}
