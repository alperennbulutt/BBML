import React from "react";
import { Input } from "antd";
// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";
import miya from "assets/img/Heroes/miya.png";
import alice from "assets/img/Heroes/alice.png";
import frame from "assets/img/Heroes/frame.png";

function Players() {
  return (
    <>
      <div className="content">
        <Card>
          <CardBody
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="font-icon-detail">
              <img
                style={{ width: "200px", height: "200px" }}
                alt="miya"
                src={miya}
              />
            </div>
            <div
              style={{
                color: "red",
                borderLeft: "1px solid #6D6969",
                height: "130px",
                zIndex: "1",
                display: "flex",
                position: "absolute",
                left: "25%",
                marginTop: "5%",
              }}
            ></div>
            <div className="font-icon-detail">
              <img
                style={{ width: "200px", height: "200px" }}
                alt="alice"
                src={alice}
              />
            </div>
            <div
              style={{
                color: "purple",
                borderLeft: "1px solid #6D6969",
                height: "130px",
                zIndex: "1",
                display: "flex",
                position: "absolute",
                right: "25%",
                marginTop: "5%",
              }}
            ></div>
          </CardBody>
        </Card>
        <Card>
          <CardBody></CardBody>
        </Card>
        <Card>
          <CardBody></CardBody>
        </Card>
      </div>
    </>
  );
}

export default Players;
