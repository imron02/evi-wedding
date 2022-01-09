import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Heading2 } from "../../pages/_app";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import firebase from "../../firebase/clientApp";
import { format } from "date-fns";
import { MdCheckCircle } from "react-icons/md";

const FlowerImage = "/images/flower.png";

const Section = styled.section`
  margin-bottom: 20rem;
  @media (max-device-width: 640px) {
    margin-bottom: 10rem;
  }
`;
const Heading3 = styled.h3`
  font-family: "Quicksand Bold", sans-serif;
`;
const Comment = styled(Col)`
  max-height: 400px;
  padding-top: 30px;
  padding-bottom: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  border: solid 1px #f3d5d8;
  border-radius: 20px;
  position: relative;
  background-color: #f5e2e4;
`;
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(164, 88, 97);
`;
const ShowDate = styled.small`
  color: "#6c757d";
  font-family: sans-serif;
  font-weight: 100;
`;
const Message = styled.p`
  color: black;
  font-family: Quicksand, sans-serif;
  font-weight: 100;
  padding-top: 0.5rem;
  font-size: 1rem;
`;

type Comments = {
  name: string;
  message: string;
  dates: Date;
  visit?: "hadir" | "tidak_hadir";
};

const db = firebase.firestore();
const commentsRef = db.collection("comments").orderBy("dates", "desc");
const today: Date = new Date();

export const GuestBookComponent = () => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [validated, setValidated] = useState(false);
  const [lastComment, setLastComment] = useState<any>(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    commentsRef
      .limit(20)
      .get()
      .then((querySnapshot) => {
        updateState(querySnapshot);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateState = (querySnapshot: any) => {
    const isCollectionEmpty = querySnapshot.size === 0;

    if (isCollectionEmpty) {
      setIsEmpty(true);
    }

    if (!isCollectionEmpty) {
      const newComments: Comments[] = [];
      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      querySnapshot.forEach((doc: any) => {
        const { name, message, dates, visit } = doc.data();
        newComments.push({ name, message, dates: dates.toDate(), visit });
      });
      setComments([...newComments, ...comments]);
      setLastComment(lastDoc);
    }
  };

  const fetchMoreComments = () => {
    const newComments: Comments[] = [];
    commentsRef
      .startAfter(lastComment)
      .limit(20)
      .get()
      .then((querySnapshot) => {
        updateState(querySnapshot);
      });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    db.collection("comments")
      .add({
        ...formDataObj,
        dates: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        form.reset();
        alert("Sukses kirim pesan/doa");
      });
    setValidated(true);

    // Set comments
    const newComments: Comments[] = [];
    newComments.push({
      name: String(formDataObj.name),
      message: String(formDataObj.message),
      dates: today,
      visit: formDataObj?.visit as "hadir" | "tidak_hadir",
    });
    setComments([...newComments, ...comments]);
  };

  return (
    <Section id="guest-book" className="mt-4">
      <div className="d-flex align-items-center flex-column mb-5">
        <Image src={FlowerImage} alt="Flower" width={250} height={100} />
      </div>
      <div className="text-center">
        <p>
          &quot;Tidak ada solusi yang lebih baik bagi dua insan yang saling
          mencintai di banding pernikahan.&quot;
        </p>
        <Heading3 className="mb-5">HR. Ibnu Majah</Heading3>
        <Heading2>Buku Tamu</Heading2>
      </div>
      <Row className="justify-content-center g-0 px-2">
        <Col md={7}>
          <Card className="shadow-sm p-3 mb-5 bg-body rounded">
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nama kamu"
                    name="name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Kedatangan</Form.Label>
                  <Form.Select aria-label="Kedatangan" name="visit">
                    <option value="hadir">Hadir</option>
                    <option value="tidak_hadir">Tidak Hadir</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Pesan/Doa"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Kiram pesan/doa di sini"
                      style={{ height: "100px" }}
                      name="message"
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
                <Button variant="secondary" type="submit">
                  Kirim
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center g-0 px-2 rounded">
        {comments.length !== 0 && (
          <Comment md={7}>
            {comments.map((comment, index) => {
              const dateFormat = format(comment.dates, "dd MMMM yyyy HH:mm");
              return (
                <Fragment key={index}>
                  <Row style={{ marginBottom: 20 }} className="px-3">
                    <Col
                      md={2}
                      style={{ paddingLeft: "3rem", paddingRight: "2rem" }}
                      className="d-none d-md-block"
                    >
                      <Avatar className="rounded-circle text-center">
                        <h2
                          style={{
                            top: "18%",
                            position: "relative",
                            color: "white",
                          }}
                        >
                          IR
                        </h2>
                      </Avatar>
                    </Col>
                    <Col md={10} className="pe-4">
                      <div>
                        <h5 className="fs-5 mb-0" style={{ color: "#6c757d" }}>
                          {comment.name}
                          {comment.visit === "hadir" && (
                            <span className="ms-2">
                              <MdCheckCircle />
                            </span>
                          )}
                        </h5>
                        <ShowDate className="text-muted">{dateFormat}</ShowDate>
                        <Message>{comment.message}</Message>
                      </div>
                    </Col>
                    <hr style={{ width: "90%", margin: "0 auto" }} />
                  </Row>
                </Fragment>
              );
            })}
            {!isEmpty && (
              <Row className="justify-content-center text-center">
                <Col>
                  <button
                    className="btn btn-secondary"
                    onClick={fetchMoreComments}
                  >
                    Load more
                  </button>
                </Col>
              </Row>
            )}
          </Comment>
        )}
      </Row>
    </Section>
  );
};
