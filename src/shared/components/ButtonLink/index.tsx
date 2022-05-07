import React from 'react'
import Link from 'next/link'
import { Button, ThemeUIStyleObject } from 'theme-ui'

type ButtonLinkProps = {
  children: React.ReactNode
  href: string
  sx?: ThemeUIStyleObject
  variant?: string
}

const ButtonLink = ({ children, sx, variant, href = '#' }: ButtonLinkProps) => {
  return (
    <>
      <Link href={href}>
        <Button
          variant={variant}
          sx={{
            color: '#fff',
            width: '100%',
            padding: '0.5rem',
            fontSize: '1.2rem',
            fontWeight: '700',
            textDecoration: 'none',
            borderRadius: 20,
            textAlign: 'center',
            fontFamily: 'Open Sans',
            cursor: 'pointer',
            ...sx,
          }}
        >
          {children}
        </Button>
      </Link>
    </>
  )
}

export default ButtonLink
