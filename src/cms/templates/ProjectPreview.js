import React from 'react'
import { ProjectTemplate } from '../../templates/project-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default AboutPagePreview