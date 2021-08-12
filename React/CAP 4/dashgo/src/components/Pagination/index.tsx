import { Box, Stack } from '@chakra-ui/react'
import { last } from 'lodash'
import React from 'react'

import PaginationItem from './PaginationItem'

interface PaginationProps {
  totalCountOfRegister: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}
// filhos ao meio
const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

const Pagination = ({
  totalCountOfRegister,
  currentPage = 1,
  onPageChange,
  registerPerPage = 10
}: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfRegister / registerPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {/* //first page */}
        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return <PaginationItem key={page} number={page} />
          })}

        <PaginationItem number={currentPage} isCurrent />

        {/* //last  page */}
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem key={page} number={page} />
          })}
      </Stack>
    </Stack>
  )
}

export default Pagination
