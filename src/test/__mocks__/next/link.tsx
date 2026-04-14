import * as React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function Link({ href, children, ...rest }: LinkProps) {
  return <a href={href} {...rest}>{children}</a>;
}
