import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, RefreshIcon, AutoRenewIcon } from 'trinityhelper'

const NoFeeTag = () => (
  <Tag variant="success" outline startIcon={<VerifiedIcon />}>
    No Fees
  </Tag>
)

const CoreTag = (props) => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon color="secondary" />} {...props}>
    Morpheus
  </Tag>
)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon color="secondary" />} {...props}>
    Community
  </Tag>
)

const AvaxTag = (props) => (
  <Tag variant="avalanche" outline startIcon={<CommunityIcon color="secondary" />} {...props}>
    Avalanche
  </Tag>
)

const SpiritTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<VerifiedIcon color="secondary" />} {...props}>
    Morpheus
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
)

const ManualPoolTag = (props) => (
  <Tag variant="secondary" outline startIcon={<RefreshIcon width="18px" color="secondary" mr="4px" />} {...props}>
    Manual
  </Tag>
)

const CompoundingPoolTag = (props) => (
  <Tag variant="success" outline startIcon={<AutoRenewIcon width="18px" color="success" mr="4px" />} {...props}>
    Auto
  </Tag>
)

export { CoreTag, CommunityTag, AvaxTag, DualTag, CompoundingPoolTag, ManualPoolTag, NoFeeTag, SpiritTag }
