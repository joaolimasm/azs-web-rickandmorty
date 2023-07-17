import { ReactNode } from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface HeadingInnerProps {
  size?: number;
  className?: string;
  children?: ReactNode;
}

const HeadingInner = ({ size = 1, className, children }: HeadingInnerProps) => {
  const headings: Record<number, ReactNode> = {
    1: <h1 className={className}>{children}</h1>,
    2: <h2 className={className}>{children}</h2>,
    3: <h3 className={className}>{children}</h3>,
    4: <h4 className={className}>{children}</h4>,
    5: <h5 className={className}>{children}</h5>,
    6: <h6 className={className}>{children}</h6>,
  };

  return headings[size];
};

export const Heading = styled(HeadingInner as AnyStyledComponent)`
  font-weight: ${({ size }) => (size === 6 ? "normal" : "bold")};
  font-size: ${(props) => {
    const size = props.size ?? 1;
    const sizes: Record<number, number> = {
      1: 45 / 16,
      2: 38 / 16,
      3: 30 / 16,
      4: 25 / 16,
      5: 20 / 16,
      6: 20 / 16,
    };

    return `${sizes[size]}rem`;
  }};
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 1rem;
`;
