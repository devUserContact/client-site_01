export interface ProjectObject {
  title: string
  description: string
  trackList: string[]
  imageURL: string | string[]
  releaseDate: string | string[]
  link: StreamingLink
}
export interface StreamingLink {
  audiomack: string
  bandcamp: string
  soundcloud: string
  youtube: string
}
export const Projects: ProjectObject[] = [
  {
    title: 'Ghost Out West',
    description: '',
    trackList: ['', ''],
    imageURL: '',
    releaseDate: '',
    link: {
      audiomack: '',
      bandcamp: '',
      soundcloud: '',
      youtube: '',
    },
  },
]
