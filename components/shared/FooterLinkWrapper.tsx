// components/LinkWrapper.tsx
import Link from 'next/link';

type LinkWrapperProps = {
  href: string;
  type: 'phone' | 'email' | 'map' | 'social' | 'internal';
  children: React.ReactNode;
  className?: string;
};

export const LinkWrapper = ({ href, type, children, className }: LinkWrapperProps) => {
  const commonProps = {
    className,
    'aria-label': type === 'phone' ? `Call ${children}` : 
                  type === 'email' ? `Email ${children}` : 
                  type === 'map' ? 'View on Google Maps' : 
                  undefined
  };

  switch(type) {
    case 'internal':
      return <Link href={href} {...commonProps}>{children}</Link>;
      
    case 'social':
    case 'map':
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
        //   aria-label={`${children} (opens in new tab)`}
          {...commonProps}
        >
          {children}
        </a>
      );
      
    case 'phone':
    case 'email':
      return <a href={href} {...commonProps}>{children}</a>;
      
    default:
      return <a href={href} {...commonProps}>{children}</a>;
  }
};