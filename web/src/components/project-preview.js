import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import { format, distanceInWords, differenceInDays } from 'date-fns'

import styles from './project-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function ProjectPreview(props) {
  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.publishedAt}>
        {differenceInDays(new Date(props.publishedAt), new Date()) > 3
          ? distanceInWords(new Date(props.publishedAt), new Date())
          : format(new Date(props.publishedAt), 'MMMM Do YYYY')}
      </div>
      <h3 className="project-preview-title">{props.title}</h3>

    </Link>
  )
}

export default ProjectPreview
