import { createPortal } from "react-dom";
import { FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "@components/styled/Button.styled";

const Overlay = styled.div`
  align-items: center;
  background-color: #242d346c;
  display: flex;
  inset: 0;
  justify-content: center;
  position: absolute;
`;

const Modal = styled.div`
  background-color: #000000;
  border-radius: 1rem;
  height: 71%;
  position: relative;
  width: 31%;
`;

const CloseButton = styled(Button)`
  align-items: center;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 0.7rem;
  position: absolute;
  left: 1rem;
  top: 1rem;

  &:hover {
    background-color: #181919;
  }
`;

function SignIn() {
  const navigate = useNavigate();

  const handleClickClose = () => navigate("/");

  return createPortal(
    <Overlay>
      <Modal>
        <CloseButton $variant="tertiary" onClick={handleClickClose}>
          <FaX />
        </CloseButton>
      </Modal>
    </Overlay>,
    document.body,
  );
}

export default SignIn;
