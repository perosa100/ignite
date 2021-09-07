import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type ActiveLinkProps = {
  children: React.ReactElement;
  activeClassName: string;
} & LinkProps;

export default function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : '';

  return <Link {...rest}>{React.cloneElement(children, { className })}</Link>;
}
