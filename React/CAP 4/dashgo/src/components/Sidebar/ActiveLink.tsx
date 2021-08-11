import React from 'react'
import Link, { LinkProps } from 'next/link'
import { cloneElement } from 'react'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement
  shouldMatchExactHref?: boolean
}

export default function ActiveLink({
  shouldMatchExactHref = false,
  children,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()
  let isActive = false

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }
  if (
    (!shouldMatchExactHref && asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as))
  ) {
    isActive = true
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}
