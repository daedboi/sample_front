import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'contexts/Localization'
import { useCakeBusdPrice } from 'hooks/useBUSDPrice'
import { DEFAULT_META, getCustomMeta } from 'config/constants/meta'
import Container from './Container'

const Page = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 16px;

  .banner {
    width: 100%;
    border-radius: 13px;
    margin: 20px 0px;
    margin-bottom: 50px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

export const PageMeta: React.FC<{ symbol?: string }> = ({ symbol }) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const cakePriceUsd = useCakeBusdPrice()
  const cakePriceUsdDisplay = cakePriceUsd ? `$${cakePriceUsd.toFixed(3)}` : '...'

  const pageMeta = getCustomMeta(pathname, t) || {}
  const { title, description, image } = { ...DEFAULT_META, ...pageMeta }
  let pageTitle = cakePriceUsdDisplay ? [title, cakePriceUsdDisplay].join(' - ') : title
  if (symbol) {
    pageTitle = [symbol, title].join(' - ')
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  )
}

export default Page
