import React from 'react'

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/Icons'

import styles from './Pagination.module.css'

type PaginationProps = {
  currentPage: number
  maxPage: number
  prevPage: () => void
  nextPage: () => void
}

const Pagination = ({ currentPage, maxPage, prevPage, nextPage }: PaginationProps) => {
  return (
    <span className={styles.container}>
      <button type="button" className={styles.prevButton} onClick={prevPage} disabled={currentPage === 0}>
        <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button" className={styles.nextButton} onClick={nextPage} disabled={currentPage === maxPage}>
        <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </span>
  )
}

export default Pagination
