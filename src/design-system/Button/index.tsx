import { ReactNode } from "react";
import { ButtonSolid } from "./styles";
import { To } from "react-router-dom";

interface ButtonProps {
  disabled?: boolean;
  onClick(): To;
  children?: ReactNode;
  to?: To;
}

export function Button(props: ButtonProps) {
  const { disabled = false, children, onClick, to } = props;

  return (
    <div>
      <ButtonSolid disabled={disabled} onClick={onClick} to={to}>
        {children}
      </ButtonSolid>
    </div>
  );
}
