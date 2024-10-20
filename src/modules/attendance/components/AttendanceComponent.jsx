/* eslint-disable react/prop-types */
import { Col, Divider, Menu, Row } from "antd";
import NavBar from "../../registration/components/NavBarComponents/NavBar";
import useAttendance from "../hook/useAttendance";
import '../styles/dashboard.css'; 

const AttendanceComponent = () => {
  const { items, handleMenuClick, AttendanceDetail, chooseDate, table } = useAttendance(); 

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #c2544d, #f09107)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />

      <div
        style={{
          marginTop: "70px",
          flex: 1,
          borderTopRightRadius: "40px",
          borderTopLeftRadius: "40px",
          backgroundColor: "white",
          minHeight: "100%",
          overflow: "hidden",
        }}
      >
        <Row>
          <Col span={4}></Col>
          <Col span={20}>
            <Menu
              onClick={handleMenuClick}
              items={items}
              mode="horizontal"
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginTop: "15px",
              }}
            />
          </Col>
        </Row>

        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Divider
            style={{
              borderColor: "#000000",
              height: "4px",
              width: "100%",
              margin: "0",
            }}
          />

          <div style={{ marginTop: "20px", textAlign: "left", marginLeft: "10vw" }}>
            {AttendanceDetail()} 
          </div>

          <Divider
            style={{
              borderColor: "#979797",
              height: "4px",
              width: "100%",
              marginTop: "3vh",
            }}
          />
          
          <div style={{ marginTop: "30px", textAlign: "left", marginLeft: "10vw" }}>
            {chooseDate()} 
          </div>

          <div style={{ marginTop: "30px", textAlign: "left", marginLeft: "10vw" }}>
            {table()}  
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceComponent;
