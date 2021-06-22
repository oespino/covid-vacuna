import { useTranslate } from 'hooks/useTranslate'
import { useEffect, useState } from 'react'
import styles from 'styles/Share.module.css'
import { useRouter } from 'next/router'

const twitterLogo = (
  <svg
    viewBox='0 0 612 612' width='24' dangerouslySetInnerHTML={{
      __html: `<path
  d='M612 116.258a250.714 250.714.0 01-72.088 19.772c25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334.0-125.551 56.217-125.551 125.513.0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101.0 43.559 22.181 81.993 55.835 104.479a125.556 125.556.0 01-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107.0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134.0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948.0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z'
  fill='#1da1f2'/>`
    }}
  />
)

export default function Share () {
  const [params, setParams] = useState('')
  const translate = useTranslate()
  const { locale } = useRouter()

  useEffect(() => {
    const params = new URLSearchParams()
    params.append('url', window.location.href)
    params.append('text', translate.share.textParamUrl)

    setParams(params.toString())
  }, [locale])

  return (
    <div className={styles.share}>
      <a
        href={`https://twitter.com/share?${params}`}
        rel='nofollow noopener noreferrer'
        target='_blank'
        title={translate.share.titleAnchor}
      >
        <span>{translate.share.textoButton}</span>
        {twitterLogo}
      </a>
    </div>
  )
}
