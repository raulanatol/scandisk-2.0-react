import React, { FC } from 'react';
import styled from "@emotion/styled";
import { Colors, Fonts } from "../Theme";

const Link = styled.a`
  background: ${Colors.DARK_GRAY};
  border: 0;
  font-family: ${Fonts.DEFAULT};
  font-size: 1rem;
  color: ${Colors.GRAY};
  outline: 0;
  padding: 2px;
  margin-right: 1em;
  box-shadow: 10px 8px 0 black;
  text-decoration: none;

  &:active {
    //color: ${Colors.HIGHLIGHT};
    position: relative;
    left: 10px;
    top: 8px;
    box-shadow: none;
  }

  &::before {
    content: "⯇ ";
    //color: ${Colors.HIGHLIGHT};
  }

  &::after {
    content: " ⯈";
    //color: ${Colors.HIGHLIGHT};
  }
`;

interface ButtonProps {
  href?: string;
}

export const Button: FC<ButtonProps> = props => <Link target="_parent" {...props}/>;
