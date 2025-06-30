import { ContainerButton } from "./styles";
import PropTypes from "prop-types";

export function ButtonHeader({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}

ButtonHeader.propTypes = {
  children: PropTypes.string,
};
