import { LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import { LinkStyle } from './style';

export const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <LinkStyle active={!!match ? 1 : 0} to={to} {...props}>
        {children}
      </LinkStyle>
    </div>
  );
};
