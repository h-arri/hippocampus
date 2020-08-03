import React, { useState } from "react";
import { Input, Checkbox, Row, Col } from "antd";
import "./FilterBar.css";

const FilterTab = () => {
    const options = ["All", "Active", "Done", "Deleted"];
    const [show, setShow] = useState(["All"]);
    const handleShowChange = (e) => {
        setShow(e);
    };

    return (
        <Row className="filter">
            <Col span={8}>
                <Checkbox.Group options={options} defaultValue={show} onChange={handleShowChange} />
            </Col>
            <Col span={8}>
                <Input size="large" placeholder="Search..." />
            </Col>
        </Row>
    );
};

export default FilterTab;