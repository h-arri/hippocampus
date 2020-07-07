import React, { useState } from "react";
import { Input, Checkbox, Row, Col } from "antd";

const FilterTab = () => {
    const options = ["All", "Active", "Done", "Deleted"];
    const handleShowChange = (e) => {
        setShow(e);
    };
    const [show, setShow] = useState(["All"]);
    return (
        <Row>
            <Col span={8}>
                <Input size="large" placeholder="Search..." />
            </Col>
            <Col span={8}>
                <Checkbox.Group options={options} defaultValue={show} onChange={handleShowChange} />
            </Col>
        </Row>
    );
};

export default FilterTab;