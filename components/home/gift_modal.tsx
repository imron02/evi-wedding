import React from 'react';
import {Modal} from 'react-bootstrap';
import {MdOutlineCardGiftcard} from 'react-icons/md';
import styled from 'styled-components';
import {RiFileCopy2Line} from 'react-icons/ri';
import Image from 'next/image';

const BcaImage = "/images/bca.jpeg";
const QRImage = "/images/qr.png";

const ModalTitle = styled(Modal.Title)`
  font-family: "Quicksand Bold", sans-serif;
`;
const Heading5 = styled.h5`
  font-family: "Quicksand Bold Oblique";
`;
const Name = styled.span`
  font-family: "Quicksand Bold";
`;
const Bank = styled.b`
  font-family: "Quicksand Bold";
`;

type GiftModalProps = {
  show: boolean;
  onHide: () => void;
};
export const GiftModal = ({show, onHide}: GiftModalProps) => {
  const copyText = async (rek: string) => {
    await navigator.clipboard.writeText(rek);
    alert("Rekening berhasil disalin");
  };

  return (
    <Modal show={show} onHide={onHide} backdrop="static">
      <Modal.Header closeButton>
        <ModalTitle>Kirim Hadiah</ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center text-center flex-column">
          <div>
            <MdOutlineCardGiftcard size={50} />
          </div>
          <Heading5>
            Kirim Hadiah<br />
            <Name>Untuk Evi & Bosnia</Name>
          </Heading5>
        </div>
        <div className="mt-4">
          <Bank>BCA</Bank>
          <div className="d-flex justify-content-between">
            <span onClick={() => copyText('9999999')} style={{cursor: 'pointer'}}>
            123123123123
              <RiFileCopy2Line />
            </span>
            <Image alt="bca-image" src={BcaImage} width="100%" height={13} objectFit="scale-down" />
          </div>
          <span>A/n Evi Ida Amalia</span>
          <hr />
          <div className="text-center">
            <Image alt="qr-image" src={QRImage} width={400} height={400} objectFit="contain" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
